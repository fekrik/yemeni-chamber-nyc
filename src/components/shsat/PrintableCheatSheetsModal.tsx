"use client";

import React, { useState } from "react";
import {
  X,
  Printer,
  FileText,
  Clock,
  BookOpen,
  Calculator,
  Award,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

interface PrintableCheatSheetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "math" | "grammar" | "pacing";
}

export default function PrintableCheatSheetsModal({
  isOpen,
  onClose,
  defaultTab = "math",
}: PrintableCheatSheetsModalProps) {
  const [activeTab, setActiveTab] = useState<"math" | "grammar" | "pacing">(
    defaultTab
  );
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header (Hidden on Print) */}
        <div className="print:hidden p-4 sm:p-5 border-b border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-white text-base">
                  NYC SHSAT Subway & Advisory Cheat Sheets
                </h3>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Print-Ready
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Print or download as PDF to study offline on the train or at home.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 self-end sm:self-auto">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center space-x-1.5 shadow-md shadow-indigo-600/30 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print Sheet (PDF)</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher (Hidden on Print) */}
        <div className="print:hidden px-4 sm:px-6 pt-3 border-b border-slate-800 flex space-x-2 bg-slate-950/40">
          <button
            onClick={() => setActiveTab("math")}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === "math"
                ? "border-amber-400 text-amber-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>1. Brooklyn Tech Math Formulas (Top 20)</span>
          </button>

          <button
            onClick={() => setActiveTab("grammar")}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === "grammar"
                ? "border-indigo-400 text-indigo-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>2. Top 8 ELA Grammar Rules & Traps</span>
          </button>

          <button
            onClick={() => setActiveTab("pacing")}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === "pacing"
                ? "border-emerald-400 text-emerald-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>3. 180-Minute Pacing Clock Card</span>
          </button>
        </div>

        {/* Printable Document Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-200 print:text-black print:bg-white print:p-0 print:space-y-4">
          {/* TAB 1: MATH FORMULAS */}
          {activeTab === "math" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3 print:border-black">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 print:text-gray-700">
                  NYC Specialized High Schools Admissions Test • Math Blueprint
                </span>
                <h2 className="text-xl font-extrabold text-white print:text-black">
                  Top 20 Must-Know Formulas & Shortcuts for Brooklyn Tech
                </h2>
                <p className="text-xs text-slate-400 print:text-gray-600">
                  Target Cutoff: 505 | Goal: 35+ correct Math raw items
                </p>
              </div>

              {/* Grid 1: Geometry & Shapes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 print:border-gray-300 print:bg-gray-50 space-y-2">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider print:text-black">
                    1. Polygons & Angle Sums
                  </h4>
                  <ul className="text-xs space-y-1.5 font-mono text-slate-200 print:text-black">
                    <li>• Interior Angles Sum = (n − 2) × 180°</li>
                    <li>• Each Regular Interior = [(n − 2) × 180°] / n</li>
                    <li>• Triangle sum = 180° | Quadrilateral = 360°</li>
                    <li>• Exterior angle theorem: e = a + b (sum of remote interiors)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 print:border-gray-300 print:bg-gray-50 space-y-2">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider print:text-black">
                    2. Right Triangles & Pythagorean Triples
                  </h4>
                  <ul className="text-xs space-y-1.5 font-mono text-slate-200 print:text-black">
                    <li>• a² + b² = c² (Only right triangles!)</li>
                    <li>• <strong>Triple 1:</strong> 3-4-5 (and multiples 6-8-10, 9-12-15)</li>
                    <li>• <strong>Triple 2:</strong> 5-12-13 (and 10-24-26)</li>
                    <li>• <strong>Triple 3:</strong> 8-15-17 &amp; 7-24-25</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 print:border-gray-300 print:bg-gray-50 space-y-2">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider print:text-black">
                    3. Circles & Sector Geometry
                  </h4>
                  <ul className="text-xs space-y-1.5 font-mono text-slate-200 print:text-black">
                    <li>• Circumference = 2πr = πd</li>
                    <li>• Circle Area = πr²</li>
                    <li>• Arc Length = (θ / 360°) × 2πr</li>
                    <li>• Sector Area = (θ / 360°) × πr²</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 print:border-gray-300 print:bg-gray-50 space-y-2">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider print:text-black">
                    4. Percentages, Ratios & Rates
                  </h4>
                  <ul className="text-xs space-y-1.5 font-mono text-slate-200 print:text-black">
                    <li>• % Change = [(New − Original) / Original] × 100%</li>
                    <li>• Distance = Rate × Time (d = r · t)</li>
                    <li>• Average Speed = Total Distance / Total Time (Never average the speeds!)</li>
                    <li>• Work Formula: 1/A + 1/B = 1/T(together)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 print:border-gray-300 print:bg-gray-50 space-y-2">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider print:text-black">
                    5. 3D Volume & Surface Area
                  </h4>
                  <ul className="text-xs space-y-1.5 font-mono text-slate-200 print:text-black">
                    <li>• Rectangular Prism Vol = l × w × h</li>
                    <li>• Cylinder Volume = πr²h</li>
                    <li>• Cube Surface Area = 6s²</li>
                    <li>• Cylinder Surface Area = 2πr² + 2πrh</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 print:border-gray-300 print:bg-gray-50 space-y-2">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider print:text-black">
                    6. Statistics & Probability
                  </h4>
                  <ul className="text-xs space-y-1.5 font-mono text-slate-200 print:text-black">
                    <li>• Mean = Sum / Count | Sum = Mean × Count</li>
                    <li>• Independent P(A and B) = P(A) × P(B)</li>
                    <li>• Without replacement: decrease denominator by 1</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GRAMMAR & REVISING RULES */}
          {activeTab === "grammar" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3 print:border-black">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 print:text-gray-700">
                  NYC Specialized High Schools Admissions Test • ELA Blueprint
                </span>
                <h2 className="text-xl font-extrabold text-white print:text-black">
                  Top 8 Revising/Editing Part A Rules & Trap Buster
                </h2>
                <p className="text-xs text-slate-400 print:text-gray-600">
                  Guarantee 9 to 11 raw points in the first 12 minutes of your test!
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 print:border-gray-300 print:bg-gray-50 space-y-1.5">
                  <h4 className="text-xs font-bold text-indigo-300 print:text-black">
                    Rule 1: The Semicolon (;) = Period (.)
                  </h4>
                  <p className="text-xs text-slate-300 print:text-gray-800">
                    A semicolon <strong>must</strong> separate two complete, independent sentences (Subject + Verb on BOTH sides). Never use a semicolon before dependent clauses!
                  </p>
                  <p className="text-xs font-mono text-emerald-400 print:text-gray-900">
                    ✓ CORRECT: The lab experiment was delayed; the chemical reagents had spoiled.
                  </p>
                  <p className="text-xs font-mono text-rose-400 print:text-gray-900">
                    ✗ WRONG (Comma Splice): The lab experiment was delayed, the reagents spoiled.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 print:border-gray-300 print:bg-gray-50 space-y-1.5">
                  <h4 className="text-xs font-bold text-indigo-300 print:text-black">
                    Rule 2: Dangling & Misplaced Modifiers
                  </h4>
                  <p className="text-xs text-slate-300 print:text-gray-800">
                    An introductory descriptive phrase <strong>must be immediately followed</strong> by the noun it describes.
                  </p>
                  <p className="text-xs font-mono text-emerald-400 print:text-gray-900">
                    ✓ CORRECT: Walking into Brooklyn Tech, Maya admired the 7-story atrium.
                  </p>
                  <p className="text-xs font-mono text-rose-400 print:text-gray-900">
                    ✗ WRONG: Walking into Brooklyn Tech, the 7-story atrium admired Maya.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 print:border-gray-300 print:bg-gray-50 space-y-1.5">
                  <h4 className="text-xs font-bold text-indigo-300 print:text-black">
                    Rule 3: Transition Words Logic (Contrasting vs. Continuing)
                  </h4>
                  <p className="text-xs text-slate-300 print:text-gray-800">
                    Categorize transition words before picking:
                  </p>
                  <ul className="text-xs space-y-1 text-slate-300 print:text-gray-800">
                    <li>• <strong>Contrast:</strong> However, Nevertheless, On the contrary, Despite this</li>
                    <li>• <strong>Cause/Effect:</strong> Therefore, Consequently, As a result, Thus</li>
                    <li>• <strong>Addition/Sequence:</strong> Furthermore, Moreover, In addition</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 print:border-gray-300 print:bg-gray-50 space-y-1.5">
                  <h4 className="text-xs font-bold text-indigo-300 print:text-black">
                    Rule 4: Pronoun-Antecedent Agreement
                  </h4>
                  <p className="text-xs text-slate-300 print:text-gray-800">
                    Singular collective nouns (committee, company, school, team, jury) take <strong>it / its</strong>, NEVER <em>their</em>.
                  </p>
                  <p className="text-xs font-mono text-emerald-400 print:text-gray-900">
                    ✓ CORRECT: The robotics team showcased its project at the city fair.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 180-MIN PACING CLOCK CARD */}
          {activeTab === "pacing" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3 print:border-black">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 print:text-gray-700">
                  NYC Specialized High Schools Admissions Test • Strategy Blueprint
                </span>
                <h2 className="text-xl font-extrabold text-white print:text-black">
                  The Official 180-Minute Pacing Clock Checkpoint Card
                </h2>
                <p className="text-xs text-slate-400 print:text-gray-600">
                  Tape this card to your study desk. Follow these exact minute benchmarks during the exam.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-800/60 border-l-4 border-indigo-500 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-extrabold text-indigo-400">
                      Minute 0 to Minute 15
                    </span>
                    <h4 className="text-sm font-bold text-white">Revising & Editing Part A (Questions 1–10)</h4>
                    <p className="text-xs text-slate-400">Lock down all 9–10 grammar points with 100% accuracy.</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-300">Target: Q10 done</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border-l-4 border-indigo-400 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-extrabold text-indigo-400">
                      Minute 15 to Minute 85
                    </span>
                    <h4 className="text-sm font-bold text-white">Reading Comprehension & Revising Part B (Q11–50)</h4>
                    <p className="text-xs text-slate-400">Allocate ~12–14 minutes per reading passage. Never re-read aimlessly.</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-300">Target: ELA Done (Min 85)</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border-l-4 border-amber-400 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-extrabold text-amber-400">
                      Minute 85 to Minute 90
                    </span>
                    <h4 className="text-sm font-bold text-white">Halftime Reset & Brain Recharge</h4>
                    <p className="text-xs text-slate-400">Drink water, stretch shoulders, and shift mental gears from English to Math.</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-300">5-Min Pause</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border-l-4 border-emerald-500 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-extrabold text-emerald-400">
                      Minute 90 to Minute 105
                    </span>
                    <h4 className="text-sm font-bold text-white">Grid-In Math Sprint (Questions 51–55)</h4>
                    <p className="text-xs text-slate-400">Solve without multiple choice. Bubble in decimals cleanly.</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-300">Target: Q55 done</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border-l-4 border-emerald-400 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-extrabold text-emerald-400">
                      Minute 105 to Minute 165
                    </span>
                    <h4 className="text-sm font-bold text-white">Math Multiple Choice (Questions 56–100)</h4>
                    <p className="text-xs text-slate-400">Maintain a steady 1.3 minutes per question pace. Flag any question exceeding 2 minutes.</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-300">Target: All 100 answered</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border-l-4 border-rose-500 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-extrabold text-rose-400">
                      Minute 165 to Minute 180
                    </span>
                    <h4 className="text-sm font-bold text-white">Review Flagged Questions & Zero Unanswered</h4>
                    <p className="text-xs text-slate-400">There is ZERO penalty for guessing on the SHSAT! Never leave a single blank bubble.</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-rose-300">Zero Blanks!</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
