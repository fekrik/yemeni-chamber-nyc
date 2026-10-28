"use client";

import React, { useState, useEffect } from "react";
import { Language } from "@/data/mockData";
import {
  CommercialServiceLead,
  BodegaBusinessListing,
  CateringBooking,
  LeadUrgency,
} from "@/types/marketplace";
import {
  INITIAL_SERVICE_LEADS,
  INITIAL_BUSINESS_LISTINGS,
  INITIAL_CATERING_BOOKINGS,
} from "@/data/marketplaceSeed";
import {
  Wrench,
  Store,
  Coffee,
  AlertTriangle,
  Phone,
  MapPin,
  Calendar,
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  Plus,
  ArrowUpRight,
  Sparkles,
  Clock,
  Building2,
  Users,
  Search,
  Check,
  Flame,
  BadgePercent,
  X,
} from "lucide-react";

interface DukkaniCommercialExchangeProps {
  lang: Language;
}

export default function DukkaniCommercialExchange({
  lang,
}: DukkaniCommercialExchangeProps) {
  const isAr = lang === "ar";

  const [activeTab, setActiveTab] = useState<"leads" | "listings" | "catering">(
    "leads"
  );

  const [leads, setLeads] = useState<CommercialServiceLead[]>(INITIAL_SERVICE_LEADS);
  const [listings, setListings] = useState<BodegaBusinessListing[]>(
    INITIAL_BUSINESS_LISTINGS
  );
  const [cateringBookings, setCateringBookings] = useState<CateringBooking[]>(
    INITIAL_CATERING_BOOKINGS
  );

  // Filters
  const [selectedBorough, setSelectedBorough] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Lead SOS Modal State
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [newStoreName, setNewStoreName] = useState("");
  const [newContactName, setNewContactName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newBorough, setNewBorough] = useState<
    "Bronx" | "Brooklyn" | "Manhattan" | "Queens" | "Staten Island"
  >("Brooklyn");
  const [newNeighborhood, setNewNeighborhood] = useState("");
  const [newCategory, setNewCategory] = useState("refrigeration");
  const [newUrgency, setNewUrgency] = useState<LeadUrgency>("EMERGENCY_IMMEDIATE");
  const [newDescription, setNewDescription] = useState("");
  const [submittingLead, setSubmittingLead] = useState(false);
  const [leadNotice, setLeadNotice] = useState("");

  // Claim Lead Modal / State
  const [claimingLeadId, setClaimingLeadId] = useState<string | null>(null);
  const [claimedSuccess, setClaimedSuccess] = useState<string | null>(null);

  // Store Listing Modal State
  const [isListingModalOpen, setIsListingModalOpen] = useState(false);
  const [newListingTitle, setNewListingTitle] = useState("");
  const [newBusinessType, setNewBusinessType] = useState("Bodega & Grocery");
  const [newKeyMoney, setNewKeyMoney] = useState(180000);
  const [newDailyGross, setNewDailyGross] = useState(3800);
  const [newRent, setNewRent] = useState(4800);
  const [newLeaseYears, setNewLeaseYears] = useState(7.5);
  const [newHasLottery, setNewHasLottery] = useState(true);
  const [newHasEbt, setNewHasEbt] = useState(true);
  const [newHasBeer, setNewHasBeer] = useState(true);
  const [newSellerPhone, setNewSellerPhone] = useState("");
  const [newListingDesc, setNewListingDesc] = useState("");
  const [submittingListing, setSubmittingListing] = useState(false);
  const [listingNotice, setListingNotice] = useState("");

  // Catering Calculator State
  const [cateringType, setCateringType] = useState<"qahwah_bar" | "mandi_banquet">(
    "qahwah_bar"
  );
  const [guestCount, setGuestCount] = useState(120);
  const [cateringBorough, setCateringBorough] = useState("Manhattan");
  const [cateringEventName, setCateringEventName] = useState("");
  const [cateringHostName, setCateringHostName] = useState("");
  const [cateringHostPhone, setCateringHostPhone] = useState("");
  const [cateringHostEmail, setCateringHostEmail] = useState("");
  const [cateringDate, setCateringDate] = useState("2026-11-25");
  const [submittingCatering, setSubmittingCatering] = useState(false);
  const [cateringNotice, setCateringNotice] = useState("");

  // Dynamic Catering Price
  const pricePerGuest = cateringType === "mandi_banquet" ? 18 : 14;
  const cateringTotal = guestCount * pricePerGuest;
  const cateringDeposit = Math.round(cateringTotal * 0.3);
  const cateringCommission = Math.round(cateringTotal * 0.15);

  useEffect(() => {
    async function loadData() {
      try {
        const [leadsRes, listRes, catRes] = await Promise.all([
          fetch("/api/marketplace/leads"),
          fetch("/api/marketplace/businesses"),
          fetch("/api/marketplace/catering"),
        ]);
        if (leadsRes.ok) {
          const d = await leadsRes.json();
          if (d.leads?.length) setLeads(d.leads);
        }
        if (listRes.ok) {
          const d = await listRes.json();
          if (d.listings?.length) setListings(d.listings);
        }
        if (catRes.ok) {
          const d = await catRes.json();
          if (d.bookings?.length) setCateringBookings(d.bookings);
        }
      } catch {
        // Fallback to initial seeds
      }
    }
    loadData();
  }, []);

  async function handleCreateLead(e: React.FormEvent) {
    e.preventDefault();
    if (!newStoreName.trim() || !newPhone.trim()) return;
    setSubmittingLead(true);
    try {
      const res = await fetch("/api/marketplace/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          store_name: newStoreName,
          contact_name: newContactName || "Store Manager",
          phone: newPhone,
          borough: newBorough,
          neighborhood: newNeighborhood || newBorough,
          category:
            newCategory === "refrigeration"
              ? "Commercial Refrigeration & Walk-in Cooler"
              : newCategory === "coffee_espresso"
              ? "Commercial Espresso & Coffee Tech"
              : newCategory === "pos_payments"
              ? "NYC Dual-Pricing POS & EBT Terminal"
              : newCategory === "dohmh_compliance"
              ? "DOHMH Health Inspection Prep & Grease Trap"
              : "Commercial Electric & Plumbing",
          categoryKey: newCategory,
          urgency: newUrgency,
          description: newDescription,
          est_budget: newCategory === "refrigeration" ? 1200 : 650,
        }),
      });
      if (res.ok) {
        const d = await res.json();
        setLeads((prev) => [d.lead, ...prev]);
        setIsLeadModalOpen(false);
        setLeadNotice(
          isAr
            ? "تم نشر طلب الصيانة العاجل بنجاح! سيتم إخطار الفنيين المعتمدين في منطقتك فوراً."
            : "Urgent SOS repair dispatched! Verified local contractors have been notified."
        );
        setTimeout(() => setLeadNotice(""), 6000);
        // Reset form
        setNewStoreName("");
        setNewContactName("");
        setNewPhone("");
        setNewNeighborhood("");
        setNewDescription("");
      }
    } finally {
      setSubmittingLead(false);
    }
  }

  async function handleClaimLead(leadId: string) {
    setClaimingLeadId(leadId);
    try {
      const res = await fetch("/api/marketplace/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId,
          contractorName: isAr
            ? "شركة الأمانة للمقاولات والتبريد التجاري"
            : "Al-Amana Commercial Refrigeration & HVAC LLC",
        }),
      });
      if (res.ok) {
        const d = await res.json();
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? d.lead : l))
        );
        setClaimedSuccess(leadId);
        setTimeout(() => setClaimedSuccess(null), 5000);
      }
    } finally {
      setClaimingLeadId(null);
    }
  }

  async function handleCreateListing(e: React.FormEvent) {
    e.preventDefault();
    if (!newListingTitle.trim() || !newSellerPhone.trim()) return;
    setSubmittingListing(true);
    try {
      const res = await fetch("/api/marketplace/businesses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newListingTitle,
          business_type: newBusinessType,
          borough: newBorough,
          neighborhood: newNeighborhood || newBorough,
          key_money_usd: Number(newKeyMoney),
          daily_gross_usd: Number(newDailyGross),
          monthly_rent_usd: Number(newRent),
          lease_years_remaining: Number(newLeaseYears),
          has_lottery: newHasLottery,
          has_ebt: newHasEbt,
          has_beer: newHasBeer,
          seller_phone: newSellerPhone,
          description: newListingDesc,
          listing_tier: "FEATURED",
        }),
      });
      if (res.ok) {
        const d = await res.json();
        setListings((prev) => [d.listing, ...prev]);
        setIsListingModalOpen(false);
        setListingNotice(
          isAr
            ? "تم اعتماد إدراج المحل للبيع في منصة الغرفة التجارية بنجاح!"
            : "Store listing submitted successfully to the Chamber Commercial Exchange!"
        );
        setTimeout(() => setListingNotice(""), 6000);
      }
    } finally {
      setSubmittingListing(false);
    }
  }

  async function handleBookCatering(e: React.FormEvent) {
    e.preventDefault();
    if (!cateringHostName.trim() || !cateringHostPhone.trim()) return;
    setSubmittingCatering(true);
    try {
      const res = await fetch("/api/marketplace/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_title:
            cateringEventName ||
            (cateringType === "mandi_banquet"
              ? "Authentic Yemeni Mandi Banquet"
              : "Yemeni Specialty Coffee & Chai Bar"),
          client_name: cateringHostName,
          client_phone: cateringHostPhone,
          client_email: cateringHostEmail || "host@example.com",
          event_date: cateringDate,
          borough: cateringBorough,
          guest_count: guestCount,
          service_type: cateringType,
        }),
      });
      if (res.ok) {
        const d = await res.json();
        setCateringBookings((prev) => [d.booking, ...prev]);
        setCateringNotice(
          isAr
            ? `تم تثبيت حجز الضيافة لـ ${guestCount} ضيفاً بمبلغ إجمالي $${cateringTotal.toLocaleString()}! تم تسجيل الوديعة ($${cateringDeposit.toLocaleString()}) وإخطار المطعم الشريك.`
            : `Catering booking confirmed for ${guestCount} guests ($${cateringTotal.toLocaleString()})! 30% deposit recorded.`
        );
        setTimeout(() => setCateringNotice(""), 7000);
      }
    } finally {
      setSubmittingCatering(false);
    }
  }

  // Filtered Leads
  const filteredLeads = leads.filter((l) => {
    if (selectedBorough !== "All" && l.borough !== selectedBorough) return false;
    if (selectedCategory !== "all" && l.categoryKey !== selectedCategory)
      return false;
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Executive Header Banner */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950/40 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              {isAr ? "منصة دُكّاني نيويورك التجارية" : "Dukkani NYC Merchant Network"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {isAr
                ? "دُكّاني — طوارئ الصيانة، صفقات وخلو رِجْل المحلات التجارية"
                : "Dukkani NYC — Emergency Repair SOS, Bodega Buy/Sell & Catering"}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {isAr
                ? "المنصة المركزية الموثوقة للتجار اليمنيين في نيويورك: إرسال فنيي الطوارئ (تبريد، كاشير، تفتيش)، تداول وشراء خلو رجل المحلات التجارية بضمانات رسمية، وحجز تموين المناسبات والقهوة اليمنية."
                : "The trusted commercial network for 6,000+ NYC bodega and cafe merchants: instant contractor SOS dispatch, verified store sales, and authentic corporate coffee & food catering."}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-stone-950/80 border border-stone-800 rounded-2xl px-4 py-3 text-right">
              <span className="text-[11px] text-stone-400 block uppercase font-medium">
                {isAr ? "طلبات الطوارئ النشطة" : "Active SOS Jobs"}
              </span>
              <span className="text-2xl font-black text-amber-400">
                {leads.filter((l) => l.status === "OPEN").length} {isAr ? "طلب" : "Open"}
              </span>
            </div>

            <div className="bg-stone-950/80 border border-stone-800 rounded-2xl px-4 py-3 text-right">
              <span className="text-[11px] text-stone-400 block uppercase font-medium">
                {isAr ? "محلات معروضة للبيع" : "Storefronts for Sale"}
              </span>
              <span className="text-2xl font-black text-emerald-400">
                {listings.length} {isAr ? "محل" : "Stores"}
              </span>
            </div>
          </div>
        </div>

        {/* Action Notifications */}
        {leadNotice && (
          <div className="mt-4 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-medium flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{leadNotice}</span>
          </div>
        )}
        {listingNotice && (
          <div className="mt-4 p-4 rounded-2xl bg-amber-950/80 border border-amber-500/40 text-amber-200 text-xs sm:text-sm font-medium flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
            <span>{listingNotice}</span>
          </div>
        )}
        {cateringNotice && (
          <div className="mt-4 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-medium flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{cateringNotice}</span>
          </div>
        )}

        {/* 3 Main Tab Buttons */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-stone-800 pt-5">
          <button
            onClick={() => setActiveTab("leads")}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
              activeTab === "leads"
                ? "bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20"
                : "bg-stone-950 text-stone-300 hover:text-white border border-stone-800"
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>
              {isAr
                ? "طوارئ الصيانة والمقاولين (SOS)"
                : "Contractor SOS & Emergency Dispatch"}
            </span>
            <span className="px-1.5 py-0.5 rounded-full bg-stone-900 text-amber-300 text-[10px]">
              {leads.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("listings")}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
              activeTab === "listings"
                ? "bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20"
                : "bg-stone-950 text-stone-300 hover:text-white border border-stone-800"
            }`}
          >
            <Store className="w-4 h-4" />
            <span>
              {isAr
                ? "سوق شراء وبيع المحلات (خلو رِجْل)"
                : "Bodega & Cafe Buy/Sell Exchange"}
            </span>
            <span className="px-1.5 py-0.5 rounded-full bg-stone-900 text-amber-300 text-[10px]">
              {listings.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("catering")}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
              activeTab === "catering"
                ? "bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20"
                : "bg-stone-950 text-stone-300 hover:text-white border border-stone-800"
            }`}
          >
            <Coffee className="w-4 h-4" />
            <span>
              {isAr
                ? "حجز ضيافة القهوة والمندي للشركات"
                : "Corporate Qahwah & Mandi Catering"}
            </span>
            <span className="px-1.5 py-0.5 rounded-full bg-stone-900 text-amber-300 text-[10px]">
              15% Cut
            </span>
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* TAB 1: CONTRACTOR SOS & EMERGENCY REPAIR DISPATCH */}
      {/* ============================================================== */}
      {activeTab === "leads" && (
        <div className="space-y-6">
          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-stone-900/90 border border-stone-800 rounded-2xl p-4">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-stone-400">
                {isAr ? "المنطقة:" : "Borough:"}
              </span>
              {["All", "Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"].map(
                (b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBorough(b)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                      selectedBorough === b
                        ? "bg-amber-500 text-stone-950 font-bold"
                        : "bg-stone-950 text-stone-400 hover:text-white"
                    }`}
                  >
                    {b === "All" && isAr ? "الكل" : b}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => setIsLeadModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-red-600/20 transition"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>
                {isAr ? "أرسل نداء طوارئ صيانة (SOS)" : "Post Urgent Repair SOS"}
              </span>
            </button>
          </div>

          {/* Leads Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLeads.map((lead) => {
              const isOpen = lead.status === "OPEN";
              return (
                <div
                  key={lead.id}
                  className="bg-stone-900 border border-stone-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border ${
                          lead.urgency === "EMERGENCY_IMMEDIATE"
                            ? "bg-red-500/15 text-red-300 border-red-500/40 animate-pulse"
                            : "bg-amber-500/15 text-amber-300 border-amber-500/40"
                        }`}
                      >
                        {lead.urgency === "EMERGENCY_IMMEDIATE"
                          ? isAr
                            ? "طوارئ فورية (< ساعتين)"
                            : "Emergency (<2 Hours)"
                          : isAr
                          ? "عاجل خلال ٢٤ ساعة"
                          : "Urgent (<24 Hours)"}
                      </span>

                      <span className="text-xs font-mono text-stone-400">
                        {lead.borough} · {lead.neighborhood}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white">
                        {lead.store_name}
                      </h4>
                      <p className="text-xs font-semibold text-amber-400 mt-0.5">
                        {lead.category}
                      </p>
                    </div>

                    <p className="text-xs text-stone-300 bg-stone-950 p-3 rounded-xl border border-stone-800/80 leading-relaxed">
                      &ldquo;{lead.description}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-800 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="text-stone-400 block">
                          {isAr ? "الميزانية التقديرية للإصلاح" : "Est. Repair Budget"}
                        </span>
                        <span className="text-sm font-black text-emerald-400">
                          ${lead.est_budget.toLocaleString()} USD
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-stone-400 block">
                          {isAr ? "رسم فتح بيانات الاتصال" : "Lead Unlock Fee"}
                        </span>
                        <span className="text-xs font-bold text-amber-300">
                          ${lead.platform_fee} {isAr ? "للفني" : "to Contractor"}
                        </span>
                      </div>
                    </div>

                    {claimedSuccess === lead.id ? (
                      <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs font-bold text-center">
                        {isAr
                          ? `تم فتح الاتصال! رقم التاجر: ${lead.phone}`
                          : `Lead Claimed! Merchant Direct Phone: ${lead.phone}`}
                      </div>
                    ) : isOpen ? (
                      <div className="flex items-center gap-2">
                        <button
                          disabled={claimingLeadId === lead.id}
                          onClick={() => handleClaimLead(lead.id)}
                          className="flex-1 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5 transition disabled:opacity-50"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>
                            {claimingLeadId === lead.id
                              ? isAr
                                ? "جاري الفتح..."
                                : "Unlocking..."
                              : isAr
                              ? `استلم الطلب وتواصل مع التاجر ($${lead.platform_fee})`
                              : `Claim Lead & Call Store ($${lead.platform_fee})`}
                          </span>
                        </button>

                        <a
                          href={`tel:${lead.phone.replace(/[^0-9]/g, "")}`}
                          className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold"
                          title="Call directly"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ) : (
                      <div className="py-2 px-3 rounded-xl bg-stone-950 border border-stone-800 text-stone-400 text-xs flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                          <Check className="w-3.5 h-3.5" />
                          {isAr ? "تم إسناد الطلب للفني" : "Dispatched to Contractor"}
                        </span>
                        <span className="text-[11px] truncate max-w-[180px]">
                          {lead.assigned_contractor}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 2: BODEGA & CAFE BUY/SELL KEY MONEY EXCHANGE */}
      {/* ============================================================== */}
      {activeTab === "listings" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 bg-stone-900/90 border border-stone-800 rounded-2xl p-4">
            <div>
              <h3 className="text-base font-bold text-white">
                {isAr
                  ? "بورصة خلو الرِجْل لمحلات البوديقا والمقاهي في نيويورك"
                  : "Verified NYC Bodega & Cafe Key Money Marketplace"}
              </h3>
              <p className="text-xs text-stone-400">
                {isAr
                  ? "جميع الإعلانات مفحوصة بدفاتر المبيعات اليومية وتراخيص EBT واليانصيب الرسمية."
                  : "Verified POS register tapes, lease duration, lottery net income, and EBT license standing."}
              </p>
            </div>

            <button
              onClick={() => setIsListingModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition shadow"
            >
              <Plus className="w-4 h-4" />
              <span>
                {isAr ? "اعرض محلك للبيع ($99 موثق)" : "List Store for Sale ($99)"}
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {listings.map((item) => (
              <div
                key={item.id}
                className="bg-stone-900 border border-stone-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold uppercase">
                      {item.listing_tier.replace("_", " ")}
                    </span>
                    <span className="text-xs text-stone-400">
                      {item.borough} · {item.neighborhood}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white leading-snug">
                    {item.title}
                  </h4>

                  {/* Financial Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs bg-stone-950 p-3 rounded-xl border border-stone-800">
                    <div>
                      <span className="text-stone-400 block text-[11px]">
                        {isAr ? "خلو الرِجْل المطلوب" : "Asking Key Money"}
                      </span>
                      <span className="text-base font-black text-amber-400">
                        ${item.key_money_usd.toLocaleString()}
                      </span>
                    </div>

                    <div>
                      <span className="text-stone-400 block text-[11px]">
                        {isAr ? "الدخل اليومي (POS)" : "Daily Register Gross"}
                      </span>
                      <span className="text-base font-bold text-emerald-400">
                        ${item.daily_gross_usd.toLocaleString()}
                        <span className="text-[10px] text-stone-400">/day</span>
                      </span>
                    </div>

                    <div className="pt-1.5 border-t border-stone-800/80">
                      <span className="text-stone-400 block text-[11px]">
                        {isAr ? "الإيجار الشهري" : "Monthly Rent"}
                      </span>
                      <span className="font-semibold text-white">
                        ${item.monthly_rent_usd.toLocaleString()}
                      </span>
                    </div>

                    <div className="pt-1.5 border-t border-stone-800/80">
                      <span className="text-stone-400 block text-[11px]">
                        {isAr ? "المدة المتبقية بالعقد" : "Lease Remaining"}
                      </span>
                      <span className="font-semibold text-white">
                        {item.lease_years_remaining} {isAr ? "سنوات" : "Years"}
                      </span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.has_lottery && (
                      <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 text-[10px] border border-blue-500/30 font-medium">
                        ✓ NY Lottery Active
                      </span>
                    )}
                    {item.has_ebt && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 text-[10px] border border-emerald-500/30 font-medium">
                        ✓ SNAP / EBT Approved
                      </span>
                    )}
                    {item.has_beer && (
                      <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[10px] border border-amber-500/30 font-medium">
                        ✓ SLA Beer License
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-800">
                  <a
                    href={`tel:${item.seller_phone.replace(/[^0-9]/g, "")}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 text-xs font-bold flex items-center justify-center gap-2 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>
                      {isAr
                        ? `طلب فحص الحسابات والمعاينة (${item.seller_phone})`
                        : `Contact Seller & Schedule Showing`}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 3: CORPORATE QAHWAH & MANDI CATERING BOOKING */}
      {/* ============================================================== */}
      {activeTab === "catering" && (
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                {isAr
                  ? "خدمة تموين المؤتمرات والشركات بنيويورك"
                  : "NYC Corporate & Cultural Catering Concierge"}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {isAr
                  ? "احجز بار القهوة اليمنية الفاخرة أو بوفيه المندي لفعاليتك"
                  : "Book Authentic Yemeni Specialty Coffee Bar or Mandi Feast"}
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                {isAr
                  ? "خصم وضمان الغرفة التجارية: نربط شركتك بأشهر مقاهي ومطابخ اليمن في نيويورك مع ضمان الجودة وخدمة الضيافة الكاملة."
                  : "Seamless booking for Wall Street & Silicon Alley corporate pop-ups, weddings, and universities with 15% platform fee built in."}
              </p>
            </div>

            <div className="bg-stone-950 border border-amber-500/40 rounded-2xl px-4 py-3 text-right">
              <span className="text-[11px] text-stone-400 block">
                {isAr ? "عمولة المنصة على الحجز" : "Platform Commission"}
              </span>
              <span className="text-2xl font-black text-amber-400">15%</span>
              <span className="text-[10px] text-stone-400 block">
                {isAr ? "تقتطع آلياً من كل حجز" : "Auto-collected via Stripe"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Calculator Form */}
            <form
              onSubmit={handleBookCatering}
              className="lg:col-span-7 space-y-5 bg-stone-950/70 border border-stone-800 rounded-2xl p-6"
            >
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                1. {isAr ? "حدد نوع وتفاصيل الضيافة" : "Select Experience & Guest Count"}
              </h4>

              {/* Package selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  onClick={() => setCateringType("qahwah_bar")}
                  className={`cursor-pointer rounded-xl p-4 border transition ${
                    cateringType === "qahwah_bar"
                      ? "bg-amber-950/40 border-amber-500 ring-2 ring-amber-500/30"
                      : "bg-stone-900 border-stone-800 hover:border-stone-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Coffee className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-bold text-amber-400">
                      $14<span className="text-[10px] text-stone-400">/guest</span>
                    </span>
                  </div>
                  <h5 className="font-bold text-white text-sm mt-2">
                    {isAr
                      ? "بار القهوة اليمنية والشاي العدني"
                      : "Live Qahwah & Chai Bar"}
                  </h5>
                  <p className="text-[11px] text-stone-400 mt-1">
                    {isAr
                      ? "محطة صب بن حرازي، شاي عدني بالحليب المكثف، وخلية نحل طازجة بالعسل السدر."
                      : "Single-origin Haraz pour-overs, steaming Adani chai samovars, and warm honeycomb pastry."}
                  </p>
                </div>

                <div
                  onClick={() => setCateringType("mandi_banquet")}
                  className={`cursor-pointer rounded-xl p-4 border transition ${
                    cateringType === "mandi_banquet"
                      ? "bg-amber-950/40 border-amber-500 ring-2 ring-amber-500/30"
                      : "bg-stone-900 border-stone-800 hover:border-stone-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Flame className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-bold text-amber-400">
                      $18<span className="text-[10px] text-stone-400">/guest</span>
                    </span>
                  </div>
                  <h5 className="font-bold text-white text-sm mt-2">
                    {isAr ? "بوفيه مندي وزربيان اللحم الأصيل" : "Slow-Pit Mandi Feast"}
                  </h5>
                  <p className="text-[11px] text-stone-400 mt-1">
                    {isAr
                      ? "لحم مندي طري، أرز بسمتي مع الزعفران، مدرة سلتة حارة، وخبز ملوح من التنور."
                      : "Tender slow-roasted lamb, saffron rice, bubbling clay-pot Saltah & clay-oven bread."}
                  </p>
                </div>
              </div>

              {/* Guest Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs">
                  <span className="text-stone-300 font-semibold">
                    {isAr ? "عدد الضيوف المتوقع:" : "Expected Guest Count:"}
                  </span>
                  <span className="font-black text-amber-400 text-sm">
                    {guestCount} {isAr ? "شخصاً" : "Guests"}
                  </span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={400}
                  step={10}
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Client Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs text-stone-400 mb-1">
                    {isAr ? "اسم الجهة أو المناسبة" : "Event / Company Name"}
                  </label>
                  <input
                    type="text"
                    required
                    value={cateringEventName}
                    onChange={(e) => setCateringEventName(e.target.value)}
                    placeholder="e.g. NYU Arab Gala / Tech Meetup"
                    className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs text-stone-400 mb-1">
                    {isAr ? "المنطقة (Borough)" : "NYC Borough"}
                  </label>
                  <select
                    value={cateringBorough}
                    onChange={(e) => setCateringBorough(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-white"
                  >
                    <option value="Manhattan">Manhattan</option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Queens">Queens</option>
                    <option value="Bronx">Bronx</option>
                    <option value="Staten Island">Staten Island</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-stone-400 mb-1">
                    {isAr ? "اسم المسؤول / المضيف" : "Host Contact Name"}
                  </label>
                  <input
                    type="text"
                    required
                    value={cateringHostName}
                    onChange={(e) => setCateringHostName(e.target.value)}
                    placeholder="e.g. Tariq Mansour"
                    className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs text-stone-400 mb-1">
                    {isAr ? "رقم الهاتف" : "Phone Number"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={cateringHostPhone}
                    onChange={(e) => setCateringHostPhone(e.target.value)}
                    placeholder="(212) 555-0199"
                    className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submittingCatering}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-amber-500/20"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {submittingCatering
                    ? isAr
                      ? "جاري تأكيد الحجز..."
                      : "Confirming Booking..."
                    : isAr
                    ? `تثبيت حجز الضيافة (وديعة $${cateringDeposit.toLocaleString()})`
                    : `Confirm Booking (30% Deposit: $${cateringDeposit.toLocaleString()})`}
                </span>
              </button>
            </form>

            {/* Right: Real-time Quotation Card & Platform Cut */}
            <div className="lg:col-span-5 bg-gradient-to-br from-stone-950 via-amber-950/20 to-stone-950 border border-amber-500/30 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <span className="text-xs uppercase tracking-wider text-stone-400">
                  {isAr ? "ملخص عرض السعر الرسمي" : "Official Chamber Quotation"}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                  {guestCount} Guests · ${pricePerGuest}/pp
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-stone-300">
                  <span>
                    {cateringType === "mandi_banquet"
                      ? isAr
                        ? "بوفيه المندي والزربيان الكامل"
                        : "Full Mandi & Zarbian Buffet"
                      : isAr
                      ? "محطة القهوة اليمنية والشاي العدني"
                      : "Specialty Qahwah & Chai Bar"}
                  </span>
                  <span className="font-bold text-white">
                    ${cateringTotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-stone-300">
                  <span>{isAr ? "الوديعة لتثبيت التاريخ (30%)" : "30% Deposit Required"}</span>
                  <span className="font-bold text-amber-400">
                    ${cateringDeposit.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-stone-400 pt-2 border-t border-stone-800">
                  <span>{isAr ? "عمولة المنصة الصافية (15%)" : "Platform Revenue (15%)"}</span>
                  <span className="font-bold text-emerald-400">
                    +${cateringCommission.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>
                    {isAr
                      ? "المطابخ والمقاهي الشريكة المعتمدة"
                      : "Verified Chamber Culinary Partners"}
                  </span>
                </div>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  {isAr
                    ? "يتم إسناد الطلب فوراً لمطعم حضرموت (شارع أتلانتيك) أو دار حراز وصنعاء (باي ريدج) حسب المنطقة وتوافر التاريخ."
                    : "Orders are routed to Hadhramout Kitchen (Atlantic Ave) or Haraz Roastery (Bay Ridge) with Grade-A NYC DOHMH kitchen certification."}
                </p>
              </div>

              <div className="text-center pt-2">
                <span className="text-3xl font-black text-white">
                  ${cateringTotal.toLocaleString()}
                  <span className="text-xs font-normal text-stone-400"> USD Total</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: POST SOS REPAIR */}
      {isLeadModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-stone-900 border border-stone-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-bold text-white">
                  {isAr
                    ? "إرسال نداء طوارئ صيانة فوري (SOS)"
                    : "Dispatch Emergency Store Repair SOS"}
                </h3>
              </div>
              <button
                onClick={() => setIsLeadModalOpen(false)}
                className="text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateLead} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-stone-400 mb-1">
                  {isAr ? "اسم المحل التجاري *" : "Store Name *"}
                </label>
                <input
                  type="text"
                  required
                  value={newStoreName}
                  onChange={(e) => setNewStoreName(e.target.value)}
                  placeholder="e.g. Bay Ridge Halal Deli & Grocery"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-400 mb-1">
                    {isAr ? "اسم المسؤول *" : "Contact Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={newContactName}
                    onChange={(e) => setNewContactName(e.target.value)}
                    placeholder="e.g. Abu Ahmed"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-stone-400 mb-1">
                    {isAr ? "رقم الهاتف للاتصال السريع *" : "Direct Phone *"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    placeholder="(718) 555-0100"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-400 mb-1">
                    {isAr ? "المنطقة (Borough)" : "Borough"}
                  </label>
                  <select
                    value={newBorough}
                    onChange={(e) => setNewBorough(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-700 text-white"
                  >
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Bronx">Bronx (Little Yemen)</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="Queens">Queens</option>
                    <option value="Staten Island">Staten Island</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-400 mb-1">
                    {isAr ? "نوع العطل / الصيانة" : "Issue Category"}
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-700 text-white"
                  >
                    <option value="refrigeration">
                      {isAr ? "تبريد / ثلاجة عرض / Walk-in" : "Walk-in Cooler / Refrigeration"}
                    </option>
                    <option value="coffee_espresso">
                      {isAr ? "ماكينة قهوة / غلاية إسبريسو" : "Espresso Machine / Boiler"}
                    </option>
                    <option value="pos_payments">
                      {isAr ? "كاشير / EBT / بطاقات" : "POS / Dual-Pricing / EBT"}
                    </option>
                    <option value="dohmh_compliance">
                      {isAr ? "تفتيش صحة DOHMH / فخاخ دهون" : "DOHMH Inspection / Grease Trap"}
                    </option>
                    <option value="electrical_plumbing">
                      {isAr ? "كهرباء / سباكة تجارية" : "Commercial Electric / Plumbing"}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-stone-400 mb-1">
                  {isAr ? "وصف العطل باختصار *" : "Brief Description of the Breakdown *"}
                </label>
                <textarea
                  rows={3}
                  required
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="e.g. Compressor fan stopped, temperature reaching 50F, need urgent technician tonight..."
                  className="w-full p-3 rounded-xl bg-stone-950 border border-stone-700 text-white"
                />
              </div>

              <button
                type="submit"
                disabled={submittingLead}
                className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>
                  {submittingLead
                    ? isAr
                      ? "جاري إرسال النداء..."
                      : "Broadcasting SOS..."
                    : isAr
                    ? "إرسال نداء الطوارئ للفنيين الآن"
                    : "Broadcast Repair SOS to Contractors"}
                </span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: POST STORE FOR SALE */}
      {isListingModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-stone-900 border border-stone-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">
                {isAr
                  ? "إدراج محل تجاري للبيع (خلو رِجْل)"
                  : "List Bodega / Storefront for Sale"}
              </h3>
              <button
                onClick={() => setIsListingModalOpen(false)}
                className="text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateListing} className="space-y-3 text-xs">
              <div>
                <label className="block text-stone-400 mb-1">
                  {isAr ? "عنوان الإعلان *" : "Listing Title *"}
                </label>
                <input
                  type="text"
                  required
                  value={newListingTitle}
                  onChange={(e) => setNewListingTitle(e.target.value)}
                  placeholder="e.g. Prime Corner Bodega & Halal Deli near Subway"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-400 mb-1">
                    {isAr ? "خلو الرِجْل المطلوب ($) *" : "Asking Key Money ($) *"}
                  </label>
                  <input
                    type="number"
                    required
                    value={newKeyMoney}
                    onChange={(e) => setNewKeyMoney(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-stone-400 mb-1">
                    {isAr ? "الدخل اليومي المتوسط ($)" : "Daily Register Gross ($)"}
                  </label>
                  <input
                    type="number"
                    value={newDailyGross}
                    onChange={(e) => setNewDailyGross(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-700 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-400 mb-1">
                    {isAr ? "الإيجار الشهري ($)" : "Monthly Rent ($)"}
                  </label>
                  <input
                    type="number"
                    value={newRent}
                    onChange={(e) => setNewRent(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-stone-400 mb-1">
                    {isAr ? "سنوات العقد المتبقية" : "Lease Years Remaining"}
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={newLeaseYears}
                    onChange={(e) => setNewLeaseYears(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-700 text-white"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-1">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newHasLottery}
                    onChange={(e) => setNewHasLottery(e.target.checked)}
                    className="rounded bg-stone-950 text-amber-500"
                  />
                  <span>NY Lottery</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newHasEbt}
                    onChange={(e) => setNewHasEbt(e.target.checked)}
                    className="rounded bg-stone-950 text-amber-500"
                  />
                  <span>SNAP / EBT</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newHasBeer}
                    onChange={(e) => setNewHasBeer(e.target.checked)}
                    className="rounded bg-stone-950 text-amber-500"
                  />
                  <span>Beer License</span>
                </label>
              </div>

              <div>
                <label className="block text-stone-400 mb-1">
                  {isAr ? "رقم هاتف البائع للمعاينة *" : "Seller Phone *"}
                </label>
                <input
                  type="tel"
                  required
                  value={newSellerPhone}
                  onChange={(e) => setNewSellerPhone(e.target.value)}
                  placeholder="(718) 555-0199"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white"
                />
              </div>

              <button
                type="submit"
                disabled={submittingListing}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm"
              >
                {submittingListing
                  ? isAr
                    ? "جاري الحفظ..."
                    : "Submitting..."
                  : isAr
                  ? "اعتماد الإعلان في المنصة"
                  : "Submit Verified Storefront Listing"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
