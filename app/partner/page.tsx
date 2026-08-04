import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "For Partners — Würzburg Dynamics",
};

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav lang="en" />

      <main className="pt-36 pb-32 px-6">
        <div className="max-w-[720px] mx-auto">

          <div className="mb-24">
            <div className="label-caps mb-5">Distribution Partners</div>
            <h1
              className="font-display font-700 text-ink leading-[1.05] tracking-[-0.01em] mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              The technology is proven.<br />
              Now we&apos;re expanding<br />
              internationally.
            </h1>
            <p className="text-[16px] font-[300] text-[#6B6B6B] leading-[1.7]">
              Würzburg Dynamics is deployed in 100+ hospitals in China and is now opening
              international markets. We are looking for partners who bring local regulatory
              expertise, clinical relationships, and distribution reach — in return for
              exclusive or preferential rights in their territory.
            </p>
          </div>

          <div className="border-t border-[#E5E5E4] mb-24" />

          <section className="mb-24">
            <div className="label-caps mb-6">What You&apos;re Distributing</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-10"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              A platform built for<br />a new category.
            </h2>
            <div className="space-y-0 border-t border-[#E5E5E4]">
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
          </section>

          <div className="border-t border-[#E5E5E4] mb-24" />

          <section className="mb-24">
            <div className="label-caps mb-6">How We Work Together</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-10"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              Three partnership models.
            </h2>
            <div className="space-y-0 border-t border-[#E5E5E4]">
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
          </section>

          <div className="border-t border-[#E5E5E4] mb-24" />

          {/* Reimbursement */}
          <section className="mb-24">
            <div className="label-caps mb-6">Reimbursement & Revenue</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-8"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              National reimbursement<br />pathway already in place.
            </h2>
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
            <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.7]">
              National and local government policies increasingly support robot-assisted surgical charges.
              Würzburg works with distribution partners to help hospitals navigate local billing registration.
            </p>
          </section>

          <div className="border-t border-[#E5E5E4] mb-24" />

          <section className="mb-10">
            <div className="label-caps mb-6">Open Territories</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-10"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              Two priority regions.<br />Two partnerships.
            </h2>
          </section>

          <div className="border border-ink p-10 mb-6">
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

          <div className="border border-ink p-10 mb-14">
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

          <div className="border-l-2 border-[#E5E5E4] pl-6 mb-24">
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
      </main>

      <footer className="border-t border-[#E5E5E4] px-8 py-6">
        <div className="max-w-[720px] mx-auto flex items-center justify-between">
          <span className="text-[11px] text-[#6B6B6B] tracking-[0.04em]">
            © 2025 Würzburg Dynamics · 深圳惟德精准医疗科技有限公司
          </span>
          <Link href="/" className="text-[11px] text-[#6B6B6B] hover:text-ink transition-colors">
            ← Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}
