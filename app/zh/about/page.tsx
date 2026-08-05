import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";
import LeadershipGrid from "@/components/LeadershipGrid";
import type { Leader } from "@/components/LeadershipGrid";

const zhLeaders: Leader[] = [
  {
    name: "谢卫国博士", role: "创始人兼首席执行官", image: "/images/team/xie.png",
    credentials: ["计算工程硕士（生物医学工程方向，西门子奖学金），弗里德里希-亚历山大大学埃尔朗根-纽伦堡，德国", "生物医学工程博士，伯尔尼大学，瑞士", "国家重大人才项目专家；坪山聚龙英才计划A类领军人才"],
    bio: ["研究方向：微创介入手术、机器人辅助手术。在医疗器械与机器人领域具有丰富的行业经验。", "在德国及瑞士完成13个项目，开发7款创新产品原型，申请76项专利，已获国家二类医疗器械注册证1项。"],
    former: ["西门子医疗（德国）", "海德堡大学医学院骨科医院（德国）", "Surpath Medical GmbH（德国）— 首席执行官/首席技术官"],
    formerLabel: "曾任职",
  },
  {
    name: "卢博士", role: "首席科学家", image: "/images/team/lu.png",
    credentials: ["医学图像分析博士，伯尔尼大学，瑞士"],
    bio: ["拥有20年医学图像处理、手术导航、超声系统及人工智能行业经验。", "曾担任伯尔尼大学ARTORG研究中心图像引导软组织手术研究组组长。"],
    former: ["飞利浦医疗", "伯尔尼大学ARTORG研究中心 — 研究组组长"],
    formerLabel: "曾任职",
  },
  {
    name: "黄博士", role: "首席AI算法科学家", image: "/images/team/huang.png",
    credentials: ["计算机科学博士，德累斯顿工业大学，德国", "海归学者，正教授", "发表学术论文40余篇，含Nature子刊；持有17项专利及软件著作权"],
    bio: ["拥有20年计算机科学、大数据与人工智能领域从业经验。"],
    former: ["德国癌症研究中心（DKFZ）", "西门子医疗分子影像部门（德国）"],
    formerLabel: "曾任职",
  },
  {
    name: "翟博士", role: "软件架构师 / 质控认证总监", image: "/images/team/zhai.jpg",
    credentials: ["系统工程博士，东南大学", "计算机科学博士，维尔茨堡大学，德国"],
    bio: ["拥有30年软件系统设计、产品研发及质量管理经验。"],
    former: ["Stochastikon GmbH（德国）", "Surpath Medical"],
    formerLabel: "曾任职",
  },
  {
    name: "张总监", role: "产品开发总监", image: "/images/team/zhang.png",
    credentials: ["机械工程硕士，西安电子科技大学", "高级工程师", "持有50余项专利及8项软件著作权"],
    bio: ["拥有30年精密装备与机器人研发、产品开发及技术团队管理经验。"],
    former: ["航天动力研发中心主任", "航天数字联合技术副总裁兼总经理", "深圳安泽智能研发副总裁"],
    formerLabel: "曾任职",
  },
];

const metrics = [
  { value: "100+", label: "专利", sub: "逾70%为发明专利" },
  { value: "70%+", label: "研发人员占比", sub: "技术驱动型组织" },
  { value: "B轮", label: "融资轮次", sub: "累计融资超1.1亿元" },
  { value: "三类证", label: "NMPA认证", sub: "国家最高级别医疗器械注册" },
  { value: "80余家", label: "合作医院", sub: "全国商业化部署" },
  { value: "9项", label: "软件著作权", sub: "自主平台知识产权" },
];

const awards = [
  { title: "国家高新技术企业", body: "经科技部认定的国家级高新技术企业。" },
  { title: '国家级专精特新"小巨人"', body: "国家工信部认定，专精特新领军企业。" },
  { title: "前海粤港澳台青年创新创业大赛", body: "铜奖（企业成长组）。" },
  { title: "深圳创新创业大赛", body: "优秀奖。" },
  { title: "中国创新创业大赛", body: "优秀奖（成长组）。" },
];

const exploreCards = [
  {
    title: "管理团队",
    body: "认识推动平台研发的博士及工程师团队。",
    href: "/zh/about/team",
    cta: "认识团队 →",
    disabled: false,
  },
  {
    title: "公司地址",
    body: "总部位于深圳市坪山区，中国医疗器械创新核心区域。",
    href: "#location",
    cta: "查看地址 →",
    disabled: false,
  },
  {
    title: "荣誉资质",
    body: "国家高新技术企业、专精特新小巨人及多项创业竞赛奖项。",
    href: "#recognition",
    cta: "查看荣誉 →",
    disabled: false,
  },
];

