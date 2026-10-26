"use client";

import React, { useState } from "react";
import { Language } from "@/data/mockData";
import {
  CHAMBER_EVENTS,
  MEMBERSHIP_TIERS,
} from "@/data/chamberData";
import ChamberLogo from "@/components/ChamberLogo";
import BusinessDirectory from "@/components/BusinessDirectory";
import MerchantToolkit from "@/components/MerchantToolkit";
import CoopSavingsCalculator from "@/components/CoopSavingsCalculator";
import DigitalStorefrontBuilder from "@/components/DigitalStorefrontBuilder";
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
} from "lucide-react";

export default function YemeniChamberNYCPage() {
  const [lang, setLang] = useState<Language>("en");
  const isAr = lang === "ar";

  // Unified Platform Tab (keeps the page clean & focused instead of stacking all 3 heavy tools)
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
      className="min-h-screen bg-[#0B0F0E] text-stone-100 selection:bg-amber-500 selection:text-stone-950"
    >
      {/* Clean Executive Header */}
      <header className="sticky top-0 z-40 bg-[#0B0F0E]/90 backdrop-blur-md border-b border-stone-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Official Crest + Organization Name */}
          <a href="#" className="flex items-center gap-3.5 group">
            <ChamberLogo size="md" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg text-white tracking-tight group-hover:text-amber-300 transition-colors">
                  {isAr
                    ? "الغرفة التجارية اليمنية في نيويورك"
                    : "Yemeni Chamber of Commerce"}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  NYC
                </span>
              </div>
              <p className="text-xs text-stone-400">
                {isAr
                  ? "تمكين التاجر اليمني في مناطق نيويورك الخمس والولايات المتحدة"
                  : "Five Boroughs • National Merchant Network"}
              </p>
            </div>
          </a>

          {/* Minimal, Breathable Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-300">
            <a
              href="#mission"
              className="hover:text-white transition-colors"
            >
              {isAr ? "الرسالة والأثر" : "Mission"}
            </a>
            <a
              href="#platform"
              className="hover:text-white transition-colors"
            >
              {isAr ? "منصة التاجر الرقمية" : "Merchant Platform"}
            </a>
            <a
              href="#directory"
              className="hover:text-white transition-colors"
            >
              {isAr ? "دليل أعمال نيويورك" : "NYC Directory"}
            </a>
            <a
              href="#events"
              className="hover:text-white transition-colors"
            >
              {isAr ? "الفعاليات" : "Events"}
            </a>
            <a
              href="#membership"
              className="hover:text-white transition-colors"
            >
              {isAr ? "العضوية" : "Membership"}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-700/80 text-stone-200 font-semibold text-xs transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAr ? "English" : "العربية"}</span>
            </button>

            <button
              onClick={() => {
                setJoinModalTier(
                  isAr ? "عضوية الغرفة التجارية" : "Chamber Founding Member"
                );
                setJoinSubmitted(false);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-sm"
            >
              <span>{isAr ? "انضم للغرفة" : "Become a Member"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* REFINED INSTITUTIONAL HERO */}
      <section className="relative overflow-hidden border-b border-stone-800/80 bg-gradient-to-b from-[#0F1715] via-[#0B0F0E] to-[#0B0F0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-2">
              <ChamberLogo size="lg" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold tracking-wide">
              <span>
                {isAr
                  ? "المؤسسة الاقتصادية للتجار ورواد الأعمال اليمنيين • نيويورك"
                  : "THE ECONOMIC INSTITUTION FOR YEMENI MERCHANTS & FOUNDERS"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight">
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

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto">
              {isAr
                ? "من «اليمن الصغير» في البرونكس إلى باي ريدج وأتلانتيك أفينيو في بروكلين — نمكّن أصحاب البوديقا ومقاهي القهوة اليمنية المختصة عبر الشراء التعاوني، رقمنة المحلات، والحماية القانونية."
                : "Starting across New York City’s five boroughs, we empower Yemeni bodegas, specialty Qahwah houses, wholesalers, and founders with collective purchasing power, digital storefronts, and regulatory defense."}
            </p>

            {/* Primary Hero Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#platform"
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-lg transition-all inline-flex items-center gap-2"
              >
                <span>
                  {isAr
                    ? "استكشف منصة التاجر وأدوات التوفير"
                    : "Explore the Merchant Platform"}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#directory"
                className="px-7 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-100 border border-stone-700 font-semibold text-sm transition-all inline-flex items-center gap-2"
              >
                <Store className="w-4 h-4 text-amber-400" />
                <span>
                  {isAr
                    ? "تصفح دليل أعمال نيويورك"
                    : "Browse NYC Business Directory"}
                </span>
              </a>
            </div>
          </div>

          {/* Clean 4-Metric Institutional Strip */}
          <div className="mt-16 pt-10 border-t border-stone-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-white">
                6,000+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-amber-400 mt-1">
                {isAr
                  ? "بوديقا وسوبرماركت يمني في نيويورك"
                  : "Yemeni-Owned NYC Bodegas & Delis"}
              </p>
              <p className="text-xs text-stone-400 mt-0.5">
                {isAr ? "في المناطق الخمس" : "Across all 5 boroughs"}
              </p>
            </div>

            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-white">
                180+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1">
                {isAr
                  ? "مقهى قهوة يمنية مختصة"
                  : "Specialty Yemeni Qahwah Houses"}
              </p>
              <p className="text-xs text-stone-400 mt-0.5">
                {isAr
                  ? "تقود نهضة القهوة المختصة"
                  : "Leading America's coffee renaissance"}
              </p>
            </div>

            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-white">
                15–22%
              </p>
              <p className="text-xs sm:text-sm font-semibold text-amber-400 mt-1">
                {isAr
                  ? "وفر الشراء الجماعي للأعضاء"
                  : "Collective Wholesale Savings"}
              </p>
              <p className="text-xs text-stone-400 mt-0.5">
                {isAr
                  ? "بن، ألبان، تغليف، ونقاط بيع"
                  : "On coffee, dairy, paper & POS fees"}
              </p>
            </div>

            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-white">
                NYC → US
              </p>
              <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1">
                {isAr
                  ? "نموذج وطني عابر للولايات"
                  : "National Expansion Blueprint"}
              </p>
              <p className="text-xs text-stone-400 mt-0.5">
                {isAr
                  ? "نيويورك • ميشيغان • كاليفورنيا • شيكاغو"
                  : "NYC • Dearborn • Bay Area • Chicago"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: FOUR STRATEGIC PILLARS (CLEAN, SPACIOUS) */}
      <section
        id="mission"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-stone-900"
      >
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            {isAr ? "رسالة الغرفة التجارية" : "Our Institutional Mandate"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-stone-900/50 border border-stone-800/80 rounded-2xl p-6 hover:border-stone-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-5">
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

          <div className="bg-stone-900/50 border border-stone-800/80 rounded-2xl p-6 hover:border-stone-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-5">
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

          <div className="bg-stone-900/50 border border-stone-800/80 rounded-2xl p-6 hover:border-stone-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-5">
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

          <div className="bg-stone-900/50 border border-stone-800/80 rounded-2xl p-6 hover:border-stone-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-5">
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

      {/* SECTION 2: UNIFIED MERCHANT PLATFORM (TABBED TO ELIMINATE VISUAL CLUTTER) */}
      <section
        id="platform"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-stone-900"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              {isAr
                ? "منصة الخدمات الرقمية للتاجر"
                : "Interactive Merchant Operating System"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
              {isAr
                ? "أدوات عملية تخدم محلك اليوم"
                : "Digital Tools Built for Your Storefront"}
            </h2>
            <p className="text-sm text-stone-400 mt-1 max-w-xl">
              {isAr
                ? "اختر الأداة التي تريد تجربتها الآن: حساب وفر الشراء الجماعي، بناء متجرك الرقمي، أو فحص مخالفات البلدية."
                : "Switch between our three core member tools below to calculate wholesale savings, build a digital menu, or scan a city violation."}
            </p>
          </div>

          {/* Clean 3-Tab Switcher */}
          <div className="inline-flex flex-wrap items-center gap-2 bg-stone-900/90 p-1.5 rounded-2xl border border-stone-800">
            <button
              onClick={() => setActivePlatformTool("calculator")}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePlatformTool === "calculator"
                  ? "bg-amber-500 text-stone-950 shadow"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>
                {isAr ? "١. حاسبة التوفير التعاوني" : "1. Co-Op Savings Calculator"}
              </span>
            </button>

            <button
              onClick={() => setActivePlatformTool("digitalize")}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePlatformTool === "digitalize"
                  ? "bg-amber-500 text-stone-950 shadow"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>
                {isAr
                  ? "٢. منشئ المتجر الرقمي والـ QR"
                  : "2. Storefront & QR Menu Builder"}
              </span>
            </button>

            <button
              onClick={() => setActivePlatformTool("compliance")}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePlatformTool === "compliance"
                  ? "bg-amber-500 text-stone-950 shadow"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>
                {isAr
                  ? "٣. فاحص المخالفات والتراخيص"
                  : "3. NYC Compliance & Mail Scanner"}
              </span>
            </button>
          </div>
        </div>

        {/* Active Tool Render (Only 1 shown at a time for a clean, focused UI) */}
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

      {/* SECTION 3: VERIFIED NYC YEMENI BUSINESS DIRECTORY */}
      <section
        id="directory"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-stone-900"
      >
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            {isAr
              ? "البرونكس • بروكلين • مانهاتن • كوينز • ستاتن آيلاند"
              : "Five-Borough Commercial Network"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            {isAr
              ? "دليل الأعمال والمحلات اليمنية الموثق في نيويورك"
              : "Verified NYC Yemeni Business Directory"}
          </h2>
          <p className="text-sm text-stone-400 mt-1 max-w-2xl">
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-stone-900"
      >
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            {isAr
              ? "العيادات القانونية وملتقيات التجار"
              : "Community Calendar & Legal Clinics"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            {isAr
              ? "الفعاليات القادمة في نيويورك"
              : "Upcoming NYC Clinics, Summits & Roundtables"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHAMBER_EVENTS.map((evt) => {
            const isReserved = !!rsvpedEvents[evt.id];
            return (
              <div
                key={evt.id}
                className="bg-stone-900/50 border border-stone-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-stone-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {evt.category[lang]}
                    </span>
                    <span className="text-xs text-stone-400 font-medium">
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

                <div className="mt-6 pt-4 border-t border-stone-800/80 space-y-3">
                  <div className="text-xs text-stone-300 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="font-medium">{evt.date[lang]}</span> •{" "}
                      <span className="text-stone-400">{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-stone-400">{evt.location[lang]}</span>
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            {isAr ? "عضوية الغرفة التجارية" : "Membership & Representation"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            {isAr
              ? "اختر عضوية محلك أو شركتك"
              : "Join the Yemeni Chamber of Commerce NYC"}
          </h2>
          <p className="text-sm text-stone-400 mt-2">
            {isAr
              ? "جميع العضويات تشمل الوصول الكامل لمنصة التاجر الرقمية وعقود الشراء التعاوني والعيادة القانونية."
              : "Every tier includes full access to our digital storefront builder, collective supplier contracts, and bilingual legal clinics."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-7 flex flex-col justify-between border transition-all ${
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
                <h3 className="text-xl font-bold text-white">
                  {tier.name[lang]}
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  {tier.subtitle[lang]}
                </p>

                <div className="mt-5 pb-5 border-b border-stone-800/80 flex items-baseline gap-1.5">
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
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300"
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
                className={`mt-8 w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
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
        <div className="mt-16 bg-stone-900/60 border border-stone-800 rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Users className="w-4 h-4" />
              <span>
                {isAr
                  ? "شبكة التجار اليمنيين الوطنية"
                  : "National Chapter Network"}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
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
            className="px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-white font-bold text-xs sm:text-sm shrink-0 transition-all"
          >
            {isAr
              ? "تواصل مع مجلس التأسيس"
              : "Partner With Our Founding Board"}
          </button>
        </div>
      </section>

      {/* CLEAN INSTITUTIONAL FOOTER */}
      <footer className="bg-[#080B0A] border-t border-stone-900 py-12 px-4 sm:px-6 lg:px-8 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <ChamberLogo size="sm" />
            <div>
              <p className="font-bold text-sm text-white">
                {isAr
                  ? "الغرفة التجارية اليمنية في نيويورك (YCC-NYC)"
                  : "Yemeni Chamber of Commerce NYC (YCC-NYC)"}
              </p>
              <p className="text-xs text-stone-500 mt-0.5">
                {isAr
                  ? "البرونكس (موريس بارك) • بروكلين (باي ريدج وأتلانتيك) • مانهاتن • كوينز • ستاتن آيلاند"
                  : "Bronx (Little Yemen) • Brooklyn (Bay Ridge & Atlantic Ave) • Manhattan • Queens • Staten Island"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-stone-400">
            <span className="inline-flex items-center gap-1.5 text-amber-400/90 font-medium">
              <Coffee className="w-3.5 h-3.5" />
              {isAr ? "تراث • تجارة • تمكين" : "Heritage • Commerce • Unity"}
            </span>
          </div>
        </div>
      </footer>

      {/* MEMBERSHIP APPLICATION MODAL */}
      {joinModalTier && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-700 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800">
              <div className="flex items-center gap-2.5">
                <ChamberLogo size="sm" />
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                    {isAr ? "طلب عضوية الغرفة" : "Membership Registration"}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {joinModalTier}
                  </h4>
                </div>
              </div>
              <button
                onClick={() => setJoinModalTier(null)}
                className="p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white"
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

                <div className="grid grid-cols-2 gap-3">
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
