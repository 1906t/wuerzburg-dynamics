import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";
import TechCard from "@/components/TechCard";

const badges = [
  { label: "Class III Certified", sub: "NMPA · China's highest device standard" },
  { label: "80+ Hospitals", sub: "Certified clinical partners across China" },
  { label: "3,000 Procedures", sub: "Clinical cases completed to date" },
  { label: "Series B", sub: "Backed by Fosun Pharma & institutional investors" },
];

const hospitalLogos = [1,2,3,4,5,6,7,8,9,10,11,23,24,26,27,28,29,30].map(
  (n) => `/images/hospitals/logo-${String(n).padStart(2, "0")}.png`
);

const painPoints = [
  {
    label: "Outcome depends on who holds the needle",
    body: "Percutaneous interventions have no standardised execution layer. Whether the needle finds the target depends on the surgeon's experience — making outcomes inconsistent across operators, hospitals, and career stages.",
  },
  {
    label: "The target moves. Guidance doesn't.",
    body: "Pulmonary lesions shift with every breath. CT imaging captures anatomy at a single moment. By the time the needle advances, the lesion has already moved. Standard systems have no real-time answer.",
  },
  {
    label: "Every missed pass multiplies risk",
    body: "When a needle misses, the procedure repeats. Each additional puncture raises the risk of pneumothorax, haemorrhage, and procedure time — complications caused by targeting failure, not the underlying disease.",
  },
  {
    label: "Radiation accumulates for the care team",
    body: "CT and X-ray-guided procedures keep personnel near the gantry. Across thousands of guided punctures, the cumulative radiation burden to surgeons, radiographers, and nurses is substantial.",
  },
  {
    label: "Complex cases are locked at elite centres",
    body: "Wide-angle trajectories, vascular-adjacent access, and cross-planar approaches require years of training. Most community hospitals cannot offer this care — patients travel hours for procedures that could be done locally.",
  },
  {
    label: "Experience cannot be transferred at scale",
    body: "A senior surgeon's intuition is not teachable in a residency programme. When that surgeon retires, the knowledge goes with them. The industry has no mechanism to codify and distribute procedural expertise.",
  },
];

