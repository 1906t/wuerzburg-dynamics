"use client";

import { useEffect, useState } from "react";

interface Props {
  targetId: string;
  label?: string;
}

export default function ScrollCue({ targetId, label }: Props) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollDown = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollDown}
      aria-label={label ?? "Scroll down"}
      className="hidden md:flex flex-col items-center gap-2 transition-opacity duration-500"
      style={{ opacity: hidden ? 0 : 1, pointerEvents: hidden ? "none" : "auto" }}
    >
      {label && (
        <span className="text-[11px] font-600 tracking-[0.16em] uppercase text-[#2A2A2A]">
          {label}
        </span>
      )}
      <span className="animate-scroll-cue">
        <svg width="22" height="28" viewBox="0 0 18 24" fill="none">
          <path
            d="M9 2V21M9 21L2 14M9 21L16 14"
            stroke="#1A1A1A"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
