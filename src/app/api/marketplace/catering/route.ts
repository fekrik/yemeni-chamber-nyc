import { NextRequest, NextResponse } from "next/server";
import {
  getCateringBookings,
  createCateringBooking,
} from "@/lib/marketplaceDb";
import { CateringBooking } from "@/types/marketplace";

export async function GET() {
  const bookings = await getCateringBookings();
  return NextResponse.json({ bookings });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const id = `cat-book-${Date.now().toString(36)}`;
    const guestCount = Number(body.guest_count) || 80;
    const serviceType = body.service_type || "qahwah_bar";

    // Pricing calculation:
    // Qahwah Bar: ~$14/guest
    // Mandi Buffet: ~$18/guest
    const pricePerGuest = serviceType === "mandi_banquet" ? 18 : 14;
    const totalAmount = guestCount * pricePerGuest;
    const depositPaid = Math.round(totalAmount * 0.3); // 30% deposit upfront
    const platformCommission = Math.round(totalAmount * 0.15); // 15% platform take-rate

    const newBooking: CateringBooking = {
      id,
      event_title: String(body.event_title || "NYC Corporate / Cultural Gathering"),
      client_name: String(body.client_name || "Event Host"),
      client_phone: String(body.client_phone || "(212) 555-0000"),
      client_email: String(body.client_email || "host@example.com"),
      event_date: String(body.event_date || new Date().toISOString().split("T")[0]),
      borough: body.borough || "Manhattan",
      guest_count: guestCount,
      service_type: serviceType,
      service_name:
        serviceType === "mandi_banquet"
          ? "Authentic Lamb Mandi, Fahsah & Clay-Oven Rashoush Buffet"
          : "Traditional Yemeni Qahwah & Chai Bar + Honeycomb Pastries",
      total_amount_usd: totalAmount,
      deposit_paid_usd: depositPaid,
      platform_commission_usd: platformCommission,
      caterer_id: body.caterer_id || "biz-1",
      caterer_name:
        body.caterer_name ||
        (serviceType === "mandi_banquet"
          ? "Hadhramout Mandi & Zarbian Kitchen"
          : "Haraz & Sanaa Roastery House"),
      status: "CONFIRMED",
      created_at: new Date().toISOString(),
    };

    const saved = await createCateringBooking(newBooking);
    return NextResponse.json({ booking: saved }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to create catering booking" },
      { status: 500 }
    );
  }
}
