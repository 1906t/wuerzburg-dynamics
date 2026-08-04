"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  value: number;      // 0–100
  label: string;
  sublabel: string;
  size?: number;
}

const R = 52;
const CIRC = 2 * Math.PI * R;

export default function StatRing({ value, label, sublabel, size = 140 }: Props) {
  const circleRef = useRef<SVGCircleElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    const textEl = textRef.current;
    if (!circle || !textEl) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const targetOffset = CIRC * (1 - value / 100);

    if (reduced) {
      circle.style.strokeDashoffset = String(targetOffset);
      textEl.textContent = label;
      return;
    }

    const obj = { val: 0, offset: CIRC };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: value,
        offset: targetOffset,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: circle,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate() {
          circle.style.strokeDashoffset = String(obj.offset);
          textEl.textContent = `${Math.round(obj.val)}${label.includes("%") ? "%" : "+"}`;
        },
        onComplete() {
          textEl.textContent = label;
        },
      });
    });

    return () => ctx.revert();
  }, [value, label]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
          {/* track */}
          <circle
            cx="60" cy="60" r={R}
            stroke="#E5E5E4"
            strokeWidth="5"
            fill="none"
          />
          {/* progress */}
          <circle
            ref={circleRef}
            cx="60" cy="60" r={R}
            stroke="#0B0B0B"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={CIRC}
            style={{ transform: "rotate(-90deg)", transformOrigin: "60px 60px" }}
          />
        </svg>
        {/* value label centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            ref={textRef}
            className="font-display font-700 text-ink"
            style={{ fontSize: size * 0.2 }}
          >
            0
          </span>
        </div>
      </div>
      <p className="text-[12px] font-[400] text-[#6B6B6B] text-center leading-[1.5] max-w-[120px]">
        {sublabel}
      </p>
    </div>
  );
}
