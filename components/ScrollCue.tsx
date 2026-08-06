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
        <span className="text-[10px] font-500 tracking-[0.14em] uppercase text-[#9B9B9B]">
          {label}
        </span>
      )}
      <span className="animate-scroll-cue">
        <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
          <path
            d="M9 2V21M9 21L2 14M9 21L16 14"
            stroke="#6B6B6B"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
