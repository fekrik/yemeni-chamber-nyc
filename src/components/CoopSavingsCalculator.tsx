"use client";

import React, { useState } from "react";
import { Language } from "@/data/mockData";
import {
  Calculator,
  TrendingUp,
  Coffee,
  Store,
  CreditCard,
  PackageCheck,
  Sparkles,
  ArrowUpRight,
  Users,
  Building2,
} from "lucide-react";

interface CoopSavingsCalculatorProps {
  lang: Language;
  onJoinClick: (tierLabel: string) => void;
}

export default function CoopSavingsCalculator({
  lang,
  onJoinClick,
}: CoopSavingsCalculatorProps) {
  const isAr = lang === "ar";

  // Presets: bodega | qahwah | multi
  const [preset, setPreset] = useState<"bodega" | "qahwah" | "multi">("bodega");

  // Interactive sliders
  const [dairyDeliSpend, setDairyDeliSpend] = useState<number>(6500); // $/mo
  const [coffeePaperSpend, setCoffeePaperSpend] = useState<number>(2200); // $/mo
  const [cardVolume, setCardVolume] = useState<number>(38000); // $/mo
  const [storeCount, setStoreCount] = useState<number>(1);

  const applyPreset = (type: "bodega" | "qahwah" | "multi") => {
    setPreset(type);
    if (type === "bodega") {
      setDairyDeliSpend(6500);
      setCoffeePaperSpend(2200);
      setCardVolume(38000);
      setStoreCount(1);
    } else if (type === "qahwah") {
      setDairyDeliSpend(3800);
      setCoffeePaperSpend(5400);
      setCardVolume(52000);
      setStoreCount(1);
    } else {
      setDairyDeliSpend(12000);
      setCoffeePaperSpend(7500);
      setCardVolume(85000);
      setStoreCount(3);
    }
  };

  // Savings calculations per store per month
  const dairyMonthlySavings = Math.round(dairyDeliSpend * 0.14); // 14% Co-op discount on milk, condensed milk, cold cuts, produce
  const coffeeMonthlySavings = Math.round(coffeePaperSpend * 0.18); // 18% Direct-trade green/roasted coffee & custom paper cups/bags
  const posMonthlySavings = Math.round(cardVolume * 0.0135); // 1.35% saved via Chamber negotiated interchange-plus & legal NYS dual pricing
  const complianceSavingsPerMonth = 150; // ~$1,800/yr saved on avoided OATH default fines & CPA tax clearance prep

  const monthlySavingsSingle =
    dairyMonthlySavings +
    coffeeMonthlySavings +
    posMonthlySavings +
    complianceSavingsPerMonth;

  const totalMonthlySavings = monthlySavingsSingle * storeCount;
  const totalAnnualSavings = totalMonthlySavings * 12;

  const annualMembershipCost =
    (preset === "qahwah" ? 450 : preset === "multi" ? 1200 : 250) * storeCount;
  const roiMultiple = Math.max(
    5,
    Math.round(totalAnnualSavings / annualMembershipCost)
  );

  // Community-wide impact when 1,000 NYC Yemeni stores unite
  const communityAnnualPool = totalAnnualSavings * (1000 / storeCount);

  return (
    <div className="bg-gradient-to-br from-stone-900 via-stone-950 to-emerald-950/50 border border-amber-500/35 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-stone-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>
              {isAr
                ? "حاسبة التوفير التعاوني لأعضاء الغرفة التجارية"
                : "Interactive Member ROI & Co-Op Savings Simulator"}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {isAr
              ? "كم سيوفر محلك سنوياً عند الشراء ككتلة تجارية واحدة؟"
              : "See How Much Your Store Saves When 6,000 Merchants Buy as One"}
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
            {isAr
              ? "حرّك المؤشرات أدناه حسب مصروفات محلك الشهرية لترى التوفير الفعلي في الحليب والديلي، البن والأكواب، ورسوم ماكينة الكريدت كارد."
              : "Adjust the sliders below to match your shop's monthly volume and see your exact annual savings through Chamber collective contracts."}
          </p>
        </div>

        {/* Store Type Quick Presets */}
        <div className="flex flex-wrap items-center gap-2 bg-stone-950 p-1.5 rounded-2xl border border-stone-800">
          <button
            onClick={() => applyPreset("bodega")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              preset === "bodega"
                ? "bg-amber-500 text-stone-950 shadow"
                : "text-stone-300 hover:text-white"
            }`}
          >
            <Store className="w-3.5 h-3.5" />
            <span>{isAr ? "بوديقا وديلي" : "Corner Bodega & Deli"}</span>
          </button>

          <button
            onClick={() => applyPreset("qahwah")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              preset === "qahwah"
                ? "bg-amber-500 text-stone-950 shadow"
                : "text-stone-300 hover:text-white"
            }`}
          >
            <Coffee className="w-3.5 h-3.5" />
            <span>{isAr ? "مقهى قهوة يمنية" : "Yemeni Qahwah Cafe"}</span>
          </button>

          <button
            onClick={() => applyPreset("multi")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              preset === "multi"
                ? "bg-amber-500 text-stone-950 shadow"
                : "text-stone-300 hover:text-white"
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>
              {isAr ? "سوبرماركت / عدة فروع (٣)" : "Multi-Store / Market (3x)"}
            </span>
          </button>
        </div>
      </div>

      {/* Main Calculator Grid */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left 7 Cols: Interactive Sliders */}
        <div className="lg:col-span-7 space-y-6 bg-stone-950/80 border border-stone-800/90 rounded-2xl p-5 sm:p-6">
          {/* Slider 1: Dairy, Condensed Milk & Deli Provisions */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <Store className="w-4 h-4 text-emerald-400" />
                {isAr
                  ? "١. مشتريات الحليب، الألبان، ومستلزمات الديلي شهرياً"
                  : "1. Monthly Dairy, Milk & Halal Deli Wholesale Spend"}
              </label>
              <span className="text-sm sm:text-base font-black text-amber-400">
                ${dairyDeliSpend.toLocaleString()}{" "}
                <span className="text-xs font-normal text-stone-400">
                  /{isAr ? "شهر" : "mo"}
                </span>
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={25000}
              step={500}
              value={dairyDeliSpend}
              onChange={(e) => setDairyDeliSpend(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-800 rounded-lg"
            />
            <div className="flex items-center justify-between text-[11px] text-stone-400 mt-1">
              <span>
                {isAr
                  ? "خصم التعاقد الجماعي للغرفة: 14% + توصيل مجاني"
                  : "Chamber Co-Op Discount: 14% off wholesale + free drop-off"}
              </span>
              <span className="text-emerald-400 font-bold">
                +${(dairyMonthlySavings * storeCount).toLocaleString()}/
                {isAr ? "شهر" : "mo"}
              </span>
            </div>
          </div>

          {/* Slider 2: Coffee Beans, Spices, Paper Cups & Packaging */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <PackageCheck className="w-4 h-4 text-amber-400" />
                {isAr
                  ? "٢. مشتريات البن اليمني، الهيل، الأكواب والأكياس شهرياً"
                  : "2. Monthly Yemeni Coffee Beans, Spices & Paper Goods"}
              </label>
              <span className="text-sm sm:text-base font-black text-amber-400">
                ${coffeePaperSpend.toLocaleString()}{" "}
                <span className="text-xs font-normal text-stone-400">
                  /{isAr ? "شهر" : "mo"}
                </span>
              </span>
            </div>
            <input
              type="range"
              min={500}
              max={18000}
              step={250}
              value={coffeePaperSpend}
              onChange={(e) => setCoffeePaperSpend(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-800 rounded-lg"
            />
            <div className="flex items-center justify-between text-[11px] text-stone-400 mt-1">
              <span>
                {isAr
                  ? "استيراد مباشر وتصنيع أكواب موحد: وفر 18%"
                  : "Pooled container imports & custom cup run: 18% savings"}
              </span>
              <span className="text-emerald-400 font-bold">
                +${(coffeeMonthlySavings * storeCount).toLocaleString()}/
                {isAr ? "شهر" : "mo"}
              </span>
            </div>
          </div>

          {/* Slider 3: Monthly Credit Card / POS Processing Volume */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-sky-400" />
                {isAr
                  ? "٣. مبيعات البطاقات البنكية (Credit / Debit POS) شهرياً"
                  : "3. Monthly Credit/Debit Card POS Volume"}
              </label>
              <span className="text-sm sm:text-base font-black text-amber-400">
                ${cardVolume.toLocaleString()}{" "}
                <span className="text-xs font-normal text-stone-400">
                  /{isAr ? "شهر" : "mo"}
                </span>
              </span>
            </div>
            <input
              type="range"
              min={10000}
              max={150000}
              step={2500}
              value={cardVolume}
              onChange={(e) => setCardVolume(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-800 rounded-lg"
            />
            <div className="flex items-center justify-between text-[11px] text-stone-400 mt-1">
              <span>
                {isAr
                  ? "تخفيض عمولة البنك + إعداد تسعيرة الكاش القانونية (بدون غرامة $500)"
                  : "Interchange-plus rate cut & legal NYS Cash/Credit setup"}
              </span>
              <span className="text-emerald-400 font-bold">
                +${(posMonthlySavings * storeCount).toLocaleString()}/
                {isAr ? "شهر" : "mo"}
              </span>
            </div>
          </div>

          {/* Slider 4: Number of Storefronts */}
          <div className="pt-2 border-t border-stone-800">
            <div className="flex items-center justify-between gap-2 mb-2">
              <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                {isAr
                  ? "٤. عدد المحلات أو الفروع التابعة لك أو لعائلتك"
                  : "4. Number of Storefronts in Your Family / Group"}
              </label>
              <span className="px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 font-black text-xs">
                {storeCount}{" "}
                {isAr
                  ? storeCount === 1
                    ? "محل واحد"
                    : "فروع"
                  : storeCount === 1
                  ? "Storefront"
                  : "Locations"}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={storeCount}
              onChange={(e) => setStoreCount(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-2 bg-stone-800 rounded-lg"
            />
          </div>
        </div>

        {/* Right 5 Cols: Live Annual Savings & Community Power Output */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-stone-950 border-2 border-emerald-500/40 rounded-2xl p-6 shadow-xl">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {isAr
                  ? "إجمالي التوفير السنوي المتوقع لمحلك"
                  : "Your Estimated Annual Net Savings"}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-extrabold">
                {roiMultiple}x {isAr ? "ضعف رسوم العضوية" : "Membership ROI"}
              </span>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight">
                ${totalAnnualSavings.toLocaleString()}
              </span>
              <span className="text-xs text-stone-400 font-semibold">
                {isAr ? "/ سنوياً يبقى في جيبك" : "/ year kept in your business"}
              </span>
            </div>

            <p className="text-xs text-stone-300 mt-1">
              {isAr
                ? `أي بمعدل +$${totalMonthlySavings.toLocaleString()} سيولة إضافية كل شهر.`
                : `That's +$${totalMonthlySavings.toLocaleString()} in extra cash flow every single month.`}
            </p>

            {/* Itemized Breakdown */}
            <div className="mt-5 space-y-2.5 pt-4 border-t border-stone-800 text-xs">
              <div className="flex items-center justify-between text-stone-300">
                <span>
                  {isAr
                    ? "• وفر الألبان والحليب والديلي (14%):"
                    : "• Dairy, Condensed Milk & Deli Co-Op (14%):"}
                </span>
                <strong className="text-white">
                  +${(dairyMonthlySavings * 12 * storeCount).toLocaleString()}
                  /{isAr ? "سنة" : "yr"}
                </strong>
              </div>
              <div className="flex items-center justify-between text-stone-300">
                <span>
                  {isAr
                    ? "• وفر البن اليمني والأكواب والتغليف (18%):"
                    : "• Direct Coffee Beans & Custom Cups (18%):"}
                </span>
                <strong className="text-white">
                  +${(coffeeMonthlySavings * 12 * storeCount).toLocaleString()}
                  /{isAr ? "سنة" : "yr"}
                </strong>
              </div>
              <div className="flex items-center justify-between text-stone-300">
                <span>
                  {isAr
                    ? "• وفر عمولات الكريدت كارد (POS):"
                    : "• POS Processing & Dual-Pricing Savings:"}
                </span>
                <strong className="text-white">
                  +${(posMonthlySavings * 12 * storeCount).toLocaleString()}/
                  {isAr ? "سنة" : "yr"}
                </strong>
              </div>
              <div className="flex items-center justify-between text-stone-300">
                <span>
                  {isAr
                    ? "• تفادي غرامات OATH وأتعاب المعاملات:"
                    : "• Avoided OATH Default Fines & Filing Prep:"}
                </span>
                <strong className="text-emerald-300">
                  +${(complianceSavingsPerMonth * 12 * storeCount).toLocaleString()}
                  /{isAr ? "سنة" : "yr"}
                </strong>
              </div>
            </div>

            {/* Community Macro Impact Box */}
            <div className="mt-5 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3.5">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs mb-1">
                <TrendingUp className="w-4 h-4 shrink-0" />
                <span>
                  {isAr
                    ? "قوة المجتمع: عندما يتحد ١,٠٠٠ محل يمني فقط"
                    : "Community Power: When Just 1,000 NYC Stores Unite"}
                </span>
              </div>
              <p className="text-xs text-stone-200 leading-relaxed">
                {isAr ? (
                  <>
                    بناءً على هذه الأرقام، فإن اتحاد ١,٠٠٠ محل يمني في نيويورك
                    يوفر أكثر من{" "}
                    <strong className="text-amber-300">
                      ${Math.round(communityAnnualPool / 1000000)} مليون دولار
                      سنوياً
                    </strong>{" "}
                    داخل عائلاتنا ومجتمعنا بدلاً من ذهابها للشركات الوسيطة!
                  </>
                ) : (
                  <>
                    At this run-rate, uniting just 1,000 of NYC’s 6,000 Yemeni
                    storefronts retains over{" "}
                    <strong className="text-amber-300">
                      ${Math.round(communityAnnualPool / 1000000)} Million per
                      year
                    </strong>{" "}
                    inside Yemeni families to buy buildings, open new cafes, and
                    fund our youth.
                  </>
                )}
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              onJoinClick(
                isAr
                  ? `عضوية الشراء التعاوني (وفر متوقع $${totalAnnualSavings.toLocaleString()}/سنة)`
                  : `Co-Op Purchasing Member (Est. $${totalAnnualSavings.toLocaleString()}/yr Savings)`
              )
            }
            className="mt-6 w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs sm:text-sm shadow-lg transition-all inline-flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>
              {isAr
                ? "احجز حصتك في الشراء التعاوني الآن"
                : "Lock In Your Store's Co-Op Savings"}
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
