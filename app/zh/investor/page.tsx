import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "投资人信息 — 惟德精准",
};

const pipeline = [
  {
    phase: "已获证",
    name: "肺部介入手术机器人",
    indication: "经皮肺部穿刺活检、消融、粒子植入",
    status: "国家三类证 · 2024年6月取证 · 商业化进行中",
    year: "2024",
  },
  {
    phase: "注册中",
    name: "肾部介入手术机器人",
    indication: "经皮肾造瘘、经皮肾镜取石、肾部消融",
    status: "国家创新通道 · 2025年12月完成临床 · 预计2026年6月取证",
    year: "2026预计",
  },
  {
    phase: "研发中",
    name: "肝/甲/乳腺等适应症",
    indication: "扩展经皮介入平台至更多软组织适应症",
    status: "临床前阶段",
    year: "待定",
  },
];

const investors = [
  { name: "复星医药", descriptor: "战略投资方 · B轮领投" },
  { name: "广州金控", descriptor: "政府背景机构 · B轮" },
  { name: "广州天河基金", descriptor: "区级政府基金 · A轮" },
  { name: "本草资本", descriptor: "医疗专项基金 · A轮" },
  { name: "工大创投", descriptor: "高校关联基金 · 天使轮" },
  { name: "上海天使会", descriptor: "天使投资机构 · 种子轮" },
];

const financing = [
  { round: "天使轮", amount: "人民币 200万", date: "2020年4月" },
  { round: "Pre-A轮", amount: "人民币 2,000万", date: "2021年7月" },
  { round: "A轮", amount: "人民币 1亿", date: "2022年10月" },
  { round: "B轮", amount: "人民币 1.2亿+", date: "2025年5月" },
];

const market = [
  { organ: "肺", patients: "~1.5亿", note: "中国肺结节患者数" },
  { organ: "肾", patients: "~6000万", note: "中国肾结石患者数" },
  { organ: "肝", patients: "~41万", note: "中国肝癌年新发患者数" },
  { organ: "甲状腺", patients: "~1.3亿", note: "中国甲状腺结节检出人数" },
];

