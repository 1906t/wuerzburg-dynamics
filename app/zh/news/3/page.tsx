import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";

export const metadata = {
  title: "机器人精准穿刺双肺小结节 — 惟德精准新闻动态",
};

export default function ZhArticle3Page() {
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
                <span className="label-caps text-[#CC0000]">临床案例</span>
                <span className="text-[12px] text-[#9B9B9B]">·</span>
                <span className="text-[12px] text-[#9B9B9B]">2025年</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={40}>
              <h1
                className="font-display font-700 text-ink leading-[1.2] mb-8"
                style={{ fontSize: "clamp(20px, 2.8vw, 34px)" }}
              >
                赋能临床 | 机器人精准穿刺双肺小结节，上海医生诊治肺癌又有新利器
              </h1>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative px-8 md:px-16 lg:px-24 xl:px-32 pb-32">
          <SectionLine />
          <div className="max-w-[900px] mx-auto">

            <ScrollReveal>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                近日，上海市公共卫生临床中心呼吸与危重症医学科与放射科联合完成院内经皮穿刺机器人引导下的两例复杂肺部小结节活检手术，为疑难肺部病变患者提供了更安全高效的诊疗新路径。
              </p>
            </ScrollReveal>

            {/* Image 1 */}
            <ScrollReveal delay={0.1}>
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F5F5F3] mb-10">
                <Image
                  src="/images/news/news-3/img-1.jpg"
                  alt="上海市公共卫生临床中心机器人引导穿刺手术"
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h3 className="font-display font-600 text-ink text-[17px] mb-4">第一例</h3>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-8">
                第一例患者两肺多发亚实性病灶，CT影像高度怀疑肺腺癌但无法手术。依据"分子分型-靶向/免疫/外科-动态监测-再分型"的闭环治疗模式，获取病理标本成为诊疗关键。该患者多个结节存在血管聚集及穿行特征，团队通过术前精准规划选择血管稀疏区域，采用与血管并行进针策略，结合冷冻活检技术成功获取理想标本量，经快速现场病理评估确认查及肿瘤细胞。
              </p>

              <h3 className="font-display font-600 text-ink text-[17px] mb-4">第二例</h3>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                第二例患者4年前接受过右肺腺癌手术治疗，属于术后复发高风险人群，且术后基因检测显示EGFR敏感突变。经两代靶向药物治疗后复查发现右肺新发结节伴胸膜增厚，考虑复发或转移。该病灶仅11×9毫米且贴近胸膜，穿刺面临气胸风险高、病灶易位移等挑战。团队创新采用"舍近求远"大角度超长距进针策略，避免反复穿刺胸膜，配合穿刺机器人精准控制穿刺角度及呼吸时相，成功获取优质实性组织条，体现了机器人在小病灶、大角度、跨平面成角穿刺中的优势。
              </p>

              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-6">
                据悉，经皮穿刺是将针、导管等器械从皮肤直接介入体内目标器官或组织的微创操作，而穿刺机器人通过整合成像导航、机器人机械臂、针定位系统及智能控制软件，实现了穿刺操作的精准化升级。据了解，该技术目前虽处于应用评估阶段，但在相关的临床实践中，已充分体现出三大核心优势：
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    label: "1. 精度显著提升",
                    body: "有效提高穿刺针到达目标病灶的准确性。",
                  },
                  {
                    label: "2. 减少辐射暴露",
                    body: "大幅降低医护人员在CT、X光引导下的辐射接触时间。",
                  },
                  {
                    label: "3. 操作一致性强",
                    body: "减少不同操作者间的技能差异误差，同时降低对操作者经验的依赖，使低年资医师也能完成复杂路径穿刺。",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-1 flex-shrink-0 bg-[#1a1a1a] mt-1 self-stretch" />
                    <div className="pl-4">
                      <p className="font-600 text-ink text-[15px] leading-[1.6] mb-1">{item.label}</p>
                      <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                此外，该技术还具备微创、手术时间短、患者恢复快等特点，除用于病理诊断外，还可广泛应用于肿瘤热消融、放射性粒子置入等治疗场景，适配肺部、肝脏、肾脏等多部位疾病的诊断与治疗需求。随着技术的持续创新与临床验证，这一"精准医疗利器"将在更多复杂病例中发挥关键作用，惠及广大患者。
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[11px] text-[#9B9B9B] leading-[1.6] border-t border-[#E5E5E4] pt-6">
                文章转自"上观新闻"和"上海市公共卫生临床中心"。
              </p>
            </ScrollReveal>

          </div>
        </section>

      </main>
    </div>
  );
}
