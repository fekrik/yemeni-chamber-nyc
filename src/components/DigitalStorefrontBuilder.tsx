"use client";

import React, { useState } from "react";
import { Language } from "@/data/mockData";
import {
  Smartphone,
  QrCode,
  Coffee,
  Store,
  Plus,
  Trash2,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  DollarSign,
  Send,
  Copy,
  Check,
} from "lucide-react";

interface DigitalStorefrontBuilderProps {
  lang: Language;
}

interface MenuItem {
  id: string;
  name: { ar: string; en: string };
  category: { ar: string; en: string };
  cashPrice: number;
  ebtEligible: boolean;
  popular?: boolean;
}

const QAHWAH_PRESET_ITEMS: MenuItem[] = [
  {
    id: "q-1",
    name: {
      ar: "شاي عدني ملكي بالحليب المكثف والهيل",
      en: "Royal Adani Chai (Cardamom & Condensed Milk)",
    },
    category: { ar: "مشروبات ساخنة", en: "Signature Hot Drinks" },
    cashPrice: 5.5,
    ebtEligible: false,
    popular: true,
  },
  {
    id: "q-2",
    name: {
      ar: "قهوة مْفوّر يمني (بن حرازي بالهيل والكريمة)",
      en: "Yemeni Mufawar Coffee (Haraz Medium Roast & Cream)",
    },
    category: { ar: "مشروبات ساخنة", en: "Signature Hot Drinks" },
    cashPrice: 6.0,
    ebtEligible: false,
    popular: true,
  },
  {
    id: "q-3",
    name: {
      ar: "خلية النحل بالجبن الكريمي والعسل اليمني",
      en: "Khaliyat Nahal (Warm Cream-Cheese Honeycomb Bread)",
    },
    category: { ar: "معجنات وحلويات", en: "Yemeni Pastries" },
    cashPrice: 8.5,
    ebtEligible: false,
    popular: true,
  },
  {
    id: "q-4",
    name: {
      ar: "سباعية يمنية تقليدية بالسمن والعسل",
      en: "Traditional Flaky Sabaya Pastry with Honey",
    },
    category: { ar: "معجنات وحلويات", en: "Yemeni Pastries" },
    cashPrice: 9.0,
    ebtEligible: false,
  },
  {
    id: "q-5",
    name: {
      ar: "كيس بن حرازي مختص للبيت (٢٥٠ جرام)",
      en: "Whole-Bean Haraz Specialty Coffee Bag (250g Home Brew)",
    },
    category: { ar: "بن ومونة للبيت", en: "Take-Home Pantry" },
    cashPrice: 19.0,
    ebtEligible: true,
  },
];

const BODEGA_PRESET_ITEMS: MenuItem[] = [
  {
    id: "b-1",
    name: {
      ar: "سندويتش تشوبد تشيز حلال على خبز هيرو",
      en: "NYC Halal Chopped Cheese on a Hero (Hot Grill)",
    },
    category: { ar: "مشويات الجريل الساخنة", en: "Hot Grill Favorites" },
    cashPrice: 8.5,
    ebtEligible: false,
    popular: true,
  },
  {
    id: "b-2",
    name: {
      ar: "بيف بيكون وبيض وجبن حلال (سندويتش إفطار)",
      en: "Halal Beef-Bacon, Egg & Cheese on a Roll",
    },
    category: { ar: "مشويات الجريل الساخنة", en: "Hot Grill Favorites" },
    cashPrice: 6.0,
    ebtEligible: false,
    popular: true,
  },
  {
    id: "b-3",
    name: {
      ar: "سندويتش تيركي وجبن سويسري بارد (مسموح EBT)",
      en: "Cold Smoked Turkey & Swiss Hero (100% Unheated)",
    },
    category: { ar: "ديلي بارد (يقبل EBT)", en: "Cold Deli (SNAP/EBT Eligible)" },
    cashPrice: 8.0,
    ebtEligible: true,
    popular: true,
  },
  {
    id: "b-4",
    name: {
      ar: "عسل سدر يمني أصلي (عبوة ربع كيلو)",
      en: "Pure Yemeni Sidr Honey Jar (250g)",
    },
    category: { ar: "منتجات يمنية ومونة", en: "Yemeni Pantry & Grocery" },
    cashPrice: 28.0,
    ebtEligible: true,
  },
  {
    id: "b-5",
    name: {
      ar: "شاي عدني ساخن للسفري (كاسة كبيرة)",
      en: "Fresh Hot Adani Spiced Chai (16oz To-Go)",
    },
    category: { ar: "مشروبات", en: "Beverages" },
    cashPrice: 4.5,
    ebtEligible: false,
  },
];

