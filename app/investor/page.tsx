import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import StatRing from "@/components/StatRing";
import ScrollReveal from "@/components/ScrollReveal";


export const metadata = {
  title: "For Investors — Würzburg Dynamics",
};

const pipeline = [
  {
    phase: "Approved",
    name: "Lung Intervention Robot",
    indication: "Percutaneous lung biopsy, ablation, particle implantation",
    status: "NMPA Class III · Registered Jun 2024 · Commercialising",
    year: "2024",
  },
  {
    phase: "Reg. Pending",
    name: "Kidney Intervention Robot",
    indication: "Percutaneous nephrostomy, ureteroscopic stone removal, renal ablation",
    status: "National Innovation Fast-Track · Clinical trials complete Dec 2025 · Expected Jun 2026",
    year: "2026 est.",
  },
  {
    phase: "Pipeline",
    name: "Liver / Thyroid / Breast",
    indication: "Expanding percutaneous platform to additional soft-tissue indications",
    status: "Pre-clinical",
    year: "TBD",
  },
];

const investors = [
  { name: "Fosun Pharma (复星医药)", descriptor: "Strategic · Series B" },
  { name: "Guangzhou Financial Holdings (广州金控)", descriptor: "Government-backed · Series B" },
  { name: "Guangzhou Tianhe Fund (广州天河基金)", descriptor: "District fund · Series A" },
  { name: "Bencao Capital (本草资本)", descriptor: "Healthcare specialist · Series A" },
  { name: "GDUT Venture Capital (工大创投)", descriptor: "University-affiliated · Seed" },
  { name: "Shanghai Angel Association (上海天使会)", descriptor: "Angel · Seed" },
];

const financing = [
  { round: "Angel", amount: "RMB 2M", date: "Apr 2020" },
  { round: "Pre-A", amount: "RMB 20M", date: "Jul 2021" },
  { round: "Series A", amount: "RMB 100M", date: "Oct 2022" },
  { round: "Series B", amount: "RMB 120M+", date: "May 2025" },
];

const market = [
  { organ: "Lung", zh: "肺", patients: "~150M", note: "Chinese lung nodule patients" },
  { organ: "Kidney", zh: "肾", patients: "~60M", note: "Chinese kidney stone patients" },
  { organ: "Liver", zh: "肝", patients: "~410K", note: "New liver cancer cases / year" },
  { organ: "Thyroid", zh: "甲", patients: "~130M", note: "Chinese thyroid nodule patients" },
];

const team = [
  {
    name: "Dr. Xie Weiguo",
    zh: "谢卫国 博士",
    role: "Founder & CEO",
    bio: "National Key Talent Programme expert. Biomedical engineering PhD, Bern University. Former CEO/CTO at Siemens Medical, Heidelberg University Hospital, Surpath Medical. 100+ patents.",
  },
  {
    name: "Dr. Lu",
    zh: "卢博士",
    role: "Chief Scientist",
    bio: "Medical imaging PhD, Bern University. Led image-guided soft tissue surgery research group at ARTORG Centre. 20 years in surgical navigation and AI.",
  },
  {
    name: "Dr. Zhai",
    zh: "翟博士",
    role: "Software Architect & QC Director",
    bio: "Computer science PhD, Würzburg University. 30 years in software systems and product quality management. Former Stochastikon, Surpath Medical.",
  },
  {
    name: "Dr. Huang",
    zh: "黄博士",
    role: "Chief AI Officer",
    bio: "Computer science PhD, TU Dresden. 20 years in AI and big data. Former German Cancer Research Centre (DKFZ). 80+ papers including Nature journals.",
  },
  {
    name: "Zhang (Senior Engineer)",
    zh: "张高工",
    role: "Chief Product Development Officer",
    bio: "30 years in precision equipment and robotics R&D. Former Aerospace Power Research Centre director. 70+ patents.",
  },
];

