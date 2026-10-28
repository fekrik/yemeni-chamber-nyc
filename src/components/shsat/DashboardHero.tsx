"use client";

import React from "react";
import {
  Trophy,
  Target,
  Sparkles,
  BookOpen,
  Zap,
  ArrowRight,
  Clock,
  CheckCircle2,
  Award,
  ChevronRight,
} from "lucide-react";
import { Exam, SpecializedHighSchool } from "@/types/shsat";

interface DashboardHeroProps {
  exams: Exam[];
  schools: SpecializedHighSchool[];
  selectedSchoolId: string;
  onSelectSchool: (id: string) => void;
  onStartExam: (examId: string, mode: "full_sim" | "tutor") => void;
  onLaunchDrill: () => void;
}

export default function DashboardHero({
  exams,
  schools,
  selectedSchoolId,
  onSelectSchool,
  onStartExam,
  onLaunchDrill,
}: DashboardHeroProps) {
  const selectedSchool =
    schools.find((s) => s.id === selectedSchoolId) || schools[0];

  return (
    <div className="space-y-8">
      {/* Hero Header Card */}
      <div className="relative rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-900/40 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built for 8th Grade NYC Scholars</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Master the NYC SHSAT with Official CAT Practice & Socratic Coaching
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Practice with authentic NYC Department of Education computer-adaptive tests,
            learn through 3-tier progressive hints, eliminate official traps, and track your
            readiness for Stuyvesant, Bronx Science, and Brooklyn Tech.
          </p>

          {/* Dream School Selector Bar */}
          <div className="mt-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                  Select Your Dream High School
                </span>
                <p className="text-xs text-slate-400">
                  We'll calibrate your target score, pacing milestones, and study recommendations.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs text-slate-400">Target Cutoff:</span>
                <span className="text-sm font-bold text-amber-300 font-mono">
                  {selectedSchool.cutoffScore}+ Scaled
                </span>
              </div>
            </div>

            {/* School Selector Pills */}
            <div className="mt-3 flex flex-wrap gap-2">
              {schools.map((school) => {
                const isSelected = school.id === selectedSchoolId;
                return (
                  <button
                    key={school.id}
                    onClick={() => onSelectSchool(school.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      isSelected
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-400"
                        : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60"
                    }`}
                  >
                    <span>{school.shortName}</span>
                    <span className="text-[10px] opacity-75 font-mono">({school.cutoffScore})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 4 Official Full Practice Tests Grid */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span>Official NYC DOE Practice Tests</span>
            </h2>
            <p className="text-xs text-slate-400">
              100 questions per exam (50 ELA & 50 Math) with authentic passage graphics and diagrams.
            </p>
          </div>

          <button
            onClick={onLaunchDrill}
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center space-x-1.5 transition-colors"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Prefer 10-Min Drills? Click Here</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exams.map((exam, idx) => (
            <div
              key={exam.id}
              className="bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-[11px] font-extrabold uppercase tracking-wider border border-indigo-500/20">
                    Form {String.fromCharCode(65 + idx)} • {exam.year}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>180 Min</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {exam.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                  {exam.description}
                </p>

                <div className="mt-4 flex items-center space-x-4 text-xs text-slate-300">
                  <div className="flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exam.elaCount} ELA Items</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exam.mathCount} Math Items</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onStartExam(exam.id, "full_sim")}
                  className="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center space-x-1.5 shadow-md shadow-indigo-600/20 transition-all"
                >
                  <Target className="w-3.5 h-3.5" />
                  <span>Timed Exam (180m)</span>
                </button>

                <button
                  onClick={() => onStartExam(exam.id, "tutor")}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 hover:border-amber-500/40 text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Tutor Mode</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
