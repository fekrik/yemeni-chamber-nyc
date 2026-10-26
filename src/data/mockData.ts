export type Language = "ar" | "en";

export interface ScannedNotice {
  id: string;
  agencyCode: "DOHMH" | "DCWP" | "USDA-SNAP" | "OATH/ECB" | "DEP";
  agencyName: { ar: string; en: string };
  documentTitle: { ar: string; en: string };
  noticeNumber: string;
  dateIssued: string;
  deadline: string;
  daysLeft: number;
  fineAmount: string;
  urgency: "high" | "medium" | "low";
  storeName: string;
  summary: { ar: string; en: string };
  yemeniVoiceScript: { ar: string; en: string };
  violationCodes: {
    code: string;
    points?: number;
    description: { ar: string; en: string };
  }[];
  actionSteps: {
    step: number;
    title: { ar: string; en: string };
    detail: { ar: string; en: string };
    linkLabel?: { ar: string; en: string };
    linkUrl?: string;
  }[];
  rawLetterPreview: {
    header: string;
    recipient: string;
    bodyLines: string[];
    footer: string;
  };
}

export interface StoreLicense {
  id: string;
  name: { ar: string; en: string };
  agency: string;
  licenseNumber: string;
  status: "active" | "expiring_soon" | "action_required";
  expiryDate: string;
  daysRemaining: number;
  renewalFee: string;
  notes: { ar: string; en: string };
  checklist: { ar: string; en: string }[];
}

export interface InspectionItem {
  id: string;
  category: "bodega" | "qahwah" | "both";
  code: string;
  points: number;
  isCritical: boolean;
  title: { ar: string; en: string };
  tip: { ar: string; en: string };
  checked: boolean;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  timestamp: string;
  text: { ar: string; en: string };
  isVoiceNote?: boolean;
  voiceDuration?: string;
  attachedNoticeId?: string;
  quickActions?: { label: { ar: string; en: string }; promptKey: string }[];
}

