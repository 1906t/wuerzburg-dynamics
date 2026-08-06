"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Badge {
  label: string;
  sub: string;
}

interface Props {
  badges: Badge[];
}

/**
 * Floating hero credential chips ("Class III NMPA", "≤ 0.8 mm accuracy").
 * On load they fly in across the hero from the left and settle at the right,
 * a targeting reticle locks onto each as it lands (echoing BackgroundCanvas),
 * then a barely-there idle float. Desktop-only (parent column is hidden md:block).
 * Respects prefers-reduced-motion: renders statically at rest, no motion.
 */
export default function CredentialBadges({ badges }: Props) {
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reticleRefs = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    const chips = chipRefs.current.filter(Boolean) as HTMLDivElement[];
    const reticles = reticleRefs.current;
    if (chips.length === 0) return;

    // respect prefers-reduced-motion — leave chips at rest, reticles hidden
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      chips.forEach((chip, i) => {
        const at = i === 0 ? 0.3 : "<0.18"; // second chip staggers off the first
        tl.from(chip, { x: -480, opacity: 0, duration: 0.9 }, at);

        const reticle = reticles[i];
        if (reticle) {
          // lock on as the chip nears its landing…
          tl.fromTo(
            reticle,
            { scale: 1.5, opacity: 0, transformOrigin: "center" },
            { scale: 1, opacity: 0.85, duration: 0.35, ease: "power2.out" },
            "<0.45"
          );
          // …then dissipate, leaving the chip clean
          tl.to(
            reticle,
            { scale: 0.92, opacity: 0, duration: 0.5, ease: "power2.in" },
            ">-0.05"
          );
        }
      });

      // barely-there idle float once everything has settled
      tl.to(
        chips,
        {
          y: "-=4",
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.4,
        },
        ">-0.2"
      );
    });

    return () => ctx.revert();
  }, [badges]);

  return (
    <div className="absolute bottom-16 right-8 z-20 flex flex-col items-end gap-3">
      {badges.map((b, i) => (
        <div
          key={b.label}
          ref={(el) => {
            chipRefs.current[i] = el;
          }}
          className="relative"
        >
          <div className="bg-white border border-[#E5E5E4] shadow-sm px-4 py-2.5 flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#0B0B0B] flex items-center justify-center flex-shrink-0">
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path
                  d="M1 4L3.5 6.5L9 1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-[11px] font-600 text-ink tracking-[0.04em] uppercase">
                {b.label}
              </div>
              <div className="text-[10px] font-[300] text-[#6B6B6B]">{b.sub}</div>
            </div>
          </div>

          {/* Targeting reticle overlay — matches BackgroundCanvas drawReticle */}
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <svg
              ref={(el) => {
                reticleRefs.current[i] = el;
              }}
              width="104"
              height="104"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
              style={{ opacity: 0 }}
            >
              <circle cx="50" cy="50" r="34" stroke="#7A7A78" strokeWidth="1.2" opacity="0.9" />
              <circle cx="50" cy="50" r="16" stroke="#7A7A78" strokeWidth="0.9" opacity="0.6" />
              <g stroke="#7A7A78" strokeWidth="0.7" opacity="0.5" strokeLinecap="round">
                <line x1="4" y1="50" x2="32" y2="50" />
                <line x1="68" y1="50" x2="96" y2="50" />
                <line x1="50" y1="4" x2="50" y2="32" />
                <line x1="50" y1="68" x2="50" y2="96" />
              </g>
              <g stroke="#7A7A78" strokeWidth="0.6" opacity="0.4" strokeLinecap="round">
                <line x1="63.2" y1="63.2" x2="70.5" y2="70.5" />
                <line x1="36.8" y1="63.2" x2="29.5" y2="70.5" />
                <line x1="36.8" y1="36.8" x2="29.5" y2="29.5" />
                <line x1="63.2" y1="36.8" x2="70.5" y2="29.5" />
              </g>
              <circle cx="50" cy="50" r="1.4" fill="#7A7A78" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}
