"use client";

import React, { useState } from "react";
import {
  School,
  Calculator,
  Award,
  CheckCircle2,
  XCircle,
  Sparkles,
  Info,
  TrendingUp,
} from "lucide-react";
import { SPECIALIZED_HIGH_SCHOOLS, calculateScaledScores, getHighSchoolChances } from "@/data/shsatExams";

export default function CutoffPredictorView() {
  const [elaRaw, setElaRaw] = useState(42);
  const [mathRaw, setMathRaw] = useState(44);

  const { elaScaled, mathScaled, compositeScore } = calculateScaledScores(
    elaRaw,
    mathRaw
  );
  const chances = getHighSchoolChances(compositeScore);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-2">
          <School className="w-6 h-6 text-cyan-400" />
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            NYC Specialized High Schools Cutoff Predictor
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Simulate how changes in your ELA and Math raw scores affect your composite scaled score (out of 800) and school eligibility.
        </p>
      </div>

      {/* Interactive Sliders Board */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sliders Control Panel */}
        <div className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center space-x-2">
            <Calculator className="w-4 h-4 text-indigo-400" />
            <span>Interactive Raw Score Simulator</span>
          </h3>

          {/* ELA Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-indigo-300">ELA Raw Score (out of 50):</span>
              <span className="font-mono font-bold text-white text-sm bg-slate-800 px-2.5 py-0.5 rounded-lg border border-slate-700">
                {elaRaw} / 50 ({Math.round((elaRaw / 50) * 100)}%)
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={50}
              value={elaRaw}
              onChange={(e) => setElaRaw(parseInt(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0 (100 scaled)</span>
              <span>25 (278 scaled)</span>
              <span>45+ (Super-bonus)</span>
              <span>50 (400 scaled)</span>
            </div>
          </div>

          {/* Math Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-emerald-300">Math Raw Score (out of 50):</span>
              <span className="font-mono font-bold text-white text-sm bg-slate-800 px-2.5 py-0.5 rounded-lg border border-slate-700">
                {mathRaw} / 50 ({Math.round((mathRaw / 50) * 100)}%)
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={50}
              value={mathRaw}
              onChange={(e) => setMathRaw(parseInt(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0 (100 scaled)</span>
              <span>25 (278 scaled)</span>
              <span>45+ (Super-bonus)</span>
              <span>50 (400 scaled)</span>
            </div>
          </div>

          {/* Secret Scoring Insight Box */}
          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs space-y-1.5 text-slate-300">
            <div className="flex items-center space-x-1.5 text-amber-400 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>SHSAT Curve Secret: Section Super-Bonus</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-300">
              The NYC DOE scoring algorithm rewards <strong>mastery in one subject</strong>.
              A score of 48 in Math and 38 in ELA will score significantly HIGHER than a balanced 43/43,
              due to non-linear upper-tier scaling. Maximize your strongest section!
            </p>
          </div>
        </div>

        {/* Projected Score Output Display */}
        <div className="md:col-span-5 bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 border border-indigo-800/50 rounded-3xl p-6 shadow-2xl flex flex-col justify-between text-center space-y-6">
          <div>
            <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
              Projected Composite Score
            </span>
            <div className="my-4">
              <span className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-200 font-mono">
                {compositeScore}
              </span>
              <p className="text-xs text-slate-400 mt-1">out of 800 scaled</p>
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-indigo-400 uppercase font-bold">ELA Scaled</span>
                <p className="text-xl font-bold text-white font-mono mt-0.5">{elaScaled}</p>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-emerald-400 uppercase font-bold">Math Scaled</span>
                <p className="text-xl font-bold text-white font-mono mt-0.5">{mathScaled}</p>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400">
            Qualifies for:{" "}
            <strong className="text-emerald-400">
              {chances.filter((s) => s.diff >= 0).length} of 8
            </strong>{" "}
            Specialized High Schools
          </div>
        </div>
      </div>

      {/* High Schools Eligibility Tier Board */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase text-slate-300 tracking-wider flex items-center space-x-2">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Real-Time School Cutoff Status</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chances.map((school) => {
            const isQualified = school.diff >= 0;

            return (
              <div
                key={school.id}
                className={`p-5 rounded-2xl border transition-all ${
                  isQualified
                    ? "bg-slate-900 border-emerald-500/40 shadow-lg shadow-emerald-950/20"
                    : "bg-slate-900/60 border-slate-800 opacity-90"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {isQualified ? (
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-500 border border-slate-700 flex items-center justify-center shrink-0">
                        <XCircle className="w-5 h-5" />
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-white">{school.name}</h4>
                      <p className="text-xs text-slate-400">{school.specialty}</p>
                    </div>
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase ${
                      school.status === "Likely"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : school.status === "Target"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        : "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                    }`}
                  >
                    {school.status}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs pt-3 border-t border-slate-800/80">
                  <span className="text-slate-400">
                    Historic Cutoff: <strong className="text-white">{school.cutoffScore}</strong>
                  </span>
                  <span
                    className={`font-mono font-bold ${
                      isQualified ? "text-emerald-400" : "text-amber-400"
                    }`}
                  >
                    {school.diff >= 0 ? `+${school.diff} points` : `${school.diff} points`}
                  </span>
                </div>

                <div className="mt-2 w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 rounded-full ${
                      isQualified ? "bg-emerald-400" : "bg-amber-400"
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
    </div>
  );
}
