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
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
} from "lucide-react";
import { QUESTIONS, PASSAGES } from "@/data/shsatExams";
import { Question, Passage } from "@/types/shsat";
import { getDailyProgress, saveDailyProgress } from "@/lib/shsatStorage";
import ImageZoomModal from "@/components/shsat/ImageZoomModal";

const STREAK_KEY = "shsat_daily_streak_count";
const LAST_DATE_KEY = "shsat_daily_streak_date";

function getLocalDateStr(d = new Date()): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDisplayDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dateObj = new Date(y, m - 1, d);
  return dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

function checkAnswerMatch(userAns?: string, correctAns?: string): boolean {
  if (!userAns || !correctAns) return false;
  const cleanUser = userAns.trim().toUpperCase().replace(/\s+/g, "");
  const cleanCorrect = correctAns.trim().toUpperCase().replace(/\s+/g, "");
  if (cleanUser === cleanCorrect) return true;
  const numUser = parseFloat(cleanUser);
  const numCorrect = parseFloat(cleanCorrect);
  if (!isNaN(numUser) && !isNaN(numCorrect) && Math.abs(numUser - numCorrect) < 0.001) {
    return true;
  }
  return false;
}

export default function DailyChallengeView() {
  const localTodayStr = getLocalDateStr();
  const [activeDateStr, setActiveDateStr] = useState<string>(localTodayStr);
  const [sprintIndex, setSprintIndex] = useState<number>(0);
  const [streak, setStreak] = useState(1);
  const [copied, setCopied] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [zoomingImage, setZoomingImage] = useState<{
    src: string;
    title: string;
    prompt?: string;
  } | null>(null);
  const [expandedPassageId, setExpandedPassageId] = useState<string | null>(null);

  const formattedActiveDate = formatDisplayDate(activeDateStr);
  const isToday = activeDateStr === localTodayStr;

  // Key used to store/retrieve progress for this specific date and sprint
  const currentProgressKey =
    sprintIndex === 0 ? activeDateStr : `${activeDateStr}_sprint_${sprintIndex}`;

  // Deterministic seed based on active date + sprint index
  const dateSeed =
    activeDateStr
      .split("-")
      .reduce((acc, part) => acc + parseInt(part, 10), 0) +
    sprintIndex * 17;

  // Filter questions: prioritize high-yield Revising & Editing Part A & grammar for ELA
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

  // Pick deterministic questions that smoothly cycle when sprintIndex advances
  const dailyEla = elaQuestions[(dateSeed + sprintIndex * 3) % Math.max(1, elaQuestions.length)];
  const dailyMath =
    mathQuestions[((dateSeed + sprintIndex * 7) * 5) % Math.max(1, mathQuestions.length)];

  // Restore saved answers and streak whenever the active date or sprint changes
  useEffect(() => {
    try {
      const savedStreak = localStorage.getItem(STREAK_KEY);
      if (savedStreak) {
        setStreak(parseInt(savedStreak, 10) || 1);
      }

      const savedProgress = getDailyProgress(currentProgressKey);
      if (savedProgress) {
        setSelectedAnswers(savedProgress.selectedAnswers || {});
        setSubmitted(savedProgress.submitted || {});
      } else {
        setSelectedAnswers({});
        setSubmitted({});
      }
    } catch {
      // ignore
    }
  }, [currentProgressKey]);

  const handleSelect = (qId: string, optId: string) => {
    if (submitted[qId]) return;
    const nextAnswers = { ...selectedAnswers, [qId]: optId };
    setSelectedAnswers(nextAnswers);
    saveDailyProgress(currentProgressKey, nextAnswers, submitted);
  };

  const handleSubmitQuestion = (qId: string) => {
    setSubmitted((prev) => {
      const next = { ...prev, [qId]: true };
      saveDailyProgress(currentProgressKey, selectedAnswers, next);

      // If both completed in today's official sprint 1, advance streak
      if (sprintIndex === 0 && isToday) {
        if (next[dailyEla.id] && next[dailyMath.id]) {
          try {
            const lastDate = localStorage.getItem(LAST_DATE_KEY);
            if (lastDate !== localTodayStr) {
              const nextStreak = streak + 1;
              setStreak(nextStreak);
              localStorage.setItem(STREAK_KEY, nextStreak.toString());
              localStorage.setItem(LAST_DATE_KEY, localTodayStr);
            }
          } catch {
            // ignore
          }
        }
      }
      return next;
    });
  };

  const handleNextSprint = () => {
    setSprintIndex((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevSprint = () => {
    if (sprintIndex > 0) {
      setSprintIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleResetSprint = () => {
    setSelectedAnswers({});
    setSubmitted({});
    saveDailyProgress(currentProgressKey, {}, {});
  };

  const changeDateByDays = (deltaDays: number) => {
    const [y, m, d] = activeDateStr.split("-").map(Number);
    const target = new Date(y, m - 1, d);
    target.setDate(target.getDate() + deltaDays);
    setActiveDateStr(getLocalDateStr(target));
    setSprintIndex(0);
  };

  const isBothSubmitted = submitted[dailyEla.id] && submitted[dailyMath.id];
  const isElaRight = checkAnswerMatch(selectedAnswers[dailyEla.id], dailyEla.correctAnswer);
  const isMathRight = checkAnswerMatch(selectedAnswers[dailyMath.id], dailyMath.correctAnswer);
  const currentSprintScore = (isElaRight ? 1 : 0) + (isMathRight ? 1 : 0);

  const handleShareSquad = () => {
    const shareText = `🔥 NYC SHSAT Daily Sprint (${formattedActiveDate} - Sprint #${sprintIndex + 1}):\nI scored ${currentSprintScore}/2 on SHSAT Ace!\nCurrent Streak: ${streak} Days in a row.\nCan you beat my score? 👉 https://shsat-ace.onrender.com`;

    if (navigator.share) {
      navigator
        .share({
          title: "SHSAT Ace Daily Challenge",
          text: shareText,
          url: "https://shsat-ace.onrender.com",
        })
        .catch(() => {
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
    const isCorrect = checkAnswerMatch(userAns, q.correctAnswer);
    const passage = q.passageId ? PASSAGES.find((p) => p.id === q.passageId) : null;

    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4 flex flex-col justify-between">
        <div className="space-y-4">
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

          {/* Crisp Readable Question Prompt */}
          {q.prompt &&
            !q.prompt.startsWith("Practice Form") &&
            !q.prompt.includes("which statement best evaluates") &&
            !q.prompt.includes("application problem.") && (
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
                  {expandedPassageId === passage.id
                    ? "Hide Text ▲"
                    : "Read Full Passage (Clean Text) ▼"}
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
              {q.options.slice(0, 4).map((opt) => {
                const isSelected = userAns === opt.id;
                const isOptionCorrect = opt.id === q.correctAnswer;
                const isEven = q.questionNumber % 2 === 0;
                const displayLetter = isEven
                  ? opt.id === "A"
                    ? "E"
                    : opt.id === "B"
                    ? "F"
                    : opt.id === "C"
                    ? "G"
                    : opt.id === "D"
                    ? "H"
                    : opt.id
                  : opt.id;
                const isGeneric =
                  !opt.text ||
                  opt.text.startsWith("Choice ") ||
                  opt.text.includes("cultural traditions") ||
                  opt.text.includes("Calculation result") ||
                  opt.text.includes("foundational background") ||
                  opt.text.includes("Solution option");
                const displayText = isGeneric ? `Choice ${displayLetter}` : opt.text;

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
                      {displayLetter}
                    </span>
                    <span className="font-medium flex-1">{displayText}</span>
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
        </div>

        {/* Action Button & Feedback */}
        <div className="pt-3">
          {!isChecked ? (
            <button
              onClick={() => handleSubmitQuestion(q.id)}
              disabled={!userAns}
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition-all"
            >
              Check Answer
            </button>
          ) : (
            <div className="space-y-3 pt-1">
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
                      <strong>
                        {q.questionNumber % 2 === 0 && q.options && q.options.length > 0
                          ? q.correctAnswer === "A"
                            ? "E"
                            : q.correctAnswer === "B"
                            ? "F"
                            : q.correctAnswer === "C"
                            ? "G"
                            : q.correctAnswer === "D"
                            ? "H"
                            : q.correctAnswer
                          : q.correctAnswer}
                      </strong>
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>
                      <strong>Incorrect.</strong> Correct answer is{" "}
                      <strong>
                        {q.questionNumber % 2 === 0 && q.options && q.options.length > 0
                          ? q.correctAnswer === "A"
                            ? "E"
                            : q.correctAnswer === "B"
                            ? "F"
                            : q.correctAnswer === "C"
                            ? "G"
                            : q.correctAnswer === "D"
                            ? "H"
                            : q.correctAnswer
                          : q.correctAnswer}
                      </strong>
                      .
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
      </div>
    );
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {/* Daily Banner & Date Controls */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-950/50 via-slate-900 to-indigo-950/60 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-2">
          {/* Date Selector Navigation */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-slate-900/80 border border-slate-700 rounded-xl p-0.5">
              <button
                onClick={() => changeDateByDays(-1)}
                className="p-1.5 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors"
                title="Previous Day's Challenge"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="px-2.5 text-xs font-bold text-amber-300 whitespace-nowrap">
                {formattedActiveDate}
              </span>
              <button
                onClick={() => changeDateByDays(1)}
                className="p-1.5 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors"
                title="Next Day's Challenge"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {isToday ? (
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full">
                Today
              </span>
            ) : (
              <button
                onClick={() => {
                  setActiveDateStr(localTodayStr);
                  setSprintIndex(0);
                }}
                className="text-[10px] font-bold underline text-indigo-400 hover:text-indigo-300"
              >
                Return to Today
              </button>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
            <span>Daily 5-Minute Brain Sprint</span>
            <span className="text-sm font-semibold px-2 py-0.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Set #{sprintIndex + 1}
            </span>
          </h2>
          <p className="text-xs text-slate-300">
            Solve 1 ELA reading question and 1 Math question every day. Once complete, you can advance to the next sprint anytime!
          </p>
        </div>

        {/* Streak Counter & Share Button */}
        <div className="flex items-center space-x-3 shrink-0">
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center min-w-[76px]">
            <div className="flex items-center justify-center space-x-1 text-amber-400">
              <Flame className="w-5 h-5 fill-amber-400 animate-bounce" />
              <span className="text-xl font-extrabold font-mono">{streak}</span>
            </div>
            <span className="text-[10px] font-bold uppercase text-slate-400">Day Streak</span>
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

      {/* Sprint Stepper / Rapid Progression Bar */}
      <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
            Sprint Sets:
          </span>
          {[0, 1, 2, 3, 4].map((idx) => {
            const isCur = sprintIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSprintIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                  isCur
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-1 ring-amber-400/40"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                }`}
              >
                <span>Sprint #{idx + 1}</span>
                {idx === 0 && (
                  <span className="text-[9px] px-1 bg-amber-500/20 text-amber-300 rounded font-semibold">
                    Daily
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center space-x-2">
          {sprintIndex > 0 && (
            <button
              onClick={handlePrevSprint}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center space-x-1 transition-all"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          )}

          <button
            onClick={handleNextSprint}
            className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 flex items-center space-x-1.5 transition-all hover:scale-105"
            title="Advance to next fresh question pair"
          >
            <span>Next Sprint #{sprintIndex + 2}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Completion Celebration Card (when both questions submitted) */}
      {isBothSubmitted && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-indigo-950/60 border border-emerald-500/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base flex items-center space-x-2">
                <span>Sprint #{sprintIndex + 1} Complete!</span>
                <span className="text-amber-400 font-mono font-bold">
                  Score: {currentSprintScore}/2
                </span>
              </h3>
              <p className="text-xs text-slate-300">
                {currentSprintScore === 2
                  ? "Flawless! Keep your momentum going with the next challenge."
                  : "Great effort! Review the step-by-step explanations below, then try the next pair."}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={handleResetSprint}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center space-x-1.5 transition-all"
              title="Reset answers to try this sprint again"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>Retry</span>
            </button>
            <button
              onClick={handleNextSprint}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/30 flex items-center space-x-1.5 transition-all hover:scale-105"
            >
              <span>Practice Next Sprint #{sprintIndex + 2}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Two Questions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderQuestionBox(dailyEla, "Part 1: Daily ELA")}
        {renderQuestionBox(dailyMath, "Part 2: Daily Math")}
      </div>

      {/* Bottom Sticky Action Bar: Never Stuck! */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between shadow-xl">
        <div className="flex items-center space-x-2 text-xs text-slate-400">
          <span>Sprint Set #{sprintIndex + 1} of unlimited</span>
          <span>•</span>
          <button
            onClick={handleResetSprint}
            className="text-amber-400 hover:underline flex items-center space-x-1 font-semibold"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset This Set</span>
          </button>
        </div>

        <button
          onClick={handleNextSprint}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 flex items-center space-x-1.5 transition-all hover:scale-105"
        >
          <span>Practice Next Sprint (Sprint #{sprintIndex + 2})</span>
          <ArrowRight className="w-4 h-4" />
        </button>
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