export const SAMPLE_NOTICES: ScannedNotice[] = [
  {
    id: "dohmh-01",
    agencyCode: "DOHMH",
    agencyName: {
      ar: "دائرة الصحة في نيويورك (NYC DOHMH)",
      en: "NYC Dept. of Health & Mental Hygiene (DOHMH)",
    },
    documentTitle: {
      ar: "إشعار مخالفة تفتيش صحي واستدعاء لجلسة OATH",
      en: "Sanitary Inspection Notice of Violation & OATH Summons",
    },
    noticeNumber: "SUM-09482173-X",
    dateIssued: "2026-10-18",
    deadline: "2026-11-12",
    daysLeft: 18,
    fineAmount: "$450 – $600",
    urgency: "high",
    storeName: "Sana'a Deli & Qahwah Corp (Morris Park Ave, Bronx)",
    summary: {
      ar: "يا حاج، هذه ورقة من مفتش الصحة (Health Department). سجلوا عليك مخالفتين بمجموع 12 نقطة (لا زلت في درجة A لأنها أقل من 13 نقطة، الحمد لله). لكن لازم تحضر جلسة استماع أونلاين (OATH) يوم 12 نوفمبر أو ترد عليهم قبل الموعد عشان ما تتضاعف الغرامة.",
      en: "This is an official NYC Health Department inspection summons. You received 2 violations totaling 12 points (you still qualify for an 'A' grade since it's under 13 points). However, you must respond to or attend an OATH hearing by Nov 12, 2026 to avoid default penalties.",
    },
    yemeniVoiceScript: {
      ar: "السلام عليكم يا خبير. تطمّن، هذه الورقة من وزارة الصحة في نيويورك. عندك مخالفتين بمجموع اثنعشر نقطة، يعني الحمد لله المحل باقي على درجة A. المخالفة الأولى بسبب حرارة ثلاجة الحليب والجبن كانت خمسة وأربعين درجة والمطلوب واحد وأربعين أو أقل. لازم تصلح الثلاجة وتصور الفاتورة، وعندك جلسة أونلاين يوم اثنعشر نوفمبر.",
      en: "Peace be upon you! Don't worry, your Grade A is safe at 12 points. The main issue is your dairy reach-in cooler was at 45 degrees instead of 41 degrees or below. Keep your repair receipt and submit it before your November 12 OATH online hearing to reduce the fine.",
    },
    violationCodes: [
      {
        code: "02G (Critical)",
        points: 7,
        description: {
          ar: "حرارة ثلاجة الألبان والسندويتشات كانت 45°F (المطلوب 41°F أو أقل).",
          en: "Cold food item held above 41°F (milk/deli reach-in cooler measured at 45°F).",
        },
      },
      {
        code: "08A",
        points: 5,
        description: {
          ar: "فتحة صغيرة تحت الباب الخلفي للمخزن تحتاج عازل (Weatherstripping) لمنع دخول الحشرات.",
          en: "Facility not vermin proof; gap observed at bottom of rear storage door.",
        },
      },
    ],
    actionSteps: [
      {
        step: 1,
        title: {
          ar: "١. اضبط حرارة الثلاجة وصوّر ميزان الحرارة",
          en: "1. Fix cooler thermostat & take a photo of thermometer at ≤ 38°F",
        },
        detail: {
          ar: "تأكد أن الثلاجة تحت 40°F واحتفظ بفاتورة فني التبريد كدليل للقاضي.",
          en: "Keep technician invoice and timestamped thermometer photo as mitigation evidence.",
        },
      },
      {
        step: 2,
        title: {
          ar: "٢. ركّب ربلة/عازل تحت الباب الخلفي (Door Sweep)",
          en: "2. Install metal door sweep on rear storage door",
        },
        detail: {
          ar: "تكلفتها 15 دولار من الهاردوير، صوّر الباب بعد التركيب.",
          en: "Costs ~$15 at any hardware store; snap a photo showing zero light gap.",
        },
      },
      {
        step: 3,
        title: {
          ar: "٣. قدّم جلسة استماع عن بُعد (OATH One-Click Hearing)",
          en: "3. Submit OATH Online Hearing defense by Nov 12, 2026",
        },
        detail: {
          ar: "لا تحتاج للذهاب للمحكمة، نقدر نجهز لك رد مكتوب بالإنجليزي ترفعه من الجوال.",
          en: "No need to go in person—submit a written statement with photos via OATH portal.",
        },
      },
    ],
    rawLetterPreview: {
      header: "NYC DEPARTMENT OF HEALTH AND MENTAL HYGIENE — OATH SUMMONS",
      recipient: "SANA'A DELI & QAHWAH CORP | 1142 MORRIS PARK AVE, BRONX NY 10461",
      bodyLines: [
        "SUMMONS NO: 09482173-X          INSPECTION DATE: 10/18/2026",
        "TOTAL VIOLATION POINTS: 12      CURRENT GRADE: A",
        "VIOLATION 02G (7 PTS): Cold TCS food held at 45°F in front deli display case.",
        "VIOLATION 08A (5 PTS): Gap 1/2 inch at bottom of rear cellar door.",
        "HEARING DATE: 11/12/2026 AT OATH HEARINGS DIVISION. FAILURE TO RESPOND WILL RESULT IN DEFAULT PENALTY UP TO $1,200.",
      ],
      footer: "OFFICIAL NYC NOTICE — RESPOND AT NYC.GOV/OATH",
    },
  },
  {
    id: "dcwp-02",
    agencyCode: "DCWP",
    agencyName: {
      ar: "دائرة حماية المستهلك والعامل (NYC DCWP)",
      en: "NYC Dept. of Consumer & Worker Protection (DCWP)",
    },
    documentTitle: {
      ar: "تنبيه تجديد رخصة التبغ ومراجعة لائحة الأسعار",
      en: "Tobacco Retail Dealer License Renewal & Price Display Notice",
    },
    noticeNumber: "DCWP-TRD-2026-8812",
    dateIssued: "2026-10-20",
    deadline: "2026-12-01",
    daysLeft: 37,
    fineAmount: "$340 (رسوم التجديد / Renewal Fee)",
    urgency: "medium",
    storeName: "Bay Ridge Aden Market Inc (5th Ave, Brooklyn)",
    summary: {
      ar: "هذا إشعار رسمي من DCWP بخصوص تجديد رخصة بيع الدخان (Tobacco Retail Dealer) قبل نهاية السنة، مع تذكير مشدد بوضع تسعيرة واضحة على كل بضاعة في المحل ومنع بيع السجائر الإلكترونية المنكّهة.",
      en: "Official DCWP reminder that your biennial Tobacco Retail Dealer license must be renewed before Dec 31, along with a compliance notice on item/shelf price posting and flavored e-cigarette restrictions.",
    },
    yemeniVoiceScript: {
      ar: "حياك الله يا غالي. هذه الورقة من حماية المستهلك DCWP، ما فيها غرامة حالياً الحمد لله، بس يذكروك تجدد رخصة الدخان قبل شهر ديسمبر، وينبهوا أن مفتشينهم يمروا هذي الأيام يتأكدوا أن كل علبة وبضاعة عليها تسعيرة واضحة ومعلّقة لوحة السن القانوني ٢١ سنة عند الكاشير.",
      en: "Hello brother! Good news—this is not a fine. It's a DCWP renewal notice for your Tobacco Retail Dealer license due by December, plus a heads-up that inspectors are checking price tags and Age-21 signage near the register.",
    },
    violationCodes: [
      {
        code: "TRD-RENEW",
        description: {
          ar: "موعد تجديد رخصة بيع التبغ كل سنتين (رسوم التجديد 340 دولار).",
          en: "Biennial Tobacco Retail Dealer license renewal required ($340 fee).",
        },
      },
      {
        code: "NYC Admin § 20-708",
        description: {
          ar: "إلزامية وضع السعر على كل منتج أو على الرف بوضوح تام.",
          en: "Mandatory visible retail price display on every item or shelf tag.",
        },
      },
    ],
    actionSteps: [
      {
        step: 1,
        title: {
          ar: "١. احصل على شهادة براءة ذمة ضريبية (NYS Tax Clearance)",
          en: "1. Request NYS DTF Certificate of Tax Clearance",
        },
        detail: {
          ar: "مطلوبة قبل تقديم طلب تجديد رخصة التبغ في بوابة NYC Business.",
          en: "Required before DCWP will process your Tobacco license renewal.",
        },
      },
      {
        step: 2,
        title: {
          ar: "٢. تأكد من لوحة عمر 21+ وعدم وجود فيب منكّه",
          en: "2. Verify Age 21+ sign & zero flavored vape products on premises",
        },
        detail: {
          ar: "مخالفة الفيب المنكّه في نيويورك قد تؤدي لسحب رخصة الدخان واليانصيب.",
          en: "Flavored e-cigarette violations carry severe fines and license suspension risks.",
        },
      },
    ],
    rawLetterPreview: {
      header: "NYC DEPARTMENT OF CONSUMER AND WORKER PROTECTION (DCWP)",
      recipient: "BAY RIDGE ADEN MARKET INC | 7418 5TH AVE, BROOKLYN NY 11209",
      bodyLines: [
        "LICENSE TYPE: TOBACCO RETAIL DEALER       LIC #: 2049182-DCA",
        "EXPIRATION DATE: 12/31/2026               RENEWAL FEE: $340.00",
        "IMPORTANT NOTICE: YOU MUST OBTAIN NYS TAX CLEARANCE PRIOR TO RENEWAL.",
        "INSPECTION ALERT: ENSURE ALL MERCHANDISE DISPLAYS CLEAR ITEM OR SHELF PRICING.",
      ],
      footer: "RENEW ONLINE AT NYC.GOV/BUSINESS | CALL 311 FOR ARABIC INTERPRETER",
    },
  },
  {
    id: "snap-03",
    agencyCode: "USDA-SNAP",
    agencyName: {
      ar: "وزارة الزراعة الأمريكية — برنامج الفود ستامب (USDA SNAP / EBT)",
      en: "USDA Food & Nutrition Service (SNAP / EBT Retailer)",
    },
    documentTitle: {
      ar: "طلب إعادة توثيق المحل لاستمرار قبول بطاقة الفود ستامب (EBT)",
      en: "Mandatory SNAP Retailer Reauthorization & Staple Food Verification",
    },
    noticeNumber: "FNS-3920184-NY",
    dateIssued: "2026-10-21",
    deadline: "2026-11-20",
    daysLeft: 26,
    fineAmount: "$0 (خطر إيقاف جهاز EBT / Risk of EBT Deauthorization)",
    urgency: "high",
    storeName: "Little Yemen Grocery & Halal Meat (White Plains Rd, Bronx)",
    summary: {
      ar: "مهم جداً! هذه رسالة من إدارة الفود ستامب (USDA FNS). يطلبون تحديث بيانات المحل وتأكيد وجود الأصناف الغذائية الأربعة (ألبان، خبز/حبوب، لحوم/بيض، فواكه/خضار) خلال 30 يوم، وإلا سيتم إيقاف جهاز الـ EBT في المحل.",
      en: "CRITICAL: USDA FNS requires periodic reauthorization within 30 days to keep your EBT terminal active. You must verify store ownership docs and the 4 staple food categories.",
    },
    yemeniVoiceScript: {
      ar: "انتبه يا أخي، هذي الورقة مهمة جداً من جماعة الفود ستامب EBT. ما عليها مخالفة فلوس، لكن لو ما رديت عليهم خلال ثلاثين يوم بيوقفوا جهاز الفود ستامب في البوديقا. يشتوا ترفع لهم صور الرفوف تثبت أن عندك ألبان وخضار ولحوم وحبوب، وصورة رخصة المحل.",
      en: "Important heads-up brother: This is your USDA SNAP EBT reauthorization letter. There is no fine, but if you don't reply within 30 days, they will deactivate your EBT machine! You just need to upload shelf photos of the 4 staple food categories and your store permit.",
    },
    violationCodes: [
      {
        code: "7 CFR § 278.1",
        description: {
          ar: "شرط توفر 3 أصناف على الأقل في كل من المجموعات الغذائية الأربعة بالمحل.",
          en: "Criterion A: Must stock at least 3 varieties in each of the 4 staple food categories.",
        },
      },
    ],
    actionSteps: [
      {
        step: 1,
        title: {
          ar: "١. صوّر ثلاجة الألبان، اللحوم/البيض، الخبز/الأرز، والخضار/الفواكه",
          en: "1. Take clear photos of Dairy, Meat/Poultry, Grains, and Produce shelves",
        },
        detail: {
          ar: "تأكد من ظهور 3 أنواع مختلفة على الأقل في كل قسم قبل التصوير.",
          en: "Make sure at least 3 distinct varieties & perishable items are visible.",
        },
      },
      {
        step: 2,
        title: {
          ar: "٢. ارفع المستندات عبر موقع USDA FNS أو تواصل مع مكتب YAMA للمساعدة",
          en: "2. Upload Reauthorization Form online or book free YAMA assistance",
        },
        detail: {
          ar: "جمعية التجار اليمنيين (YAMA) تساعد التجار مجاناً في تعبئة نموذج الفود ستامب.",
          en: "YAMA provides free hands-on help for NYC Yemeni merchants filing SNAP renewals.",
        },
      },
    ],
    rawLetterPreview: {
      header: "UNITED STATES DEPARTMENT OF AGRICULTURE — FOOD AND NUTRITION SERVICE",
      recipient: "LITTLE YEMEN GROCERY CORP | FNS NUMBER: 0928412",
      bodyLines: [
        "SUBJECT: MANDATORY SNAP RETAILER REAUTHORIZATION NOTICE",
        "YOU MUST COMPLETE REAUTHORIZATION WITHIN 30 DAYS OF RECEIPT OF THIS LETTER.",
        "FAILURE TO RESPOND BY 11/20/2026 WILL RESULT IN WITHDRAWAL OF YOUR SNAP/EBT AUTHORIZATION.",
        "REQUIRED: UPDATED APPLICATION, STAPLE FOOD INVENTORY VERIFICATION & BUSINESS LICENSES.",
      ],
      footer: "USDA FNS RETAILER PORTAL — 1-877-823-4369",
    },
  },
];

