"use client";

import { useState } from "react";
import PersonPhoto from "@/components/PersonPhoto";

export interface Leader {
  name: string;
  role: string;
  image: string;
  credentials: string[];
  bio: string[];
  former: string[];
  formerLabel: string;
}

interface Props {
  leaders: Leader[];
}

export default function LeadershipGrid({ leaders }: Props) {
  const [selected, setSelected] = useState<Leader | null>(null);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border border-[#E5E5E4]">
        {leaders.map((person, i) => (
          <button
            key={person.name}
            onClick={() => setSelected(person)}
            className={`group flex flex-col items-center text-center p-6 cursor-pointer transition-colors duration-150 hover:bg-[#F9F9F8]
              ${(i + 1) % 5 !== 0 ? "border-r border-[#E5E5E4]" : ""}
              ${i < leaders.length - (leaders.length % 5 || 5) ? "border-b border-[#E5E5E4]" : ""}
            `}
          >
            {/* Photo */}
            <div className="mb-4 transition-opacity duration-150 group-hover:opacity-90">
              <PersonPhoto src={person.image} name={person.name} size={110} />
            </div>

            {/* Name — always visible */}
            <div className="font-display font-600 text-[14px] text-ink leading-tight mb-1.5 min-h-[2.5em] flex items-center justify-center">
              {person.name}
            </div>

            {/* Role — fades in on hover */}
            <div className="text-[11px] font-[400] text-[#6B6B6B] tracking-[0.02em] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-200 min-h-[1.4em]">
              {person.role}
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(0,0,0,0.45)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white w-full max-w-[660px] max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header: photo + name + role + close */}
            <div className="flex items-start gap-6 p-8 border-b border-[#E5E5E4]">
              <PersonPhoto src={selected.image} name={selected.name} size={80} />
              <div className="flex-1 pt-1">
                <h2 className="font-display font-700 text-ink leading-tight mb-2" style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>
                  {selected.name}
                </h2>
                <div className="label-caps text-[10px]">{selected.role}</div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-[#BBBBBB] hover:text-ink transition-colors duration-150 text-[22px] leading-none mt-0.5 shrink-0"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="p-8 space-y-6">
              {/* Credentials */}
              <ul className="space-y-2">
                {selected.credentials.map((c) => (
                  <li key={c} className="flex gap-2.5 text-[13px] font-[300] text-[#6B6B6B] leading-[1.6]">
                    <span className="text-[#CCCCCA] shrink-0 mt-[2px]">—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              {/* Bio */}
              <div className="space-y-3 pt-4 border-t border-[#F0F0EE]">
                {selected.bio.map((b) => (
                  <p key={b} className="text-[14px] font-[300] text-[#4a4a4a] leading-[1.75]">
                    {b}
                  </p>
                ))}
              </div>

              {/* Former positions */}
              <div className="pt-4 border-t border-[#F0F0EE]">
                <div className="text-[10px] font-500 tracking-[0.1em] uppercase text-[#AAAAAA] mb-3">
                  {selected.formerLabel}
                </div>
                <ul className="flex flex-wrap gap-2">
                  {selected.former.map((f) => (
                    <li key={f} className="text-[12px] font-[300] text-[#6B6B6B] border border-[#E5E5E4] px-3 py-1">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
