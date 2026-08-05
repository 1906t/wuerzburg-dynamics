import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";
import LeadershipGrid from "@/components/LeadershipGrid";
import type { Leader } from "@/components/LeadershipGrid";

const leaders: Leader[] = [
  {
    name: "Dr Weiguo Xie",
    role: "Founder & CEO",
    image: "/images/team/xie.png",
    credentials: [
      "M.Sc. Computational Engineering (Biomedical Engineering Track, Siemens Scholarship), Friedrich-Alexander University Erlangen-Nürnberg, Germany",
      "Ph.D. Biomedical Engineering, University of Bern, Switzerland",
      "National Major Talent Program Expert; Category A Leading Talent, Pingshan Julong Talent Program",
    ],
    bio: [
      "Research focus: minimally invasive interventional surgery and robot-assisted surgery. Extensive industry experience spanning medical devices and robotics.",
      "Completed 13 projects across Germany and Switzerland; developed 7 innovative product prototypes; filed 76 patents; obtained 1 China Class II medical device certificate.",
    ],
    former: [
      "Siemens Healthineers (Germany)",
      "Orthopedic Hospital, Heidelberg University Medical School (Germany)",
      "Surpath Medical GmbH (Germany) — CEO/CTO",
    ],
    formerLabel: "Former Positions",
  },
  {
    name: "Dr Lu",
    role: "Chief Scientist",
    image: "/images/team/lu.png",
    credentials: [
      "Ph.D. Medical Image Analysis, University of Bern, Switzerland",
    ],
    bio: [
      "20 years of industry experience in medical image processing, surgical navigation, ultrasound systems, and artificial intelligence.",
      "Formerly Head of the Image-Guided Soft Tissue Surgery Research Group at the ARTORG Center, University of Bern.",
    ],
    former: [
      "Philips Healthcare",
      "ARTORG Center, University of Bern — Research Group Head",
    ],
    formerLabel: "Former Positions",
  },
  {
    name: "Dr Huang",
    role: "Chief AI Algorithm Officer",
    image: "/images/team/huang.png",
    credentials: [
      "Ph.D. Computer Science, Technical University of Dresden, Germany",
      "Returned overseas scholar; Full Professor",
      "Published 40+ academic papers including in Nature sub-journals; holder of 17 patents and software copyrights",
    ],
    bio: [
      "20 years of experience in computer science, big data, and artificial intelligence.",
    ],
    former: [
      "German Cancer Research Center (DKFZ)",
      "Molecular Imaging Division, Siemens Healthineers (Germany)",
    ],
    formerLabel: "Former Positions",
  },
  {
    name: "Dr Zhai",
    role: "Software Architect & Quality Director",
    image: "/images/team/zhai.jpg",
    credentials: [
      "Ph.D. Systems Engineering, Southeast University",
      "Ph.D. Computer Science, University of Würzburg, Germany",
    ],
    bio: [
      "30 years of experience in software system design, product development, and quality management.",
    ],
    former: [
      "Stochastikon GmbH (Germany)",
      "Surpath Medical",
    ],
    formerLabel: "Former Positions",
  },
  {
    name: "Mr Zhang",
    role: "Product Development Director",
    image: "/images/team/zhang.png",
    credentials: [
      "M.Sc. Mechanical Engineering, Xidian University",
      "Senior Engineer",
      "Holder of 50+ patents and 8 software copyrights",
    ],
    bio: [
      "30 years of experience in precision equipment and robotics R&D, product development, and technical team management.",
    ],
    former: [
      "Director, Aerospace Power R&D Center",
      "Vice President of Technology & General Manager, Aerospace Digital Union",
      "Vice President of R&D, Shenzhen Anze Intelligent",
    ],
    formerLabel: "Former Positions",
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="en" />

      <main className="flex-1 pt-24" style={{ position: "relative", zIndex: 1 }}>

        {/* Hero */}
        <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-24 min-h-[50vh] flex items-center">
          <div className="max-w-[1200px] mx-auto w-full">
            <ScrollReveal delay={0.1}>
              <div className="label-caps mb-8">Leadership</div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={60}>
              <h1
                className="font-display font-700 text-ink leading-[1.0] tracking-[-0.01em] mb-8"
                style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
              >
                PhDs, engineers,<br />and operators.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <p className="text-[17px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[560px]">
                The founding team combines deep scientific expertise from Europe&apos;s leading
                medical engineering institutions with decades of hands-on product and clinical
                experience. Click any member to read their full profile.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Leadership grid */}
        <section className="relative py-8 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <LeadershipGrid leaders={leaders} />
          </div>
        </section>

        {/* Back link */}
        <section className="relative py-16 px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="max-w-[1200px] mx-auto">
            <a
              href="/about"
              className="text-[13px] font-500 text-[#6B6B6B] hover:text-ink transition-colors duration-150 tracking-[0.02em]"
            >
              ← Back to About
            </a>
          </div>
        </section>

      </main>

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
