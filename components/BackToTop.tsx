"use client";

interface Props {
  label?: string;
  narrow?: boolean;
}

export default function BackToTop({ label = "Back to top", narrow = false }: Props) {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section
      className={`relative pb-16 ${narrow ? "px-6" : "px-8 md:px-16 lg:px-24 xl:px-32"}`}
      style={{ zIndex: 1 }}
    >
      <div className={`${narrow ? "max-w-[720px]" : "max-w-[1200px]"} mx-auto`}>
        <button
          onClick={toTop}
          className="group w-full border border-[#E5E5E4] hover:border-ink transition-colors duration-200 py-6 flex items-center justify-center gap-3"
          aria-label={label}
        >
          <span className="text-ink group-hover:-translate-y-0.5 transition-transform duration-200">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 13V1M7 1L2 6M7 1L12 6"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[11px] font-500 tracking-[0.12em] uppercase text-[#6B6B6B] group-hover:text-ink transition-colors duration-200">
            {label}
          </span>
        </button>
      </div>
    </section>
  );
}
