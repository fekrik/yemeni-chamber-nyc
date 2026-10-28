export type LeadUrgency =
  | "EMERGENCY_IMMEDIATE"
  | "URGENT_24H"
  | "STANDARD_48H";

export type LeadCategory =
  | "refrigeration"
  | "coffee_espresso"
  | "pos_payments"
  | "electrical_plumbing"
  | "dohmh_compliance"
  | "glass_awnings";

export interface CommercialServiceLead {
  id: string;
  store_name: string;
  contact_name: string;
  phone: string;
  borough: "Bronx" | "Brooklyn" | "Manhattan" | "Queens" | "Staten Island";
  neighborhood: string;
  category: string;
  categoryKey: LeadCategory;
  urgency: LeadUrgency;
  description: string;
  status: "OPEN" | "IN_PROGRESS" | "COMPLETED";
  est_budget: number;
  platform_fee: number;
  assigned_contractor?: string;
  created_at?: string;
}

export interface BodegaBusinessListing {
  id: string;
  title: string;
  business_type: string;
  borough: "Bronx" | "Brooklyn" | "Manhattan" | "Queens" | "Staten Island";
  neighborhood: string;
  key_money_usd: number;
  monthly_rent_usd: number;
  daily_gross_usd: number;
  lease_years_remaining: number;
  has_lottery: boolean;
  has_ebt: boolean;
  has_beer: boolean;
  seller_phone: string;
  description: string;
  is_verified: boolean;
  status: "ACTIVE" | "UNDER_CONTRACT" | "SOLD";
  listing_tier: "PREMIUM_VERIFIED" | "FEATURED" | "STANDARD";
  created_at?: string;
}

export interface CateringBooking {
  id: string;
  event_title: string;
  client_name: string;
  client_phone: string;
  client_email: string;
  event_date: string;
  borough: string;
  guest_count: number;
  service_type: "qahwah_bar" | "mandi_banquet" | "full_hospitality";
  service_name: string;
  total_amount_usd: number;
  deposit_paid_usd: number;
  platform_commission_usd: number;
  caterer_id: string;
  caterer_name: string;
  status: "CONFIRMED" | "PENDING_DEPOSIT" | "COMPLETED";
  created_at?: string;
}

export interface VerifiedContractor {
  id: string;
  company_name: string;
  contact_person: string;
  phone: string;
  specialty: string;
  specialtyKey: LeadCategory;
  service_boroughs: string[];
  response_time: string;
  verified_status: boolean;
  rating: number;
  total_jobs_completed: number;
}
