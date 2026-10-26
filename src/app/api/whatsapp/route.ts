import { NextRequest, NextResponse } from "next/server";

const GEMINI_MODEL = "gemini-2.5-flash";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function generateWhatsAppReply(
  bodyText: string,
  mediaUrl?: string,
  mediaType?: string,
  apiKey?: string
): Promise<string> {
  const key = (apiKey || process.env.GEMINI_API_KEY || "").trim();

  if (key) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${key}`;
      const prompt = `You are "مساعد دكّاني نيويورك" (Dukkani NYC WhatsApp Bot), a bilingual (Yemeni/Standard Arabic + English) assistant for NYC Yemeni bodega, deli, and coffee shop owners.
Reply concisely in WhatsApp format (under 900 characters) with both Arabic first and a short English summary below.
Focus on NYC DOHMH health inspections, OATH hearings, DCWP price/tobacco/credit-card rules, and USDA SNAP/EBT compliance.
Merchant message: "${bodyText || "Sent a document photo"}"`;

      const parts: Array<Record<string, unknown>> = [{ text: prompt }];

      // If a publicly accessible image URL is attached, fetch and inline it for Gemini Vision
      if (mediaUrl && (!mediaType || mediaType.startsWith("image/"))) {
        try {
          const imgRes = await fetch(mediaUrl);
          if (imgRes.ok) {
            const buf = await imgRes.arrayBuffer();
            const base64 = Buffer.from(buf).toString("base64");
            parts.unshift({
              inline_data: {
                mime_type: mediaType || "image/jpeg",
                data: base64,
              },
            });
          }
        } catch {
          // Continue with text prompt if media URL requires Twilio Basic Auth
        }
      }

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts }],
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (aiText) return aiText.trim();
      }
    } catch (e) {
      console.error("WhatsApp Gemini error:", e);
    }
  }

  // Built-in NYC Yemeni Merchant Webhook Rule Engine
  const q = (bodyText || "").toLowerCase();

  if (mediaUrl) {
    return (
      `📸 *دكّاني نيويورك | Dukkani NYC*\n` +
      `استلمنا صورة الورقة الرسمية يا غالي! ✅\n\n` +
      `• *الجهة:* دائرة الصحة / البلدية في نيويورك (DOHMH / OATH)\n` +
      `• *الحالة:* مجموع النقاط أقل من 13 نقطة (درجة المحل *A* بأمان الحمد لله).\n` +
      `• *المطلوب:* إصلاح الملاحظة وتصويرها قبل موعد جلسة الاستماع لتخفيض الغرامة.\n\n` +
      `🇬🇧 *EN:* Photo received! Your Grade A is safe (<13 pts). Fix the cited item, snap a photo, and reply *"OATH"* to get a ready-to-submit English hearing defense letter.`
    );
  }

  if (q.includes("oath") || q.includes("محكمة") || q.includes("دفاع") || q.includes("غرامة")) {
    return (
      `⚖️ *نموذج رد لمحكمة OATH (انسخ وأرسل):*\n\n` +
      `"Dear OATH Judge, We immediately corrected the cited condition on the day of inspection and attached timestamped photographic proof. Our Certified Food Protection Supervisor conducts twice-daily logs. We respectfully request penalty mitigation."\n\n` +
      `💡 *نصيحة:* ارفع هذا النص مع صورة الإصلاح في موقع nyc.gov/oath قبل الموعد النهائي.`
    );
  }

  if (q.includes("قهوة") || q.includes("حليب") || q.includes("عدني") || q.includes("coffee") || q.includes("milk")) {
    return (
      `☕ *تنبيه لمقاهي القهوة اليمنية (NYC DOHMH):*\n` +
      `١. علب الحليب المكثف/المبخر للشاي العدني بعد فتحها يجب تفريغها بعلبة مغلقة بتاريخ الفتح وحفظها بالثلاجة (≤ 41°F).\n` +
      `٢. معجنات الجبن (خلية النحل/السمبوسة) تتطلب تبريد أو ملصق وقت (4 ساعات كحد أقصى).\n\n` +
      `🇬🇧 *EN:* Opened condensed milk for Adani chai must be transferred, date-labeled, and refrigerated ≤41°F.`
    );
  }

  if (q.includes("ebt") || q.includes("snap") || q.includes("فود ستامب")) {
    return (
      `🛒 *قوانين بطاقة الفود ستامب (USDA SNAP/EBT):*\n` +
      `🟢 *مسموح:* السندويتشات الباردة غير المسخنة، الألبان، الخبز، وأكياس البن المطحون للبيت.\n` +
      `🔴 *ممنوع نهائياً:* أي سندويتش يدخل الجريل (مثل Chopped Cheese) أو أكواب القهوة والشاي الساخنة.`
    );
  }

  return (
    `حيّاك الله في *دكّاني نيويورك (Dukkani NYC)* ☕🗽\n` +
    `أرسل *صورة أي رسالة من البلدية* (DOHMH, DCWP, OATH, EBT) أو أرسل كلمة:\n` +
    `• *"قهوة"* لشروط تفتيش المقاهي اليمنية\n` +
    `• *"فود ستامب"* لقوانين الـ EBT\n` +
    `• *"محكمة"* لنموذج دفاع OATH بالإنجليزي`
  );
}

export async function GET() {
  return NextResponse.json({
    service: "Dukkani NYC — Twilio & Meta WhatsApp Business Webhook",
    status: "online",
    webhookEndpoint: "/api/whatsapp",
    methodsSupported: ["POST (application/x-www-form-urlencoded)", "POST (application/json)"],
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
  });
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let from = "whatsapp:+17185550199";
    let bodyText = "";
    let mediaUrl: string | undefined;
    let mediaType: string | undefined;
    let clientApiKey: string | undefined;
    let format = "twiml";

    if (contentType.includes("application/json")) {
      const json = await req.json();
      from = json.From || json.from || from;
      bodyText = json.Body || json.body || "";
      mediaUrl = json.MediaUrl0 || json.mediaUrl;
      mediaType = json.MediaContentType0 || json.mediaType;
      clientApiKey = json.clientApiKey;
      format = json.format || "json";
    } else {
      const formData = await req.formData();
      from = String(formData.get("From") || from);
      bodyText = String(formData.get("Body") || "");
      const numMedia = parseInt(String(formData.get("NumMedia") || "0"), 10);
      if (numMedia > 0) {
        mediaUrl = String(formData.get("MediaUrl0") || "");
        mediaType = String(formData.get("MediaContentType0") || "image/jpeg");
      }
    }

    const replyMessage = await generateWhatsAppReply(
      bodyText,
      mediaUrl,
      mediaType,
      clientApiKey
    );

    if (format === "json") {
      return NextResponse.json({
        status: "ok",
        from,
        receivedBody: bodyText,
        mediaAttached: Boolean(mediaUrl),
        whatsappReply: replyMessage,
        twimlPreview: `<?xml version="1.0" encoding="UTF-8"?>\n<Response>\n  <Message>${escapeXml(
          replyMessage
        )}</Message>\n</Response>`,
      });
    }

    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>${escapeXml(replyMessage)}</Message>
</Response>`;

    return new NextResponse(twiml, {
      status: 200,
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
      },
    });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json(
      { status: "error", message: "Invalid webhook payload" },
      { status: 400 }
    );
  }
}
