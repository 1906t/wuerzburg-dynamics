import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";

const metrics = [
  { value: "100+", label: "Patents", sub: "Over 70% invention patents" },
  { value: "70%+", label: "R&D Workforce", sub: "Engineering-led organisation" },
  { value: "Series B", label: "Financing", sub: "110M+ RMB raised to date" },
  { value: "Class III", label: "NMPA Certified", sub: "China's highest device standard" },
  { value: "80+", label: "Hospital Partners", sub: "Deployed across China" },
  { value: "9", label: "Software Copyrights", sub: "Proprietary platform IP" },
];

const awards = [
  { title: "National High-Tech Enterprise", body: "Recognised by China's Ministry of Science and Technology." },
  { title: "\"Little Giant\" Enterprise", body: "National-level Specialised and Innovative designation." },
  { title: "Qianhai GHK-Taiwan Competition", body: "Bronze Award — Enterprise Growth Group." },
  { title: "Shenzhen Innovation & Entrepreneurship", body: "Excellence Award." },
  { title: "China Innovation & Entrepreneurship", body: "Excellence Award — Growth Group." },
];

const exploreCards = [
  {
    title: "Leadership",
    body: "Meet the founding team of PhDs and engineers behind the platform.",
    href: "/about/team",
    cta: "Coming soon",
    disabled: true,
  },
  {
    title: "Our Location",
    body: "Headquartered in Shenzhen's Pingshan District, China's medical device innovation hub.",
    href: "#location",
    cta: "View location →",
    disabled: false,
  },
  {
    title: "Recognition",
    body: "National High-Tech Enterprise, \"Little Giant\" designation, and multiple competition awards.",
    href: "#recognition",
    cta: "View awards →",
    disabled: false,
  },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="en" />

      <main className="flex-1 pt-24" style={{ position: "relative", zIndex: 1 }}>

        {/* Hero */}
        <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-24 min-h-[60vh] flex items-center">
          <div className="max-w-[1200px] mx-auto w-full">
            <ScrollReveal delay={0.1}>
              <div className="label-caps mb-8">Who We Are</div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={60}>
              <h1
                className="font-display font-700 text-ink leading-[1.0] tracking-[-0.01em] mb-8"
                style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
              >
                Built by scientists.<br />Deployed in<br />operating rooms.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <p className="text-[17px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[560px]">
                Würzburg Dynamics is the only company in China that simultaneously masters
                intraoperative CT and intraoperative ultrasound robotic guidance — a dual-path
                platform that has received China&apos;s Class III medical device registration
                and is now deployed across 80+ hospitals nationwide.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Story */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">Our Story</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-10"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                Founded to solve a problem<br />most surgeons accept as inevitable.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal delay={0.1}>
                <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-6">
                  Würzburg Dynamics was co-founded in December 2019 by a team of overseas PhDs
                  with deep experience at globally renowned institutions — Siemens (Germany),
                  Philips (China), the Max Planck Institute (Germany), Heidelberg University
                  (Germany), and the University of Bern (Switzerland).
                </p>
                <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8]">
                  The founding observation was straightforward: percutaneous interventions —
                  biopsies, ablations, particle implants — remained largely operator-dependent
                  decades after the rest of interventional medicine had standardised. A surgeon&apos;s
                  ability to hit a 5 mm target inside a moving lung determined outcomes more than
                  the drug or the device. We set out to change that.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-6">
                  The platform we built brings together fully automated intraoperative 3D
                  reconstruction, AI-driven surgical planning, near-infrared real-time tracking,
                  and a high-DOF robotic arm — all integrated into a workflow that requires no
                  change to existing clinical practice. The surgeon remains in control; the
                  system ensures precision.
                </p>
                <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8]">
                  With over 70% of our workforce in R&D, 100+ patents (70%+ invention patents),
                  and China&apos;s highest-tier Class III device registration, we are expanding
                  deployment to leading hospitals across the country — and building toward
                  international markets.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* By the Numbers */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">By the Numbers</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-12"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                A deep-tech company<br />built for the long run.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-[#E5E5E4]">
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`p-8 ${
                    i % 3 < 2 ? "border-r border-[#E5E5E4]" : ""
                  } ${i < 3 ? "border-b border-[#E5E5E4]" : ""}`}
                >
                  <div
                    className="font-display font-700 text-ink mb-1"
                    style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
                  >
                    {m.value}
                  </div>
                  <div className="font-display font-600 text-[14px] text-ink mb-1">{m.label}</div>
                  <div className="text-[12px] font-[300] text-[#6B6B6B]">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Further */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">Explore Further</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-12"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                More about<br />Würzburg Dynamics.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E5E5E4]">
              {exploreCards.map((c, i) => (
                <div
                  key={c.title}
                  className={`p-8 flex flex-col ${i < exploreCards.length - 1 ? "border-b md:border-b-0 md:border-r border-[#E5E5E4]" : ""}`}
                >
                  <div className="font-display font-600 text-[18px] text-ink mb-3">{c.title}</div>
                  <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.65] flex-1 mb-6">{c.body}</p>
                  {c.disabled ? (
                    <span className="text-[12px] text-[#C0C0BE] tracking-[0.04em]">{c.cta}</span>
                  ) : (
                    <Link
                      href={c.href}
                      className="text-[12px] font-500 text-ink tracking-[0.02em] hover:text-[#6B6B6B] transition-colors duration-150"
                    >
                      {c.cta}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">Our Location</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-10"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                Shenzhen, China.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <ScrollReveal>
                <div className="border-t-2 border-ink pt-6">
                  <div className="font-display font-600 text-[16px] text-ink mb-2">Headquarters</div>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    深圳惟德精准医疗科技有限公司<br />
                    Würzburg Dynamics (Shenzhen) Ltd.<br />
                    Pingshan District, Shenzhen<br />
                    Guangdong Province, China
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="border-t-2 border-ink pt-6">
                  <div className="font-display font-600 text-[16px] text-ink mb-2">Contact</div>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    info@wuerzburg-dynamics.com<br />
                    +86 (0)755 8966 6820
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section id="recognition" className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">Recognition</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-12"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                Awards &amp; designations.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#E5E5E4]">
              {awards.map((a, i) => (
                <div
                  key={a.title}
                  className={`p-8 ${i % 2 === 0 ? "md:border-r border-[#E5E5E4]" : ""} ${i < awards.length - 1 ? "border-b border-[#E5E5E4]" : ""}`}
                >
                  <div className="font-display font-600 text-[15px] text-ink mb-2">{a.title}</div>
                  <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.65]">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5E5E4] px-8 md:px-16 lg:px-24 xl:px-32 py-6" style={{ position: "relative", zIndex: 1 }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <span className="text-[11px] text-[#6B6B6B] tracking-[0.04em]">
            © 2025 Würzburg Dynamics · 深圳惟德精准医疗科技有限公司
          </span>
          <span className="text-[11px] text-[#6B6B6B] tracking-[0.04em]">
            info@wuerzburg-dynamics.com
          </span>
        </div>
      </footer>
    </div>
  );
}
