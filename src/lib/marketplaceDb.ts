import fs from "fs";
import path from "path";
import {
  CommercialServiceLead,
  BodegaBusinessListing,
  CateringBooking,
} from "@/types/marketplace";
import {
  INITIAL_SERVICE_LEADS,
  INITIAL_BUSINESS_LISTINGS,
  INITIAL_CATERING_BOOKINGS,
} from "@/data/marketplaceSeed";

const DATA_DIR = path.join(process.cwd(), "data");
const MARKETPLACE_FILE = path.join(DATA_DIR, "marketplace-data.json");

interface MarketplaceStore {
  leads: CommercialServiceLead[];
  listings: BodegaBusinessListing[];
  catering: CateringBooking[];
}

function ensureStore(): MarketplaceStore {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(MARKETPLACE_FILE)) {
      const initial: MarketplaceStore = {
        leads: INITIAL_SERVICE_LEADS,
        listings: INITIAL_BUSINESS_LISTINGS,
        catering: INITIAL_CATERING_BOOKINGS,
      };
      fs.writeFileSync(MARKETPLACE_FILE, JSON.stringify(initial, null, 2), "utf8");
      return initial;
    }
    const raw = fs.readFileSync(MARKETPLACE_FILE, "utf8");
    return JSON.parse(raw);
  } catch {
    return {
      leads: INITIAL_SERVICE_LEADS,
      listings: INITIAL_BUSINESS_LISTINGS,
      catering: INITIAL_CATERING_BOOKINGS,
    };
  }
}

function saveStore(store: MarketplaceStore) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(MARKETPLACE_FILE, JSON.stringify(store, null, 2), "utf8");
  } catch {
    // ignore in read-only environment
  }
}

async function queryNeon(query: string, params: unknown[] = []): Promise<any[] | null> {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) return null;
  try {
    const parsed = new URL(dbUrl);
    const endpoint = `https://${parsed.hostname}/sql`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 1200);

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Neon-Connection-String": dbUrl,
      },
      body: JSON.stringify({ query, params }),
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    return data.rows || null;
  } catch {
    return null;
  }
}

// 1. Service Leads
export async function getServiceLeads(): Promise<CommercialServiceLead[]> {
  const store = ensureStore();
  const rows = await queryNeon("SELECT * FROM commercial_service_leads ORDER BY created_at DESC");
  if (rows && rows.length > 0) {
    const mapped: CommercialServiceLead[] = rows.map((r: any) => ({
      id: r.id,
      store_name: r.store_name,
      contact_name: r.contact_name,
      phone: r.phone,
      borough: r.borough,
      neighborhood: r.neighborhood,
      category: r.category,
      categoryKey: r.category.toLowerCase().includes("refrig")
        ? "refrigeration"
        : r.category.toLowerCase().includes("coffee")
        ? "coffee_espresso"
        : r.category.toLowerCase().includes("pos")
        ? "pos_payments"
        : r.category.toLowerCase().includes("dohmh")
        ? "dohmh_compliance"
        : "electrical_plumbing",
      urgency: r.urgency,
      description: r.description,
      status: r.status,
      est_budget: Number(r.est_budget) || 500,
      platform_fee: Number(r.platform_fee) || 35,
      assigned_contractor: r.assigned_contractor || "",
      created_at: r.created_at,
    }));
    return mapped;
  }
  return store.leads;
}

export async function createServiceLead(
  lead: CommercialServiceLead
): Promise<CommercialServiceLead> {
  const store = ensureStore();
  store.leads = [lead, ...store.leads];
  saveStore(store);

  await queryNeon(
    `INSERT INTO commercial_service_leads (id, store_name, contact_name, phone, borough, neighborhood, category, urgency, description, status, est_budget, platform_fee, assigned_contractor)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
     ON CONFLICT (id) DO NOTHING`,
    [
      lead.id,
      lead.store_name,
      lead.contact_name,
      lead.phone,
      lead.borough,
      lead.neighborhood,
      lead.category,
      lead.urgency,
      lead.description,
      lead.status,
      lead.est_budget,
      lead.platform_fee,
      lead.assigned_contractor || "",
    ]
  );

  return lead;
}

export async function claimServiceLead(
  leadId: string,
  contractorName: string
): Promise<CommercialServiceLead | null> {
  const store = ensureStore();
  const found = store.leads.find((l) => l.id === leadId);
  if (found) {
    found.status = "IN_PROGRESS";
    found.assigned_contractor = contractorName;
    saveStore(store);
  }

  await queryNeon(
    `UPDATE commercial_service_leads
     SET status = 'IN_PROGRESS', assigned_contractor = $1
     WHERE id = $2`,
    [contractorName, leadId]
  );

  return found || null;
}

