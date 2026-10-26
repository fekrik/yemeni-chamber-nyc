"use client";

import React, { useState } from "react";
import { Language } from "@/data/mockData";
import {
  DirectoryBusiness,
  INITIAL_DIRECTORY_BUSINESSES,
} from "@/data/chamberData";
import {
  MapPin,
  Phone,
  Clock,
  Search,
  BadgeCheck,
  PlusCircle,
  Coffee,
  Store,
  Utensils,
  Truck,
  Scale,
  Handshake,
  X,
} from "lucide-react";

interface BusinessDirectoryProps {
  lang: Language;
}

const BOROUGHS: {
  key: "All" | DirectoryBusiness["borough"];
  label: { ar: string; en: string };
}[] = [
  { key: "All", label: { ar: "كل مناطق نيويورك (٥)", en: "All 5 Boroughs" } },
  {
    key: "Bronx",
    label: { ar: "البرونكس (اليمن الصغير)", en: "Bronx (Little Yemen)" },
  },
  {
    key: "Brooklyn",
    label: { ar: "بروكلين (باي ريدج / أتلانتيك)", en: "Brooklyn" },
  },
  { key: "Manhattan", label: { ar: "مانهاتن", en: "Manhattan" } },
  { key: "Queens", label: { ar: "كوينز", en: "Queens" } },
  {
    key: "Staten Island",
    label: { ar: "ستاتن آيلاند", en: "Staten Island" },
  },
];

const CATEGORIES: {
  key: "all" | DirectoryBusiness["category"];
  label: { ar: string; en: string };
}[] = [
  { key: "all", label: { ar: "جميع القطاعات", en: "All Categories" } },
  {
    key: "qahwah",
    label: { ar: "مقاهي القهوة اليمنية", en: "Yemeni Qahwah & Roasteries" },
  },
  {
    key: "bodega",
    label: { ar: "البوديقا والديلي والأسواق", en: "Bodegas, Delis & Markets" },
  },
  {
    key: "restaurant",
    label: { ar: "المطاعم اليمنية", en: "Yemeni Restaurants" },
  },
  {
    key: "wholesale",
    label: { ar: "توريد بالجملة واستيراد", en: "Wholesale & Importers" },
  },
  {
    key: "services",
    label: { ar: "محاسبة وقانون وتراخيص", en: "CPA, Legal & Services" },
  },
];

