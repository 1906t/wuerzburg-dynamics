"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  name: string;
  zh: string;
  body: string;
  circleOffset?: number;
}

export default function TechCard({ name, zh, body, circleOffset = 0 }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<SVGRectElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const rect = rectRef.current;
    if (!card || !rect) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const w = card.offsetWidth;
          const h = card.offsetHeight;
          const perimeter = 2 * (w + h);
          rect.setAttribute("stroke-dasharray", String(perimeter));
          rect.setAttribute("stroke-dashoffset", String(perimeter));
          requestAnimationFrame(() => {
            rect.style.transition = "stroke-dashoffset 0.9s cubic-bezier(0.16, 1, 0.3, 1)";
            rect.setAttribute("stroke-dashoffset", "0");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden cursor-default select-none"
      style={{ minHeight: 220 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* SVG animated border */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <rect
          ref={rectRef}
          x="0.5"
          y="0.5"
          width="calc(100% - 1px)"
          height="calc(100% - 1px)"
          fill="none"
          stroke={hovered ? "#0B0B0B" : "#C8C8C6"}
          strokeWidth="1"
          style={{ transition: "stroke 0.25s ease" }}
        />
      </svg>

      {/* Decorative concentric circles — visible in default, fades on hover */}
      <svg
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          right: -20 + circleOffset,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: hovered ? 0 : 0.18,
          transition: "opacity 0.3s ease",
          zIndex: 0,
          width: 160,
          height: 160,
        }}
        viewBox="0 0 160 160"
      >
        <circle cx="80" cy="80" r="72" fill="none" stroke="#7A7A78" strokeWidth="0.8" />
        <circle cx="80" cy="80" r="52" fill="none" stroke="#7A7A78" strokeWidth="0.7" />
        <circle cx="80" cy="80" r="34" fill="none" stroke="#7A7A78" strokeWidth="0.6" />
        <circle cx="80" cy="80" r="18" fill="none" stroke="#7A7A78" strokeWidth="0.5" />
        <line x1="80" y1="6" x2="80" y2="18" stroke="#7A7A78" strokeWidth="0.6" />
        <line x1="80" y1="142" x2="80" y2="154" stroke="#7A7A78" strokeWidth="0.6" />
        <line x1="6" y1="80" x2="18" y2="80" stroke="#7A7A78" strokeWidth="0.6" />
        <line x1="142" y1="80" x2="154" y2="80" stroke="#7A7A78" strokeWidth="0.6" />
        <circle cx="80" cy="80" r="3" fill="#7A7A78" fillOpacity="0.4" />
      </svg>

      {/* DEFAULT: large component name centred */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          zIndex: 2,
          opacity: hovered ? 0 : 1,
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          pointerEvents: "none",
        }}
      >
        <span
          className="font-display font-700 text-ink leading-none tracking-[-0.01em]"
          style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
        >
          {name}
        </span>
        <span className="text-[13px] text-[#6B6B6B] font-[400] mt-3 tracking-[0.04em]">{zh}</span>
      </div>

      {/* HOVER: description text */}
      <div
        className="relative p-8"
        style={{
          zIndex: 3,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.25s ease, transform 0.3s ease",
        }}
      >
        <div className="flex items-baseline gap-3 mb-3">
          <span className="font-display font-700 text-[18px] text-ink">{name}</span>
          <span className="text-[12px] text-[#6B6B6B] font-[400]">{zh}</span>
        </div>
        <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.65]">{body}</p>
      </div>
    </div>
  );
}
