import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";

export const metadata = {
  title: "新闻动态 — 惟德精准",
};

const articles = [
  {
    id: 1,
    date: "2026年7月21日",
    tag: "大会报道",
    title: "燃动冰城！惟德精准手术机器人惊艳亮相呼吸康复年会，引发专家广泛关注",
    excerpt: "惟德精准软组织经皮介入智能手术机器人亮相全国顶级呼吸康复学术年会，引发众多专家及临床医师广泛关注与高度评价。",
    image: "/images/news/news-1/img-1.jpg",
  },
  {
    id: 3,
    date: "2025年",
    tag: "临床案例",
    title: "赋能临床 | 机器人精准穿刺双肺小结节，上海医生诊治肺癌又有新利器",
    excerpt: "上海市公共卫生临床中心完成两例机器人引导下复杂肺部小结节活检手术，在高难度临床场景中充分体现机器人精准穿刺优势。",
    image: "/images/news/news-3/img-1.jpg",
  },
  {
    id: 2,
    date: "2025年12月27日",
    tag: "融资动态",
    title: "惟德精准完成超1.2亿元B轮融资，夯实软组织介入智能手术机器人领先地位",
    excerpt: "本轮融资由广州金控基金和广州天河基金联合领投，充分彰显资本市场对惟德精准技术路线、临床价值及商业化能力的高度认可。",
    image: "/images/news/news-2/img-1.png",
  },
];

export default function ZhNewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="zh" />

      <main className="flex-1 pt-24" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-20">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="label-caps mb-8">新闻动态</div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={40}>
              <h1
                className="font-display font-700 text-ink leading-[1.05] tracking-[-0.01em]"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                来自临床一线的声音。
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
                <Link href={`/zh/news/${article.id}`} className="group flex flex-col md:flex-row gap-8 py-12 hover:opacity-80 transition-opacity duration-200">
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
                    <span className="mt-4 text-[13px] font-500 text-ink">阅读全文 →</span>
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
