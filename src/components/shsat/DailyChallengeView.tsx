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
} from "lucide-react";
import { QUESTIONS } from "@/data/shsatExams";
import { Question } from "@/types/shsat";

const STREAK_KEY = "shsat_daily_streak_count";
const LAST_DATE_KEY = "shsat_daily_streak_date";

export default function DailyChallengeView() {
  const [streak, setStreak] = useState(1);
  const [copied, setCopied] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>(
    {}
  );
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

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

  const elaQuestions = QUESTIONS.filter(
    (q) => q.section === "ela" && q.options && q.options.length > 0
  );
  const mathQuestions = QUESTIONS.filter(
    (q) => q.section === "math" && q.options && q.options.length > 0
  );

  const dailyEla = elaQuestions[dateSeed % Math.max(1, elaQuestions.length)];
  const dailyMath = mathQuestions[(dateSeed * 7) % Math.max(1, mathQuestions.length)];

  useEffect(() => {
    try {
      const savedStreak = localStorage.getItem(STREAK_KEY);
      const savedDate = localStorage.getItem(LAST_DATE_KEY);

      if (savedStreak) {
        setStreak(parseInt(savedStreak, 10) || 1);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSelect = (qId: string, optId: string) => {
    if (submitted[qId]) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  const handleSubmitQuestion = (qId: string) => {
    setSubmitted((prev) => {
      const next = { ...prev, [qId]: true };

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

        {/* Question High-Res Image */}
        <div className="bg-white rounded-2xl p-3 border border-slate-700/80 shadow-inner">
          <img
            src={q.imageSrc}
            alt="Daily Challenge Question"
            className="w-full object-contain max-h-[300px]"
          />
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
    </div>
  );
}
