"use client";

import React, { useState } from "react";
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
import {
  FileWarning,
  MessageSquare,
  ShieldCheck,
  ClipboardCheck,
  Volume2,
  VolumeX,
  Upload,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Send,
  Copy,
  Check,
  Coffee,
  Store,
  FileText,
  Scale,
} from "lucide-react";

interface MerchantToolkitProps {
  lang: Language;
}

export default function MerchantToolkit({ lang }: MerchantToolkitProps) {
  const isAr = lang === "ar";
  const [activeTab, setActiveTab] = useState<
    "scanner" | "advisor" | "licenses" | "checklist"
  >("scanner");

  // Scanner state
  const [notices, setNotices] = useState<ScannedNotice[]>(SAMPLE_NOTICES);
  const [selectedNoticeId, setSelectedNoticeId] = useState<string>(
    SAMPLE_NOTICES[0].id
  );
  const [isScanning, setIsScanning] = useState(false);
  const [oathLetter, setOathLetter] = useState<string | null>(null);
  const [isGeneratingLetter, setIsGeneratingLetter] = useState(false);
  const [copiedLetter, setCopiedLetter] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Chat Advisor state
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_CHAT_MESSAGES);
  const [chatInput, setChatInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  // Checklist state
  const [checklist, setChecklist] =
    useState<InspectionItem[]>(INITIAL_CHECKLIST);
  const [checklistFilter, setChecklistFilter] = useState<
    "all" | "bodega" | "qahwah"
  >("all");

  const selectedNotice =
    notices.find((n) => n.id === selectedNoticeId) || notices[0];

  // Voice synthesis helper
  const speakText = (text: string, speakLang: Language) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    if (isSpeaking) {
      setIsSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = speakLang === "ar" ? "ar-SA" : "en-US";
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Handle simulated upload scan via API
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsScanning(true);
    setOathLetter(null);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "scan_upload",
          fileName: file.name,
        }),
      });
      const data = await res.json();
      if (data.notice) {
        setNotices((prev) => [data.notice, ...prev]);
        setSelectedNoticeId(data.notice.id);
      }
    } catch {
      // Fallback
    } finally {
      setIsScanning(false);
    }
  };

  // Generate English OATH Hearing Defense Letter
  const handleGenerateOathLetter = async () => {
    setIsGeneratingLetter(true);
    setCopiedLetter(false);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "generate_oath_letter",
          noticeId: selectedNotice.id,
        }),
      });
      const data = await res.json();
      if (data.defenseLetter) {
        setOathLetter(data.defenseLetter);
      }
    } catch {
      setOathLetter(
        `TO: NYC OATH Hearings Division\nRE: Summons #${selectedNotice.noticeNumber}\nRespondent: ${selectedNotice.storeName}\n\nWe have immediately corrected all cited conditions and attached photographic proof of compliance. We respectfully request penalty mitigation.`
      );
    } finally {
      setIsGeneratingLetter(false);
    }
  };

  const handleCopyLetter = () => {
    if (!oathLetter) return;
    navigator.clipboard.writeText(oathLetter);
    setCopiedLetter(true);
    setTimeout(() => setCopiedLetter(false), 2500);
  };

  // Chat quick action
  const handleQuickPrompt = (promptKey: string) => {
    const item = BOT_KNOWLEDGE_RESPONSES[promptKey];
    if (!item) return;

    const userMsg: ChatMessage = {
      id: "u-" + Date.now(),
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      text: item.userPrompt,
    };

    const botMsg: ChatMessage = {
      id: "b-" + (Date.now() + 1),
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      text: item.botReply,
      isVoiceNote: true,
      voiceDuration: "0:22",
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleSendChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const currentInput = chatInput.trim();
    setChatInput("");

    const userMsg: ChatMessage = {
      id: "u-" + Date.now(),
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      text: { ar: currentInput, en: currentInput },
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsBotTyping(true);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "chat",
          query: currentInput,
        }),
      });
      const data = await res.json();
      if (data.reply) {
        const botMsg: ChatMessage = {
          id: "b-" + Date.now(),
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          text: data.reply,
        };
        setMessages((prev) => [...prev, botMsg]);
      }
    } finally {
      setIsBotTyping(false);
    }
  };

  // Toggle checklist item
  const toggleChecklistItem = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const filteredChecklist = checklist.filter((item) => {
    if (checklistFilter === "all") return true;
    return item.category === checklistFilter || item.category === "both";
  });

  // Unchecked items represent violation risk points!
  const riskPoints = filteredChecklist
    .filter((i) => !i.checked)
    .reduce((sum, i) => sum + i.points, 0);

  const predictedGrade =
    riskPoints <= 13 ? "A" : riskPoints <= 27 ? "B" : "C";

  return (
    <div className="bg-stone-900 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl">
      {/* Toolkit Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 px-6 py-6 border-b border-stone-800">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {isAr
                ? "بوابة التاجر الذكية — مجاناً لأعضاء الغرفة التجارية"
                : "YCC-NYC Member Digital Back-Office — Powered by Dukkani AI"}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {isAr
                ? "حماية محلك من غرامات نيويورك وتنظيم التراخيص"
                : "NYC Merchant Compliance & Regulatory Defense Suite"}
            </h3>
            <p className="text-stone-300 text-sm mt-1 max-w-3xl">
              {isAr
                ? "افحص رسائل البلدية (DOHMH, DCWP, SNAP/EBT)، استمع للشرح باللهجة اليمنية أو الإنجليزية، وولّد خطابات دفاع قانونية لجلسات OATH بضغطة زر."
                : "Translate complex NYC agency summonses into plain Arabic & English, generate OATH hearing defense letters, track store permits, and run a self-inspection."}
            </p>
          </div>

          {/* 4 Toolkit Sub-Tabs */}
          <div className="grid grid-cols-2 sm:flex items-center gap-2 bg-stone-950/80 p-1.5 rounded-2xl border border-stone-800">
            <button
              onClick={() => setActiveTab("scanner")}
              className={`flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "scanner"
                  ? "bg-amber-500 text-stone-950 shadow-md"
                  : "text-stone-300 hover:text-white hover:bg-stone-800/60"
              }`}
            >
              <FileWarning className="w-4 h-4 shrink-0" />
              <span>{isAr ? "فاحص البريد والمخالفات" : "Mail & Violation Scanner"}</span>
            </button>

            <button
              onClick={() => setActiveTab("advisor")}
              className={`flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "advisor"
                  ? "bg-amber-500 text-stone-950 shadow-md"
                  : "text-stone-300 hover:text-white hover:bg-stone-800/60"
              }`}
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>{isAr ? "المستشار الصوتي" : "Bilingual AI Advisor"}</span>
            </button>

            <button
              onClick={() => setActiveTab("licenses")}
              className={`flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "licenses"
                  ? "bg-amber-500 text-stone-950 shadow-md"
                  : "text-stone-300 hover:text-white hover:bg-stone-800/60"
              }`}
            >
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{isAr ? "متابعة التراخيص" : "Permit Tracker"}</span>
            </button>

            <button
              onClick={() => setActiveTab("checklist")}
              className={`flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "checklist"
                  ? "bg-amber-500 text-stone-950 shadow-md"
                  : "text-stone-300 hover:text-white hover:bg-stone-800/60"
              }`}
            >
              <ClipboardCheck className="w-4 h-4 shrink-0" />
              <span>{isAr ? "حاسبة الدرجة A" : "Grade 'A' Check"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: NYC MAIL & VIOLATION SCANNER */}
      {activeTab === "scanner" && (
        <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column: Sample Notices & Upload */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-stone-950/90 border border-stone-800 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-white text-sm">
                  {isAr
                    ? "١. اختر إشعار بلدية أو ارفع صورة"
                    : "1. Select NYC Notice or Upload Photo"}
                </h4>
                <span className="text-xs text-amber-400 font-medium">
                  DOHMH • DCWP • SNAP
                </span>
              </div>

              <label className="flex flex-col items-center justify-center border-2 border-dashed border-amber-500/40 hover:border-amber-400 bg-amber-500/5 hover:bg-amber-500/10 rounded-xl p-4 cursor-pointer transition-all text-center mb-4">
                <Upload className="w-6 h-6 text-amber-400 mb-1.5" />
                <span className="text-xs font-semibold text-amber-200">
                  {isScanning
                    ? isAr
                      ? "جاري قراءة الوثيقة بالذكاء الاصطناعي..."
                      : "Scanning NYC notice via OCR..."
                    : isAr
                    ? "صوّر أو ارفع رسالة البلدية (PDF / صورة)"
                    : "Upload or Snap Photo of City Notice"}
                </span>
                <span className="text-[11px] text-stone-400 mt-0.5">
                  {isAr
                    ? "يتعرف تلقائياً على مخالفات الصحة، التبغ، أو الفود ستامب"
                    : "Auto-detects DOHMH, DCWP, OATH & USDA SNAP letters"}
                </span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              <div className="space-y-2.5">
                {notices.map((notice) => {
                  const isSelected = notice.id === selectedNotice.id;
                  return (
                    <button
                      key={notice.id}
                      onClick={() => {
                        setSelectedNoticeId(notice.id);
                        setOathLetter(null);
                      }}
                      className={`w-full text-start p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? "bg-stone-800/95 border-amber-500 shadow-lg"
                          : "bg-stone-900/60 border-stone-800 hover:border-stone-700"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="px-2 py-0.5 text-[11px] font-bold rounded bg-stone-950 text-amber-400 border border-amber-500/30">
                          {notice.agencyCode}
                        </span>
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                            notice.urgency === "high"
                              ? "bg-red-500/20 text-red-300"
                              : "bg-amber-500/20 text-amber-300"
                          }`}
                        >
                          {isAr
                            ? `متبقي ${notice.daysLeft} يوم`
                            : `${notice.daysLeft} days left`}
                        </span>
                      </div>
                      <p className="font-bold text-white text-sm line-clamp-1">
                        {notice.documentTitle[lang]}
                      </p>
                      <p className="text-xs text-stone-400 mt-0.5 truncate">
                        {notice.storeName}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Raw Official English Letter Preview */}
            <div className="bg-stone-950 border border-stone-800 rounded-2xl p-4 font-mono text-xs text-stone-300">
              <div className="text-[11px] text-amber-400 font-bold pb-2 mb-2 border-b border-stone-800 flex items-center justify-between">
                <span>ORIGINAL NYC DOCUMENT OCR</span>
                <span>#{selectedNotice.noticeNumber}</span>
              </div>
              <p className="font-bold text-white mb-1">
                {selectedNotice.rawLetterPreview.header}
              </p>
              <p className="text-stone-400 text-[11px] mb-2">
                {selectedNotice.rawLetterPreview.recipient}
              </p>
              <div className="space-y-1 text-[11px] text-stone-300 bg-stone-900/90 p-2.5 rounded-lg border border-stone-800">
                {selectedNotice.rawLetterPreview.bodyLines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <p className="text-[10px] text-stone-400 mt-2">
                {selectedNotice.rawLetterPreview.footer}
              </p>
            </div>
          </div>

          {/* Right column: Plain-Arabic/English Breakdown + Voice Note + OATH Generator */}
          <div className="lg:col-span-8 space-y-5">
            <div className="bg-stone-950/90 border border-stone-800 rounded-2xl p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-stone-800">
                <div>
                  <span className="text-xs font-semibold text-emerald-400">
                    {selectedNotice.agencyName[lang]}
                  </span>
                  <h4 className="text-xl font-bold text-white mt-0.5">
                    {selectedNotice.documentTitle[lang]}
                  </h4>
                  <p className="text-xs text-stone-400 mt-1">
                    {selectedNotice.storeName} •{" "}
                    {isAr ? "الموعد النهائي:" : "Deadline:"}{" "}
                    <span className="text-amber-300 font-semibold">
                      {selectedNotice.deadline}
                    </span>
                  </p>
                </div>

                <div className="bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-end">
                  <span className="text-[11px] text-stone-400 block">
                    {isAr ? "الغرامة / الرسوم المتوقعة" : "Estimated Fine / Fee"}
                  </span>
                  <span className="text-base font-bold text-amber-400">
                    {selectedNotice.fineAmount}
                  </span>
                </div>
              </div>

              {/* Voice Summary Box (Yemeni Merchant Dialect / English) */}
              <div className="mt-4 bg-gradient-to-r from-emerald-950/80 to-stone-900 border border-emerald-500/30 rounded-2xl p-4">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                      {isAr
                        ? "خلاصة صوتية باللهجة اليمنية الواضحة"
                        : "Plain-Language Merchant Audio Briefing"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        speakText(selectedNotice.yemeniVoiceScript.ar, "ar")
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs transition-all"
                    >
                      {isSpeaking ? (
                        <VolumeX className="w-3.5 h-3.5" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5" />
                      )}
                      {isAr ? "استمع بالعربي 🇾🇪" : "Play Arabic Audio 🇾🇪"}
                    </button>
                    <button
                      onClick={() =>
                        speakText(selectedNotice.yemeniVoiceScript.en, "en")
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs transition-all"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      {isAr ? "استمع بالإنجليزي 🇺🇸" : "Play English Audio 🇺🇸"}
                    </button>
                  </div>
                </div>
                <p className="text-stone-100 text-sm leading-relaxed">
                  “{selectedNotice.yemeniVoiceScript[lang]}”
                </p>
              </div>

              {/* Violation Codes Cited */}
              <div className="mt-5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                  {isAr
                    ? "البنود والمخالفات المسجلة في الوثيقة:"
                    : "Cited NYC Codes & Items:"}
                </h5>
                <div className="space-y-2">
                  {selectedNotice.violationCodes.map((v, idx) => (
                    <div
                      key={idx}
                      className="flex items-start justify-between gap-3 bg-stone-900/90 border border-stone-800 rounded-xl p-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-amber-300">
                            {v.code}
                          </span>
                          <p className="text-xs sm:text-sm text-stone-200 mt-0.5">
                            {v.description[lang]}
                          </p>
                        </div>
                      </div>
                      {v.points && (
                        <span className="px-2.5 py-1 rounded-lg bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-bold shrink-0">
                          {v.points} {isAr ? "نقاط" : "pts"}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Steps */}
              <div className="mt-5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                  {isAr
                    ? "خطوات الحل السريع لتفادي الغرامة:"
                    : "Step-by-Step Action Plan:"}
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {selectedNotice.actionSteps.map((step) => (
                    <div
                      key={step.step}
                      className="bg-stone-900/80 border border-stone-800 rounded-xl p-3.5"
                    >
                      <p className="font-bold text-amber-300 text-xs sm:text-sm mb-1">
                        {step.title[lang]}
                      </p>
                      <p className="text-xs text-stone-300 leading-relaxed">
                        {step.detail[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 1-Click OATH Defense Letter Generator */}
              <div className="mt-6 pt-5 border-t border-stone-800">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h5 className="font-bold text-white text-sm flex items-center gap-2">
                      <Scale className="w-4 h-4 text-amber-400" />
                      {isAr
                        ? "مولّد خطاب الدفاع الرسمي لجلسة OATH (بالإنجليزي القانوني)"
                        : "1-Click Official English OATH Hearing Defense Letter"}
                    </h5>
                    <p className="text-xs text-stone-400">
                      {isAr
                        ? "يجهز لك خطاباً رسمياً جاهزاً للنسخ والرفع في بوابة محكمة OATH لطلب إعفاء أو تخفيض الغرامة."
                        : "Auto-drafts a formal mitigation statement ready to paste into the NYC OATH online hearing portal."}
                    </p>
                  </div>
                  <button
                    onClick={handleGenerateOathLetter}
                    disabled={isGeneratingLetter}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-lg"
                  >
                    <FileText className="w-4 h-4" />
                    {isGeneratingLetter
                      ? isAr
                        ? "جاري صياغة الخطاب..."
                        : "Drafting Legal Statement..."
                      : isAr
                      ? "توليد خطاب دفاع OATH بالإنجليزي"
                      : "Generate OATH Defense Statement"}
                  </button>
                </div>

                {oathLetter && (
                  <div className="mt-4 bg-stone-900 border border-amber-500/40 rounded-xl p-4">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800">
                      <span className="text-xs font-bold text-amber-400">
                        {isAr
                          ? "خطاب جاهز للرفع في NYC.gov/OATH"
                          : "Ready-to-Submit OATH Mitigation Statement"}
                      </span>
                      <button
                        onClick={handleCopyLetter}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold"
                      >
                        {copiedLetter ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{isAr ? "تم النسخ!" : "Copied!"}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>{isAr ? "نسخ الخطاب" : "Copy Letter"}</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre
                      dir="ltr"
                      className="text-xs text-stone-200 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto"
                    >
                      {oathLetter}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BILINGUAL WHATSAPP-STYLE ADVISOR */}
      {activeTab === "advisor" && (
        <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-stone-950 border border-stone-800 rounded-2xl p-5">
              <h4 className="font-bold text-white text-base mb-1">
                {isAr
                  ? "أسئلة التجار الأكثر شيوعاً في نيويورك"
                  : "Frequent NYC Yemeni Merchant Questions"}
              </h4>
              <p className="text-xs text-stone-400 mb-4">
                {isAr
                  ? "اضغط على أي سؤال للحصول على إجابة فورية موثقة بقوانين نيويورك:"
                  : "Tap any topic for instant NYC regulatory guidance in Arabic & English:"}
              </p>

              <div className="space-y-2.5">
                {INITIAL_CHAT_MESSAGES[0].quickActions?.map((qa) => (
                  <button
                    key={qa.promptKey}
                    onClick={() => handleQuickPrompt(qa.promptKey)}
                    className="w-full text-start p-3 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-500/50 text-xs sm:text-sm font-medium text-stone-200 transition-all"
                  >
                    {qa.label[lang]}
                  </button>
                ))}
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-xs text-emerald-200">
                <p className="font-bold mb-1">
                  {isAr
                    ? "💡 هل تحتاج محامياً أو محاسباً وجهاً لوجه؟"
                    : "💡 Need 1-on-1 CPA or Legal Clinic Support?"}
                </p>
                <p className="text-stone-300">
                  {isAr
                    ? "مكتب الغرفة التجارية في البرونكس وبروكلين يستقبل الأعضاء كل أربعاء لمراجعة ملفات الضرائب والفود ستامب مجاناً."
                    : "Our Bronx & Brooklyn Chamber chapters host weekly walk-in hours every Wednesday for SNAP/EBT and NYS Sales Tax clearance."}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-2xl overflow-hidden border border-stone-800 flex flex-col h-[520px] bg-stone-950">
              {/* WhatsApp-style Top Bar */}
              <div className="bg-emerald-900 px-4 py-3 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-400 text-stone-950 font-extrabold flex items-center justify-center text-sm">
                    YCC
                  </div>
                  <div>
                    <p className="font-bold text-sm">
                      {isAr
                        ? "مستشار الغرفة التجارية (دكّاني AI)"
                        : "YCC-NYC Merchant Advisor (Dukkani AI)"}
                    </p>
                    <p className="text-[11px] text-emerald-200">
                      {isAr
                        ? "متصل الآن • يجيب بالعربي والإنجليزي"
                        : "Online • Bilingual Yemeni Arabic & English"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 whatsapp-chat-bg">
                {messages.map((msg) => {
                  const isUser = msg.sender === "user";
                  return (
                    <div
                      key={msg.id}
                      className={`flex ${
                        isUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm text-xs sm:text-sm ${
                          isUser
                            ? "bg-emerald-800 text-white rounded-br-none"
                            : "bg-white text-stone-900 rounded-bl-none border border-stone-200"
                        }`}
                      >
                        <p className="whitespace-pre-line leading-relaxed">
                          {msg.text[lang]}
                        </p>
                        <div className="flex items-center justify-between gap-3 mt-2 pt-1 border-t border-black/10 text-[10px] opacity-75">
                          <span>{msg.timestamp}</span>
                          {!isUser && (
                            <button
                              onClick={() => speakText(msg.text[lang], lang)}
                              className="inline-flex items-center gap-1 font-bold text-emerald-800 hover:underline"
                            >
                              <Volume2 className="w-3 h-3" />
                              {isAr ? "استماع صوتي" : "Listen"}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
                {isBotTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-stone-700 rounded-2xl px-4 py-2.5 text-xs shadow">
                      {isAr
                        ? "جاري كتابة الرد..."
                        : "Advisor is typing a response..."}
                    </div>
                  </div>
                )}
              </div>

              {/* Input Bar */}
              <form
                onSubmit={handleSendChat}
                className="bg-stone-900 p-3 flex items-center gap-2 border-t border-stone-800"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder={
                    isAr
                      ? "اكتب سؤالك هنا (مثلاً: شروط خلية النحل، تجديد رخصة الدخان، مخالفة OATH)..."
                      : "Ask about DOHMH coffee shop rules, SNAP/EBT, tobacco license, or OATH..."
                  }
                  className="flex-1 bg-stone-950 text-white text-xs sm:text-sm rounded-xl px-4 py-2.5 border border-stone-800 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5"
                >
                  <Send className="w-4 h-4" />
                  <span>{isAr ? "إرسال" : "Ask"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: STORE LICENSE & PERMIT TRACKER */}
      {activeTab === "licenses" && (
        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {INITIAL_LICENSES.map((lic) => {
              const badgeColor =
                lic.status === "active"
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                  : lic.status === "action_required"
                  ? "bg-red-500/20 text-red-300 border-red-500/30"
                  : "bg-amber-500/20 text-amber-300 border-amber-500/30";

              const statusLabel =
                lic.status === "active"
                  ? isAr
                    ? "ساري المفعول"
                    : "Active & Compliant"
                  : lic.status === "action_required"
                  ? isAr
                    ? "مطلوب إجراء عاجل"
                    : "Urgent Action Required"
                  : isAr
                  ? "يقترب موعد التجديد"
                  : "Renewal Due Soon";

              return (
                <div
                  key={lic.id}
                  className="bg-stone-950/90 border border-stone-800 rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-stone-900 text-amber-400 border border-stone-800">
                        {lic.agency} • #{lic.licenseNumber}
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full border ${badgeColor}`}
                      >
                        {statusLabel}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white">
                      {lic.name[lang]}
                    </h4>
                    <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                      {lic.notes[lang]}
                    </p>

                    <div className="mt-4 space-y-1.5">
                      {lic.checklist.map((c, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-stone-300 bg-stone-900/80 px-3 py-2 rounded-lg"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{c[lang]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {isAr ? "تاريخ الانتهاء:" : "Expires:"}{" "}
                      <strong className="text-white">{lic.expiryDate}</strong> (
                      {lic.daysRemaining} {isAr ? "يوم" : "days"})
                    </span>
                    <span>
                      {isAr ? "رسوم التجديد:" : "Fee:"}{" "}
                      <strong className="text-amber-300">
                        {lic.renewalFee}
                      </strong>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 4: INTERACTIVE SELF-INSPECTION GRADE 'A' CALCULATOR */}
      {activeTab === "checklist" && (
        <div className="p-6 lg:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-stone-950 border border-stone-800 rounded-2xl p-5">
            <div>
              <h4 className="text-lg font-bold text-white">
                {isAr
                  ? "فحص التفتيش الذاتي قبل زيارة مفتش الصحة (DOHMH)"
                  : "NYC DOHMH Grade 'A' Pre-Inspection Calculator"}
              </h4>
              <p className="text-xs text-stone-400 mt-0.5">
                {isAr
                  ? "حدد البنود المتوفرة في محلك الآن. أي بند غير مكتمل يضيف نقاط مخالفة (الدرجة A تتطلب 0 إلى 13 نقطة فقط)."
                  : "Check off items currently compliant in your shop. Unchecked items add violation risk points (0–13 pts = Grade A)."}
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-3">
                <button
                  onClick={() => setChecklistFilter("all")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    checklistFilter === "all"
                      ? "bg-amber-500 text-stone-950"
                      : "bg-stone-900 text-stone-300"
                  }`}
                >
                  {isAr ? "جميع المحلات" : "All Storefronts"}
                </button>
                <button
                  onClick={() => setChecklistFilter("qahwah")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    checklistFilter === "qahwah"
                      ? "bg-amber-500 text-stone-950"
                      : "bg-stone-900 text-stone-300"
                  }`}
                >
                  <Coffee className="w-3.5 h-3.5" />
                  {isAr ? "مقاهي القهوة اليمنية" : "Yemeni Coffee Houses"}
                </button>
                <button
                  onClick={() => setChecklistFilter("bodega")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    checklistFilter === "bodega"
                      ? "bg-amber-500 text-stone-950"
                      : "bg-stone-900 text-stone-300"
                  }`}
                >
                  <Store className="w-3.5 h-3.5" />
                  {isAr ? "البوديقا والديلي" : "Bodegas & Delis"}
                </button>
              </div>
            </div>

            {/* Live Grade Badge */}
            <div className="flex items-center gap-4 bg-stone-900 border border-stone-800 rounded-2xl px-5 py-3">
              <div>
                <span className="text-xs text-stone-400 block">
                  {isAr ? "نقاط المخالفة المحتملة" : "Current Risk Points"}
                </span>
                <span className="text-2xl font-extrabold text-white">
                  {riskPoints}{" "}
                  <span className="text-xs font-normal text-stone-400">
                    {isAr ? "نقطة" : "pts"}
                  </span>
                </span>
              </div>
              <div
                className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-black text-2xl border-2 ${
                  predictedGrade === "A"
                    ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                    : predictedGrade === "B"
                    ? "bg-amber-500/20 border-amber-400 text-amber-300"
                    : "bg-red-500/20 border-red-400 text-red-300"
                }`}
              >
                {predictedGrade}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {filteredChecklist.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleChecklistItem(item.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-4 ${
                  item.checked
                    ? "bg-stone-950/70 border-emerald-500/30"
                    : "bg-red-950/20 border-red-500/40"
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => {}}
                    className="mt-1 w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-stone-900 text-amber-300">
                        Code {item.code}
                      </span>
                      {item.isCritical && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-300">
                          {isAr ? "بند حرج" : "Critical Item"}
                        </span>
                      )}
                    </div>
                    <p
                      className={`font-bold text-sm mt-1 ${
                        item.checked ? "text-stone-200" : "text-white"
                      }`}
                    >
                      {item.title[lang]}
                    </p>
                    <p className="text-xs text-stone-400 mt-1">
                      💡 {item.tip[lang]}
                    </p>
                  </div>
                </div>

                <span
                  className={`px-3 py-1 rounded-xl text-xs font-bold shrink-0 ${
                    item.checked
                      ? "bg-emerald-500/15 text-emerald-300"
                      : "bg-red-500/25 text-red-300"
                  }`}
                >
                  {item.checked
                    ? isAr
                      ? "✓ مكتمل (0 نقطة)"
                      : "✓ Safe (0 pts)"
                    : `+${item.points} ${isAr ? "نقاط" : "pts"}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
