"use client";

import React, { useState, useEffect } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from "lucide-react";

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title?: string;
  prompt?: string;
}

export default function ImageZoomModal({
  isOpen,
  onClose,
  imageSrc,
  title = "Question Detail & Diagram",
  prompt,
}: ImageZoomModalProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  useEffect(() => {
    if (isOpen) {
      setZoomLevel(100);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 30, 300));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 30, 60));
  const handleResetZoom = () => setZoomLevel(100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Top Bar with Controls */}
        <div className="p-3 sm:p-4 border-b border-slate-800 bg-slate-900/95 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-2">
            <Maximize2 className="w-4 h-4 text-amber-400" />
            <h3 className="font-bold text-white text-sm truncate max-w-xs sm:max-w-md">
              {title}
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            {/* Zoom Controls */}
            <div className="flex items-center space-x-1 bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 60}
                className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-300 disabled:opacity-30"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="font-mono px-2 text-xs font-bold text-amber-300 min-w-[50px] text-center">
                {zoomLevel}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 300}
                className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-300 disabled:opacity-30"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-300 ml-1 border-l border-slate-700 pl-2"
                title="Reset to 100%"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Optional Prompt banner */}
        {prompt && (
          <div className="px-5 py-3 bg-indigo-950/40 border-b border-indigo-900/30 text-xs sm:text-sm text-indigo-100 font-medium shrink-0 leading-relaxed">
            <span className="font-bold text-amber-400 mr-1.5">Question Prompt:</span>
            {prompt}
          </div>
        )}

        {/* Scrollable / Zoomable Image Canvas */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-950 flex items-center justify-center">
          <div
            className="transition-all duration-150 ease-out flex justify-center items-center"
            style={{ width: `${zoomLevel}%` }}
          >
            <img
              src={imageSrc}
              alt={title}
              className="rounded-xl shadow-2xl border border-slate-700 bg-white object-contain w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