export default function DigitalStorefrontBuilder({
  lang,
}: DigitalStorefrontBuilderProps) {
  const isAr = lang === "ar";

  const [template, setTemplate] = useState<"qahwah" | "bodega">("qahwah");
  const [storeNameEn, setStoreNameEn] = useState("Sana'a Qahwah & Roastery");
  const [storeNameAr, setStoreNameAr] = useState("مقهى ومحمصة صنعاء");
  const [borough, setBorough] = useState("Bronx — Little Yemen");
  const [whatsappNumber, setWhatsappNumber] = useState("(718) 555-0192");
  const [enableDualPricing, setEnableDualPricing] = useState(true);
  const [surchargeRate, setSurchargeRate] = useState(3.5);
  const [items, setItems] = useState<MenuItem[]>(QAHWAH_PRESET_ITEMS);

  // Add new item state
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("6.50");
  const [newItemEbt, setNewItemEbt] = useState(false);

  // Interactive simulated customer cart in the phone preview
  const [cart, setCart] = useState<Record<string, number>>({
    "q-1": 2,
    "q-3": 1,
  });
  const [copiedLink, setCopiedLink] = useState(false);
  const [orderSentToast, setOrderSentToast] = useState(false);

  const switchTemplate = (type: "qahwah" | "bodega") => {
    setTemplate(type);
    if (type === "qahwah") {
      setStoreNameEn("Sana'a Qahwah & Roastery");
      setStoreNameAr("مقهى ومحمصة صنعاء");
      setBorough("Bay Ridge, Brooklyn");
      setItems(QAHWAH_PRESET_ITEMS);
      setCart({ "q-1": 2, "q-3": 1 });
    } else {
      setStoreNameEn("Morris Park Halal Deli & Market");
      setStoreNameAr("ديلي وأسواق موريس بارك الحلال");
      setBorough("Morris Park, Bronx");
      setItems(BODEGA_PRESET_ITEMS);
      setCart({ "b-1": 1, "b-3": 1 });
    }
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    const priceNum = parseFloat(newItemPrice) || 5.0;
    const created: MenuItem = {
      id: "custom-" + Date.now(),
      name: { ar: newItemName.trim(), en: newItemName.trim() },
      category: {
        ar: newItemEbt ? "ديلي بارد / بقالة" : "أصناف المحل",
        en: newItemEbt ? "Cold Grocery / Deli" : "Store Specials",
      },
      cashPrice: priceNum,
      ebtEligible: newItemEbt,
    };
    setItems((prev) => [created, ...prev]);
    setNewItemName("");
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCart = (id: string, delta: number) => {
    setCart((prev) => {
      const nextCount = (prev[id] || 0) + delta;
      if (nextCount <= 0) {
        const clone = { ...prev };
        delete clone[id];
        return clone;
      }
      return { ...prev, [id]: nextCount };
    });
  };

  const getCardPrice = (cash: number) => {
    return +(cash * (1 + surchargeRate / 100)).toFixed(2);
  };

  const totalCashCart = items.reduce((sum, item) => {
    const qty = cart[item.id] || 0;
    return sum + item.cashPrice * qty;
  }, 0);

  const thirdPartyCommissionSaved = +(totalCashCart * 0.28).toFixed(2);

  const storeSlug = storeNameEn
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const handleCopyStoreLink = () => {
    navigator.clipboard.writeText(
      `https://yemenichamber.nyc/shop/${storeSlug || "my-store"}`
    );
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="bg-stone-900 border border-emerald-500/35 rounded-3xl overflow-hidden shadow-2xl">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-stone-950 via-emerald-950 to-stone-950 px-6 py-6 border-b border-stone-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {isAr
                  ? "مبادرة التحول الرقمي للمحلات اليمنية — بدون عمولة 30%"
                  : "Merchant Digitalization Engine — 0% Commission Direct Ordering"}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {isAr
                ? "حوّل البوديقا أو المقهى إلى متجر رقمي ومنيو QR في دقيقتين"
                : "Instant Digital Storefront, QR Menu & NYS Legal Dual-Pricing Builder"}
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-3xl">
              {isAr
                ? "بدل أن تأخذ تطبيقات التوصيل (UberEats / DoorDash) نسبة 30% من تعبك، تمنحك الغرفة التجارية صفحة طلب مباشر عبر الواتساب والكاشير، مع تسعيرة الكاش والبطاقة القانونية ووسم أصناف الفود ستامب EBT."
                : "Stop losing 28–30% of every order to third-party delivery apps. Build a mobile pickup storefront with automatic NYS-legal Cash vs. Credit dual pricing and SNAP/EBT badges."}
            </p>
          </div>

          {/* Template Switcher */}
          <div className="grid grid-cols-1 sm:flex items-stretch sm:items-center gap-2 bg-stone-950 p-2 rounded-2xl border border-stone-800 w-full lg:w-auto shrink-0">
            <button
              onClick={() => switchTemplate("qahwah")}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                template === "qahwah"
                  ? "bg-amber-500 text-stone-950 shadow"
                  : "text-stone-300 hover:text-white bg-stone-900/60 sm:bg-transparent"
              }`}
            >
              <Coffee className="w-4 h-4 shrink-0" />
              <span>
                {isAr ? "نموذج مقهى قهوة يمنية" : "Yemeni Qahwah Template"}
              </span>
            </button>

            <button
              onClick={() => switchTemplate("bodega")}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                template === "bodega"
                  ? "bg-emerald-500 text-stone-950 shadow"
                  : "text-stone-300 hover:text-white bg-stone-900/60 sm:bg-transparent"
              }`}
            >
              <Store className="w-4 h-4 shrink-0" />
              <span>
                {isAr ? "نموذج بوديقا وديلي حلال" : "NYC Bodega & Deli Template"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Builder + Live Mobile Storefront Preview */}
      <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 Cols: Storefront Customizer & Menu Manager */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Store Identity */}
          <div className="bg-stone-950/90 border border-stone-800 rounded-2xl p-5">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4">
              {isAr
                ? "١. بيانات محلك التجاري وإعدادات التسعير القانوني"
                : "1. Storefront Identity & NYC Compliance Settings"}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-stone-300 mb-1 font-semibold">
                  {isAr ? "اسم المحل (بالإنجليزي)" : "Store Name (English)"}
                </label>
                <input
                  type="text"
                  value={storeNameEn}
                  onChange={(e) => setStoreNameEn(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-semibold">
                  {isAr ? "اسم المحل (بالعربي)" : "Store Name (Arabic)"}
                </label>
                <input
                  type="text"
                  value={storeNameAr}
                  onChange={(e) => setStoreNameAr(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-semibold">
                  {isAr ? "الحي / المنطقة في نيويورك" : "NYC Neighborhood"}
                </label>
                <input
                  type="text"
                  value={borough}
                  onChange={(e) => setBorough(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-semibold">
                  {isAr
                    ? "رقم استلام الطلبات (واتساب / كاشير)"
                    : "Order Pickup WhatsApp / SMS"}
                </label>
                <input
                  type="text"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* NYS Legal Dual-Pricing Toggle */}
            <div className="mt-4 pt-4 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-emerald-950/30 border border-emerald-500/25 rounded-xl p-3.5">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    {isAr
                      ? "تفعيل التسعيرة المزدوجة القانونية (NYS Dual-Pricing Law)"
                      : "Auto-Display NYS Legal Cash vs. Card Dual Prices"}
                  </p>
                  <p className="text-[11px] text-stone-300 mt-0.5">
                    {isAr
                      ? `يحمي محلك من غرامة DCWP ($500) عبر إظهار السعرين بالدولار وال سنت بوضوح (+${surchargeRate}% للبطاقة).`
                      : `Prevents $500 DCWP fines by displaying exact dollar & cent Cash and Credit prices (+${surchargeRate}%).`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <input
                  type="checkbox"
                  checked={enableDualPricing}
                  onChange={(e) => setEnableDualPricing(e.target.checked)}
                  className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                />
                <span className="text-xs font-bold text-emerald-300">
                  {enableDualPricing
                    ? isAr
                      ? "مُفعّل (قانوني 100%)"
                      : "Active (DCWP Compliant)"
                    : isAr
                    ? "سعر موحد"
                    : "Single Price"}
                </span>
              </div>
            </div>
          </div>

          {/* Step 2: Add / Edit Menu Items */}
          <div className="bg-stone-950/90 border border-stone-800 rounded-2xl p-5">
            <div className="flex items-center justify-between gap-2 mb-3">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
                {isAr
                  ? "٢. قائمة الأصناف والأسعار (أضف أو عدّل بضاعتك)"
                  : "2. Digital Catalog & SNAP/EBT Tagging"}
              </h4>
              <span className="text-xs text-stone-400">
                {items.length} {isAr ? "أصناف" : "items"}
              </span>
            </div>

            {/* Quick Add Item Form */}
            <form
              onSubmit={handleAddItem}
              className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 mb-4 bg-stone-900 p-3 rounded-xl border border-stone-800"
            >
              <input
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder={
                  isAr
                    ? "أضف صنفاً جديداً (مثال: سمبوسة جبن، لاتيه عدني)..."
                    : "Add item (e.g., Iced Pistachio Adani Latte, Cold Tuna Sub)..."
                }
                className="sm:col-span-6 bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white"
              />
              <div className="sm:col-span-2 relative">
                <DollarSign className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
                <input
                  type="number"
                  step="0.25"
                  value={newItemPrice}
                  onChange={(e) => setNewItemPrice(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg pl-7 pr-2 py-2 text-xs text-white"
                />
              </div>
              <label className="sm:col-span-2 flex items-center gap-1.5 text-[11px] text-stone-300 cursor-pointer px-1">
                <input
                  type="checkbox"
                  checked={newItemEbt}
                  onChange={(e) => setNewItemEbt(e.target.checked)}
                  className="accent-emerald-500"
                />
                <span>{isAr ? "يقبل EBT" : "SNAP/EBT"}</span>
              </label>
              <button
                type="submit"
                className="sm:col-span-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-lg py-2 px-3 inline-flex items-center justify-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{isAr ? "إضافة" : "Add"}</span>
              </button>
            </form>

            {/* Menu Items List */}
            <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
              {items.map((item) => {
                const cardPrice = getCardPrice(item.cashPrice);
                return (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 bg-stone-900/90 border border-stone-800 rounded-xl p-3.5"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-bold text-white text-xs sm:text-sm leading-snug">
                          {item.name[lang]}
                        </span>
                        {item.ebtEligible ? (
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                            {isAr ? "مسموح EBT (بارد)" : "SNAP/EBT Eligible"}
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-400 text-[10px]">
                            {isAr ? "ساخن / غير مشمول EBT" : "Prepared / Non-EBT"}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 mt-1 text-xs">
                        <span className="text-emerald-400 font-bold">
                          {isAr ? "كاش:" : "Cash:"} ${item.cashPrice.toFixed(2)}
                        </span>
                        {enableDualPricing && (
                          <span className="text-amber-300 font-semibold">
                            {isAr ? "بطاقة:" : "Card:"} ${cardPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-stone-800/70">
                      <button
                        onClick={() => updateCart(item.id, 1)}
                        className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold whitespace-nowrap"
                      >
                        + {isAr ? "للطلب" : "Test Order"}
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 rounded-lg text-stone-500 hover:text-red-400 hover:bg-stone-800"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Shareable Link & Printable QR Counter Stand */}
          <div className="bg-stone-950/90 border border-stone-800 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <QrCode className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-white text-sm">
                  {isAr
                    ? "رابط المتجر الرقمي ولوحة الـ QR للكاشير جاهزة!"
                    : "Your Shareable Storefront Link & Counter QR Code"}
                </h5>
                <p className="text-xs text-amber-300 font-mono mt-0.5">
                  yemenichamber.nyc/shop/{storeSlug || "my-store"}
                </p>
              </div>
            </div>

            <button
              onClick={handleCopyStoreLink}
              className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs inline-flex items-center gap-1.5 shrink-0"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>{isAr ? "تم نسخ الرابط!" : "Link Copied!"}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{isAr ? "نسخ رابط المتجر" : "Copy Store Link"}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right 5 Cols: Live Mobile Customer Storefront Preview */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-sm bg-stone-950 border-[6px] border-stone-800 rounded-[36px] overflow-hidden shadow-2xl">
            {/* Phone Notch / Status Bar */}
            <div className="bg-stone-900 px-5 py-2.5 flex items-center justify-between text-[11px] text-stone-400 border-b border-stone-800">
              <span className="font-bold text-amber-400 flex items-center gap-1">
                <Smartphone className="w-3 h-3" />
                {isAr ? "معاينة جوال الزبون" : "Live Customer Phone View"}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                0% {isAr ? "عمولة" : "Commission"}
              </span>
            </div>

            {/* Storefront Header inside Phone */}
            <div className="bg-gradient-to-br from-amber-950 via-stone-900 to-stone-950 p-5 border-b border-stone-800">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    ✓ {isAr ? "متجر معتمد — الغرفة التجارية" : "YCC-NYC Verified Storefront"}
                  </span>
                  <h4 className="text-lg font-black text-white mt-0.5">
                    {isAr ? storeNameAr : storeNameEn}
                  </h4>
                  <p className="text-xs text-stone-300">{borough}</p>
                </div>

                {/* Mini Simulated QR Box */}
                <div className="bg-white p-1.5 rounded-xl shrink-0">
                  <QrCode className="w-8 h-8 text-stone-950" />
                </div>
              </div>

              {enableDualPricing && (
                <div className="mt-3 px-2.5 py-1.5 rounded-lg bg-stone-950/90 border border-amber-500/30 text-[10px] text-amber-200">
                  {isAr
                    ? `إشعار قانوني: الأسعار موضحة للكاش والبطاقة (+${surchargeRate}%) وفق قانون ولاية نيويورك.`
                    : `NYS Notice: Both Cash Discount & Credit Card (+${surchargeRate}%) prices are clearly listed below.`}
                </div>
              )}
            </div>

            {/* Interactive Menu inside Phone */}
            <div className="p-4 space-y-2.5 max-h-[310px] overflow-y-auto">
              {items.map((item) => {
                const qty = cart[item.id] || 0;
                const cardPrice = getCardPrice(item.cashPrice);
                return (
                  <div
                    key={item.id}
                    className="bg-stone-900 border border-stone-800 rounded-2xl p-3 flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <p className="font-bold text-white text-xs truncate">
                        {item.name[lang]}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-[11px]">
                        <span className="text-emerald-400 font-extrabold">
                          Cash: ${item.cashPrice.toFixed(2)}
                        </span>
                        {enableDualPricing && (
                          <span className="text-stone-400">
                            Card: ${cardPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      {item.ebtEligible && (
                        <span className="inline-block mt-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                          ✓ EBT / SNAP In-Store
                        </span>
                      )}
                    </div>

                    {/* + / - Cart Controls */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {qty > 0 && (
                        <>
                          <button
                            onClick={() => updateCart(item.id, -1)}
                            className="w-6 h-6 rounded-lg bg-stone-800 text-white font-bold text-xs"
                          >
                            -
                          </button>
                          <span className="text-xs font-extrabold text-amber-400 w-4 text-center">
                            {qty}
                          </span>
                        </>
                      )}
                      <button
                        onClick={() => updateCart(item.id, 1)}
                        className="w-6 h-6 rounded-lg bg-amber-500 text-stone-950 font-black text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Cart & 0%-Commission Savings Summary */}
            <div className="bg-stone-900 p-4 border-t border-stone-800 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-300 flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                  {isAr ? "إجمالي الطلب (كاش):" : "Pickup Order Total (Cash):"}
                </span>
                <strong className="text-base font-black text-white">
                  ${totalCashCart.toFixed(2)}
                </strong>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-[11px] text-emerald-300 flex items-center justify-between">
                <span>
                  {isAr
                    ? "وفرت على المحل من عمولة التوصيل:"
                    : "Merchant Saves vs. UberEats (28%):"}
                </span>
                <strong>+${thirdPartyCommissionSaved.toFixed(2)}</strong>
              </div>

              <button
                onClick={() => {
                  setOrderSentToast(true);
                  setTimeout(() => setOrderSentToast(false), 3000);
                }}
                className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-black text-xs inline-flex items-center justify-center gap-1.5 shadow-lg transition-all"
              >
                {orderSentToast ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {isAr
                        ? `تم إرسال الطلب إلى ${whatsappNumber}!`
                        : `Order Sent to ${whatsappNumber}!`}
                    </span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>
                      {isAr
                        ? "إرسال الطلب مباشرة للكاشير (بدون عمولة)"
                        : "Send Pickup Order via WhatsApp (0% Fee)"}
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
