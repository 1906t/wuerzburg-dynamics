import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white">{children}</body>
    </html>
  );
}
