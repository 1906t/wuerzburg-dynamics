import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";

export const metadata = {
  title: "News — Würzburg Dynamics",
};

const articles = [
  {
    id: 1,
    date: "July 21, 2026",
    tag: "Conference Report",
    title: "Igniting the Ice City: Würzburg Dynamics Surgical Robot Makes a Stunning Debut at the Annual Respiratory Rehabilitation Conference",
    excerpt: "The Soft Tissue Percutaneous Intervention Intelligent Surgical Robot drew widespread expert acclaim at China's premier respiratory rehabilitation academic gathering in Harbin.",
    image: "/images/news/news-1/img-1.jpg",
  },
  {
    id: 3,
    date: "2025",
    tag: "Clinical Case",
    title: "Empowering Clinical Care: Robotic-Guided Precision Biopsy of Bilateral Pulmonary Nodules — Shanghai Physicians Gain a New Tool for Lung Cancer Diagnosis",
    excerpt: "Shanghai Public Health Clinical Center completes two complex small pulmonary nodule biopsies guided by percutaneous robotic navigation, demonstrating precision gains in challenging clinical scenarios.",
    image: "/images/news/news-3/img-1.jpg",
  },
  {
    id: 2,
    date: "December 27, 2025",
    tag: "Investment",
    title: "Würzburg Dynamics Closes RMB 120M+ Series B, Cementing Its Lead in Intelligent Soft Tissue Interventional Surgical Robotics",
    excerpt: "Co-led by Guangzhou Financial Holdings Fund and Guangzhou Tianhe Fund, the round marks renewed capital market confidence in the company's technology roadmap, clinical value, and commercialisation capabilities.",
    image: "/images/news/news-2/img-1.png",
  },
];

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="en" />

      <main className="flex-1 pt-24" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-20">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="label-caps mb-8">Latest News</div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={40}>
              <h1
                className="font-display font-700 text-ink leading-[1.05] tracking-[-0.01em]"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                Updates from the field.
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* Article list */}
        <section className="relative px-8 md:px-16 lg:px-24 xl:px-32 pb-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto space-y-0 divide-y divide-[#E5E5E4]">
            {articles.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 0.1}>
                <Link href={`/news/${article.id}`} className="group flex flex-col md:flex-row gap-8 py-12 hover:opacity-80 transition-opacity duration-200">
                  <div className="relative w-full md:w-[280px] flex-shrink-0 aspect-[16/9] overflow-hidden bg-[#F5F5F3]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 280px"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="label-caps text-[#CC0000]">{article.tag}</span>
                      <span className="text-[12px] text-[#9B9B9B]">·</span>
                      <span className="text-[12px] text-[#9B9B9B]">{article.date}</span>
                    </div>
                    <h2
                      className="font-display font-600 text-ink leading-[1.2] mb-4"
                      style={{ fontSize: "clamp(17px, 2vw, 22px)" }}
                    >
                      {article.title}
                    </h2>
                    <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[560px]">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 text-[13px] font-500 text-ink">Read more →</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
