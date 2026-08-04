"use client";

import { useEffect, useRef } from "react";

export default function SectionLine() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = "scaleX(1)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute top-0 inset-x-0 h-px overflow-hidden">
      <div
        ref={lineRef}
        style={{
          height: "100%",
          background: "#E5E5E4",
          transformOrigin: "left",
          transform: "scaleX(0)",
          transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}
