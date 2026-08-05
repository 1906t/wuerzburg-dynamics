import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";
import NewsFooter from "@/components/NewsFooter";

export const metadata = {
  title: "Respiratory Rehabilitation Conference — Würzburg Dynamics News",
};

export default function Article1Page() {
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
                <span className="label-caps text-[#CC0000]">Conference Report</span>
                <span className="text-[12px] text-[#9B9B9B]">·</span>
                <span className="text-[12px] text-[#9B9B9B]">July 21, 2026 · 9:01 AM</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={40}>
              <h1
                className="font-display font-700 text-ink leading-[1.1] mb-8"
                style={{ fontSize: "clamp(22px, 3vw, 38px)" }}
              >
                Igniting the Ice City: Würzburg Dynamics Surgical Robot Makes a Stunning Debut at the Annual Respiratory Rehabilitation Conference, Drawing Widespread Expert Acclaim
              </h1>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative px-8 md:px-16 lg:px-24 xl:px-32 pb-32">
          <SectionLine />
          <div className="max-w-[900px] mx-auto">

            <ScrollReveal>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10 border-l-2 border-[#FFCC00] pl-4">
                Würzburg Dynamics&apos; Soft Tissue Percutaneous Intervention Intelligent Surgical Robot made its debut at China&apos;s premier respiratory rehabilitation academic gathering in Harbin, drawing widespread acclaim from leading clinicians across the country.
              </p>
            </ScrollReveal>

            {/* Image group 1 */}
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-3 gap-3 mb-10">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F3]">
                    <Image
                      src={`/images/news/news-1/img-${n}.jpg`}
                      alt={`Respiratory Rehabilitation Conference — exhibit floor ${n}`}
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
                Marking a decade of deep commitment, this conference centred on standardising respiratory rehabilitation and elevating clinical standards. It brought together China&apos;s foremost experts in respiratory medicine, critical care, rehabilitation, and nursing, with a programme spanning keynote presentations, multidisciplinary sub-forums, hands-on workshops, youth debates, and case discussions. Medical professionals from across the country gathered in Harbin to deeply explore topics including comprehensive management of chronic respiratory disease, early rehabilitation in critical care, community-level rehabilitation standardisation, and advances in interventional pulmonary diagnostics — charting new pathways for high-quality, homogenised development in respiratory rehabilitation.
              </p>

              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                At the concurrent enterprise exhibition zone, Würzburg Dynamics made a landmark appearance with its proprietary core device — the Soft Tissue Percutaneous Intervention Intelligent Surgical Robot. Powered by AI-based fully automated 3D reconstruction, advanced intelligent surgical planning, high-precision infrared localisation, and dynamic real-time respiratory monitoring, the system delivers a comprehensive percutaneous pulmonary intervention solution. It effectively addresses the challenges of localising small pulmonary nodules and ground-glass opacities, the technical difficulty of precise puncturing, and associated procedural risks — drawing sustained attention from numerous specialists and clinicians.
              </p>
            </ScrollReveal>

            {/* Image group 2 */}
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-3 gap-3 mb-10">
                {[4, 5, 6].map((n) => (
                  <div key={n} className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F3]">
                    <Image
                      src={`/images/news/news-1/img-${n}.jpg`}
                      alt={`Würzburg Dynamics exhibit — demonstration ${n - 3}`}
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
                At the exhibition booth, the marketing and technical teams demonstrated the device&apos;s operational workflow to visiting experts, highlighting four core advantages:
              </p>

              <div className="space-y-5 mb-10">
                {[
                  {
                    label: "1. Fully Automatic Rapid Precision 3D Reconstruction",
                    sub: "Clearer, more intuitive, and more objective visualisation of surgical target structures.",
                    body: "Powered by a fully proprietary AI algorithm, the Würzburg surgical robot performs real-time, fully automatic, precision 3D reconstruction of CT, CBCT, OBCT, and mobile C-arm imaging data on-site, clearly displaying anatomical structures relevant to surgical safety and efficacy — including lesions, blood vessels, airways, organs, and skeletal structures — to help surgeons rapidly identify lesion positions and their relationship to surrounding tissue.",
                  },
                  {
                    label: "2. Semi-Automatic or Fully Automatic Intelligent Surgical Planning",
                    sub: "Helping doctors operate more safely, effectively, and intelligently.",
                    body: "Würzburg Dynamics' unique full-stack proprietary AI model can generate puncture surgical plans semi-automatically based on the surgeon's inputs, or fully automatically based on generalised expert experience. The system uses high-definition magnified 3D visualisation to assist physicians in surgical decision-making, improving the safety, efficacy, and convenience of the procedure.",
                  },
                  {
                    label: "3. High-Precision Near-Infrared Localisation + Flexible Robotic Arm Control",
                    sub: "Enhancing surgical stability, precision, and controllability.",
                    body: "Combining high-accuracy near-infrared tracking with high-flexibility robotic arm control, the system achieves spatial localisation error of less than 0.8 mm, enabling stable real-time spatial positioning and instrument delivery. This minimises hand-tremor and vibration-related deviations, improving precision, stability, and controllability throughout the puncture procedure.",
                  },
                  {
                    label: "4. Real-Time Dynamic Respiratory Monitoring",
                    sub: "Reducing judgement, localisation, and operational errors caused by respiratory motion.",
                    body: "Addressing the challenge of real-time lesion drift caused by patient spontaneous breathing during pulmonary interventional surgery, the dedicated respiratory dynamics monitoring module tracks changes in respiratory amplitude in real time, helping surgeons identify the optimal puncture moment and reducing errors caused by respiratory movement.",
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
                Several senior experts in respiratory rehabilitation gave high praise: the robot can assist physicians in reducing complications such as pneumothorax and bleeding from repeated puncture attempts. The device also features a clear and straightforward learning curve, allowing young clinicians to master the core workflow through standardised procedures — making it well-suited for lung nodule biopsy, ablation, and pre-operative localisation across tertiary respiratory intervention centres and community hospitals alike.
              </p>

              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                With the widespread adoption of early lung screening driving surging demand for minimally invasive pulmonary intervention, the industry urgently needs standardised, easy-to-deploy intelligent equipment. Würzburg Dynamics&apos; surgical robot is highly aligned with the conference&apos;s theme of standardising respiratory rehabilitation, bridging the lung screening → minimally invasive intervention → post-operative rehabilitation integrated care pathway into a closed loop. Large numbers of clinicians proactively exchanged contact details on-site, scheduling in-depth post-conference follow-up and requesting on-site demonstration visits.
              </p>
            </ScrollReveal>

            {/* Summary */}
            <ScrollReveal>
              <div className="border-t border-[#E5E5E4] pt-8">
                <h3 className="font-display font-600 text-ink text-[18px] mb-4">Summary &amp; Outlook</h3>
                <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8]">
                  A decade of excellence opens a new chapter; intelligent equipment drives standardisation. During this visit to Harbin, Würzburg Dynamics leveraged China&apos;s premier respiratory rehabilitation academic platform to engage directly with hundreds of clinicians, comprehensively capturing real-world frontline clinical needs. Going forward, Würzburg Dynamics will continue to deepen its focus on the soft tissue percutaneous intervention segment, empowering hospitals at all levels through its fully proprietary intelligent surgical robot platform — streamlining minimally invasive lung nodule diagnosis and treatment. Through intelligent, standardised equipment, the company will drive respiratory rehabilitation standards into community healthcare settings, working alongside medical professionals nationwide to build a robust lung health defence and contribute to the construction of a Healthy China.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </section>

        <NewsFooter lang="en" currentId={1} />
      </main>
    </div>
  );
}
