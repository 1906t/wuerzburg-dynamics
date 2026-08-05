import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";

export const metadata = {
  title: "B轮融资 — 惟德精准新闻动态",
};

export default function ZhArticle2Page() {
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
                <span className="label-caps text-[#CC0000]">融资动态</span>
                <span className="text-[12px] text-[#9B9B9B]">·</span>
                <span className="text-[12px] text-[#9B9B9B]">2025年12月27日</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={40}>
              <h1
                className="font-display font-700 text-ink leading-[1.2] mb-8"
                style={{ fontSize: "clamp(20px, 2.8vw, 34px)" }}
              >
                惟德精准完成超1.2亿元B轮融资，夯实软组织介入智能手术机器人领先地位
              </h1>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative px-8 md:px-16 lg:px-24 xl:px-32 pb-32">
          <SectionLine />
          <div className="max-w-[900px] mx-auto">

            <ScrollReveal>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-6">
                2025年12月27日，深圳惟德精准医疗科技有限公司（简称"惟德精准"）迎来注册六周年庆，同日正式宣布完成超1.2亿元人民币B轮融资。本轮融资于2025年4月基本完成交割，由广州金控基金和广州天河基金联合领投，广州合鼎共投资、上海天使会、工大创投、温州瓯江口投资及老股东本草资本跟投。在近几年行业融资环境趋紧的背景下，再次完成大额融资，充分彰显资本市场对惟德精准技术路线、临床价值及商业化能力的高度认可，也为公司加速产品迭代、拓展海内外市场、实现抗周期稳健发展注入了充足的资金动能。
              </p>

            </ScrollReveal>

            {/* Image 1 */}
            <ScrollReveal delay={0.1}>
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F5F5F3] mb-10">
                <Image
                  src="/images/news/news-2/img-1.png"
                  alt="惟德精准B轮融资发布"
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                2025年12月27日，深圳惟德精准医疗科技有限公司（简称"惟德精准"）迎来注册六周年庆，同日正式宣布完成超1.2亿元人民币B轮融资。本轮融资于2025年4月基本完成交割，由广州金控基金和广州天河基金联合领投，广州合鼎共投资、上海天使会、工大创投、温州瓯江口投资及老股东本草资本跟投。在近几年行业融资环境趋紧的背景下，再次完成大额融资。
              </p>
            </ScrollReveal>

            {/* Image 2 */}
            <ScrollReveal delay={0.1}>
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F5F5F3] mb-10">
                <Image
                  src="/images/news/news-2/img-2.png"
                  alt="惟德精准临床应用"
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                公司已明确"国内验证+海外拓展"的全球化协同发展模式，在巩固国内市场优势的同时，积极与全球头部医疗企业、细分领域龙头企业展开合作，拓展出海生态。同时，推进关键耗材国产替代，打破海外厂商在手术机器人核心领域的技术垄断，响应国家政策导向，降低临床使用成本，提高临床可用性和可及性。
              </p>
            </ScrollReveal>

            {/* Image 3 */}
            <ScrollReveal delay={0.1}>
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F5F5F3] mb-10">
                <Image
                  src="/images/news/news-2/img-3.png"
                  alt="惟德精准手术机器人系统"
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                长期来看，智能化是手术机器人的核心发展方向。惟德精准正通过跨学科团队与多管线产品的持续迭代，推动介入手术从"经验驱动"转向"定量决策"，从"数字化记录"升级为"智能闭环管理"，稳步实现从"精准工具"到"智能手术伙伴"的进阶，持续巩固在软组织介入智能手术机器人领域的领先地位。
              </p>
            </ScrollReveal>

            {/* Quotes */}
            <ScrollReveal>
              <div className="space-y-8 mb-10">

                <div className="border-l-2 border-[#FFCC00] pl-6">
                  <p className="text-[13px] font-500 text-ink mb-2">惟德精准创始人 &amp; CEO 谢卫国博士</p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    自A轮1亿元人民币融资后，我们用三年时间把技术概念落地成近百家医院的临床应用，完成技术验证到临床规模化落地的关键跨越，也印证了技术路径的可行性与临床价值的稀缺性。今年上半年基本完成B轮融资交割时，我们没有急于官宣，而是沉下心打磨产品和布局，选在六周年庆这个节点对外公布，就是想让大家直观地看到我们的成长。B轮大额融资的落地，以及近期C轮融资的重大进展，既是资本对我们过往成绩的认可，更是市场对我们未来布局的期许。接下来，我们将加速市场布局，争取2026年一年手术量突破6,000台；以创新通道产品和国际认证为抓手，推进全球布局；同时继续深化临床合作，把顶尖专家的手术经验转化为标准化的智能方案，让精准、安全的介入手术服务更多患者，推动国产软组织介入智能手术机器人从"并跑"到"领跑"的突破。感谢新老股东的信任与赋能，我们期待与更多行业伙伴携手，共筑智能手术机器人产业的新生态。
                  </p>
                </div>

                <div className="border-l-2 border-[#E5E5E4] pl-6">
                  <p className="text-[13px] font-500 text-ink mb-2">广州金控基金生物医药投资负责人 聂惠明</p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    从产业演进的角度看，手术机器人正在由以机械执行为核心的自动化阶段，逐步走向以数据和算法驱动的智能化阶段。尤其在软组织介入领域，手术过程高度依赖影像信息与路径判断，是智能化能力最具落地价值的细分方向之一。广州金控基金在系统评估这一趋势后认为，惟德精准围绕术中CT与术中超声形成的双技术路径，使其在介入手术关键环节中积累了较为完整的数据、算法与系统协同能力。公司已在多类术式中实现稳定应用，相关能力经临床实践持续验证，在国内同类企业中具备稀缺性。总体来看，我们坚定看好惟德精准在介入手术智能化这一长期方向上发展。
                  </p>
                </div>

                <div className="border-l-2 border-[#E5E5E4] pl-6">
                  <p className="text-[13px] font-500 text-ink mb-2">广州天河基金投资团队</p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    我们关注惟德精准，源于其在介入领域对技术路径的选择与深耕。公司从真实临床场景出发，将影像、算法与机器人系统进行深度整合，重点解决经皮介入手术中长期存在的操作一致性不足、医生经验依赖度高等问题。这一路径在早期推进过程中难度较高，对工程化与临床协同能力要求也更为严格，但其所对应的临床价值和长期空间相对明确。惟德精准已经在复杂真实的临床环境中，逐步形成可复用的技术方案，借助真实临床反馈中持续迭代，并在肾部介入等新方向上持续推进。广州天河基金认为，这种以临床问题为核心、持续打磨技术体系的方式，为公司未来在更多应用场景中的拓展提供了良好的延展性。
                  </p>
                </div>

                <div className="border-l-2 border-[#E5E5E4] pl-6">
                  <p className="text-[13px] font-500 text-ink mb-2">广州合鼎共投资总监 黄晓忠</p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    从更长周期看，手术机器人智能化的发展，必然需要在更广泛的临床与市场环境中接受验证。我们认为，惟德精准在完成国内临床应用积累的同时，积极推进国际认证与海外市场布局，有助于检验其技术体系在不同临床规范和使用环境下的适应性。国际市场所对应的监管标准、临床要求和应用反馈，将为产品持续优化提供重要参考，也有利于推动公司在工程化与产品体系上的进一步完善。整体而言，我们高度认可惟德精准通过全球化路径持续验证并放大其智能介入技术价值的发展路径。
                  </p>
                </div>

                <div className="border-l-2 border-[#E5E5E4] pl-6">
                  <p className="text-[13px] font-500 text-ink mb-2">工大创投合伙人 傅艳平</p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    在手术机器人领域，单点技术验证并不足以支撑长期发展，能否在真实临床环境中实现稳定复制，是更为关键的判断标准。惟德精准的核心优势在于其技术体系已通过持续的临床应用得到反复验证，并逐步形成可推广的应用模式。无论是在常规高频术式，还是在更具挑战性的复杂临床场景中，公司产品均展现出较好的稳定性与一致性。这种在临床一线不断积累并固化的能力，为其后续规模化拓展奠定了重要基础。
                  </p>
                </div>

                <div className="border-l-2 border-[#E5E5E4] pl-6">
                  <p className="text-[13px] font-500 text-ink mb-2">温州瓯江口投资负责人 冯永将</p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    从更长周期看，手术机器人行业的竞争最终将回归到技术平台的通用性、临床适配性与可持续演进能力。我们认为惟德精准在完成国内临床验证的同时，积极推进国际认证与海外布局，使其技术体系有机会在更高标准、更复杂的应用环境中接受检验。这一过程不仅有助于拓展市场空间，也将反向推动产品与系统能力的持续完善。
                  </p>
                </div>

                <div className="border-l-2 border-[#E5E5E4] pl-6">
                  <p className="text-[13px] font-500 text-ink mb-2">本草资本董事总经理 耿向楠</p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    软组织介入手术机器人正处于发展的关键窗口期，其技术复杂度高、临床开发潜力大，目前市场格局未定，但未来向头部集中的趋势明确。随着技术路径日益成熟、临床价值不断获得验证，以及相关政策的逐步明晰，该领域即将迎来临床规模化应用的新阶段。这也对企业的技术研发、工程实现与临床开发相结合的综合能力，提出了更高要求。基于上述判断，我们选择持续加注像惟德精准这样技术扎实、工程化能力强、临床意识敏锐、综合优势突出的企业，并进行长期布局。
                  </p>
                </div>

              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[11px] text-[#9B9B9B] leading-[1.6] border-t border-[#E5E5E4] pt-6">
                转载内容主要源于动脉网
              </p>
            </ScrollReveal>

          </div>
        </section>

      </main>
    </div>
  );
}
