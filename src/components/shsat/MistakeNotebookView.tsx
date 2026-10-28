"use client";

import React, { useState, useEffect } from "react";
import {
  BookMarked,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Trash2,
  Sparkles,
  ArrowRight,
  Filter,
} from "lucide-react";
import { QUESTIONS } from "@/data/shsatExams";
import { Question } from "@/types/shsat";

interface MistakeItem {
  questionId: string;
  examId: string;
  section: "ela" | "math";
  topic: string;
  prompt: string;
  imageSrc: string;
  correctAnswer: string;
  userAnswer: string;
  timestamp: number;
}

interface MistakeNotebookViewProps {
  onRetryQuestion: (q: Question) => void;
}

export default function MistakeNotebookView({ onRetryQuestion }: MistakeNotebookViewProps) {
  const [mistakes, setMistakes] = useState<MistakeItem[]>([]);
  const [filterSection, setFilterSection] = useState<"all" | "math" | "ela">("all");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("shsat_mistakes") || "[]");
      setMistakes(saved);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear your Mistake Notebook?")) {
      localStorage.removeItem("shsat_mistakes");
      setMistakes([]);
    }
  };

  const handleRemoveSingle = (qId: string) => {
    const updated = mistakes.filter((m) => m.questionId !== qId);
    setMistakes(updated);
    localStorage.setItem("shsat_mistakes", JSON.stringify(updated));
  };

  const filtered = mistakes.filter((m) =>
    filterSection === "all" ? true : m.section === filterSection
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <BookMarked className="w-5 h-5 text-rose-400" />
              <span>Smart Mistake Notebook</span>
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30">
              {mistakes.length} logged
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Research shows reviewing mistakes is the #1 highest-yield way to gain 40+ points on the SHSAT.
          </p>
        </div>

        {/* Filter and Clear Buttons */}
        <div className="flex items-center space-x-2 self-start sm:self-auto">
          <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setFilterSection("all")}
              className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                filterSection === "all"
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All ({mistakes.length})
            </button>
            <button
              onClick={() => setFilterSection("math")}
              className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                filterSection === "math"
                  ? "bg-emerald-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Math ({mistakes.filter((m) => m.section === "math").length})
            </button>
            <button
              onClick={() => setFilterSection("ela")}
              className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                filterSection === "ela"
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ELA ({mistakes.filter((m) => m.section === "ela").length})
            </button>
          </div>

          {mistakes.length > 0 && (
            <button
              onClick={handleClearAll}
              className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
              title="Clear all mistakes"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Empty State */}
      {mistakes.length === 0 ? (
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-12 text-center max-w-xl mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-base font-bold text-white">Your Mistake Notebook is Clean!</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Whenever you miss a question in Practice Tests or Tutor Mode, it is automatically
            captured here so you and your study partners can retry until 100% mastered.
          </p>
        </div>
      ) : (
        /* Mistake Cards List */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item) => {
            const originalQ = QUESTIONS.find((q) => q.id === item.questionId);

            return (
              <div
                key={item.questionId}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      {item.section.toUpperCase()} • {item.topic}
                    </span>
                    <button
                      onClick={() => handleRemoveSingle(item.questionId)}
                      className="text-slate-500 hover:text-slate-300 text-xs p-1"
                      title="Remove from notebook"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Question Image Preview */}
                  <div className="bg-white p-2 rounded-xl border border-slate-700 my-2 overflow-hidden max-h-48 flex items-center justify-center">
                    <img
                      src={item.imageSrc}
                      alt={item.prompt}
                      className="max-h-44 object-contain"
                    />
                  </div>

                  {/* Trap Analysis */}
                  {originalQ && (
                    <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs space-y-1 mt-3">
                      <div className="flex items-center space-x-1.5 text-amber-400 font-bold text-[11px]">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>Why this was missed:</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {originalQ.trapAlert}
                      </p>
                    </div>
                  )}

                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                    <span>
                      Your Answer: <strong className="text-rose-400">{item.userAnswer}</strong>
                    </span>
                    <span>
                      Correct: <strong className="text-emerald-400">{item.correctAnswer}</strong>
                    </span>
                  </div>
                </div>

                {/* Retry Button */}
                {originalQ && (
                  <button
                    onClick={() => onRetryQuestion(originalQ)}
                    className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-md shadow-indigo-600/20 transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retry Question with Socratic Hints</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
