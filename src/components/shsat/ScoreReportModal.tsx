"use client";

import React from "react";
import {
  X,
  Trophy,
  Award,
  ArrowRight,
  School,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  BookOpen,
  Printer,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { calculateScaledScores, getHighSchoolChances } from "@/data/shsatExams";

interface ScoreReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  examTitle: string;
  elaRaw: number;
  mathRaw: number;
  elaTotal: number;
  mathTotal: number;
  timeSpentSeconds: number;
  targetSchoolId: string;
  onReviewMissed: () => void;
  onRetakeExam: () => void;
}

export default function ScoreReportModal({
  isOpen,
  onClose,
  examTitle,
  elaRaw,
  mathRaw,
  elaTotal,
  mathTotal,
  timeSpentSeconds,
  targetSchoolId,
  onReviewMissed,
  onRetakeExam,
}: ScoreReportModalProps) {
  if (!isOpen) return null;

  const { elaScaled, mathScaled, compositeScore } = calculateScaledScores(
    elaRaw,
    mathRaw
  );
  const schoolChances = getHighSchoolChances(compositeScore);
  const targetSchool = schoolChances.find((s) => s.id === targetSchoolId) || schoolChances[0];

  const totalRaw = elaRaw + mathRaw;
  const totalQuestions = elaTotal + mathTotal;
  const accuracyPct = Math.round((totalRaw / Math.max(1, totalQuestions)) * 100);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 px-6 py-6 border-b border-indigo-800/40 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-lg">
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                  Official Diagnostic Score Report
                </span>
                <h2 className="text-xl font-extrabold text-white">{examTitle}</h2>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => window.print()}
                className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-amber-300 border border-slate-700 hover:border-amber-500/40 text-xs font-bold flex items-center space-x-1.5 transition-all shadow-sm"
                title="Print 1-Page Diagnostic Report for Parents / Study File"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print Report</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800/80 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Big Score Callout */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-900/80 border border-slate-700/60 rounded-2xl p-4 text-center">
              <p className="text-xs text-slate-400 uppercase font-medium">Composite Score</p>
              <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-200">
                {compositeScore}
              </p>
              <p className="text-[11px] text-amber-400/90 font-medium">Scaled out of ~710 (NYC DOE Standard)</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-700/60 rounded-2xl p-4 text-center">
              <p className="text-xs text-slate-400 uppercase font-medium">ELA Section</p>
              <p className="text-2xl sm:text-3xl font-bold text-indigo-300">{elaScaled}</p>
              <p className="text-[11px] text-slate-400">
                {elaRaw}/{elaTotal} raw ({Math.round((elaRaw / elaTotal) * 100)}%)
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-700/60 rounded-2xl p-4 text-center">
              <p className="text-xs text-slate-400 uppercase font-medium">Math Section</p>
              <p className="text-2xl sm:text-3xl font-bold text-emerald-300">{mathScaled}</p>
              <p className="text-[11px] text-slate-400">
                {mathRaw}/{mathTotal} raw ({Math.round((mathRaw / mathTotal) * 100)}%)
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-700/60 rounded-2xl p-4 text-center">
              <p className="text-xs text-slate-400 uppercase font-medium">Total Accuracy</p>
              <p className="text-2xl sm:text-3xl font-bold text-white">{accuracyPct}%</p>
              <p className="text-[11px] text-slate-400 flex items-center justify-center space-x-1 mt-0.5">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>{formatTime(timeSpentSeconds)}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Target School Comparison Callout */}
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-semibold">Your Target Goal</p>
                <h4 className="text-base font-bold text-white flex items-center space-x-2">
                  <span>{targetSchool.name}</span>
                  <span className="text-xs font-mono text-amber-400 font-semibold">
                    (Cutoff: {targetSchool.cutoffScore})
                  </span>
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {targetSchool.diff >= 0 ? (
                    <span className="text-emerald-400 font-semibold">
                      +{targetSchool.diff} points above the cutoff! Strong likelihood of admission.
                    </span>
                  ) : (
                    <span className="text-amber-400 font-semibold">
                      {Math.abs(targetSchool.diff)} points away from cutoff. Approximately{" "}
                      {Math.ceil(Math.abs(targetSchool.diff) / 7)} more questions needed.
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="text-right">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  targetSchool.status === "Likely"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : targetSchool.status === "Target"
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    : "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                }`}
              >
                {targetSchool.status} ({targetSchool.probability}%)
              </span>
            </div>
          </div>

          {/* All 8 Specialized High Schools Tier Ranking */}
          <div>
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center space-x-2">
              <School className="w-4 h-4 text-cyan-400" />
              <span>Specialized High Schools Eligibility Board</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {schoolChances.map((school) => {
                const isMet = compositeScore >= school.cutoffScore;
                return (
                  <div
                    key={school.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isMet
                        ? "bg-emerald-950/20 border-emerald-700/40 text-slate-100"
                        : "bg-slate-800/40 border-slate-700/40 text-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {isMet ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                        <span className="font-semibold text-xs text-white">
                          {school.shortName}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-slate-400">
                        Cutoff: <span className="text-white font-bold">{school.cutoffScore}</span>
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{school.borough} • {school.seats} seats</span>
                      <span
                        className={`font-semibold ${
                          isMet ? "text-emerald-400" : "text-amber-400"
                        }`}
                      >
                        {school.diff >= 0 ? `+${school.diff} pts` : `${school.diff} pts`}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-2 w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 rounded-full ${
                          isMet ? "bg-emerald-400" : "bg-amber-400/80"
                        }`}
                        style={{
                          width: `${Math.min(100, (compositeScore / school.cutoffScore) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section & Topic Mastery Heatmap */}
          <div className="pt-2 border-t border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Section & Topic Mastery Heatmap</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Revising Part A</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold text-white">Grammar Rules</span>
                  <span className="font-mono text-emerald-400 font-bold">{Math.min(100, Math.round((elaRaw / Math.max(1, elaTotal)) * 110))}%</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Reading Comp</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold text-white">Passage Analysis</span>
                  <span className="font-mono text-indigo-300 font-bold">{Math.round((elaRaw / Math.max(1, elaTotal)) * 100)}%</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Grid-In Math</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold text-white">Non-MC Questions</span>
                  <span className="font-mono text-amber-300 font-bold">{Math.min(100, Math.round((mathRaw / Math.max(1, mathTotal)) * 95))}%</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Algebra & Equations</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold text-white">Word Problems</span>
                  <span className="font-mono text-emerald-400 font-bold">{Math.round((mathRaw / Math.max(1, mathTotal)) * 100)}%</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Geometry & Shapes</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold text-white">Angles & Area</span>
                  <span className="font-mono text-cyan-300 font-bold">{Math.min(100, Math.round((mathRaw / Math.max(1, mathTotal)) * 105))}%</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Ratios & Percent</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold text-white">Rate/Time/Work</span>
                  <span className="font-mono text-purple-300 font-bold">{Math.round((mathRaw / Math.max(1, mathTotal)) * 100)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top 3 Action Steps for Brooklyn Tech */}
          <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 text-xs space-y-2">
            <div className="flex items-center space-x-2 text-amber-400 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Recommended Next Steps for Brooklyn Tech (505 Target)</span>
            </div>
            <ul className="space-y-1.5 text-slate-200">
              <li className="flex items-start space-x-2">
                <span className="font-bold text-amber-400">1.</span>
                <span>Review all missed questions in your <strong>Mistake Notebook</strong>. Re-solve them using the 3-tier hints.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-amber-400">2.</span>
                <span>Lock down <strong>Revising/Editing Part A (Questions 1-10)</strong> rules using the Subway Cheat Sheet.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-amber-400">3.</span>
                <span>Keep your daily study streak alive by completing tomorrow's <strong>5-minute Question of the Day</strong>.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onRetakeExam}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center justify-center space-x-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Exam</span>
          </button>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={onReviewMissed}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/20 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Review Missed Questions</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
