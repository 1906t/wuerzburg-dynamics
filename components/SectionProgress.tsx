"use client";

import { useEffect, useState } from "react";

export interface Section {
  id: string;
  label: string;
}

interface Props {
  sections: Section[];
}

export default function SectionProgress({ sections }: Props) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reveal the rail only once the user has left the hero
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex flex-col gap-4 fixed right-8 top-1/2 -translate-y-1/2 z-40 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            className="group flex items-center gap-3 justify-end"
            aria-label={s.label}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`text-[10px] font-500 tracking-[0.1em] uppercase whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
              style={{ color: isActive ? "#0B0B0B" : "#6B6B6B" }}
            >
              {s.label}
            </span>
            <span
              className="rounded-full transition-all duration-300 flex-shrink-0"
              style={{
                width: isActive ? 10 : 6,
                height: isActive ? 10 : 6,
                background: isActive ? "#0B0B0B" : "#C8C8C6",
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
