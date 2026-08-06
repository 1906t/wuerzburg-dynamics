import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";
import TechCard from "@/components/TechCard";
import ScrollCue from "@/components/ScrollCue";
import SectionProgress from "@/components/SectionProgress";
import BackToTop from "@/components/BackToTop";
import CredentialBadges from "@/components/CredentialBadges";

const sections = [
  { id: "problem", label: "行业痛点" },
  { id: "platform", label: "技术平台" },
  { id: "workflow", label: "操作流程" },
  { id: "applications", label: "临床应用" },
  { id: "partners", label: "合作医院" },
  { id: "contact", label: "联系我们" },
];

const badges = [
  { label: "双技术路径", sub: "术中CT + 术中超声，国内唯一" },
  { label: "80余家医院", sub: "全国认证临床合作伙伴" },
  { label: "3000台手术量", sub: "已完成临床手术案例" },
  { label: "B轮已完成", sub: "复星医药等机构投资" },
];

const painPoints = [
  {
    label: "结果取决于持针者",
    body: "经皮介入手术缺乏标准化执行层。能否命中目标，取决于医生的经验与手感——导致手术结果因人而异、因院而异、因从业阶段而异。",
  },
  {
    label: "靶点在移动，影像却是静止的",
    body: "肺部病灶随每次呼吸实时漂移。CT影像只捕捉某一瞬间的解剖位置，进针时靶点早已偏移。传统引导系统对此没有实时应对方案。",
  },
  {
    label: "每次穿刺失败都在叠加风险",
    body: "穿刺未能命中，就得重复操作。每增加一次进针，气胸、出血和手术时长的风险随之上升——这些并发症的根源是精度不足，而非疾病本身。",
  },
  {
    label: "医护人员长期承受辐射负担",
    body: "CT和X光引导操作要求医护人员留守辐射区域。数以千计的手术积累下来，术者、放射科医生和护士所承受的累积辐射剂量不容忽视。",
  },
  {
    label: "复杂病例被锁定在顶级中心",
    body: "大角度路径、紧邻血管入路、跨平面穿刺需要多年经验积累。大多数基层医院无力开展此类手术——患者不得不舍近求远，奔赴大城市就诊。",
  },
  {
    label: "经验无法大规模传承",
    body: "资深术者的手感与直觉无法通过规培体系教授。一旦专家退休，知识随之流失。行业至今没有将临床经验编码化、可分发的机制。",
  },
];

const subsystems = [
  {
    name: "超脑",
    zh: "SuperBrain",
    body: "全自动术中CT三维重建（十秒级）。AI驱动器官精细分割与3D智能手术规划。",
  },
  {
    name: "天眼",
    zh: "SkyEye",
    body: "近红外光电实时追踪系统。空间定位精准，实时补偿呼吸运动带来的位移。",
  },
  {
    name: "智手",
    zh: "SmartArm",
    body: "高自由度机械臂精准导航穿刺路径。一键全自动，流畅高效完成手术辅助。",
  },
];

const hospitalLogos = [1,2,3,4,5,6,7,8,9,10,11,23,24,26,27,28,29,30].map(
  (n) => `/images/hospitals/logo-${String(n).padStart(2, "0")}.png`
);

