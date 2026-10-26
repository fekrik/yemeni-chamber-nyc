export interface DirectoryBusiness {
  id: string;
  name: { ar: string; en: string };
  category: "qahwah" | "bodega" | "restaurant" | "wholesale" | "services";
  categoryLabel: { ar: string; en: string };
  borough: "Bronx" | "Brooklyn" | "Manhattan" | "Queens" | "Staten Island";
  boroughAr: string;
  neighborhood: { ar: string; en: string };
  address: string;
  foundedYear: number;
  verifiedMember: boolean;
  b2bPartner?: boolean;
  specialty: { ar: string; en: string };
  description: { ar: string; en: string };
  phone: string;
  hours: { ar: string; en: string };
  highlights: { ar: string; en: string }[];
}

export interface ChamberEvent {
  id: string;
  title: { ar: string; en: string };
  date: { ar: string; en: string };
  time: string;
  location: { ar: string; en: string };
  borough: string;
  category: { ar: string; en: string };
  spotsLeft: number;
  description: { ar: string; en: string };
}

export interface MembershipTier {
  id: string;
  name: { ar: string; en: string };
  subtitle: { ar: string; en: string };
  price: { ar: string; en: string };
  period: { ar: string; en: string };
  badge?: { ar: string; en: string };
  featured?: boolean;
  features: { ar: string; en: string }[];
}

export interface SupplyDeal {
  id: string;
  supplier: { ar: string; en: string };
  category: { ar: string; en: string };
  discount: { ar: string; en: string };
  detail: { ar: string; en: string };
  minOrder: { ar: string; en: string };
}

