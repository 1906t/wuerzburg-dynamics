import Nav from "@/components/Nav";
import BackToTop from "@/components/BackToTop";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";

export const metadata = {
  title: "For Partners — Würzburg Dynamics",
};

export default function PartnerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="en" />

      <main className="flex-1 pt-24" style={{ position: "relative", zIndex: 1 }}>

        {/* Hero / header */}
        <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-24 min-h-[60vh] flex items-center">
          <div className="max-w-[1200px] mx-auto w-full">
            <ScrollReveal delay={0.1}>
              <div className="label-caps mb-8">Distribution Partners</div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={60}>
              <h1
                className="font-display font-700 text-ink leading-[1.0] tracking-[-0.01em] mb-8"
                style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
              >
                The technology is proven.<br />
                Now we&apos;re expanding<br />
                internationally.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <p className="text-[17px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[600px]">
                Würzburg Dynamics is deployed in 100+ hospitals in China and is now opening
                international markets. We are looking for partners who bring local regulatory
                expertise, clinical relationships, and distribution reach — in return for
                exclusive or preferential rights in their territory.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* What you're distributing */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">What You&apos;re Distributing</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-10"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                A platform built for<br />a new category.
              </h2>
            </ScrollReveal>
            <div className="space-y-0 border-t border-[#E5E5E4] max-w-[820px]">
              {[
                { title: "Dual-path imaging", body: "Intraoperative CT + ultrasound — the only system in China with both. Compatible with C-arm, CBCT, and OBCT." },
                { title: "AI surgical path planning", body: "Fully automatic 3D organ reconstruction in seconds. Real-time respiratory motion compensation. ~1mm accuracy (lung), ~3mm (kidney)." },
                { title: "Procedure types", body: "Biopsy, ablation, drainage, stone extraction, particle implantation — across lung, kidney, and future indications." },
                { title: "Business model", body: "Capital equipment + recurring consumables. Software licence and annual service contracts available." },
              ].map((item) => (
                <div key={item.title} className="py-6 border-b border-[#E5E5E4]">
                  <div className="font-display font-600 text-[16px] text-ink mb-2">{item.title}</div>
                  <div className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.6]">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we work together */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">How We Work Together</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-10"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                Three partnership models.
              </h2>
            </ScrollReveal>
            <div className="space-y-0 border-t border-[#E5E5E4] max-w-[820px]">
              {[
                { title: "Distribution", body: "Exclusive or preferential rights in a defined territory. Partner handles hospital sales, installation, and after-sales. Würzburg provides training, regulatory documentation, and technical support." },
                { title: "Regulatory Partnership", body: "For partners with existing regulatory relationships (HSA Singapore, UAE MOH, Saudi SFDA). Joint regulatory strategy and cost-sharing on local submissions." },
                { title: "Co-development / Licensing", body: "For partners interested in adapting the platform to new indications or integrating with existing systems. IP licensing and joint development agreements available." },
              ].map((item) => (
                <div key={item.title} className="py-6 border-b border-[#E5E5E4]">
                  <div className="font-display font-600 text-[16px] text-ink mb-2">{item.title}</div>
                  <div className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.6]">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reimbursement */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">Reimbursement &amp; Revenue</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-8"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                National reimbursement<br />pathway already in place.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E5E5E4] mb-8">
              <div className="p-8 border-b md:border-b-0 md:border-r border-[#E5E5E4]">
                <div className="font-display font-700 text-ink leading-none mb-3" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
                  C Code
                </div>
                <div className="text-[13px] font-[400] text-[#6B6B6B] leading-[1.5]">
                  National consumables code secured. Provincial billing registration underway.
                </div>
              </div>
              <div className="p-8 border-b md:border-b-0 md:border-r border-[#E5E5E4]">
                <div className="font-display font-700 text-ink leading-none mb-3" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
                  ¥3,310
                </div>
                <div className="text-[13px] font-[400] text-[#6B6B6B] leading-[1.5]">
                  Per procedure (Guangdong pricing). Hospital self-pricing, market-adjusted.
                </div>
              </div>
              <div className="p-8">
                <div className="font-display font-700 text-ink leading-none mb-3" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
                  2–3 yr
                </div>
                <div className="text-[13px] font-[400] text-[#6B6B6B] leading-[1.5]">
                  Estimated hospital ROI payback period on capital equipment.
                </div>
              </div>
            </div>
            <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[720px]">
              National and local government policies increasingly support robot-assisted surgical charges.
              Würzburg works with distribution partners to help hospitals navigate local billing registration.
            </p>
          </div>
        </section>

        {/* Open territories */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">Open Territories</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-10"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                Two priority regions.<br />Two partnerships.
              </h2>
            </ScrollReveal>

            <div className="max-w-[860px]">
              <div className="border border-ink bg-white p-10 mb-6">
                <div className="label-caps mb-4" style={{ color: "#0B0B0B", opacity: 0.4 }}>Region 01</div>
                <h3 className="font-display font-700 text-ink mb-1" style={{ fontSize: "clamp(26px, 4vw, 40px)" }}>Southeast Asia</h3>
                <p className="text-[11px] font-500 tracking-[0.08em] uppercase text-[#6B6B6B] mb-6">
                  Singapore · Malaysia · Thailand · Indonesia · Philippines · Vietnam
                </p>
                <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.7] mb-8">
                  HSA (Singapore) approval serves as a reference clearance that accelerates
                  registration across ASEAN markets. Priority partnership type: regulatory + distribution
                  (combined or separate). Target: 12 hospitals in Year 1, 40 by Year 3.
                </p>
                <a
                  href="mailto:info@wuerzburg-dynamics.com?subject=Southeast%20Asia%20Partnership%20Enquiry"
                  className="px-7 py-3.5 bg-ink text-white text-[13px] font-500 tracking-[0.02em] hover:bg-[#2a2a2a] transition-colors duration-150 inline-block"
                >
                  Enquire — Southeast Asia →
                </a>
              </div>

              <div className="border border-ink bg-white p-10">
                <div className="label-caps mb-4" style={{ color: "#0B0B0B", opacity: 0.4 }}>Region 02</div>
                <h3 className="font-display font-700 text-ink mb-1" style={{ fontSize: "clamp(26px, 4vw, 40px)" }}>Middle East</h3>
                <p className="text-[11px] font-500 tracking-[0.08em] uppercase text-[#6B6B6B] mb-6">
                  UAE · Saudi Arabia · Qatar · Kuwait · Bahrain
                </p>
                <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.7] mb-8">
                  GCC government healthcare investment and Vision 2030 programmes create favourable
                  conditions for premium surgical technology. Private hospital networks mean high
                  willingness to pay. Target regulatory pathway: UAE MOH / Saudi SFDA.
                </p>
                <a
                  href="mailto:info@wuerzburg-dynamics.com?subject=Middle%20East%20Partnership%20Enquiry"
                  className="px-7 py-3.5 bg-ink text-white text-[13px] font-500 tracking-[0.02em] hover:bg-[#2a2a2a] transition-colors duration-150 inline-block"
                >
                  Enquire — Middle East →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Future pipeline */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="border-l-2 border-[#E5E5E4] pl-6 max-w-[720px]">
              <div className="label-caps mb-3">Future Pipeline</div>
              <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.7]">
                Europe and North America are on our partnership roadmap for 2026–2027.
                If you represent a distributor in Germany, France, Benelux, Brazil, or Mexico,
                reach out to{" "}
                <a href="mailto:info@wuerzburg-dynamics.com" className="text-ink underline underline-offset-3 hover:text-[#6B6B6B] transition-colors">
                  info@wuerzburg-dynamics.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <BackToTop label="Back to top" />
      </main>
    </div>
  );
}