export default function InvestorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav lang="en" />

      <main className="pt-36 pb-32 px-6">
        <div className="max-w-[720px] mx-auto">

          {/* Page header */}
          <div className="mb-24">
            <div className="label-caps mb-5">Investor Overview</div>
            <h1
              className="font-display font-700 text-ink leading-[1.05] tracking-[-0.01em] mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              Building the platform<br />
              for percutaneous<br />
              robotics worldwide.
            </h1>
            <p className="text-[16px] font-[300] text-[#6B6B6B] leading-[1.7]">
              Würzburg Dynamics is the only company in China — and one of very few globally —
              with dual-path intraoperative CT + ultrasound robotic guidance. NMPA Class III
              certified, commercially deployed, and expanding internationally.
            </p>
          </div>

          <div className="border-t border-[#E5E5E4] mb-24" />

          {/* Clinical proof */}
          <section className="mb-24">
            <div className="label-caps mb-6">Clinical Proof</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-8"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              Deployed. Not just approved.
            </h2>
            <div className="grid grid-cols-2 gap-0 border border-[#E5E5E4] mb-10">
              <div className="p-8 border-r border-[#E5E5E4]">
                <div className="font-display font-700 text-ink leading-none mb-3" style={{ fontSize: "clamp(52px, 8vw, 88px)" }}>
                  100+
                </div>
                <div className="text-[13px] font-[400] text-[#6B6B6B] leading-[1.5]">
                  Certified hospital partners<br />across China
                </div>
              </div>
              <div className="p-8">
                <div className="font-display font-700 text-ink leading-none mb-3" style={{ fontSize: "clamp(52px, 8vw, 88px)" }}>
                  #2
                </div>
                <div className="text-[13px] font-[400] text-[#6B6B6B] leading-[1.5]">
                  Market share in soft-tissue<br />percutaneous robotics in China
                </div>
              </div>
            </div>
            <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.7] mb-10">
              Lung robot registered Jun 2024, now in active commercialisation across 100+ hospitals.
              Procedures: biopsy, ablation, particle implantation. Precision: ~1mm targeting accuracy.
              Compatible with C-arm, CBCT, OBCT imaging platforms.
            </p>

            {/* Animated stat rings */}
            <div className="flex flex-wrap gap-12 justify-center mb-10 py-8">
              <StatRing
                value={93}
                label="93.3%"
                sublabel="First-attempt success rate vs. 53.3% control group"
                size={150}
              />
              <StatRing
                value={61}
                label="39% ↓"
                sublabel="Reduction in puncture-related complications"
                size={150}
              />
              <StatRing
                value={100}
                label="100+"
                sublabel="Certified hospital partners across China"
                size={150}
              />
            </div>
            <div className="relative w-full aspect-[16/7] bg-[#F9F9F8] overflow-hidden mb-2">
              <Image
                src="/images/experimental-data.png"
                alt="Experimental data — robot vs control group"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
            <p className="text-[11px] text-[#6B6B6B]">Source: Quantitative Imaging in Medicine and Surgery, Guangzhou Medical University</p>
          </section>

          <div className="border-t border-[#E5E5E4] mb-24" />

          {/* Market */}
          <section className="mb-24">
            <div className="label-caps mb-6">Market Opportunity</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-10"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              Four indications.<br />Hundreds of millions of patients.
            </h2>
            <div className="grid grid-cols-2 gap-0 border border-[#E5E5E4] mb-8">
              {market.map((m, i) => (
                <div
                  key={m.organ}
                  className={`p-6 ${i % 2 === 0 ? "border-r border-[#E5E5E4]" : ""} ${i < 2 ? "border-b border-[#E5E5E4]" : ""}`}
                >
                  <div className="font-display font-700 text-ink leading-none mb-2" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
                    {m.patients}
                  </div>
                  <div className="text-[12px] font-500 text-ink mb-1">{m.organ} <span className="text-[#6B6B6B] font-[400]">{m.zh}</span></div>
                  <div className="text-[11px] font-[400] text-[#6B6B6B] leading-[1.5]">{m.note}</div>
                </div>
              ))}
            </div>
            <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.7]">
              Platform economics: each additional indication (liver, thyroid, breast) leverages the
              same core hardware — SuperBrain, SkyEye, SmartArm — with a software and
              regulatory overlay only.
            </p>
          </section>

          <div className="border-t border-[#E5E5E4] mb-24" />

          {/* Pipeline */}
          <section className="mb-24">
            <div className="label-caps mb-6">Product Pipeline</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-10"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              Platform, not product.
            </h2>
            <div className="space-y-0">
              {pipeline.map((item, i) => (
                <div key={item.name} className="flex gap-8 pb-10">
                  <div className="flex flex-col items-center pt-1 flex-shrink-0 w-[1px] relative ml-3">
                    <div className="w-2 h-2 rounded-full bg-ink flex-shrink-0 z-10" />
                    {i < pipeline.length - 1 && (
                      <div className="flex-1 w-px bg-[#E5E5E4] mt-2" style={{ minHeight: "60px" }} />
                    )}
                  </div>
                  <div className="flex-1 -mt-0.5 pb-2">
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-500 tracking-[0.1em] uppercase px-2 py-0.5 border border-[#E5E5E4] text-[#6B6B6B]">
                          {item.phase}
                        </span>
                        <span className="font-display font-600 text-[17px] text-ink">{item.name}</span>
                      </div>
                      <span className="text-[12px] text-[#6B6B6B] font-[400] flex-shrink-0">{item.year}</span>
                    </div>
                    <p className="text-[13px] font-[400] text-[#6B6B6B] leading-[1.5] mt-2">{item.indication}</p>
                    <p className="text-[11px] font-500 text-ink mt-1 tracking-[0.03em]">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-[#E5E5E4] mb-24" />

          {/* Financing history */}
          <section className="mb-24">
            <div className="label-caps mb-6">Financing History</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-10"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              RMB 240M+ raised<br />across four rounds.
            </h2>
            <div className="border-t border-[#E5E5E4]">
              {financing.map((f) => (
                <div key={f.round} className="flex items-baseline justify-between py-5 border-b border-[#E5E5E4]">
                  <span className="font-display font-600 text-[17px] text-ink">{f.round}</span>
                  <div className="text-right">
                    <div className="text-[14px] font-500 text-ink">{f.amount}</div>
                    <div className="text-[11px] text-[#6B6B6B]">{f.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-[#E5E5E4] mb-24" />

          {/* Investors */}
          <section className="mb-24">
            <div className="label-caps mb-6">Current Investors</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-10"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              Backed by strategic<br />and institutional conviction.
            </h2>
            <div className="border-t border-[#E5E5E4]">
              {investors.map((inv) => (
                <div key={inv.name} className="flex items-baseline justify-between py-5 border-b border-[#E5E5E4] group">
                  <span className="font-display font-600 text-[16px] text-ink group-hover:translate-x-0.5 transition-transform duration-150">
                    {inv.name}
                  </span>
                  <span className="text-[12px] font-[400] text-[#6B6B6B] text-right">{inv.descriptor}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-[#E5E5E4] mb-24" />

          {/* Team */}
          <section className="mb-24">
            <div className="label-caps mb-6">Leadership Team</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              Deep domain expertise.<br />National recognition.
            </h2>
            <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.7] mb-10">
              Founded by returnee PhDs from Siemens, Philips, University of Bern, and Heidelberg
              University Hospital. 126 employees as of end-2025. 100+ patents filed and granted.
            </p>
            <div className="space-y-0 border-t border-[#E5E5E4]">
              {team.map((t) => (
                <div key={t.name} className="py-7 border-b border-[#E5E5E4]">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-display font-600 text-[16px] text-ink">{t.name}</span>
                    <span className="text-[12px] text-[#6B6B6B]">{t.zh}</span>
                    <span className="text-[11px] font-500 tracking-[0.06em] uppercase text-[#6B6B6B] ml-auto">{t.role}</span>
                  </div>
                  <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.6]">{t.bio}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-[#E5E5E4] mb-24" />

          <section>
            <div className="label-caps mb-6">Next Step</div>
          </section>
        </div>

        {/* CTA block */}
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-ink px-12 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2
                className="font-display font-700 text-white leading-[1.05] mb-3"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                Schedule a call with our team.
              </h2>
              <p className="text-[14px] text-white/60 font-[300] max-w-[420px] leading-[1.6]">
                We are selectively engaging with strategic investors and partners
                interested in the global expansion of percutaneous surgical robotics.
              </p>
            </div>
            <a
              href="mailto:info@wuerzburg-dynamics.com?subject=Investor%20Enquiry"
              className="flex-shrink-0 px-8 py-4 bg-white text-ink text-[13px] font-500 tracking-[0.03em] hover:bg-[#F5F5F4] transition-colors duration-150 inline-block text-center"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </main>

    </div>
  );
}
