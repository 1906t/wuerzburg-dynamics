export const metadata = {
  title: "For Investors — Würzberg Dynamics",
};

export default function InvestorPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 space-y-20">

      {/* 1. What we built */}
      <section>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">The Company</p>
        <h1 className="text-3xl font-bold mb-4">
          Replacing guesswork with precision in soft-tissue surgery.
        </h1>
        <p className="text-gray-600 leading-relaxed">
          [Market problem — 2–3 sentences. Why percutaneous procedures are hard,
          what the consequence of imprecision is, what the gap looks like today.]
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          [Product — 2 sentences. What Würzberg built and what makes it different.
          No specs yet — save those for the Technology section.]
        </p>
      </section>

      {/* 2. Clinical proof */}
      <section>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Clinical Proof</p>
        <h2 className="text-2xl font-bold mb-4">Deployed. Not just approved.</h2>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-4xl font-bold">100+</p>
            <p className="text-gray-500 text-sm mt-1">Hospital deployments across China</p>
          </div>
          <div>
            <p className="text-4xl font-bold">#2</p>
            <p className="text-gray-500 text-sm mt-1">Market share in soft-tissue intervention robotics</p>
          </div>
        </div>
        <p className="text-gray-600">
          [1–2 sentences on procedure types covered and clinical outcomes if available.]
        </p>
      </section>

      {/* 3. Technology */}
      <section>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Technology Edge</p>
        <h2 className="text-2xl font-bold mb-4">Dual-path. AI-driven. Near-automated.</h2>
        <ul className="space-y-3 text-gray-600">
          <li>→ CT + ultrasound dual imaging — the only system in China with both pathways</li>
          <li>→ AI-driven 3D organ reconstruction from intraoperative CT data</li>
          <li>→ Real-time respiratory motion compensation during needle navigation</li>
          <li>→ 1mm targeting accuracy (lung) · 3mm targeting accuracy (kidney)</li>
          <li>→ Compatible with C-arm, CBCT, OBCT imaging platforms</li>
        </ul>
      </section>

      {/* 4. Regulatory */}
      <section>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Regulatory</p>
        <h2 className="text-2xl font-bold mb-4">China&apos;s highest device certification — and a fast-track for the kidney product.</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <p className="font-semibold text-gray-800">Lung product</p>
            <p>National Class III registration — China&apos;s highest device certification,
            requiring full clinical trial data. Equivalent in regulatory rigour to FDA PMA and EU CE Class III.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Kidney product</p>
            <p>Entered China&apos;s Innovation Device Special Review (创新医疗器械特别审查) —
            a government fast-track reserved for devices with significant clinical breakthrough potential.
            Clinical trials complete. Registration pending.</p>
          </div>
        </div>
      </section>

      {/* 5. Pipeline */}
      <section>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Pipeline</p>
        <h2 className="text-2xl font-bold mb-6">Two products. One approved. One incoming.</h2>
        <div className="space-y-4">
          {[
            { label: "Lung Intervention Robot", status: "Approved · Deployed", note: "Class III certified · 100+ hospitals" },
            { label: "Kidney Intervention Robot", status: "Registration pending", note: "Clinical trials complete · Innovation fast-track" },
            { label: "Future indications", status: "In development", note: "[placeholder]" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4 border-l-2 border-gray-200 pl-4">
              <div>
                <p className="font-semibold text-gray-800">{item.label}</p>
                <p className="text-sm text-gray-500">{item.status} · {item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Funding */}
      <section>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Funding</p>
        <h2 className="text-2xl font-bold mb-4">Series B — backed by strategic and institutional investors.</h2>
        <p className="text-gray-600 mb-6">Total raised: RMB 230M+</p>
        <div className="space-y-3">
          {[
            { name: "Fosun Pharma", desc: "Strategic health investor · Shanghai-listed · one of China's largest pharma groups" },
            { name: "Guangzhou Financial Holdings", desc: "Government-backed investment arm · Guangzhou Municipal Government" },
            { name: "Guangzhou Tianhe Fund", desc: "District-level government fund" },
            { name: "Bencao Capital", desc: "Healthcare specialist investor" },
            { name: "GDUT Venture Capital", desc: "University-affiliated technology fund" },
          ].map((inv) => (
            <div key={inv.name} className="flex flex-col sm:flex-row sm:items-center gap-1">
              <span className="font-medium text-gray-800 w-64">{inv.name}</span>
              <span className="text-gray-500 text-sm">{inv.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Team */}
      <section>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Team & Credentials</p>
        <h2 className="text-2xl font-bold mb-4">National recognition. Deep domain expertise.</h2>
        <ul className="space-y-2 text-gray-600">
          <li>→ Led by a National Key Talent Programme expert</li>
          <li>→ Recognised under the Shenzhen Peacock Talent Plan</li>
          <li>→ 100+ patents filed and granted</li>
          <li>→ ~126 employees (end of 2025)</li>
          <li>→ [Team bios or founding story — to be added]</li>
        </ul>
      </section>

      {/* 8. CTA */}
      <section className="border-t border-gray-100 pt-12 text-center">
        <h2 className="text-2xl font-bold mb-3">Schedule a call with our team.</h2>
        <p className="text-gray-500 mb-8">
          We&apos;re selectively engaging with strategic partners and investors interested in
          the global expansion of precision surgical robotics.
        </p>
        {/* Replace href with Calendly link when ready */}
        <a
          href="#calendly-placeholder"
          className="inline-block px-10 py-4 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition"
        >
          Request a meeting →
        </a>
      </section>

    </main>
  );
}