export const INITIAL_LICENSES: StoreLicense[] = [
  {
    id: "lic-dohmh",
    name: {
      ar: "تصريح تداول الأغذية والكافيه (NYC DOHMH Food Permit)",
      en: "NYC DOHMH Food Service / Retail Permit",
    },
    agency: "NYC DOHMH",
    licenseNumber: "41928374",
    status: "active",
    expiryDate: "2027-04-30",
    daysRemaining: 187,
    renewalFee: "$280",
    notes: {
      ar: "الدرجة الحالية: A (12 نقطة). تذكر: لازم وجود شخص يحمل شهادة Food Protection في المحل طوال وقت العمل.",
      en: "Current Grade: A (12 pts). Reminder: A certified Food Protection supervisor must be on site during all hours of operation.",
    },
    checklist: [
      {
        ar: "شهادة Food Protection معلقة والأصل موجود في المحل",
        en: "Original Food Protection Certificate on premises at all times",
      },
      {
        ar: "لوحة الدرجة A معلقة على الواجهة الأمامية بارتفاع 4-6 أقدام",
        en: "Letter Grade 'A' card posted on front window (4–6 ft from ground)",
      },
    ],
  },
  {
    id: "lic-snap",
    name: {
      ar: "ترخيص بطاقة الفود ستامب (USDA SNAP / EBT Authorization)",
      en: "USDA FNS SNAP / EBT Retailer Authorization",
    },
    agency: "USDA FNS",
    licenseNumber: "FNS-0928412",
    status: "action_required",
    expiryDate: "2026-11-20",
    daysRemaining: 26,
    renewalFee: "$0 (Free)",
    notes: {
      ar: "عاجل: مطلوب تحديث بيانات المحل (Reauthorization) قبل 20 نوفمبر حتى لا يتوقف جهاز الـ EBT.",
      en: "URGENT: 5-year Reauthorization due by Nov 20, 2026. Keep cold deli items separate from hot prepared tax items.",
    },
    checklist: [
      {
        ar: "ممنوع بيع الأكل الساخن (Hot Food) ببطاقة الفود ستامب EBT",
        en: "Never ring up hot prepared foods or non-food items on SNAP EBT",
      },
      {
        ar: "توفير 3 أصناف على الأقل من الألبان واللحوم والحبوب والخضار",
        en: "Maintain 3+ varieties in all 4 staple food categories daily",
      },
    ],
  },
  {
    id: "lic-dcwp-tobacco",
    name: {
      ar: "رخصة بيع التبغ والسجائر (DCWP Tobacco Retail Dealer)",
      en: "DCWP Tobacco Retail Dealer License",
    },
    agency: "NYC DCWP",
    licenseNumber: "2049182-DCA",
    status: "expiring_soon",
    expiryDate: "2026-12-31",
    daysRemaining: 67,
    renewalFee: "$340",
    notes: {
      ar: "تنتهي بنهاية شهر ديسمبر. تحتاج شهادة Tax Clearance من ولاية نيويورك قبل التقديم.",
      en: "Expires Dec 31, 2026. Requires NYS DTF Certificate of Tax Clearance prior to submitting renewal.",
    },
    checklist: [
      {
        ar: "لوحة منع البيع لأقل من 21 سنة ولوحة أسعار السجائر الرسمية",
        en: "NYC Age-21 Tobacco sign & minimum pack price sign posted at register",
      },
      {
        ar: "خلو المحل تماماً من السجائر الإلكترونية المنكّهة (Flavored Vapes)",
        en: "Zero flavored e-cigarettes or untaxed out-of-state packs on site",
      },
    ],
  },
  {
    id: "lic-workers-comp",
    name: {
      ar: "تأمين إصابات العمل والعمالة (NYS Workers' Comp & Disability)",
      en: "NYS Workers' Compensation (C-105.2) & Disability",
    },
    agency: "NYS WCB",
    licenseNumber: "WCB-884120-NY",
    status: "active",
    expiryDate: "2027-03-15",
    daysRemaining: 141,
    renewalFee: "Varies",
    notes: {
      ar: "ساري المفعول. تأكد من الاحتفاظ بسجلات رواتب العمال والحد الأدنى للأجور في نيويورك ($16.50/ساعة).",
      en: "Active. Ensure compliance with NYC minimum wage logs and paid safe/sick leave notices.",
    },
    checklist: [
      {
        ar: "تعليق شهادة التأمين C-105.2 في مكان واضح للمفتشين",
        en: "Post Form C-105.2 (Workers' Comp) visibly inside the shop",
      },
    ],
  },
];

