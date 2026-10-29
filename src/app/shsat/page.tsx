"use client";

import React, { useState, useEffect } from "react";
import Navbar, { NavTab } from "@/components/shsat/Navbar";
import DashboardHero from "@/components/shsat/DashboardHero";
import ExamSimulator from "@/components/shsat/ExamSimulator";
import TopicDrillsView from "@/components/shsat/TopicDrillsView";
import MistakeNotebookView from "@/components/shsat/MistakeNotebookView";
import CutoffPredictorView from "@/components/shsat/CutoffPredictorView";
import StrategyGuideView from "@/components/shsat/StrategyGuideView";
import StudyRoadmapView from "@/components/shsat/StudyRoadmapView";
import DailyChallengeView from "@/components/shsat/DailyChallengeView";
import PrintableCheatSheetsModal from "@/components/shsat/PrintableCheatSheetsModal";
import CrossDeviceSyncModal from "@/components/shsat/CrossDeviceSyncModal";
import {
  EXAMS,
  SPECIALIZED_HIGH_SCHOOLS,
  PASSAGES,
  QUESTIONS,
} from "@/data/shsatExams";
import { Exam, Question } from "@/types/shsat";
import {
  getTargetSchoolId,
  setTargetSchoolId,
  getActiveTab,
  saveActiveTab,
  getOngoingExamState,
  setOngoingExamState,
  clearOngoingExamState,
} from "@/lib/shsatStorage";

