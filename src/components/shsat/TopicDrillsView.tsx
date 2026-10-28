"use client";

import React, { useState } from "react";
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  Variable,
  Shapes,
  Percent,
  Coins,
  Hash,
  FileEdit,
  CheckCheck,
  Search,
} from "lucide-react";
import { TOPIC_DRILLS, QUESTIONS } from "@/data/shsatExams";
import { TopicDrill, Question } from "@/types/shsat";

interface TopicDrillsViewProps {
  onStartCustomDrill: (drillQuestions: Question[], drillTitle: string) => void;
}

export default function TopicDrillsView({ onStartCustomDrill }: TopicDrillsViewProps) {
  const [activeSubject, setActiveSubject] = useState<"all" | "math" | "ela">("all");

  const filteredDrills = TOPIC_DRILLS.filter((d) =>
    activeSubject === "all" ? true : d.subject === activeSubject
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Variable":
        return <Variable className="w-5 h-5 text-indigo-400" />;
      case "Shapes":
        return <Shapes className="w-5 h-5 text-emerald-400" />;
      case "Percent":
        return <Percent className="w-5 h-5 text-cyan-400" />;
      case "Coins":
        return <Coins className="w-5 h-5 text-amber-400" />;
      case "Hash":
        return <Hash className="w-5 h-5 text-purple-400" />;
      case "FileEdit":
        return <FileEdit className="w-5 h-5 text-rose-400" />;
      case "CheckCheck":
        return <CheckCheck className="w-5 h-5 text-emerald-400" />;
      case "Search":
        return <Search className="w-5 h-5 text-cyan-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-indigo-400" />;
    }
  };

  const handleLaunch = (drill: TopicDrill) => {
    // Find matching questions from question bank
    let matches = QUESTIONS.filter((q) => drill.sampleQuestionIds.includes(q.id));
    if (matches.length === 0) {
      matches = QUESTIONS.filter((q) => q.section === drill.subject).slice(0, drill.questionCount);
    }
    onStartCustomDrill(matches, drill.title);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <span>Targeted Skill Drills</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Don't have 3 hours for a full test? Drill specific high-yield weak spots in 10 minutes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs self-start">
          <button
            onClick={() => setActiveSubject("all")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeSubject === "all"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            All Skills ({TOPIC_DRILLS.length})
          </button>
          <button
            onClick={() => setActiveSubject("math")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeSubject === "math"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Math Drills (5)
          </button>
          <button
            onClick={() => setActiveSubject("ela")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeSubject === "ela"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            ELA Drills (4)
          </button>
        </div>
      </div>

      {/* Drill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDrills.map((drill) => (
          <div
            key={drill.id}
            className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
                  {getIcon(drill.icon)}
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {drill.subject.toUpperCase()} • {drill.questionCount} Questions
                </span>
              </div>

              <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                {drill.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {drill.description}
              </p>

              {/* Target Skills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {drill.targetSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleLaunch(drill)}
              className="mt-5 w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-bold flex items-center justify-center space-x-1.5 border border-slate-700 hover:border-indigo-500 transition-all shadow-sm"
            >
              <span>Start Quick Drill</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