export default function ZhInvestorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav lang="zh" />

      <main className="pt-36 pb-32 px-6">
        <div className="max-w-[720px] mx-auto">

          <div className="mb-24">
            <div className="label-caps mb-5">投资人信息</div>
            <h1
              className="font-display font-700 text-ink leading-[1.05] tracking-[-0.01em] mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              构建经皮介入<br />
              手术机器人的<br />
              全球平台。
            </h1>
            <p className="text-[16px] font-[300] text-[#6B6B6B] leading-[1.7]">
              惟德精准是国内唯一同时掌握术中CT与超声双技术路径的经皮介入手术机器人企业，
              已获国家三类证，在全国100余家医院完成商业化部署，并向国际市场积极拓展。
            </p>
          </div>

          <div className="border-t border-[#E5E5E4] mb-24" />

          {/* Clinical proof */}
          <section className="mb-24">
            <div className="label-caps mb-6">临床验证</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-8"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              已部署，不只是已获批。
            </h2>
            <div className="grid grid-cols-2 gap-0 border border-[#E5E5E4] mb-10">
              <div className="p-8 border-r border-[#E5E5E4]">
                <div className="font-display font-700 text-ink leading-none mb-3" style={{ fontSize: "clamp(52px, 8vw, 88px)" }}>
                  100+
                </div>
                <div className="text-[13px] font-[400] text-[#6B6B6B] leading-[1.5]">
                  全国认证临床合作医院
                </div>
              </div>
              <div className="p-8">
                <div className="font-display font-700 text-ink leading-none mb-3" style={{ fontSize: "clamp(52px, 8vw, 88px)" }}>
                  第2
                </div>
                <div className="text-[13px] font-[400] text-[#6B6B6B] leading-[1.5]">
                  国内软组织经皮介入<br />手术机器人市场份额
                </div>
              </div>
            </div>
            <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.7]">
              肺部产品2024年6月取得国家三类注册证，现处于商业化扩张阶段。
              穿刺精度约1mm，兼容C臂、CBCT、OBCT等多种影像平台。
              国家高新技术企业，国家级专精特新"小巨人"。
            </p>
          </section>

          <div className="border-t border-[#E5E5E4] mb-24" />

          {/* Market */}
          <section className="mb-24">
            <div className="label-caps mb-6">市场空间</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-10"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              四大适应症，<br />数亿级患者市场。
            </h2>
            <div className="grid grid-cols-2 gap-0 border border-[#E5E5E4] mb-8">
              {market.map((m, i) => (
                <div
                  key={m.organ}
                  className={`p-6 ${i % 2 === 0 ? "border-r border-[#E5E5E4]" : ""} ${i < 2 ? "border-b border-[#E5E5E4]" : ""}`}
                >
                  <div className="font-display font-700 text-ink leading-none mb-2" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
                    {m.patients}
                  </div>
                  <div className="text-[13px] font-500 text-ink mb-1">{m.organ}</div>
                  <div className="text-[11px] font-[400] text-[#6B6B6B] leading-[1.5]">{m.note}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-[#E5E5E4] mb-24" />

          {/* Pipeline */}
          <section className="mb-24">
            <div className="label-caps mb-6">产品管线</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-10"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              平台型企业，<br />不只是单一产品。
            </h2>
            <div className="space-y-0">
              {pipeline.map((item, i) => (
                <div key={item.name} className="flex gap-8 pb-10">
                  <div className="flex flex-col items-center pt-1 flex-shrink-0 w-[1px] relative ml-3">
                    <div className="w-2 h-2 rounded-full bg-ink flex-shrink-0 z-10" />
                    {i < pipeline.length - 1 && (
                      <div className="flex-1 w-px bg-[#E5E5E4] mt-2" style={{ minHeight: "60px" }} />
                    )}
                  </div>
                  <div className="flex-1 -mt-0.5 pb-2">
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-500 tracking-[0.1em] uppercase px-2 py-0.5 border border-[#E5E5E4] text-[#6B6B6B]">
                          {item.phase}
                        </span>
                        <span className="font-display font-600 text-[17px] text-ink">{item.name}</span>
                      </div>
                      <span className="text-[12px] text-[#6B6B6B] font-[400] flex-shrink-0">{item.year}</span>
                    </div>
                    <p className="text-[13px] font-[400] text-[#6B6B6B] leading-[1.5] mt-2">{item.indication}</p>
                    <p className="text-[11px] font-500 text-ink mt-1 tracking-[0.03em]">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-[#E5E5E4] mb-24" />

          {/* Financing */}
          <section className="mb-24">
            <div className="label-caps mb-6">融资历程</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-10"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              累计融资人民币<br />2.4亿+，四轮完成。
            </h2>
            <div className="border-t border-[#E5E5E4]">
              {financing.map((f) => (
                <div key={f.round} className="flex items-baseline justify-between py-5 border-b border-[#E5E5E4]">
                  <span className="font-display font-600 text-[17px] text-ink">{f.round}</span>
                  <div className="text-right">
                    <div className="text-[14px] font-500 text-ink">{f.amount}</div>
                    <div className="text-[11px] text-[#6B6B6B]">{f.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-[#E5E5E4] mb-24" />

          {/* Investors */}
          <section className="mb-24">
            <div className="label-caps mb-6">现有投资方</div>
            <h2
              className="font-display font-600 text-ink leading-[1.1] mb-10"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              战略与财务资本<br />双重背书。
            </h2>
            <div className="border-t border-[#E5E5E4]">
              {investors.map((inv) => (
                <div key={inv.name} className="flex items-baseline justify-between py-5 border-b border-[#E5E5E4] group">
                  <span className="font-display font-600 text-[17px] text-ink group-hover:translate-x-0.5 transition-transform duration-150">
                    {inv.name}
                  </span>
                  <span className="text-[12px] font-[400] text-[#6B6B6B] text-right">{inv.descriptor}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-[#E5E5E4] mb-24" />

          <section><div className="label-caps mb-6">下一步</div></section>
        </div>

        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-ink px-12 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2
                className="font-display font-700 text-white leading-[1.05] mb-3"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                与我们的团队预约沟通。
              </h2>
              <p className="text-[14px] text-white/60 font-[300] max-w-[420px] leading-[1.6]">
                我们正在与对精准手术机器人全球化拓展感兴趣的战略投资人和合作伙伴进行精选接触。
              </p>
            </div>
            <a
              href="mailto:info@wuerzburg-dynamics.com?subject=投资人咨询"
              className="flex-shrink-0 px-8 py-4 bg-white text-ink text-[13px] font-500 tracking-[0.03em] hover:bg-[#F5F5F4] transition-colors duration-150 inline-block text-center"
            >
              发送邮件联系 →
            </a>
          </div>
        </div>
      </main>

    </div>
  );
}
