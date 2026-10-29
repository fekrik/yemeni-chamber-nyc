"use client";

import React, { useState } from "react";
import {
  X,
  Smartphone,
  Laptop,
  ArrowRight,
  Copy,
  Check,
  Cloud,
  Download,
  Upload,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import {
  getAllActiveSessions,
  getTargetSchoolId,
  getActiveTab,
  getRoadmapActiveWeek,
} from "@/lib/shsatStorage";

interface CrossDeviceSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CrossDeviceSyncModal({
  isOpen,
  onClose,
}: CrossDeviceSyncModalProps) {
  const [mode, setMode] = useState<"send" | "receive">("send");
  const [syncCode, setSyncCode] = useState<string>("");
  const [inputCode, setInputCode] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  // Gather all local storage state to cloud
  const handleGenerateCode = async () => {
    setIsLoading(true);
    setStatusMessage("");
    try {
      const payload: Record<string, any> = {
        targetSchoolId: getTargetSchoolId(),
        activeTab: getActiveTab(),
        roadmapWeek: getRoadmapActiveWeek(),
      };

      // Gather roadmap checks
      const roadmap = localStorage.getItem("shsat_roadmap_completed");
      if (roadmap) payload.roadmapCompleted = JSON.parse(roadmap);

      // Gather streak
      const streak = localStorage.getItem("shsat_daily_streak_count");
      if (streak) payload.dailyStreak = parseInt(streak, 10);
      const streakDate = localStorage.getItem("shsat_daily_streak_date");
      if (streakDate) payload.dailyStreakDate = streakDate;

      // Gather mistakes
      const mistakes = localStorage.getItem("shsat_mistakes");
      if (mistakes) payload.mistakes = JSON.parse(mistakes);

      // Gather active exam sessions
      payload.sessions = getAllActiveSessions();

      const res = await fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payload }),
      });
      const data = await res.json();

      if (data.success && data.code) {
        setSyncCode(data.code);
        setIsSuccess(true);
      } else {
        setStatusMessage(data.error || "Failed to generate sync code.");
      }
    } catch {
      setStatusMessage("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  // Restore state from cloud code
  const handleRestoreFromCode = async () => {
    if (!inputCode.trim()) return;
    setIsLoading(true);
    setStatusMessage("");
    try {
      const code = inputCode.trim().toUpperCase();
      const res = await fetch(`/api/sync?code=${encodeURIComponent(code)}`);
      const data = await res.json();

      if (data.success && data.payload) {
        const p = data.payload;

        if (p.targetSchoolId) {
          localStorage.setItem("shsat_target_school", p.targetSchoolId);
        }
        if (p.activeTab) {
          localStorage.setItem("shsat_active_tab", p.activeTab);
        }
        if (p.roadmapWeek) {
          localStorage.setItem("shsat_roadmap_active_week", String(p.roadmapWeek));
        }
        if (p.roadmapCompleted) {
          localStorage.setItem("shsat_roadmap_completed", JSON.stringify(p.roadmapCompleted));
        }
        if (p.dailyStreak) {
          localStorage.setItem("shsat_daily_streak_count", String(p.dailyStreak));
        }
        if (p.dailyStreakDate) {
          localStorage.setItem("shsat_daily_streak_date", p.dailyStreakDate);
        }
        if (p.mistakes) {
          localStorage.setItem("shsat_mistakes", JSON.stringify(p.mistakes));
        }
        if (p.sessions) {
          for (const [examId, session] of Object.entries(p.sessions)) {
            localStorage.setItem(`shsat_session_${examId}`, JSON.stringify(session));
          }
          const activeIds = Object.keys(p.sessions);
          localStorage.setItem("shsat_active_sessions", JSON.stringify(activeIds));
        }

        setIsSuccess(true);
        setStatusMessage("Sync successful! Reloading to restore your session...");
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      } else {
        setStatusMessage(data.error || "Invalid or expired sync code.");
      }
    } catch {
      setStatusMessage("Failed to fetch session. Please verify the code.");
    } finally {
      setIsLoading(false);
    }
  };

  const syncUrl = typeof window !== "undefined" && syncCode
    ? `${window.location.origin}/shsat?sync=${syncCode}`
    : "";

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-lg overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">
                Cross-Device Cloud Sync
              </h3>
              <p className="text-xs text-slate-400">
                Continue your practice on your phone, tablet, or laptop
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex p-3 bg-slate-950/60 border-b border-slate-800 gap-2">
          <button
            onClick={() => {
              setMode("send");
              setIsSuccess(false);
              setStatusMessage("");
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all ${
              mode === "send"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "bg-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Send to Phone / Other Device</span>
          </button>

          <button
            onClick={() => {
              setMode("receive");
              setIsSuccess(false);
              setStatusMessage("");
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all ${
              mode === "receive"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "bg-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Enter Sync Code</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {mode === "send" ? (
            <div className="space-y-4">
              <p className="text-xs text-slate-300 leading-relaxed">
                Generate a secure, 1-click sync link to instantly transfer all active mock exams, roadmap progress, mistake notes, and test answers to your smartphone or school Chromebook.
              </p>

              {!syncCode ? (
                <button
                  onClick={handleGenerateCode}
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2 transition-all hover:scale-[1.01]"
                >
                  {isLoading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                  <span>{isLoading ? "Generating Sync Code..." : "Create 6-Digit Transfer Code"}</span>
                </button>
              ) : (
                <div className="space-y-3 bg-slate-950/70 border border-slate-800 p-4 rounded-2xl text-center">
                  <span className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
                    Your 6-Character Sync Code
                  </span>
                  <div className="text-3xl font-extrabold text-amber-400 font-mono tracking-widest my-1">
                    {syncCode}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    On your phone, open <strong>shsat-ace.onrender.com</strong>, click <strong>Sync</strong> and enter this code.
                  </p>

                  <div className="pt-2 flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={syncUrl}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-300 font-mono select-all"
                    />
                    <button
                      onClick={() => handleCopy(syncUrl)}
                      className="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-1.5 transition-colors shrink-0"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-slate-300 leading-relaxed">
                Enter the 6-character code from your other device to instantly load your active exam session, answers, and study roadmap.
              </p>

              <div className="space-y-2">
                <input
                  type="text"
                  maxLength={6}
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                  placeholder="e.g. BTECH7"
                  className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-4 py-3.5 text-center text-xl font-mono tracking-widest uppercase font-bold text-amber-300 focus:outline-none focus:border-indigo-500"
                />

                <button
                  onClick={handleRestoreFromCode}
                  disabled={isLoading || inputCode.length < 4}
                  className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition-all flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Download className="w-4 h-4" />
                  )}
                  <span>{isLoading ? "Restoring..." : "Restore Study Session"}</span>
                </button>
              </div>
            </div>
          )}

          {statusMessage && (
            <div
              className={`p-3 rounded-xl border text-xs text-center font-medium ${
                isSuccess
                  ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300"
                  : "bg-rose-950/40 border-rose-500/40 text-rose-300"
              }`}
            >
              {statusMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
