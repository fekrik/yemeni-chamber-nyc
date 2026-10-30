"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Timer,
  Flag,
  HelpCircle,
  FileText,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Grid,
  Eye,
  EyeOff,
  Strikethrough,
  Highlighter,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Lightbulb,
  ZoomIn,
  ZoomOut,
  Send,
  Delete,
  Delete as Backspace,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Exam, Question, Passage } from "@/types/shsat";
import FormulaSheetModal from "./FormulaSheetModal";
import ScoreReportModal from "./ScoreReportModal";
import ImageZoomModal from "./ImageZoomModal";
import CrossDeviceSyncModal from "./CrossDeviceSyncModal";
import { ambientSound } from "@/lib/audioAmbience";
import {
  getExamSession,
  saveExamSession,
  clearExamSession,
} from "@/lib/shsatStorage";

interface ExamSimulatorProps {
  exam: Exam;
  questions: Question[];
  passages: Passage[];
  mode: "full_sim" | "tutor";
  onExit: () => void;
  targetSchoolId?: string;
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

export default function ExamSimulator({
  exam,
  questions,
  passages,
  mode,
  onExit,
  targetSchoolId = "brooklyn_tech",
}: ExamSimulatorProps) {
  // Current question index in this test
  const [currentIndex, setCurrentIndex] = useState(0);

  // User answers map: questionId -> answer string
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Struck-through options map: questionId -> Set of options
  const [struckOptions, setStruckOptions] = useState<Record<string, string[]>>({});

  // Flagged questions set
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});

  // Timer state (180 minutes in seconds = 10,800)
  const [timeRemaining, setTimeRemaining] = useState(exam.timeLimitMinutes * 60);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isTimerHidden, setIsTimerHidden] = useState(false);

  // Tools toggle state
  const [strikeThroughActive, setStrikeThroughActive] = useState(false);
  const [highlighterActive, setHighlighterActive] = useState(false);
  const [formulaModalOpen, setFormulaModalOpen] = useState(false);
  const [paletteModalOpen, setPaletteModalOpen] = useState(false);
  const [scoreReportOpen, setScoreReportOpen] = useState(false);

  // Tutor mode progressive hints state: questionId -> current revealed hint level (0 = none, 1 = concept, 2 = strategy, 3 = walkthrough)
  const [revealedHints, setRevealedHints] = useState<Record<string, number>>({});
  const [checkedAnswers, setCheckedAnswers] = useState<Record<string, boolean>>({});

  // Font size multiplier for passage (1 = base, 1.15 = large, 1.3 = xlarge)
  const [passageFontSize, setPassageFontSize] = useState<"sm" | "base" | "lg">("base");

  // Mobile segmented view state for ELA (passage vs question)
  const [mobileTab, setMobileTab] = useState<"passage" | "question">("question");

  // Pause modal state
  const [pauseModalOpen, setPauseModalOpen] = useState(false);
  const [zoomModalOpen, setZoomModalOpen] = useState(false);
  const [syncModalOpen, setSyncModalOpen] = useState(false);

  // Test day ambient sound state
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    return () => {
      ambientSound.stop();
    };
  }, []);

  const toggleAudio = () => {
    if (isAudioActive) {
      ambientSound.stop();
      setIsAudioActive(false);
    } else {
      const ok = ambientSound.start();
      setIsAudioActive(ok);
    }
  };

  // Initial restoration flag to prevent overwriting saved progress on mount
  const isRestoredRef = useRef(false);

  // Restore saved session from localStorage on mount
  useEffect(() => {
    if (isRestoredRef.current) return;
    const saved = getExamSession(exam.id);
    if (saved) {
      if (saved.answers) setAnswers(saved.answers);
      if (saved.flaggedQuestions) setFlaggedQuestions(saved.flaggedQuestions);
      if (saved.struckOptions) setStruckOptions(saved.struckOptions);
      if (saved.revealedHints) setRevealedHints(saved.revealedHints);
      if (saved.checkedAnswers) setCheckedAnswers(saved.checkedAnswers);
      if (typeof saved.currentIndex === "number" && saved.currentIndex < questions.length) {
        setCurrentIndex(saved.currentIndex);
      }
      if (typeof saved.timeRemaining === "number" && saved.timeRemaining > 0) {
        setTimeRemaining(saved.timeRemaining);
      }
    }
    isRestoredRef.current = true;
  }, [exam.id, questions.length]);

  // Auto-save progress whenever answers, flags, hints, or positions change
  useEffect(() => {
    if (!isRestoredRef.current) return;
    saveExamSession({
      examId: exam.id,
      mode,
      currentIndex,
      answers,
      flaggedQuestions,
      struckOptions,
      revealedHints,
      checkedAnswers,
      timeRemaining,
      answeredCount: Object.keys(answers).length,
      totalQuestions: questions.length,
      updatedAt: Date.now(),
    });
  }, [
    exam.id,
    mode,
    currentIndex,
    answers,
    flaggedQuestions,
    struckOptions,
    revealedHints,
    checkedAnswers,
    timeRemaining,
    questions.length,
  ]);

  // Keypad buffer for text entry items
  const [keypadInput, setKeypadInput] = useState("");

  const currentQ = questions[currentIndex] || questions[0];

  // Associated passage for ELA
  const currentPassage = useMemo(() => {
    if (!currentQ || currentQ.section !== "ela" || !currentQ.passageId) return null;
    return passages.find((p) => p.id === currentQ.passageId) || null;
  }, [currentQ, passages]);

  // Timer countdown hook
  useEffect(() => {
    if (mode !== "full_sim" || isTimerPaused) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setScoreReportOpen(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [mode, isTimerPaused]);

  // Format timer string
  const formattedTime = useMemo(() => {
    const hours = Math.floor(timeRemaining / 3600);
    const mins = Math.floor((timeRemaining % 3600) / 60);
    const secs = timeRemaining % 60;
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }, [timeRemaining]);

  // Sync keypad input on question change
  useEffect(() => {
    if (currentQ) {
      setKeypadInput(answers[currentQ.id] || "");
    }
  }, [currentIndex, currentQ, answers]);

  // Handle selecting an option
  const handleSelectOption = (optId: string) => {
    if (strikeThroughActive) {
      // Toggle strike-through for this option
      setStruckOptions((prev) => {
        const list = prev[currentQ.id] || [];
        const exists = list.includes(optId);
        return {
          ...prev,
          [currentQ.id]: exists ? list.filter((x) => x !== optId) : [...list, optId],
        };
      });
      return;
    }

    // Normal selection
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optId,
    }));
  };

  // Handle Keypad button press
  const handleKeypadPress = (val: string) => {
    if (val === "BACKSPACE") {
      setKeypadInput((prev) => prev.slice(0, -1));
      setAnswers((prev) => ({
        ...prev,
        [currentQ.id]: keypadInput.slice(0, -1),
      }));
    } else if (val === "CLEAR") {
      setKeypadInput("");
      setAnswers((prev) => ({
        ...prev,
        [currentQ.id]: "",
      }));
    } else {
      const next = keypadInput + val;
      setKeypadInput(next);
      setAnswers((prev) => ({
        ...prev,
        [currentQ.id]: next,
      }));
    }
  };

  // Toggle flag
  const toggleFlag = () => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id],
    }));
  };

  // Tutor mode check answer
  const handleCheckAnswer = () => {
    setCheckedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: true,
    }));

    // If incorrect, record in Mistake Notebook
    const userAns = answers[currentQ.id] || "";
    const isCorrect = checkAnswerMatch(userAns, currentQ.correctAnswer);

    if (!isCorrect && userAns) {
      try {
        const saved = JSON.parse(localStorage.getItem("shsat_mistakes") || "[]");
        if (!saved.some((m: any) => m.questionId === currentQ.id)) {
          saved.push({
            questionId: currentQ.id,
            examId: currentQ.examId,
            section: currentQ.section,
            topic: currentQ.topic,
            prompt: currentQ.prompt,
            imageSrc: currentQ.imageSrc,
            correctAnswer: currentQ.correctAnswer,
            userAnswer: userAns,
            timestamp: Date.now(),
          });
          localStorage.setItem("shsat_mistakes", JSON.stringify(saved));
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Progressive Socratic hint reveal
  const handleRevealNextHint = () => {
    const currentLvl = revealedHints[currentQ.id] || 0;
    if (currentLvl < 3) {
      setRevealedHints((prev) => ({
        ...prev,
        [currentQ.id]: currentLvl + 1,
      }));
    }
  };

  // Calculate scores
  const scoreStats = useMemo(() => {
    let elaRaw = 0;
    let mathRaw = 0;
    let elaTotal = 0;
    let mathTotal = 0;

    questions.forEach((q) => {
      const ans = (answers[q.id] || "").trim().toUpperCase();
      const correct = q.correctAnswer.trim().toUpperCase();
      const isMatch = ans === correct;

      if (q.section === "ela") {
        elaTotal++;
        if (isMatch) elaRaw++;
      } else {
        mathTotal++;
        if (isMatch) mathRaw++;
      }
    });

    return {
      elaRaw,
      mathRaw,
      elaTotal,
      mathTotal,
      totalAnswered: Object.keys(answers).filter((k) => answers[k]).length,
    };
  }, [questions, answers]);

  const currentStruck = struckOptions[currentQ?.id] || [];
  const currentAnswer = answers[currentQ?.id] || "";
  const isChecked = checkedAnswers[currentQ?.id] || false;
  const isCorrect = checkAnswerMatch(currentAnswer, currentQ?.correctAnswer);
  const currentHintLevel = revealedHints[currentQ?.id] || 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col select-none">
      {/* Test Runner Top Header */}
      <header className="sticky top-0 z-40 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md px-3 sm:px-6 py-2.5 sm:py-3">
        <div className="max-w-7xl mx-auto space-y-2 md:space-y-0 md:flex md:items-center md:justify-between md:gap-2">
          {/* Row 1 on Mobile: Pause, Center Timer, Submit */}
          <div className="flex items-center justify-between w-full md:w-auto md:space-x-3">
            <button
              onClick={() => {
                setIsTimerPaused(true);
                setPauseModalOpen(true);
              }}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-xs text-amber-300 font-bold flex items-center space-x-1.5 transition-all shadow-sm"
              title="Pause and save progress"
            >
              <Pause className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Pause & Save</span>
              <span className="xs:hidden">Pause</span>
            </button>

            {/* Title on medium+ screens */}
            <div className="hidden lg:block">
              <h2 className="text-sm font-bold text-white truncate max-w-[180px] xl:max-w-xs">
                {exam.title}
              </h2>
              <span className="text-[10px] text-amber-400 font-mono">
                {mode === "full_sim" ? "Official CAT Mode" : "Guided Tutor Mode"}
              </span>
            </div>

            {/* Mobile Center Timer */}
            <div className="flex items-center space-x-1.5 bg-slate-800/90 border border-slate-700 px-2.5 py-1 sm:py-1.5 rounded-xl">
              <Timer
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                  timeRemaining < 600 ? "text-rose-400 animate-pulse" : "text-amber-400"
                }`}
              />
              {!isTimerHidden ? (
                <span
                  className={`font-mono text-xs sm:text-sm font-bold tracking-wider ${
                    timeRemaining < 600 ? "text-rose-400" : "text-slate-200"
                  }`}
                >
                  {formattedTime}
                </span>
              ) : (
                <span className="font-mono text-xs text-slate-400">Hidden</span>
              )}
              <button
                onClick={() => setIsTimerHidden(!isTimerHidden)}
                className="text-slate-400 hover:text-slate-200 p-0.5"
                title="Toggle timer visibility"
              >
                {isTimerHidden ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
              </button>
            </div>

            {/* Mobile Submit Button */}
            <button
              onClick={() => setScoreReportOpen(true)}
              className="md:hidden px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 transition-all"
            >
              {mode === "full_sim" ? "Finish" : "Score"}
            </button>
          </div>

          {/* Row 2 on Mobile / Right side on Desktop: Tool belt & Section Switcher */}
          <div className="flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pt-1 md:pt-0">
            {/* Section Switcher */}
            <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700/80 text-xs shrink-0">
              <button
                onClick={() => {
                  const firstElaIdx = questions.findIndex((q) => q.section === "ela");
                  if (firstElaIdx >= 0) setCurrentIndex(firstElaIdx);
                }}
                className={`px-2.5 sm:px-3 py-1 rounded-md font-medium text-[11px] sm:text-xs transition-colors ${
                  currentQ.section === "ela"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ELA
              </button>
              <button
                onClick={() => {
                  const firstMathIdx = questions.findIndex((q) => q.section === "math");
                  if (firstMathIdx >= 0) setCurrentIndex(firstMathIdx);
                }}
                className={`px-2.5 sm:px-3 py-1 rounded-md font-medium text-[11px] sm:text-xs transition-colors ${
                  currentQ.section === "math"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Math
              </button>
            </div>

            {/* Strike-Through Tool */}
            <button
              onClick={() => setStrikeThroughActive(!strikeThroughActive)}
              className={`p-1.5 sm:p-2 rounded-lg border text-xs font-semibold flex items-center space-x-1 transition-all shrink-0 ${
                strikeThroughActive
                  ? "bg-rose-500/20 text-rose-300 border-rose-500/50 shadow-sm"
                  : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
              }`}
              title="Strike-Through Elimination Tool"
            >
              <Strikethrough className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400" />
              <span className="text-[11px]">POE</span>
            </button>

            {/* Formula Reference */}
            <button
              onClick={() => setFormulaModalOpen(true)}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center space-x-1 transition-colors shrink-0"
              title="Official NYC SHSAT Math Formulas Sheet"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400" />
              <span className="hidden sm:inline text-[11px]">Formulas</span>
            </button>

            {/* Test Room Ambient Audio */}
            <button
              onClick={toggleAudio}
              className={`p-1.5 sm:p-2 rounded-lg border text-xs font-semibold flex items-center space-x-1 transition-all shrink-0 ${
                isAudioActive
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm ring-1 ring-emerald-500"
                  : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
              }`}
              title="Ambient Test Hall Sound (Gentle classroom audio for test-day mental conditioning)"
            >
              {isAudioActive ? (
                <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
              )}
              <span className="hidden xl:inline text-[11px]">Room Sound</span>
            </button>

            {/* Flag for Review */}
            <button
              onClick={toggleFlag}
              className={`p-1.5 sm:p-2 rounded-lg border text-xs font-semibold flex items-center space-x-1 transition-all shrink-0 ${
                flaggedQuestions[currentQ.id]
                  ? "bg-amber-500/20 text-amber-300 border-amber-500/50"
                  : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
              }`}
              title="Flag question for later review"
            >
              <Flag
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                  flaggedQuestions[currentQ.id] ? "text-amber-400 fill-amber-400" : "text-slate-400"
                }`}
              />
              <span className="hidden sm:inline text-[11px]">Flag</span>
            </button>

            {/* Question Palette Grid */}
            <button
              onClick={() => setPaletteModalOpen(true)}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center space-x-1 transition-colors shrink-0"
              title="Question Navigator Palette (1-100)"
            >
              <Grid className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
              <span className="font-mono text-[11px] sm:text-xs">{currentIndex + 1}/100</span>
            </button>

            {/* Finish & Grade on Desktop */}
            <button
              onClick={() => setScoreReportOpen(true)}
              className="hidden md:inline-flex px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 transition-all shrink-0"
            >
              {mode === "full_sim" ? "Submit Exam" : "View Score"}
            </button>
          </div>
        </div>
      </header>

      {/* Main Test Content Grid */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-6 overflow-hidden">
        {/* Mobile Segmented Switcher for ELA Passage vs Question */}
        {currentQ.section === "ela" && currentPassage && (
          <div className="lg:hidden flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 shrink-0">
            <button
              onClick={() => setMobileTab("passage")}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                mobileTab === "passage"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Passage {currentPassage.passageNumber}</span>
            </button>
            <button
              onClick={() => setMobileTab("question")}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                mobileTab === "question"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Question #{currentQ.questionNumber}</span>
            </button>
          </div>
        )}

        {/* Left Column: ELA Reading Passage (Only shown in ELA section) */}
        {currentQ.section === "ela" && currentPassage && (
          <div
            className={`lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl flex-col max-h-[calc(100vh-190px)] lg:max-h-[calc(100vh-140px)] shadow-xl overflow-hidden ${
              mobileTab === "passage" ? "flex" : "hidden lg:flex"
            }`}
          >
            {/* Passage Header */}
            <div className="px-5 py-3 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Passage {currentPassage.passageNumber} • {currentPassage.genre}
                </span>
                <h3 className="text-sm font-bold text-white truncate max-w-sm">
                  {currentPassage.title}
                </h3>
                {currentPassage.author && (
                  <p className="text-xs text-slate-400 italic">by {currentPassage.author}</p>
                )}
              </div>

              {/* Font Sizer Controls */}
              <div className="flex items-center space-x-1 bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs">
                <button
                  onClick={() => setPassageFontSize("sm")}
                  className={`px-2 py-0.5 rounded text-xs font-bold ${
                    passageFontSize === "sm" ? "bg-indigo-600 text-white" : "text-slate-400"
                  }`}
                  title="Small text"
                >
                  A-
                </button>
                <button
                  onClick={() => setPassageFontSize("base")}
                  className={`px-2 py-0.5 rounded text-xs font-bold ${
                    passageFontSize === "base" ? "bg-indigo-600 text-white" : "text-slate-400"
                  }`}
                  title="Default text"
                >
                  A
                </button>
                <button
                  onClick={() => setPassageFontSize("lg")}
                  className={`px-2 py-0.5 rounded text-xs font-bold ${
                    passageFontSize === "lg" ? "bg-indigo-600 text-white" : "text-slate-400"
                  }`}
                  title="Large text"
                >
                  A+
                </button>
              </div>
            </div>

            {/* Passage Scroll Area */}
            <div className="p-6 overflow-y-auto space-y-4 leading-relaxed font-serif text-slate-200">
              {currentPassage.intro && (
                <div className="p-3.5 rounded-xl bg-slate-800/80 border-l-4 border-amber-400 text-xs text-slate-300 font-sans italic">
                  {currentPassage.intro}
                </div>
              )}

              {/* If image-based passage (Revising Part A) */}
              {currentPassage.imageSrc ? (
                <div className="bg-white p-2 rounded-xl border border-slate-700">
                  <img
                    src={currentPassage.imageSrc}
                    alt={currentPassage.title}
                    className="w-full object-contain rounded-lg"
                  />
                </div>
              ) : (
                <div
                  className={`space-y-4 ${
                    passageFontSize === "sm"
                      ? "text-xs"
                      : passageFontSize === "lg"
                      ? "text-base"
                      : "text-sm"
                  }`}
                >
                  {currentPassage.text.split("\n\n").map((para, i) => (
                    <p key={i} className="text-justify indent-6 relative">
                      <span className="font-sans text-[11px] text-indigo-400/80 font-bold select-none mr-2">
                        [{i + 1}]
                      </span>
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile "Go to Question" shortcut */}
            <div className="lg:hidden p-3 border-t border-slate-800 bg-slate-900/90 flex justify-end shrink-0">
              <button
                onClick={() => setMobileTab("question")}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md shadow-indigo-600/30"
              >
                <span>Answer Question #{currentQ.questionNumber}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Right / Center Column: Question Card */}
        <div
          className={`${
            currentQ.section === "ela" && currentPassage ? "lg:col-span-6" : "lg:col-span-12 max-w-3xl mx-auto"
          } w-full flex-col space-y-4 max-h-[calc(100vh-190px)] lg:max-h-[calc(100vh-140px)] overflow-y-auto pr-1 ${
            currentQ.section === "ela" && currentPassage && mobileTab === "passage"
              ? "hidden lg:flex"
              : "flex"
          }`}
        >
          {/* Quick Mobile button to jump back to Passage */}
          {currentPassage && (
            <button
              onClick={() => setMobileTab("passage")}
              className="lg:hidden py-1.5 px-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold flex items-center justify-between transition-colors shrink-0"
            >
              <span className="flex items-center space-x-1.5 truncate">
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Passage: {currentPassage.title}</span>
              </span>
              <span className="text-[11px] font-bold text-indigo-400 shrink-0 ml-2">Re-read 📖</span>
            </button>
          )}

          {/* Question Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col space-y-4">
            {/* Question Subheader */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/30">
                  Question {currentQ.questionNumber} of 100
                </span>
                <span className="text-xs text-slate-400">• {currentQ.topic}</span>
              </div>
              <span
                className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded border ${
                  currentQ.difficulty === "Easy"
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                    : currentQ.difficulty === "Medium"
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                    : "bg-rose-500/20 text-rose-300 border-rose-500/30"
                }`}
              >
                {currentQ.difficulty}
              </span>
            </div>

            {/* Crisp Readable Question Prompt */}
            {currentQ.prompt && 
             !currentQ.prompt.startsWith("Practice Form") && 
             !currentQ.prompt.includes("which statement best evaluates") && 
             !currentQ.prompt.includes("application problem.") && (
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <span className="text-[10px] uppercase font-extrabold text-amber-400 tracking-wider block mb-1">
                  Question Prompt
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-100 leading-relaxed">
                  {currentQ.prompt}
                </p>
              </div>
            )}

            {/* High-Resolution Authentic Question Image with Zoom */}
            <div className="relative bg-white rounded-xl p-3 border border-slate-700/80 shadow-inner overflow-hidden group">
              <img
                src={currentQ.imageSrc}
                alt={`Question ${currentQ.questionNumber}`}
                className="w-full object-contain max-h-[380px]"
              />
              <button
                onClick={() => setZoomModalOpen(true)}
                className="absolute top-2 right-2 px-2.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-900 text-amber-300 border border-slate-700 text-xs font-bold flex items-center space-x-1 shadow-md transition-all hover:scale-105"
                title="Click to view diagram or passage in full-screen zoom"
              >
                <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                <span>Zoom Diagram</span>
              </button>
            </div>

            {/* Strike-Through Instruction Hint */}
            {strikeThroughActive && (
              <div className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-800/40 text-[11px] text-rose-300 flex items-center justify-between">
                <span>
                  <strong>Elimination Mode Active:</strong> Click any choice to strike it through. Click again to un-strike.
                </span>
                <button
                  onClick={() => setStrikeThroughActive(false)}
                  className="font-bold underline ml-2 hover:text-white"
                >
                  Done
                </button>
              </div>
            )}

            {/* Answer Options Selection */}
            {currentQ.options && currentQ.options.length > 0 ? (
              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Select your response:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentQ.options.slice(0, 4).map((opt) => {
                    const isStruck = currentStruck.includes(opt.id);
                    const isSelected = currentAnswer === opt.id;
                    const isCorrectChoice = opt.id === currentQ.correctAnswer;
                    const isEven = (currentQ.questionNumber % 2 === 0);
                    const displayLetter = isEven
                      ? (opt.id === "A" ? "E" : opt.id === "B" ? "F" : opt.id === "C" ? "G" : opt.id === "D" ? "H" : opt.id)
                      : opt.id;
                    const isGeneric = !opt.text || 
                      opt.text.startsWith("Choice ") || 
                      opt.text.includes("cultural traditions") || 
                      opt.text.includes("Calculation result") || 
                      opt.text.includes("foundational background") ||
                      opt.text.includes("Solution option");
                    const displayText = isGeneric ? `Choice ${displayLetter}` : opt.text;

                    let borderClass = "border-slate-800 bg-slate-800/50 hover:bg-slate-800";
                    if (isSelected) {
                      borderClass = "border-indigo-500 bg-indigo-950/40 text-white";
                    }
                    if (isChecked && mode === "tutor") {
                      if (isCorrectChoice) {
                        borderClass = "border-emerald-500 bg-emerald-950/50 text-emerald-200";
                      } else if (isSelected && !isCorrectChoice) {
                        borderClass = "border-rose-500 bg-rose-950/50 text-rose-200";
                      }
                    }

                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleSelectOption(opt.id)}
                        className={`p-3 rounded-xl border flex items-center space-x-3 cursor-pointer transition-all ${borderClass} ${
                          isStruck ? "opacity-40" : ""
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                            isSelected
                              ? "bg-indigo-600 text-white"
                              : "bg-slate-700 text-slate-300"
                          } ${isStruck ? "line-through text-rose-400" : ""}`}
                        >
                          {displayLetter}
                        </div>
                        <span
                          className={`text-xs font-medium leading-relaxed ${
                            isStruck ? "line-through text-slate-500" : "text-slate-200"
                          }`}
                        >
                          {displayText}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Virtual Keypad for Numeric / Algebraic Text Entry */
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Virtual Keypad Entry:
                  </p>
                  <span className="text-[11px] text-amber-400 font-mono">
                    Type or tap below
                  </span>
                </div>

                {/* Display Screen */}
                <div className="bg-slate-950 border-2 border-indigo-500/60 rounded-xl p-3 flex items-center justify-between">
                  <span className="font-mono text-lg font-bold text-white tracking-wider">
                    {keypadInput || <span className="text-slate-600 italic">Enter your answer...</span>}
                  </span>
                  {keypadInput && (
                    <button
                      onClick={() => handleKeypadPress("CLEAR")}
                      className="text-xs text-rose-400 hover:text-rose-300 font-semibold"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Keypad Grid */}
                <div className="grid grid-cols-5 gap-1.5 p-2 bg-slate-950/60 rounded-xl border border-slate-800">
                  {["1", "2", "3", "+", "-"].map((k) => (
                    <button
                      key={k}
                      onClick={() => handleKeypadPress(k)}
                      className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 font-mono text-sm font-bold text-white transition-colors"
                    >
                      {k}
                    </button>
                  ))}
                  {["4", "5", "6", "n", "x"].map((k) => (
                    <button
                      key={k}
                      onClick={() => handleKeypadPress(k)}
                      className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 font-mono text-sm font-bold text-white transition-colors"
                    >
                      {k}
                    </button>
                  ))}
                  {["7", "8", "9", ".", "/"].map((k) => (
                    <button
                      key={k}
                      onClick={() => handleKeypadPress(k)}
                      className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 font-mono text-sm font-bold text-white transition-colors"
                    >
                      {k}
                    </button>
                  ))}
                  {["0", "(", ")", "π", "BACKSPACE"].map((k) => (
                    <button
                      key={k}
                      onClick={() => handleKeypadPress(k)}
                      className={`p-2.5 rounded-lg font-mono text-sm font-bold transition-colors ${
                        k === "BACKSPACE"
                          ? "bg-rose-900/40 text-rose-300 hover:bg-rose-800/60"
                          : "bg-slate-800 hover:bg-slate-700 text-white"
                      }`}
                    >
                      {k === "BACKSPACE" ? "⌫" : k}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Row inside Question Card: Tutor Action Buttons */}
            {mode === "tutor" && (
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={handleRevealNextHint}
                  disabled={currentHintLevel >= 3}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 text-xs font-semibold flex items-center space-x-1.5 transition-colors disabled:opacity-50"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>
                    {currentHintLevel === 0
                      ? "Get Socratic Hint 1"
                      : currentHintLevel === 1
                      ? "Get Strategy Hint 2"
                      : currentHintLevel === 2
                      ? "Get Walkthrough Hint 3"
                      : "All Hints Revealed"}
                  </span>
                </button>

                <button
                  onClick={handleCheckAnswer}
                  disabled={!currentAnswer}
                  className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all disabled:opacity-40"
                >
                  Check Answer
                </button>
              </div>
            )}
          </div>

          {/* Socratic Hints Card (Tutor Mode) */}
          {mode === "tutor" && currentHintLevel > 0 && (
            <div className="bg-amber-950/20 border border-amber-500/30 rounded-2xl p-4 space-y-2.5 animate-in fade-in duration-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-2">
                <Lightbulb className="w-4 h-4" />
                <span>Progressive Coaching Hints ({currentHintLevel}/3)</span>
              </h4>

              {currentQ.hints.slice(0, currentHintLevel).map((hint, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/20 text-xs text-slate-200 leading-relaxed"
                >
                  <span className="font-bold text-amber-400 mr-1.5">
                    {idx === 0 ? "Level 1 (Concept):" : idx === 1 ? "Level 2 (Strategy):" : "Level 3 (Setup):"}
                  </span>
                  {hint}
                </div>
              ))}
            </div>
          )}

          {/* Solution & Trap Alert Drawer (Appears after Check Answer in Tutor Mode) */}
          {mode === "tutor" && isChecked && (() => {
            const isEven = (currentQ.questionNumber % 2 === 0);
            const correctDisplayLetter = isEven && currentQ.options && currentQ.options.length > 0
              ? (currentQ.correctAnswer === "A" ? "E" : currentQ.correctAnswer === "B" ? "F" : currentQ.correctAnswer === "C" ? "G" : currentQ.correctAnswer === "D" ? "H" : currentQ.correctAnswer)
              : currentQ.correctAnswer;

            return (
              <div
                className={`rounded-2xl p-5 border shadow-xl space-y-4 animate-in fade-in duration-200 ${
                  isCorrect
                    ? "bg-emerald-950/30 border-emerald-500/40"
                    : "bg-rose-950/30 border-rose-500/40"
                }`}
              >
                <div className="flex items-center space-x-2">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="font-bold text-emerald-300 text-sm">
                        Spot On! Correct Answer: {correctDisplayLetter}
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-400" />
                      <span className="font-bold text-rose-300 text-sm">
                        Incorrect. Correct Answer: {correctDisplayLetter}
                      </span>
                    </>
                  )}
                </div>

                {/* Trap Alert */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs space-y-1">
                  <div className="flex items-center space-x-1.5 text-amber-400 font-bold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Official Test Maker Trap Alert</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{currentQ.trapAlert}</p>
                </div>

                {/* Full Explanation */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-xs space-y-1.5">
                  <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
                    Step-by-Step Breakdown:
                  </span>
                  <p className="text-slate-300 leading-relaxed font-sans">{currentQ.explanation}</p>
                </div>
              </div>
            );
          })()}
        </div>
      </main>

      {/* Persistent Bottom Control Bar */}
      <footer className="sticky bottom-0 z-30 bg-slate-900 border-t border-slate-800 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors disabled:opacity-40"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-400 hidden sm:inline">
              Answered: <strong className="text-white">{scoreStats.totalAnswered}</strong>/100
            </span>
          </div>

          <button
            onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
            disabled={currentIndex === questions.length - 1}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-indigo-600/20 transition-all disabled:opacity-40"
          >
            <span>Next Question</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {/* Formula Sheet Modal */}
      <FormulaSheetModal
        isOpen={formulaModalOpen}
        onClose={() => setFormulaModalOpen(false)}
      />

      {/* Question Palette Drawer Modal */}
      {paletteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
              <h3 className="font-bold text-white text-sm flex items-center space-x-2">
                <Grid className="w-4 h-4 text-cyan-400" />
                <span>Question Navigator (1–100)</span>
              </h3>
              <button
                onClick={() => setPaletteModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              {/* ELA Section */}
              <div>
                <p className="text-xs font-bold uppercase text-indigo-400 tracking-wider mb-2">
                  Part 1: English Language Arts (Questions 1–50)
                </p>
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-1.5">
                  {questions.slice(0, 50).map((q, idx) => {
                    const isAns = !!answers[q.id];
                    const isFlg = !!flaggedQuestions[q.id];
                    const isCurr = currentIndex === idx;

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          setCurrentIndex(idx);
                          setPaletteModalOpen(false);
                        }}
                        className={`h-8 rounded-lg text-xs font-mono font-bold relative transition-all ${
                          isCurr
                            ? "ring-2 ring-amber-400 bg-indigo-600 text-white"
                            : isAns
                            ? "bg-slate-700 text-white"
                            : "bg-slate-800/80 text-slate-400 hover:bg-slate-800"
                        }`}
                      >
                        {idx + 1}
                        {isFlg && (
                          <div className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-amber-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Math Section */}
              <div>
                <p className="text-xs font-bold uppercase text-emerald-400 tracking-wider mb-2">
                  Part 2: Mathematics (Questions 51–100)
                </p>
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-1.5">
                  {questions.slice(50, 100).map((q, idx) => {
                    const actualIdx = idx + 50;
                    const isAns = !!answers[q.id];
                    const isFlg = !!flaggedQuestions[q.id];
                    const isCurr = currentIndex === actualIdx;

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          setCurrentIndex(actualIdx);
                          setPaletteModalOpen(false);
                        }}
                        className={`h-8 rounded-lg text-xs font-mono font-bold relative transition-all ${
                          isCurr
                            ? "ring-2 ring-amber-400 bg-emerald-600 text-white"
                            : isAns
                            ? "bg-slate-700 text-white"
                            : "bg-slate-800/80 text-slate-400 hover:bg-slate-800"
                        }`}
                      >
                        {actualIdx + 1}
                        {isFlg && (
                          <div className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-amber-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex justify-between items-center text-xs text-slate-400">
              <div className="flex items-center space-x-3">
                <span className="flex items-center space-x-1">
                  <span className="w-3 h-3 rounded bg-slate-700 inline-block" />
                  <span>Answered</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-3 h-3 rounded bg-amber-400 inline-block" />
                  <span>Flagged</span>
                </span>
              </div>
              <button
                onClick={() => setPaletteModalOpen(false)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pause / Resume Modal */}
      {pauseModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-md w-full p-6 text-white shadow-2xl animate-in fade-in zoom-in-95">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto mb-4">
              <Pause className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-center">Test Paused & Saved</h3>
            <p className="text-xs text-slate-300 text-center mt-2 leading-relaxed">
              Your test session has been safely saved on this device. You can close your browser or resume whenever you're ready.
            </p>

            <div className="my-5 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Questions Answered:</span>
                <span className="font-bold text-white">
                  {Object.keys(answers).filter((k) => answers[k]).length} of {questions.length}
                </span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Current Position:</span>
                <span className="font-bold text-indigo-400">Question #{currentIndex + 1}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Time Remaining:</span>
                <span className="font-bold text-amber-400 font-mono">{formattedTime}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsTimerPaused(false);
                  setPauseModalOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-lg shadow-indigo-600/30"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Resume Test Now</span>
              </button>

              <button
                onClick={() => setSyncModalOpen(true)}
                className="w-full py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold transition-colors flex items-center justify-center space-x-2"
              >
                <span>📱 Sync &amp; Continue on Phone / Other Device</span>
              </button>

              <button
                onClick={() => {
                  setPauseModalOpen(false);
                  onExit();
                }}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
              >
                Save &amp; Exit to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Score Report Modal */}
      <ScoreReportModal
        isOpen={scoreReportOpen}
        onClose={() => setScoreReportOpen(false)}
        examTitle={exam.title}
        elaRaw={scoreStats.elaRaw}
        mathRaw={scoreStats.mathRaw}
        elaTotal={scoreStats.elaTotal}
        mathTotal={scoreStats.mathTotal}
        timeSpentSeconds={exam.timeLimitMinutes * 60 - timeRemaining}
        targetSchoolId={targetSchoolId}
        onReviewMissed={() => {
          setScoreReportOpen(false);
          // Switch to first unanswered or wrong question
          setCurrentIndex(0);
        }}
        onRetakeExam={() => {
          clearExamSession(exam.id);
          setScoreReportOpen(false);
          setAnswers({});
          setStruckOptions({});
          setFlaggedQuestions({});
          setTimeRemaining(exam.timeLimitMinutes * 60);
          setCurrentIndex(0);
        }}
      />

      {/* Image Lightbox Magnifier */}
      <ImageZoomModal
        isOpen={zoomModalOpen}
        onClose={() => setZoomModalOpen(false)}
        imageSrc={currentQ.imageSrc}
        title={`Question ${currentQ.questionNumber} Diagram & Detail`}
        prompt={currentQ.prompt}
      />

      {/* Cross-Device Cloud Sync Modal */}
      <CrossDeviceSyncModal
        isOpen={syncModalOpen}
        onClose={() => setSyncModalOpen(false)}
      />
    </div>
  );
}