export default function BusinessDirectory({ lang }: BusinessDirectoryProps) {
  const isAr = lang === "ar";
  const [businesses, setBusinesses] = useState<DirectoryBusiness[]>(
    INITIAL_DIRECTORY_BUSINESSES
  );
  const [selectedBorough, setSelectedBorough] = useState<
    "All" | DirectoryBusiness["borough"]
  >("All");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | DirectoryBusiness["category"]
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [b2bOnly, setB2bOnly] = useState(false);

  // Modal state to register a new business in the directory
  const [showAddModal, setShowAddModal] = useState(false);
  const [newBizNameEn, setNewBizNameEn] = useState("");
  const [newBizNameAr, setNewBizNameAr] = useState("");
  const [newBizCategory, setNewBizCategory] =
    useState<DirectoryBusiness["category"]>("qahwah");
  const [newBizBorough, setNewBizBorough] =
    useState<DirectoryBusiness["borough"]>("Bronx");
  const [newBizNeighborhood, setNewBizNeighborhood] = useState("");
  const [newBizAddress, setNewBizAddress] = useState("");
  const [newBizSpecialty, setNewBizSpecialty] = useState("");
  const [newBizPhone, setNewBizPhone] = useState("");

  const filteredBusinesses = businesses.filter((b) => {
    if (selectedBorough !== "All" && b.borough !== selectedBorough)
      return false;
    if (selectedCategory !== "all" && b.category !== selectedCategory)
      return false;
    if (b2bOnly && !b.b2bPartner) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName =
        b.name.en.toLowerCase().includes(q) ||
        b.name.ar.toLowerCase().includes(q);
      const matchSpec =
        b.specialty.en.toLowerCase().includes(q) ||
        b.specialty.ar.toLowerCase().includes(q);
      const matchHood =
        b.neighborhood.en.toLowerCase().includes(q) ||
        b.neighborhood.ar.toLowerCase().includes(q) ||
        b.address.toLowerCase().includes(q);
      return matchName || matchSpec || matchHood;
    }
    return true;
  });

  const handleAddBusiness = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBizNameEn.trim() && !newBizNameAr.trim()) return;

    const categoryLabels: Record<
      DirectoryBusiness["category"],
      { ar: string; en: string }
    > = {
      qahwah: { ar: "مقهى ومحمصة بن يمني", en: "Yemeni Qahwah & Roastery" },
      bodega: { ar: "بوديقا وديلي وسوق غذائي", en: "Bodega, Deli & Grocery" },
      restaurant: { ar: "مطعم يمني تقليدي", en: "Traditional Yemeni Restaurant" },
      wholesale: {
        ar: "توريد بالجملة واستيراد",
        en: "Wholesale & Import Distribution",
      },
      services: {
        ar: "محاسبة قانونية وتراخيص",
        en: "CPA, Legal & Business Services",
      },
    };

    const boroughArMap: Record<DirectoryBusiness["borough"], string> = {
      Bronx: "البرونكس",
      Brooklyn: "بروكلين",
      Manhattan: "مانهاتن",
      Queens: "كوينز",
      "Staten Island": "ستاتن آيلاند",
    };

    const created: DirectoryBusiness = {
      id: "biz-custom-" + Date.now(),
      name: {
        ar: newBizNameAr.trim() || newBizNameEn.trim(),
        en: newBizNameEn.trim() || newBizNameAr.trim(),
      },
      category: newBizCategory,
      categoryLabel: categoryLabels[newBizCategory],
      borough: newBizBorough,
      boroughAr: boroughArMap[newBizBorough],
      neighborhood: {
        ar: newBizNeighborhood.trim() || boroughArMap[newBizBorough],
        en: newBizNeighborhood.trim() || newBizBorough,
      },
      address: newBizAddress.trim() || `${newBizBorough}, New York, NY`,
      foundedYear: 2026,
      verifiedMember: true,
      b2bPartner: newBizCategory === "wholesale",
      specialty: {
        ar: newBizSpecialty.trim() || "منتجات وخدمات يمنية أصيلة في نيويورك",
        en:
          newBizSpecialty.trim() ||
          "Authentic Yemeni-owned NYC community business",
      },
      description: {
        ar: "عضو منضم حديثاً إلى دليل الغرفة التجارية اليمنية في نيويورك.",
        en: "Newly registered member business in the Yemeni Chamber of Commerce NYC directory.",
      },
      phone: newBizPhone.trim() || "(718) 555-0199",
      hours: { ar: "٨:٠٠ ص – ١١:٠٠ م", en: "8:00 AM – 11:00 PM" },
      highlights: [
        { ar: "عضو موثّق في الغرفة التجارية", en: "Verified YCC-NYC Member" },
      ],
    };

    setBusinesses((prev) => [created, ...prev]);
    setShowAddModal(false);
    setNewBizNameEn("");
    setNewBizNameAr("");
    setNewBizNeighborhood("");
    setNewBizAddress("");
    setNewBizSpecialty("");
    setNewBizPhone("");
  };

  const getCategoryIcon = (cat: DirectoryBusiness["category"]) => {
    switch (cat) {
      case "qahwah":
        return <Coffee className="w-4 h-4 text-amber-400" />;
      case "bodega":
        return <Store className="w-4 h-4 text-emerald-400" />;
      case "restaurant":
        return <Utensils className="w-4 h-4 text-orange-400" />;
      case "wholesale":
        return <Truck className="w-4 h-4 text-sky-400" />;
      case "services":
        return <Scale className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Filter & Search Bar */}
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-5 sm:p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-stone-800">
          <div className="relative flex-1">
            <Search
              className={`w-4 h-4 text-stone-400 absolute top-3.5 ${
                isAr ? "right-4" : "left-4"
              }`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isAr
                  ? "ابحث باسم المحل، الحي (موريس بارك، باي ريدج)، أو التخصص (قهوة، ديلي، جملة، محاسب)..."
                  : "Search by business name, neighborhood (Morris Park, Bay Ridge), or specialty (Qahwah, Deli, CPA)..."
              }
              className={`w-full bg-stone-950 text-white text-sm rounded-2xl py-3 border border-stone-800 focus:outline-none focus:border-amber-500 ${
                isAr ? "pr-11 pl-4" : "pl-11 pr-4"
              }`}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => setB2bOnly(!b2bOnly)}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                b2bOnly
                  ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                  : "bg-stone-950 border-stone-800 text-stone-300 hover:border-stone-700"
              }`}
            >
              <Handshake className="w-4 h-4 shrink-0" />
              <span>
                {isAr
                  ? "موردو الجملة وشركاء B2B فقط"
                  : "Wholesale / B2B Suppliers Only"}
              </span>
            </button>

            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-md"
            >
              <PlusCircle className="w-4 h-4 shrink-0" />
              <span>
                {isAr ? "أضف محلك أو شركتك للدليل" : "List Your NYC Business"}
              </span>
            </button>
          </div>
        </div>

        {/* Borough Pills */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-stone-400 uppercase px-1">
            {isAr ? "المنطقة (Borough):" : "NYC Borough:"}
          </span>
          {BOROUGHS.map((b) => (
            <button
              key={b.key}
              onClick={() => setSelectedBorough(b.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedBorough === b.key
                  ? "bg-amber-500 text-stone-950 shadow"
                  : "bg-stone-950 text-stone-300 border border-stone-800 hover:border-stone-700"
              }`}
            >
              {b.label[lang]}
            </button>
          ))}
        </div>

        {/* Category Pills */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-stone-400 uppercase px-1">
            {isAr ? "القطاع التجاري:" : "Sector:"}
          </span>
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setSelectedCategory(c.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === c.key
                  ? "bg-emerald-500 text-stone-950 font-bold shadow"
                  : "bg-stone-950 text-stone-300 border border-stone-800 hover:border-stone-700"
              }`}
            >
              {c.label[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredBusinesses.map((biz) => (
          <div
            key={biz.id}
            className="bg-stone-900/95 border border-stone-800 hover:border-amber-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all shadow-lg group"
          >
            <div>
              {/* Top Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-950 border border-stone-800 text-xs font-semibold text-stone-200">
                  {getCategoryIcon(biz.category)}
                  {biz.categoryLabel[lang]}
                </span>

                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  {isAr ? biz.boroughAr : biz.borough}
                </span>
              </div>

              {/* Business Title */}
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {biz.name[lang]}
                </h4>
                {biz.verifiedMember && (
                  <span
                    title={
                      isAr
                        ? "عضو موثّق في الغرفة التجارية"
                        : "Verified Chamber Member"
                    }
                    className="inline-flex items-center gap-1 text-emerald-400 text-xs font-bold shrink-0 mt-1"
                  >
                    <BadgeCheck className="w-4 h-4" />
                  </span>
                )}
              </div>

              <p className="text-xs font-semibold text-amber-400/90 mt-1">
                {biz.specialty[lang]}
              </p>

              <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                {biz.description[lang]}
              </p>

              {/* Highlights */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {biz.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-emerald-950/70 text-emerald-300 border border-emerald-500/25"
                  >
                    ★ {h[lang]}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Address & Contact */}
            <div className="mt-5 pt-3.5 border-t border-stone-800/90 space-y-1.5 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-stone-200 font-medium truncate">
                  {biz.neighborhood[lang]} — {biz.address}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-stone-500" />
                  {biz.hours[lang]}
                </span>
                <span className="flex items-center gap-1 text-amber-300 font-semibold">
                  <Phone className="w-3 h-3" />
                  {biz.phone}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Business Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-amber-500/40 rounded-3xl max-w-lg w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800">
              <div>
                <h4 className="text-lg font-bold text-white">
                  {isAr
                    ? "إدراج محلك أو شركتك في دليل نيويورك"
                    : "Register Your Business in the NYC Directory"}
                </h4>
                <p className="text-xs text-stone-400">
                  {isAr
                    ? "يظهر محلك فوراً في دليل الغرفة التجارية اليمنية في نيويورك"
                    : "Your storefront or firm will appear immediately in the live directory"}
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddBusiness} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-stone-300 mb-1 font-semibold">
                    {isAr ? "اسم المحل (بالإنجليزي)" : "Business Name (English)"}
                  </label>
                  <input
                    type="text"
                    required
                    value={newBizNameEn}
                    onChange={(e) => setNewBizNameEn(e.target.value)}
                    placeholder="e.g., Balqis Qahwah & Bakery"
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-stone-300 mb-1 font-semibold">
                    {isAr ? "اسم المحل (بالعربي)" : "Business Name (Arabic - Optional)"}
                  </label>
                  <input
                    type="text"
                    value={newBizNameAr}
                    onChange={(e) => setNewBizNameAr(e.target.value)}
                    placeholder="مثال: مقهى ومخبز بلقيس"
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-stone-300 mb-1 font-semibold">
                    {isAr ? "القطاع" : "Category"}
                  </label>
                  <select
                    value={newBizCategory}
                    onChange={(e) =>
                      setNewBizCategory(
                        e.target.value as DirectoryBusiness["category"]
                      )
                    }
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  >
                    <option value="qahwah">
                      {isAr ? "مقهى قهوة يمنية / محمصة" : "Yemeni Qahwah / Cafe"}
                    </option>
                    <option value="bodega">
                      {isAr ? "بوديقا / ديلي / سوبرماركت" : "Bodega / Deli / Market"}
                    </option>
                    <option value="restaurant">
                      {isAr ? "مطعم يمني" : "Yemeni Restaurant"}
                    </option>
                    <option value="wholesale">
                      {isAr ? "توريد بالجملة واستيراد" : "Wholesale & Distribution"}
                    </option>
                    <option value="services">
                      {isAr ? "خدمات محاسبة / قانون / عقارات" : "CPA / Legal / Professional"}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-stone-300 mb-1 font-semibold">
                    {isAr ? "المنطقة في نيويورك" : "NYC Borough"}
                  </label>
                  <select
                    value={newBizBorough}
                    onChange={(e) =>
                      setNewBizBorough(
                        e.target.value as DirectoryBusiness["borough"]
                      )
                    }
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  >
                    <option value="Bronx">Bronx (البرونكس)</option>
                    <option value="Brooklyn">Brooklyn (بروكلين)</option>
                    <option value="Manhattan">Manhattan (مانهاتن)</option>
                    <option value="Queens">Queens (كوينز)</option>
                    <option value="Staten Island">
                      Staten Island (ستاتن آيلاند)
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-stone-300 mb-1 font-semibold">
                    {isAr ? "الحي (Neighborhood)" : "Neighborhood"}
                  </label>
                  <input
                    type="text"
                    value={newBizNeighborhood}
                    onChange={(e) => setNewBizNeighborhood(e.target.value)}
                    placeholder="e.g., Morris Park, Bay Ridge, Astoria"
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-stone-300 mb-1 font-semibold">
                    {isAr ? "رقم الهاتف" : "Phone Number"}
                  </label>
                  <input
                    type="text"
                    value={newBizPhone}
                    onChange={(e) => setNewBizPhone(e.target.value)}
                    placeholder="(718) 555-0100"
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-semibold">
                  {isAr ? "العنوان الكامل" : "Street Address"}
                </label>
                <input
                  type="text"
                  value={newBizAddress}
                  onChange={(e) => setNewBizAddress(e.target.value)}
                  placeholder="e.g., 1180 Morris Park Ave, Bronx, NY"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-semibold">
                  {isAr ? "أبرز المنتجات أو الخدمات" : "Specialty / Key Offerings"}
                </label>
                <input
                  type="text"
                  value={newBizSpecialty}
                  onChange={(e) => setNewBizSpecialty(e.target.value)}
                  placeholder={
                    isAr
                      ? "مثال: بن حرازي، شاي عدني، ديلي حلال ٢٤ ساعة..."
                      : "e.g., Single-origin Yemeni coffee, 24/7 Halal Deli, Tax Advisory..."
                  }
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-stone-800 text-stone-300 text-xs font-semibold"
                >
                  {isAr ? "إلغاء" : "Cancel"}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs"
                >
                  {isAr ? "إضافة المحل الآن" : "Publish to Directory"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
