import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Contact — Würzburg Dynamics",
};

// TODO: replace with the company's real Calendly (or other scheduler) link
const CALENDLY_URL = "https://calendly.com/wuerzburg-dynamics";

const methods = [
  {
    label: "Email",
    value: "info@wuerzburg-dynamics.com",
    href: "mailto:info@wuerzburg-dynamics.com",
  },
  {
    label: "Phone",
    value: "+86 (0)755 8966 6820",
    href: "tel:+8607558966820",
  },
  {
    label: "Office",
    value: "Pingshan District, Shenzhen\nGuangdong Province, China",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="en" />

      <main className="flex-1 pt-24" style={{ position: "relative", zIndex: 1 }}>

        {/* Hero */}
        <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-20 md:py-24">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="label-caps mb-8">Contact</div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={50}>
              <h1
                className="font-display font-700 text-ink leading-[1.0] tracking-[-0.01em] mb-8"
                style={{ fontSize: "clamp(36px, 5vw, 68px)" }}
              >
                Let&apos;s talk.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <p className="text-[17px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[560px]">
                Whether you&apos;re an investor, a distribution partner, or a hospital exploring
                the platform — we read every message and reply personally.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Direct methods */}
        <section className="relative py-20 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {methods.map((m, i) => (
                <ScrollReveal key={m.label} delay={i * 0.1}>
                  <div className="border-t-2 border-ink pt-6">
                    <div className="label-caps mb-3">{m.label}</div>
                    {m.href ? (
                      <a
                        href={m.href}
                        className="font-display font-600 text-[18px] text-ink hover:text-[#6B6B6B] transition-colors duration-150"
                      >
                        {m.value}
                      </a>
                    ) : (
                      <p className="font-display font-600 text-[18px] text-ink leading-[1.5] whitespace-pre-line">
                        {m.value}
                      </p>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Book a call */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="relative border border-[#E5E5E4] bg-[#FAFAF7] overflow-hidden">
              <div className="flex h-[4px]">
                <div className="flex-1 bg-[#FFCC00]" />
                <div className="flex-1 bg-[#1a1a1a]" />
                <div className="flex-1 bg-[#CC0000]" />
              </div>
              <div className="px-8 md:px-14 py-16 md:py-20">
                <ScrollReveal>
                  <div className="label-caps mb-6">Book a Call</div>
                  <h2
                    className="font-display font-700 text-ink leading-[1.05] mb-6"
                    style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}
                  >
                    Schedule a 30-minute<br />introduction.
                  </h2>
                  <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[520px] mb-10">
                    Pick a time that works for you and we&apos;ll walk you through the platform,
                    the clinical evidence, and how a partnership or investment could work.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-ink text-white text-[13px] font-500 tracking-[0.03em] hover:bg-[#2a2a2a] transition-colors duration-150 inline-block"
                  >
                    Book a call →
                  </a>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Audience routing */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">Where To Start</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-12"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                Find the right<br />conversation.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/investor" className="group relative border border-[#E5E5E4] hover:border-ink transition-colors duration-200 p-8 flex flex-col overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FFCC00]" />
                <div className="label-caps mb-3">For Investors</div>
                <div className="font-display font-600 text-ink text-[20px] mb-2">Series B · scaling nationally</div>
                <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.65] mb-6 flex-1">
                  Pipeline, financing history, and market position.
                </p>
                <span className="text-[13px] font-500 text-ink group-hover:translate-x-1 transition-transform duration-200">
                  View investor brief →
                </span>
              </Link>
              <Link href="/partner" className="group relative border border-[#E5E5E4] hover:border-ink transition-colors duration-200 p-8 flex flex-col overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#CC0000]" />
                <div className="label-caps mb-3">For Partners</div>
                <div className="font-display font-600 text-ink text-[20px] mb-2">Distribution · overseas markets</div>
                <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.65] mb-6 flex-1">
                  Territory rights, regulatory support, and business model.
                </p>
                <span className="text-[13px] font-500 text-ink group-hover:translate-x-1 transition-transform duration-200">
                  Explore partnership →
                </span>
              </Link>
            </div>
          </div>
        </section>

        <BackToTop label="Back to top" />
      </main>
    </div>
  );
}
