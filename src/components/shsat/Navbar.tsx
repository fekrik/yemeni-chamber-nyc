"use client";

import React from "react";
import {
  GraduationCap,
  Target,
  Zap,
  BookMarked,
  School,
  Lightbulb,
  Award,
} from "lucide-react";

export type NavTab = "dashboard" | "drills" | "notebook" | "cutoffs" | "strategies";

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  targetSchoolName?: string;
  targetCutoff?: number;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  targetSchoolName = "Stuyvesant",
  targetCutoff = 560,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => setActiveTab("dashboard")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-amber-300 bg-clip-text text-transparent">
                  SHSAT Ace
                </span>
                <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded">
                  NYC 8th Grade
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Specialized High Schools Prep Academy
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "dashboard"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Full Practice Tests</span>
            </button>

            <button
              onClick={() => setActiveTab("drills")}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "drills"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Skill Drills</span>
            </button>

            <button
              onClick={() => setActiveTab("notebook")}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "notebook"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <BookMarked className="w-4 h-4 text-rose-400" />
              <span>Mistake Notebook</span>
            </button>

            <button
              onClick={() => setActiveTab("cutoffs")}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "cutoffs"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <School className="w-4 h-4 text-cyan-400" />
              <span>Cutoff Predictor</span>
            </button>

            <button
              onClick={() => setActiveTab("strategies")}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "strategies"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Lightbulb className="w-4 h-4 text-emerald-400" />
              <span>Test Tactics</span>
            </button>
          </nav>

          {/* Target School Badge */}
          <div className="flex items-center space-x-3">
            <div
              onClick={() => setActiveTab("cutoffs")}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 hover:border-amber-500/50 cursor-pointer transition-colors"
              title="Click to view and adjust cutoff target"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <div className="text-xs">
                <span className="text-slate-400">Target: </span>
                <span className="font-semibold text-slate-100">{targetSchoolName}</span>
                <span className="text-amber-400 font-mono ml-1">({targetCutoff}+)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Submenu Bar */}
        <div className="flex md:hidden overflow-x-auto py-2 border-t border-slate-800 space-x-2 no-scrollbar">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              activeTab === "dashboard" ? "bg-indigo-600 text-white" : "text-slate-300 bg-slate-800"
            }`}
          >
            Practice Tests
          </button>
          <button
            onClick={() => setActiveTab("drills")}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              activeTab === "drills" ? "bg-indigo-600 text-white" : "text-slate-300 bg-slate-800"
            }`}
          >
            Skill Drills
          </button>
          <button
            onClick={() => setActiveTab("notebook")}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              activeTab === "notebook" ? "bg-indigo-600 text-white" : "text-slate-300 bg-slate-800"
            }`}
          >
            Mistakes
          </button>
          <button
            onClick={() => setActiveTab("cutoffs")}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              activeTab === "cutoffs" ? "bg-indigo-600 text-white" : "text-slate-300 bg-slate-800"
            }`}
          >
            Cutoffs
          </button>
          <button
            onClick={() => setActiveTab("strategies")}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              activeTab === "strategies" ? "bg-indigo-600 text-white" : "text-slate-300 bg-slate-800"
            }`}
          >
            Tactics
          </button>
        </div>
      </div>
    </header>
  );
}
