import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";
import TechCard from "@/components/TechCard";
import ScrollCue from "@/components/ScrollCue";
import SectionProgress from "@/components/SectionProgress";
import BackToTop from "@/components/BackToTop";
import CredentialBadges from "@/components/CredentialBadges";

const sections = [
  { id: "problem", label: "The Problem" },
  { id: "platform", label: "The Platform" },
  { id: "workflow", label: "How It Works" },
  { id: "applications", label: "Applications" },
  { id: "partners", label: "Partners" },
  { id: "contact", label: "Contact" },
];

const badges = [
  { label: "Dual-Path Imaging", sub: "Intraoperative CT + ultrasound — unique in China" },
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
      <SectionProgress sections={sections} />

      {/* Hero */}
      <main className="flex-1 flex flex-col justify-center pt-20 sm:pt-24" style={{ position: "relative", zIndex: 1 }}>
        <section className="relative pl-5 sm:pl-8 md:pl-16 lg:pl-24 xl:pl-32 overflow-hidden">
          <div className="w-full">
          {/* Two-column: text left, image right bleeding to edge */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-0 min-h-[70vh] md:min-h-[calc(100vh-96px)] py-8 md:py-0">

            {/* Left: all text content */}
            <div className="flex-1 flex flex-col justify-center md:pr-12 py-10 md:py-16">

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
                  <div className="md:hidden shrink-0 relative aspect-[1/1]" style={{ width: "42%" }}>
                    <Image
                      src="/images/hero-system.png"
                      alt="Würzburg Dynamics dual surgical robot system"
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
                  intraoperative CT + ultrasound robotic guidance.
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

            {/* Right: desktop-only — wider column, bleeds to viewport edge */}
            <div className="hidden md:block flex-[1.3] self-stretch relative min-h-[420px]">
              {/* Left-edge fade: text side bleeds into image */}
              <div
                className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, white, transparent)" }}
              />

              <Image
                src="/images/hero-system.png"
                alt="Würzburg Dynamics dual surgical robot system"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                priority
              />

              {/* Floating credential badges — fly-in + reticle lock on load */}
              <CredentialBadges
                badges={[
                  { label: "Class III NMPA", sub: "China's highest device standard" },
                  { label: "≤ 0.8 mm accuracy", sub: "Lung · Kidney · Liver" },
                ]}
              />
            </div>

          </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center">
            <ScrollCue targetId="problem" label="Explore" />
          </div>
        </section>

        {/* Problem section */}
        <section id="problem" className="relative py-16 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white scroll-mt-24">
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
                  <div className="font-display font-600 text-[16px] md:text-[17px] text-ink mb-3">{p.label}</div>
                  <p className="text-[14px] md:text-[15px] font-[300] text-[#6B6B6B] leading-[1.75]">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology — 3 subsystems */}
        <section id="platform" className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 scroll-mt-24">
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
            <p className="text-[11px] font-[400] text-[#AAAAAA] tracking-[0.07em] uppercase mt-3">
              Hover over each system to read ↑
            </p>

          </div>
        </section>

        {/* 4-step workflow */}
        <section id="workflow" className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white scroll-mt-24">
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
                  <div className="font-display font-600 text-[16px] text-ink mb-2">{s.title}</div>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.7]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical applications */}
        <section id="applications" className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 scroll-mt-24">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="label-caps mb-6">Clinical Applications</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-12"
              style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
            >
              Wide range of procedures.<br />One platform.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Tissue Biopsy", body: "Tissue acquisition, pathological and immunohistochemical diagnosis, genomic analysis." },
                { title: "Tumor Ablation", body: "Improved conformity to planned paths. Reduced intraoperative risk. Enhanced therapy outcomes." },
                { title: "Thoracoscopic Localisation", body: "Automated 3D reconstruction and preoperative lesion localisation for thoracoscopic resection." },
                { title: "Drug & Seed Implantation", body: "Targeted radioactive seed therapy with precise implantation guidance." },
              ].map((a) => (
                <div key={a.title}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/bullet-point.png" alt="" width={22} height={22} className="mb-3" />
                  <div className="font-display font-600 text-[17px] text-ink mb-2">{a.title}</div>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.75]">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hospital logos */}
        <section id="partners" className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white scroll-mt-24">
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
                80+ leading hospitals nationwide, with 3,000+ precision procedures completed to date.
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

        {/* Final CTA */}
        <section id="contact" className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 scroll-mt-24">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="relative bg-[#FAFAF7] overflow-hidden">
              <div className="px-8 md:px-14 py-16 md:py-20">
                <ScrollReveal>
                  <div className="label-caps mb-6">Work With Us</div>
                  <h2
                    className="font-display font-700 text-ink leading-[1.05] mb-6"
                    style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
                  >
                    Two ways to build<br />the future of surgery.
                  </h2>
                  <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[520px] mb-12">
                    Whether you&apos;re backing the next category of surgical robotics or bringing
                    it to hospitals in your market — we&apos;d like to hear from you.
                  </p>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/investor" className="group relative bg-white border border-[#E5E5E4] hover:border-ink transition-colors duration-200 p-8 flex flex-col overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FFCC00]" />
                    <div className="label-caps mb-3">For Investors</div>
                    <div className="font-display font-600 text-ink text-[20px] mb-2">Series B · scaling nationally</div>
                    <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.65] mb-6 flex-1">
                      100+ hospitals, Class III certified, second in market share. See the pipeline and financing history.
                    </p>
                    <span className="text-[13px] font-500 text-ink group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-2">
                      View investor brief →
                    </span>
                  </Link>
                  <Link href="/partner" className="group relative bg-white border border-[#E5E5E4] hover:border-ink transition-colors duration-200 p-8 flex flex-col overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#CC0000]" />
                    <div className="label-caps mb-3">For Partners</div>
                    <div className="font-display font-600 text-ink text-[20px] mb-2">Distribution · overseas markets</div>
                    <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.65] mb-6 flex-1">
                      Exclusive territory rights in Southeast Asia and the Middle East. Regulatory and clinical support included.
                    </p>
                    <span className="text-[13px] font-500 text-ink group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-2">
                      Explore partnership →
                    </span>
                  </Link>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <span className="text-[13px] text-[#9B9B9B]">Or reach us directly</span>
                  <a
                    href="mailto:info@wuerzburg-dynamics.com"
                    className="text-[14px] font-500 text-ink border-b border-ink/30 hover:border-ink pb-0.5 transition-colors duration-150 w-fit"
                  >
                    info@wuerzburg-dynamics.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BackToTop label="Back to top" />
      </main>

      {/* Footer */}
    </div>
  );
}
