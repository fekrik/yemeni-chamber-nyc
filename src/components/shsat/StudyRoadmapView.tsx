"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  CheckCircle2,
  Circle,
  Target,
  Sparkles,
  Zap,
  BookOpen,
  Clock,
  ArrowRight,
  Award,
  Download,
  Share2,
} from "lucide-react";
import { getRoadmapActiveWeek, setRoadmapActiveWeek } from "@/lib/shsatStorage";

interface RoadmapTask {
  id: string;
  day: number;
  dateLabel: string;
  title: string;
  category: "ELA" | "Math" | "Mock Exam" | "Review";
  timeMinutes: number;
  description: string;
  actionType: "drill" | "practice" | "cheat_sheet" | "mock";
  actionTarget?: string;
}

interface RoadmapWeek {
  weekNumber: number;
  title: string;
  dateRange: string;
  focus: string;
  targetMilestone: string;
  tasks: RoadmapTask[];
}

const ROADMAP_WEEKS: RoadmapWeek[] = [
  {
    weekNumber: 1,
    title: "Week 1: High-Yield Point Lock & Baseline",
    dateRange: "Oct 28 – Nov 2",
    focus: "Revising & Editing Part A + Geometry/Angle Rules + Diagnostic",
    targetMilestone: "Reach 440+ Baseline (Identify highest-yield point gaps)",
    tasks: [
      {
        id: "w1_d1",
        day: 1,
        dateLabel: "Thu, Oct 29",
        title: "Take Diagnostic Practice Test (Form A)",
        category: "Mock Exam",
        timeMinutes: 90,
        description: "Complete either Part 1 (ELA) or Part 2 (Math) to establish your baseline score in the Cutoff Predictor.",
        actionType: "mock",
        actionTarget: "exam1",
      },
      {
        id: "w1_d2",
        day: 2,
        dateLabel: "Fri, Oct 30",
        title: "Master the 6 Revising/Editing Part A Rules",
        category: "ELA",
        timeMinutes: 20,
        description: "Memorize semicolon vs. comma splice rules, transition words, and dangling modifiers. Review the Printable Grammar Cheat Sheet.",
        actionType: "cheat_sheet",
      },
      {
        id: "w1_d3",
        day: 3,
        dateLabel: "Sat, Oct 31",
        title: "10-Minute Geometry & Coordinate Angles Drill",
        category: "Math",
        timeMinutes: 15,
        description: "Solve 10 angle problems involving parallel lines cut by transversals, triangle angle sums, and circle sector formulas.",
        actionType: "drill",
      },
      {
        id: "w1_d4",
        day: 4,
        dateLabel: "Sun, Nov 1",
        title: "Mistake Notebook Deep-Dive",
        category: "Review",
        timeMinutes: 20,
        description: "Retry the first 5 questions you missed on Test 1. Use 3-tier Socratic hints to understand WHY the trap answer looked appealing.",
        actionType: "practice",
      },
      {
        id: "w1_d5",
        day: 5,
        dateLabel: "Mon, Nov 2",
        title: "Math Grid-In Speed Sprint (Questions 51-55)",
        category: "Math",
        timeMinutes: 20,
        description: "Practice answering questions without multiple-choice crutches. Focus on decimal conversion and negative signs.",
        actionType: "drill",
      },
    ],
  },
  {
    weekNumber: 2,
    title: "Week 2: Algebraic Word Problems & Deep Reading",
    dateRange: "Nov 3 – Nov 8",
    focus: "Ratios, Rates, Proportions & Poetry/Historical Paired Passages",
    targetMilestone: "Reach 475+ (Within 30 points of Brooklyn Tech)",
    tasks: [
      {
        id: "w2_d1",
        day: 6,
        dateLabel: "Tue, Nov 3",
        title: "Ratios, Proportions & Percent Change Drills",
        category: "Math",
        timeMinutes: 25,
        description: "Master percent increase vs. percent of, and setting up clean algebraic ratios ($a/b = c/d$).",
        actionType: "drill",
      },
      {
        id: "w2_d2",
        day: 7,
        dateLabel: "Wed, Nov 4",
        title: "Poetry & Dual Historical Passages Analysis",
        category: "ELA",
        timeMinutes: 30,
        description: "Practice reading stanza by stanza and finding the central theme. Remember: the correct answer must be supported directly by the text.",
        actionType: "practice",
      },
      {
        id: "w2_d3",
        day: 8,
        dateLabel: "Thu, Nov 5",
        title: "Speed Elimination (Process of Elimination - POE)",
        category: "Review",
        timeMinutes: 20,
        description: "Use the strike-through POE tool to eliminate 2 obviously false choices on every question before choosing.",
        actionType: "practice",
      },
      {
        id: "w2_d4",
        day: 9,
        dateLabel: "Fri, Nov 6",
        title: "Algebraic Word Problems & Expressions",
        category: "Math",
        timeMinutes: 25,
        description: "Translate complex English descriptions into algebraic equations (e.g., consecutive integers, perimeter variables).",
        actionType: "drill",
      },
      {
        id: "w2_d5",
        day: 10,
        dateLabel: "Sat, Nov 7",
        title: "Mid-Sprint Diagnostic Review (Form B)",
        category: "Mock Exam",
        timeMinutes: 90,
        description: "Complete Form B Part 1 or Part 2. Check your scaled score against Brooklyn Tech's 505 cutoff in the Predictor.",
        actionType: "mock",
        actionTarget: "exam2",
      },
    ],
  },
  {
    weekNumber: 3,
    title: "Week 3: The 180-Minute Pacing Clock & CAT Mastery",
    dateRange: "Nov 9 – Nov 14",
    focus: "1.5-minute pacing speed, hard-item CAT routing, and stamina",
    targetMilestone: "Reach 505+ (Brooklyn Tech Admissions Threshold!)",
    tasks: [
      {
        id: "w3_d1",
        day: 11,
        dateLabel: "Sun, Nov 8",
        title: "Internalize the 180-Minute Pacing Clock",
        category: "Review",
        timeMinutes: 15,
        description: "Memorize your pacing checkpoints: Min 45 (Q25), Min 90 (Q50 ELA complete), Min 135 (Q75), Min 180 (All 100 complete).",
        actionType: "cheat_sheet",
      },
      {
        id: "w3_d2",
        day: 12,
        dateLabel: "Mon, Nov 9",
        title: "High-Difficulty CAT Algebra & Probability",
        category: "Math",
        timeMinutes: 30,
        description: "Solve tier-3 multi-step combinations, permutations, and geometric probability to unlock the CAT theta bonus.",
        actionType: "drill",
      },
      {
        id: "w3_d3",
        day: 13,
        dateLabel: "Tue, Nov 10",
        title: "ELA Inferences & Author's Tone Sprint",
        category: "ELA",
        timeMinutes: 25,
        description: "Avoid 'too extreme' words like always, never, completely. Focus on moderate, evidence-backed answer choices.",
        actionType: "practice",
      },
      {
        id: "w3_d4",
        day: 14,
        dateLabel: "Wed, Nov 11",
        title: "Mistake Notebook Zero-Out",
        category: "Review",
        timeMinutes: 30,
        description: "Clear your Mistake Notebook by re-answering all logged errors until you have a 100% correct retry streak.",
        actionType: "practice",
      },
      {
        id: "w3_d5",
        day: 15,
        dateLabel: "Thu, Nov 12",
        title: "Timed Speed Run (50 Questions in 75 Min)",
        category: "Mock Exam",
        timeMinutes: 75,
        description: "Practice under strict timed constraints with the ambient classroom audio enabled to build focus stamina.",
        actionType: "mock",
        actionTarget: "exam3",
      },
    ],
  },
  {
    weekNumber: 4,
    title: "Week 4: Final Sprint, Test-Day Eve & Nov 18 Test Day",
    dateRange: "Nov 13 – Nov 18",
    focus: "Full 180-min authentic simulation, sleep routine & test room tactics",
    targetMilestone: "525+ (Secure Brooklyn Tech & Reach for Bronx Science / Stuyvesant)",
    tasks: [
      {
        id: "w4_d1",
        day: 16,
        dateLabel: "Fri, Nov 13",
        title: "Full 180-Minute Official Mock Exam (Form D)",
        category: "Mock Exam",
        timeMinutes: 180,
        description: "Sit for the full 3-hour authentic CAT test with no pauses. Use your official formula sheet and test room ambient audio.",
        actionType: "mock",
        actionTarget: "exam4",
      },
      {
        id: "w4_d2",
        day: 17,
        dateLabel: "Sat, Nov 14",
        title: "Diagnostic Score Report Review with Parents/Tutor",
        category: "Review",
        timeMinutes: 30,
        description: "Print your 1-page Diagnostic Report Card. Verify that your scaled composite score is safely above the 505 mark.",
        actionType: "practice",
      },
      {
        id: "w4_d3",
        day: 18,
        dateLabel: "Sun, Nov 15",
        title: "Review Top 20 Brooklyn Tech Math Formulas",
        category: "Math",
        timeMinutes: 20,
        description: "Final review of circle sectors, cylinder volume, speed formulas, and Pythagorean triples (3-4-5, 5-12-13, 8-15-17).",
        actionType: "cheat_sheet",
      },
      {
        id: "w4_d4",
        day: 19,
        dateLabel: "Mon, Nov 16",
        title: "Review Top 8 Grammar Rules & Traps Matrix",
        category: "ELA",
        timeMinutes: 20,
        description: "Quick 20-minute scan of the ELA Subway Cheat Sheet to lock in rules for punctuation and transition words.",
        actionType: "cheat_sheet",
      },
      {
        id: "w4_d5",
        day: 20,
        dateLabel: "Tue, Nov 17 (Eve)",
        title: "Test-Day Eve Protocol (Rest & Mental Prep)",
        category: "Review",
        timeMinutes: 15,
        description: "No heavy studying! Pack your pencils, student ID / admissions ticket, water bottle, and snack. Get 8-9 hours of sleep.",
        actionType: "cheat_sheet",
      },
      {
        id: "w4_d6",
        day: 21,
        dateLabel: "Wed, Nov 18 (TEST DAY!)",
        title: "🏆 Official NYC SHSAT Test Day: Brooklyn Tech Victory!",
        category: "Review",
        timeMinutes: 180,
        description: "Arrive at your test site by 8:00 AM with your test ticket and two #2 pencils. Stay calm, pace yourself with the 180-min clock, and claim your Brooklyn Tech offer!",
        actionType: "cheat_sheet",
      },
    ],
  },
];

