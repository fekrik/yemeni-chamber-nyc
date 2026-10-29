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
  Calendar,
  Flame,
  FileDown,
  Smartphone,
} from "lucide-react";

export type NavTab =
  | "dashboard"
  | "roadmap"
  | "daily"
  | "drills"
  | "notebook"
  | "cutoffs"
  | "strategies";

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  targetSchoolName?: string;
  targetCutoff?: number;
  onOpenCheatSheets?: () => void;
  onOpenSync?: () => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  targetSchoolName = "Brooklyn Tech",
  targetCutoff = 505,
  onOpenCheatSheets,
  onOpenSync,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => setActiveTab("dashboard")}
            className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
              </div>
            </div>
            <div className="shrink-0">
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <span className="font-bold text-base sm:text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-amber-300 bg-clip-text text-transparent whitespace-nowrap">
                  SHSAT Ace
                </span>
                <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded whitespace-nowrap">
                  NYC 8th Grade
                </span>
              </div>
              <p className="text-[11px] text-slate-400 whitespace-nowrap hidden md:block">
                Specialized High Schools Prep Academy
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 shrink-0">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center space-x-1.5 px-2.5 xl:px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === "dashboard"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Mock Tests</span>
            </button>

            <button
              onClick={() => setActiveTab("roadmap")}
              className={`flex items-center space-x-1.5 px-2.5 xl:px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === "roadmap"
                  ? "bg-indigo-600 text-white shadow-sm ring-1 ring-amber-400/50"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span><span className="hidden xl:inline">Brooklyn Tech </span>Roadmap</span>
            </button>

            <button
              onClick={() => setActiveTab("daily")}
              className={`flex items-center space-x-1.5 px-2.5 xl:px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === "daily"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
              <span>Daily Sprint</span>
            </button>

            <button
              onClick={() => setActiveTab("drills")}
              className={`flex items-center space-x-1.5 px-2.5 xl:px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === "drills"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Topic Drills</span>
            </button>

            <button
              onClick={() => setActiveTab("notebook")}
              className={`flex items-center space-x-1.5 px-2.5 xl:px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === "notebook"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <BookMarked className="w-3.5 h-3.5 text-rose-400" />
              <span>Mistakes</span>
            </button>

            <button
              onClick={() => setActiveTab("cutoffs")}
              className={`flex items-center space-x-1.5 px-2.5 xl:px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === "cutoffs"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <School className="w-3.5 h-3.5 text-cyan-400" />
              <span>Cutoffs</span>
            </button>

            <button
              onClick={() => setActiveTab("strategies")}
              className={`flex items-center space-x-1.5 px-2.5 xl:px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === "strategies"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tactics</span>
            </button>
          </nav>

          {/* Right Actions: Subway Sheet + Target School Badge */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {onOpenCheatSheets && (
              <button
                onClick={onOpenCheatSheets}
                className="hidden sm:inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 hover:border-amber-500/40 text-xs font-bold transition-all shadow-sm whitespace-nowrap shrink-0"
                title="Print Subway & Advisory Cheat Sheets (Formulas, Grammar, Pacing)"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Cheat Sheets</span>
              </button>
            )}

            {onOpenSync && (
              <button
                onClick={onOpenSync}
                className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold transition-all shadow-sm whitespace-nowrap shrink-0"
                title="Sync and continue practice on your phone or tablet"
              >
                <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
                <span className="hidden sm:inline">Sync</span>
              </button>
            )}

            <div
              onClick={() => setActiveTab("roadmap")}
              className="hidden md:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold cursor-pointer hover:bg-rose-500/20 transition-colors whitespace-nowrap shrink-0"
              title="Official NYC SHSAT: Wednesday, November 18, 2026"
            >
              <Calendar className="w-3.5 h-3.5 text-rose-400" />
              <span>Test: Nov 18</span>
            </div>

            <div
              onClick={() => setActiveTab("cutoffs")}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 hover:border-amber-500/50 cursor-pointer transition-colors whitespace-nowrap shrink-0"
              title="Click to view and adjust cutoff target"
            >
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="text-xs whitespace-nowrap">
                <span className="text-slate-400">Target: </span>
                <span className="font-semibold text-slate-100">{targetSchoolName}</span>
                <span className="text-amber-400 font-mono ml-1">({targetCutoff}+)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Submenu Bar */}
        <div className="flex lg:hidden overflow-x-auto py-2 border-t border-slate-800 space-x-2 no-scrollbar">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              activeTab === "dashboard" ? "bg-indigo-600 text-white" : "text-slate-300 bg-slate-800"
            }`}
          >
            Practice Tests
          </button>
          <button
            onClick={() => setActiveTab("roadmap")}
            className={`px-3 py-1 rounded-md text-xs font-bold whitespace-nowrap ${
              activeTab === "roadmap" ? "bg-indigo-600 text-white" : "text-amber-300 bg-slate-800 border border-amber-500/30"
            }`}
          >
            Brooklyn Tech Roadmap
          </button>
          <button
            onClick={() => setActiveTab("daily")}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap flex items-center space-x-1 ${
              activeTab === "daily" ? "bg-indigo-600 text-white" : "text-slate-300 bg-slate-800"
            }`}
          >
            <Flame className="w-3 h-3 text-orange-400 fill-orange-400" />
            <span>Daily Sprint</span>
          </button>
          <button
            onClick={() => setActiveTab("drills")}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              activeTab === "drills" ? "bg-indigo-600 text-white" : "text-slate-300 bg-slate-800"
            }`}
          >
            Skill Drills
          </button>
          {onOpenSync && (
            <button
              onClick={onOpenSync}
              className="px-3 py-1 rounded-md text-xs font-bold whitespace-nowrap bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center space-x-1"
            >
              <Smartphone className="w-3 h-3" />
              <span>Sync Devices</span>
            </button>
          )}
          {onOpenCheatSheets && (
            <button
              onClick={onOpenCheatSheets}
              className="px-3 py-1 rounded-md text-xs font-bold whitespace-nowrap bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center space-x-1"
            >
              <FileDown className="w-3 h-3" />
              <span>Cheat Sheet</span>
            </button>
          )}
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
