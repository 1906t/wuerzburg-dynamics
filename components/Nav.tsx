"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  lang: "en" | "zh";
}

export default function Nav({ lang }: NavProps) {
  const pathname = usePathname();

  const isEn = lang === "en";

  const home = isEn ? "/" : "/zh";
  const about = isEn ? "/about" : "/zh/about";
  const investor = isEn ? "/investor" : "/zh/investor";
  const partner = isEn ? "/partner" : "/zh/partner";
  const news = isEn ? "/news" : "/zh/news";
  const contact = isEn ? "/contact" : "/zh/contact";
  const toggleLang = isEn
    ? pathname.replace(/^\//, "/zh/").replace(/^\/zh\/zh/, "/zh")
    : pathname === "/zh"
    ? "/"
    : pathname.replace(/^\/zh/, "");
  const toggleLabel = isEn ? "中文" : "EN";

  const isAbout = pathname.includes("about");
  const isInvestor = pathname.includes("investor");
  const isPartner = pathname.includes("partner");
  const isNews = pathname.includes("news");

  const navLink = (active: boolean) =>
    active
      ? "text-[13px] font-500 text-ink border-b border-ink pb-px"
      : "text-[13px] font-[450] text-[#6B6B6B] hover:text-ink transition-colors duration-150";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E5E4]">
      <div className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4">
        <Link href={home}>
          <Image
            src="/logo.png"
            alt="Würzburg Dynamics 惟德精准"
            height={28}
            width={140}
            style={{ objectFit: "contain", objectPosition: "left" }}
            priority
          />
        </Link>
        <nav className="flex items-center gap-3 sm:gap-5 md:gap-8">
          <Link href={about} className={navLink(isAbout)}>
            {isEn ? "About" : "关于我们"}
          </Link>
          <Link href={investor} className={`${navLink(isInvestor)} hidden sm:inline`}>
            {isEn ? "Investors" : "投资人"}
          </Link>
          <Link href={partner} className={`${navLink(isPartner)} hidden sm:inline`}>
            {isEn ? "Partners" : "合作伙伴"}
          </Link>
          <Link href={news} className={navLink(isNews)}>
            {isEn ? "News" : "新闻"}
          </Link>
          <Link
            href={contact}
            className="text-[12px] sm:text-[13px] font-500 tracking-[0.01em] px-3 sm:px-4 py-1.5 bg-ink text-white hover:bg-[#2a2a2a] transition-colors duration-150"
          >
            {isEn ? "Contact" : "联系我们"}
          </Link>
          <Link
            href={toggleLang}
            className="text-[10px] sm:text-[11px] font-500 tracking-[0.08em] uppercase text-[#6B6B6B] hover:text-ink transition-colors duration-150 border border-[#E5E5E4] px-2 py-1"
          >
            {toggleLabel}
          </Link>
        </nav>
      </div>
      {/* German flag stripe */}
      <div className="flex h-[3px]">
        <div className="flex-1 bg-[#FFCC00]" />
        <div className="flex-1 bg-[#1a1a1a]" />
        <div className="flex-1 bg-[#CC0000]" />
      </div>
    </header>
  );
}
