import { NextRequest, NextResponse } from "next/server";
import { SAMPLE_NOTICES, ScannedNotice } from "@/data/mockData";

const GEMINI_MODEL = "gemini-2.5-flash";

async function callGemini(
  apiKey: string,
  prompt: string,
  imageBase64?: string,
  mimeType?: string,
  jsonMode: boolean = false
) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  const parts: Array<Record<string, unknown>> = [{ text: prompt }];
  if (imageBase64 && mimeType) {
    parts.unshift({
      inline_data: {
        mime_type: mimeType,
        data: imageBase64,
      },
    });
  }

  const payload: Record<string, unknown> = {
    contents: [{ role: "user", parts }],
  };

  if (jsonMode) {
    payload.generationConfig = {
      responseMimeType: "application/json",
    };
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gemini API Error (${res.status}): ${errText}`);
  }

  const data = await res.json();
  const text =
    data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  return text;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      mode,
      query,
      fileName,
      noticeId,
      imageBase64,
      mimeType,
      clientApiKey,
      customNotice,
    } = body;

    const apiKey = (clientApiKey || process.env.GEMINI_API_KEY || "").trim();

    // =========================================================================
    // 1. SCAN & OCR UPLOADED NYC NOTICE (Live Gemini Vision + Fallback)
    // =========================================================================
    if (mode === "scan_upload") {
      if (apiKey && imageBase64) {
        try {
          const visionPrompt = `You are "Dukkani NYC", an expert bilingual (Yemeni/Standard Arabic + English) legal & regulatory assistant for Yemeni bodega, deli, and specialty coffee shop owners in New York City.
Analyze this uploaded image of an official letter, inspection report, summons, or invoice.
Return a strict JSON object matching this exact TypeScript interface:
{
  "id": "string",
  "agencyCode": "DOHMH" | "DCWP" | "USDA-SNAP" | "OATH/ECB" | "DEP",
  "agencyName": { "ar": "Arabic agency name", "en": "English agency name" },
  "documentTitle": { "ar": "Clear Arabic title", "en": "Clear English title" },
  "noticeNumber": "Extracted summons/notice number or 'N/A'",
  "dateIssued": "YYYY-MM-DD",
  "deadline": "YYYY-MM-DD or 'Immediate'",
  "daysLeft": 14,
  "fineAmount": "Extracted dollar fine or risk summary",
  "urgency": "high" | "medium" | "low",
  "storeName": "Extracted business name or 'NYC Merchant Store'",
  "summary": {
    "ar": "Warm, reassuring explanation in clear Yemeni-friendly Arabic explaining what this document is, whether their Grade A or license is safe, and what to do.",
    "en": "Clear plain-English summary of the notice and required response."
  },
  "yemeniVoiceScript": {
    "ar": "Conversational spoken Yemeni Arabic script (2-3 sentences starting with السلام عليكم يا غالي or حيّا الله الخبير) suitable for reading aloud via TTS.",
    "en": "Conversational spoken English summary (2-3 sentences) suitable for TTS."
  },
  "violationCodes": [
    {
      "code": "Violation code or section",
      "points": 7,
      "description": { "ar": "Arabic explanation", "en": "English explanation" }
    }
  ],
  "actionSteps": [
    {
      "step": 1,
      "title": { "ar": "Arabic action step title", "en": "English action step title" },
      "detail": { "ar": "Arabic action step detail", "en": "English action step detail" }
    }
  ],
  "rawLetterPreview": {
    "header": "Extracted top header line from document",
    "recipient": "Extracted recipient/store name",
    "bodyLines": ["Key extracted line 1", "Key extracted line 2", "Key extracted line 3"],
    "footer": "Extracted footer or response instructions"
  }
}`;

          const rawJson = await callGemini(
            apiKey,
            visionPrompt,
            imageBase64,
            mimeType || "image/jpeg",
            true
          );
          const parsed: ScannedNotice = JSON.parse(rawJson);

          return NextResponse.json({
            status: "ok",
            source: "gemini-vision-live",
            notice: {
              ...parsed,
              id: "gemini-" + Date.now(),
            },
          });
        } catch (visionError) {
          console.error("Gemini Vision fallback triggered:", visionError);
        }
      }

      // Smart Fallback when no API key is configured
      const lowerName = (fileName || "").toLowerCase();
      let matched = SAMPLE_NOTICES[0];

      if (
        lowerName.includes("dcwp") ||
        lowerName.includes("tobacco") ||
        lowerName.includes("price")
      ) {
        matched = SAMPLE_NOTICES[1];
      } else if (
        lowerName.includes("snap") ||
        lowerName.includes("ebt") ||
        lowerName.includes("usda")
      ) {
        matched = SAMPLE_NOTICES[2];
      }

      return NextResponse.json({
        status: "ok",
        source: "smart-mock",
        notice: {
          ...matched,
          id: "custom-" + Date.now(),
          noticeNumber: "UPLOAD-" + Math.floor(100000 + Math.random() * 900000),
          storeName: fileName
            ? `Uploaded Document (${fileName})`
            : matched.storeName,
        },
      });
    }

    // =========================================================================
    // 2. GENERATE OATH HEARING DEFENSE STATEMENT (Live Gemini + Fallback)
    // =========================================================================
    if (mode === "generate_oath_letter") {
      const target: ScannedNotice =
        customNotice ||
        SAMPLE_NOTICES.find((n) => n.id === noticeId) ||
        SAMPLE_NOTICES[0];

      if (apiKey) {
        try {
          const oathPrompt = `Write a formal, persuasive English written defense statement ("OATH Hearing by Mail / Online Submission") for a New York City small business owner contesting or seeking mitigation for the following notice:
Store Name: ${target.storeName}
Agency: ${target.agencyName.en}
Summons/Notice Number: ${target.noticeNumber}
Date Issued: ${target.dateIssued}
Violations Cited: ${JSON.stringify(target.violationCodes)}

Include:
1. Formal header addressed to NYC Office of Administrative Trials and Hearings (OATH).
2. Point-by-point affirmative statement of immediate cure/correction and photographic proof attached.
3. Preventive operational protocols implemented (daily temperature logs, NYC Certified Food Protection Supervisor oversight, bilingual staff compliance training).
4. Respectful request for penalty mitigation or reduction under NYC cure/first-time rules.`;

          const generatedLetter = await callGemini(apiKey, oathPrompt);
          if (generatedLetter) {
            return NextResponse.json({
              status: "ok",
              source: "gemini-live",
              defenseLetter: generatedLetter,
            });
          }
        } catch (err) {
          console.error("Gemini OATH generation fallback:", err);
        }
      }

      const defenseLetter = `TO: NYC Office of Administrative Trials and Hearings (OATH) — Hearings Division
RE: Summons / Notice # ${target.noticeNumber}
RESPONDENT: ${target.storeName}
DATE: ${new Date().toISOString().split("T")[0]}

Dear Administrative Law Judge,

I am the owner/operator of ${target.storeName} and am submitting this written statement and photographic proof of immediate correction regarding Summons #${target.noticeNumber} issued on ${target.dateIssued}.

1. IMMEDIATE CORRECTIVE ACTION TAKEN:
${target.violationCodes
  .map(
    (v) =>
      `   - Violation ${v.code}: Immediately addressed on the same day of inspection (${v.description.en}). We have attached timestamped photographs and service documentation confirming full compliance.`
  )
  .join("\n")}

2. PREVENTIVE MEASURES IN PLACE:
   - Our Certified Food Protection Supervisor conducts twice-daily temperature and sanitation logs at opening and shift change.
   - All staff have been retrained in both Arabic and English on NYC compliance standards.

As a neighborhood small business proudly serving our NYC community, we take health and consumer safety very seriously. We respectfully request mitigation or dismissal of the civil penalty based on our prompt cure and good-faith compliance.

Respectfully submitted,
Authorized Store Representative
${target.storeName}`;

      return NextResponse.json({
        status: "ok",
        source: "smart-mock",
        defenseLetter,
      });
    }

    // =========================================================================
    // 3. BILINGUAL WHATSAPP ASSISTANT CHAT (Live Gemini + Fallback)
    // =========================================================================
    if (apiKey && query) {
      try {
        const chatPrompt = `You are "مساعد دكّاني" (Dukkani NYC Assistant), a warm, knowledgeable bilingual AI assistant built specifically for Yemeni bodega, deli, and specialty coffee shop (Qahwah) owners in New York City (Morris Park, Bay Ridge, Atlantic Ave, etc.).
Answer the merchant's question accurately regarding NYC regulations (DOHMH health codes, letter grading, OATH hearings, DCWP price tags, tobacco/vape laws, credit card surcharge laws, USDA SNAP/EBT hot vs cold food rules, YAMA resources).
Return a strict JSON object with both a warm Yemeni-friendly Arabic response and a clear English response:
{
  "ar": "Arabic response with practical bullet points",
  "en": "English response with practical bullet points"
}

Merchant Question: ${query}`;

        const rawChat = await callGemini(
          apiKey,
          chatPrompt,
          undefined,
          undefined,
          true
        );
        const parsedReply = JSON.parse(rawChat);
        if (parsedReply?.ar && parsedReply?.en) {
          return NextResponse.json({
            status: "ok",
            source: "gemini-live",
            reply: parsedReply,
          });
        }
      } catch (chatErr) {
        console.error("Gemini Chat fallback:", chatErr);
      }
    }

    // Free-form chat query fallback handler
    const q = (query || "").toLowerCase();
    let arReply =
      "حياك الله يا غالي! استلمت سؤالك. في نيويورك، أهم شيء لأي بوديقا أو مقهى يمني هو التأكد من 3 أشياء: شهادة Food Protection متواجدة بالمحل، حرارة الثلاجات أقل من 41°F، وعدم خلط الأكل الساخن ببطاقة الفود ستامب EBT. إذا عندك ورقة رسمية وصلتك بالبريد، افتح تبويب «فاحص البريد» وصورها لي أشرحها لك بالتفصيل!";
    let enReply =
      "Got your question! For any NYC bodega or Yemeni cafe, the top 3 priorities are: keeping a Food Protection Certificate holder on-site during all hours, keeping coolers at ≤ 41°F, and never ringing hot food on SNAP/EBT. If you received an official letter in the mail, hop over to the 'Mail Scanner' tab and snap a photo so I can break it down for you!";

    if (
      q.includes("شيشة") ||
      q.includes("hookah") ||
      q.includes("دخان") ||
      q.includes("tobacco") ||
      q.includes("فيب") ||
      q.includes("vape")
    ) {
      arReply =
        "بخصوص الدخان والفيب في نيويورك (DCWP):\n• السجائر الإلكترونية المنكّهة (Flavored Vapes) ممنوعة تماماً وغرامتها تصل لآلاف الدولارات وسحب رخصة الدخان.\n• لازم تعليق لوحة العمر القانوني (21 سنة) ولوحة الحد الأدنى للأسعار خلف الكاشير.\n• تجديد رخصة التبغ يتم كل سنتين ويتطلب شهادة براءة ذمة ضريبية (Tax Clearance) من الولاية.";
      enReply =
        "Regarding Tobacco & Vape rules in NYC (DCWP):\n• Flavored e-cigarettes/vapes are strictly illegal in NYC and carry heavy fines plus Tobacco Retail Dealer license revocation.\n• You must post the official NYC Age-21 sign and minimum price list behind the counter.\n• Biennial license renewal requires a NYS DTF Tax Clearance certificate.";
    } else if (
      q.includes("قهوة") ||
      q.includes("حليب") ||
      q.includes("عدني") ||
      q.includes("coffee") ||
      q.includes("qahwah") ||
      q.includes("milk") ||
      q.includes("خلية")
    ) {
      arReply =
        "لأصحاب المقاهي اليمنية في نيويورك ☕:\n• علب الحليب المكثف/المبخر للشاي العدني بعد فتحها يجب تفريغها في علبة غذائية مغلقة بتاريخ الفتح ووضعها بالثلاجة (≤ 41°F).\n• المعجنات بالجبن (مثل خلية النحل والسمبوسة) لا تُترك بدرجة حرارة الغرفة أكثر من ساعتين إلا إذا سجلت نظام Time as a Public Health Control بملصقات وقت (4 ساعات كحد أقصى).";
      enReply =
        "For NYC Yemeni Coffee Shops ☕:\n• Opened condensed/evaporated milk for Adani Chai must be transferred to a covered container, date-labeled, and kept refrigerated at ≤ 41°F.\n• Cheese-filled pastries (Khaliyat Nahal / Honeycomb bread, cheese sambusa) require temperature control unless covered by a written 4-hour 'Time as a Public Health Control' log.";
    } else if (
      q.includes("غرامة") ||
      q.includes("محكمة") ||
      q.includes("oath") ||
      q.includes("fine") ||
      q.includes("ticket") ||
      q.includes("مخالفة")
    ) {
      arReply =
        "إذا وصلك استدعاء محكمة OATH (من الصحة DOHMH أو حماية المستهلك DCWP أو النظافة DSNY):\n١. لا تتجاهل الموعد أبداً عشان ما تنزل عليك الغرامة القصوى تلقائياً.\n٢. تقدر تسوي جلسة أونلاين (Hearing by Mail / Online) بدون ما تروح بنفسك.\n٣. افتح تبويب «فاحص البريد» في التطبيق واضغط على زر «توليد خطاب دفاع OATH بالإنجليزي»!";
      enReply =
        "If you received an OATH summons (from DOHMH, DCWP, or DSNY):\n1. Never ignore the hearing date or a default penalty will be entered.\n2. You can contest or mitigate online via a written 'One-Click Hearing' without leaving your store.\n3. Open the 'Mail Scanner' tab in this app and click 'Generate English OATH Defense Letter'!";
    } else if (
      q.includes("yama") ||
      q.includes("جمعية") ||
      q.includes("مساعدة") ||
      q.includes("محامي")
    ) {
      arReply =
        "جمعية التجار اليمنيين الأمريكيين (YAMA) في بروكلين والبرونكس تقدم دعماً ممتازاً للتجار اليمنيين في نيويورك (تراخيص، فود ستامب EBT، استشارات قانونية وتجارية). تقدر تتواصل معهم أو تستخدم أدواتنا هنا لتجهيز أوراقك قبل الموعد!";
      enReply =
        "The Yemeni American Merchants Association (YAMA) in Brooklyn & the Bronx offers dedicated support for NYC Yemeni shop owners (licensing, SNAP/EBT renewals, and legal clinics). You can prepare all your documents and checklists right here in Dukkani before your appointment!";
    }

    return NextResponse.json({
      status: "ok",
      source: "smart-mock",
      reply: {
        ar: arReply,
        en: enReply,
      },
    });
  } catch {
    return NextResponse.json(
      { status: "error", message: "Failed to process request" },
      { status: 500 }
    );
  }
}
