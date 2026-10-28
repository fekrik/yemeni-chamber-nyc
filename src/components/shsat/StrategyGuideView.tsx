"use client";

import React, { useState } from "react";
import {
  Lightbulb,
  Clock,
  CheckCheck,
  AlertTriangle,
  FileText,
  Bookmark,
  Award,
} from "lucide-react";

export default function StrategyGuideView() {
  const [activeTab, setActiveTab] = useState<"pacing" | "grammar" | "math_tricks" | "traps">(
    "pacing"
  );

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-2">
          <Lightbulb className="w-6 h-6 text-amber-400" />
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            NYC SHSAT Test-Day Master Strategy Guide
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Proven tactical playbooks, pacing benchmarks, and trap-elimination rules compiled from top scorers at Stuyvesant and Bronx Science.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex bg-slate-900 p-1.5 rounded-2xl border border-slate-800 text-xs overflow-x-auto no-scrollbar gap-1">
        <button
          onClick={() => setActiveTab("pacing")}
          className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
            activeTab === "pacing"
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          ⏱️ 180-Minute Pacing Plan
        </button>
        <button
          onClick={() => setActiveTab("grammar")}
          className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
            activeTab === "grammar"
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          📝 Top 8 Grammar Rules
        </button>
        <button
          onClick={() => setActiveTab("math_tricks")}
          className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
            activeTab === "math_tricks"
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          📐 Math Shortcuts
        </button>
        <button
          onClick={() => setActiveTab("traps")}
          className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
            activeTab === "traps"
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          ⚠️ Test Maker Trap Alerts
        </button>
      </div>

      {/* Tab 1: Pacing */}
      {activeTab === "pacing" && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl text-slate-200">
          <div className="flex items-center space-x-3 text-indigo-400">
            <Clock className="w-6 h-6" />
            <h3 className="text-base font-bold text-white">
              The 180-Minute Execution Blueprint
            </h3>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            The SHSAT gives you <strong>180 minutes</strong> for <strong>100 questions</strong>.
            That equals approximately <strong>1.8 minutes per question</strong>. However, smart test-takers do NOT allocate time evenly:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
              <span className="font-extrabold uppercase text-amber-400 text-[11px]">
                Phase 1: Revising & Editing
              </span>
              <p className="text-xl font-bold text-white font-mono">15–20 Mins</p>
              <p className="text-slate-400 leading-relaxed">
                Start here! Standalone grammar (Q48-50) and passage revisions (Q44-47) are fast, rule-based points. Spend ~1 minute per question.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
              <span className="font-extrabold uppercase text-indigo-400 text-[11px]">
                Phase 2: Math Section
              </span>
              <p className="text-xl font-bold text-white font-mono">75–80 Mins</p>
              <p className="text-slate-400 leading-relaxed">
                Do your strongest math domains first. Spend ~1.5 minutes per math question. Flag complex geometry or multi-step riddles and come back.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
              <span className="font-extrabold uppercase text-emerald-400 text-[11px]">
                Phase 3: Reading Comprehension
              </span>
              <p className="text-xl font-bold text-white font-mono">75–80 Mins</p>
              <p className="text-slate-400 leading-relaxed">
                Spend 3–4 minutes carefully reading each passage and annotating paragraph main ideas. Spend 1–1.5 minutes answering each associated question.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs space-y-2 text-slate-300">
            <h4 className="font-bold text-amber-400 flex items-center space-x-1.5">
              <span>⚠️ Critical CAT Rule: No Penalty for Guessing</span>
            </h4>
            <p className="leading-relaxed">
              There is NO penalty for wrong answers on the SHSAT! Never leave a question blank.
              If you have 2 minutes left, fill in your favorite letter (e.g. "B" or "C") on any remaining unvisited items.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Grammar */}
      {activeTab === "grammar" && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl text-slate-200">
          <div className="flex items-center space-x-3 text-emerald-400">
            <CheckCheck className="w-6 h-6" />
            <h3 className="text-base font-bold text-white">
              The Top 8 Grammar Rules Tested on the NYC SHSAT
            </h3>
          </div>

          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <span className="font-bold text-amber-400">1. Semicolons & Conjunctive Adverbs</span>
              <p className="text-slate-300">
                Formula: <code className="bg-slate-950 px-2 py-0.5 rounded text-indigo-300 font-mono">[Independent Clause]; however, [Independent Clause].</code>
              </p>
              <p className="text-slate-400 text-[11px]">
                A comma splice is when you join two independent sentences with only a comma. That is ALWAYS wrong on the SHSAT!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <span className="font-bold text-amber-400">2. Misplaced & Dangling Modifiers</span>
              <p className="text-slate-300">
                Rule: An introductory descriptive phrase (like <em>"Running through the park, ..."</em>) must be immediately followed by the exact noun who is doing the running!
              </p>
              <p className="text-slate-400 text-[11px]">
                Wrong: <em>"Walking into the museum, the paintings impressed Sarah."</em> (The paintings weren't walking!).
                <br />
                Correct: <em>"Walking into the museum, Sarah was impressed by the paintings."</em>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <span className="font-bold text-amber-400">3. Intervening Prepositional Phrases (Subject-Verb Agreement)</span>
              <p className="text-slate-300">
                Rule: Cross out everything between commas or prepositions to find the true subject.
              </p>
              <p className="text-slate-400 text-[11px]">
                Example: <em>"The basket of fresh red apples (is / are) on the table."</em>
                Cross out <em>"of fresh red apples"</em>: <em>"The basket IS on the table."</em>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <span className="font-bold text-amber-400">4. Colons Must Follow a Complete Sentence</span>
              <p className="text-slate-300">
                Rule: A colon (:) can only be used after a clause that could stand alone as a complete sentence, introducing a list, explanation, or quote.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Math Tricks */}
      {activeTab === "math_tricks" && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl text-slate-200">
          <div className="flex items-center space-x-3 text-indigo-400">
            <FileText className="w-6 h-6" />
            <h3 className="text-base font-bold text-white">
              High-Yield Math Shortcuts & Formulas
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <span className="font-bold text-amber-400">Consecutive Parallelogram Angles</span>
              <p className="text-slate-300 font-mono">∠A + ∠B = 180°</p>
              <p className="text-slate-400 text-[11px]">
                Adjacent interior angles in a parallelogram always add to 180°, while opposite angles are equal!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <span className="font-bold text-emerald-400">Scale Factor for Area & Volume</span>
              <p className="text-slate-300 font-mono">Area ratio = k² | Volume ratio = k³</p>
              <p className="text-slate-400 text-[11px]">
                If a map scale is 1 in = 5 ft (linear scale factor = 5), the area scale factor is 5² = 25!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <span className="font-bold text-cyan-400">Inequality Negative Flip</span>
              <p className="text-slate-300 font-mono">-3x &lt; 12 ⟹ x &gt; -4</p>
              <p className="text-slate-400 text-[11px]">
                Only flip the sign when MULTIPLYING or DIVIDING by a negative number. If dividing by positive, leave it!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <span className="font-bold text-purple-400">Pythagorean Triples</span>
              <p className="text-slate-300 font-mono">3-4-5 | 5-12-13 | 8-15-17</p>
              <p className="text-slate-400 text-[11px]">
                Multiples also work: 6-8-10, 9-12-15. Recognizing these saves 60+ seconds per problem!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Traps */}
      {activeTab === "traps" && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl text-slate-200">
          <div className="flex items-center space-x-3 text-rose-400">
            <AlertTriangle className="w-6 h-6" />
            <h3 className="text-base font-bold text-white">
              The 4 Most Common NYC SHSAT Traps
            </h3>
          </div>

          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <span className="font-bold text-rose-400">Trap 1: The "True But Doesn't Answer the Question" Trap</span>
              <p className="text-slate-300 leading-relaxed">
                In Reading Comprehension, test writers include a choice that is 100% true and mentioned in the passage, but does NOT answer what the prompt specifically asked for (e.g. asking for central idea vs minor detail).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <span className="font-bold text-rose-400">Trap 2: The Half-Way Calculation Trap</span>
              <p className="text-slate-300 leading-relaxed">
                In multi-step math problems (e.g., car down payment + monthly payments), the test makers calculate 36 × $275 = $9,900 and put $9,900 as Option B! Many students pick it without adding the initial down payment of $1,200. Always re-read the final question sentence before bubbling!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <span className="font-bold text-rose-400">Trap 3: Composite Numbers in Prime Factorization</span>
              <p className="text-slate-300 leading-relaxed">
                Choices like $2^2 \cdot 3^2 \cdot 21$ multiply to 756, but 21 is NOT prime! Test makers prey on students who multiply choices out on scratch paper instead of factoring to true primes.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <span className="font-bold text-rose-400">Trap 4: Decimal Hours vs Minutes</span>
              <p className="text-slate-300 leading-relaxed">
                If an equation yields 0.4 hours, 0.4 hours does NOT equal 40 minutes! It equals 0.4 × 60 = 24 minutes. Test makers always put 40 as a trap choice!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
