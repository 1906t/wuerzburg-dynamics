import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";

const badges = [
  { label: "Class III Certified", sub: "NMPA · China's highest device standard" },
  { label: "100+ Hospitals", sub: "Certified clinical partners across China" },
  { label: "Series B", sub: "Backed by Fosun Pharma & institutional investors" },
];

const painPoints = [
  {
    label: "Operator-dependent",
    body: "Conventional puncture relies entirely on physician skill and experience — precision varies, learning curve is steep.",
  },
  {
    label: "Pre-op imaging only",
    body: "Traditional systems use pre-operative CT or ultrasound. Intraoperative anatomy shifts go undetected, causing misalignment.",
  },
  {
    label: "High complication risk",
    body: "Multiple puncture attempts increase risk of pneumothorax, haemothorax, and intraoperative bleeding — especially for small lesions.",
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
      <main className="flex-1 flex flex-col justify-center pt-24" style={{ position: "relative", zIndex: 1 }}>
        <div className="px-8 md:px-16 lg:px-24 xl:px-32 max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 min-h-[calc(100vh-96px)]">

            {/* Text */}
            <div className="flex-1 flex flex-col justify-center py-16">
              <ScrollReveal delay={0.1}>
                <div className="label-caps mb-10">Soft-Tissue Surgical Robotics — Shenzhen</div>
              </ScrollReveal>
              <ScrollReveal delay={0.2} y={60}>
                <h1
                  className="font-display font-700 text-ink leading-[1.0] tracking-[-0.01em] mb-8"
                  style={{ fontSize: "clamp(38px, 5.5vw, 76px)" }}
                >
                  China&apos;s leading<br />
                  intelligent surgical<br />
                  robot platform.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.35}>
                <p className="text-[17px] font-[300] text-[#6B6B6B] leading-[1.65] max-w-[480px] mb-14">
                  Würzburg Dynamics is the only company in China with dual-path
                  intraoperative CT + ultrasound robotic guidance — NMPA Class III
                  certified and deployed across 100+ hospitals.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.45}>
                <div className="flex items-center gap-4 mb-16">
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
              <div className="border-t border-[#E5E5E4] pt-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-[#E5E5E4]">
                  {badges.map((b) => (
                    <div key={b.label} className="sm:px-8 first:pl-0 last:pr-0">
                      <div className="font-display font-600 text-[17px] tracking-[0.01em] text-ink mb-1">
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

            {/* Product image */}
            <div className="lg:w-[480px] lg:flex-shrink-0 flex items-center justify-center py-8 lg:py-0">
              <div className="relative w-full max-w-[440px] aspect-[4/3]">
                <Image
                  src="/images/hero-system.png"
                  alt="Würzburg Dynamics surgical robot system"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Problem section */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">The Problem</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-12"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                Conventional percutaneous<br />puncture is experience-dependent,<br />imprecise, and risky.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E5E5E4]">
              {painPoints.map((p, i) => (
                <div
                  key={p.label}
                  className={`p-8 ${i < painPoints.length - 1 ? "border-b md:border-b-0 md:border-r border-[#E5E5E4]" : ""}`}
                >
                  <div className="font-display font-600 text-[16px] text-ink mb-3">{p.label}</div>
                  <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.65]">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology — 3 subsystems */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="label-caps mb-6">The Platform</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
            >
              Three integrated systems.<br />One seamless procedure.
            </h2>
            <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.7] mb-12 max-w-[560px]">
              The platform doesn&apos;t change existing surgical workflow. It augments it —
              replacing guesswork with data, and manual positioning with robotic precision.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {subsystems.map((s) => (
                <div key={s.name} className="border-t-2 border-ink pt-6">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-display font-700 text-[20px] text-ink">{s.name}</span>
                    <span className="text-[12px] text-[#6B6B6B] font-[400]">{s.zh}</span>
                  </div>
                  <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.65]">{s.body}</p>
                </div>
              ))}
            </div>
            {/* Module images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { src: "/images/module-eye.png", label: "SkyEye — Optical Navigation" },
                { src: "/images/module-brain.png", label: "SuperBrain — Intelligent Planning" },
                { src: "/images/module-arm.png", label: "SmartArm — Precision Puncture" },
              ].map((m) => (
                <div key={m.label} className="relative aspect-[16/9] bg-[#F0F0EF] overflow-hidden">
                  <Image src={m.src} alt={m.label} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                </div>
              ))}
            </div>
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
                <div key={a.title} className="border-t-2 border-ink pt-5">
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
            <div className="label-caps mb-6">Clinical Partners</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-10"
              style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
            >
              Deployed across China&apos;s<br />leading hospitals.
            </h2>
            <div className="relative w-full aspect-[16/7] bg-white border border-[#E5E5E4] overflow-hidden">
              <Image
                src="/images/hospitals.png"
                alt="Clinical partner hospitals"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5E5E4] px-8 md:px-16 lg:px-24 xl:px-32 py-6">
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
