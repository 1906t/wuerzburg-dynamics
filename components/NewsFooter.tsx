import Link from "next/link";
import Image from "next/image";

const articles = {
  en: [
    {
      id: 1,
      date: "July 21, 2026",
      tag: "Conference Report",
      title: "Igniting the Ice City: Würzburg Dynamics Surgical Robot Makes a Stunning Debut at the Annual Respiratory Rehabilitation Conference",
      image: "/images/news/news-1/img-1.jpg",
    },
    {
      id: 2,
      date: "December 27, 2025",
      tag: "Investment",
      title: "Würzburg Dynamics Closes RMB 120M+ Series B, Cementing Its Lead in Intelligent Soft Tissue Interventional Surgical Robotics",
      image: "/images/news/news-2/img-1.png",
    },
    {
      id: 3,
      date: "2025",
      tag: "Clinical Case",
      title: "Empowering Clinical Care: Robotic-Guided Precision Biopsy of Bilateral Pulmonary Nodules",
      image: "/images/news/news-3/img-1.jpg",
    },
  ],
  zh: [
    {
      id: 1,
      date: "2026年7月21日",
      tag: "大会报道",
      title: "燃动冰城！惟德精准手术机器人惊艳亮相呼吸康复年会，引发专家广泛关注",
      image: "/images/news/news-1/img-1.jpg",
    },
    {
      id: 2,
      date: "2025年12月27日",
      tag: "融资动态",
      title: "惟德精准完成超1.2亿元B轮融资，夯实软组织介入智能手术机器人领先地位",
      image: "/images/news/news-2/img-1.png",
    },
    {
      id: 3,
      date: "2025年",
      tag: "临床案例",
      title: "赋能临床 | 机器人精准穿刺双肺小结节，上海医生诊治肺癌又有新利器",
      image: "/images/news/news-3/img-1.jpg",
    },
  ],
};

interface Props {
  lang: "en" | "zh";
  currentId: number;
}

export default function NewsFooter({ lang, currentId }: Props) {
  const isEn = lang === "en";
  const list = articles[lang];
  const related = list.filter((a) => a.id !== currentId).slice(0, 2);
  const backHref = isEn ? "/news" : "/zh/news";

  return (
    <section className="border-t border-[#E5E5E4] mt-16 pt-12 px-8 md:px-16 lg:px-24 xl:px-32 pb-16">
      <div className="max-w-[900px] mx-auto">

        <div className="label-caps mb-8">
          {isEn ? "More from Würzburg Dynamics" : "更多新闻"}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {related.map((article) => (
            <Link
              key={article.id}
              href={isEn ? `/news/${article.id}` : `/zh/news/${article.id}`}
              className="group flex flex-col border border-[#E5E5E4] hover:border-ink transition-colors duration-200"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F5F5F3]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 420px"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="label-caps text-[#CC0000]">{article.tag}</span>
                  <span className="text-[11px] text-[#9B9B9B]">· {article.date}</span>
                </div>
                <p className="text-[13px] font-[500] text-ink leading-[1.5] line-clamp-3">
                  {article.title}
                </p>
                <span className="mt-3 inline-block text-[12px] font-500 text-[#6B6B6B] group-hover:text-ink transition-colors">
                  {isEn ? "Read →" : "阅读 →"}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-[13px] font-500 text-[#6B6B6B] hover:text-ink transition-colors duration-150 border border-[#E5E5E4] hover:border-ink px-5 py-2.5"
        >
          ← {isEn ? "Back to all news" : "返回新闻列表"}
        </Link>

      </div>
    </section>
  );
}
