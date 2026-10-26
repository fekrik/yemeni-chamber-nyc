"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Camera,
  Mic,
  Send,
  Volume2,
  VolumeX,
  FileText,
  AlertTriangle,
  Clock,
  Sparkles,
  Globe,
  Store,
  Coffee,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  ScanLine,
  ClipboardCheck,
  Award,
  Settings,
  Webhook,
  KeyRound,
  X,
  Terminal,
  Zap,
} from "lucide-react";
import {
  Language,
  SAMPLE_NOTICES,
  INITIAL_LICENSES,
  INITIAL_CHECKLIST,
  INITIAL_CHAT_MESSAGES,
  BOT_KNOWLEDGE_RESPONSES,
  ScannedNotice,
  InspectionItem,
  ChatMessage,
} from "@/data/mockData";

type ActiveTab = "chat" | "scanner" | "licenses";
type ShopMode = "both" | "bodega" | "qahwah";

export default function DukkaniApp() {
  const [lang, setLang] = useState<Language>("ar");
  const [bilingualMode, setBilingualMode] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<ActiveTab>("scanner");
  const [shopMode, setShopMode] = useState<ShopMode>("both");

  // Live Gemini API Key & Twilio Webhook Tester Modal state
  const [showDevModal, setShowDevModal] = useState<boolean>(false);
  const [clientApiKey, setClientApiKey] = useState<string>("");
  const [analysisSource, setAnalysisSource] = useState<string>("smart-mock");
  const [webhookTestInput, setWebhookTestInput] = useState<string>(
    "السلام عليكم، وصلتني مخالفة من الصحة DOHMH وعندي جلسة OATH"
  );
  const [webhookTestResult, setWebhookTestResult] = useState<{
    whatsappReply: string;
    twimlPreview: string;
  } | null>(null);
  const [isTestingWebhook, setIsTestingWebhook] = useState<boolean>(false);

  // Scanner state
  const [selectedNotice, setSelectedNotice] = useState<ScannedNotice>(
    SAMPLE_NOTICES[0]
  );
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [uploadedPreviewUrl, setUploadedPreviewUrl] = useState<string | null>(
    null
  );
  const [showRawLetter, setShowRawLetter] = useState<boolean>(false);
  const [oathLetter, setOathLetter] = useState<string | null>(null);
  const [isGeneratingOath, setIsGeneratingOath] = useState<boolean>(false);
  const [copiedOath, setCopiedOath] = useState<boolean>(false);

  // Voice / TTS state
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  // Chat state
  const [messages, setMessages] = useState<ChatMessage[]>(
    INITIAL_CHAT_MESSAGES
  );
  const [inputText, setInputText] = useState<string>("");
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Licenses & Checklist state
  const [checklist, setChecklist] =
    useState<InspectionItem[]>(INITIAL_CHECKLIST);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>(
    {}
  );

  const isRTL = lang === "ar";

  // Load saved API key from localStorage if available
  useEffect(() => {
    const saved = window.localStorage.getItem("dukkani_gemini_key");
    if (saved) setClientApiKey(saved);
  }, []);

  const handleSaveApiKey = (val: string) => {
    setClientApiKey(val);
    window.localStorage.setItem("dukkani_gemini_key", val);
  };

  useEffect(() => {
    if (activeTab === "chat") {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, activeTab, isBotTyping]);

  // Calculate NYC DOHMH Grade from unchecked items
  const filteredChecklist = checklist.filter(
    (item) =>
      shopMode === "both" ||
      item.category === "both" ||
      item.category === shopMode
  );

  const riskPoints = filteredChecklist.reduce(
    (acc, item) => (item.checked ? acc : acc + item.points),
    0
  );

  const currentGrade =
    riskPoints <= 13 ? "A" : riskPoints <= 27 ? "B" : "C";

  // Speech synthesis helper (works in browser with Web Speech API + graceful visual fallback)
  const toggleSpeak = (id: string, textAr: string, textEn: string) => {
    if (typeof window === "undefined") return;

    if (speakingId === id) {
      window.speechSynthesis?.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis?.cancel();
    setSpeakingId(id);

    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(
        lang === "ar" ? textAr : textEn
      );
      utterance.lang = lang === "ar" ? "ar-SA" : "en-US";
      utterance.rate = 0.95;
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => {
        setTimeout(() => setSpeakingId(null), 5000);
      };
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setSpeakingId(null), 5000);
    }
  };

  // Convert File to Base64 helper for Gemini Vision OCR
  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = String(reader.result || "");
        const base64Clean = result.includes(",")
          ? result.split(",")[1]
          : result;
        resolve(base64Clean);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  // Handle file / camera upload for scanner (sends Base64 to Gemini Vision if configured)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setUploadedPreviewUrl(objectUrl);
    setActiveTab("scanner");
    setIsScanning(true);
    setOathLetter(null);

    try {
      const imageBase64 = await fileToBase64(file);
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "scan_upload",
          fileName: file.name,
          mimeType: file.type || "image/jpeg",
          imageBase64,
          clientApiKey,
        }),
      });
      const data = await res.json();
      setTimeout(() => {
        if (data?.notice) {
          setSelectedNotice(data.notice);
          setAnalysisSource(data.source || "smart-mock");
        }
        setIsScanning(false);
      }, 800);
    } catch {
      setTimeout(() => setIsScanning(false), 800);
    }
  };

  // Generate OATH hearing defense statement
  const handleGenerateOathDefense = async () => {
    setIsGeneratingOath(true);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "generate_oath_letter",
          noticeId: selectedNotice.id,
          customNotice: selectedNotice,
          clientApiKey,
        }),
      });
      const data = await res.json();
      if (data?.defenseLetter) {
        setOathLetter(data.defenseLetter);
      }
    } finally {
      setIsGeneratingOath(false);
    }
  };

  // Test Twilio / Meta WhatsApp Webhook endpoint (/api/whatsapp)
  const handleRunWebhookSimulator = async () => {
    setIsTestingWebhook(true);
    try {
      const res = await fetch("/api/whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          From: "whatsapp:+17185550199",
          Body: webhookTestInput,
          clientApiKey,
          format: "json",
        }),
      });
      const data = await res.json();
      if (data?.whatsappReply) {
        setWebhookTestResult({
          whatsappReply: data.whatsappReply,
          twimlPreview: data.twimlPreview,
        });
      }
    } finally {
      setIsTestingWebhook(false);
    }
  };

  // Handle quick action chip in WhatsApp chat
  const handleQuickPrompt = (promptKey: string) => {
    const preset = BOT_KNOWLEDGE_RESPONSES[promptKey];
    if (!preset) return;

    const userMsg: ChatMessage = {
      id: "u-" + Date.now(),
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      text: preset.userPrompt,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsBotTyping(true);

    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: "b-" + Date.now(),
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        text: preset.botReply,
        isVoiceNote: true,
        voiceDuration: "0:22",
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsBotTyping(false);
    }, 650);
  };

  // Handle custom chat message send
  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const currentQuery = inputText.trim();
    setInputText("");

    const userMsg: ChatMessage = {
      id: "u-" + Date.now(),
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      text: { ar: currentQuery, en: currentQuery },
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsBotTyping(true);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "chat",
          query: currentQuery,
          clientApiKey,
        }),
      });
      const data = await res.json();
      setTimeout(() => {
        const botMsg: ChatMessage = {
          id: "b-" + Date.now(),
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          text: data.reply || {
            ar: "تم استلام رسالتك يا غالي!",
            en: "Received your message!",
          },
          isVoiceNote: true,
          voiceDuration: "0:16",
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsBotTyping(false);
      }, 600);
    } catch {
      setIsBotTyping(false);
    }
  };

  // Simulate recording a Yemeni Arabic voice note
  const handleVoiceRecordSimulate = () => {
    if (isRecording) {
      setIsRecording(false);
      handleQuickPrompt("qahwah_rules");
      return;
    }
    setIsRecording(true);
  };

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-emerald-950/90 text-stone-100 flex flex-col items-center justify-start py-0 sm:py-6 px-0 sm:px-4"
    >
      {/* Hidden Camera / File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,.pdf"
        capture="environment"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Top Desktop Context Banner */}
      <div className="hidden sm:flex items-center justify-between w-full max-w-md mb-3 px-2 text-xs text-stone-400">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>NYC Yemeni Merchant Toolkit</span>
        </div>
        <button
          onClick={() => setShowDevModal(true)}
          className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 bg-emerald-950/80 border border-emerald-700/50 px-2.5 py-1 rounded-full text-[11px] font-medium transition"
        >
          <Webhook className="w-3.5 h-3.5" />
          <span>
            {clientApiKey ? "⚡ Gemini Vision Active" : "Configure Gemini & WhatsApp Webhook"}
          </span>
        </button>
      </div>

      {/* Main Mobile-First App Shell */}
      <div className="w-full max-w-md bg-stone-50 text-stone-900 sm:rounded-3xl shadow-2xl overflow-hidden border border-stone-800/80 flex flex-col min-h-screen sm:min-h-[820px] sm:max-h-[880px] relative">
        {/* WhatsApp / Yemeni Coffee Styled Top Header */}
        <header className="bg-[#075E54] text-white px-4 pt-3.5 pb-3 shadow-md">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-300/40 flex items-center justify-center text-lg font-bold shadow-inner">
                ☕
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-bold text-base leading-tight tracking-tight">
                    {isRTL ? "دكّاني نيويورك" : "Dukkani NYC"}
                  </h1>
                  <span className="text-[10px] bg-emerald-500/30 border border-emerald-300/30 text-emerald-100 px-2 py-0.5 rounded-full font-medium">
                    {isRTL ? "مساعد التاجر اليمني" : "Yemeni Merchant AI"}
                  </span>
                </div>
                <p className="text-[11px] text-emerald-100/85 mt-0.5">
                  {isRTL
                    ? "ترجمة مخالفات البلدية • التراخيص • فحص الدرجة A"
                    : "NYC Mail Scanner • Permits • Grade-A Checklist"}
                </p>
              </div>
            </div>

            {/* Language, Bilingual & API/Webhook Controls */}
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowDevModal(true)}
                  className={`p-1.5 rounded-full border transition ${
                    clientApiKey
                      ? "bg-amber-400/25 border-amber-300 text-amber-200"
                      : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                  }`}
                  title="Gemini API Key & Twilio WhatsApp Webhook"
                >
                  <Settings className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                  className="flex items-center gap-1 bg-white/15 hover:bg-white/25 active:scale-95 transition px-2.5 py-1 rounded-full text-xs font-semibold border border-white/20"
                  title="Switch Primary Language"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{lang === "ar" ? "English" : "عربي"}</span>
                </button>
              </div>
              <button
                onClick={() => setBilingualMode(!bilingualMode)}
                className={`text-[10px] px-2 py-0.5 rounded-full transition ${
                  bilingualMode
                    ? "bg-amber-400/25 text-amber-200 border border-amber-300/30"
                    : "text-emerald-200/70 hover:text-white"
                }`}
              >
                {bilingualMode
                  ? isRTL
                    ? "✓ عربي + EN معاً"
                    : "✓ Dual AR + EN"
                  : isRTL
                  ? "لغة واحدة فقط"
                  : "Single Lang"}
              </button>
            </div>
          </div>

          {/* Store Type Selector Pill Bar */}
          <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between gap-1 text-xs">
            <span className="text-emerald-100/80 text-[11px]">
              {isRTL ? "نوع المحل:" : "Shop Type:"}
            </span>
            <div className="flex items-center gap-1 bg-black/20 p-0.5 rounded-lg">
              <button
                onClick={() => setShopMode("both")}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition ${
                  shopMode === "both"
                    ? "bg-white text-[#075E54] shadow-sm"
                    : "text-emerald-100 hover:bg-white/10"
                }`}
              >
                {isRTL ? "بوديقا + مقهى" : "Bodega + Cafe"}
              </button>
              <button
                onClick={() => setShopMode("bodega")}
                className={`flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium transition ${
                  shopMode === "bodega"
                    ? "bg-white text-[#075E54] shadow-sm"
                    : "text-emerald-100 hover:bg-white/10"
                }`}
              >
                <Store className="w-3 h-3" />
                <span>{isRTL ? "بوديقا/ديلي" : "Bodega"}</span>
              </button>
              <button
                onClick={() => setShopMode("qahwah")}
                className={`flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium transition ${
                  shopMode === "qahwah"
                    ? "bg-white text-[#075E54] shadow-sm"
                    : "text-emerald-100 hover:bg-white/10"
                }`}
              >
                <Coffee className="w-3 h-3" />
                <span>{isRTL ? "مقهى يمني" : "Qahwah"}</span>
              </button>
            </div>
          </div>
        </header>

        {/* =========================================================
            LIVE GEMINI VISION & TWILIO WHATSAPP WEBHOOK MODAL
           ========================================================= */}
        {showDevModal && (
          <div
            dir="ltr"
            className="absolute inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-3"
          >
            <div className="bg-white text-stone-900 w-full max-h-[90%] rounded-t-3xl sm:rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden">
              <div className="bg-stone-900 text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <h3 className="font-bold text-sm">
                    Live Gemini Vision OCR & WhatsApp Webhook
                  </h3>
                </div>
                <button
                  onClick={() => setShowDevModal(false)}
                  className="text-stone-400 hover:text-white p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 space-y-4 overflow-y-auto text-xs">
                {/* 1. Gemini API Key Input */}
                <div className="space-y-1.5 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <label className="font-bold text-stone-800 flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5 text-emerald-700" />
                    <span>1. Live Gemini Vision API Key (Optional)</span>
                  </label>
                  <p className="text-[11px] text-stone-500">
                    Paste a Google AI Studio key (`AIza...`) to enable live{" "}
                    <code>gemini-2.5-flash</code> multimodal OCR on any photo you
                    upload, or set <code>GEMINI_API_KEY</code> in{" "}
                    <code>.env.local</code>.
                  </p>
                  <input
                    type="password"
                    value={clientApiKey}
                    onChange={(e) => handleSaveApiKey(e.target.value)}
                    placeholder="AIzaSy... (stored locally in browser)"
                    className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-emerald-600"
                  />
                  <div className="flex items-center justify-between text-[11px] pt-0.5">
                    <span className="text-stone-500">
                      Current Mode:{" "}
                      <strong className="text-emerald-700">
                        {clientApiKey
                          ? "Live Gemini 2.5 Flash Vision + Chat"
                          : "Built-in NYC Regulatory Mock Engine"}
                      </strong>
                    </span>
                    {clientApiKey && (
                      <button
                        onClick={() => handleSaveApiKey("")}
                        className="text-red-600 underline"
                      >
                        Clear Key
                      </button>
                    )}
                  </div>
                </div>

                {/* 2. Twilio / WhatsApp Webhook Simulator */}
                <div className="space-y-2 bg-emerald-50/60 p-3 rounded-xl border border-emerald-200">
                  <div className="flex items-center justify-between">
                    <label className="font-bold text-emerald-950 flex items-center gap-1.5">
                      <Webhook className="w-3.5 h-3.5 text-emerald-700" />
                      <span>2. Twilio WhatsApp Webhook Endpoint</span>
                    </label>
                    <span className="font-mono text-[10px] bg-emerald-800 text-white px-2 py-0.5 rounded">
                      POST /api/whatsapp
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-600">
                    Point your Twilio WhatsApp Sandbox webhook to{" "}
                    <code>https://&lt;your-ngrok-or-domain&gt;/api/whatsapp</code>.
                    Test it live below:
                  </p>

                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={webhookTestInput}
                      onChange={(e) => setWebhookTestInput(e.target.value)}
                      className="flex-1 bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs"
                      placeholder="Simulated incoming WhatsApp message..."
                    />
                    <button
                      onClick={handleRunWebhookSimulator}
                      disabled={isTestingWebhook}
                      className="bg-[#075E54] hover:bg-[#128C7E] text-white font-bold px-3 py-1.5 rounded-lg shrink-0 transition"
                    >
                      {isTestingWebhook ? "Sending..." : "Test Webhook"}
                    </button>
                  </div>

                  {webhookTestResult && (
                    <div className="space-y-2 pt-1">
                      <div className="bg-[#DCF8C6] border border-emerald-300 rounded-lg p-2.5 text-stone-900 whitespace-pre-wrap text-[11px]">
                        {webhookTestResult.whatsappReply}
                      </div>
                      <details className="text-[10px]">
                        <summary className="cursor-pointer font-semibold text-stone-600">
                          View Raw TwiML XML Response
                        </summary>
                        <pre className="mt-1 bg-stone-900 text-emerald-300 p-2 rounded-lg overflow-x-auto font-mono">
                          {webhookTestResult.twimlPreview}
                        </pre>
                      </details>
                    </div>
                  )}

                  {/* Terminal cURL snippet */}
                  <div className="pt-1">
                    <span className="text-[10px] font-semibold text-stone-500 flex items-center gap-1 mb-1">
                      <Terminal className="w-3 h-3" /> Test via terminal cURL:
                    </span>
                    <pre className="bg-stone-900 text-stone-200 p-2 rounded-lg font-mono text-[10px] overflow-x-auto">
                      {`curl -X POST http://localhost:3000/api/whatsapp \\
  -d "From=whatsapp:+17185550199" \\
  -d "Body=قهوة"`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Scrollable Viewport */}
        <main className="flex-1 overflow-y-auto flex flex-col">
          {/* =========================================================
              TAB 1: NYC MAIL & VIOLATION SCANNER
             ========================================================= */}
          {activeTab === "scanner" && (
            <div className="p-3.5 space-y-3.5 flex-1">
              {/* Camera / Upload Action Banner */}
              <div className="bg-gradient-to-r from-emerald-900 via-[#075E54] to-teal-900 text-white rounded-2xl p-4 shadow-md relative overflow-hidden">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-[11px] bg-amber-400/20 text-amber-200 border border-amber-300/30 px-2 py-0.5 rounded-full font-medium">
                        <Sparkles className="w-3 h-3" />
                        {isRTL
                          ? "مترجم رسائل البلدية الفوري"
                          : "Instant NYC Notice Translator"}
                      </span>
                      <button
                        onClick={() => setShowDevModal(true)}
                        className="inline-flex items-center gap-1 text-[10px] bg-white/15 hover:bg-white/25 text-emerald-100 px-2 py-0.5 rounded-full"
                      >
                        <Zap className="w-2.5 h-2.5 text-amber-300" />
                        <span>
                          {clientApiKey
                            ? "Gemini Vision OCR: ON"
                            : isRTL
                            ? "تفعيل Gemini Vision"
                            : "Enable Live Gemini OCR"}
                        </span>
                      </button>
                    </div>
                    <h2 className="font-bold text-base">
                      {isRTL
                        ? "وصلك ظرف من البلدية أو مفتش الصحة؟"
                        : "Got an official NYC letter or violation?"}
                    </h2>
                    <p className="text-xs text-emerald-100/90 leading-relaxed">
                      {isRTL
                        ? "صوّر الورقة بالجوال لنشرح لك بالعربي واليمني أيش المطلوب، كم الغرامة، وكيف ترد عليها خطوة بخطوة."
                        : "Snap a photo of any DOHMH, DCWP, OATH, or SNAP/EBT letter for an instant Arabic & English breakdown + voice explanation."}
                    </p>
                  </div>
                </div>

                <div className="mt-3.5 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold text-xs py-2.5 px-4 rounded-xl shadow-md active:scale-98 transition"
                  >
                    <Camera className="w-4 h-4" />
                    <span>
                      {isRTL
                        ? "صوّر أو ارفع صورة الورقة الآن"
                        : "Snap Photo / Upload Notice"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Sample Notice Switcher Pills */}
              <div>
                <div className="flex items-center justify-between mb-1.5 px-1">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    {isRTL
                      ? "أو جرّب أمثلة حقيقية لرسائل تجار نيويورك:"
                      : "Or test with real NYC merchant notices:"}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {SAMPLE_NOTICES.map((notice) => {
                    const isSelected = selectedNotice.id === notice.id;
                    return (
                      <button
                        key={notice.id}
                        onClick={() => {
                          setUploadedPreviewUrl(null);
                          setOathLetter(null);
                          setSelectedNotice(notice);
                        }}
                        className={`p-2 rounded-xl border text-start transition flex flex-col justify-between ${
                          isSelected
                            ? "bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500/20"
                            : "bg-white border-stone-200 hover:border-stone-300"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              notice.urgency === "high"
                                ? "bg-red-100 text-red-700"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {notice.agencyCode}
                          </span>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-emerald-600" />
                          )}
                        </div>
                        <p className="text-[11px] font-semibold text-stone-800 line-clamp-2 leading-snug">
                          {isRTL
                            ? notice.documentTitle.ar
                            : notice.documentTitle.en}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Scanning Loading State */}
              {isScanning ? (
                <div className="bg-white rounded-2xl border border-emerald-200 p-8 text-center space-y-3 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto animate-pulse">
                    <ScanLine className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-sm text-stone-800">
                    {isRTL
                      ? "جاري قراءة الوثيقة وترجمة الأكواد القانونية..."
                      : "Reading NYC notice & translating violation codes..."}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {isRTL
                      ? "نستخرج رقم الاستدعاء، الموعد النهائي، وخطوات الحل"
                      : "Extracting summons #, deadline, DOHMH points, and cure steps"}
                  </p>
                </div>
              ) : (
                /* Scanned Notice Result Card */
                <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden space-y-4 p-4">
                  {/* Uploaded Image Thumbnail if present */}
                  {uploadedPreviewUrl && (
                    <div className="flex items-center justify-between gap-3 bg-emerald-50/70 border border-emerald-200 p-2.5 rounded-xl">
                      <div className="flex items-center gap-3">
                        <img
                          src={uploadedPreviewUrl}
                          alt="Uploaded notice"
                          className="w-12 h-12 object-cover rounded-lg border border-emerald-300"
                        />
                        <div className="text-xs">
                          <span className="font-bold text-emerald-900 block">
                            {isRTL
                              ? "✓ تم مسح الصورة المرفوعة بنجاح"
                              : "✓ Custom Photo Scanned Successfully"}
                          </span>
                          <span className="text-stone-600 text-[11px]">
                            {selectedNotice.storeName}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono bg-emerald-800 text-white px-2 py-0.5 rounded-full">
                        {analysisSource === "gemini-vision-live"
                          ? "⚡ Gemini Vision"
                          : "Smart OCR"}
                      </span>
                    </div>
                  )}

                  {/* Agency Header & Urgency Badge */}
                  <div className="flex items-start justify-between gap-2 border-b border-stone-100 pb-3">
                    <div>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                        {selectedNotice.agencyName[lang]}
                      </span>
                      <h3 className="font-bold text-base text-stone-900 mt-1">
                        {selectedNotice.documentTitle.ar}
                      </h3>
                      {bilingualMode && (
                        <p className="text-xs text-stone-500 font-medium mt-0.5">
                          {selectedNotice.documentTitle.en}
                        </p>
                      )}
                      <p className="text-[11px] text-stone-400 mt-1">
                        #{selectedNotice.noticeNumber} • {selectedNotice.storeName}
                      </p>
                    </div>

                    <div className="text-end shrink-0">
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full ${
                          selectedNotice.urgency === "high"
                            ? "bg-red-100 text-red-700 border border-red-200"
                            : "bg-amber-100 text-amber-800 border border-amber-200"
                        }`}
                      >
                        <AlertTriangle className="w-3 h-3" />
                        {selectedNotice.urgency === "high"
                          ? isRTL
                            ? "عاجل جداً"
                            : "High Priority"
                          : isRTL
                          ? "متوسط الأهمية"
                          : "Action Needed"}
                      </span>
                    </div>
                  </div>

                  {/* Key Metrics Grid: Fine Amount & Deadline */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-2.5">
                      <span className="text-[11px] text-stone-500 block">
                        {isRTL
                          ? "المبلغ / المخاطرة المالية"
                          : "Fine / Financial Risk"}
                      </span>
                      <span className="font-bold text-sm text-red-700 mt-0.5 block">
                        {selectedNotice.fineAmount}
                      </span>
                    </div>
                    <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-2.5">
                      <span className="text-[11px] text-stone-500 block">
                        {isRTL
                          ? "آخر موعد للرد (Deadline)"
                          : "Response Deadline"}
                      </span>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="font-bold text-xs text-stone-900">
                          {selectedNotice.deadline} (
                          {isRTL
                            ? `باقي ${selectedNotice.daysLeft} يوم`
                            : `${selectedNotice.daysLeft}d left`}
                          )
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp-Style Voice Summary Player */}
                  <div className="bg-[#DCF8C6]/70 border border-emerald-300/80 rounded-2xl p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            toggleSpeak(
                              selectedNotice.id,
                              selectedNotice.yemeniVoiceScript.ar,
                              selectedNotice.yemeniVoiceScript.en
                            )
                          }
                          className="w-9 h-9 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white flex items-center justify-center shadow transition active:scale-95"
                        >
                          {speakingId === selectedNotice.id ? (
                            <VolumeX className="w-4 h-4 animate-pulse" />
                          ) : (
                            <Volume2 className="w-4 h-4" />
                          )}
                        </button>
                        <div>
                          <span className="text-xs font-bold text-emerald-950 block">
                            {speakingId === selectedNotice.id
                              ? isRTL
                                ? "🔊 جاري قراءة الشرح بالصوت..."
                                : "🔊 Playing Voice Explanation..."
                              : isRTL
                              ? "اسمع خلاصة الورقة بالصوت (باللهجة اليمنية)"
                              : "Listen to Voice Summary (Arabic / English)"}
                          </span>
                          <span className="text-[10px] text-emerald-800">
                            {isRTL
                              ? "اضغط للسماع بدون الحاجة للقراءة"
                              : "Tap to hear plain-language explanation"}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-800 bg-white/60 px-2 py-0.5 rounded-full">
                        0:24
                      </span>
                    </div>

                    {/* Plain-Language Summary Text */}
                    <div className="pt-1 border-t border-emerald-200/70 space-y-1.5 text-xs leading-relaxed">
                      <p className="font-medium text-stone-900">
                        {selectedNotice.summary.ar}
                      </p>
                      {bilingualMode && (
                        <p
                          dir="ltr"
                          className="text-stone-600 text-[11px] bg-white/60 p-2 rounded-lg"
                        >
                          {selectedNotice.summary.en}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Violation Codes Breakdown */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                      {isRTL
                        ? "تفصيل البنود المسجلة في الورقة:"
                        : "Official Codes Cited:"}
                    </h4>
                    {selectedNotice.violationCodes.map((v, idx) => (
                      <div
                        key={idx}
                        className="bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-bold text-stone-900 bg-stone-200/80 px-2 py-0.5 rounded text-[11px]">
                            Code: {v.code}
                          </span>
                          {v.points && (
                            <span className="text-[11px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                              {v.points}{" "}
                              {isRTL ? "نقاط تفتيش" : "Inspection Points"}
                            </span>
                          )}
                        </div>
                        <p className="text-stone-800 font-medium">
                          {v.description.ar}
                        </p>
                        {bilingualMode && (
                          <p dir="ltr" className="text-stone-500 text-[11px]">
                            {v.description.en}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Action Steps Checklist */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                      {isRTL
                        ? "أيش تسوي الآن خطوة بخطوة؟"
                        : "Step-by-Step Action Plan:"}
                    </h4>
                    <div className="space-y-2">
                      {selectedNotice.actionSteps.map((stepObj) => {
                        const stepKey = `${selectedNotice.id}-${stepObj.step}`;
                        const isDone = !!completedSteps[stepKey];
                        return (
                          <div
                            key={stepObj.step}
                            onClick={() =>
                              setCompletedSteps((prev) => ({
                                ...prev,
                                [stepKey]: !prev[stepKey],
                              }))
                            }
                            className={`cursor-pointer p-3 rounded-xl border transition flex items-start gap-2.5 ${
                              isDone
                                ? "bg-emerald-50/60 border-emerald-300"
                                : "bg-white border-stone-200 hover:border-emerald-400"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isDone}
                              onChange={() => {}}
                              className="mt-1 h-4 w-4 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500"
                            />
                            <div className="space-y-0.5 text-xs flex-1">
                              <p
                                className={`font-bold ${
                                  isDone
                                    ? "line-through text-stone-400"
                                    : "text-stone-900"
                                }`}
                              >
                                {stepObj.title.ar}
                              </p>
                              {bilingualMode && (
                                <p
                                  dir="ltr"
                                  className="text-[11px] font-semibold text-stone-600"
                                >
                                  {stepObj.title.en}
                                </p>
                              )}
                              <p className="text-stone-600 text-[11px] pt-0.5">
                                {isRTL
                                  ? stepObj.detail.ar
                                  : stepObj.detail.en}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 1-Click English OATH Defense Letter Generator */}
                  <div className="pt-2 border-t border-stone-100 space-y-2.5">
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={handleGenerateOathDefense}
                        disabled={isGeneratingOath}
                        className="flex-1 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition"
                      >
                        <FileText className="w-4 h-4 text-amber-400" />
                        <span>
                          {isGeneratingOath
                            ? isRTL
                              ? "جاري كتابة الخطاب..."
                              : "Drafting Statement..."
                            : isRTL
                            ? "اكتب لي رد قانوني بالإنجليزي (OATH Defense)"
                            : "Draft English OATH Defense Statement"}
                        </span>
                      </button>

                      <button
                        onClick={() => setShowRawLetter(!showRawLetter)}
                        className="bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium py-2.5 px-3 rounded-xl flex items-center gap-1 transition"
                      >
                        <span>
                          {isRTL ? "الورقة الأصلية" : "Original Letter"}
                        </span>
                        {showRawLetter ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Raw English Government Notice Simulation */}
                    {showRawLetter && (
                      <div
                        dir="ltr"
                        className="bg-stone-100 border border-stone-300 rounded-xl p-3 font-mono text-[11px] text-stone-800 space-y-1.5"
                      >
                        <div className="font-bold border-b border-stone-300 pb-1 text-stone-900">
                          {selectedNotice.rawLetterPreview.header}
                        </div>
                        <div className="text-[10px] text-stone-600">
                          TO: {selectedNotice.rawLetterPreview.recipient}
                        </div>
                        <div className="space-y-1 py-1">
                          {selectedNotice.rawLetterPreview.bodyLines.map(
                            (line, i) => (
                              <p key={i}>{line}</p>
                            )
                          )}
                        </div>
                        <div className="text-[10px] text-stone-500 border-t border-stone-300 pt-1">
                          {selectedNotice.rawLetterPreview.footer}
                        </div>
                      </div>
                    )}

                    {/* Generated English Defense Letter */}
                    {oathLetter && (
                      <div
                        dir="ltr"
                        className="bg-amber-50/70 border border-amber-300 rounded-xl p-3 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-amber-950">
                            Ready-to-Submit English OATH Hearing Response:
                          </span>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(oathLetter);
                              setCopiedOath(true);
                              setTimeout(() => setCopiedOath(false), 2000);
                            }}
                            className="flex items-center gap-1 text-xs bg-white border border-amber-300 px-2.5 py-1 rounded-lg font-semibold text-amber-900 hover:bg-amber-100"
                          >
                            {copiedOath ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy English Letter</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="whitespace-pre-wrap font-mono text-[11px] text-stone-800 bg-white p-2.5 rounded-lg border border-amber-200 max-h-52 overflow-y-auto">
                          {oathLetter}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* =========================================================
              TAB 2: WHATSAPP-STYLE VOICE & CHAT ASSISTANT
             ========================================================= */}
          {activeTab === "chat" && (
            <div className="flex-1 flex flex-col whatsapp-chat-bg">
              {/* Top Pinned Community Helper Bar */}
              <div className="bg-amber-50/95 border-b border-amber-200 px-3 py-2 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-stone-800 font-medium text-[11px]">
                    {isRTL
                      ? "اسأل بالصوت أو الكتابة عن قوانين الصحة، الفود ستامب، أو الضرائب"
                      : "Ask by voice or text about DOHMH, SNAP/EBT, DCWP, or cafes"}
                  </span>
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-[11px] font-bold text-[#075E54] underline shrink-0"
                >
                  {isRTL ? "+ إرفاق صورة" : "+ Scan Mail"}
                </button>
              </div>

              {/* Messages Scroll Container */}
              <div className="flex-1 p-3 space-y-3 overflow-y-auto">
                {messages.map((msg) => {
                  const isBot = msg.sender === "bot";
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        isBot ? "items-start" : "items-end"
                      }`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl p-3 shadow-sm space-y-2 ${
                          isBot
                            ? "bg-white text-stone-900 rounded-tl-none border border-stone-200/80"
                            : "bg-[#DCF8C6] text-stone-900 rounded-tr-none border border-emerald-300/60"
                        }`}
                      >
                        {/* Optional Voice Note Bar inside Chat Bubble */}
                        {msg.isVoiceNote && (
                          <div className="flex items-center gap-2.5 bg-stone-100/90 border border-stone-200/80 px-2.5 py-1.5 rounded-xl">
                            <button
                              onClick={() =>
                                toggleSpeak(msg.id, msg.text.ar, msg.text.en)
                              }
                              className="w-7 h-7 rounded-full bg-[#25D366] text-stone-950 flex items-center justify-center shrink-0 shadow-sm"
                            >
                              {speakingId === msg.id ? (
                                <VolumeX className="w-3.5 h-3.5 animate-pulse" />
                              ) : (
                                <Volume2 className="w-3.5 h-3.5" />
                              )}
                            </button>
                            <div className="flex-1 flex items-center gap-0.5 h-3">
                              {[
                                40, 80, 55, 95, 60, 75, 45, 90, 65, 50, 85, 70,
                                40, 60,
                              ].map((h, i) => (
                                <span
                                  key={i}
                                  style={{ height: `${h}%` }}
                                  className={`flex-1 rounded-full ${
                                    speakingId === msg.id
                                      ? "bg-emerald-600 animate-pulse"
                                      : "bg-stone-400"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-[10px] font-mono text-stone-500">
                              {msg.voiceDuration || "0:15"}
                            </span>
                          </div>
                        )}

                        {/* Arabic & English Message Text */}
                        <p className="text-xs whitespace-pre-line leading-relaxed font-medium">
                          {msg.text[lang]}
                        </p>
                        {bilingualMode && msg.text.ar !== msg.text.en && (
                          <p
                            dir={lang === "ar" ? "ltr" : "rtl"}
                            className="text-[11px] text-stone-600 bg-stone-50/90 p-2 rounded-lg whitespace-pre-line border-t border-stone-200/60"
                          >
                            {lang === "ar" ? msg.text.en : msg.text.ar}
                          </p>
                        )}

                        <div className="flex items-center justify-end gap-1 text-[10px] text-stone-400">
                          <span>{msg.timestamp}</span>
                          {!isBot && (
                            <span className="text-sky-500 font-bold">✓✓</span>
                          )}
                        </div>
                      </div>

                      {/* Quick Action Chips */}
                      {msg.quickActions && (
                        <div className="mt-2 flex flex-wrap gap-1.5 max-w-[95%]">
                          {msg.quickActions.map((qa) => (
                            <button
                              key={qa.promptKey}
                              onClick={() => handleQuickPrompt(qa.promptKey)}
                              className="bg-white hover:bg-emerald-50 text-[#075E54] border border-emerald-600/30 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm transition active:scale-95"
                            >
                              {qa.label[lang]}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {isBotTyping && (
                  <div className="flex items-start">
                    <div className="bg-white rounded-2xl px-4 py-2.5 text-xs text-stone-500 shadow-sm border border-stone-200">
                      {isRTL
                        ? "مساعد دكّاني يكتب الآن..."
                        : "Dukkani Assistant is typing..."}
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Quick Topic Strip */}
              <div className="bg-stone-100/95 px-2.5 py-1.5 border-t border-stone-200 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {Object.keys(BOT_KNOWLEDGE_RESPONSES).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleQuickPrompt(key)}
                    className="shrink-0 text-[11px] bg-white hover:bg-emerald-50 text-stone-700 border border-stone-300 px-2.5 py-1 rounded-full font-medium"
                  >
                    {key === "scan_dohmh" &&
                      (isRTL ? "⚖️ جلسة OATH" : "⚖️ OATH Hearing")}
                    {key === "qahwah_rules" &&
                      (isRTL ? "☕ شروط المقهى اليمني" : "☕ Yemeni Cafe Traps")}
                    {key === "cc_surcharge" &&
                      (isRTL ? "💳 نسبة الكريدت 4%" : "💳 4% Card Fee Rule")}
                    {key === "ebt_rules" &&
                      (isRTL ? "🛒 قوانين الفود ستامب" : "🛒 SNAP/EBT Deli Rules")}
                  </button>
                ))}
              </div>

              {/* WhatsApp Bottom Composer Bar */}
              <form
                onSubmit={handleSendMessage}
                className="bg-[#F0F2F5] p-2 flex items-center gap-2 border-t border-stone-300"
              >
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2 text-stone-600 hover:text-[#075E54] rounded-full hover:bg-stone-200/70 transition"
                  title="Scan Photo"
                >
                  <Camera className="w-5 h-5" />
                </button>

                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={
                    isRTL
                      ? "اكتب سؤالك بالعربي أو الإنجليزي (مثال: حليب عدني، دخان، غرامة)..."
                      : "Ask in Arabic or English (e.g., milk rules, vape fine, OATH)..."
                  }
                  className="flex-1 bg-white rounded-full px-4 py-2 text-xs text-stone-900 placeholder:text-stone-400 border border-stone-200 focus:outline-none focus:border-[#128C7E]"
                />

                {inputText.trim() ? (
                  <button
                    type="submit"
                    className="w-9 h-9 rounded-full bg-[#128C7E] text-white flex items-center justify-center shadow-sm hover:bg-[#075E54] transition"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleVoiceRecordSimulate}
                    className={`w-9 h-9 rounded-full flex items-center justify-center shadow-sm transition ${
                      isRecording
                        ? "bg-red-600 text-white animate-pulse ring-4 ring-red-300"
                        : "bg-[#128C7E] text-white hover:bg-[#075E54]"
                    }`}
                    title={
                      isRTL ? "اضغط للتحدث بالصوت" : "Tap to send voice note"
                    }
                  >
                    <Mic className="w-4 h-4" />
                  </button>
                )}
              </form>
            </div>
          )}

          {/* =========================================================
              TAB 3: PERMIT TRACKER & GRADE-A INSPECTION CHECKLIST
             ========================================================= */}
          {activeTab === "licenses" && (
            <div className="p-3.5 space-y-4 flex-1">
              {/* Live NYC DOHMH Letter Grade Simulator Card */}
              <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-sm space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                      {isRTL
                        ? "فحص جاهزية التفتيش الصحي (DOHMH)"
                        : "NYC DOHMH Self-Inspection Simulator"}
                    </span>
                    <h2 className="font-bold text-sm text-stone-900">
                      {isRTL
                        ? "هل محلك جاهز اليوم لو دخل المفتش فجأة؟"
                        : "If an inspector walked in right now, what's your grade?"}
                    </h2>
                    <p className="text-[11px] text-stone-500">
                      {isRTL
                        ? "الدرجة A تتطلب 0 إلى 13 نقطة كحد أقصى. علّم على البنود المطبقة في محلك حالياً:"
                        : "Grade A requires 0–13 violation points. Check the items currently compliant in your shop:"}
                    </p>
                  </div>

                  {/* Famous NYC Blue/Green Letter Grade Card */}
                  <div
                    className={`w-16 h-20 rounded-xl flex flex-col items-center justify-center border-2 shadow-md shrink-0 ${
                      currentGrade === "A"
                        ? "bg-blue-700 border-blue-900 text-white"
                        : currentGrade === "B"
                        ? "bg-emerald-700 border-emerald-900 text-white"
                        : "bg-amber-600 border-amber-800 text-white"
                    }`}
                  >
                    <span className="text-[8px] font-bold tracking-widest uppercase opacity-90">
                      NYC Health
                    </span>
                    <span className="text-3xl font-black leading-none my-0.5">
                      {currentGrade}
                    </span>
                    <span className="text-[9px] font-semibold bg-black/25 px-1.5 py-0.2 rounded">
                      {riskPoints} {isRTL ? "نقطة" : "pts"}
                    </span>
                  </div>
                </div>

                {/* Interactive Checklist Items */}
                <div className="space-y-2 pt-1">
                  {filteredChecklist.map((item) => (
                    <div
                      key={item.id}
                      onClick={() =>
                        setChecklist((prev) =>
                          prev.map((c) =>
                            c.id === item.id ? { ...c, checked: !c.checked } : c
                          )
                        )
                      }
                      className={`p-3 rounded-xl border cursor-pointer transition flex items-start gap-2.5 ${
                        item.checked
                          ? "bg-emerald-50/50 border-emerald-200"
                          : "bg-red-50/50 border-red-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => {}}
                        className="mt-1 h-4 w-4 rounded border-stone-300 text-emerald-600"
                      />
                      <div className="flex-1 text-xs space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-stone-200 text-stone-800">
                            {item.code} • {item.points}{" "}
                            {isRTL ? "نقاط" : "pts"}
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              item.checked
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {item.checked
                              ? isRTL
                                ? "✓ سليم"
                                : "✓ Compliant"
                              : isRTL
                              ? `⚠️ خطر (+${item.points} نقاط)`
                              : `⚠️ Risk (+${item.points} pts)`}
                          </span>
                        </div>
                        <p className="font-bold text-stone-900">
                          {item.title.ar}
                        </p>
                        {bilingualMode && (
                          <p dir="ltr" className="text-[11px] text-stone-600">
                            {item.title.en}
                          </p>
                        )}
                        <p className="text-[11px] text-amber-900 bg-amber-50/90 border border-amber-200/70 p-2 rounded-lg">
                          💡 {isRTL ? item.tip.ar : item.tip.en}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Store Licenses & Renewal Alerts */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                    {isRTL
                      ? "تراخيص المحل وتنبيهات التجديد:"
                      : "Store Permits & Renewal Countdown:"}
                  </h3>
                  <span className="text-[11px] text-emerald-700 font-semibold">
                    {isRTL ? "٤ تراخيص مسجلة" : "4 Tracked Permits"}
                  </span>
                </div>

                {INITIAL_LICENSES.map((lic) => (
                  <div
                    key={lic.id}
                    className="bg-white rounded-2xl border border-stone-200 p-3.5 shadow-sm space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold text-stone-500 uppercase">
                          {lic.agency} • #{lic.licenseNumber}
                        </span>
                        <h4 className="font-bold text-xs text-stone-900 mt-0.5">
                          {lic.name.ar}
                        </h4>
                        {bilingualMode && (
                          <p dir="ltr" className="text-[11px] text-stone-500">
                            {lic.name.en}
                          </p>
                        )}
                      </div>

                      <span
                        className={`shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full ${
                          lic.status === "action_required"
                            ? "bg-red-100 text-red-700 border border-red-200"
                            : lic.status === "expiring_soon"
                            ? "bg-amber-100 text-amber-800 border border-amber-200"
                            : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                        }`}
                      >
                        {lic.status === "action_required"
                          ? isRTL
                            ? `عاجل (${lic.daysRemaining} يوم)`
                            : `Urgent (${lic.daysRemaining}d)`
                          : lic.status === "expiring_soon"
                          ? isRTL
                            ? `ينتهي خلال ${lic.daysRemaining} يوم`
                            : `Due in ${lic.daysRemaining}d`
                          : isRTL
                          ? "ساري المفعول ✓"
                          : "Active ✓"}
                      </span>
                    </div>

                    <p className="text-xs text-stone-700 bg-stone-50 p-2 rounded-xl border border-stone-200/60">
                      {isRTL ? lic.notes.ar : lic.notes.en}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                      <span>
                        {isRTL ? "تاريخ الانتهاء:" : "Expires:"}{" "}
                        <strong className="text-stone-800">
                          {lic.expiryDate}
                        </strong>
                      </span>
                      <span>
                        {isRTL ? "رسوم التجديد:" : "Renewal Fee:"}{" "}
                        <strong className="text-stone-800">
                          {lic.renewalFee}
                        </strong>
                      </span>
                    </div>
                  </div>
                ))}

                {/* YAMA Community Support Card */}
                <div className="bg-gradient-to-r from-amber-900 to-stone-900 text-white rounded-2xl p-4 shadow-md space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider bg-amber-400/20 text-amber-200 px-2 py-0.5 rounded-full font-semibold">
                      {isRTL
                        ? "دعم المجتمع اليمني في نيويورك"
                        : "NYC Yemeni Merchant Network"}
                    </span>
                    <Award className="w-4 h-4 text-amber-300" />
                  </div>
                  <h4 className="font-bold text-sm">
                    {isRTL
                      ? "تحتاج مساعدة شخصية في الفود ستامب أو التراخيص؟"
                      : "Need hands-on help with SNAP/EBT or city permits?"}
                  </h4>
                  <p className="text-xs text-stone-200 leading-relaxed">
                    {isRTL
                      ? "شارك ملف محلك الجاهز مع مكتب جمعية التجار اليمنيين الأمريكيين (YAMA) في باي ريدج أو موريس بارك لمراجعته مجاناً."
                      : "Export your store compliance packet to share with the Yemeni American Merchants Association (YAMA) in Bay Ridge or Morris Park."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Bottom Mobile Navigation Bar */}
        <nav className="bg-white border-t border-stone-200 px-2 py-1.5 grid grid-cols-3 gap-1 shadow-lg">
          <button
            onClick={() => setActiveTab("scanner")}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition ${
              activeTab === "scanner"
                ? "bg-emerald-50 text-[#075E54] font-bold"
                : "text-stone-500 hover:text-stone-800"
            }`}
          >
            <ScanLine className="w-5 h-5 mb-0.5" />
            <span className="text-[11px]">
              {isRTL ? "فاحص البريد" : "Mail Scanner"}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("chat")}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition relative ${
              activeTab === "chat"
                ? "bg-emerald-50 text-[#075E54] font-bold"
                : "text-stone-500 hover:text-stone-800"
            }`}
          >
            <MessageSquare className="w-5 h-5 mb-0.5" />
            <span className="text-[11px]">
              {isRTL ? "مساعد واتساب" : "WhatsApp AI"}
            </span>
            <span className="absolute top-1 right-6 w-2 h-2 rounded-full bg-[#25D366]" />
          </button>

          <button
            onClick={() => setActiveTab("licenses")}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition ${
              activeTab === "licenses"
                ? "bg-emerald-50 text-[#075E54] font-bold"
                : "text-stone-500 hover:text-stone-800"
            }`}
          >
            <ClipboardCheck className="w-5 h-5 mb-0.5" />
            <span className="text-[11px]">
              {isRTL ? "التراخيص والدرجة A" : "Permits & Grade A"}
            </span>
          </button>
        </nav>
      </div>
    </div>
  );
}
