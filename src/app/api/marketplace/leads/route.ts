import { NextRequest, NextResponse } from "next/server";
import {
  getServiceLeads,
  createServiceLead,
  claimServiceLead,
} from "@/lib/marketplaceDb";
import { CommercialServiceLead } from "@/types/marketplace";

export async function GET() {
  const leads = await getServiceLeads();
  return NextResponse.json({ leads });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const id = `lead-${Date.now().toString(36)}`;

    const newLead: CommercialServiceLead = {
      id,
      store_name: String(body.store_name || "NYC Bodega / Merchant"),
      contact_name: String(body.contact_name || "Store Owner"),
      phone: String(body.phone || "(718) 555-0000"),
      borough: body.borough || "Brooklyn",
      neighborhood: String(body.neighborhood || "NYC"),
      category: String(body.category || "Commercial Equipment & Repair"),
      categoryKey: body.categoryKey || "refrigeration",
      urgency: body.urgency || "URGENT_24H",
      description: String(body.description || ""),
      status: "OPEN",
      est_budget: Number(body.est_budget) || 600,
      platform_fee: 35,
      created_at: new Date().toISOString(),
    };

    const saved = await createServiceLead(newLead);
    return NextResponse.json({ lead: saved }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to create service lead" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { leadId, contractorName } = body;
    if (!leadId) {
      return NextResponse.json({ error: "leadId is required" }, { status: 400 });
    }

    const updated = await claimServiceLead(
      leadId,
      contractorName || "Verified Chamber Contractor"
    );
    return NextResponse.json({ lead: updated });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to claim service lead" },
      { status: 500 }
    );
  }
}