// 2. Business Buy/Sell Listings
export async function getBusinessListings(): Promise<BodegaBusinessListing[]> {
  const store = ensureStore();
  const rows = await queryNeon(
    "SELECT * FROM bodega_business_listings WHERE status = 'ACTIVE' ORDER BY created_at DESC"
  );
  if (rows && rows.length > 0) {
    const mapped: BodegaBusinessListing[] = rows.map((r: any) => ({
      id: r.id,
      title: r.title,
      business_type: r.business_type,
      borough: r.borough,
      neighborhood: r.neighborhood,
      key_money_usd: Number(r.key_money_usd),
      monthly_rent_usd: Number(r.monthly_rent_usd),
      daily_gross_usd: Number(r.daily_gross_usd),
      lease_years_remaining: Number(r.lease_years_remaining),
      has_lottery: Boolean(r.has_lottery),
      has_ebt: Boolean(r.has_ebt),
      has_beer: Boolean(r.has_beer),
      seller_phone: r.seller_phone,
      description: r.description,
      is_verified: Boolean(r.is_verified),
      status: r.status,
      listing_tier: r.listing_tier,
      created_at: r.created_at,
    }));
    return mapped;
  }
  return store.listings;
}

export async function createBusinessListing(
  listing: BodegaBusinessListing
): Promise<BodegaBusinessListing> {
  const store = ensureStore();
  store.listings = [listing, ...store.listings];
  saveStore(store);

  await queryNeon(
    `INSERT INTO bodega_business_listings (id, title, business_type, borough, neighborhood, key_money_usd, monthly_rent_usd, daily_gross_usd, lease_years_remaining, has_lottery, has_ebt, has_beer, seller_phone, description, is_verified, status, listing_tier)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
     ON CONFLICT (id) DO NOTHING`,
    [
      listing.id,
      listing.title,
      listing.business_type,
      listing.borough,
      listing.neighborhood,
      listing.key_money_usd,
      listing.monthly_rent_usd,
      listing.daily_gross_usd,
      listing.lease_years_remaining,
      listing.has_lottery,
      listing.has_ebt,
      listing.has_beer,
      listing.seller_phone,
      listing.description,
      listing.is_verified,
      listing.status,
      listing.listing_tier,
    ]
  );

  return listing;
}

// 3. Catering Bookings
export async function getCateringBookings(): Promise<CateringBooking[]> {
  const store = ensureStore();
  const rows = await queryNeon("SELECT * FROM catering_bookings ORDER BY created_at DESC");
  if (rows && rows.length > 0) {
    const mapped: CateringBooking[] = rows.map((r: any) => ({
      id: r.id,
      event_title: r.event_title,
      client_name: r.client_name,
      client_phone: r.client_phone,
      client_email: r.client_email,
      event_date: r.event_date,
      borough: r.borough,
      guest_count: Number(r.guest_count),
      service_type: r.service_type,
      service_name: r.service_name || r.service_type,
      total_amount_usd: Number(r.total_amount_usd),
      deposit_paid_usd: Number(r.deposit_paid_usd),
      platform_commission_usd: Number(r.platform_commission_usd),
      caterer_id: r.caterer_id,
      caterer_name: r.caterer_name,
      status: r.status,
      created_at: r.created_at,
    }));
    return mapped;
  }
  return store.catering;
}

export async function createCateringBooking(
  booking: CateringBooking
): Promise<CateringBooking> {
  const store = ensureStore();
  store.catering = [booking, ...store.catering];
  saveStore(store);

  await queryNeon(
    `INSERT INTO catering_bookings (id, event_title, client_name, client_phone, client_email, event_date, borough, guest_count, service_type, total_amount_usd, deposit_paid_usd, platform_commission_usd, caterer_id, caterer_name, status)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
     ON CONFLICT (id) DO NOTHING`,
    [
      booking.id,
      booking.event_title,
      booking.client_name,
      booking.client_phone,
      booking.client_email,
      booking.event_date,
      booking.borough,
      booking.guest_count,
      booking.service_type,
      booking.total_amount_usd,
      booking.deposit_paid_usd,
      booking.platform_commission_usd,
      booking.caterer_id,
      booking.caterer_name,
      booking.status,
    ]
  );

  return booking;
}
