import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHSAT Ace | NYC Specialized High Schools Prep Academy",
  description:
    "Official CAT test simulations, 400+ authentic NYC DOE questions, 3-tier Socratic tutoring hints, trap explanations, and cutoff predictors for Stuyvesant, Bronx Science, and Brooklyn Tech.",
  openGraph: {
    title: "SHSAT Ace | NYC Specialized High Schools Prep",
    description:
      "Practice with realistic NYC DOE exams, step-by-step Socratic hints, and cutoff readiness calculator for 8th graders.",
    siteName: "SHSAT Ace",
  },
};

export default function ShsatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {children}
    </div>
  );
}