export default function ShsatMainPage() {
  const [activeTab, setActiveTab] = useState<NavTab>("dashboard");
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>("brooklyn_tech");
  const [cheatSheetsOpen, setCheatSheetsOpen] = useState(false);
  const [syncModalOpen, setSyncModalOpen] = useState(false);

  // Exam simulator active state
  const [activeExam, setActiveExam] = useState<Exam | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [examMode, setExamMode] = useState<"full_sim" | "tutor">("full_sim");

  useEffect(() => {
    // 1. Check for incoming cross-device cloud sync URL param (?sync=XXXXXX)
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const incomingSync = urlParams.get("sync");
      if (incomingSync) {
        fetch(`/api/sync?code=${encodeURIComponent(incomingSync.trim().toUpperCase())}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.success && data.payload) {
              const p = data.payload;
              if (p.targetSchoolId) localStorage.setItem("shsat_target_school", p.targetSchoolId);
              if (p.roadmapCompleted) localStorage.setItem("shsat_roadmap_completed", JSON.stringify(p.roadmapCompleted));
              if (p.roadmapWeek) localStorage.setItem("shsat_roadmap_active_week", String(p.roadmapWeek));
              if (p.dailyStreak) localStorage.setItem("shsat_daily_streak_count", String(p.dailyStreak));
              if (p.dailyStreakDate) localStorage.setItem("shsat_daily_streak_date", p.dailyStreakDate);
              if (p.mistakes) localStorage.setItem("shsat_mistakes", JSON.stringify(p.mistakes));
              if (p.sessions) {
                for (const [examId, session] of Object.entries(p.sessions)) {
                  localStorage.setItem(`shsat_session_${examId}`, JSON.stringify(session));
                }
                localStorage.setItem("shsat_active_sessions", JSON.stringify(Object.keys(p.sessions)));
              }
              window.history.replaceState(null, "", "/shsat");
              window.location.reload();
            }
          })
          .catch(() => {});
      }
    }

    // 2. Restore target high school preference
    setSelectedSchoolId(getTargetSchoolId());

    // 2. Restore active tab / study path
    const savedTab = getActiveTab();
    if (
      savedTab &&
      [
        "dashboard",
        "roadmap",
        "daily",
        "drills",
        "notebook",
        "cutoffs",
        "strategies",
      ].includes(savedTab)
    ) {
      setActiveTab(savedTab as NavTab);
    }

    // 3. Restore ongoing exam session if browser refreshed mid-test
    const ongoing = getOngoingExamState();
    if (ongoing) {
      if (ongoing.isCustom && ongoing.customExam) {
        setActiveExam(ongoing.customExam);
        setActiveQuestions(ongoing.customQuestions || []);
        setExamMode(ongoing.mode);
      } else {
        const exam = EXAMS.find((e) => e.id === ongoing.examId);
        if (exam) {
          const examQuestions = QUESTIONS.filter((q) => q.examId === ongoing.examId);
          setActiveExam(exam);
          setActiveQuestions(examQuestions);
          setExamMode(ongoing.mode);
        }
      }
    }
  }, []);

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    saveActiveTab(tab);
  };

  const handleSelectSchool = (schoolId: string) => {
    setSelectedSchoolId(schoolId);
    setTargetSchoolId(schoolId);
  };

  const selectedSchool =
    SPECIALIZED_HIGH_SCHOOLS.find((s) => s.id === selectedSchoolId) ||
    SPECIALIZED_HIGH_SCHOOLS[0];

  const handleStartExam = (examId: string, mode: "full_sim" | "tutor") => {
    const exam = EXAMS.find((e) => e.id === examId);
    if (!exam) return;
    const examQuestions = QUESTIONS.filter((q) => q.examId === examId);
    setActiveExam(exam);
    setActiveQuestions(examQuestions);
    setExamMode(mode);
    setOngoingExamState({
      examId,
      mode,
      isCustom: false,
    });
  };

  const handleStartCustomDrill = (
    drillQuestions: Question[],
    drillTitle: string
  ) => {
    const drillExam: Exam = {
      id: "custom_drill",
      title: drillTitle,
      year: "2025",
      timeLimitMinutes: Math.max(10, Math.round(drillQuestions.length * 1.6)),
      totalQuestions: drillQuestions.length,
      elaCount: drillQuestions.filter((q) => q.section === "ela").length,
      mathCount: drillQuestions.filter((q) => q.section === "math").length,
      description: `Targeted practice session: ${drillTitle}`,
      badge: "Targeted Drill",
    };
    setActiveExam(drillExam);
    setActiveQuestions(drillQuestions);
    setExamMode("tutor");
    setOngoingExamState({
      examId: "custom_drill",
      mode: "tutor",
      isCustom: true,
      customExam: drillExam,
      customQuestions: drillQuestions,
    });
  };

  const handleRetryQuestion = (q: Question) => {
    const retryExam: Exam = {
      id: "retry_" + q.id,
      title: `Retry Question ${q.questionNumber} (${q.topic})`,
      year: "2025",
      timeLimitMinutes: 10,
      totalQuestions: 1,
      elaCount: q.section === "ela" ? 1 : 0,
      mathCount: q.section === "math" ? 1 : 0,
      description: `Targeted review of missed problem in ${q.topic}`,
      badge: "Mistake Retry",
    };
    setActiveExam(retryExam);
    setActiveQuestions([q]);
    setExamMode("tutor");
    setOngoingExamState({
      examId: retryExam.id,
      mode: "tutor",
      isCustom: true,
      customExam: retryExam,
      customQuestions: [q],
    });
  };

  const handleExitExam = () => {
    setActiveExam(null);
    setActiveQuestions([]);
    clearOngoingExamState();
  };

  // If inside an active simulation, show ExamSimulator in full-screen mode
  if (activeExam) {
    return (
      <ExamSimulator
        exam={activeExam}
        questions={activeQuestions}
        passages={PASSAGES}
        mode={examMode}
        onExit={handleExitExam}
        targetSchoolId={selectedSchoolId}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        targetSchoolName={selectedSchool.shortName}
        targetCutoff={selectedSchool.cutoffScore}
        onOpenCheatSheets={() => setCheatSheetsOpen(true)}
        onOpenSync={() => setSyncModalOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === "dashboard" && (
          <DashboardHero
            exams={EXAMS}
            schools={SPECIALIZED_HIGH_SCHOOLS}
            selectedSchoolId={selectedSchoolId}
            onSelectSchool={handleSelectSchool}
            onStartExam={handleStartExam}
            onLaunchDrill={() => handleTabChange("drills")}
            onOpenRoadmap={() => handleTabChange("roadmap")}
          />
        )}

        {activeTab === "roadmap" && (
          <StudyRoadmapView
            onStartExam={handleStartExam}
            onOpenCheatSheets={() => setCheatSheetsOpen(true)}
            onLaunchDrill={() => handleTabChange("drills")}
            onOpenNotebook={() => handleTabChange("notebook")}
          />
        )}

        {activeTab === "daily" && <DailyChallengeView />}

        {activeTab === "drills" && (
          <TopicDrillsView onStartCustomDrill={handleStartCustomDrill} />
        )}

        {activeTab === "notebook" && (
          <MistakeNotebookView onRetryQuestion={handleRetryQuestion} />
        )}

        {activeTab === "cutoffs" && <CutoffPredictorView />}

        {activeTab === "strategies" && <StrategyGuideView />}
      </main>

      <PrintableCheatSheetsModal
        isOpen={cheatSheetsOpen}
        onClose={() => setCheatSheetsOpen(false)}
      />

      <CrossDeviceSyncModal
        isOpen={syncModalOpen}
        onClose={() => setSyncModalOpen(false)}
      />

      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            SHSAT Ace — Dedicated practice portal for NYC 8th Grade Scholars.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">
              Targeting: Stuyvesant • Bronx Science • Brooklyn Tech • Staten Island Tech
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
