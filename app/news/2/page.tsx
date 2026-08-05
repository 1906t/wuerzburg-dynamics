import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";

export const metadata = {
  title: "Series B Funding — Würzburg Dynamics News",
};

export default function Article2Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCanvas />
      <Nav lang="en" />

      <main className="flex-1 pt-24" style={{ position: "relative", zIndex: 1 }}>

        <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-20 pb-0">
          <div className="max-w-[900px] mx-auto">
            <ScrollReveal delay={0.1}>
              <Link href="/news" className="label-caps text-[#6B6B6B] hover:text-ink transition-colors mb-8 inline-block">← All News</Link>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="flex items-center gap-3 mb-5">
                <span className="label-caps text-[#CC0000]">Investment</span>
                <span className="text-[12px] text-[#9B9B9B]">·</span>
                <span className="text-[12px] text-[#9B9B9B]">December 27, 2025</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={40}>
              <h1
                className="font-display font-700 text-ink leading-[1.1] mb-8"
                style={{ fontSize: "clamp(22px, 3vw, 38px)" }}
              >
                Würzburg Dynamics Closes RMB 120M+ Series B, Cementing Its Lead in Intelligent Soft Tissue Interventional Surgical Robotics
              </h1>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative px-8 md:px-16 lg:px-24 xl:px-32 pb-32">
          <SectionLine />
          <div className="max-w-[900px] mx-auto">

            <ScrollReveal>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-6">
                On December 27, 2025, Shenzhen Würzburg Dynamics Precision Medical Technology Co., Ltd. ("Würzburg Dynamics") marked its sixth anniversary of incorporation and officially announced the close of a RMB 120M+ Series B round. The round, which substantially completed in April 2025, was co-led by Guangzhou Financial Holdings Fund and Guangzhou Tianhe Fund, with follow-on investments from Guangzhou Heding Co-investment, Shanghai Angel Association, GUT Venture Capital, Wenzhou Oujiang Estuary Investment, and returning investor Bencao Capital. Against the backdrop of tightening industry financing conditions in recent years, closing another large-scale round demonstrates the capital market's strong recognition of Würzburg Dynamics' technology roadmap, clinical value, and commercialisation capabilities — while injecting substantial funding momentum to accelerate product iteration, expand domestic and international markets, and achieve resilient counter-cyclical growth.
              </p>

            </ScrollReveal>

            {/* Image 1 */}
            <ScrollReveal delay={0.1}>
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F5F5F3] mb-10">
                <Image
                  src="/images/news/news-2/img-1.png"
                  alt="Würzburg Dynamics Series B announcement"
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                On December 27, 2025, Shenzhen Würzburg Dynamics Precision Medical Technology Co., Ltd. ("Würzburg Dynamics") marked its sixth anniversary of incorporation and officially announced the close of a RMB 120M+ Series B round. The round was co-led by Guangzhou Financial Holdings Fund and Guangzhou Tianhe Fund, with follow-on investments from Guangzhou Heding Co-investment, Shanghai Angel Association, GUT Venture Capital, Wenzhou Oujiang Estuary Investment, and returning investor Bencao Capital.
              </p>
            </ScrollReveal>

            {/* Image 2 */}
            <ScrollReveal delay={0.1}>
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F5F5F3] mb-10">
                <Image
                  src="/images/news/news-2/img-2.png"
                  alt="Würzburg Dynamics clinical deployment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                The company has established a clear "domestic validation + overseas expansion" global collaborative development model. While consolidating its domestic market advantage, Würzburg Dynamics is actively partnering with global leading medical device enterprises and sector champions to build an overseas expansion ecosystem. At the same time, the company is advancing domestic substitution of key consumables, breaking the technological monopoly held by overseas manufacturers in core surgical robotics components, responding to national policy direction, reducing clinical usage costs, and improving clinical accessibility and availability.
              </p>
            </ScrollReveal>

            {/* Image 3 */}
            <ScrollReveal delay={0.1}>
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F5F5F3] mb-10">
                <Image
                  src="/images/news/news-2/img-3.png"
                  alt="Würzburg Dynamics surgical robot system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                Looking ahead, intelligence is the core direction of surgical robotics development. Through its interdisciplinary team and continuous iteration across a multi-product pipeline, Würzburg Dynamics is driving the transformation of interventional surgery from "experience-driven" to "quantitative decision-making," and from "digital recording" to "intelligent closed-loop management" — steadily advancing from "precision tool" to "intelligent surgical partner," and continuously cementing its leading position in the intelligent soft tissue interventional surgical robotics space.
              </p>
            </ScrollReveal>

            {/* Quotes */}
            <ScrollReveal>
              <div className="space-y-8 mb-10">

                <div className="border-l-2 border-[#FFCC00] pl-6">
                  <p className="text-[13px] font-500 text-ink mb-2">Dr. Weiguo Xie, Founder &amp; CEO, Würzburg Dynamics</p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    "After our Series A round of RMB 100M, we spent three years translating a technology concept into clinical deployment across nearly 100 hospitals — completing the critical leap from technical validation to clinical-scale commercialisation. When the Series B substantially closed in the first half of this year, we didn't rush to announce. We kept our heads down on product refinement and strategic planning, choosing to make the announcement at our sixth anniversary so people could see our growth directly. The close of this significant Series B, and the major recent progress on Series C, represent both capital's recognition of our past achievements and the market's expectations for our future. Going forward, we target over 6,000 procedures in 2026 alone; will advance our global footprint with innovative access products and international certifications; and will continue deepening clinical partnerships — converting leading specialists' surgical expertise into standardised intelligent protocols so that precise, safe interventional surgery can serve more patients, and China's soft tissue interventional surgical robotics can break through from 'running alongside' to 'leading the race.'"
                  </p>
                </div>

                <div className="border-l-2 border-[#E5E5E4] pl-6">
                  <p className="text-[13px] font-500 text-ink mb-2">Nie Huiming, Head of Biomedical Investment, Guangzhou Financial Holdings Fund</p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    "Surgical robotics is moving from mechanical-execution automation toward data- and algorithm-driven intelligence. In soft tissue intervention specifically — where procedures are highly dependent on imaging and pathway judgement — this is one of the most value-yielding sub-sectors for intelligent capabilities. Würzburg Dynamics' dual-path platform based on intraoperative CT and ultrasound has accumulated relatively complete data, algorithmic, and system-integration capabilities at the critical junctures of interventional surgery. The company has achieved stable application across multiple procedure types, with relevant capabilities continuously validated in clinical practice — a rarity among domestic peers. We firmly believe in Würzburg Dynamics' development along the long-term trajectory of intelligent interventional surgery."
                  </p>
                </div>

                <div className="border-l-2 border-[#E5E5E4] pl-6">
                  <p className="text-[13px] font-500 text-ink mb-2">Investment Team, Guangzhou Tianhe Fund</p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    "Our interest in Würzburg Dynamics stems from its technology pathway selection and deep specialisation within the interventional field. Starting from real clinical scenarios, the company has deeply integrated imaging, algorithms, and robotic systems to address long-standing challenges of operational consistency and physician-experience dependency in percutaneous interventional surgery. This pathway demanded considerable engineering and clinical collaboration capabilities in early stages, but the clinical value and long-term potential are clear. Würzburg Dynamics has progressively formed replicable technical solutions in complex real-world clinical settings, continuously iterating based on genuine clinical feedback, and advancing into new directions such as renal intervention. This approach — centred on clinical problems and persistently refining the technology system — provides a strong foundation for expansion into broader application scenarios."
                  </p>
                </div>

                <div className="border-l-2 border-[#E5E5E4] pl-6">
                  <p className="text-[13px] font-500 text-ink mb-2">Huang Xiaozhong, Managing Director, Guangzhou Heding Co-investment</p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    "The development of intelligent surgical robotics must be validated across a broader range of clinical and market environments. Würzburg Dynamics' proactive pursuit of international certifications and overseas market positioning will help test the adaptability of its technology system across different clinical standards and operating environments. The regulatory requirements, clinical demands, and application feedback from international markets will serve as important references for continuous product optimisation — and will facilitate further improvements in the company's engineering capabilities and product platform. We strongly endorse Würzburg Dynamics' development path of continuously validating and amplifying the value of its intelligent interventional technology through a global strategy."
                  </p>
                </div>

                <div className="border-l-2 border-[#E5E5E4] pl-6">
                  <p className="text-[13px] font-500 text-ink mb-2">Fu Yanping, Partner, GUT Venture Capital</p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    "In surgical robotics, single-point technology validation is insufficient to sustain long-term development. The more critical criterion is whether a system can be stably replicated in real-world clinical environments. Würzburg Dynamics' core strength lies in a technology system repeatedly validated through sustained clinical application, progressively forming a replicable deployment model. Whether in routine high-frequency procedures or more demanding complex scenarios, the company's products have demonstrated strong stability and consistency — laying an important foundation for subsequent scaled expansion."
                  </p>
                </div>

                <div className="border-l-2 border-[#E5E5E4] pl-6">
                  <p className="text-[13px] font-500 text-ink mb-2">Feng Yongjiang, Head of Investment, Wenzhou Oujiang Estuary Investment</p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    "Competition in the surgical robotics industry will ultimately revert to the generalisability of the technology platform, clinical adaptability, and capacity for sustainable evolution. Würzburg Dynamics' proactive pursuit of international certifications and overseas positioning gives its technology system the opportunity to be tested against higher standards and more complex application environments. This will not only help expand the market footprint, but will also drive continuous refinement of the company's product and system capabilities."
                  </p>
                </div>

                <div className="border-l-2 border-[#E5E5E4] pl-6">
                  <p className="text-[13px] font-500 text-ink mb-2">Geng Xiangnan, Managing Director, Bencao Capital</p>
                  <p className="text-[14px] font-[300] text-[#6B6B6B] leading-[1.8]">
                    "Intelligent soft tissue interventional surgical robotics is at a critical development window — technically complex, with substantial clinical potential, and with market positioning still being shaped, though the trend toward consolidation around leading players is clear. As the technology pathway matures, clinical value is continuously validated, and relevant policies become defined, this sector is approaching large-scale clinical adoption. This places higher demands on companies' integrated capabilities across technology R&D, engineering execution, and clinical development. Based on this assessment, we have chosen to continue doubling down on companies like Würzburg Dynamics — with solid technology foundations, strong engineering capabilities, sharp clinical acumen, and comprehensive competitive strengths — and to take a long-term position."
                  </p>
                </div>

              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[11px] text-[#9B9B9B] leading-[1.6] border-t border-[#E5E5E4] pt-6">
                Content primarily sourced from 动脉网 (Dmai).
              </p>
            </ScrollReveal>

          </div>
        </section>

      </main>
    </div>
  );
}