export const INITIAL_DIRECTORY_BUSINESSES: DirectoryBusiness[] = [
  {
    id: "biz-1",
    name: {
      ar: "دار القهوة الحراز ومحمصة صنعاء",
      en: "Haraz & Sana'a Roastery House",
    },
    category: "qahwah",
    categoryLabel: { ar: "مقهى ومحمصة بن يمني", en: "Yemeni Qahwah & Roastery" },
    borough: "Brooklyn",
    boroughAr: "بروكلين",
    neighborhood: { ar: "باي ريدج (Bay Ridge)", en: "Bay Ridge — 5th Ave" },
    address: "7314 5th Ave, Brooklyn, NY 11209",
    foundedYear: 2021,
    verifiedMember: true,
    b2bPartner: true,
    specialty: {
      ar: "شاي عدني، قشر بالحبهان، خلية النحل، وبن حرازي مختص",
      en: "Single-Origin Haraz Beans, Adani Chai, Qishr & Fresh Khaliyat Nahal",
    },
    description: {
      ar: "مقهى ومحمصة يمنية تجمع الجيل الأول والثاني في بروكلين، وتوفر البن اليمني بالجملة للمقاهي الأعضاء في الغرفة التجارية.",
      en: "A bustling late-night cultural third space in Bay Ridge serving authentic Yemeni specialty coffee and supplying roasted beans to fellow NYC cafes.",
    },
    phone: "(718) 555-0192",
    hours: { ar: "٧:٠٠ ص – ١:٠٠ ص يومياً", en: "7:00 AM – 1:00 AM Daily" },
    highlights: [
      { ar: "توريد بن بالجملة للأعضاء (-15%)", en: "Wholesale Roaster Partner (15% Member Discount)" },
      { ar: "درجة صحة A من بلدية نيويورك", en: "NYC DOHMH Grade A Certified" },
    ],
  },
  {
    id: "biz-2",
    name: {
      ar: "سوق ودكّان موريس بارك (اليمن الصغير)",
      en: "Little Yemen Corner Deli & Organic Market",
    },
    category: "bodega",
    categoryLabel: { ar: "بوديقا وديلي وسوق غذائي", en: "Bodega, Deli & Grocery" },
    borough: "Bronx",
    boroughAr: "البرونكس",
    neighborhood: { ar: "موريس بارك — اليمن الصغير", en: "Morris Park (Little Yemen)" },
    address: "1142 Morris Park Ave, Bronx, NY 10461",
    foundedYear: 2008,
    verifiedMember: true,
    b2bPartner: false,
    specialty: {
      ar: "ديلي حلال ٢٤ ساعة، بهارات يمنية، عسل سدر، وخدمات الفود ستامب EBT",
      en: "24/7 Halal Deli, Sidr Honey, Yemeni Spices & Full SNAP/EBT Groceries",
    },
    description: {
      ar: "من أقدم المحلات اليمنية في شارع موريس بارك بالبرونكس. يخدم الحي منذ أكثر من 18 عاماً بمنتجات طازجة وبهارات مستوردة.",
      en: "A cornerstone family-run bodega in the heart of Bronx's Little Yemen corridor, anchoring neighborhood food access for nearly two decades.",
    },
    phone: "(718) 555-0148",
    hours: { ar: "مفتوح ٢٤ ساعة", en: "Open 24 Hours" },
    highlights: [
      { ar: "عضو مؤسس في الغرفة التجارية", en: "Founding Chamber Member" },
      { ar: "معتمد لبرنامج SNAP / EBT", en: "Verified SNAP/EBT Staple Retailer" },
    ],
  },
  {
    id: "biz-3",
    name: {
      ar: "مطعم ومطبخ حضرموت للمندي والزربيان",
      en: "Hadhramout Mandi & Zarbian Kitchen",
    },
    category: "restaurant",
    categoryLabel: { ar: "مطعم يمني تقليدي", en: "Traditional Yemeni Restaurant" },
    borough: "Brooklyn",
    boroughAr: "بروكلين",
    neighborhood: { ar: "أتلانتيك أفينيو (Cobble Hill)", en: "Atlantic Ave (Cobble Hill)" },
    address: "178 Atlantic Ave, Brooklyn, NY 11201",
    foundedYear: 2014,
    verifiedMember: true,
    b2bPartner: true,
    specialty: {
      ar: "سلتة وفحسة بالمدرة الحجرية، مندي لحم، خبز ملوح، وضيافة المؤتمرات",
      en: "Clay-Pot Saltah & Fahsah, Slow-Pit Lamb Mandi, Rashoush & Corporate Catering",
    },
    description: {
      ar: "وجهة المطبخ اليمني الأصيل في شارع أتلانتيك التاريخي، ومزود الضيافة الرسمي لفعاليات الغرفة التجارية اليمنية في نيويورك.",
      en: "Iconic Atlantic Avenue culinary institution serving bubbling stone-pot Saltah and catering business summits across NYC.",
    },
    phone: "(718) 555-0177",
    hours: { ar: "١١:٠٠ ص – ١١:٣٠ م", en: "11:00 AM – 11:30 PM" },
    highlights: [
      { ar: "خصم 20% لتموين مناسبات الأعضاء", en: "20% Off B2B & Event Catering" },
      { ar: "خبز تنور طازج على مدار الساعة", en: "Fresh Clay-Oven Bread Baked Hourly" },
    ],
  },
  {
    id: "biz-4",
    name: {
      ar: "شركة باب المندب للاستيراد والتوزيع بالجملة",
      en: "Bab Al-Mandab Wholesale & Bodega Supply Corp.",
    },
    category: "wholesale",
    categoryLabel: { ar: "توريد بالجملة واستيراد", en: "Wholesale & Import Distribution" },
    borough: "Queens",
    boroughAr: "كوينز",
    neighborhood: { ar: "لونغ آيلاند سيتي / أستوريا", en: "Long Island City / Astoria" },
    address: "38-15 31st St, Long Island City, NY 11101",
    foundedYear: 2016,
    verifiedMember: true,
    b2bPartner: true,
    specialty: {
      ar: "توريد البن اليمني الأخضر، الهيل، الأكواب الورقية، ومستلزمات الديلي والبوديقا",
      en: "Green Yemeni Coffee, Cardamom, Custom Cafe Cups, Deli Paper & Beverage Distribution",
    },
    description: {
      ar: "شريك الشراء الجماعي للغرفة التجارية: يوفر أسعار جملة خاصة لأكثر من 400 بوديقا ومقهى يمني في المناطق الخمس.",
      en: "Primary collective-buying partner of the Chamber, delivering bulk paper goods, dairy, and authentic Yemeni imports to 400+ NYC storefronts.",
    },
    phone: "(718) 555-0260",
    hours: { ar: "٥:٠٠ ص – ٦:٠٠ م (توصيل يومي)", en: "5:00 AM – 6:00 PM (Same-Day NYC Delivery)" },
    highlights: [
      { ar: "شريك الشراء التعاوني للغرفة", en: "Official Chamber Co-Op Supplier" },
      { ar: "توصيل مجاني للمحلات الأعضاء", en: "Free Next-Day Delivery for Members" },
    ],
  },
  {
    id: "biz-5",
    name: {
      ar: "مقهى موكا سوهو للقهوة المختصة",
      en: "Al-Mokha Port Coffee & Majlis",
    },
    category: "qahwah",
    categoryLabel: { ar: "مقهى ومجلس أعمال", en: "Specialty Qahwah & Coworking Lounge" },
    borough: "Manhattan",
    boroughAr: "مانهاتن",
    neighborhood: { ar: "إيست فيليدج / سوهو", en: "East Village / Astor Place" },
    address: "112 St Marks Pl, New York, NY 10009",
    foundedYear: 2023,
    verifiedMember: true,
    b2bPartner: false,
    specialty: {
      ar: "قهوة مقطرة من جبال حراز ويافع، مفور، سباعية بالعسل، ومساحة اجتماعات",
      en: "Pour-Over Haraz & Yafe'e Micro-Lots, Mufawar, Sabaya Pastry & Founder Meetups",
    },
    description: {
      ar: "مساحة عصرية في قلب مانهاتن تعرّف المجتمع النيويوركي بإرث ميناء المخا التاريخي وتستضيف لقاءات رواد الأعمال اليمنيين الشباب.",
      en: "Bridging centuries of Port of Mokha coffee heritage with Manhattan's startup and creative community. Hosts monthly Yemeni Founders nights.",
    },
    phone: "(212) 555-0184",
    hours: { ar: "٧:٣٠ ص – ١٢:٠٠ ص", en: "7:30 AM – 12:00 AM" },
    highlights: [
      { ar: "يستضيف لقاء رواد الأعمال الشهري", en: "Monthly Yemeni Tech & Founders Mixer Host" },
      { ar: "بن يمني مباشر من المزارعين", en: "Direct-Trade Yemeni Farmers Network" },
    ],
  },
  {
    id: "biz-6",
    name: {
      ar: "مكتب المتوكل وباوزير للمحاسبة وتراخيص نيويورك",
      en: "Bawazir & Associates CPA & NYC Licensing Advisory",
    },
    category: "services",
    categoryLabel: { ar: "محاسبة قانونية وتراخيص وقانون", en: "CPA, Tax & NYC Regulatory Services" },
    borough: "Bronx",
    boroughAr: "البرونكس",
    neighborhood: { ar: "وايت بلينز رود (البرونكس)", en: "White Plains Rd — Pelham Pkwy" },
    address: "2138 White Plains Rd, Bronx, NY 10462",
    foundedYear: 2012,
    verifiedMember: true,
    b2bPartner: true,
    specialty: {
      ar: "تخليص ضرائب المبيعات (Tax Clearance)، تراخيص DCWP، دفاع OATH، وتأسيس الشركات",
      en: "NYS Sales Tax Clearance, DCWP Tobacco Renewals, OATH Defense & Halal Structuring",
    },
    description: {
      ar: "فريق محاسبين ومستشارين ثنائيي اللغة متخصص في حماية أصحاب البوديقا والمقاهي من غرامات الضرائب وتجديد تراخيص الفود ستامب والتبغ.",
      en: "Bilingual CPAs and licensing specialists dedicated to NYC bodega and cafe compliance, sales tax audits, and penalty mitigation.",
    },
    phone: "(718) 555-0311",
    hours: { ar: "٩:٠٠ ص – ٧:٠٠ م (الإثنين - السبت)", en: "9:00 AM – 7:00 PM (Mon–Sat)" },
    highlights: [
      { ar: "استشارة أولى مجانية لأعضاء الغرفة", en: "Free 30-Min Audit Consult for Chamber Members" },
      { ar: "خبراء في شهادة Tax Clearance", en: "NYS DTF Tax Clearance Specialists" },
    ],
  },
  {
    id: "biz-7",
    name: {
      ar: "أسواق عدن والجزيرة المركزية",
      en: "Aden Crater Halal Supermarket & Bakery",
    },
    category: "bodega",
    categoryLabel: { ar: "سوبرماركت وملحمة ومخبز", en: "Halal Supermarket & Butcher" },
    borough: "Staten Island",
    boroughAr: "ستاتن آيلاند",
    neighborhood: { ar: "نيو دورب / نورث شور", en: "New Dorp / Victory Blvd" },
    address: "1940 Victory Blvd, Staten Island, NY 10314",
    foundedYear: 2019,
    verifiedMember: true,
    b2bPartner: false,
    specialty: {
      ar: "لحوم بلدية حلال، بهارات عدنية، تمور، ومخبوزات يمنية يومية",
      en: "Custom Halal Butcher, Adani Spice Blends, Imported Dates & Fresh Tannour Bread",
    },
    description: {
      ar: "أكبر مركز تمويني يمني في ستاتن آيلاند، يربط العائلات والتجار بمنتجات الوطن بجودة عالية.",
      en: "Staten Island's premier Yemeni-owned grocery anchor, providing fresh halal meats and specialty pantry goods.",
    },
    phone: "(718) 555-0299",
    hours: { ar: "٨:٠٠ ص – ١١:٠٠ م", en: "8:00 AM – 11:00 PM" },
    highlights: [
      { ar: "معتمد في دليل الغرفة التجارية", en: "Verified Staten Island Chapter Anchor" },
      { ar: "تخفيضات عائلية لحاملي بطاقة الغرفة", en: "Member Family Grocery Perks" },
    ],
  },
];