interface StudyRoadmapViewProps {
  onStartExam: (examId: string, mode: "full_sim" | "tutor") => void;
  onOpenCheatSheets: () => void;
  onLaunchDrill: () => void;
  onOpenNotebook: () => void;
}

const STORAGE_KEY = "shsat_roadmap_completed";

export default function StudyRoadmapView({
  onStartExam,
  onOpenCheatSheets,
  onLaunchDrill,
  onOpenNotebook,
}: StudyRoadmapViewProps) {
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(
    {}
  );
  const [activeWeek, setActiveWeek] = useState<number>(1);

  useEffect(() => {
    // 1. Restore completed roadmap tasks
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCompletedTasks(JSON.parse(saved));
      }
    } catch {
      // ignore
    }

    // 2. Restore active week tab
    setActiveWeek(getRoadmapActiveWeek());
  }, []);

  const handleSelectWeek = (week: number) => {
    setActiveWeek(week);
    setRoadmapActiveWeek(week);
  };

  const toggleTask = (taskId: string) => {
    setCompletedTasks((prev) => {
      const next = { ...prev, [taskId]: !prev[taskId] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const totalTasks = ROADMAP_WEEKS.reduce(
    (acc, week) => acc + week.tasks.length,
    0
  );
  const completedCount = Object.values(completedTasks).filter(Boolean).length;
  const progressPct = Math.round((completedCount / totalTasks) * 100);

  // Countdown to November 18, 2026
  const testDate = new Date("2026-11-18T08:00:00");
  const now = new Date();
  const diffMs = testDate.getTime() - now.getTime();
  const daysRemaining = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));

  const handleAction = (task: RoadmapTask) => {
    if (task.actionType === "mock" && task.actionTarget) {
      onStartExam(task.actionTarget, "full_sim");
    } else if (task.actionType === "cheat_sheet") {
      onOpenCheatSheets();
    } else if (task.actionType === "drill") {
      onLaunchDrill();
    } else if (task.actionType === "practice") {
      onOpenNotebook();
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="relative rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-900/50 p-6 sm:p-8 shadow-2xl overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Brooklyn Tech 505 Readiness Sprint</span>
              </div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold">
                <Clock className="w-3.5 h-3.5 text-rose-400" />
                <span>Test Day: Wednesday, Nov 18, 2026 ({daysRemaining} Days Left)</span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              The Brooklyn Tech 4-Week Study Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Targeted countdown plan calibrated to <strong>Wednesday, November 18, 2026</strong>. 21 structured daily missions to build test stamina, lock down high-yield formulas, and clear <strong>Brooklyn Tech's 505 cutoff score</strong>.
            </p>
          </div>

          {/* Overall Progress Meter */}
          <div className="bg-slate-900/90 border border-slate-700/80 p-5 rounded-2xl text-center min-w-[200px] shrink-0 shadow-lg">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
              Roadmap Progress
            </span>
            <div className="my-2 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300 font-mono">
              {progressPct}%
            </div>
            <div className="text-xs text-slate-300 mb-2">
              <strong className="text-emerald-400">{completedCount}</strong> of{" "}
              {totalTasks} milestones completed
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 via-amber-400 to-emerald-400 h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Week Tabs */}
      <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-1">
        {ROADMAP_WEEKS.map((w) => {
          const weekDone = w.tasks.filter((t) => completedTasks[t.id]).length;
          const isSelected = activeWeek === w.weekNumber;

          return (
            <button
              key={w.weekNumber}
              onClick={() => handleSelectWeek(w.weekNumber)}
              className={`px-4 py-3 rounded-2xl border text-left shrink-0 transition-all ${
                isSelected
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30 ring-1 ring-amber-400/50"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between space-x-3">
                <span className="text-xs font-bold uppercase tracking-wider">
                  Week {w.weekNumber}
                </span>
                <span
                  className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {weekDone}/{w.tasks.length}
                </span>
              </div>
              <div className="text-[11px] font-mono text-amber-300 font-bold mt-0.5">
                {w.dateRange}
              </div>
              <p
                className={`text-xs font-semibold mt-1 truncate max-w-[170px] ${
                  isSelected ? "text-indigo-100" : "text-slate-300"
                }`}
              >
                {w.focus.split("+")[0]}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Week Task Board */}
      {ROADMAP_WEEKS.filter((w) => w.weekNumber === activeWeek).map((w) => (
        <div key={w.weekNumber} className="space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                  Week {w.weekNumber} • {w.dateRange}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mt-0.5">{w.targetMilestone}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{w.focus}</p>
            </div>
            <button
              onClick={onOpenCheatSheets}
              className="self-start sm:self-auto px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center space-x-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print Subway Cheat Sheet</span>
            </button>
          </div>

          <div className="space-y-3">
            {w.tasks.map((task) => {
              const isDone = !!completedTasks[task.id];
              const isTestDay = task.dateLabel.includes("TEST DAY");

              return (
                <div
                  key={task.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all flex items-start justify-between gap-4 group ${
                    isTestDay
                      ? "bg-gradient-to-r from-amber-950/40 via-slate-900 to-indigo-950/50 border-amber-500/50 shadow-lg shadow-amber-500/10"
                      : isDone
                      ? "bg-slate-900/50 border-slate-800/80 opacity-75"
                      : "bg-slate-900 border-slate-800 hover:border-indigo-500/40 shadow-md"
                  }`}
                >
                  <div className="flex items-start space-x-3.5">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`mt-1 p-1 rounded-lg transition-transform hover:scale-110 shrink-0 ${
                        isDone
                          ? "text-emerald-400 hover:text-slate-400"
                          : "text-slate-500 hover:text-emerald-400"
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-6 h-6 fill-emerald-500/20" />
                      ) : (
                        <Circle className="w-6 h-6" />
                      )}
                    </button>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-slate-800 text-slate-300 border border-slate-700">
                          Day {task.day}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">
                          {task.dateLabel}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            task.category === "ELA"
                              ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                              : task.category === "Math"
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : task.category === "Mock Exam"
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                              : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          }`}
                        >
                          {task.category}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center space-x-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          <span>{task.timeMinutes} min</span>
                        </span>
                      </div>

                      <h4
                        className={`text-sm sm:text-base font-bold ${
                          isDone
                            ? "line-through text-slate-400"
                            : "text-white group-hover:text-indigo-300"
                        } transition-colors`}
                      >
                        {task.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed max-w-2xl">
                        {task.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleAction(task)}
                    className="self-center shrink-0 px-3 py-2 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white text-xs font-bold flex items-center space-x-1 transition-all shadow-sm"
                  >
                    <span>Start</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
