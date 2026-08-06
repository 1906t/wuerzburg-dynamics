import Link from "next/link";
import Nav from "@/components/Nav";
import BackToTop from "@/components/BackToTop";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";

export const metadata = {
  title: "合作伙伴 — 惟德精准",
};

export default function ZhPartnerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="zh" />

      <main className="flex-1 pt-24" style={{ position: "relative", zIndex: 1 }}>

        {/* Hero */}
        <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-24 min-h-[60vh] flex items-center">
          <div className="max-w-[1200px] mx-auto w-full">
            <ScrollReveal delay={0.1}>
              <div className="label-caps mb-8">分销合作伙伴</div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={60}>
              <h1
                className="font-display font-700 text-ink leading-[1.0] tracking-[-0.01em] mb-8"
                style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
              >
                技术已验证<br />现在向海外<br />共同拓展
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <p className="text-[17px] font-[300] text-[#6B6B6B] leading-[1.7] max-w-[560px]">
                惟德精准已在国内100余家医院完成部署，正积极拓展国际市场。
                我们寻找具备当地监管资源、临床关系和分销能力的合作伙伴，
                给予相应地区独家或优先合作权益。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Product overview */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">产品概览</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-10"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                为新类别<br />构建的平台
              </h2>
            </ScrollReveal>
            <div className="space-y-0 border-t border-[#E5E5E4]">
              {[
                { title: "双路径影像", body: "术中CT引导 + 超声引导双技术，国内唯一。兼容C臂、CBCT、OBCT多种影像平台。" },
                { title: "AI手术规划", body: "全自动三维器官重建（十秒级），实时呼吸运动补偿。精度约1mm（肺），约3mm（肾）。" },
                { title: "手术类型", body: "活检、消融、引流、取石、粒子植入——覆盖肺、肾及未来适应症。" },
                { title: "商业模式", body: "资本设备销售 + 耗材复购。软件许可证及年度服务合同可选。" },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.05}>
                  <div className="py-6 border-b border-[#E5E5E4]">
                    <div className="font-display font-600 text-[16px] text-ink mb-2">{item.title}</div>
                    <div className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.6]">{item.body}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership models */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">合作模式</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-10"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                三种合作方式
              </h2>
            </ScrollReveal>
            <div className="space-y-0 border-t border-[#E5E5E4]">
              {[
                { title: "分销合作", body: "在指定地区获得独家或优先经销权。合作方负责医院销售、安装及售后，惟德提供培训、注册资料和技术支持。" },
                { title: "注册合规合作", body: "适合已有当地监管资源的合作方（新加坡HSA、UAE卫生部、沙特SFDA等）。联合制定注册策略，分担注册费用。" },
                { title: "联合开发 / IP授权", body: "适合希望将平台扩展至新适应症或与现有系统整合的合作方。可提供IP授权及联合开发协议。" },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.05}>
                  <div className="py-6 border-b border-[#E5E5E4]">
                    <div className="font-display font-600 text-[16px] text-ink mb-2">{item.title}</div>
                    <div className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.6]">{item.body}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Territories */}
        <section className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
          <SectionLine />
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-6">开放地区</div>
              <h2
                className="font-display font-600 text-ink leading-[1.1] mb-12"
                style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
              >
                两个优先区域，<br />两个合作名额
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <ScrollReveal delay={0.1}>
                <div className="border border-ink p-10 flex flex-col h-full">
                  <div className="label-caps mb-4 text-[#6B6B6B] opacity-40">区域 01</div>
                  <h3 className="font-display font-700 text-ink mb-1" style={{ fontSize: "clamp(26px, 4vw, 40px)" }}>东南亚</h3>
                  <p className="text-[11px] font-500 tracking-[0.08em] uppercase text-[#6B6B6B] mb-6">
                    新加坡 · 马来西亚 · 泰国 · 印度尼西亚 · 菲律宾 · 越南
                  </p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.7] mb-8 flex-1">
                    新加坡HSA获批可作为参考认证，加速马来西亚、泰国等东盟市场的注册。
                    优先合作类型：注册+分销（可合并或分开）。
                    目标：第一年覆盖12家医院，三年内达到40家。
                  </p>
                  <a
                    href="mailto:info@wuerzburg-dynamics.com?subject=东南亚合作咨询"
                    className="px-7 py-3.5 bg-ink text-white text-[13px] font-500 tracking-[0.02em] hover:bg-[#2a2a2a] transition-colors duration-150 inline-block self-start"
                  >
                    咨询东南亚合作 →
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="border border-ink p-10 flex flex-col h-full">
                  <div className="label-caps mb-4 text-[#6B6B6B] opacity-40">区域 02</div>
                  <h3 className="font-display font-700 text-ink mb-1" style={{ fontSize: "clamp(26px, 4vw, 40px)" }}>中东</h3>
                  <p className="text-[11px] font-500 tracking-[0.08em] uppercase text-[#6B6B6B] mb-6">
                    阿联酋 · 沙特阿拉伯 · 卡塔尔 · 科威特 · 巴林
                  </p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.7] mb-8 flex-1">
                    GCC国家在Vision 2030框架下大力投资医疗技术，私立医院网络对高端外科手术设备购买意愿强。
                    目标注册路径：阿联酋卫生部（MOHAP）/ 沙特药监局（SFDA）。
                  </p>
                  <a
                    href="mailto:info@wuerzburg-dynamics.com?subject=中东合作咨询"
                    className="px-7 py-3.5 bg-ink text-white text-[13px] font-500 tracking-[0.02em] hover:bg-[#2a2a2a] transition-colors duration-150 inline-block self-start"
                  >
                    咨询中东合作 →
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="border-l-2 border-[#E5E5E4] pl-6">
                <div className="label-caps mb-3">未来规划</div>
                <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.7]">
                  欧洲及北美市场计划于2026–2027年开放合作（CE Mark MDR提交预计2026年Q2）。
                  如您代表德国、法国、比荷卢、巴西或墨西哥的分销商，欢迎提前联系{" "}
                  <a href="mailto:info@wuerzburg-dynamics.com" className="text-ink underline underline-offset-3 hover:text-[#6B6B6B] transition-colors">
                    info@wuerzburg-dynamics.com
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <BackToTop label="返回顶部" />
      </main>
    </div>
  );
}