export const CHAMBER_EVENTS: ChamberEvent[] = [
  {
    id: "evt-1",
    title: {
      ar: "العيادة القانونية المجانية: تجديد الفود ستامب (EBT) والاعتراض على مخالفات OATH",
      en: "Free Merchant Clinic: SNAP/EBT Reauthorization & DOHMH/OATH Violation Defense",
    },
    date: { ar: "الأربعاء، ٤ نوفمبر ٢٠٢٦", en: "Wednesday, Nov 4, 2026" },
    time: "11:00 AM – 3:00 PM",
    location: {
      ar: "مقر الغرفة المؤقت — شارع موريس بارك، البرونكس",
      en: "Little Yemen Community Hub — Morris Park Ave, Bronx",
    },
    borough: "Bronx",
    category: { ar: "حماية قانونية وتراخيص", en: "Legal & Compliance Clinic" },
    spotsLeft: 14,
    description: {
      ar: "أحضر أي رسالة وصلتك من البلدية (DOHMH, DCWP, USDA) وسيقوم محامون ومتطوعون ثنائيو اللغة بمساعدتك مجاناً في صياغة الرد وتجديد التراخيص.",
      en: "Bring your city notices or SNAP reauthorization letters. Bilingual legal advocates and CPAs will help you file responses on the spot.",
    },
  },
  {
    id: "evt-2",
    title: {
      ar: "ملتقى نيويورك الأول لتجار ومزارعي القهوة اليمنية المختصة",
      en: "NYC Yemeni Specialty Coffee & Roasters Trade Summit",
    },
    date: { ar: "الأحد، ١٥ نوفمبر ٢٠٢٦", en: "Sunday, Nov 15, 2026" },
    time: "2:00 PM – 7:00 PM",
    location: {
      ar: "باي ريدج — الجادة الخامسة، بروكلين",
      en: "Bay Ridge Cultural Hall — 5th Ave, Brooklyn",
    },
    borough: "Brooklyn",
    category: { ar: "توريد وشبكة أعمال", en: "Trade & Supply Chain" },
    spotsLeft: 28,
    description: {
      ar: "لقاء يجمع أصحاب مقاهي القهوة اليمنية في نيويورك مع مستوردي البن المباشرين وموردي الحليب والأكواب لتوقيع اتفاقيات شراء جماعي بأسعار مخفضة.",
      en: "Connecting 80+ NYC Yemeni cafe owners with direct-trade green bean importers, commercial espresso technicians, and bulk dairy suppliers.",
    },
  },
  {
    id: "evt-3",
    title: {
      ar: "اجتماع الطاولة المستديرة مع مفوض خدمات الأعمال الصغيرة في نيويورك (NYC SBS)",
      en: "Town Hall with NYC Dept. of Small Business Services & Borough Presidents",
    },
    date: { ar: "الثلاثاء، ١ ديسمبر ٢٠٢٦", en: "Tuesday, Dec 1, 2026" },
    time: "6:00 PM – 8:30 PM",
    location: {
      ar: "داون تاون بروكلين — قاعة الغرفة التجارية",
      en: "Downtown Brooklyn Civic Center",
    },
    borough: "Brooklyn",
    category: { ar: "تمثيل رسمي ومنح مالية", en: "Advocacy & City Grants" },
    spotsLeft: 42,
    description: {
      ar: "حوار مباشر باللغتين العربية والإنجليزية حول أمان المحلات التجارية، تخفيف الغرامات، والمنح المالية المتاحة لتطوير الواجهات والثلاجات.",
      en: "Direct bilingual dialogue on storefront security grants, cutting red tape for family bodegas, and Halal-compliant small business capital.",
    },
  },
];