export const INITIAL_CHECKLIST: InspectionItem[] = [
  {
    id: "chk-1",
    category: "both",
    code: "04A",
    points: 10,
    isCritical: true,
    title: {
      ar: "وجود شهادة حماية الغذاء (Food Protection Certificate) مع المشرف المتواجد حالياً",
      en: "Supervisor on duty holds a valid NYC DOHMH Food Protection Certificate",
    },
    tip: {
      ar: "أكبر مخالفة فورية (10 نقاط)! حتى لو الشهادة معلقة على الجدار، لازم صاحب الشهادة نفسه يكون موجود بالمحل وقت التفتيش.",
      en: "10-point critical violation! Simply hanging a certificate on the wall isn't enough—the certified person must be physically present.",
    },
    checked: true,
  },
  {
    id: "chk-2",
    category: "both",
    code: "02G",
    points: 7,
    isCritical: true,
    title: {
      ar: "حرارة ثلاجات الحليب، الأجبان، واللحوم الباردة 41°F أو أقل (مع وجود ميزان حرارة بكل ثلاجة)",
      en: "All cold-holding units (milk, deli meats, cream) are ≤ 41°F with working thermometers",
    },
    tip: {
      ar: "في مقاهي القهوة اليمنية: انتبه لحليب التبخير والحليب المكثف (Condensed Milk) المفتوح — لازم يرجع للثلاجة فوراً!",
      en: "For Yemeni coffee shops: Opened condensed milk (حليب عدني) and whole milk pitchers must stay refrigerated at ≤ 41°F, never left on the counter!",
    },
    checked: true,
  },
  {
    id: "chk-3",
    category: "qahwah",
    code: "02B",
    points: 7,
    isCritical: true,
    title: {
      ar: "حفظ المعجنات (خلية النحل، السباعية، السمبوسة بالجبن/اللحم) في سخان 140°F+ أو ثلاجة 41°F-",
      en: "Savory/cheese pastries (Honeycomb bread, Sambusa, Sabaya) held at ≥ 140°F or ≤ 41°F",
    },
    tip: {
      ar: "المفتش يعتبر خلية النحل المحشية بالجبن الكريمي طعاماً حساساً للحرارة (TCS) إذا بقيت في الفترينة العادية بدون تبريد أو تسخين لأكثر من ساعتين.",
      en: "Cream-cheese filled Khaliyat Nahal (honeycomb bread) is considered Time/Temperature Control for Safety (TCS) unless certified shelf-stable or time-labeled.",
    },
    checked: false,
  },
  {
    id: "chk-4",
    category: "both",
    code: "06C",
    points: 5,
    isCritical: true,
    title: {
      ar: "حوض غسيل اليدين (Handwashing Sink) غير مسدود، فيه ماء ساخن، صابون، ومناديل ورقية",
      en: "Handwashing sink is unobstructed, has hot water, soap, paper towels & 'Wash Hands' sign",
    },
    tip: {
      ar: "لا تضع أي إبريق أو صحن داخل حوض غسيل اليدين أبداً ولو لدقيقة واحدة!",
      en: "Never store a single cup, sponge, or pitcher inside the dedicated handwashing sink—instant 5-point critical violation.",
    },
    checked: true,
  },
  {
    id: "chk-5",
    category: "bodega",
    code: "DCWP-01",
    points: 5,
    isCritical: false,
    title: {
      ar: "وضع تسعيرة واضحة (Price Tag) على جميع البضائع والمشروبات في الرفوف والثلاجات",
      en: "Every retail item or shelf row has a clearly visible price tag (DCWP rule)",
    },
    tip: {
      ar: "مفتشو DCWP يكتبون غرامات فورية إذا كانت العصائر أو المعلبات بدون سعر واضح أو إذا تم فرض رسوم كريدت كارد بدون إعلان واضح.",
      en: "DCWP fines heavily for missing price tags or credit card surcharges where the total credit price isn't posted.",
    },
    checked: false,
  },
  {
    id: "chk-6",
    category: "both",
    code: "10F",
    points: 3,
    isCritical: false,
    title: {
      ar: "إغلاق الفتحات تحت الأبواب وحول أنابيب المياه، ورفع الكراتين 6 إنش عن الأرض في المخزن",
      en: "All doors/pipes sealed against pests; stock stored at least 6 inches off the floor",
    },
    tip: {
      ar: "لا تترك كراتين الأكواب أو أكياس البن والسكر على الأرض مباشرة في البيسمنت (القبو).",
      en: "Keep coffee burlap sacks, sugar bags, and paper goods on dunnage racks 6+ inches off the basement floor.",
    },
    checked: false,
  },
  {
    id: "chk-7",
    category: "both",
    code: "06E",
    points: 5,
    isCritical: true,
    title: {
      ar: "مجرفة الثلج (Ice Scoop) محفوظة في حامل نظيف خارج ماكينة الثلج وليس مدفونة داخل الثلج",
      en: "Ice scoop stored in a clean holder outside the ice machine (handle never touching ice)",
    },
    tip: {
      ar: "أول شيء يفتح عليه مفتش الصحة في الكافيه أو الديلي هو ماكينة الثلج!",
      en: "One of the first places DOHMH inspectors look in cafes and delis is inside the ice bin.",
    },
    checked: true,
  },
];

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: "msg-1",
    sender: "bot",
    timestamp: "09:15 AM",
    text: {
      ar: "حيّا الله أصحابنا في نيويورك! ☕🗽 أنا «مساعد دكّاني»، رفيقك الذكي لإدارة البوديقا أو المقهى اليمني.\n\nتقدر تصور لي أي رسالة وصلتك بالبريد من البلدية (الصحة DOHMH، حماية المستهلك DCWP، الفود ستامب EBT)، أو تسألني بالصوت أو الكتابة بالعربي أو الإنجليزي!",
      en: "Welcome to Dukkani NYC! ☕🗽 I'm your bilingual back-office assistant for NYC bodegas, delis, and Yemeni coffee shops.\n\nSnap a photo of any city mail/violation (DOHMH, DCWP, SNAP/EBT, OATH), or ask me anything via voice or text in Arabic or English!",
    },
    isVoiceNote: true,
    voiceDuration: "0:18",
    quickActions: [
      {
        label: {
          ar: "📸 فحص ورقة مخالفة الصحة (DOHMH)",
          en: "📸 Scan DOHMH Health Summons",
        },
        promptKey: "scan_dohmh",
      },
      {
        label: {
          ar: "☕ شروط مقهى يمني جديد في نيويورك؟",
          en: "☕ Rules for Yemeni Coffee Shop?",
        },
        promptKey: "qahwah_rules",
      },
      {
        label: {
          ar: "💳 رسوم الكريدت كارد القانونية (4%)؟",
          en: "💳 Legal Credit Card Surcharge Rules?",
        },
        promptKey: "cc_surcharge",
      },
      {
        label: {
          ar: "🛒 ما المسموح والممنوع في EBT؟",
          en: "🛒 SNAP / EBT Hot vs Cold Deli Rules?",
        },
        promptKey: "ebt_rules",
      },
    ],
  },
];

