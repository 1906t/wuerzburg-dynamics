import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";
import TechCard from "@/components/TechCard";

const badges = [
  { label: "国家三类证", sub: "NMPA最高级别医疗器械认证" },
  { label: "80余家医院", sub: "全国认证临床合作伙伴" },
  { label: "3000台手术量", sub: "已完成临床手术案例" },
  { label: "B轮已完成", sub: "复星医药等机构投资" },
];

const painPoints = [
  {
    label: "高度依赖医生经验",
    body: "传统经皮穿刺完全依赖术者技能，精度因人而异，学习曲线长，小病灶穿刺精度低。",
  },
  {
    label: "仅靠术前影像定位",
    body: "传统系统只依赖术前CT或超声，术中解剖形态变化无法实时追踪，导致定位偏差。",
  },
  {
    label: "并发症风险高",
    body: "多次穿刺尝试增加气胸、血胸、术中出血等并发症风险，耗时长、患者痛苦大。",
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

      {/* Hero */}
      <main className="flex-1 flex flex-col justify-center pt-24" style={{ position: "relative", zIndex: 1 }}>
        <section className="px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="max-w-[1200px] mx-auto w-full">
          {/* Two-column on md+: left = all text, right = image */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-12 min-h-[calc(100vh-96px)] py-10">

            {/* Left: all text content */}
            <div className="flex-1 flex flex-col justify-center">

              <ScrollReveal delay={0.1}>
                <div className="label-caps mb-8">软组织智能手术机器人 — 深圳</div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} y={60}>
                <div className="flex items-start gap-4 md:block mb-8">
                  <h1
                    className="flex-1 md:flex-none font-display font-700 text-ink leading-[1.0] tracking-[-0.01em]"
                    style={{ fontSize: "clamp(30px, 5vw, 68px)" }}
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
                <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.65] max-w-[480px] mb-10">
                  惟德精准是国内首家同时掌握术中CT与术中超声双技术路径的手术机器人企业，
                  国家三类证已获批，已在全国80余家医院完成商业化部署。
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

            {/* Right: desktop-only image column */}
            <div className="hidden md:flex flex-shrink-0 md:w-[340px] lg:w-[460px] xl:w-[520px] items-center justify-center">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/hero-patient.png"
                  alt="惟德精准手术机器人临床使用"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  priority
                />
              </div>
            </div>

          </div>
          </div>
        </section>

        {/* Problem section */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">行业痛点</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-12"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                传统经皮穿刺：<br />依赖经验、定位不准、并发症多。
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E5E5E4]">
              {painPoints.map((p, i) => (
                <div
                  key={p.label}
                  className={`p-8 ${i < painPoints.length - 1 ? "border-b md:border-b-0 md:border-r border-[#E5E5E4]" : ""}`}
                >
                  <div className="font-display font-600 text-[16px] text-ink mb-3">{p.label}</div>
                  <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.65]">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology — 3 subsystems */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">技术平台</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-4"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                三大系统协同，<br />一套流程完成手术。
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
            <p className="text-[11px] font-[400] text-[#AAAAAA] tracking-[0.07em] uppercase mt-3 mb-12">
              悬停查看各系统详情 ↑
            </p>
          </div>
        </section>

        {/* 4-step workflow */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="label-caps mb-6">操作流程</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-12"
              style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
            >
              四步完成手术。<br />一次CT，亚毫米精度。
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
                  <div className="font-display font-600 text-[15px] text-ink mb-2">{s.title}</div>
                  <p className="text-[12px] font-[300] text-[#6B6B6B] leading-[1.6]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical applications */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="label-caps mb-6">临床应用</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-12"
              style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
            >
              多类术式，<br />统一平台支持。
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "组织活检", body: "经皮穿刺取材，用于病理及免疫组化诊断、基因组分析。" },
                { title: "肿瘤消融", body: "精准贴合规划路径，减少术中风险，提升消融治疗效果。" },
                { title: "胸腔镜定位", body: "自动三维重建与术前病灶定位，辅助胸腔镜切除。" },
                { title: "粒子/药物植入", body: "靶向放射性粒子植入治疗，精准引导植入路径。" },
              ].map((a) => (
                <div key={a.title} className="border-t-2 border-ink pt-5">
                  <div className="font-display font-600 text-[15px] text-ink mb-2">{a.title}</div>
                  <p className="text-[12px] font-[300] text-[#6B6B6B] leading-[1.6]">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hospital logos */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">临床合作医院</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-3"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                已覆盖全国<br />各大顶级医院。
              </h2>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.7] mb-10 max-w-[480px]">
                手术量仅3000台，合作医院80余家。
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
      </main>

      {/* Footer */}
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
