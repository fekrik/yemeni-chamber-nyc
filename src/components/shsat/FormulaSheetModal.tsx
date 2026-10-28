"use client";

import React from "react";
import { X, FileText, CheckCircle2 } from "lucide-react";

interface FormulaSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormulaSheetModal({
  isOpen,
  onClose,
}: FormulaSheetModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Official NYC SHSAT Math Reference Sheet
              </h3>
              <p className="text-xs text-slate-400">
                Authorized formulas for Grade 8 Specialized High Schools Admissions Test
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Conversions Note */}
          <div className="bg-indigo-950/40 border border-indigo-800/40 rounded-xl p-4 flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs text-indigo-200">
              <span className="font-semibold text-white">Test Day Rule: </span>
              In questions involving π, you may use π ≈ 3.14 or 22/7 unless instructed to leave the answer in terms of π. Angles in all figures are in degrees.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Area */}
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 space-y-2">
              <h4 className="font-bold text-amber-400 text-xs uppercase tracking-wider">
                Area Formulas
              </h4>
              <ul className="space-y-1.5 text-slate-200 font-mono text-xs">
                <li><span className="text-slate-400 font-sans">Rectangle:</span> A = l × w</li>
                <li><span className="text-slate-400 font-sans">Triangle:</span> A = ½ · b · h</li>
                <li><span className="text-slate-400 font-sans">Circle:</span> A = π · r²</li>
                <li><span className="text-slate-400 font-sans">Parallelogram:</span> A = b · h</li>
                <li><span className="text-slate-400 font-sans">Trapezoid:</span> A = ½ · (b₁ + b₂) · h</li>
              </ul>
            </div>

            {/* Perimeter & Circumference */}
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 space-y-2">
              <h4 className="font-bold text-emerald-400 text-xs uppercase tracking-wider">
                Circumference & Angles
              </h4>
              <ul className="space-y-1.5 text-slate-200 font-mono text-xs">
                <li><span className="text-slate-400 font-sans">Circumference:</span> C = 2 · π · r = π · d</li>
                <li><span className="text-slate-400 font-sans">Triangle Sum:</span> ∠A + ∠B + ∠C = 180°</li>
                <li><span className="text-slate-400 font-sans">Supplementary:</span> Sum = 180° (Linear Pair)</li>
                <li><span className="text-slate-400 font-sans">Complementary:</span> Sum = 90°</li>
                <li><span className="text-slate-400 font-sans">Polygon Interior:</span> (n - 2) × 180°</li>
              </ul>
            </div>

            {/* Volume */}
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 space-y-2">
              <h4 className="font-bold text-cyan-400 text-xs uppercase tracking-wider">
                3D Solid Volumes
              </h4>
              <ul className="space-y-1.5 text-slate-200 font-mono text-xs">
                <li><span className="text-slate-400 font-sans">Rectangular Prism:</span> V = l · w · h</li>
                <li><span className="text-slate-400 font-sans">Cylinder:</span> V = π · r² · h</li>
                <li><span className="text-slate-400 font-sans">Right Cone:</span> V = ⅓ · π · r² · h</li>
                <li><span className="text-slate-400 font-sans">Sphere:</span> V = ⁴⁄₃ · π · r³</li>
                <li><span className="text-slate-400 font-sans">Surface Area (Prism):</span> 2(lw + lh + wh)</li>
              </ul>
            </div>

            {/* Algebra & Coordinate Geometry */}
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 space-y-2">
              <h4 className="font-bold text-purple-400 text-xs uppercase tracking-wider">
                Algebra & Coordinate Geometry
              </h4>
              <ul className="space-y-1.5 text-slate-200 font-mono text-xs">
                <li><span className="text-slate-400 font-sans">Pythagorean Theorem:</span> a² + b² = c²</li>
                <li><span className="text-slate-400 font-sans">Common Triples:</span> 3-4-5, 5-12-13, 8-15-17</li>
                <li><span className="text-slate-400 font-sans">Slope (m):</span> (y₂ - y₁) / (x₂ - x₁)</li>
                <li><span className="text-slate-400 font-sans">Slope-Intercept:</span> y = mx + b</li>
                <li><span className="text-slate-400 font-sans">Percent Change:</span> (New - Old) / Old × 100%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/90 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Close Reference Sheet
          </button>
        </div>
      </div>
    </div>
  );
}