export const BOT_KNOWLEDGE_RESPONSES: Record<
  string,
  {
    userPrompt: { ar: string; en: string };
    botReply: { ar: string; en: string };
    voiceScript: { ar: string; en: string };
  }
> = {
  scan_dohmh: {
    userPrompt: {
      ar: "وصلتني ورقة مخالفة من مفتش الصحة (DOHMH) وعندي جلسة OATH، كيف أتصرف؟",
      en: "I got a DOHMH inspection violation summons with an OATH hearing date. What should I do?",
    },
    botReply: {
      ar: "لا تقلق يا غالي! ⚖️ إذا مجموع النقاط بين **0 و13 نقطة** فدرجتك هي **A**.\n\n**الخطوات الذكية قبل جلسة OATH:**\n1. **صلّح المخالفة فوراً وصوّرها:** (مثلاً: صورة ميزان حرارة الثلاجة عند 38°F أو فاتورة الفني).\n2. **لا تتجاهل موعد الجلسة أبداً:** التجاهل يضاعف الغرامة تلقائياً (Default Penalty).\n3. **قدّم جلسة أونلاين (One-Click Hearing):** تقدر ترفع الصور مع شرح بسيط بالإنجليزي بدون ما تروح المحكمة وتخسر يوم شغل.\n\n💡 اضغط على تبويب **«فاحص البريد»** بالأسفل لتجربة مسح الورقة وتوليد خطاب دفاع جاهز بالإنجليزي!",
      en: "Don't panic! ⚖️ If your total points are **0 to 13**, you still keep your **Grade A**.\n\n**What to do before your OATH hearing:**\n1. **Fix & Document Immediately:** Snap timestamped photos (e.g., cooler thermometer at 38°F, repair invoice, sealed door gap).\n2. **Never miss the hearing date:** Missing it triggers an automatic maximum default penalty.\n3. **Use OATH 'Hearing Online':** You can upload photos and a brief English defense statement from your phone without leaving the shop.\n\n💡 Tap the **Mail Scanner** tab below to scan your notice and generate a ready-to-send English OATH statement!",
    },
    voiceScript: {
      ar: "لا تشيل هم يا خبير. إذا نقاطك أقل من أربعتعشر نقطة فمحلك على الدرجة A. أهم شيء تصلح الملاحظات وتصورها وترفعها في موقع جلسة الاستماع أونلاين قبل الموعد عشان القاضي يخفض الغرامة أو يلغيها.",
      en: "Don't worry! As long as you're at 13 points or under, you keep your Grade A. Fix the issue, snap photos, and submit an online OATH hearing defense before the deadline to reduce or dismiss the fine.",
    },
  },
  qahwah_rules: {
    userPrompt: {
      ar: "أيش أهم قوانين التفتيش الصحي لمقاهي القهوة اليمنية والمعجنات (خلية النحل والعدني) في نيويورك؟",
      en: "What are the biggest NYC Health Dept traps for Yemeni coffee shops (Adani chai, honeycomb bread, milk)?",
    },
    botReply: {
      ar: "سؤال ممتاز! مقاهي القهوة اليمنية في نيويورك يركز المفتشون فيها على **٤ نقاط حساسة جداً**:\n\n1. **الحليب المكثف والحليب المبخر (لشاي العدني):** بمجرد فتح العلبة، ممنوع تتركها على الكاونتر! لازم توضع في حاوية بلاستيكية مغلقة وعليها تاريخ الفتح وداخل الثلاجة (41°F أو أقل).\n2. **خلية النحل والسمبوسة بالجبن:** المعجنات المحشية بالجبن الكريمي تُصنّف كغذاء حساس للحرارة (7 نقاط مخالفة إذا تُركت في فترينة عادية بدون تبريد أو بدون نظام Time as a Public Health Control مسجل بملصقات وقت لا تتجاوز 4 ساعات).\n3. **ماكينة الثلج وأباريق التبخير:** مجرفة الثلج خارج الماكينة دائماً، ومحلول التعقيم (Sanitizer Bucket) بتركيز مضبوط مع شرائط الفحص (Test Strips).\n4. **حوض غسيل اليدين:** لا تضع فيه أي ملعقة أو إبريق قهوة نهائياً.",
      en: "Great question! NYC DOHMH inspectors frequently cite Yemeni cafes on **4 specific traps**:\n\n1. **Opened Condensed & Evaporated Milk (for Adani Chai):** Once opened, cans CANNOT sit at room temp by the stove. Transfer to a food-grade container, label with date, and keep at ≤ 41°F.\n2. **Khaliyat Nahal (Cream-Cheese Honeycomb Bread) & Savory Pastries:** Cream cheese fillings require temperature control (≤ 41°F or ≥ 140°F) UNLESS you have a written 'Time as a Public Health Control' log with 4-hour discard stickers.\n3. **Sanitizer Buckets & Test Strips:** Keep wiping cloths submerged in sanitizer (50–100 ppm chlorine or 200 ppm quaternary) and keep the test strips right next to the sink.\n4. **Dedicated Hand Sink:** Never rinse a portafilter or pitcher in the handwashing sink!",
    },
    voiceScript: {
      ar: "في مقاهي القهوة اليمنية، أكثر مخالفة يقع فيها الشباب هي ترك علبة الحليب المكثف حق الشاي العدني مفتوحة على الطاولة، أو عرض خلية النحل المحشية بالجبن برا الثلاجة بدون ملصق وقت. انتبه لهذي النقطتين وبتضمن الدرجة A إن شاء الله.",
      en: "In Yemeni cafes, the two biggest inspection traps are leaving opened condensed milk for Adani chai on the counter, and displaying cream-cheese honeycomb bread at room temperature without time labels. Nail those two and you'll breeze through with an A!",
    },
  },
  cc_surcharge: {
    userPrompt: {
      ar: "كيف أضيف نسبة الكريدت كارد (3% أو 4%) بشكل قانوني بدون مخالفة من حماية المستهلك DCWP؟",
      en: "How can I legally pass credit card processing fees (3-4%) to customers in NYC without a DCWP fine?",
    },
    botReply: {
      ar: "انتبه جداً! قانون ولاية نيويورك الجديد (NYS Credit Card Surcharge Law) صارم جداً ومفتشو DCWP يحررون مخالفات بـ **500 دولار لكل مخالفة**:\n\n✅ **الطريقة القانونية في نيويورك:**\n- لا يكفي تعليق ورقة مكتوب عليها *\"3.5% Credit Card Fee\"* عند الكاشير!\n- يجب إما: **عرض السعر الأعلى (سعر الكريدت كارد)** على السلعة وتقديم **خصم للكاش (Cash Discount)**، أو كتابة **السعرين بالدولار وال سنت** بجانب بعض (مثلاً: `Cash: $5.00 | Card: $5.18`).\n- الحد الأقصى للفرق لا يمكن أن يتجاوز النسبة الفعلية التي تأخذها منك شركة نقاط البيع (POS).",
      en: "Be very careful! Under the **NYS Credit Card Surcharge Law**, DCWP issues **$500 fines** for improper signage:\n\n✅ **How to do it legally in NYC:**\n- Posting a sign saying *\"4% fee on credit cards\"* is **ILLEGAL** on its own.\n- You MUST either:\n  1. **Post the higher Credit Card price** on all items/menus and offer a **Cash Discount** at the register, OR\n  2. **List both exact dollar prices** side-by-side (e.g., `Cash: $5.00 / Credit: $5.18`).\n- You can never charge more than your actual merchant processing rate.",
    },
    voiceScript: {
      ar: "انتبه يا غالي من مخالفة الكريدت كارد! في نيويورك ممنوع تكتب لوحة أربعة بالمية رسوم بطاقة فقط، عليها غرامة خمسمية دولار. الحل القانوني السهل إنك تحط السعر الرسمي شامل البطاقة، وتكتب أن في خصم للي يدفع كاش.",
      en: "Watch out for the NYC credit card surcharge trap! Simply taping a '4% credit card fee' sign by the register is a $500 fine. Instead, list the credit price as your regular price and offer a cash discount, or display both exact dollar amounts.",
    },
  },
  ebt_rules: {
    userPrompt: {
      ar: "في الديلي (Deli)، متى يكون السندويتش مسموحاً ببطاقة الفود ستامب EBT ومتى يكون ممنوعاً؟",
      en: "At the deli counter, which sandwiches are eligible for SNAP/EBT and which are strictly prohibited?",
    },
    botReply: {
      ar: "قاعدة ذهبية تحمي رخصة الـ EBT في البوديقا:\n\n🟢 **مسموح ببطاقة EBT (بدون ضريبة):**\n- السندويتشات الباردة تماماً (Cold Cut Sandwiches مثل التيركي والجبن البارد غير المسخن).\n- السلطات الباردة، الحليب، العصائر، الخبز، الأرز، واللحوم المبردة غير المطبوخة.\n\n🔴 **ممنوع منعاً باتاً ببطاقة EBT (خطر سحب الجهاز فوراً):**\n- أي سندويتش يدخل الجريل أو المايكروويف أو يُقدم ساخناً (مثل Chopped Cheese، Bacon Egg & Cheese، الفلافل الساخنة، الشاورما).\n- القهوة والشاي الساخن (كاسة العدني أو القشر الساخنة لا تُباع بـ EBT، لكن علبة البن المطحون للكيلو مسموحة!).",
      en: "Here is the golden rule that protects your store's SNAP/EBT license:\n\n🟢 **ALLOWED on SNAP/EBT (Tax-Exempt):**\n- **100% Cold Sandwiches** (unheated cold cuts, cheese, tuna salad not toasted or grilled).\n- Packaged groceries, milk, eggs, produce, bread, and **bags of ground Yemeni coffee beans** to brew at home.\n\n🔴 **STRICTLY PROHIBITED on SNAP/EBT:**\n- **Any hot or heated food:** Chopped Cheese, Bacon Egg & Cheese, panini-pressed sandwiches, hot samosas.\n- **Hot prepared drinks:** Cups of hot Adani chai, Qishr, or espresso.\n*(Undercover USDA investigators frequently test bodegas by asking to pay for a hot sandwich on EBT—make sure every cashier knows to say no!)*",
    },
    voiceScript: {
      ar: "القاعدة في الفود ستامب واضحة يا أخي: أي سندويتش بارد مش مسخن على الجريل مسموح، وأكياس البن المطحون للبيت مسموحة. لكن أي سندويتش يدخل الجريل أو أي كاسة قهوة ساخنة ممنوع نهائياً ببطاقة الفود ستامب عشان ما يسحبوا عليك الجهاز.",
      en: "The SNAP EBT rule is strict: cold unheated deli sandwiches and bags of coffee beans for home are allowed. Any sandwich that touches the grill or toaster, or any cup of hot coffee or chai, is strictly banned on EBT.",
    },
  },
};
