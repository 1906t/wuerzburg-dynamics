import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";
import LeadershipGrid from "@/components/LeadershipGrid";
import type { Leader } from "@/components/LeadershipGrid";

const leaders: Leader[] = [
  {
    name: "谢卫国博士",
    role: "创始人兼首席执行官",
    image: "/images/team/xie.png",
    credentials: [
      "计算工程硕士（生物医学工程方向，西门子奖学金），弗里德里希-亚历山大大学埃尔朗根-纽伦堡，德国",
      "生物医学工程博士，伯尔尼大学，瑞士",
      "国家重大人才项目专家；坪山聚龙英才计划A类领军人才",
    ],
    bio: [
      "研究方向：微创介入手术、机器人辅助手术。在医疗器械与机器人领域具有丰富的行业经验。",
      "在德国及瑞士完成13个项目，开发7款创新产品原型，申请76项专利，已获国家二类医疗器械注册证1项。",
    ],
    former: [
      "西门子医疗（德国）",
      "海德堡大学医学院骨科医院（德国）",
      "Surpath Medical GmbH（德国）— 首席执行官/首席技术官",
    ],
    formerLabel: "曾任职",
  },
  {
    name: "卢博士",
    role: "首席科学家",
    image: "/images/team/lu.png",
    credentials: [
      "医学图像分析博士，伯尔尼大学，瑞士",
    ],
    bio: [
      "拥有20年医学图像处理、手术导航、超声系统及人工智能行业经验。",
      "曾担任伯尔尼大学ARTORG研究中心图像引导软组织手术研究组组长。",
    ],
    former: [
      "飞利浦医疗",
      "伯尔尼大学ARTORG研究中心 — 研究组组长",
    ],
    formerLabel: "曾任职",
  },
  {
    name: "黄博士",
    role: "首席AI算法科学家",
    image: "/images/team/huang.png",
    credentials: [
      "计算机科学博士，德累斯顿工业大学，德国",
      "海归学者，正教授",
      "发表学术论文40余篇，含Nature子刊；持有17项专利及软件著作权",
    ],
    bio: [
      "拥有20年计算机科学、大数据与人工智能领域从业经验。",
    ],
    former: [
      "德国癌症研究中心（DKFZ）",
      "西门子医疗分子影像部门（德国）",
    ],
    formerLabel: "曾任职",
  },
  {
    name: "翟博士",
    role: "软件架构师 / 质控认证总监",
    image: "/images/team/zhai.jpg",
    credentials: [
      "系统工程博士，东南大学",
      "计算机科学博士，维尔茨堡大学，德国",
    ],
    bio: [
      "拥有30年软件系统设计、产品研发及质量管理经验。",
    ],
    former: [
      "Stochastikon GmbH（德国）",
      "Surpath Medical",
    ],
    formerLabel: "曾任职",
  },
  {
    name: "张总监",
    role: "产品开发总监",
    image: "/images/team/zhang.png",
    credentials: [
      "机械工程硕士，西安电子科技大学",
      "高级工程师",
      "持有50余项专利及8项软件著作权",
    ],
    bio: [
      "拥有30年精密装备与机器人研发、产品开发及技术团队管理经验。",
    ],
    former: [
      "航天动力研发中心主任",
      "航天数字联合技术副总裁兼总经理",
      "深圳安泽智能研发副总裁",
    ],
    formerLabel: "曾任职",
  },
];

export default function ZhTeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="zh" />

      <main className="flex-1 pt-24" style={{ position: "relative", zIndex: 1 }}>

        {/* Hero */}
        <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-24 min-h-[50vh] flex items-center">
          <div className="max-w-[1200px] mx-auto w-full">
            <ScrollReveal delay={0.1}>
              <div className="label-caps mb-8">管理团队</div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={60}>
              <h1
                className="font-display font-700 text-ink leading-[1.0] tracking-[-0.01em] mb-8"
                style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
              >
                博士、工程师，<br />与实践者。
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <p className="text-[17px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[560px]">
                创始团队汇聚欧洲顶尖医疗工程机构的深厚科研背景，
                与数十年一线产品及临床实践经验于一体。点击成员卡片查看完整简介。
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
              href="/zh/about"
              className="text-[13px] font-500 text-[#6B6B6B] hover:text-ink transition-colors duration-150 tracking-[0.02em]"
            >
              ← 返回关于我们
            </a>
          </div>
        </section>

      </main>

      <footer className="border-t border-[#E5E5E4] px-8 md:px-16 lg:px-24 xl:px-32 py-6" style={{ position: "relative", zIndex: 1 }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <span className="text-[11px] text-[#6B6B6B] tracking-[0.04em]">
            © 2025 深圳惟德精准医疗科技有限公司
          </span>
          <span className="text-[11px] text-[#6B6B6B] tracking-[0.04em]">
            info@wuerzburg-dynamics.com · +86 (0)755 8966 6820
          </span>
        </div>
      </footer>
    </div>
  );
}
