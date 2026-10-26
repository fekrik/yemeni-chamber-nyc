"use client";

import React, { useState } from "react";
import { Language } from "@/data/mockData";
import {
  CHAMBER_EVENTS,
  MEMBERSHIP_TIERS,
  SUPPLY_DEALS,
} from "@/data/chamberData";
import BusinessDirectory from "@/components/BusinessDirectory";
import MerchantToolkit from "@/components/MerchantToolkit";
import CoopSavingsCalculator from "@/components/CoopSavingsCalculator";
import {
  Globe,
  Building2,
  ShieldAlert,
  Handshake,
  Calendar,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Scale,
  TrendingUp,
  Coffee,
  Store,
  Users,
  Landmark,
  X,
} from "lucide-react";

export default function YemeniChamberNYCPage() {
  const [lang, setLang] = useState<Language>("en");
  const isAr = lang === "ar";

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
      className="min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950"
    >
      {/* Top Urgent Announcement & Language Bar */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-emerald-950 border-b border-amber-500/25 px-4 py-2.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-amber-200">
            <span className="px-2 py-0.5 rounded bg-amber-500 text-stone-950 font-extrabold text-[10px] uppercase">
              {isAr ? "تنبيه لتجار نيويورك" : "NYC Merchant Alert"}
            </span>
            <span>
              {isAr
                ? "العيادة القانونية المجانية لتجديد الفود ستامب (SNAP/EBT) وجلسات OATH يوم ٤ نوفمبر في موريس بارك (البرونكس) وباي ريدج (بروكلين)."
                : "Free SNAP/EBT Reauthorization & DOHMH/OATH Legal Clinic on Nov 4 in Morris Park (Bronx) & Bay Ridge (Brooklyn)."}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#toolkit"
              className="text-emerald-300 hover:text-emerald-200 font-bold underline underline-offset-4"
            >
              {isAr
                ? "فحص مخالفة البلدية الآن ←"
                : "Scan a NYC Violation Notice →"}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Header */}
      <header className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 text-stone-950 flex flex-col items-center justify-center font-black shadow-lg border border-amber-300/50">
              <span className="text-xs leading-none">YCC</span>
              <span className="text-[9px] tracking-widest leading-none mt-0.5">
                NYC
              </span>
            </div>
            <div>
              <h1 className="font-extrabold text-base sm:text-lg text-white leading-tight">
                {isAr
                  ? "الغرفة التجارية اليمنية في نيويورك"
                  : "Yemeni Chamber of Commerce NYC"}
              </h1>
              <p className="text-[11px] text-amber-400/90 font-medium">
                {isAr
                  ? "من قلب مناطق نيويورك الخمس لتمكين التاجر اليمني في كل مكان"
                  : "Born in the Five Boroughs • Empowering Yemeni Merchants Everywhere"}
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-stone-300">
            <a
              href="#mission"
              className="hover:text-amber-400 transition-colors"
            >
              {isAr ? "رؤيتنا وأركان الغرفة" : "Mission & Pillars"}
            </a>
            <a
              href="#directory"
              className="hover:text-amber-400 transition-colors"
            >
              {isAr ? "دليل محلات نيويورك" : "NYC Business Directory"}
            </a>
            <a
              href="#toolkit"
              className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {isAr ? "بوابة التاجر (دكّاني AI)" : "Merchant Toolkit (AI)"}
            </a>
            <a
              href="#coop"
              className="hover:text-amber-400 transition-colors"
            >
              {isAr ? "الشراء الجماعي والتوريد" : "Collective Buying Co-Op"}
            </a>
            <a
              href="#events"
              className="hover:text-amber-400 transition-colors"
            >
              {isAr ? "الفعاليات والعيادة القانونية" : "Events & Legal Clinics"}
            </a>
            <a
              href="#membership"
              className="hover:text-amber-400 transition-colors"
            >
              {isAr ? "العضوية والتوسع الوطني" : "Membership"}
            </a>
          </nav>

          {/* Language Toggle + Join CTA */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-amber-500/40 text-amber-300 font-bold text-xs transition-all"
            >
              <Globe className="w-4 h-4" />
              <span>{isAr ? "English 🇺🇸" : "العربية 🇾🇪"}</span>
            </button>

            <button
              onClick={() => {
                setJoinModalTier("Qahwah & Cornerstone Member");
                setJoinSubmitted(false);
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs transition-all shadow-md"
            >
              <span>{isAr ? "انضم كعضو مؤسس" : "Join the Chamber"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden sanaa-pattern-bg border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
                <Landmark className="w-4 h-4" />
                <span>
                  {isAr
                    ? "المظلة الرسمية للتجار ورواد الأعمال اليمنيين في نيويورك والولايات المتحدة"
                    : "The Official Voice of NYC's Yemeni Merchants, Roasters & Founders"}
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-white leading-[1.15] tracking-tight">
                {isAr ? (
                  <>
                    من دكاكين ومقاهي{" "}
                    <span className="text-amber-400">نيويورك</span> إلى تمكين
                    التاجر اليمني{" "}
                    <span className="text-emerald-400">في كل مكان.</span>
                  </>
                ) : (
                  <>
                    Uniting NYC’s{" "}
                    <span className="text-amber-400">6,000+ Yemeni</span>{" "}
                    Storefronts & Empowering Our Merchants{" "}
                    <span className="text-emerald-400">Everywhere.</span>
                  </>
                )}
              </h2>

              <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
                {isAr
                  ? "تبدأ قصتنا من شوارع نيويورك الخمس — من «اليمن الصغير» في البرونكس إلى باي ريدج وأتلانتيك أفينيو في بروكلين. نبني معاً قوة شرائية موحدة، دفاعاً قانونياً ضد غرامات البلدية، ودليلاً موثقاً يربط البوديقا ومقاهي القهوة اليمنية المختصة والموردين في نيويورك وكل الولايات."
                  : "From the 24/7 neighborhood bodegas anchoring every block to the specialty Yemeni Qahwah houses transforming American coffee culture—we combine collective buying power, NYC regulatory defense, and a verified directory starting right here in the five boroughs."}
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#directory"
                  className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm shadow-xl transition-all inline-flex items-center gap-2"
                >
                  <Store className="w-4 h-4" />
                  <span>
                    {isAr
                      ? "تصفح دليل أعمال نيويورك (٥ مناطق)"
                      : "Explore NYC Business Directory"}
                  </span>
                </a>

                <a
                  href="#toolkit"
                  className="px-6 py-3.5 rounded-2xl bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 border border-emerald-500/40 font-bold text-sm transition-all inline-flex items-center gap-2"
                >
                  <ShieldAlert className="w-4 h-4 text-emerald-400" />
                  <span>
                    {isAr
                      ? "افحص مخالفة البلدية (DOHMH / DCWP / EBT)"
                      : "Launch Merchant Compliance Toolkit"}
                  </span>
                </a>
              </div>

              {/* Borough Quick Highlights */}
              <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-stone-400">
                <span className="font-bold text-stone-300">
                  {isAr ? "فروعنا النشطة:" : "Active Chapters:"}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-stone-900/90 border border-stone-800 text-amber-300">
                  {isAr ? "البرونكس (موريس بارك)" : "Bronx (Little Yemen)"}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-stone-900/90 border border-stone-800 text-amber-300">
                  {isAr ? "بروكلين (باي ريدج وأتلانتيك)" : "Brooklyn (Bay Ridge & Atlantic)"}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-stone-900/90 border border-stone-800 text-stone-300">
                  {isAr ? "مانهاتن • كوينز • ستاتن آيلاند" : "Manhattan • Queens • Staten Island"}
                </span>
              </div>
            </div>

            {/* Right Column: Impact & Heritage Highlight Card */}
            <div className="lg:col-span-5">
              <div className="bg-stone-900/95 border border-amber-500/30 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      {isAr
                        ? "الأثر الاقتصادي اليمني في نيويورك"
                        : "NYC Economic Footprint"}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {isAr
                        ? "لماذا نؤسس الغرفة التجارية الآن؟"
                        : "Why We Are Building This Chamber"}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="bg-stone-950 border border-stone-800 rounded-2xl p-4">
                    <span className="text-2xl sm:text-3xl font-black text-amber-400">
                      6,000+
                    </span>
                    <p className="text-xs font-bold text-white mt-1">
                      {isAr
                        ? "بوديقا وديلي وسوبرماركت يمني"
                        : "Yemeni-Owned Bodegas & Delis"}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      {isAr
                        ? "تشكل العمود الفقري التمويني لأحياء نيويورك"
                        : "Backbone of NYC neighborhood food access"}
                    </p>
                  </div>

                  <div className="bg-stone-950 border border-stone-800 rounded-2xl p-4">
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                      180+
                    </span>
                    <p className="text-xs font-bold text-white mt-1">
                      {isAr
                        ? "مقهى قهوة يمنية مختصة"
                        : "Specialty Yemeni Qahwah Houses"}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      {isAr
                        ? "أسرع قطاع مقاهي نمواً في نيويورك وأمريكا"
                        : "Fastest-growing third-space movement in NYC"}
                    </p>
                  </div>

                  <div className="bg-stone-950 border border-stone-800 rounded-2xl p-4">
                    <span className="text-2xl sm:text-3xl font-black text-white">
                      18%
                    </span>
                    <p className="text-xs font-bold text-amber-300 mt-1">
                      {isAr
                        ? "وفر مالي عبر الشراء الجماعي"
                        : "Average Co-Op Wholesale Savings"}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      {isAr
                        ? "حليب، بن يمني، أكواب، وتأمين تجاري"
                        : "Pooled coffee, dairy, cups & POS rates"}
                    </p>
                  </div>

                  <div className="bg-stone-950 border border-stone-800 rounded-2xl p-4">
                    <span className="text-2xl sm:text-3xl font-black text-sky-400">
                      NYC → US
                    </span>
                    <p className="text-xs font-bold text-white mt-1">
                      {isAr
                        ? "شبكة وطنية عابرة للولايات"
                        : "National Merchant Corridor"}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      {isAr
                        ? "نيويورك • ميشيغان • كاليفورنيا • شيكاغو"
                        : "NYC • Dearborn • Bay Area • Chicago"}
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-2xl p-4 text-xs text-stone-200 leading-relaxed">
                  <strong className="text-emerald-300 block mb-1">
                    {isAr
                      ? "رسالتنا لكل تاجر يمني:"
                      : "Our Promise to Every Yemeni Merchant:"}
                  </strong>
                  {isAr
                    ? "بدل أن يواجه صاحب الدكّان أو المقهى غرامات البلدية، أو ارتفاع أسعار الموردين، أو تعقيدات الضرائب وحده — الغرفة التجارية تجعل خلفك آلاف التجار ومحامين وموردين يتحدثون لغتك ويحمون مصلحتك."
                    : "No Yemeni shop owner should ever face city inspectors, predatory wholesale pricing, or lease negotiations alone. Together, our 6,000 storefronts hold the leverage of a major retail enterprise."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: CHAMBER MISSION & 4 PILLARS */}
      <section
        id="mission"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-b border-stone-900"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            {isAr ? "أركان الغرفة التجارية الأربعة" : "How We Empower Our Community"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
            {isAr
              ? "مؤسسة مبنية على احتياجات التاجر اليمني الحقيقية في نيويورك"
              : "Built by NYC Yemeni Merchants, For Yemeni Merchants"}
          </h2>
          <p className="text-sm text-stone-400 mt-2">
            {isAr
              ? "نجمع بين حكمة وخبرة الجيل الأول من آبائنا المؤسسين وطموح وتقنيات الجيل الثاني من رواد الأعمال."
              : "Bridging the grit of our first-generation immigrant elders with the legal, financial, and tech fluency of second-generation founders."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6">
            <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {isAr
                ? "١. الحماية القانونية ودفاع البلدية"
                : "1. NYC Regulatory & OATH Defense"}
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              {isAr
                ? "مساعدة فورية بالعربي والإنجليزي في مخالفات الصحة (DOHMH)، وحماية المستهلك (DCWP)، وتجديد الفود ستامب (SNAP/EBT) دون خسارة يوم عمل."
                : "Bilingual defense against unfair DOHMH, DCWP, and DSNY fines, plus hands-on USDA SNAP/EBT 5-year reauthorization clinics."}
            </p>
          </div>

          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Handshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {isAr
                ? "٢. القوة الشرائية والتوريد الموحد"
                : "2. Collective Buying Power (Co-Op)"}
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              {isAr
                ? "نتفاوض باسم مئات المحلات للحصول على خصومات جماعية في الحليب، البن اليمني الأخضر، مستلزمات الديلي، وأجهزة الكاشير."
                : "Pooling orders across hundreds of bodegas and cafes to slash wholesale costs on dairy, Yemeni coffee beans, paper goods, and POS processing."}
            </p>
          </div>

          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6">
            <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {isAr
                ? "٣. التمويل الحلال والمنح الحكومية"
                : "3. Halal Capital & NYC Storefront Grants"}
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              {isAr
                ? "استخراج منح بلدية نيويورك (NYC SBS) لتطوير الكاميرات والواجهات، وتوفير صيغ تمويل ومرابحة متوافقة مع الشريعة الإسلامية لفتح فروع جديدة."
                : "Unlocking NYC Small Business Services security/facade grants and connecting founders with Sharia-compliant (Murabaha/Musharakah) growth capital."}
            </p>
          </div>

          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6">
            <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {isAr
                ? "٤. الربط التجاري في نيويورك وكل أمريكا"
                : "4. Five-Borough & National Network"}
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              {isAr
                ? "دليل أعمال موثق يربط التاجر بالمستورد والمحاسب والمحامي اليمني في نيويورك، مع بناء جسور توسع نحو ميشيغان وكاليفورنيا وشيكاغو."
                : "A verified B2B & consumer directory across all 5 NYC boroughs, serving as the blueprint for chapters in Dearborn, the Bay Area, and Chicago."}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: VERIFIED NYC YEMENI BUSINESS DIRECTORY */}
      <section
        id="directory"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-b border-stone-900"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>
                {isAr
                  ? "البرونكس • بروكلين • مانهاتن • كوينز • ستاتن آيلاند"
                  : "Bronx • Brooklyn • Manhattan • Queens • Staten Island"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {isAr
                ? "دليل الأعمال والمحلات اليمنية الموثق في نيويورك"
                : "Verified NYC Yemeni Business & Supplier Directory"}
            </h2>
            <p className="text-sm text-stone-400 mt-1 max-w-2xl">
              {isAr
                ? "ادعم المحلات اليمنية في مدينتك، أو تواصل مباشرة مع تجار الجملة والمحامص ومكاتب المحاسبة المعتمدة لدى الغرفة التجارية."
                : "Discover verified Yemeni-owned specialty coffee houses, 24/7 corner bodegas, traditional restaurants, wholesale distributors, and bilingual CPAs across the five boroughs."}
            </p>
          </div>
        </div>

        <BusinessDirectory lang={lang} />
      </section>

      {/* SECTION 3: INTERACTIVE MERCHANT TOOLKIT (DUKKANI AI) */}
      <section
        id="toolkit"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-b border-stone-900"
      >
        <MerchantToolkit lang={lang} />
      </section>

      {/* SECTION 4: COLLECTIVE BUYING POWER & WHOLESALE CO-OP */}
      <section
        id="coop"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-b border-stone-900"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {isAr
                ? "تحالف الشراء التعاوني (YCC Co-Op)"
                : "Collective Purchasing Alliance"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">
              {isAr
                ? "أسعار جملة خاصة لأعضاء الغرفة التجارية"
                : "Group Buying Power for Bodegas & Qahwah Houses"}
            </h2>
            <p className="text-sm text-stone-400 mt-1 max-w-2xl">
              {isAr
                ? "عندما نتفاوض كغرفة تجارية تضم آلاف المحلات، نحصل على أسعار استيراد وتوزيع لا يستطيع المحل الفردي الحصول عليها بمفرده."
                : "Individual stores pay retail-adjacent distributor markups. As a united Chamber, our members unlock national chain pricing on daily essentials."}
            </p>
          </div>
        </div>

        <div className="mb-10">
          <CoopSavingsCalculator
            lang={lang}
            onJoinClick={(tierLabel) => {
              setJoinModalTier(tierLabel);
              setJoinSubmitted(false);
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUPPLY_DEALS.map((deal) => (
            <div
              key={deal.id}
              className="bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-stone-950 text-stone-300 border border-stone-800">
                    {deal.category[lang]}
                  </span>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {deal.discount[lang]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {deal.supplier[lang]}
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  {deal.detail[lang]}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="text-stone-400">
                  {isAr ? "الحد الأدنى:" : "Minimum:"}{" "}
                  <strong className="text-stone-200">
                    {deal.minOrder[lang]}
                  </strong>
                </span>
                <button
                  onClick={() => {
                    setJoinModalTier(deal.supplier[lang]);
                    setJoinSubmitted(false);
                  }}
                  className="text-amber-400 hover:text-amber-300 font-bold"
                >
                  {isAr ? "اطلب تسعيرة الأعضاء ←" : "Unlock Member Rate →"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: UPCOMING NYC CHAMBER EVENTS & LEGAL CLINICS */}
      <section
        id="events"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-b border-stone-900"
      >
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            {isAr
              ? "لقاءات التجار والعيادات القانونية"
              : "Bronx & Brooklyn Community Calendar"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">
            {isAr
              ? "الفعاليات القادمة وورش العمل في نيويورك"
              : "Upcoming NYC Chamber Clinics, Summits & Town Halls"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHAMBER_EVENTS.map((evt) => {
            const isReserved = !!rsvpedEvents[evt.id];
            return (
              <div
                key={evt.id}
                className="bg-stone-900/95 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {evt.category[lang]}
                    </span>
                    <span className="text-xs text-stone-400 font-semibold">
                      {evt.borough}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">
                    {evt.title[lang]}
                  </h3>

                  <p className="text-xs text-stone-300 mt-2.5 leading-relaxed">
                    {evt.description[lang]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800 space-y-3">
                  <div className="text-xs text-stone-300 space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-semibold">{evt.date[lang]}</span> •{" "}
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{evt.location[lang]}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleRsvp(evt.id)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all ${
                      isReserved
                        ? "bg-emerald-500/20 border border-emerald-400 text-emerald-300"
                        : "bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-white"
                    }`}
                  >
                    {isReserved
                      ? isAr
                        ? "✓ تم تأكيد حجز مقعدك مجاناً"
                        : "✓ Seat Reserved! We'll Text You a Reminder"
                      : isAr
                      ? `احجز مقعدك مجاناً (متبقي ${evt.spotsLeft} مقعد)`
                      : `Reserve Free Seat (${evt.spotsLeft} spots left)`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: MEMBERSHIP TIERS & NATIONAL EXPANSION */}
      <section id="membership" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            {isAr ? "عضوية الغرفة التجارية" : "Chamber Membership Tiers"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
            {isAr
              ? "استثمر في قوة صوتنا التجاري المشترك"
              : "Join the Movement Empowering Yemeni Merchants"}
          </h2>
          <p className="text-sm text-stone-400 mt-2">
            {isAr
              ? "رسوم عضوية رمزية تعود على محلك بآلاف الدولارات من التوفير في المشتريات والحماية من غرامات البلدية."
              : "Your membership dues fund bilingual legal clinics, City Hall advocacy, and collective wholesale agreements that save your storefront thousands."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between border transition-all ${
                tier.featured
                  ? "bg-gradient-to-b from-stone-900 via-stone-900 to-amber-950/40 border-amber-400 shadow-2xl relative"
                  : "bg-stone-900/90 border-stone-800"
              }`}
            >
              <div>
                {tier.badge && (
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-500 text-stone-950 font-black text-xs mb-3">
                    {tier.badge[lang]}
                  </span>
                )}
                <h3 className="text-xl font-bold text-white">
                  {tier.name[lang]}
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  {tier.subtitle[lang]}
                </p>

                <div className="mt-5 pb-5 border-b border-stone-800 flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400">
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
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200"
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
                    ? "bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-lg"
                    : "bg-stone-800 hover:bg-stone-700 text-white"
                }`}
              >
                {isAr ? "سجّل في هذه العضوية الآن" : "Select Membership Tier"}
              </button>
            </div>
          ))}
        </div>

        {/* National Vision Banner: Starting in NYC, Empowering Yemeni Merchants Everywhere */}
        <div className="mt-14 bg-gradient-to-r from-stone-900 via-emerald-950/60 to-stone-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {isAr
                ? "رؤية التوسع الوطني ٢٠٢٦ – ٢٠٢٨"
                : "National Expansion Roadmap (2026–2028)"}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {isAr
                ? "البداية من نيويورك.. والهدف ربط التاجر اليمني في كل ولاية أمريكية"
                : "Starting in New York City. Scaling to Every Yemeni Business Hub in America."}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {isAr
                ? "نبني النموذج المتكامل هنا في مناطق نيويورك الخمس، ونعمل على ربط التجار والمحامص والمستوردين اليمنيين في ديربورن (ميشيغان)، أوكلاند وسان فرانسيسكو (كاليفورنيا)، شيكاغو، وبافلو في شبكة تجارية وطنية واحدة."
                : "What we build in the Bronx, Brooklyn, Manhattan, Queens, and Staten Island serves as the blueprint for sister chapters across Dearborn & Hamtramck (MI), the Bay Area & Central Valley (CA), Chicago (IL), and Buffalo/Rochester (NY)."}
            </p>
          </div>

          <button
            onClick={() => {
              setJoinModalTier(
                isAr ? "تأسيس فرع أو شراكة وطنية" : "National Chapter Partner"
              );
              setJoinSubmitted(false);
            }}
            className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-black text-xs sm:text-sm shrink-0 shadow-lg"
          >
            {isAr
              ? "تواصل معنا للانضمام أو تأسيس فرع"
              : "Partner With Our Founding Board"}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 border-t border-stone-900 py-10 px-4 sm:px-6 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-stone-950 font-black flex items-center justify-center text-xs">
              YCC
            </div>
            <div>
              <p className="font-bold text-white">
                {isAr
                  ? "الغرفة التجارية اليمنية في نيويورك (YCC-NYC)"
                  : "Yemeni Chamber of Commerce NYC (YCC-NYC)"}
              </p>
              <p className="text-[11px] text-stone-500">
                {isAr
                  ? "موريس بارك (البرونكس) • باي ريدج وأتلانتيك أفينيو (بروكلين) • نيويورك"
                  : "Morris Park (Bronx) • Bay Ridge & Atlantic Ave (Brooklyn) • New York, NY"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-amber-400">
              <Coffee className="w-3.5 h-3.5" />
              {isAr ? "بن يمني • تجارة • تمكين" : "Heritage • Commerce • Unity"}
            </span>
          </div>
        </div>
      </footer>

      {/* MEMBERSHIP APPLICATION MODAL */}
      {joinModalTier && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-amber-500/40 rounded-3xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase">
                  {isAr ? "طلب انضمام للغرفة" : "Chamber Membership Application"}
                </span>
                <h4 className="text-lg font-bold text-white">
                  {joinModalTier}
                </h4>
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
                    ? "حيّاك الله في الغرفة التجارية اليمنية في نيويورك!"
                    : "Welcome to the Yemeni Chamber of Commerce NYC!"}
                </h5>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {isAr
                    ? `تم استلام طلب انضمام «${applicantBusiness || "محلكم"}» في ${applicantBorough}. سيتواصل معك منسق الغرفة خلال ٢٤ ساعة لتفعيل بطاقة العضوية وإدراجكم في الدليل.`
                    : `We received the membership registration for "${
                        applicantBusiness || "your business"
                      }" in ${applicantBorough}. Our borough coordinator will reach out within 24 hours to activate your member badge and co-op benefits.`}
                </p>
                <button
                  onClick={() => setJoinModalTier(null)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs"
                >
                  {isAr ? "العودة للموقع" : "Done"}
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
                      isAr ? "مثال: محمد العولقي" : "e.g., Fekri Al-..."
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
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs sm:text-sm mt-2"
                >
                  {isAr ? "إرسال طلب العضوية" : "Complete Founding Registration"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
