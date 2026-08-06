import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "联系我们 — 惟德精准",
};

// TODO: 替换为公司真实的 Calendly（或其他预约工具）链接
const CALENDLY_URL = "https://calendly.com/wuerzburg-dynamics";

const methods = [
  {
    label: "邮箱",
    value: "info@wuerzburg-dynamics.com",
    href: "mailto:info@wuerzburg-dynamics.com",
  },
  {
    label: "电话",
    value: "+86 (0)755 8966 6820",
    href: "tel:+8607558966820",
  },
  {
    label: "公司地址",
    value: "广东省深圳市坪山区\n坪山大道2007号创新广场B1504",
  },
];

export default function ZhContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="zh" />

      <main className="flex-1 pt-24" style={{ position: "relative", zIndex: 1 }}>

        {/* Hero */}
        <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-20 md:py-24">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="label-caps mb-8">联系我们</div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={50}>
              <h1
                className="font-display font-700 text-ink leading-[1.1] tracking-[-0.01em] mb-8"
                style={{ fontSize: "clamp(36px, 5vw, 68px)" }}
              >
                与我们沟通
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <p className="text-[17px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[560px]">
                无论您是投资人、分销合作伙伴，还是希望了解产品的医院——
                我们都会认真阅读每一条留言，并亲自回复。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Direct methods */}
        <section className="relative py-20 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {methods.map((m, i) => (
                <ScrollReveal key={m.label} delay={i * 0.1}>
                  <div className="border-t-2 border-ink pt-6">
                    <div className="label-caps mb-3">{m.label}</div>
                    {m.href ? (
                      <a
                        href={m.href}
                        className="font-display font-600 text-[18px] text-ink hover:text-[#6B6B6B] transition-colors duration-150"
                      >
                        {m.value}
                      </a>
                    ) : (
                      <p className="font-display font-600 text-[18px] text-ink leading-[1.5] whitespace-pre-line">
                        {m.value}
                      </p>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Book a call */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <div className="relative bg-[#FAFAF7] overflow-hidden">
              <div className="px-8 md:px-14 py-16 md:py-20">
                <ScrollReveal>
                  <div className="label-caps mb-6">预约沟通</div>
                  <h2
                    className="font-display font-700 text-ink leading-[1.1] mb-6"
                    style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}
                  >
                    预约一次30分钟的<br />初步沟通
                  </h2>
                  <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] max-w-[520px] mb-10">
                    选择您方便的时间，我们将为您介绍产品平台、临床证据，
                    以及合作或投资的具体方式。
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-ink text-white text-[13px] font-500 tracking-[0.03em] hover:bg-[#2a2a2a] transition-colors duration-150 inline-block"
                  >
                    预约沟通 →
                  </a>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Audience routing */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">从这里开始</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-12"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                找到合适的<br />沟通方向
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/zh/investor" className="group relative border border-[#E5E5E4] hover:border-ink transition-colors duration-200 p-8 flex flex-col overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FFCC00]" />
                <div className="label-caps mb-3">投资人</div>
                <div className="font-display font-600 text-ink text-[20px] mb-2">B轮 · 全国商业化扩张</div>
                <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.7] mb-6 flex-1">
                  产品管线、融资历程与市场地位。
                </p>
                <span className="text-[13px] font-500 text-ink group-hover:translate-x-1 transition-transform duration-200">
                  查看投资人信息 →
                </span>
              </Link>
              <Link href="/zh/partner" className="group relative border border-[#E5E5E4] hover:border-ink transition-colors duration-200 p-8 flex flex-col overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#CC0000]" />
                <div className="label-caps mb-3">合作伙伴</div>
                <div className="font-display font-600 text-ink text-[20px] mb-2">分销 · 海外市场</div>
                <p className="text-[13px] font-[300] text-[#6B6B6B] leading-[1.7] mb-6 flex-1">
                  区域权益、注册支持与商业模式。
                </p>
                <span className="text-[13px] font-500 text-ink group-hover:translate-x-1 transition-transform duration-200">
                  了解合作方式 →
                </span>
              </Link>
            </div>
          </div>
        </section>

        <BackToTop label="返回顶部" />
      </main>
    </div>
  );
}