export default function ZhAbout() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="zh" />

      <main className="flex-1 pt-24" style={{ position: "relative", zIndex: 1 }}>

        {/* Hero */}
        <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-24 min-h-[60vh] flex items-center">
          <div className="max-w-[1200px] mx-auto w-full">
            <ScrollReveal delay={0.1}>
              <div className="label-caps mb-8">关于我们</div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={60}>
              <h1
                className="font-display font-700 text-ink leading-[1.0] tracking-[-0.01em] mb-8"
                style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
              >
                科学家创立，<br />部署于手术室。
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <p className="text-[17px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[560px]">
                惟德精准是国内唯一同时掌握术中CT与术中超声双技术路径的手术机器人企业，
                已获国家三类医疗器械注册证，覆盖全国80余家医院，完成商业化部署。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Story */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">公司故事</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-10"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                为解决外科医生<br />习以为常的问题而生。
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal delay={0.1}>
                <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-6">
                  惟德精准（Würzburg Dynamics）由一支海外博士团队于2019年12月联合创立，
                  核心成员曾就职或就读于西门子（德国）、飞利浦（中国）、
                  马克斯·普朗克研究所（德国）、海德堡大学（德国）及伯尔尼大学（瑞士）等顶尖机构。
                </p>
                <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8]">
                  创业的起点是一个朴素的发现：经皮介入手术——活检、消融、粒子植入——
                  几十年来仍高度依赖术者个人经验。命中直径5毫米的运动靶点，
                  决定结果的往往是医生的手感，而非药物或器械。我们决心改变这一现状。
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-6">
                  我们构建的平台融合了全自动术中三维重建、AI智能手术规划、
                  近红外实时追踪与高自由度机械臂控制，无缝嵌入现有临床流程，无需改变操作习惯。
                  术者始终主导决策，系统确保精度。
                </p>
                <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8]">
                  公司70%以上员工从事研发，拥有100余项专利（其中70%以上为发明专利）
                  及9项软件著作权，已完成国家三类医疗器械注册，
                  并正向全国顶级医院持续扩展部署，并逐步布局国际市场。
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 管理团队 */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">管理团队</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-4"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                五位海归博士，<br />同解一道难题。
              </h2>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[560px] mb-10">
                创始团队来自西门子、飞利浦、伯尔尼大学及海德堡大学。
                悬停查看各成员职位，点击阅读完整简介。
              </p>
            </ScrollReveal>
            <LeadershipGrid leaders={zhLeaders} />
          </div>
        </section>

        {/* By the Numbers */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">核心数据</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-12"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                专注深科技，<br />长期主义驱动。
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-[#E5E5E4]">
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`p-8 ${
                    i % 3 < 2 ? "border-r border-[#E5E5E4]" : ""
                  } ${i < 3 ? "border-b border-[#E5E5E4]" : ""}`}
                >
                  <div
                    className="font-display font-700 text-ink mb-1"
                    style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
                  >
                    {m.value}
                  </div>
                  <div className="font-display font-600 text-[14px] text-ink mb-1">{m.label}</div>
                  <div className="text-[12px] font-[300] text-[#6B6B6B]">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Further */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">深入了解</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-12"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                更多关于<br />惟德精准。
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E5E5E4]">
              {exploreCards.map((c, i) => (
                <div
                  key={c.title}
                  className={`p-8 flex flex-col ${i < exploreCards.length - 1 ? "border-b md:border-b-0 md:border-r border-[#E5E5E4]" : ""}`}
                >
                  <div className="font-display font-600 text-[18px] text-ink mb-3">{c.title}</div>
                  <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.65] flex-1 mb-6">{c.body}</p>
                  {c.disabled ? (
                    <span className="text-[12px] text-[#C0C0BE] tracking-[0.04em]">{c.cta}</span>
                  ) : (
                    <Link
                      href={c.href}
                      className="text-[12px] font-500 text-ink tracking-[0.02em] hover:text-[#6B6B6B] transition-colors duration-150"
                    >
                      {c.cta}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">公司地址</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-10"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                深圳，中国。
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ScrollReveal>
                <div className="border-t-2 border-ink pt-6">
                  <div className="font-display font-600 text-[16px] text-ink mb-2">总部地址</div>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    深圳惟德精准医疗科技有限公司<br />
                    Würzburg Dynamics (Shenzhen) Ltd.<br />
                    广东省深圳市坪山区
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="border-t-2 border-ink pt-6">
                  <div className="font-display font-600 text-[16px] text-ink mb-2">联系方式</div>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    info@wuerzburg-dynamics.com<br />
                    +86 (0)755 8966 6820
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="border-t-2 border-ink pt-6">
                  <div className="font-display font-600 text-[16px] text-ink mb-4">关注我们</div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/wechat-qr.jpg"
                    alt="微信公众号二维码"
                    className="w-[120px] h-[120px] object-cover mb-3"
                  />
                  <p className="text-[12px] font-[300] text-[#6B6B6B] leading-[1.7]">
                    扫码关注惟德精准微信公众号，获取产品资讯与最新动态。
                  </p>
                  <p className="text-[11px] text-[#AAAAAA] mt-1">需使用微信扫码。</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section id="recognition" className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">荣誉资质</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-12"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                所获奖项与认定。
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#E5E5E4]">
              {awards.map((a, i) => (
                <div
                  key={a.title}
                  className={`p-8 ${i % 2 === 0 ? "md:border-r border-[#E5E5E4]" : ""} ${i < awards.length - 1 ? "border-b border-[#E5E5E4]" : ""}`}
                >
                  <div className="font-display font-600 text-[15px] text-ink mb-2">{a.title}</div>
                  <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.65]">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
    </div>
  );
}
