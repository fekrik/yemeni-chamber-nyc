"use client";

import { Exam, Question } from "@/types/shsat";

export interface SavedExamSession {
  examId: string;
  mode: "full_sim" | "tutor";
  currentIndex: number;
  answers: Record<string, string>;
  flaggedQuestions: Record<string, boolean>;
  struckOptions: Record<string, string[]>;
  revealedHints: Record<string, number>;
  checkedAnswers: Record<string, boolean>;
  timeRemaining: number;
  answeredCount: number;
  totalQuestions: number;
  updatedAt: number;
}

export interface OngoingExamState {
  examId: string;
  mode: "full_sim" | "tutor";
  isCustom?: boolean;
  customExam?: Exam;
  customQuestions?: Question[];
}

const STORAGE_KEY_PREFIX = "shsat_session_";
const ALL_SESSIONS_INDEX_KEY = "shsat_active_sessions";
const STUDENT_NAME_KEY = "shsat_student_name";
const TARGET_SCHOOL_KEY = "shsat_target_school";

export function getTargetSchoolId(): string {
  if (typeof window === "undefined") return "brooklyn_tech";
  try {
    return localStorage.getItem(TARGET_SCHOOL_KEY) || "brooklyn_tech";
  } catch {
    return "brooklyn_tech";
  }
}

export function setTargetSchoolId(id: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(TARGET_SCHOOL_KEY, id);
  } catch (err) {
    console.error("Failed to save target school", err);
  }
}

export function getStudentName(): string {
  if (typeof window === "undefined") return "8th Grade Scholar";
  try {
    return localStorage.getItem(STUDENT_NAME_KEY) || "8th Grade Scholar";
  } catch {
    return "8th Grade Scholar";
  }
}

export function setStudentName(name: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STUDENT_NAME_KEY, name.trim());
  } catch (err) {
    console.error("Failed to save student name", err);
  }
}

export function saveExamSession(session: SavedExamSession): void {
  if (typeof window === "undefined") return;
  try {
    const key = `${STORAGE_KEY_PREFIX}${session.examId}`;
    localStorage.setItem(key, JSON.stringify(session));

    // Update index of active sessions
    const active = getActiveSessionIds();
    if (!active.includes(session.examId)) {
      active.push(session.examId);
      localStorage.setItem(ALL_SESSIONS_INDEX_KEY, JSON.stringify(active));
    }
  } catch (err) {
    console.error("Failed to save SHSAT session to localStorage", err);
  }
}

export function getExamSession(examId: string): SavedExamSession | null {
  if (typeof window === "undefined") return null;
  try {
    const key = `${STORAGE_KEY_PREFIX}${examId}`;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as SavedExamSession;
  } catch {
    return null;
  }
}

export function getActiveSessionIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ALL_SESSIONS_INDEX_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getAllActiveSessions(): Record<string, SavedExamSession> {
  const ids = getActiveSessionIds();
  const sessions: Record<string, SavedExamSession> = {};
  for (const id of ids) {
    const s = getExamSession(id);
    if (s) {
      sessions[id] = s;
    }
  }
  return sessions;
}

export function clearExamSession(examId: string): void {
  if (typeof window === "undefined") return;
  try {
    const key = `${STORAGE_KEY_PREFIX}${examId}`;
    localStorage.removeItem(key);

    const active = getActiveSessionIds().filter((id) => id !== examId);
    localStorage.setItem(ALL_SESSIONS_INDEX_KEY, JSON.stringify(active));
  } catch (err) {
    console.error("Failed to clear session", err);
  }
}

// -------------------------------------------------------------
// Active Tab / Navigation State
// -------------------------------------------------------------
const ACTIVE_TAB_KEY = "shsat_active_tab";

export function getActiveTab(): string | null {
  if (typeof window === "undefined") return null;
  try {
    // Priority: URL hash, then localStorage
    const hash = window.location.hash.replace("#", "");
    if (hash && ["dashboard", "roadmap", "daily", "drills", "notebook", "cutoffs", "strategies"].includes(hash)) {
      return hash;
    }
    return localStorage.getItem(ACTIVE_TAB_KEY);
  } catch {
    return null;
  }
}

export function saveActiveTab(tab: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(ACTIVE_TAB_KEY, tab);
    // Sync URL hash without jumping page
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", `#${tab}`);
    }
  } catch (err) {
    console.error("Failed to save active tab", err);
  }
}

// -------------------------------------------------------------
// Ongoing Exam / Drill in Progress State
// -------------------------------------------------------------
const ONGOING_EXAM_KEY = "shsat_ongoing_exam";

export function getOngoingExamState(): OngoingExamState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(ONGOING_EXAM_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as OngoingExamState;
  } catch {
    return null;
  }
}

export function setOngoingExamState(state: OngoingExamState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(ONGOING_EXAM_KEY, JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save ongoing exam state", err);
  }
}

export function clearOngoingExamState(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(ONGOING_EXAM_KEY);
  } catch (err) {
    console.error("Failed to clear ongoing exam state", err);
  }
}

// -------------------------------------------------------------
// 4-Week Study Roadmap Active Week State
// -------------------------------------------------------------
const ROADMAP_ACTIVE_WEEK_KEY = "shsat_roadmap_active_week";

export function getRoadmapActiveWeek(): number {
  if (typeof window === "undefined") return 1;
  try {
    const val = localStorage.getItem(ROADMAP_ACTIVE_WEEK_KEY);
    if (val) {
      const parsed = parseInt(val, 10);
      if (parsed >= 1 && parsed <= 4) return parsed;
    }
    return 1;
  } catch {
    return 1;
  }
}

export function setRoadmapActiveWeek(week: number): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(ROADMAP_ACTIVE_WEEK_KEY, week.toString());
  } catch (err) {
    console.error("Failed to save roadmap active week", err);
  }
}

// -------------------------------------------------------------
// Daily Challenge Progress State
// -------------------------------------------------------------
const DAILY_PROGRESS_PREFIX = "shsat_daily_progress_";

export function getDailyProgress(dateStr: string): {
  selectedAnswers: Record<string, string>;
  submitted: Record<string, boolean>;
} | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(`${DAILY_PROGRESS_PREFIX}${dateStr}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveDailyProgress(
  dateStr: string,
  selectedAnswers: Record<string, string>,
  submitted: Record<string, boolean>
): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(
      `${DAILY_PROGRESS_PREFIX}${dateStr}`,
      JSON.stringify({ selectedAnswers, submitted })
    );
  } catch (err) {
    console.error("Failed to save daily progress", err);
  }
}

// -------------------------------------------------------------
// Cutoff Calculator State
// -------------------------------------------------------------
const CALCULATOR_STATE_KEY = "shsat_calculator_state";

export function getCalculatorState(): {
  elaRaw: number;
  mathRaw: number;
  adaptiveProfile: "standard" | "high_difficulty" | "careless";
} | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CALCULATOR_STATE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setCalculatorState(state: {
  elaRaw: number;
  mathRaw: number;
  adaptiveProfile: "standard" | "high_difficulty" | "careless";
}): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CALCULATOR_STATE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save calculator state", err);
  }
}
