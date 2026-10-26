"use client";

import React from "react";

interface ChamberLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Official Seal & Crest of the Yemeni Chamber of Commerce NYC (YCC-NYC)
 * Combines:
 * - Traditional Yemeni Qamariya (arch motif)
 * - NYC Skyline & Bridge silhouette inside the arch
 * - Port of Al-Mokha Coffee Branch & 5 Stars for NYC's 5 Boroughs
 */
export default function ChamberLogo({
  size = "md",
  className = "",
}: ChamberLogoProps) {
  const dimensions =
    size === "sm" ? "w-10 h-10" : size === "lg" ? "w-20 h-20" : "w-12 h-12";

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${dimensions} ${className}`}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
        aria-label="Yemeni Chamber of Commerce NYC Crest"
      >
        <defs>
          <linearGradient
            id="yccGoldGrad"
            x1="15"
            y1="10"
            x2="105"
            y2="110"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="45%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#9A6F1A" />
          </linearGradient>

          <linearGradient
            id="yccInnerBg"
            x1="60"
            y1="12"
            x2="60"
            y2="108"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#0F1F1C" />
            <stop offset="100%" stopColor="#090D0C" />
          </linearGradient>
        </defs>

        {/* Outer Institutional Seal Ring */}
        <circle
          cx="60"
          cy="60"
          r="56"
          fill="url(#yccInnerBg)"
          stroke="url(#yccGoldGrad)"
          strokeWidth="3"
        />

        {/* Subtle Inner Filigree Ring */}
        <circle
          cx="60"
          cy="60"
          r="49"
          stroke="url(#yccGoldGrad)"
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.65"
        />

        {/* 5 Stars at Top representing the 5 Boroughs of NYC */}
        <g fill="url(#yccGoldGrad)">
          <circle cx="40" cy="22" r="1.7" />
          <circle cx="49" cy="18.5" r="2" />
          <circle cx="60" cy="17" r="2.4" />
          <circle cx="71" cy="18.5" r="2" />
          <circle cx="80" cy="22" r="1.7" />
        </g>

        {/* Sana'ani Qamariya Arch Frame */}
        <path
          d="M32 76V54C32 38.536 44.536 26 60 26C75.464 26 88 38.536 88 54V76H32Z"
          stroke="url(#yccGoldGrad)"
          strokeWidth="2.2"
          fill="#0C1715"
        />

        {/* Geometric Qamariya Fan Lines Inside Top of Arch */}
        <path
          d="M60 26V48M60 48L41 34M60 48L79 34M40 48H80"
          stroke="url(#yccGoldGrad)"
          strokeWidth="1"
          opacity="0.45"
        />

        {/* Minimalist NYC Skyline & Spire Silhouette Rising in Center */}
        <path
          d="M38 75V60H45V75M48 75V51H55V75M57 75V38L60 31L63 38V75M65 75V53H72V75M75 75V62H82V75"
          stroke="url(#yccGoldGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Base Horizon Line (Port of Al-Mokha to NY Harbor) */}
        <path
          d="M26 76H94"
          stroke="url(#yccGoldGrad)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Yemeni Coffee Laurel Branches (Left & Right) */}
        <path
          d="M34 86C42 93 50 96 60 96C70 96 78 93 86 86"
          stroke="url(#yccGoldGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Coffee Leaves & Berries */}
        <ellipse
          cx="43"
          cy="89"
          rx="4"
          ry="2"
          transform="rotate(-20 43 89)"
          fill="url(#yccGoldGrad)"
        />
        <ellipse
          cx="77"
          cy="89"
          rx="4"
          ry="2"
          transform="rotate(20 77 89)"
          fill="url(#yccGoldGrad)"
        />
        <circle cx="60" cy="96" r="2.6" fill="#10B981" stroke="url(#yccGoldGrad)" strokeWidth="1" />
      </svg>
    </div>
  );
}
