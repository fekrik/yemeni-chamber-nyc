import { NextRequest, NextResponse } from "next/server";
import {
  getBusinessListings,
  createBusinessListing,
} from "@/lib/marketplaceDb";
import { BodegaBusinessListing } from "@/types/marketplace";

export async function GET() {
  const listings = await getBusinessListings();
  return NextResponse.json({ listings });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const id = `biz-listing-${Date.now().toString(36)}`;

    const newListing: BodegaBusinessListing = {
      id,
      title: String(body.title || "NYC Bodega / Storefront for Sale"),
      business_type: String(body.business_type || "Bodega & Grocery"),
      borough: body.borough || "Brooklyn",
      neighborhood: String(body.neighborhood || "NYC"),
      key_money_usd: Number(body.key_money_usd) || 120000,
      monthly_rent_usd: Number(body.monthly_rent_usd) || 4500,
      daily_gross_usd: Number(body.daily_gross_usd) || 3000,
      lease_years_remaining: Number(body.lease_years_remaining) || 5,
      has_lottery: Boolean(body.has_lottery),
      has_ebt: Boolean(body.has_ebt),
      has_beer: Boolean(body.has_beer),
      seller_phone: String(body.seller_phone || "(718) 555-0000"),
      description: String(body.description || ""),
      is_verified: true,
      status: "ACTIVE",
      listing_tier: body.listing_tier || "FEATURED",
      created_at: new Date().toISOString(),
    };

    const saved = await createBusinessListing(newListing);
    return NextResponse.json({ listing: saved }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to create business listing" },
      { status: 500 }
    );
  }
}
