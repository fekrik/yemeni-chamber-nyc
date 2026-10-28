"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Language } from "@/data/mockData";
import { CHAMBER_EVENTS, MEMBERSHIP_TIERS } from "@/data/chamberData";
import ChamberLogo from "@/components/ChamberLogo";
import BusinessDirectory from "@/components/BusinessDirectory";
import MerchantToolkit from "@/components/MerchantToolkit";
import CoopSavingsCalculator from "@/components/CoopSavingsCalculator";
import DigitalStorefrontBuilder from "@/components/DigitalStorefrontBuilder";
import DukkaniCommercialExchange from "@/components/DukkaniCommercialExchange";
import {
  Globe,
  Building2,
  Handshake,
  Calendar,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Scale,
  Coffee,
  Store,
  Users,
  Calculator,
  Smartphone,
  ShieldCheck,
  X,
  Sparkles,
  Wrench,
} from "lucide-react";

export default function YemeniChamberNYCPage() {
  const [lang, setLang] = useState<Language>("en");
  const isAr = lang === "ar";

  const [activePlatformTool, setActivePlatformTool] = useState<
    "calculator" | "digitalize" | "compliance"
  >("calculator");

  // Interactive Membership Registration Modal
  const [joinModalTier, setJoinModalTier] = useState<string | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantBusiness, setApplicantBusiness] = useState("");
  const [applicantBorough, setApplicantBorough] = useState("Bronx");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [joinSubmitted, setJoinSubmitted] = useState(false);

  // Event RSVP state
  const [rsvpedEvents, setRsvpedEvents] = useState<Record<string, boolean>>({});

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJoinSubmitted(true);
  };

  const toggleRsvp = (eventId: string) => {
    setRsvpedEvents((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-[#0B0F0E] text-stone-100 selection:bg-amber-500 selection:text-stone-950 overflow-x-hidden"
    >
      {/* Mobile-First Executive Header */}
      <header className="sticky top-0 z-40 bg-[#0B0F0E]/95 backdrop-blur-md border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
          {/* Official Crest + Organization Name */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 group">
            <ChamberLogo size="sm" className="sm:w-12 sm:h-12" />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-sm sm:text-lg text-white tracking-tight truncate group-hover:text-amber-300 transition-colors">
                  {isAr
                    ? "الغرفة التجارية اليمنية"
                    : "Yemeni Chamber"}
                  <span className="hidden md:inline">
                    {isAr ? " في نيويورك" : " of Commerce"}
                  </span>
                </span>
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  NYC
                </span>
              </div>
              <p className="hidden sm:block text-xs text-stone-400 truncate">
                {isAr
                  ? "تمكين التاجر اليمني في مناطق نيويورك الخمس والولايات المتحدة"
                  : "Five Boroughs • National Merchant Network"}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300 shrink-0">
            <a href="#mission" className="hover:text-white transition-colors">
              {isAr ? "الرسالة والأثر" : "Mission"}
            </a>
            <a
              href="#marketplace"
              className="hover:text-white transition-colors flex items-center gap-1.5 text-amber-300 font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {isAr ? "منصة دُكّاني (SOS)" : "Dukkani (SOS)"}
            </a>
            <a href="#platform" className="hover:text-white transition-colors">
              {isAr ? "منصة التاجر الرقمية" : "Merchant Platform"}
            </a>
            <a href="#directory" className="hover:text-white transition-colors">
              {isAr ? "دليل أعمال نيويورك" : "NYC Directory"}
            </a>
            <a href="#events" className="hover:text-white transition-colors">
              {isAr ? "الفعاليات" : "Events"}
            </a>
            <a
              href="#membership"
              className="hover:text-white transition-colors"
            >
              {isAr ? "العضوية" : "Membership"}
            </a>
            <Link
              href="/dukkani"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 transition-all text-xs font-bold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? "نموذج دُكّاني الحي" : "Dukkani Live Prototype"}</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </nav>

          {/* Compact, Non-Wrapping Mobile/Desktop Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700/80 text-stone-200 font-semibold text-xs whitespace-nowrap transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{isAr ? "EN" : "العربية"}</span>
            </button>

            <button
              onClick={() => {
                setJoinModalTier(
                  isAr ? "عضوية الغرفة التجارية" : "Chamber Founding Member"
                );
                setJoinSubmitted(false);
              }}
              className="inline-flex items-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm whitespace-nowrap transition-all shadow-sm"
            >
              <span className="sm:hidden">
                {isAr ? "انضم" : "Join"}
              </span>
              <span className="hidden sm:inline">
                {isAr ? "انضم للغرفة" : "Become a Member"}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </button>
          </div>
        </div>

        {/* Mobile Quick-Jump Scrollable Bar (Only visible on < lg screens) */}
        <div className="lg:hidden border-t border-stone-800/60 bg-stone-950/80 px-3.5 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-semibold text-stone-300">
          <Link
            href="/dukkani"
            className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 whitespace-nowrap font-bold flex items-center gap-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {isAr ? "دُكّاني الحي ⚡" : "Dukkani Live ⚡"}
          </Link>
          <a
            href="#marketplace"
            className="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/25 whitespace-nowrap"
          >
            {isAr ? "دُكّاني SOS والصفقات" : "Dukkani SOS & Deals"}
          </a>
          <a
            href="#platform"
            className="px-3 py-1 rounded-lg bg-stone-900 text-stone-300 whitespace-nowrap"
          >
            {isAr ? "منصة التاجر" : "Merchant Tools"}
          </a>
          <a
            href="#directory"
            className="px-3 py-1 rounded-lg bg-stone-900 text-stone-300 whitespace-nowrap"
          >
            {isAr ? "دليل نيويورك" : "NYC Directory"}
          </a>
          <a
            href="#events"
            className="px-3 py-1 rounded-lg bg-stone-900 text-stone-300 whitespace-nowrap"
          >
            {isAr ? "الفعاليات" : "Events"}
          </a>
        </div>
      </header>

      {/* REFINED MOBILE-FRIENDLY HERO */}
      <section className="relative overflow-hidden border-b border-stone-800/80 bg-gradient-to-b from-[#0F1715] via-[#0B0F0E] to-[#0B0F0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-20 sm:pb-24">
          <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
            <div className="flex justify-center">
              <ChamberLogo size="lg" />
            </div>

            <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[11px] sm:text-xs font-semibold tracking-wide leading-snug max-w-full">
              <span className="truncate sm:whitespace-normal">
                {isAr
                  ? "المؤسسة الاقتصادية للتجار ورواد الأعمال اليمنيين • نيويورك"
                  : "YEMENI MERCHANTS & FOUNDERS • NEW YORK CITY"}
              </span>
            </div>

            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.3] sm:leading-[1.15] tracking-tight px-1">
              {isAr ? (
                <>
                  قوة شرائية موحدة، تحول رقمي، وتمثيل رسمي لأكثر من{" "}
                  <span className="text-amber-400">٦,٠٠٠ محل يمني</span> في
                  نيويورك.
                </>
              ) : (
                <>
                  Uniting{" "}
                  <span className="text-amber-400">6,000+ NYC Storefronts</span>{" "}
                  Into One Economic & Digital Powerhouse.
                </>
              )}
            </h1>

            <p className="text-sm sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto px-1">
              {isAr
                ? "من «اليمن الصغير» في البرونكس إلى باي ريدج وأتلانتيك أفينيو في بروكلين — نمكّن أصحاب البوديقا ومقاهي القهوة اليمنية المختصة عبر الشراء التعاوني، رقمنة المحلات، والحماية القانونية."
                : "Starting across New York City’s five boroughs, we empower Yemeni bodegas, specialty Qahwah houses, wholesalers, and founders with collective purchasing power, digital storefronts, and regulatory defense."}
            </p>

            {/* Primary Hero Buttons: Full-Width Stacked on Mobile, Side-by-Side on Desktop */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/dukkani"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 shrink-0 text-stone-950" />
                <span>
                  {isAr
                    ? "منصة دُكّاني: طوارئ الصيانة والصفقات (النموذج الحي)"
                    : "Launch Dukkani: SOS Tech, Bodega Deals & Catering"}
                </span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </Link>

              <a
                href="#marketplace"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-100 border border-stone-700 font-semibold text-sm transition-all inline-flex items-center justify-center gap-2"
              >
                <Wrench className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {isAr
                    ? "طلب فني طوارئ سريع (SOS)"
                    : "Emergency Repair Dispatch (SOS)"}
                </span>
              </a>

              <a
                href="#directory"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-stone-950/80 hover:bg-stone-900 text-stone-300 border border-stone-800 font-medium text-sm transition-all inline-flex items-center justify-center gap-2"
              >
                <Store className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {isAr
                    ? "دليل أعمال نيويورك"
                    : "NYC Directory"}
                </span>
              </a>
            </div>
          </div>

          {/* Clean 4-Metric Institutional Cards (2x2 on Mobile, 4x1 on Desktop) */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-stone-800/80 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            <div className="bg-stone-900/40 border border-stone-800/70 rounded-2xl p-4 sm:p-5 text-center">
              <p className="text-2xl sm:text-4xl font-black text-white">
                6,000+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-amber-400 mt-1 leading-snug">
                {isAr
                  ? "بوديقا وسوبرماركت يمني"
                  : "Yemeni-Owned Bodegas"}
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">
                {isAr ? "في مناطق نيويورك الخمس" : "Across all 5 NYC boroughs"}
              </p>
            </div>

            <div className="bg-stone-900/40 border border-stone-800/70 rounded-2xl p-4 sm:p-5 text-center">
              <p className="text-2xl sm:text-4xl font-black text-white">
                180+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1 leading-snug">
                {isAr
                  ? "مقهى قهوة يمنية مختصة"
                  : "Yemeni Qahwah Houses"}
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">
                {isAr
                  ? "تقود نهضة القهوة المختصة"
                  : "Specialty coffee renaissance"}
              </p>
            </div>

            <div className="bg-stone-900/40 border border-stone-800/70 rounded-2xl p-4 sm:p-5 text-center">
              <p className="text-2xl sm:text-4xl font-black text-white">
                15–22%
              </p>
              <p className="text-xs sm:text-sm font-semibold text-amber-400 mt-1 leading-snug">
                {isAr
                  ? "وفر الشراء الجماعي"
                  : "Co-Op Wholesale Savings"}
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">
                {isAr
                  ? "بن، ألبان، تغليف، ونقاط بيع"
                  : "Coffee, dairy, paper & POS"}
              </p>
            </div>

            <div className="bg-stone-900/40 border border-stone-800/70 rounded-2xl p-4 sm:p-5 text-center">
              <p className="text-2xl sm:text-4xl font-black text-white">
                NYC → US
              </p>
              <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1 leading-snug">
                {isAr
                  ? "نموذج وطني عابر للولايات"
                  : "National Network"}
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">
                {isAr
                  ? "نيويورك • ميشيغان • كاليفورنيا"
                  : "NYC • Dearborn • Bay Area"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: FOUR STRATEGIC PILLARS */}
      <section
        id="mission"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-b border-stone-900"
      >
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            {isAr ? "رسالة الغرفة التجارية" : "Our Institutional Mandate"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 leading-snug tracking-tight">
            {isAr
              ? "ماذا يمكن لمنظمة موحدة أن تصنع لمجتمعنا؟"
              : "What a United Chamber Unlocks for Our Community"}
          </h2>
          <p className="text-sm sm:text-base text-stone-400 mt-2 leading-relaxed">
            {isAr
              ? "ننقل التاجر اليمني من العمل الفردي المعزول إلى العمل المؤسسي المنظم الذي يحمي حقوقه، يرقمن تجارته، ويضاعف أرباحه."
              : "Transforming thousands of hard-working family storefronts from isolated operators into a coordinated, digitized economic network."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-stone-900/50 border border-stone-800/80 rounded-2xl p-5 sm:p-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-4">
              <Handshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              {isAr
                ? "الشراء التعاوني الموحد"
                : "Collective Purchasing Power"}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {isAr
                ? "التفاوض باسم آلاف المحلات للحصول على أسعار سلسلة المتاجر الكبرى في الألبان، البن اليمني، التغليف، وعمولات البطاقات."
                : "Negotiating as a 6,000-store bloc to secure national-chain pricing on dairy, direct-trade Yemeni coffee, packaging, and credit card processing."}
            </p>
          </div>

          <div className="bg-stone-900/50 border border-stone-800/80 rounded-2xl p-5 sm:p-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              {isAr
                ? "رقمنة المحلات بدون عمولة"
                : "Storefront Digitalization"}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {isAr
                ? "بناء متاجر رقمية ومنيو QR لكل بوديقا ومقهى يمني للطلب المباشر بدون دفع 30% عمولة لتطبيقات التوصيل."
                : "Equipping every neighborhood deli and Qahwah house with 0%-commission mobile ordering, QR menus, and NYS-compliant dual pricing."}
            </p>
          </div>

          <div className="bg-stone-900/50 border border-stone-800/80 rounded-2xl p-5 sm:p-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-4">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              {isAr
                ? "الحماية القانونية وتراخيص نيويورك"
                : "NYC Regulatory Defense"}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {isAr
                ? "عيادات قانونية وأدوات ذكاء اصطناعي للرد على مخالفات الصحة (DOHMH) وحماية المستهلك (DCWP) وتجديد الفود ستامب (EBT)."
                : "Bilingual legal clinics and AI back-office tools to contest OATH fines, maintain DOHMH Grade A status, and protect SNAP/EBT permits."}
            </p>
          </div>

          <div className="bg-stone-900/50 border border-stone-800/80 rounded-2xl p-5 sm:p-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              {isAr
                ? "التمويل الحلال وتملّك العقار"
                : "Halal Capital & Ownership"}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {isAr
                ? "مساعدة التجار على الانتقال من دفع الإيجار إلى تملّك المباني التجارية عبر صناديق استثمار متوافقة مع الشريعة ومنح بلدية نيويورك."
                : "Helping merchants transition from commercial tenants to building owners through Sharia-compliant capital and NYC storefront grants."}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: UNIFIED MERCHANT PLATFORM (STACKED FULL-WIDTH TABS ON MOBILE) */}
      <section
        id="platform"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-b border-stone-900"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              {isAr
                ? "منصة الخدمات الرقمية للتاجر"
                : "Interactive Merchant Operating System"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 leading-snug tracking-tight">
              {isAr
                ? "أدوات عملية تخدم محلك اليوم"
                : "Digital Tools Built for Your Storefront"}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl leading-relaxed">
              {isAr
                ? "اختر الأداة التي تريد تجربتها الآن: حساب وفر الشراء الجماعي، بناء متجرك الرقمي، أو فحص مخالفات البلدية."
                : "Switch between our three core member tools below to calculate wholesale savings, build a digital menu, or scan a city violation."}
            </p>
          </div>

          {/* Mobile-Friendly 3-Tab Switcher: Full-Width Grid on Mobile, Inline Pill on Desktop */}
          <div className="grid grid-cols-1 sm:inline-flex items-stretch sm:items-center gap-2 bg-stone-900/90 p-2 rounded-2xl border border-stone-800 w-full lg:w-auto">
            <button
              onClick={() => setActivePlatformTool("calculator")}
              className={`flex items-center justify-center sm:justify-start gap-2 px-4 py-3 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePlatformTool === "calculator"
                  ? "bg-amber-500 text-stone-950 shadow"
                  : "text-stone-300 hover:text-white bg-stone-950/50 sm:bg-transparent"
              }`}
            >
              <Calculator className="w-4 h-4 shrink-0" />
              <span>
                {isAr
                  ? "١. حاسبة التوفير التعاوني"
                  : "1. Co-Op Savings Calculator"}
              </span>
            </button>

            <button
              onClick={() => setActivePlatformTool("digitalize")}
              className={`flex items-center justify-center sm:justify-start gap-2 px-4 py-3 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePlatformTool === "digitalize"
                  ? "bg-amber-500 text-stone-950 shadow"
                  : "text-stone-300 hover:text-white bg-stone-950/50 sm:bg-transparent"
              }`}
            >
              <Smartphone className="w-4 h-4 shrink-0" />
              <span>
                {isAr
                  ? "٢. منشئ المتجر الرقمي والـ QR"
                  : "2. Storefront & QR Menu Builder"}
              </span>
            </button>

            <button
              onClick={() => setActivePlatformTool("compliance")}
              className={`flex items-center justify-center sm:justify-start gap-2 px-4 py-3 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePlatformTool === "compliance"
                  ? "bg-amber-500 text-stone-950 shadow"
                  : "text-stone-300 hover:text-white bg-stone-950/50 sm:bg-transparent"
              }`}
            >
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>
                {isAr
                  ? "٣. فاحص المخالفات والتراخيص"
                  : "3. NYC Compliance & Mail Scanner"}
              </span>
            </button>
          </div>
        </div>

        {/* Active Tool Render */}
        <div>
          {activePlatformTool === "calculator" && (
            <CoopSavingsCalculator
              lang={lang}
              onJoinClick={(tierLabel) => {
                setJoinModalTier(tierLabel);
                setJoinSubmitted(false);
              }}
            />
          )}

          {activePlatformTool === "digitalize" && (
            <DigitalStorefrontBuilder lang={lang} />
          )}

          {activePlatformTool === "compliance" && (
            <MerchantToolkit lang={lang} />
          )}
        </div>
      </section>

      {/* SECTION: DUKKANI COMMERCIAL & EMERGENCY EXCHANGE */}
      <section
        id="marketplace"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-b border-stone-900"
      >
        <DukkaniCommercialExchange lang={lang} />
      </section>

      {/* SECTION 3: VERIFIED NYC YEMENI BUSINESS DIRECTORY */}
      <section
        id="directory"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-b border-stone-900"
      >
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            {isAr
              ? "البرونكس • بروكلين • مانهاتن • كوينز • ستاتن آيلاند"
              : "Five-Borough Commercial Network"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 leading-snug tracking-tight">
            {isAr
              ? "دليل الأعمال والمحلات اليمنية الموثق في نيويورك"
              : "Verified NYC Yemeni Business Directory"}
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl leading-relaxed">
            {isAr
              ? "اكتشف المقاهي المختصة، البوديقا، المطاعم، وتجار الجملة المعتمدين لدى الغرفة التجارية، أو أضف محلك مجاناً."
              : "Connect with verified Yemeni specialty coffee roasters, neighborhood bodegas, traditional restaurants, wholesale suppliers, and bilingual CPAs."}
          </p>
        </div>

        <BusinessDirectory lang={lang} />
      </section>

      {/* SECTION 4: UPCOMING NYC EVENTS & CLINICS */}
      <section
        id="events"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-b border-stone-900"
      >
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            {isAr
              ? "العيادات القانونية وملتقيات التجار"
              : "Community Calendar & Legal Clinics"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 leading-snug tracking-tight">
            {isAr
              ? "الفعاليات القادمة في نيويورك"
              : "Upcoming NYC Clinics, Summits & Roundtables"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {CHAMBER_EVENTS.map((evt) => {
            const isReserved = !!rsvpedEvents[evt.id];
            return (
              <div
                key={evt.id}
                className="bg-stone-900/50 border border-stone-800/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {evt.category[lang]}
                    </span>
                    <span className="text-xs text-stone-400 font-medium shrink-0">
                      {evt.borough}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {evt.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-400 mt-2.5 leading-relaxed">
                    {evt.description[lang]}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-800/80 space-y-3">
                  <div className="text-xs text-stone-300 space-y-1.5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="font-medium">{evt.date[lang]}</span>
                      <span className="text-stone-500">•</span>
                      <span className="text-stone-400">{evt.time}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-stone-400 leading-snug">
                        {evt.location[lang]}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleRsvp(evt.id)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all ${
                      isReserved
                        ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300"
                        : "bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-white"
                    }`}
                  >
                    {isReserved
                      ? isAr
                        ? "✓ تم تأكيد حجز مقعدك"
                        : "✓ Seat Reserved"
                      : isAr
                      ? `احجز مقعدك مجاناً (${evt.spotsLeft} متبقي)`
                      : `Reserve Free Seat (${evt.spotsLeft} spots left)`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 5: MEMBERSHIP TIERS & NATIONAL VISION */}
      <section
        id="membership"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20"
      >
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            {isAr ? "عضوية الغرفة التجارية" : "Membership & Representation"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 leading-snug tracking-tight">
            {isAr
              ? "اختر عضوية محلك أو شركتك"
              : "Join the Yemeni Chamber of Commerce NYC"}
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-2 leading-relaxed">
            {isAr
              ? "جميع العضويات تشمل الوصول الكامل لمنصة التاجر الرقمية وعقود الشراء التعاوني والعيادة القانونية."
              : "Every tier includes full access to our digital storefront builder, collective supplier contracts, and bilingual legal clinics."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-all ${
                tier.featured
                  ? "bg-stone-900/90 border-amber-500/60 shadow-xl"
                  : "bg-stone-900/40 border-stone-800/80"
              }`}
            >
              <div>
                {tier.badge && (
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs mb-3">
                    {tier.badge[lang]}
                  </span>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {tier.name[lang]}
                </h3>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  {tier.subtitle[lang]}
                </p>

                <div className="mt-5 pb-5 border-b border-stone-800/80 flex flex-wrap items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black text-white">
                    {tier.price[lang]}
                  </span>
                  <span className="text-xs text-stone-400">
                    {tier.period[lang]}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {tier.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setJoinModalTier(tier.name[lang]);
                  setJoinSubmitted(false);
                }}
                className={`mt-7 w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  tier.featured
                    ? "bg-amber-500 hover:bg-amber-400 text-stone-950"
                    : "bg-stone-800 hover:bg-stone-700 text-white"
                }`}
              >
                {isAr ? "انضم في هذه الفئة" : "Select Membership"}
              </button>
            </div>
          ))}
        </div>

        {/* Clean National Expansion Banner */}
        <div className="mt-12 sm:mt-16 bg-stone-900/60 border border-stone-800 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Users className="w-4 h-4 shrink-0" />
              <span>
                {isAr
                  ? "شبكة التجار اليمنيين الوطنية"
                  : "National Chapter Network"}
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug">
              {isAr
                ? "نبدأ من نيويورك، ونربط التاجر اليمني في كل ولاية أمريكية"
                : "Born in New York City. Connecting Yemeni Merchants Coast to Coast."}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {isAr
                ? "نعمل على بناء جسور التوريد والتمثيل المشترك بين تجار نيويورك وإخوانهم في ديربورن (ميشيغان)، كاليفورنيا، شيكاغو، وبافلو."
                : "Our NYC infrastructure is built to connect with sister Yemeni merchant chapters across Dearborn & Hamtramck (MI), the Bay Area (CA), Chicago (IL), and Buffalo (NY)."}
            </p>
          </div>

          <button
            onClick={() => {
              setJoinModalTier(
                isAr ? "شراكة التوسع الوطني" : "National Chapter Inquiry"
              );
              setJoinSubmitted(false);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-white font-bold text-xs sm:text-sm shrink-0 text-center transition-all"
          >
            {isAr
              ? "تواصل مع مجلس التأسيس"
              : "Partner With Our Founding Board"}
          </button>
        </div>
      </section>

      {/* CLEAN INSTITUTIONAL FOOTER */}
      <footer className="bg-[#080B0A] border-t border-stone-900 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <ChamberLogo size="sm" />
            <div>
              <p className="font-bold text-sm text-white">
                {isAr
                  ? "الغرفة التجارية اليمنية في نيويورك (YCC-NYC)"
                  : "Yemeni Chamber of Commerce NYC (YCC-NYC)"}
              </p>
              <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                {isAr
                  ? "البرونكس • بروكلين • مانهاتن • كوينز • ستاتن آيلاند"
                  : "Bronx • Brooklyn • Manhattan • Queens • Staten Island"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-stone-400">
            <span className="inline-flex items-center gap-1.5 text-amber-400/90 font-medium">
              <Coffee className="w-3.5 h-3.5 shrink-0" />
              {isAr ? "تراث • تجارة • تمكين" : "Heritage • Commerce • Unity"}
            </span>
          </div>
        </div>
      </footer>

      {/* MEMBERSHIP APPLICATION MODAL */}
      {joinModalTier && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-700 rounded-2xl max-w-md w-full p-5 sm:p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800 gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <ChamberLogo size="sm" />
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                    {isAr ? "طلب عضوية الغرفة" : "Membership Registration"}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white truncate">
                    {joinModalTier}
                  </h4>
                </div>
              </div>
              <button
                onClick={() => setJoinModalTier(null)}
                className="p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {joinSubmitted ? (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h5 className="text-lg font-bold text-white">
                  {isAr
                    ? "مرحباً بك في الغرفة التجارية اليمنية في نيويورك!"
                    : "Welcome to the Yemeni Chamber of Commerce NYC!"}
                </h5>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {isAr
                    ? `تم تسجيل طلب انضمام «${
                        applicantBusiness || "محلكم"
                      }» في ${applicantBorough}. سيتواصل معك منسق الغرفة خلال ٢٤ ساعة لتفعيل العضوية.`
                    : `We received the registration for "${
                        applicantBusiness || "your business"
                      }" in ${applicantBorough}. Our borough coordinator will reach out within 24 hours.`}
                </p>
                <button
                  onClick={() => setJoinModalTier(null)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs"
                >
                  {isAr ? "إغلاق" : "Done"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleJoinSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs text-stone-300 mb-1 font-semibold">
                    {isAr ? "الاسم الكامل" : "Your Full Name"}
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder={
                      isAr ? "مثال: محمد العولقي" : "e.g., Fekri Kassem"
                    }
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs text-stone-300 mb-1 font-semibold">
                    {isAr
                      ? "اسم المحل التجاري أو المقهى أو الشركة"
                      : "Storefront, Cafe, or Company Name"}
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantBusiness}
                    onChange={(e) => setApplicantBusiness(e.target.value)}
                    placeholder={
                      isAr
                        ? "مثال: مقهى صنعاء / ديلي موريس بارك"
                        : "e.g., Sana'a Qahwah Corp / Morris Park Deli"
                    }
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-stone-300 mb-1 font-semibold">
                      {isAr ? "المنطقة" : "NYC Borough / State"}
                    </label>
                    <select
                      value={applicantBorough}
                      onChange={(e) => setApplicantBorough(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-white"
                    >
                      <option value="Bronx">Bronx (البرونكس)</option>
                      <option value="Brooklyn">Brooklyn (بروكلين)</option>
                      <option value="Manhattan">Manhattan (مانهاتن)</option>
                      <option value="Queens">Queens (كوينز)</option>
                      <option value="Staten Island">
                        Staten Island (ستاتن آيلاند)
                      </option>
                      <option value="National (Outside NYC)">
                        {isAr ? "خارج نيويورك (وطني)" : "Outside NYC (National)"}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-stone-300 mb-1 font-semibold">
                      {isAr ? "رقم الجوال (واتساب)" : "Mobile / WhatsApp"}
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="(718) 555-0100"
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm mt-2"
                >
                  {isAr ? "إرسال طلب العضوية" : "Submit Membership Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
