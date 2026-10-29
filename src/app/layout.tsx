import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#070A09",
};

export const metadata: Metadata = {
  title:
    "Yemeni Chamber of Commerce NYC | الغرفة التجارية اليمنية في نيويورك",
  description:
    "Empowering 6,000+ Yemeni-owned bodegas, specialty coffee houses (Qahwah), restaurants, and entrepreneurs across NYC's 5 boroughs and nationwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-stone-950 text-stone-900">
        {children}
      </body>
    </html>
  );
}
