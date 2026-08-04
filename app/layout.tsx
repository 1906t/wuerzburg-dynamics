import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Würzberg Dynamics — Surgical Robotics",
  description:
    "China's first dual-path soft-tissue interventional surgical robot. Class III certified. Deployed in 100+ hospitals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-gray-900">{children}</body>
    </html>
  );
}