export default function ZhHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="zh" />
      <SectionProgress sections={sections} />

      {/* Hero */}
      <main className="flex-1 flex flex-col justify-center pt-20 sm:pt-24" style={{ position: "relative", zIndex: 1 }}>
        <section className="relative pl-5 sm:pl-8 md:pl-16 lg:pl-24 xl:pl-32 overflow-hidden">
          <div className="w-full">
          {/* Two-column: text left, image right bleeding to edge */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-0 min-h-[70vh] md:min-h-[calc(100vh-96px)] py-8 md:py-0">

            {/* Left: all text content */}
            <div className="flex-1 flex flex-col justify-center md:pr-12 py-10 md:py-16">

              <ScrollReveal delay={0.1}>
                <div className="label-caps mb-8">软组织智能手术机器人 — 深圳</div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} y={60}>
                <div className="flex items-start gap-4 md:block mb-8">
                  <h1
                    className="flex-1 md:flex-none font-display font-700 text-ink leading-[1.0] tracking-[-0.01em]"
                    style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
                  >
                    全球领先的软组织智能手术机器人企业
                  </h1>
                  {/* Mobile-only image beside h1 */}
                  <div className="md:hidden shrink-0 relative aspect-[4/3]" style={{ width: "38%" }}>
                    <Image
                      src="/images/hero-patient.png"
                      alt="惟德精准手术机器人临床使用"
                      fill
                      style={{ objectFit: "contain", objectPosition: "top center" }}
                      priority
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <p className="text-[17px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[560px] mb-10">
                  惟德精准是国内首家同时掌握术中CT与术中超声双技术路径的手术机器人企业。
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.45}>
                <div className="flex items-center gap-4 mb-10">
                  <Link
                    href="/zh/investor"
                    className="px-7 py-3.5 bg-ink text-white text-[13px] font-500 tracking-[0.02em] hover:bg-[#2a2a2a] transition-colors duration-150"
                  >
                    投资人信息
                  </Link>
                  <Link
                    href="/zh/partner"
                    className="px-7 py-3.5 border border-ink text-ink text-[13px] font-500 tracking-[0.02em] hover:bg-[#F5F5F4] transition-colors duration-150"
                  >
                    合作伙伴
                  </Link>
                </div>
              </ScrollReveal>

              {/* Trust badges */}
              <div className="border-t border-[#E5E5E4] pt-8">
                <div className="grid grid-cols-2 gap-6 sm:gap-0 sm:grid-cols-4 sm:divide-x sm:divide-[#E5E5E4]">
                  {badges.map((b) => (
                    <div key={b.label} className="sm:px-6 first:pl-0 last:pr-0">
                      <div className="font-display font-600 text-[15px] tracking-[0.01em] text-ink mb-1">{b.label}</div>
                      <div className="text-[11px] font-[400] text-[#6B6B6B] tracking-[0.01em] leading-[1.5]">{b.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: desktop-only — wider column, bleeds to viewport edge */}
            <div className="hidden md:block flex-[1.3] self-stretch relative min-h-[420px]">
              {/* Left-edge fade */}
              <div
                className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, white, transparent)" }}
              />

              <Image
                src="/images/hero-system.png"
                alt="惟德精准双系统手术机器人"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                priority
              />

              {/* Floating credential badges — fly-in + reticle lock on load */}
              <CredentialBadges
                badges={[
                  { label: "国家三类医疗器械注册证", sub: "国内最高级别器械注册认证" },
                  { label: "穿刺精度 ≤ 0.8mm", sub: "肺部 · 肾脏 · 肝脏" },
                ]}
              />
            </div>

          </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center">
            <ScrollCue targetId="problem" label="向下浏览" />
          </div>
        </section>

        {/* Problem section */}
        <section id="problem" className="relative py-16 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white scroll-mt-24">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-5">行业痛点</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-4"
                style={{ fontSize: "clamp(22px, 3.5vw, 42px)" }}
              >
                介入手术，<br className="hidden sm:block" />仍靠经验与直觉驱动
              </h2>
              <p className="text-[14px] md:text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] max-w-[600px] mb-10">
                经皮介入手术至今未实现其他介入医学领域早已完成的标准化。以下六大结构性痛点依然悬而未决。
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#E5E5E4]">
              {painPoints.map((p, i) => (
                <div
                  key={p.label}
                  className={`p-6 md:p-8 ${i % 2 === 0 ? "md:border-r border-[#E5E5E4]" : ""} ${i < 4 ? "border-b border-[#E5E5E4]" : ""}`}
                >
                  <div className="w-6 h-[2px] bg-[#CC0000] mb-4" />
                  <div className="font-display font-600 text-[16px] md:text-[17px] text-ink mb-3">{p.label}</div>
                  <p className="text-[14px] md:text-[15px] font-[300] text-[#6B6B6B] leading-[1.75]">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology — 3 subsystems */}
        <section id="platform" className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 scroll-mt-24">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">技术平台</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-4"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                三大系统协同，<br />一套流程完成手术
              </h2>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.7] mb-10 max-w-[560px]">
                不改变现有手术流程，用数据代替经验猜测，用机械臂精准定位代替手动操作。
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {subsystems.map((s, i) => (
                <TechCard
                  key={s.name}
                  name={s.name}
                  zh={s.zh}
                  body={s.body}
                  circleOffset={i * 10}
                />
              ))}
            </div>
            <p className="text-[11px] font-[400] text-[#AAAAAA] tracking-[0.07em] uppercase mt-3">
              悬停查看各系统详情 ↑
            </p>
          </div>
        </section>

        {/* 4-step workflow */}
        <section id="workflow" className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white scroll-mt-24">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="label-caps mb-6">操作流程</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-12"
              style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
            >
              四步完成手术，<br />一次CT，亚毫米精度
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#E5E5E4] mb-10">
              {[
                { step: "01", title: "CT扫描", body: "将近红外标志物附着于患者体表，CT扫描采集空间数据。" },
                { step: "02", title: "三维重建", body: "一键导入CT数据，系统全自动快速完成器官三维重建。" },
                { step: "03", title: "手术规划", body: "AI智能识别目标靶点，实时生成三维手术规划路径。" },
                { step: "04", title: "智能导航", body: "六轴机械臂自动定位，辅助术者精准完成穿刺操作。" },
              ].map((s, i) => (
                <div key={s.step} className={`p-6 ${i < 3 ? "border-r border-[#E5E5E4]" : ""}`}>
                  <div className="font-display font-700 text-[28px] text-[#E5E5E4] mb-3">{s.step}</div>
                  <div className="font-display font-600 text-[16px] text-ink mb-2">{s.title}</div>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.7]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical applications */}
        <section id="applications" className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 scroll-mt-24">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="label-caps mb-6">临床应用</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-12"
              style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
            >
              多类术式，<br />统一平台支持
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "组织活检", body: "经皮穿刺取材，用于病理及免疫组化诊断、基因组分析。" },
                { title: "肿瘤消融", body: "精准贴合规划路径，减少术中风险，提升消融治疗效果。" },
                { title: "胸腔镜定位", body: "自动三维重建与术前病灶定位，辅助胸腔镜切除。" },
                { title: "粒子/药物植入", body: "靶向放射性粒子植入治疗，精准引导植入路径。" },
              ].map((a) => (
                <div key={a.title}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/bullet-point.png" alt="" width={22} height={22} className="mb-3" />
                  <div className="font-display font-600 text-[17px] text-ink mb-2">{a.title}</div>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.75]">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hospital logos */}
        <section id="partners" className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white scroll-mt-24">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">临床合作医院</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-3"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                已覆盖全国<br />各大顶级医院
              </h2>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.7] mb-10 max-w-[480px]">
                全国80余家顶级医院，累计完成3,000余台精准手术
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-[#E5E5E4]">
              {hospitalLogos.map((src, i) => (
                <div
                  key={i}
                  className="border-b border-r border-[#E5E5E4] flex items-center justify-center p-4"
                  style={{ height: 90 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`合作医院 ${i + 1}`}
                      fill
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 scroll-mt-24">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="relative bg-[#FAFAF7] overflow-hidden">
              <div className="px-8 md:px-14 py-16 md:py-20">
                <ScrollReveal>
                  <div className="label-caps mb-6">与我们合作</div>
                  <h2
                    className="font-display font-700 text-ink leading-[1.1] mb-6"
                    style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
                  >
                    两种方式，<br />共建外科手术的未来
                  </h2>
                  <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] max-w-[520px] mb-12">
                    无论您是希望投资下一代手术机器人，还是将其带入您所在市场的医院——
                    我们都期待与您沟通。
                  </p>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/zh/investor" className="group relative bg-white border border-[#E5E5E4] hover:border-ink transition-colors duration-200 p-8 flex flex-col overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FFCC00]" />
                    <div className="label-caps mb-3">投资人</div>
                    <div className="font-display font-600 text-ink text-[20px] mb-2">B轮 · 全国商业化扩张</div>
                    <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.7] mb-6 flex-1">
                      100余家医院、国家三类证、市场份额第二。查看产品管线与融资历程。
                    </p>
                    <span className="text-[13px] font-500 text-ink group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-2">
                      查看投资人信息 →
                    </span>
                  </Link>
                  <Link href="/zh/partner" className="group relative bg-white border border-[#E5E5E4] hover:border-ink transition-colors duration-200 p-8 flex flex-col overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#CC0000]" />
                    <div className="label-caps mb-3">合作伙伴</div>
                    <div className="font-display font-600 text-ink text-[20px] mb-2">分销 · 海外市场</div>
                    <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.7] mb-6 flex-1">
                      东南亚及中东地区独家区域权益，提供注册与临床支持。
                    </p>
                    <span className="text-[13px] font-500 text-ink group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-2">
                      了解合作方式 →
                    </span>
                  </Link>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <span className="text-[13px] text-[#9B9B9B]">或直接联系我们</span>
                  <a
                    href="mailto:info@wuerzburg-dynamics.com"
                    className="text-[14px] font-500 text-ink border-b border-ink/30 hover:border-ink pb-0.5 transition-colors duration-150 w-fit"
                  >
                    info@wuerzburg-dynamics.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BackToTop label="返回顶部" />
      </main>

      {/* Footer */}
    </div>
  );
}
