"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  Smartphone,
  ChevronRight,
  TrendingUp,
  CreditCard,
  MessageSquare,
  ArrowLeft,
  ExternalLink,
  Sliders,
  Send,
} from "lucide-react";
import {
  INITIAL_SERVICE_LEADS,
  INITIAL_BUSINESS_LISTINGS,
  INITIAL_CATERING_BOOKINGS,
  REAL_COMMERCIAL_CONTRACTORS,
} from "@/data/marketplaceSeed";
import {
  CommercialServiceLead,
  BodegaBusinessListing,
  CateringBooking,
  LeadUrgency,
} from "@/types/marketplace";

export default function DukkaniPrototypePage() {
  const [lang, setLang] = useState<"en" | "ar">("ar");
  const isAr = lang === "ar";

  // Active Role Simulator:
  // "merchant" = Bodega / Cafe Store Owner (صاحب الدكّان)
  // "contractor" = Commercial HVAC / Equipment Tech (فني الصيانة والمقاول)
  // "corporate" = Corporate / Event Catering Client (مشتري الضيافة)
  // "admin" = Platform Founder / Economics Dashboard (لوحة أرباح دُكّاني)
  const [activeRole, setActiveRole] = useState<
    "merchant" | "contractor" | "corporate" | "admin"
  >("merchant");

  // Live State for Prototype
  const [leads, setLeads] = useState<CommercialServiceLead[]>(INITIAL_SERVICE_LEADS);
  const [listings, setListings] = useState<BodegaBusinessListing[]>(
    INITIAL_BUSINESS_LISTINGS
  );
  const [cateringBookings, setCateringBookings] = useState<CateringBooking[]>(
    INITIAL_CATERING_BOOKINGS
  );

  // Revenue Counters (Updated live during user interactions!)
  const [platformEarnings, setPlatformEarnings] = useState({
    leadFees: 35 * 3, // 3 leads claimed
    listingFees: 99 * 3, // 3 listings
    cateringCommissions: 330 + 570, // 2 completed bookings
  });

  // SOS Simulation Form
  const [sosStoreName, setSosStoreName] = useState("Dar Alhajr Market & Wholesale");
  const [sosBorough, setSosBorough] = useState("Bronx (Morris Park)");
  const [sosCategory, setSosCategory] = useState("Commercial Walk-in Refrigeration");
  const [sosBudget, setSosBudget] = useState(1400);
  const [sosUrgency, setSosUrgency] = useState<LeadUrgency>("EMERGENCY_IMMEDIATE");
  const [sosDesc, setSosDesc] = useState(
    "Walk-in cooler compressor fan stopped at 4:30 PM. Temp is 50°F. $12k of milk, cold cuts & cheese at risk of spoiling tonight. Need certified tech with R-404A parts immediately."
  );
  const [sosSubmittedNotice, setSosSubmittedNotice] = useState(false);

  // Contractor Claim Modal State
  const [claimModalLead, setClaimModalLead] = useState<CommercialServiceLead | null>(
    null
  );
  const [claimedPhoneUnlocked, setClaimedPhoneUnlocked] = useState<string | null>(
    null
  );
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Catering Interactive Calculator
  const [catGuests, setCatGuests] = useState(120);
  const [catType, setCatType] = useState<"qahwah_bar" | "mandi_banquet">(
    "qahwah_bar"
  );
  const [catClientName, setCatClientName] = useState("Columbia Arab Student Association");
  const [catSuccessMsg, setCatSuccessMsg] = useState("");

  const catPricePerHead = catType === "mandi_banquet" ? 18 : 14;
  const catTotal = catGuests * catPricePerHead;
  const catDeposit = Math.round(catTotal * 0.3);
  const catPlatformFee = Math.round(catTotal * 0.15);

  // Economics Simulator Sliders
  const [simMonthlySosLeads, setSimMonthlySosLeads] = useState(45);
  const [simMonthlyListings, setSimMonthlyListings] = useState(8);
  const [simMonthlyCatering, setSimMonthlyCatering] = useState(12);

  const simSosRevenue = simMonthlySosLeads * 35;
  const simListingRevenue = simMonthlyListings * 99;
  const simCateringRevenue = simMonthlyCatering * (2000 * 0.15); // avg $2,000 order * 15%
  const simTotalMonthlyNet = simSosRevenue + simListingRevenue + simCateringRevenue;
  const simAnnualNet = simTotalMonthlyNet * 12;

  // Handler: Merchant Posts SOS
  function handleBroadcastSos(e: React.FormEvent) {
    e.preventDefault();
    const newLead: CommercialServiceLead = {
      id: `lead-sos-${Date.now().toString(36)}`,
      store_name: sosStoreName,
      contact_name: "Abu Yazan Al-Yafai",
      phone: "(718) 555-0819",
      borough: "Bronx",
      neighborhood: "Morris Park (Little Yemen)",
      category: sosCategory,
      categoryKey: "refrigeration",
      urgency: sosUrgency,
      description: sosDesc,
      status: "OPEN",
      est_budget: sosBudget,
      platform_fee: 35,
      created_at: new Date().toISOString(),
    };
    setLeads([newLead, ...leads]);
    setSosSubmittedNotice(true);
    setTimeout(() => setSosSubmittedNotice(false), 5000);
  }

  // Handler: Contractor Claims Lead ($35 fee)
  function handleConfirmClaim() {
    if (!claimModalLead) return;
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setLeads((prev) =>
        prev.map((l) =>
          l.id === claimModalLead.id
            ? {
                ...l,
                status: "IN_PROGRESS",
                assigned_contractor: "Commercial Cooling 24/7 Service (NYC)",
              }
            : l
        )
      );
      setPlatformEarnings((prev) => ({
        ...prev,
        leadFees: prev.leadFees + 35,
      }));
      setClaimedPhoneUnlocked(claimModalLead.id);
      setClaimModalLead(null);
    }, 900);
  }

  // Handler: Book Corporate Catering
  function handleConfirmCatering(e: React.FormEvent) {
    e.preventDefault();
    const newBooking: CateringBooking = {
      id: `cat-${Date.now().toString(36)}`,
      event_title: `${catClientName} — Cultural Gathering`,
      client_name: catClientName,
      client_phone: "(212) 555-0391",
      client_email: "events@columbia.edu",
      event_date: "2026-11-22",
      borough: "Manhattan",
      guest_count: catGuests,
      service_type: catType,
      service_name:
        catType === "mandi_banquet"
          ? "Authentic Slow-Pit Lamb Mandi & Saffron Rice Buffet"
          : "Live Yemeni Qahwah & Adani Chai Bar + Honeycomb Pastries",
      total_amount_usd: catTotal,
      deposit_paid_usd: catDeposit,
      platform_commission_usd: catPlatformFee,
      caterer_id: "biz-1",
      caterer_name: "Qahwah House (Williamsburg) & Yemen Cafe (Atlantic Ave)",
      status: "CONFIRMED",
      created_at: new Date().toISOString(),
    };
    setCateringBookings([newBooking, ...cateringBookings]);
    setPlatformEarnings((prev) => ({
      ...prev,
      cateringCommissions: prev.cateringCommissions + catPlatformFee,
    }));
    setCatSuccessMsg(
      isAr
        ? `تم حجز الضيافة لـ ${catGuests} ضيفاً بمبلغ $${catTotal.toLocaleString()}! تم قيد عمولة دُكّاني ($${catPlatformFee.toLocaleString()})`
        : `Catering confirmed for ${catGuests} guests ($${catTotal.toLocaleString()})! Dukkani platform cut: +$${catPlatformFee}`
    );
    setTimeout(() => setCatSuccessMsg(""), 6000);
  }

  const totalPlatformCash =
    platformEarnings.leadFees +
    platformEarnings.listingFees +
    platformEarnings.cateringCommissions;

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-[#070A09] text-stone-100 selection:bg-amber-500 selection:text-stone-950 font-sans"
    >
      {/* Top Prototype Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#070A09]/95 backdrop-blur-md border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white transition"
              title="Return to Chamber Homepage"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-sm">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base text-white tracking-tight">
                    {isAr ? "دُكّاني نيويورك" : "Dukkani NYC"}
                  </span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    Live Prototype
                  </span>
                </div>
                <p className="text-[11px] text-stone-400 hidden sm:block">
                  {isAr
                    ? "شبكة طوارئ الصيانة والصفقات التجارية لمحلات البوديقا والمقاهي"
                    : "The Commercial Repair & Services Network for NYC Bodegas & Cafes"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Telemetry & Language Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800">
              <span className="text-[11px] text-stone-400">
                {isAr ? "أرباح منصة دُكّاني المجربة:" : "Dukkani Revenue:"}
              </span>
              <span className="text-sm font-black text-emerald-400 font-mono">
                +${totalPlatformCash.toLocaleString()} USD
              </span>
            </div>

            <div className="sm:hidden px-2 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-mono font-black text-emerald-400">
              +${totalPlatformCash.toLocaleString()}
            </div>

            <button
              onClick={() => setLang(isAr ? "en" : "ar")}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-xs font-bold text-amber-400 transition"
            >
              {isAr ? "EN" : "العربية"}
            </button>
          </div>
        </div>

        {/* Interactive Persona / Role Switcher Strip */}
        <div className="border-t border-stone-800/80 bg-stone-950/90 px-3 sm:px-4 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 text-xs">
            <span className="text-stone-400 font-semibold text-[11px] uppercase tracking-wider hidden lg:inline">
              {isAr ? "اختر المنظور لتجربة دُكّاني:" : "Switch Interactive Persona:"}
            </span>

            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-1.5 sm:gap-2 w-full lg:w-auto">
              <button
                onClick={() => setActiveRole("merchant")}
                className={`p-2.5 sm:px-3.5 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition flex items-center justify-center gap-1 sm:gap-1.5 text-center ${
                  activeRole === "merchant"
                    ? "bg-amber-500 text-stone-950 shadow-md"
                    : "bg-stone-900 text-stone-300 hover:text-white"
                }`}
              >
                <Store className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">
                  {isAr
                    ? "١. صاحب الدكّان (SOS)"
                    : "1. Store Owner (SOS)"}
                </span>
              </button>

              <button
                onClick={() => setActiveRole("contractor")}
                className={`p-2.5 sm:px-3.5 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition flex items-center justify-center gap-1 sm:gap-1.5 text-center ${
                  activeRole === "contractor"
                    ? "bg-amber-500 text-stone-950 shadow-md"
                    : "bg-stone-900 text-stone-300 hover:text-white"
                }`}
              >
                <Wrench className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">
                  {isAr
                    ? "٢. فني الصيانة ($35)"
                    : "2. HVAC Tech ($35)"}
                </span>
              </button>

              <button
                onClick={() => setActiveRole("corporate")}
                className={`p-2.5 sm:px-3.5 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition flex items-center justify-center gap-1 sm:gap-1.5 text-center ${
                  activeRole === "corporate"
                    ? "bg-amber-500 text-stone-950 shadow-md"
                    : "bg-stone-900 text-stone-300 hover:text-white"
                }`}
              >
                <Coffee className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">
                  {isAr
                    ? "٣. مشتري الضيافة"
                    : "3. Corporate Catering"}
                </span>
              </button>

              <button
                onClick={() => setActiveRole("admin")}
                className={`p-2.5 sm:px-3.5 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition flex items-center justify-center gap-1 sm:gap-1.5 text-center ${
                  activeRole === "admin"
                    ? "bg-emerald-500 text-stone-950 shadow-md"
                    : "bg-stone-900 text-emerald-400 hover:text-white border border-emerald-500/30"
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">
                  {isAr ? "٤. حاسبة الأرباح" : "4. Profit Calculator"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* ============================================================== */}
        {/* ROLE 1: BODEGA / CAFE STORE OWNER (POST SOS BREAKDOWN) */}
        {/* ============================================================== */}
        {activeRole === "merchant" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-950/40 via-stone-900 to-stone-900 border border-amber-500/30 rounded-3xl p-6 sm:p-7 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-bold">
                <Store className="w-3.5 h-3.5" />
                {isAr
                  ? "أنت الآن في دور: صاحب الدكّان أو البوديقا (التاجر)"
                  : "You are testing as: Bodega or Cafe Store Owner"}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {isAr
                  ? "تعطلت ثلاجة اللحوم أو ماكينة الإسبريسو في وقت متأخر؟ أرسل نداء طوارئ SOS عبر دُكّاني"
                  : "Walk-in Cooler or Espresso Machine Down? Send Immediate SOS via Dukkani"}
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 max-w-3xl leading-relaxed">
                {isAr
                  ? "بدلاً من إرسال رسائل عشوائية في جروبات الواتساب وانتظار ساعات بينما تفسد بضاعة بآلاف الدولارات، يرسل التاجر نداء طوارئ بضغطة زر ليصل فوراً إلى فنيي الصيانة المعتمدين ثنائيي اللغة في نيويورك."
                  : "Instead of panicking in chaotic WhatsApp groups while $10,000 of deli meats and milk spoil, store owners broadcast a 1-click SOS to certified bilingual NYC commercial technicians."}
              </p>
            </div>

            {sosSubmittedNotice && (
              <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-500 text-emerald-200 text-xs sm:text-sm font-semibold flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  {isAr
                    ? "تم إرسال نداء الطوارئ بنجاح! تم إخطار فنيي التبريد المعتمدين في البرونكس عبر الواتساب والـ SMS."
                    : "SOS Broadcast Dispatched! Verified commercial technicians in the Bronx were alerted via WhatsApp/SMS."}
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left: The SOS Dispatch Form */}
              <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-3xl p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    {isAr ? "نموذج طوارئ دُكّاني الفوري" : "Dukkani Emergency SOS Dispatch"}
                  </h3>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-bold">
                    {isAr ? "استجابة أقل من ساعتين" : "< 2hr SLA"}
                  </span>
                </div>

                <form onSubmit={handleBroadcastSos} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block text-stone-400 mb-1">
                      {isAr ? "اسم الدكّان والموقع *" : "Store Name & Borough *"}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        required
                        value={sosStoreName}
                        onChange={(e) => setSosStoreName(e.target.value)}
                        className="px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white text-xs"
                      />
                      <input
                        type="text"
                        value={sosBorough}
                        onChange={(e) => setSosBorough(e.target.value)}
                        className="px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-stone-400 mb-1">
                        {isAr ? "نوع العطل" : "Issue Category"}
                      </label>
                      <select
                        value={sosCategory}
                        onChange={(e) => setSosCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white text-xs"
                      >
                        <option value="Commercial Walk-in Refrigeration">
                          {isAr ? "تبريد تجاري / ثلاجة Walk-in" : "Commercial Refrigeration"}
                        </option>
                        <option value="Commercial Espresso Machine Boiler">
                          {isAr ? "ماكينة قهوة مختصة / غلاية" : "Espresso Machine / Boiler"}
                        </option>
                        <option value="NYC Dual-Pricing POS Terminal">
                          {isAr ? "نظام كاشير / بطاقات EBT" : "POS / Dual-Pricing / EBT"}
                        </option>
                        <option value="DOHMH Health Inspection Defense">
                          {isAr ? "تفتيش صحة DOHMH / فخاخ دهون" : "DOHMH Inspection Prep"}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-stone-400 mb-1">
                        {isAr ? "الميزانية المتوقعة للإصلاح ($)" : "Est. Repair Budget ($)"}
                      </label>
                      <input
                        type="number"
                        value={sosBudget}
                        onChange={(e) => setSosBudget(Number(e.target.value))}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-400 mb-1">
                      {isAr ? "تفاصيل المشكلة الطارئة *" : "Emergency Problem Details *"}
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={sosDesc}
                      onChange={(e) => setSosDesc(e.target.value)}
                      className="w-full p-3 rounded-xl bg-stone-950 border border-stone-700 text-white text-xs leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-amber-600 to-red-600 hover:from-red-500 hover:to-amber-500 text-white font-black text-xs sm:text-sm shadow-xl shadow-red-600/25 flex items-center justify-center gap-2 transition"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isAr
                        ? "إرسال نداء الطوارئ الفوري لفنيي نيويورك (SOS)"
                        : "Broadcast Emergency SOS to Verified Contractors"}
                    </span>
                  </button>
                </form>
              </div>

              {/* Right: Mock Smartphone Showing Real-Time WhatsApp Alert */}
              <div className="lg:col-span-5 bg-stone-950 border border-stone-800 rounded-3xl p-5 space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-400 border-b border-stone-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold text-white">
                      {isAr ? "محاكاة رسائل واتساب دُكّاني" : "Dukkani WhatsApp Bot Feed"}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    ● Bot Active
                  </span>
                </div>

                <div className="bg-[#0b141a] rounded-2xl p-4 border border-emerald-950 space-y-3 font-sans text-xs">
                  <div className="bg-[#1f2c34] p-3 rounded-2xl rounded-tr-none text-stone-200 space-y-1.5 shadow">
                    <div className="flex items-center justify-between text-[11px] text-emerald-400 font-bold">
                      <span>🚨 نداء طوارئ جديد — منصة دُكّاني</span>
                      <span className="text-[10px] text-stone-400 font-normal">
                        Just Now
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      <strong>المحل:</strong> {sosStoreName} ({sosBorough})<br />
                      <strong>العطل:</strong> {sosCategory}<br />
                      <strong>الميزانية:</strong> ${sosBudget.toLocaleString()} USD<br />
                      <strong>الوصف:</strong> &ldquo;{sosDesc}&rdquo;
                    </p>
                    <div className="pt-1.5 border-t border-stone-700 text-[10px] text-amber-300 font-mono flex items-center justify-between">
                      <span>رسم فتح الاتصال: $35</span>
                      <span className="underline cursor-pointer">
                        dukkani.nyc/claim/801
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="text-[10px] px-2 py-1 rounded-full bg-stone-900 text-stone-400">
                      {isAr
                        ? "يتم إرسال هذا التنبيه آلياً لـ 12 فني معتمد في المنطقة"
                        : "Broadcasted in real time to certified local technicians"}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800 text-xs text-stone-400 leading-relaxed">
                  <span className="font-bold text-white block mb-1">
                    {isAr ? "كيف تحقق منصة دُكّاني الأرباح؟" : "How Dukkani Generates Profit:"}
                  </span>
                  {isAr
                    ? "يدفع الفني أو شركة الصيانة 35 دولاراً كرسوم ربط مباشر بالتاجر (Lead Fee) لاستلام بيانات المحل ورقم هاتف المدير فوراً والذهاب للموقع."
                    : "Contractors pay a $35 instant unlock fee to access the store manager's direct line and address, locking in a $1,200+ repair job."}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ROLE 2: COMMERCIAL CONTRACTOR / HVAC TECH (CLAIM $35 LEAD) */}
        {/* ============================================================== */}
        {activeRole === "contractor" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-950/40 via-stone-900 to-stone-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-7 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold">
                <Wrench className="w-3.5 h-3.5" />
                {isAr
                  ? "أنت الآن في دور: فني الصيانة أو مقاول التبريد التجاري"
                  : "You are testing as: Commercial HVAC / Equipment Contractor"}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {isAr
                  ? "تصفح طلبات الصيانة العاجلة وادفع $35 لفتح الاتصال بالتاجر فوراً"
                  : "Browse Open SOS Service Calls & Pay $35 to Claim Direct Contact"}
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 max-w-3xl leading-relaxed">
                {isAr
                  ? "كفني صيانة أو شركة مقاولات، تدفع 35 دولاراً فقط للحصول على طلب إصلاح جاهز بميزانية تتراوح بين 600 إلى 2,500 دولار مع تاجر جاهز ومحتاج لخدمتك في الحال."
                  : "As a contractor, you pay just $35 to claim an active commercial repair lead worth $600–$2,500 with a store owner ready to pay on the spot."}
              </p>
            </div>

            {/* Leads Feed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {leads.map((lead) => {
                const isClaimed =
                  lead.status === "IN_PROGRESS" || claimedPhoneUnlocked === lead.id;
                return (
                  <div
                    key={lead.id}
                    className="bg-stone-900 border border-stone-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${
                            lead.urgency === "EMERGENCY_IMMEDIATE"
                              ? "bg-red-500/15 text-red-300 border-red-500/40 animate-pulse"
                              : "bg-amber-500/15 text-amber-300 border-amber-500/40"
                          }`}
                        >
                          {lead.urgency === "EMERGENCY_IMMEDIATE"
                            ? isAr
                              ? "طوارئ قصوى (< ساعتين)"
                              : "Emergency (<2h)"
                            : isAr
                            ? "عاجل خلال اليوم"
                            : "Urgent (<24h)"}
                        </span>
                        <span className="text-xs text-stone-400">
                          {lead.borough} · {lead.neighborhood}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-white">
                          {lead.store_name}
                        </h4>
                        <p className="text-xs text-amber-400 font-semibold mt-0.5">
                          {lead.category}
                        </p>
                      </div>

                      <p className="text-xs text-stone-300 bg-stone-950 p-3 rounded-xl border border-stone-800 leading-relaxed">
                        &ldquo;{lead.description}&rdquo;
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-800 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <div>
                          <span className="text-stone-400 block text-[11px]">
                            {isAr ? "ميزانية الإصلاح المتوقعة" : "Est. Repair Ticket"}
                          </span>
                          <span className="text-sm font-black text-emerald-400">
                            ${lead.est_budget.toLocaleString()} USD
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-stone-400 block text-[11px]">
                            {isAr ? "رسم فتح الطلب لمنصة دُكّاني" : "Dukkani Lead Fee"}
                          </span>
                          <span className="text-xs font-bold text-amber-300">
                            ${lead.platform_fee} USD
                          </span>
                        </div>
                      </div>

                      {isClaimed ? (
                        <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs font-bold space-y-1">
                          <div className="flex items-center justify-between">
                            <span>✓ {isAr ? "تم فتح البيانات:" : "Lead Unlocked:"}</span>
                            <span className="font-mono text-white text-sm">
                              {lead.phone}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 pt-1">
                            <a
                              href={`tel:${lead.phone.replace(/[^0-9]/g, "")}`}
                              className="flex-1 py-1.5 rounded-lg bg-emerald-500 text-stone-950 text-center font-bold text-xs"
                            >
                              {isAr ? "اتصال بالتاجر فوراً" : "Call Store Directly"}
                            </a>
                            <a
                              href={`https://wa.me/1${lead.phone.replace(/[^0-9]/g, "")}`}
                              target="_blank"
                              rel="noreferrer"
                              className="px-3 py-1.5 rounded-lg bg-stone-900 text-emerald-400 border border-emerald-500/30 text-xs"
                            >
                              WhatsApp
                            </a>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => setClaimModalLead(lead)}
                          className="w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs flex items-center justify-center gap-1.5 transition shadow"
                        >
                          <CreditCard className="w-3.5 h-3.5" />
                          <span>
                            {isAr
                              ? `ادفع $${lead.platform_fee} لفتح رقم التاجر واستلام العمل`
                              : `Pay $${lead.platform_fee} to Claim & Unlock Phone`}
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sourced Commercial Contractors Directory */}
            <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-7 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-3">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>
                      {isAr
                        ? "دليل شركات وفنيي التبريد والمعدات المعتمدين في نيويورك"
                        : "Sourced NYC Commercial Refrigeration & Espresso Providers"}
                    </span>
                  </h3>
                  <p className="text-xs text-stone-400">
                    {isAr
                      ? "فنيون تجاريون موثوقون متاحون للطوارئ على مدار الساعة في البرونكس وبروكلين ومانهاتن."
                      : "Direct commercial repair dispatch contacts with active on-site service in Brooklyn, Bronx & Manhattan."}
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30">
                  {REAL_COMMERCIAL_CONTRACTORS.length} {isAr ? "فني معتمد" : "Verified Providers"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {REAL_COMMERCIAL_CONTRACTORS.map((tech) => (
                  <div
                    key={tech.id}
                    className="bg-stone-950 p-4 rounded-2xl border border-stone-800 space-y-2.5 hover:border-amber-500/30 transition text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase">
                        {tech.response_time}
                      </span>
                      <span className="text-emerald-400 font-bold">
                        ★ {tech.rating} ({tech.total_jobs_completed} jobs)
                      </span>
                    </div>

                    <h5 className="font-bold text-white text-sm leading-snug">
                      {tech.company_name}
                    </h5>

                    <p className="text-[11px] text-stone-400">
                      {tech.specialty}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {tech.service_boroughs.map((b, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-stone-900 text-stone-300"
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between">
                      <span className="font-mono text-amber-400 font-bold text-xs">
                        {tech.phone}
                      </span>
                      <a
                        href={`tel:${tech.phone.replace(/[^0-9]/g, "")}`}
                        className="px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-white font-semibold text-[11px] flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3 text-emerald-400" />
                        <span>{isAr ? "اتصال" : "Call"}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ROLE 3: CORPORATE CATERING BUYER (BOOK QAHWAH / MANDI FEAST) */}
        {/* ============================================================== */}
        {activeRole === "corporate" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-950/40 via-stone-900 to-stone-900 border border-amber-500/30 rounded-3xl p-6 sm:p-7 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-bold">
                <Coffee className="w-3.5 h-3.5" />
                {isAr
                  ? "أنت الآن في دور: مشتري ضيافة الشركات والمؤتمرات"
                  : "You are testing as: Corporate Event Coordinator / Office Host"}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {isAr
                  ? "احجز محطة القهوة اليمنية الحية أو بوفيه المندي لفعاليتك بنيويورك"
                  : "Book Pop-Up Yemeni Specialty Qahwah Bar or Mandi Feast in NYC"}
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 max-w-3xl leading-relaxed">
                {isAr
                  ? "الشركات في مانهاتن والمؤسسات والجامعات تبحث عن تجارب ضيافة أصيلة ومميزة. تحسب منصة دُكّاني السعر آلياً، وتستلم وديعة 30%، وتقتطع 15% كعمولة صافية للغرفة التجارية."
                  : "Companies on Wall Street, universities, and private banquets book authentic Yemeni specialty coffee and Mandi feasts. Dukkani collects a 30% deposit and takes a 15% booking commission."}
              </p>
            </div>

            {catSuccessMsg && (
              <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-500 text-emerald-200 text-xs sm:text-sm font-semibold flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{catSuccessMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Form */}
              <form
                onSubmit={handleConfirmCatering}
                className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-3xl p-6 space-y-5"
              >
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  {isAr ? "حدد تفاصيل حجز الضيافة:" : "Configure Event Experience:"}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() => setCatType("qahwah_bar")}
                    className={`cursor-pointer rounded-2xl p-4 border transition ${
                      catType === "qahwah_bar"
                        ? "bg-amber-950/40 border-amber-500 ring-2 ring-amber-500/30"
                        : "bg-stone-950 border-stone-800"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Coffee className="w-5 h-5 text-amber-400" />
                      <span className="text-xs font-bold text-amber-400">
                        $14<span className="text-[10px] text-stone-400">/guest</span>
                      </span>
                    </div>
                    <h5 className="font-bold text-white text-sm mt-2">
                      {isAr ? "بار القهوة اليمنية والشاي العدني" : "Live Qahwah & Chai Bar"}
                    </h5>
                    <p className="text-[11px] text-stone-400 mt-1">
                      {isAr
                        ? "بن حرازي مقطر طازج، شاي عدني بالحليب المبخر، وخلية نحل بالعسل السدر."
                        : "Pour-over single-origin Haraz, steaming Adani chai samovars, and fresh honeycomb pastry."}
                    </p>
                  </div>

                  <div
                    onClick={() => setCatType("mandi_banquet")}
                    className={`cursor-pointer rounded-2xl p-4 border transition ${
                      catType === "mandi_banquet"
                        ? "bg-amber-950/40 border-amber-500 ring-2 ring-amber-500/30"
                        : "bg-stone-950 border-stone-800"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Flame className="w-5 h-5 text-amber-400" />
                      <span className="text-xs font-bold text-amber-400">
                        $18<span className="text-[10px] text-stone-400">/guest</span>
                      </span>
                    </div>
                    <h5 className="font-bold text-white text-sm mt-2">
                      {isAr ? "بوفيه مندي اللحم والزربيان الكامل" : "Slow-Pit Mandi Feast"}
                    </h5>
                    <p className="text-[11px] text-stone-400 mt-1">
                      {isAr
                        ? "لحم مندي طري، أرز بسمتي بالزعفران، فخار سلتة حار، وخبز تنور طازج."
                        : "Tender slow-pit roasted lamb, saffron basmati, bubbling clay-pot Saltah & clay-oven bread."}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-300 font-semibold">
                      {isAr ? "عدد الضيوف المتوقع:" : "Guest Count:"}
                    </span>
                    <span className="font-black text-amber-400 text-sm font-mono">
                      {catGuests} {isAr ? "شخصاً" : "Guests"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={30}
                    max={350}
                    step={10}
                    value={catGuests}
                    onChange={(e) => setCatGuests(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-stone-400 mb-1">
                      {isAr ? "اسم الجهة أو الفعالية" : "Host Organization Name"}
                    </label>
                    <input
                      type="text"
                      required
                      value={catClientName}
                      onChange={(e) => setCatClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-400 mb-1">
                      {isAr ? "المنطقة (Borough)" : "NYC Borough"}
                    </label>
                    <select className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white text-xs">
                      <option>Manhattan</option>
                      <option>Brooklyn</option>
                      <option>Queens</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/20 transition flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>
                    {isAr
                      ? `دفع الوديعة ($${catDeposit.toLocaleString()}) وتأكيد الحجز`
                      : `Pay 30% Deposit ($${catDeposit.toLocaleString()}) to Lock In`}
                  </span>
                </button>
              </form>

              {/* Quotation & Platform Take-Rate Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-stone-950 via-amber-950/20 to-stone-950 border border-amber-500/30 rounded-3xl p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {isAr ? "ملخص الحساب المالي" : "Live Price Breakdown"}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                    {catGuests} Guests
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-stone-300">
                    <span>{isAr ? "إجمالي قيمة العقد:" : "Total Order Value:"}</span>
                    <span className="font-bold text-white text-sm">
                      ${catTotal.toLocaleString()} USD
                    </span>
                  </div>

                  <div className="flex justify-between text-stone-300">
                    <span>
                      {isAr ? "الوديعة المدفوعة فوراً (30%):" : "30% Deposit Collected:"}
                    </span>
                    <span className="font-bold text-amber-400">
                      ${catDeposit.toLocaleString()} USD
                    </span>
                  </div>

                  <div className="flex justify-between text-emerald-400 font-semibold pt-2 border-t border-stone-800">
                    <span>
                      {isAr ? "عمولة دُكّاني الصافية (15%):" : "Dukkani Revenue (15%):"}
                    </span>
                    <span className="font-black text-sm">
                      +${catPlatformFee.toLocaleString()} USD
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-stone-400 space-y-1">
                    <span className="font-bold text-white block">
                      {isAr ? "المطابخ والمحامص المنفذة:" : "Culinary Partner:"}
                    </span>
                    <p>
                      {catType === "mandi_banquet"
                        ? "Yemen Cafe (176 Atlantic Ave) & Hadramout Kitchen"
                        : "Qahwah House (Williamsburg) & Haraz Coffee House"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ROLE 4: PLATFORM FOUNDER ECONOMICS & UNIT SIMULATOR */}
        {/* ============================================================== */}
        {activeRole === "admin" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-950/40 via-stone-900 to-stone-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-7 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                {isAr
                  ? "لوحة أرباح دُكّاني: نموذج التدفقات النقدية والأرباح الشهرية"
                  : "Dukkani Economics: Cash Flow & Monthly Profit Simulator"}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {isAr
                  ? "كيف تحقق منصة «دُكّاني» أرباحاً شهرية تتجاوز 10,000$ في نيويورك"
                  : "How Dukkani Generates $10,000+/Month in High-Margin Profit"}
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 max-w-3xl leading-relaxed">
                {isAr
                  ? "حرك المؤشرات أدناه لتجربة حجم العمليات الشهرية وشاهد الأرباح الصافية التقديرية من رسوم الفنيين ($35)، رسوم إعلانات خلو الرِجْل ($99)، وعمولات تموين القهوة والمندي (15%)."
                  : "Adjust the interactive sliders below to simulate monthly transaction volume across contractor leads ($35), bodega sale listings ($99), and corporate catering (15%)."}
              </p>
            </div>

            {/* The 3 Sliders */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-stone-300 font-semibold">
                      {isAr
                        ? "عدد طلبات طوارئ الصيانة المفتوحة شهرياً ($35 لكل طلب)"
                        : "Monthly Emergency Repair Leads Claimed ($35/lead)"}
                    </span>
                    <span className="font-black text-amber-400 font-mono text-sm">
                      {simMonthlySosLeads} {isAr ? "طلب" : "Leads"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={200}
                    step={5}
                    value={simMonthlySosLeads}
                    onChange={(e) => setSimMonthlySosLeads(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <span className="text-[11px] text-stone-400 block mt-1">
                    = ${simSosRevenue.toLocaleString()} /mo revenue
                  </span>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-stone-300 font-semibold">
                      {isAr
                        ? "عدد محلات البوديقا المعروضة للبيع شهرياً ($99 للإعلان)"
                        : "Monthly Bodega Key Money Listings ($99/listing)"}
                    </span>
                    <span className="font-black text-amber-400 font-mono text-sm">
                      {simMonthlyListings} {isAr ? "محل" : "Listings"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={40}
                    step={1}
                    value={simMonthlyListings}
                    onChange={(e) => setSimMonthlyListings(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <span className="text-[11px] text-stone-400 block mt-1">
                    = ${simListingRevenue.toLocaleString()} /mo revenue
                  </span>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-stone-300 font-semibold">
                      {isAr
                        ? "عدد حجوزات الضيافة للشركات شهرياً (15% عمولة على ~$2,000)"
                        : "Monthly Corporate Catering Orders (15% of ~$2,000 order)"}
                    </span>
                    <span className="font-black text-amber-400 font-mono text-sm">
                      {simMonthlyCatering} {isAr ? "فعالية" : "Bookings"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={40}
                    step={1}
                    value={simMonthlyCatering}
                    onChange={(e) => setSimMonthlyCatering(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <span className="text-[11px] text-stone-400 block mt-1">
                    = ${simCateringRevenue.toLocaleString()} /mo revenue
                  </span>
                </div>
              </div>

              {/* Net Profit Output */}
              <div className="lg:col-span-5 bg-gradient-to-br from-stone-950 via-emerald-950/30 to-stone-950 border border-emerald-500/40 rounded-3xl p-6 space-y-4">
                <div className="border-b border-stone-800 pb-3">
                  <span className="text-xs uppercase tracking-wider text-stone-400 block">
                    {isAr ? "الدخل الشهري الصافي لمنصة دُكّاني" : "Projected Monthly Net Profit"}
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1 block">
                    +${simTotalMonthlyNet.toLocaleString()}
                    <span className="text-sm font-normal text-stone-400"> /mo</span>
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-400 block">
                    {isAr ? "صافي الدخل السنوي التقديري" : "Projected Annual Net Profit"}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white mt-1 block">
                    +${simAnnualNet.toLocaleString()}
                    <span className="text-xs font-normal text-stone-400"> /yr</span>
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-stone-300 space-y-1.5">
                  <div className="flex justify-between">
                    <span>{isAr ? "تكلفة التشغيل البرمجية:" : "Software Hosting (Neon + Vercel):"}</span>
                    <span className="text-emerald-400 font-mono font-bold">$0 – $20/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isAr ? "هامش الربح الصافي:" : "Estimated Profit Margin:"}</span>
                    <span className="text-emerald-400 font-mono font-bold">&gt; 95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* CLAIM LEAD CONFIRMATION MODAL */}
      {claimModalLead && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <CreditCard className="w-4 h-4" />
                <span>
                  {isAr ? "تأكيد استلام طلب الصيانة عبر دُكّاني" : "Confirm Lead Claim ($35)"}
                </span>
              </div>
              <button
                onClick={() => setClaimModalLead(null)}
                className="text-stone-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5 text-xs">
              <p className="text-white font-bold">{claimModalLead.store_name}</p>
              <p className="text-stone-400">{claimModalLead.category}</p>
              <p className="text-emerald-400 font-mono">
                {isAr ? "الميزانية المتوقعة:" : "Est Budget:"} $
                {claimModalLead.est_budget.toLocaleString()} USD
              </p>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              {isAr
                ? "سيتم خصم 35 دولاراً كرسوم استلام وإظهار رقم الهاتف المباشر وعنوان المحل فوراً للتواصل مع التاجر."
                : "You will be charged $35 to unlock the store manager's direct phone number and exact address."}
            </p>

            <button
              onClick={handleConfirmClaim}
              disabled={isProcessingPayment}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition"
            >
              <CreditCard className="w-4 h-4" />
              <span>
                {isProcessingPayment
                  ? isAr
                    ? "جاري معالجة الدفع..."
                    : "Processing Payment..."
                  : isAr
                  ? `دفع $${claimModalLead.platform_fee} وفتح رقم التاجر`
                  : `Pay $${claimModalLead.platform_fee} & Reveal Phone Number`}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
