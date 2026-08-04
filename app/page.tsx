import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-24 max-w-4xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-6">
          Würzberg Dynamics · 深圳惟德精准医疗科技
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          China&apos;s first dual-path soft-tissue interventional surgical robot.
        </h1>
        <p className="text-xl text-gray-500 mb-4">
          Class III certified &nbsp;·&nbsp; 100+ hospitals &nbsp;·&nbsp; Series B
        </p>
        <p className="text-gray-400 max-w-xl mb-12">
          [Company description — 2 sentences. Market problem first, then product.]
        </p>

        {/* Route CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/investor"
            className="px-8 py-4 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition"
          >
            For Investors →
          </Link>
          <Link
            href="/partner"
            className="px-8 py-4 border border-gray-300 text-gray-800 text-sm font-medium rounded-lg hover:border-gray-500 transition"
          >
            For Partners →
          </Link>
        </div>
      </section>

      {/* Trust signals */}
      <section className="border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-center gap-8 text-center text-sm text-gray-500">
          <span>✓ Class III NMPA Certified</span>
          <span>✓ 100+ Hospital Deployments</span>
          <span>✓ Backed by Fosun Pharma</span>
          <span>✓ 100+ Patents Filed</span>
        </div>
      </section>
    </main>
  );
}