export const SUPPLY_DEALS: SupplyDeal[] = [
  {
    id: "deal-1",
    supplier: {
      ar: "تحالف مستوردي البن اليمني (حراز / يافع / مطري)",
      en: "Yemen Direct Coffee Co-Op (Haraz, Yafe'e & Mattari)",
    },
    category: { ar: "المقاهي والمحامص", en: "Specialty Cafes" },
    discount: { ar: "خصم 18% على الشراء الجماعي", en: "18% Bulk Co-Op Savings" },
    detail: {
      ar: "شحن مباشر وتخليص جمركي موحد لأعضاء الغرفة مع ضمان ثبات السعر طوال العام.",
      en: "Pooled container shipping through Port of NY/NJ with locked-in annual pricing for member cafes.",
    },
    minOrder: { ar: "٢ كيس خيش (٦٠ كجم)", en: "2 Burlap GrainPro Bags (60kg)" },
  },
  {
    id: "deal-2",
    supplier: {
      ar: "شبكة نيويورك لتوريد الألبان، الحليب المكثف، ومستلزمات الديلي",
      en: "Tri-State Dairy, Condensed Milk & Deli Provisions Network",
    },
    category: { ar: "البوديقا والمقاهي", en: "Bodegas & Cafes" },
    discount: { ar: "خصم 14% + توصيل مجاني", en: "14% Off Wholesale + Free Delivery" },
    detail: {
      ar: "حليب كامل الدسم للتبخير، حليب مكثف ومبخر للشاي العدني، وأجبان ولحوم ديلي حلال.",
      en: "Barista whole milk, cases of condensed/evaporated milk for Adani Chai, and halal deli cold cuts.",
    },
    minOrder: { ar: "طلب أسبوعي يبدأ من $250", en: "$250 Weekly Storefront Minimum" },
  },
  {
    id: "deal-3",
    supplier: {
      ar: "برنامج أجهزة الكاشير ونقاط البيع المتوافقة مع قوانين نيويورك",
      en: "NYC-Compliant Dual-Pricing POS & EBT Terminal Alliance",
    },
    category: { ar: "الأنظمة المالية والمدفوعات", en: "POS & Payments" },
    discount: { ar: "إعفاء كامل من رسوم الأجهزة", en: "$0 Hardware + Legal Dual-Pricing Setup" },
    detail: {
      ar: "مبرمجة مسبقاً لفصل أصناف EBT الباردة عن الساخنة، وعرض سعر الكاش والبطاقة حسب قانون DCWP.",
      en: "Pre-configured to block hot items on SNAP/EBT and automatically print legal NYS Cash vs. Credit receipts.",
    },
    minOrder: { ar: "متاح لجميع الأعضاء", en: "Available to All Active Members" },
  },
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "tier-bodega",
    name: {
      ar: "عضوية الدكّان والبوديقا",
      en: "Cornerstone Merchant (Bodega & Deli)",
    },
    subtitle: {
      ar: "مخصصة لمحلات البقالة، الديلي، والسوبرماركت العائلي",
      en: "Built for independent family bodegas, delis & neighborhood markets",
    },
    price: { ar: "$25", en: "$25" },
    period: { ar: "/ شهرياً (أو $250 سنوياً)", en: "/ month (or $250/yr)" },
    features: [
      {
        ar: "إدراج موثّق في دليل الأعمال اليمني في نيويورك",
        en: "Verified listing & badge in the NYC Yemeni Business Directory",
      },
      {
        ar: "وصول كامل لأداة «مساعد دكّاني» لفحص المخالفات وتنبيهات التراخيص",
        en: "Full access to Dukkani AI Mail Scanner, License Tracker & OATH Defense Builder",
      },
      {
        ar: "خصومات الشراء الجماعي على الألبان، الأكياس، وأجهزة الكاشير",
        en: "Co-op buying discounts on dairy, paper goods & DCWP-compliant POS",
      },
      {
        ar: "المساعدة المجانية في تجديد ترخيص الفود ستامب (SNAP/EBT)",
        en: "Priority 1-on-1 assistance with USDA SNAP/EBT 5-year reauthorization",
      },
    ],
  },
  {
    id: "tier-qahwah",
    name: {
      ar: "عضوية القهوة والضيافة والمطاعم",
      en: "Qahwah House & Hospitality Partner",
    },
    subtitle: {
      ar: "لمقاهي القهوة اليمنية المختصة، المحامص، والمطاعم",
      en: "Tailored for Yemeni specialty coffee houses, roasteries & restaurants",
    },
    price: { ar: "$45", en: "$45" },
    period: { ar: "/ شهرياً (أو $450 سنوياً)", en: "/ month (or $450/yr)" },
    badge: { ar: "الأكثر طلباً في نيويورك", en: "Most Popular in NYC" },
    featured: true,
    features: [
      {
        ar: "جميع مزايا عضوية الدكّان + أولوية الظهور في خريطة القهوة اليمنية",
        en: "Everything in Cornerstone + Featured placement on the NYC Yemeni Qahwah Trail",
      },
      {
        ar: "الانضمام لتحالف استيراد البن اليمني والحليب المكثف بأسعار الجملة",
        en: "Access to pooled Yemeni green coffee bean imports & wholesale dairy rates",
      },
      {
        ar: "فحص تجريبي للتفتيش الصحي (DOHMH Grade A) خاص بالمقاهي والمعجنات",
        en: "Dedicated DOHMH Grade-A mock inspection & pastry time-control templates",
      },
      {
        ar: "تمثيل قانوني مخفض في جلسات استماع OATH ومراجعات الإيجار التجاري",
        en: "Subsidized legal clinic representation for OATH hearings & commercial leases",
      },
    ],
  },
  {
    id: "tier-wholesale",
    name: {
      ar: "عضوية الموردين والشركات والتوسع الوطني",
      en: "Wholesale, Importer & National Expansion",
    },
    subtitle: {
      ar: "لشركات التوزيع، المستوردين، المكاتب المهنية، والفروع خارج نيويورك",
      en: "For distributors, multi-unit brands, CPAs/attorneys & national chapters",
    },
    price: { ar: "$120", en: "$120" },
    period: { ar: "/ شهرياً", en: "/ month" },
    features: [
      {
        ar: "اعتماد رسمي كمورّد شريك (B2B Partner) أمام آلاف المحلات اليمنية",
        en: "Verified B2B Supplier showcase to 6,000+ NYC & national Yemeni storefronts",
      },
      {
        ar: "الربط مع غرف التجارة في ديربورن (ميشيغان)، كاليفورنيا، وشيكاغو",
        en: "Cross-state trade introductions (NYC ↔ Dearborn MI, Bay Area CA, Chicago IL)",
      },
      {
        ar: "رعاية الفعاليات الرسمية وحضور لقاءات مسؤولي بلدية نيويورك",
        en: "VIP seating at City Hall & NYC SBS roundtables and annual Gala sponsorship",
      },
      {
        ar: "دعم التمويل المتوافق مع الشريعة الإسلامية للتوسع وفتح فروع جديدة",
        en: "Halal growth capital advisory & multi-state franchise expansion support",
      },
    ],
  },
];