const subsystems = [
  {
    name: "SuperBrain",
    zh: "超脑",
    body: "Fully automatic intraoperative CT 3D reconstruction in seconds. AI-driven organ segmentation and surgical path planning.",
  },
  {
    name: "SkyEye",
    zh: "天眼",
    body: "Near-infrared optical tracking system. Real-time spatial positioning with respiratory motion compensation.",
  },
  {
    name: "SmartArm",
    zh: "智手",
    body: "High-DOF robotic arm for precision needle guidance. One-click, fully automated path execution to target site.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="en" />

      {/* Hero */}
      <main className="flex-1 flex flex-col justify-center pt-20 sm:pt-24" style={{ position: "relative", zIndex: 1 }}>
        <section className="px-5 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="max-w-[1200px] mx-auto w-full">
          {/* Two-column on md+: left = all text, right = image spanning full height */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-12 min-h-[70vh] md:min-h-[calc(100vh-96px)] py-8 md:py-10">

            {/* Left: all text content */}
            <div className="flex-1 flex flex-col justify-center">

              <ScrollReveal delay={0.1}>
                <div className="label-caps mb-8">Soft-Tissue Surgical Robotics — Shenzhen</div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} y={60}>
                {/* H1 row: on mobile, image sits beside h1; on md+, h1 is full width of left col */}
                <div className="flex items-start gap-4 md:block mb-8">
                  <h1
                    className="flex-1 md:flex-none font-display font-700 text-ink leading-[1.0] tracking-[-0.01em] md:mb-0"
                    style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
                  >
                    China&apos;s leading intelligent surgical robot platform.
                  </h1>
                  {/* Mobile-only image — beside h1 */}
                  <div className="md:hidden shrink-0 relative aspect-[4/3]" style={{ width: "38%" }}>
                    <Image
                      src="/images/hero-patient.png"
                      alt="Würzburg Dynamics surgical robot in clinical use"
                      fill
                      style={{ objectFit: "contain", objectPosition: "top center" }}
                      priority
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <p className="text-[17px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[560px] mb-10">
                  Würzburg Dynamics is the only company in China with dual-path
                  intraoperative CT + ultrasound robotic guidance — NMPA Class III
                  certified and deployed across 80+ hospitals.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.45}>
                <div className="flex items-center gap-4 mb-10">
                  <Link
                    href="/investor"
                    className="px-7 py-3.5 bg-ink text-white text-[13px] font-500 tracking-[0.02em] hover:bg-[#2a2a2a] transition-colors duration-150"
                  >
                    For Investors
                  </Link>
                  <Link
                    href="/partner"
                    className="px-7 py-3.5 border border-ink text-ink text-[13px] font-500 tracking-[0.02em] hover:bg-[#F5F5F4] transition-colors duration-150"
                  >
                    For Partners
                  </Link>
                </div>
              </ScrollReveal>

              {/* Trust badges */}
              <div className="border-t border-[#E5E5E4] pt-8">
                <div className="grid grid-cols-2 gap-6 sm:gap-0 sm:grid-cols-4 sm:divide-x sm:divide-[#E5E5E4]">
                  {badges.map((b) => (
                    <div key={b.label} className="sm:px-8 first:pl-0 last:pr-0">
                      <div className="font-display font-600 text-[15px] tracking-[0.01em] text-ink mb-1">
                        {b.label}
                      </div>
                      <div className="text-[11px] font-[400] text-[#6B6B6B] tracking-[0.01em] leading-[1.5]">
                        {b.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: desktop-only image column */}
            <div className="hidden md:flex flex-shrink-0 md:w-[340px] lg:w-[460px] xl:w-[520px] items-center justify-center">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/hero-patient.png"
                  alt="Würzburg Dynamics surgical robot in clinical use"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  priority
                />
              </div>
            </div>

          </div>
          </div>
        </section>

        {/* Problem section */}
        <section className="relative py-16 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-5">The Problem We Solve</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-4"
                style={{ fontSize: "clamp(22px, 3.5vw, 42px)" }}
              >
                Interventional surgery still<br className="hidden sm:block" />runs on experience and instinct.
              </h2>
              <p className="text-[14px] md:text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] max-w-[600px] mb-10">
                Percutaneous procedures have not been standardised the way the rest of interventional medicine has. Six structural problems remain unsolved.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#E5E5E4]">
              {painPoints.map((p, i) => (
                <div
                  key={p.label}
                  className={`p-6 md:p-8 ${i % 2 === 0 ? "md:border-r border-[#E5E5E4]" : ""} ${i < 4 ? "border-b border-[#E5E5E4]" : ""}`}
                >
                  <div className="w-6 h-[2px] bg-[#CC0000] mb-4" />
                  <div className="font-display font-600 text-[14px] md:text-[15px] text-ink mb-2">{p.label}</div>
                  <p className="text-[12px] md:text-[13px] font-[300] text-[#6B6B6B] leading-[1.7]">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology — 3 subsystems */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">The Platform</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-4"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                Three integrated systems.<br />One seamless procedure.
              </h2>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.7] mb-10 max-w-[560px]">
                The platform doesn&apos;t change existing surgical workflow. It augments it —
                replacing guesswork with data, and manual positioning with robotic precision.
              </p>
            </ScrollReveal>

            {/* 3 animated TechCards */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {subsystems.map((s, i) => (
                <TechCard
                  key={s.name}
                  name={s.name}
                  zh={s.zh}
                  body={s.body}
                  circleOffset={i * 10}
                />
              ))}
            </div>
            <p className="text-[11px] font-[400] text-[#AAAAAA] tracking-[0.07em] uppercase mt-3 mb-12">
              Hover over each system to read ↑
            </p>

          </div>
        </section>

        {/* 4-step workflow */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="label-caps mb-6">How It Works</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-12"
              style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
            >
              Four steps. One CT scan.<br />Sub-millimetre precision.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#E5E5E4] mb-10">
              {[
                { step: "01", title: "CT Scan", body: "Near-infrared markers attached to patient body. CT imaging collects spatial data." },
                { step: "02", title: "3D Reconstruction", body: "One-click import of CT data. Fully automatic rapid 3D organ reconstruction." },
                { step: "03", title: "Surgical Planning", body: "AI intelligently identifies target point, generates real-time 3D surgical plan." },
                { step: "04", title: "Intelligent Navigation", body: "Six-axis robotic arm moves into position, assisting the surgeon to complete the puncture." },
              ].map((s, i) => (
                <div key={s.step} className={`p-6 ${i < 3 ? "border-r border-[#E5E5E4]" : ""}`}>
                  <div className="font-display font-700 text-[28px] text-[#E5E5E4] mb-3">{s.step}</div>
                  <div className="font-display font-600 text-[15px] text-ink mb-2">{s.title}</div>
                  <p className="text-[12px] font-[300] text-[#6B6B6B] leading-[1.6]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical applications */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="label-caps mb-6">Clinical Applications</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-12"
              style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
            >
              Wide range of procedures.<br />One platform.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Tissue Biopsy", body: "Tissue acquisition, pathological and immunohistochemical diagnosis, genomic analysis." },
                { title: "Tumor Ablation", body: "Improved conformity to planned paths. Reduced intraoperative risk. Enhanced therapy outcomes." },
                { title: "Thoracoscopic Localisation", body: "Automated 3D reconstruction and preoperative lesion localisation for thoracoscopic resection." },
                { title: "Drug & Seed Implantation", body: "Targeted radioactive seed therapy with precise implantation guidance." },
              ].map((a) => (
                <div key={a.title}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/bullet-point.png" alt="" width={22} height={22} className="mb-3" />
                  <div className="font-display font-600 text-[15px] text-ink mb-2">{a.title}</div>
                  <p className="text-[12px] font-[300] text-[#6B6B6B] leading-[1.6]">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hospital logos */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">Clinical Partners</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-3"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                Deployed across China&apos;s<br />leading hospitals.
              </h2>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.7] mb-10 max-w-[480px]">
                3,000 procedures completed. 80+ certified clinical partners across China.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-[#E5E5E4]">
              {hospitalLogos.map((src, i) => (
                <div
                  key={i}
                  className="border-b border-r border-[#E5E5E4] flex items-center justify-center p-4"
                  style={{ height: 90 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Clinical partner hospital ${i + 1}`}
                      fill
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
}
