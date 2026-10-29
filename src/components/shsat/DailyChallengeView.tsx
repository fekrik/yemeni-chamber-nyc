"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Flame,
  Award,
  CheckCircle2,
  XCircle,
  Sparkles,
  Share2,
  Copy,
  Check,
  ArrowRight,
  BookOpen,
  Calculator,
  RotateCcw,
  ZoomIn,
  Eye,
} from "lucide-react";
import { QUESTIONS, PASSAGES } from "@/data/shsatExams";
import { Question, Passage } from "@/types/shsat";
import { getDailyProgress, saveDailyProgress } from "@/lib/shsatStorage";
import ImageZoomModal from "@/components/shsat/ImageZoomModal";

const STREAK_KEY = "shsat_daily_streak_count";
const LAST_DATE_KEY = "shsat_daily_streak_date";

export default function DailyChallengeView() {
  const [streak, setStreak] = useState(1);
  const [copied, setCopied] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>(
    {}
  );
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [zoomingImage, setZoomingImage] = useState<{
    src: string;
    title: string;
    prompt?: string;
  } | null>(null);
  const [expandedPassageId, setExpandedPassageId] = useState<string | null>(null);

  const todayStr = new Date().toISOString().slice(0, 10);
  const formattedToday = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  // Pick today's ELA and Math questions deterministically based on date seed
  const dateSeed = todayStr
    .split("-")
    .reduce((acc, part) => acc + parseInt(part, 10), 0);

  // For daily sprint: prioritize standalone Revising & Editing Part A & high-yield grammar
  const revisingEla = QUESTIONS.filter(
    (q) =>
      q.section === "ela" &&
      q.options &&
      q.options.length > 0 &&
      (q.topic.toLowerCase().includes("revising") ||
        q.topic.toLowerCase().includes("grammar") ||
        q.questionNumber <= 10)
  );
  const elaQuestions =
    revisingEla.length > 0
      ? revisingEla
      : QUESTIONS.filter((q) => q.section === "ela" && q.options && q.options.length > 0);

  const mathQuestions = QUESTIONS.filter(
    (q) => q.section === "math" && q.options && q.options.length > 0
  );

  const dailyEla = elaQuestions[dateSeed % Math.max(1, elaQuestions.length)];
  const dailyMath = mathQuestions[(dateSeed * 7) % Math.max(1, mathQuestions.length)];

  useEffect(() => {
    try {
      const savedStreak = localStorage.getItem(STREAK_KEY);
      if (savedStreak) {
        setStreak(parseInt(savedStreak, 10) || 1);
      }

      // Restore today's progress if refreshed
      const savedProgress = getDailyProgress(todayStr);
      if (savedProgress) {
        if (savedProgress.selectedAnswers) {
          setSelectedAnswers(savedProgress.selectedAnswers);
        }
        if (savedProgress.submitted) {
          setSubmitted(savedProgress.submitted);
        }
      }
    } catch {
      // ignore
    }
  }, [todayStr]);

  const handleSelect = (qId: string, optId: string) => {
    if (submitted[qId]) return;
    const nextAnswers = { ...selectedAnswers, [qId]: optId };
    setSelectedAnswers(nextAnswers);
    saveDailyProgress(todayStr, nextAnswers, submitted);
  };

  const handleSubmitQuestion = (qId: string) => {
    setSubmitted((prev) => {
      const next = { ...prev, [qId]: true };
      saveDailyProgress(todayStr, selectedAnswers, next);

      // If both completed today, advance streak
      if (next[dailyEla.id] && next[dailyMath.id]) {
        try {
          const lastDate = localStorage.getItem(LAST_DATE_KEY);
          if (lastDate !== todayStr) {
            const nextStreak = streak + 1;
            setStreak(nextStreak);
            localStorage.setItem(STREAK_KEY, nextStreak.toString());
            localStorage.setItem(LAST_DATE_KEY, todayStr);
          }
        } catch {
          // ignore
        }
      }
      return next;
    });
  };

  const handleShareSquad = () => {
    const isElaRight =
      selectedAnswers[dailyEla.id]?.toUpperCase() ===
      dailyEla.correctAnswer.toUpperCase();
    const isMathRight =
      selectedAnswers[dailyMath.id]?.toUpperCase() ===
      dailyMath.correctAnswer.toUpperCase();

    const score = (isElaRight ? 1 : 0) + (isMathRight ? 1 : 0);

    const shareText = `🔥 NYC SHSAT Daily Challenge (${formattedToday}):\nI scored ${score}/2 today on SHSAT Ace!\nCurrent Streak: ${streak} Days in a row.\nCan you beat my score? 👉 https://shsat-ace.onrender.com`;

    if (navigator.share) {
      navigator.share({
        title: "SHSAT Ace Daily Challenge",
        text: shareText,
        url: "https://shsat-ace.onrender.com",
      }).catch(() => {
        navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    } else {
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const renderQuestionBox = (q: Question, label: string) => {
    const userAns = selectedAnswers[q.id];
    const isChecked = !!submitted[q.id];
    const isCorrect = userAns?.toUpperCase() === q.correctAnswer.toUpperCase();
    const passage = q.passageId ? PASSAGES.find((p) => p.id === q.passageId) : null;

    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span
              className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase ${
                q.section === "ela"
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
              }`}
            >
              {label}
            </span>
            <span className="text-xs text-slate-400">• {q.topic}</span>
          </div>

          <span className="text-xs font-mono font-bold text-slate-400">
            Difficulty: {q.difficulty}
          </span>
        </div>

        {/* Crisp Readable Question Prompt (Never Squint!) */}
        {q.prompt && !q.prompt.startsWith("Practice Form") && (
          <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-[10px] uppercase font-extrabold text-amber-400 tracking-wider block mb-1">
              Question Prompt
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-100 leading-relaxed">
              {q.prompt}
            </p>
          </div>
        )}

        {/* Expandable Clean-Text Passage Drawer if applicable */}
        {passage && (
          <div className="rounded-2xl border border-indigo-900/50 bg-indigo-950/20 overflow-hidden">
            <button
              onClick={() =>
                setExpandedPassageId(
                  expandedPassageId === passage.id ? null : passage.id
                )
              }
              className="w-full p-3 flex items-center justify-between text-left text-xs font-bold text-indigo-300 hover:bg-indigo-950/40 transition-colors"
            >
              <span className="flex items-center space-x-2 truncate">
                <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="truncate">Passage: {passage.title}</span>
              </span>
              <span className="text-[11px] font-bold text-amber-400 shrink-0 ml-2">
                {expandedPassageId === passage.id ? "Hide Text ▲" : "Read Full Passage (Clean Text) ▼"}
              </span>
            </button>
            {expandedPassageId === passage.id && (
              <div className="p-4 bg-slate-950 border-t border-indigo-900/40 max-h-72 overflow-y-auto space-y-3 font-serif text-slate-200 text-xs sm:text-sm leading-relaxed">
                {passage.text.split("\n\n").map((para, i) => (
                  <p key={i} className="indent-4">
                    <span className="font-sans font-bold text-indigo-400/80 text-[10px] mr-1.5 select-none">
                      [{i + 1}]
                    </span>
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Question Authentic Graphic / Diagram with Zoom Button */}
        <div className="relative bg-white rounded-2xl p-3 border border-slate-700/80 shadow-inner group">
          <img
            src={q.imageSrc}
            alt="Daily Challenge Question"
            className="w-full object-contain max-h-[220px]"
          />
          <button
            onClick={() =>
              setZoomingImage({
                src: q.imageSrc,
                title: `${label}: ${q.topic}`,
                prompt: q.prompt,
              })
            }
            className="absolute top-2 right-2 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-900 text-amber-300 border border-slate-700 text-xs font-bold flex items-center space-x-1.5 shadow-lg transition-all hover:scale-105"
            title="Click to zoom in full-screen"
          >
            <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
            <span>Magnify (Full Size)</span>
          </button>
        </div>

        {/* Options */}
        {q.options && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            {q.options.map((opt) => {
              const isSelected = userAns === opt.id;
              const isOptionCorrect = opt.id === q.correctAnswer;

              let btnStyle =
                "bg-slate-800/80 border-slate-700 text-slate-200 hover:border-indigo-500/50";
              if (isChecked) {
                if (isOptionCorrect) {
                  btnStyle = "bg-emerald-950/60 border-emerald-500 text-emerald-200";
                } else if (isSelected && !isOptionCorrect) {
                  btnStyle = "bg-rose-950/60 border-rose-500 text-rose-200";
                }
              } else if (isSelected) {
                btnStyle =
                  "bg-indigo-600/30 border-indigo-500 text-white ring-1 ring-indigo-500";
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(q.id, opt.id)}
                  disabled={isChecked}
                  className={`p-3 rounded-xl border text-left text-xs flex items-center space-x-2.5 transition-all ${btnStyle}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 font-bold font-mono flex items-center justify-center shrink-0">
                    {opt.id}
                  </span>
                  <span className="font-medium flex-1">{opt.text}</span>
                  {isChecked && isOptionCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  )}
                  {isChecked && isSelected && !isOptionCorrect && (
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Action Button & Feedback */}
        {!isChecked ? (
          <button
            onClick={() => handleSubmitQuestion(q.id)}
            disabled={!userAns}
            className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition-all"
          >
            Check Answer
          </button>
        ) : (
          <div className="space-y-3 pt-2">
            <div
              className={`p-3 rounded-xl border text-xs flex items-center space-x-2 ${
                isCorrect
                  ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300"
                  : "bg-rose-950/40 border-rose-500/40 text-rose-300"
              }`}
            >
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>Brilliant!</strong> Correct answer:{" "}
                    <strong>{q.correctAnswer}</strong>
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>
                    <strong>Incorrect.</strong> Correct answer is{" "}
                    <strong>{q.correctAnswer}</strong>.
                  </span>
                </>
              )}
            </div>

            {/* Trap Warning & Solution */}
            {q.trapAlert && (
              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200">
                <strong>DOE Trap Alert: </strong>
                {q.trapAlert}
              </div>
            )}

            <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/60 text-xs text-slate-300 leading-relaxed space-y-1">
              <strong className="text-white block">Step-by-Step Explanation:</strong>
              <p>{q.explanation}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Daily Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-950/50 via-slate-900 to-indigo-950/60 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
              {formattedToday}
            </span>
            <span className="text-xs text-slate-400">• Question of the Day</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Daily 5-Minute Brain Sprint
          </h2>
          <p className="text-xs text-slate-300">
            Solve 1 ELA reading question and 1 Math question every day to maintain your competitive edge.
          </p>
        </div>

        {/* Streak Counter & Share Button */}
        <div className="flex items-center space-x-3 shrink-0">
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center">
            <div className="flex items-center justify-center space-x-1 text-amber-400">
              <Flame className="w-5 h-5 fill-amber-400 animate-bounce" />
              <span className="text-xl font-extrabold font-mono">{streak}</span>
            </div>
            <span className="text-[10px] font-bold uppercase text-slate-400">
              Day Streak
            </span>
          </div>

          <button
            onClick={handleShareSquad}
            className="px-3.5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs font-bold flex items-center space-x-1.5 transition-all shadow-md"
            title="Share score with your study squad"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Text Squad</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Two Questions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderQuestionBox(dailyEla, "Part 1: Daily ELA")}
        {renderQuestionBox(dailyMath, "Part 2: Daily Math")}
      </div>

      {/* Full-Screen Image Lightbox & Magnifier */}
      {zoomingImage && (
        <ImageZoomModal
          isOpen={!!zoomingImage}
          onClose={() => setZoomingImage(null)}
          imageSrc={zoomingImage.src}
          title={zoomingImage.title}
          prompt={zoomingImage.prompt}
        />
      )}
    </div>
  );
}
