"use client";

import React, { useState, useEffect } from "react";
import {
  School,
  Calculator,
  Award,
  CheckCircle2,
  XCircle,
  Sparkles,
  Info,
  TrendingUp,
  Zap,
  Target,
  Sliders,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";
import {
  SPECIALIZED_HIGH_SCHOOLS,
  calculateScaledScores,
  getHighSchoolChances,
  AdaptiveProfile,
} from "@/data/shsatExams";
import { getCalculatorState, setCalculatorState } from "@/lib/shsatStorage";

export default function CutoffPredictorView() {
  // Defaults calibrated for Brooklyn Tech target (36 ELA + 37 Math ≈ 517 scaled)
  const [elaRaw, setElaRaw] = useState(36);
  const [mathRaw, setMathRaw] = useState(37);
  const [adaptiveProfile, setAdaptiveProfile] =
    useState<AdaptiveProfile>("standard");

  useEffect(() => {
    const saved = getCalculatorState();
    if (saved) {
      if (typeof saved.elaRaw === "number") setElaRaw(saved.elaRaw);
      if (typeof saved.mathRaw === "number") setMathRaw(saved.mathRaw);
      if (saved.adaptiveProfile) setAdaptiveProfile(saved.adaptiveProfile);
    }
  }, []);

  const handleElaChange = (val: number) => {
    setElaRaw(val);
    setCalculatorState({ elaRaw: val, mathRaw, adaptiveProfile });
  };

  const handleMathChange = (val: number) => {
    setMathRaw(val);
    setCalculatorState({ elaRaw, mathRaw: val, adaptiveProfile });
  };

  const handleProfileChange = (profile: AdaptiveProfile) => {
    setAdaptiveProfile(profile);
    setCalculatorState({ elaRaw, mathRaw, adaptiveProfile: profile });
  };

  const {
    elaScaled,
    mathScaled,
    compositeScore,
    adaptiveRange,
    percentile,
    brooklynTechDiff,
  } = calculateScaledScores(elaRaw, mathRaw, adaptiveProfile);

  const chances = getHighSchoolChances(compositeScore);
  const brooklynTechQualified = brooklynTechDiff >= 0;

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-2">
          <School className="w-6 h-6 text-cyan-400" />
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            NYC Specialized High Schools Cutoff & Adaptive Score Predictor
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Calibrated to official NYC Department of Education non-linear psychometric scoring and Computerized Adaptive Testing (CAT) Item Response Theory.
        </p>
      </div>

      {/* Target Focus Banner: Brooklyn Tech */}
      <div
        className={`p-4 sm:p-5 rounded-3xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl ${
          brooklynTechQualified
            ? "bg-gradient-to-r from-emerald-950/60 via-slate-900 to-indigo-950/40 border-emerald-500/40"
            : "bg-gradient-to-r from-amber-950/50 via-slate-900 to-slate-950 border-amber-500/40"
        }`}
      >
        <div className="flex items-center space-x-3.5">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg border ${
              brooklynTechQualified
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                : "bg-amber-500/20 text-amber-400 border-amber-500/30"
            }`}
          >
            {brooklynTechQualified ? (
              <CheckCircle2 className="w-7 h-7" />
            ) : (
              <Target className="w-6 h-6" />
            )}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                Primary Goal
              </span>
              <span className="text-xs text-slate-400">• Cutoff: 505</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Brooklyn Technical High School
            </h3>
            <p className="text-xs text-slate-300">
              {brooklynTechQualified ? (
                <span className="text-emerald-400 font-semibold">
                  ✓ Current projection ({compositeScore}) meets and exceeds Brooklyn Tech cutoff by +{brooklynTechDiff} points!
                </span>
              ) : (
                <span className="text-amber-300 font-semibold">
                  Needs {Math.abs(brooklynTechDiff)} more scaled points (~{Math.ceil(Math.abs(brooklynTechDiff) / 4.5)} raw questions) to reach 505.
                </span>
              )}
            </p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <div className="text-xs text-slate-400">Citywide Percentile</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white font-mono">
            Top {100 - percentile}%
          </div>
          <div className="text-[11px] text-slate-400">~{percentile}th Percentile</div>
        </div>
      </div>

      {/* Interactive Controls Board */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: Sliders & Adaptive Mode */}
        <div className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center space-x-2">
              <Calculator className="w-4 h-4 text-indigo-400" />
              <span>Raw Score Calibration</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Total Raw: <strong>{elaRaw + mathRaw}</strong> / 100 ({Math.round(((elaRaw + mathRaw) / 100) * 100)}%)
            </span>
          </div>

          {/* ELA Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-indigo-300">ELA Raw Score (out of 50):</span>
              <span className="font-mono font-bold text-white text-sm bg-slate-800 px-2.5 py-0.5 rounded-lg border border-slate-700">
                {elaRaw} / 50 ({Math.round((elaRaw / 50) * 100)}%) → <strong className="text-indigo-400">{elaScaled} scaled</strong>
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={50}
              value={elaRaw}
              onChange={(e) => handleElaChange(parseInt(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0 (100)</span>
              <span>25 (195)</span>
              <span>35 (254 - B-Tech)</span>
              <span>40 (280 - Stuy)</span>
              <span>50 (355)</span>
            </div>
          </div>

          {/* Math Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-emerald-300">Math Raw Score (out of 50):</span>
              <span className="font-mono font-bold text-white text-sm bg-slate-800 px-2.5 py-0.5 rounded-lg border border-slate-700">
                {mathRaw} / 50 ({Math.round((mathRaw / 50) * 100)}%) → <strong className="text-emerald-400">{mathScaled} scaled</strong>
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={50}
              value={mathRaw}
              onChange={(e) => handleMathChange(parseInt(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0 (100)</span>
              <span>25 (195)</span>
              <span>35 (254 - B-Tech)</span>
              <span>40 (280 - Stuy)</span>
              <span>50 (355)</span>
            </div>
          </div>

          {/* Adaptive CAT Testing Profile Selector */}
          <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Computerized Adaptive Profile (Item Response Theory)</span>
              </label>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              In computer-adaptive testing, not all questions have equal weight. Getting hard items correct yields a higher ability estimate ($\theta$) than getting easy items.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              <button
                type="button"
                onClick={() => handleProfileChange("standard")}
                className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                  adaptiveProfile === "standard"
                    ? "bg-indigo-600/20 border-indigo-500 text-white shadow-sm ring-1 ring-indigo-500"
                    : "bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white"
                }`}
              >
                <div className="font-bold text-indigo-300">Standard S-Curve</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Median difficulty balance</div>
              </button>

              <button
                type="button"
                onClick={() => handleProfileChange("high_difficulty")}
                className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                  adaptiveProfile === "high_difficulty"
                    ? "bg-emerald-600/20 border-emerald-500 text-white shadow-sm ring-1 ring-emerald-500"
                    : "bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white"
                }`}
              >
                <div className="font-bold text-emerald-300">Hard-Item Mastery ⚡</div>
                <div className="text-[10px] text-slate-400 mt-0.5">+8 to +15 adaptive bonus</div>
              </button>

              <button
                type="button"
                onClick={() => handleProfileChange("careless")}
                className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                  adaptiveProfile === "careless"
                    ? "bg-rose-600/20 border-rose-500 text-white shadow-sm ring-1 ring-rose-500"
                    : "bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white"
                }`}
              >
                <div className="font-bold text-rose-300">Careless Traps ⚠️</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Missed easy questions</div>
              </button>
            </div>
          </div>

          {/* Lopsided Advantage Callout */}
          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs space-y-1.5 text-slate-300">
            <div className="flex items-center space-x-1.5 text-amber-400 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Psychometric Insight: The "Lopsided" Advantage</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-300">
              Due to the convex shape of the DOE non-linear scaling curve, scoring <strong>44 in Math and 30 in ELA</strong> (74 raw) yields <strong>540 scaled</strong>, whereas a balanced <strong>37 Math / 37 ELA</strong> (also 74 raw) yields only <strong>526 scaled</strong>. Excelling in your strongest subject delivers high-yield bonus points!
            </p>
          </div>
        </div>

        {/* Right Column: Composite Score Card */}
        <div className="md:col-span-5 bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 border border-indigo-800/50 rounded-3xl p-6 shadow-2xl flex flex-col justify-between text-center space-y-6">
          <div>
            <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
              Projected Scaled Score
            </span>
            <div className="my-3">
              <span className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-200 font-mono">
                {compositeScore}
              </span>
              <p className="text-xs text-slate-400 mt-1">
                out of ~710 (NYC DOE Standard Scale)
              </p>
            </div>

            {/* Adaptive Confidence Range */}
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-xs text-slate-300">
              <span className="text-slate-400">Adaptive Range:</span>
              <strong className="font-mono text-amber-300">
                {adaptiveRange[0]} – {adaptiveRange[1]}
              </strong>
            </div>

            {/* Section Breakdown Grid */}
            <div className="grid grid-cols-2 gap-3 pt-5 mt-4 border-t border-slate-800">
              <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-indigo-400 uppercase font-bold">ELA Section</span>
                <p className="text-2xl font-bold text-white font-mono mt-0.5">{elaScaled}</p>
                <p className="text-[10px] text-slate-400">{elaRaw}/50 raw (out of ~355)</p>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-emerald-400 uppercase font-bold">Math Section</span>
                <p className="text-2xl font-bold text-white font-mono mt-0.5">{mathScaled}</p>
                <p className="text-[10px] text-slate-400">{mathRaw}/50 raw (out of ~355)</p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
            <span className="text-slate-400">Admissions Probability: </span>
            <strong className={brooklynTechQualified ? "text-emerald-400" : "text-amber-400"}>
              {chances.filter((s) => s.diff >= 0).length} of 8 Specialized High Schools
            </strong>
          </div>
        </div>
      </div>

      {/* School Cutoff Status Cards */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase text-slate-300 tracking-wider flex items-center space-x-2">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Specialized High Schools Eligibility Board</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chances.map((school) => {
            const isQualified = school.diff >= 0;
            const isBrooklynTech = school.id === "brooklyn_tech";

            return (
              <div
                key={school.id}
                className={`p-5 rounded-2xl border transition-all ${
                  isBrooklynTech
                    ? "ring-2 ring-amber-500/50 bg-slate-900"
                    : isQualified
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
                      <div className="flex items-center space-x-1.5">
                        <h4 className="text-sm font-bold text-white">{school.name}</h4>
                        {isBrooklynTech && (
                          <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[9px] font-extrabold uppercase">
                            Target School
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400">{school.specialty}</p>
                    </div>
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase ${
                      school.status === "Likely"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : school.status === "Target"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        : "bg-rose-500/20 text-rose-300 border-rose-500/30"
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
