import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLine from "@/components/SectionLine";
import NewsFooter from "@/components/NewsFooter";

export const metadata = {
  title: "Robotic Lung Nodule Biopsy — Würzburg Dynamics News",
};

export default function Article3Page() {
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
                <span className="label-caps text-[#CC0000]">Clinical Case</span>
                <span className="text-[12px] text-[#9B9B9B]">·</span>
                <span className="text-[12px] text-[#9B9B9B]">2025</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} y={40}>
              <h1
                className="font-display font-700 text-ink leading-[1.1] mb-8"
                style={{ fontSize: "clamp(22px, 3vw, 38px)" }}
              >
                Empowering Clinical Care: Robotic-Guided Precision Biopsy of Bilateral Pulmonary Nodules — Shanghai Physicians Gain a New Tool for Lung Cancer Diagnosis
              </h1>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative px-8 md:px-16 lg:px-24 xl:px-32 pb-32">
          <SectionLine />
          <div className="max-w-[900px] mx-auto">

            <ScrollReveal>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                Recently, the Department of Respiratory and Critical Care Medicine and the Department of Radiology at Shanghai Public Health Clinical Center jointly completed two complex small pulmonary nodule biopsy procedures guided by percutaneous robotic navigation — providing a safer and more effective new diagnostic pathway for patients with challenging pulmonary lesions.
              </p>
            </ScrollReveal>

            {/* Image 1 */}
            <ScrollReveal delay={0.1}>
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F5F5F3] mb-10">
                <Image
                  src="/images/news/news-3/img-1.jpg"
                  alt="Robotic-guided percutaneous lung biopsy at Shanghai Public Health Clinical Center"
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h3 className="font-display font-600 text-ink text-[17px] mb-4">Case 1</h3>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-8">
                The first patient presented with multiple bilateral sub-solid pulmonary lesions. CT imaging was highly suggestive of pulmonary adenocarcinoma, but surgical resection was not feasible. In accordance with the closed-loop treatment model of molecular profiling → targeted/immunotherapy/surgery → dynamic monitoring → re-profiling, obtaining a pathological specimen was the critical diagnostic step. Several of the patient&apos;s nodules exhibited vascular aggregation and traversal characteristics. The team used pre-operative precision planning to select vascular-sparse access regions, employed a needle-advancement strategy parallel to the blood vessels, and combined this with cryobiopsy techniques to successfully obtain adequate specimen volume. Rapid on-site pathological evaluation confirmed the presence of tumour cells.
              </p>

              <h3 className="font-display font-600 text-ink text-[17px] mb-4">Case 2</h3>
              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-10">
                The second patient had undergone right lung adenocarcinoma surgery four years prior and was at high risk for post-operative recurrence; post-operative genetic testing had detected EGFR-sensitising mutations. After treatment with two generations of targeted therapy, follow-up imaging revealed a new right pulmonary nodule with pleural thickening, suggesting recurrence or metastasis. The lesion measured only 11 × 9 mm and was adjacent to the pleura, posing challenges including high pneumothorax risk and lesion displacement. The team innovatively employed a &quot;long-route over short&quot; wide-angle, extended-distance needle-advancement strategy to avoid repeated pleural punctures. In conjunction with the robotic system&apos;s precise control of puncture angle and respiratory phase, the team successfully obtained a high-quality solid tissue core — demonstrating the robot&apos;s advantage in small-lesion, wide-angle, cross-planar angled puncture procedures.
              </p>

              <p className="text-[15px] font-[300] text-[#6B6B6B] leading-[1.8] mb-6">
                Percutaneous puncture refers to the minimally invasive procedure of advancing a needle, catheter, or similar instrument directly through the skin to a target organ or tissue. The percutaneous robotic system integrates imaging navigation, a robotic arm, a needle positioning system, and intelligent control software, achieving a precision upgrade for puncture operations. While currently in the clinical evaluation phase, this technology has already demonstrated three core advantages in clinical practice:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    label: "1. Significantly improved accuracy",
                    body: "Effectively enhancing the needle's ability to reach the target lesion with precision.",
                  },
                  {
                    label: "2. Reduced radiation exposure",
                    body: "Substantially lowering CT and X-ray-guided radiation contact time for medical personnel.",
                  },
                  {
                    label: "3. Stronger operational consistency",
                    body: "Reducing inter-operator skill variation and reliance on operator experience, enabling less experienced physicians to perform complex-path punctures.",
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
                In addition, the technology features minimal invasiveness, short procedure duration, and fast patient recovery. Beyond its use in pathological diagnosis, it can be widely applied to therapeutic procedures such as thermal tumour ablation and radioactive seed implantation, and is compatible with diagnostic and treatment needs across multiple sites including the lung, liver, and kidney. As technology continues to advance and clinical validation progresses, this &quot;precision medicine tool&quot; will play an increasingly critical role in complex cases, benefiting a growing number of patients.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[11px] text-[#9B9B9B] leading-[1.6] border-t border-[#E5E5E4] pt-6">
                Content sourced from 上观新闻 (Shangguan News) and 上海市公共卫生临床中心 (Shanghai Public Health Clinical Center).
              </p>
            </ScrollReveal>

          </div>
        </section>

        <NewsFooter lang="en" currentId={3} />
      </main>
    </div>
  );
}
