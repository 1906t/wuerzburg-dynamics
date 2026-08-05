import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Würzburg Dynamics — Surgical Robotics",
  description:
    "China's first dual-path soft-tissue interventional surgical robot. Class III certified. Deployed in 80+ hospitals.",
  metadataBase: new URL("https://wuerzburg-dynamics.com"),
  openGraph: {
    title: "Würzburg Dynamics — Surgical Robotics",
    description: "China's first dual-path soft-tissue interventional surgical robot.",
    url: "https://wuerzburg-dynamics.com",
    siteName: "Würzburg Dynamics",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        />
      </head>
      <body className="min-h-full bg-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}
