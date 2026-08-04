export const metadata = {
  title: "For Partners — Würzberg Dynamics",
};

export default function PartnerPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 space-y-20">

      {/* 1. What we built */}
      <section>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">The Company</p>
        <h1 className="text-3xl font-bold mb-4">
          The technology is proven. Now we&apos;re expanding internationally.
        </h1>
        <p className="text-gray-600 leading-relaxed">
          [Same 2-paragraph company intro as investor page — extract to shared component in Week 2.]
        </p>
      </section>

      {/* 2. Why partner */}
      <section>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">The Opportunity</p>
        <h2 className="text-2xl font-bold mb-4">
          A clinically validated platform looking for the right partners in each market.
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Würzberg is deployed in 100+ hospitals in China and is now opening international markets.
          We&apos;re looking for partners who bring local regulatory expertise, clinical relationships,
          and distribution reach — in return for exclusive or preferential rights in their territory.
        </p>
      </section>

      {/* 3. Technology (more spec detail than investor page) */}
      <section>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Technology</p>
        <h2 className="text-2xl font-bold mb-4">What you&apos;re distributing.</h2>
        <ul className="space-y-3 text-gray-600">
          <li>→ <strong>Dual-path imaging:</strong> CT-guided + ultrasound-guided — the only system in China with both</li>
          <li>→ <strong>AI surgical path planning:</strong> 3D organ reconstruction from intraoperative CT; real-time respiratory motion compensation</li>
          <li>→ <strong>Navigation accuracy:</strong> ~1mm (lung) · ~3mm (kidney)</li>
          <li>→ <strong>Procedure types:</strong> Biopsy, ablation, drainage, stone extraction, particle implantation</li>
          <li>→ <strong>Platform compatibility:</strong> C-arm, CBCT, OBCT</li>
          <li>→ <strong>Business model:</strong> Capital equipment + recurring consumables</li>
        </ul>
      </section>

      {/* 4. Partnership models */}
      <section>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">How We Work Together</p>
        <h2 className="text-2xl font-bold mb-6">Three partnership models.</h2>
        <div className="space-y-6">
          {[
            {
              title: "Distribution",
              desc: "Exclusive or preferential distribution rights in a defined territory. Partner handles hospital sales, installation, and after-sales support. Würzberg provides training, regulatory documentation, and technical support.",
            },
            {
              title: "Regulatory Partnership",
              desc: "For partners with existing regulatory relationships who can accelerate device registration in their market (e.g. HSA Singapore, UAE MOH, Saudi SFDA). Joint regulatory strategy and cost-sharing.",
            },
            {
              title: "Co-development / Licensing",
              desc: "For partners interested in adapting the platform for new indications or integrating with existing systems. IP licensing and joint development agreements available.",
            },
          ].map((model) => (
            <div key={model.title} className="border-l-2 border-gray-200 pl-5">
              <p className="font-semibold text-gray-800 mb-1">{model.title}</p>
              <p className="text-gray-600 text-sm">{model.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Southeast Asia */}
      <section id="sea" className="scroll-mt-8">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Southeast Asia</p>
        <h2 className="text-2xl font-bold mb-4">Using Singapore as the regulatory gateway to ASEAN.</h2>
        <p className="text-gray-600 mb-4">
          HSA (Health Sciences Authority, Singapore) approval serves as a reference clearance that
          accelerates registration in Malaysia, Thailand, Indonesia, and other ASEAN markets. We are
          prioritising Singapore as the first regulatory entry point in Southeast Asia.
        </p>
        <ul className="space-y-2 text-gray-600 text-sm mb-8">
          <li>→ Current regulatory status: [to be confirmed — HSA application timeline]</li>
          <li>→ Target procedures: lung biopsy, kidney stone extraction, ablation</li>
          <li>→ Partnership priority: regulatory + distribution (combined or separate)</li>
        </ul>
        <a
          href="mailto:contact@placeholder.com?subject=Southeast%20Asia%20Partnership%20Enquiry"
          className="inline-block px-8 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition"
        >
          Enquire — Southeast Asia →
        </a>
      </section>

      {/* 6. Middle East */}
      <section id="me" className="scroll-mt-8">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Middle East</p>
        <h2 className="text-2xl font-bold mb-4">High willingness to pay. Private-sector-led adoption.</h2>
        <p className="text-gray-600 mb-4">
          The UAE and Saudi Arabia are investing heavily in health technology under Vision 2030
          and national health transformation programmes. Private hospital networks and insurance-based
          procurement mean significantly higher willingness to pay for premium surgical technology
          compared to public-sector markets.
        </p>
        <ul className="space-y-2 text-gray-600 text-sm mb-8">
          <li>→ Target regulatory pathway: UAE MOH / Saudi SFDA</li>
          <li>→ Primary market: Private hospitals and specialist surgical centres</li>
          <li>→ Partnership priority: Distribution + regulatory support</li>
        </ul>
        <a
          href="mailto:contact@placeholder.com?subject=Middle%20East%20Partnership%20Enquiry"
          className="inline-block px-8 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition"
        >
          Enquire — Middle East →
        </a>
      </section>

      {/* 7. Other regions */}
      <section className="border border-gray-100 rounded-lg p-6 text-center">
        <p className="text-gray-500 text-sm">
          Exploring expansion into Europe and North America.{" "}
          <a
            href="mailto:contact@placeholder.com?subject=International%20Partnership%20Enquiry"
            className="underline text-gray-700"
          >
            Contact us to discuss your region.
          </a>
        </p>
      </section>

    </main>
  );
}
