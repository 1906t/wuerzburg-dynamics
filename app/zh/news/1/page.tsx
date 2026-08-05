import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";

export const metadata = {
  title: "呼吸康复年会报道 — 惟德精准新闻动态",
};

export default function ZhArticle1Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="zh" />

      <main className="flex-1 pt-24" style={{ position: "relative", zIndex: 1 }}>

        <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-20 pb-0">
          <div className="max-w-[900px] mx-auto">
            <ScrollReveal delay={0.1}>
              <Link href="/zh/news" className="label-caps text-[#6B6B6B] hover:text-ink transition-colors mb-8 inline-block">← 全部新闻</Link>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="flex items-center gap-3 mb-5">
                <span className="label-caps text-[#CC0000]">大会报道</span>
                <span className="text-[12px] text-[#9B9B9B]">·</span>
                <span className="text-[12px] text-[#9B9B9B]">2026年7月21日 · 上午9:01</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={40}>
              <h1
                className="font-display font-700 text-ink leading-[1.2] mb-8"
                style={{ fontSize: "clamp(20px, 2.8vw, 34px)" }}
              >
                燃动冰城！惟德精准手术机器人惊艳亮相呼吸康复年会，引发专家广泛关注
              </h1>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative px-8 md:px-16 lg:px-24 xl:px-32 pb-32">
          <SectionLine />
          <div className="max-w-[900px] mx-auto">


            {/* Image group 1 */}
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-3 gap-3 mb-10">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F3]">
                    <Image
                      src={`/images/news/news-1/img-${n}.jpg`}
                      alt={`呼吸康复年会现场 ${n}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 280px"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-6">
                本届大会走过十载深耕之路，以规范呼吸康复，提升医疗水平为核心主题，汇聚全国呼吸、危重症、康复、护理领域顶尖专家，设置主旨报告、多学科分论坛、实操工作坊、青年思辨交流、病例研讨等多元学术板块。全国各地医务同仁齐聚冰城，围绕呼吸慢病全程管理、危重症早期康复、基层康复标准化、肺部介入诊疗前沿技术等议题深度研讨，共探呼吸康复高质量、同质化发展新路径。
              </p>

              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                本次盛会同期开设企业展示区，惟德精准携自研核心设备——软组织经皮介入智能手术机器人重磅登场。产品以基于人工智能的"全自动三维重建+强智能手术规划+高精度红外定位+动态呼吸实时监测"为核心能力，为临床提供完整的肺部经皮穿刺介入解决方案，可有效解决微小肺结节、磨玻璃结节等病灶定位难、穿刺难、风险高等问题，吸引众多专家及临床医师驻足交流。
              </p>
            </ScrollReveal>

            {/* Image group 2 */}
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-3 gap-3 mb-10">
                {[4, 5, 6].map((n) => (
                  <div key={n} className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F3]">
                    <Image
                      src={`/images/news/news-1/img-${n}.jpg`}
                      alt={`惟德精准展台演示 ${n - 3}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 280px"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Four advantages */}
            <ScrollReveal>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-6">
                展台现场，市场和技术团队分工协作，为到访专家细致演示设备实操逻辑，重点介绍了产品四大核心优势：
              </p>

              <div className="space-y-5 mb-10">
                {[
                  {
                    label: "1. 全自动快速精细化三维重建",
                    sub: "手术目标结构更清晰、更直观、更客观。",
                    body: "基于完全自主研发的人工智能算法，惟德手术机器人可对CT、CBCT、OBCT、移动C臂等影像数据进行现场、快速、全自动、精细化三维重建，清晰显示对手术安全性和有效性有影响的病灶、血管、气管、脏器、骨骼等解剖结构，辅助术者快速识别病灶位置与周围组织结构关系。",
                  },
                  {
                    label: "2. 半自动或全自动智能手术规划",
                    sub: "辅助医生手术更安全、更有效、更智能。",
                    body: "惟德精准独特的全栈自研人工智能专用模型，可基于术者操作半自动生成或基于专家普遍经验全自动生成穿刺手术规划，并通过三维高清高倍放大，辅助医生进行手术方案决策，提高手术的安全性、有效性和便捷性。",
                  },
                  {
                    label: "3. 高精度近红外定位 + 机械臂柔性控制",
                    sub: "提升手术稳定性、精准性、可控性。",
                    body: "惟德手术机器人结合高精度近红外追踪定位以及高灵活度机械臂柔性控制，系统定位误差小于0.8mm，可实现实时稳定的空间定位与器械递送，减少人手操作带来的抖动、振颤等偏差，提升手术穿刺过程中的精准度、稳定性和可控性。",
                  },
                  {
                    label: "4. 实时动态呼吸监测",
                    sub: "降低呼吸运动带来的判断、定位和操作偏差。",
                    body: "针对肺部介入手术中患者自主呼吸导致的病灶实时漂移问题，惟德手术机器人搭载的专属呼吸动态监测模块，可实时追踪患者呼吸幅度变化，帮助医生在手术过程中选择最佳穿刺时机，减少因呼吸运动造成的判断、定位和操作误差。",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-1 flex-shrink-0 bg-[#1a1a1a] mt-1 self-stretch" />
                    <div className="pl-4">
                      <p className="font-600 text-ink text-[15px] leading-[1.6] mb-1">{item.label}</p>
                      <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8] italic mb-1">{item.sub}</p>
                      <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-6">
                多位深耕呼吸康复领域的资深专家给予了高度评价：机器人可辅助医生降低反复穿刺带来的气胸、出血等并发症风险；同时，设备学习路径清晰简洁，青年医师也可通过标准化流程快速掌握基础操作，适合三甲呼吸介入中心与基层医院开展肺结节活检、消融、术前定位等手术场景。
              </p>

              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                当前肺部疾病早筛普及，肺结节微创介入需求持续爆发，行业亟需标准化、易落地的智能设备。惟德精准这款手术机器人高度贴合大会"规范呼吸康复"主旨，可打通"肺部筛查 — 微创介入 — 术后康复"一体化诊疗流程，形成闭环。现场大量临床医师主动留存联系方式，预约会后深度沟通、申请院内实操观摩。
              </p>
            </ScrollReveal>

            {/* Summary */}
            <ScrollReveal>
              <div className="border-t border-[#E5E5E4] pt-8">
                <h3 className="font-display font-600 text-ink text-[18px] mb-4">总结与展望</h3>
                <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8]">
                  十载盛会启新程，智能装备助规范。本次哈尔滨之行，惟德精准依托全国顶级呼吸康复学术平台，与数百名临床医师面对面沟通，全面收集一线诊疗真实需求。未来，惟德精准将持续深耕软组织经皮介入赛道，以全自主研发智能手术机器人矩阵赋能各级医院，简化肺结节微创诊疗流程，以智能化装备推动呼吸康复标准化下沉，携手全国医务工作者筑牢肺部健康防线，助力健康中国建设。
                </p>
              </div>
            </ScrollReveal>

          </div>
        </section>

      </main>
    </div>
  );
}
