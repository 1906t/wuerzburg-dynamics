import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";

const badges = [
  { label: "国家三类证", sub: "NMPA最高级别医疗器械认证" },
  { label: "100+家医院", sub: "全国认证临床合作伙伴" },
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
    en: "SuperBrain",
    body: "全自动术中CT三维重建（十秒级）。AI驱动器官精细分割与3D智能手术规划。",
  },
  {
    name: "天眼",
    en: "SkyEye",
    body: "近红外光电实时追踪系统。空间定位精准，实时补偿呼吸运动带来的位移。",
  },
  {
    name: "智手",
    en: "SmartArm",
    body: "高自由度机械臂精准导航穿刺路径。一键全自动，流畅高效完成手术辅助。",
  },
];

export default function ZhHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="zh" />

      <main className="flex-1 flex flex-col justify-center pt-24" style={{ position: "relative", zIndex: 1 }}>
        <div className="px-8 md:px-16 lg:px-24 xl:px-32 max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 min-h-[calc(100vh-96px)]">

            {/* Text */}
            <div className="flex-1 flex flex-col justify-center py-16">
              <ScrollReveal delay={0.1}>
                <div className="label-caps mb-10">软组织智能手术机器人 — 深圳</div>
              </ScrollReveal>
              <ScrollReveal delay={0.2} y={60}>
                <h1
                  className="font-display font-700 text-ink leading-[1.0] tracking-[-0.01em] mb-8"
                  style={{ fontSize: "clamp(38px, 5.5vw, 72px)" }}
                >
                  全球领先的<br />
                  软组织智能<br />
                  手术机器人企业
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.35}>
                <p className="text-[17px] font-[300] text-[#6B6B6B] leading-[1.65] max-w-[480px] mb-14">
                  惟德精准（Würzburg Dynamics）是国内首家同时掌握术中CT与术中超声双技术路径的手术机器人企业，
                  国家三类证已获批，已在全国100余家医院完成商业化部署。
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.45}>
                <div className="flex items-center gap-4 mb-16">
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

              <div className="border-t border-[#E5E5E4] pt-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-[#E5E5E4]">
                  {badges.map((b) => (
                    <div key={b.label} className="sm:px-8 first:pl-0 last:pr-0">
                      <div className="font-display font-600 text-[17px] tracking-[0.01em] text-ink mb-1">{b.label}</div>
                      <div className="text-[11px] font-[400] text-[#6B6B6B] tracking-[0.01em] leading-[1.5]">{b.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product image */}
            <div className="lg:w-[480px] lg:flex-shrink-0 flex items-center justify-center py-8 lg:py-0">
              <div className="relative w-full max-w-[440px] aspect-[4/3]">
                <Image
                  src="/images/hero-system.png"
                  alt="惟德精准手术机器人系统"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

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

        {/* Technology */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="label-caps mb-6">技术平台</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
            >
              三大系统协同，<br />一套流程完成手术。
            </h2>
            <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.7] mb-12 max-w-[560px]">
              不改变现有手术流程，用数据代替经验猜测，用机械臂精准定位代替手动操作。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subsystems.map((s) => (
                <div key={s.name} className="border-t-2 border-ink pt-6">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-display font-700 text-[20px] text-ink">{s.name}</span>
                    <span className="text-[12px] text-[#6B6B6B] font-[400]">{s.en}</span>
                  </div>
                  <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.65]">{s.body}</p>
                </div>
              ))}
            </div>
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
