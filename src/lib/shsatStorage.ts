"use client";

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

const STORAGE_KEY_PREFIX = "shsat_session_";
const ALL_SESSIONS_INDEX_KEY = "shsat_active_sessions";
const STUDENT_NAME_KEY = "shsat_student_name";

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
