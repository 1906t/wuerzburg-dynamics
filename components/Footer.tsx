// ICP备案号 — only required when the site is hosted on mainland-China infrastructure.
// An overseas-hosted .com does not need an ICP filing, so this is empty by default and
// the line stays hidden. Once the company files (Guangdong → 粤ICP备…号), set it here and
// the footer will render it linked to the MIIT registry.
const ICP_NUMBER = "";
const ICP_URL = "https://beian.miit.gov.cn/";

export default function Footer() {
  return (
    <footer
      className="border-t border-[#E5E5E4] px-8 md:px-16 lg:px-24 xl:px-32 py-10 bg-white"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
        {/* Identity + contact */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-display font-600 text-[13px] text-ink tracking-[0.02em]">
              Würzburg Dynamics · 惟德精准
            </span>
            <span className="text-[11px] text-[#6B6B6B] tracking-[0.02em]">
              深圳惟德精准医疗科技有限公司 · Shenzhen Würzburg Dynamics Medical Technology Co., Ltd.
            </span>
          </div>
          <div className="flex flex-col sm:items-end gap-1 text-[11px] text-[#6B6B6B] tracking-[0.02em]">
            <span>Pingshan District, Shenzhen, Guangdong, China · 深圳市坪山区</span>
            <div className="flex flex-wrap gap-x-4 gap-y-1 sm:justify-end">
              <a
                href="tel:+8607558966820"
                className="hover:text-ink transition-colors duration-150"
              >
                +86 (0)755 8966 6820
              </a>
              <a
                href="mailto:info@wuerzburg-dynamics.com"
                className="hover:text-ink transition-colors duration-150"
              >
                info@wuerzburg-dynamics.com
              </a>
            </div>
          </div>
        </div>

        {/* Legal / compliance */}
        <div className="border-t border-[#EFEFEE] pt-5 flex flex-col md:flex-row md:items-start md:justify-between gap-3">
          <p className="text-[10px] text-[#9B9B9B] leading-[1.7] tracking-[0.02em] max-w-[680px]">
            Product information on this site is intended for healthcare professionals and
            qualified investors; it does not constitute medical advice, a product claim in
            any jurisdiction where the device is not registered, or an offer of securities.
            Referenced systems include NMPA Class III registered medical devices
            （国家药监局三类医疗器械注册）.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-[#9B9B9B] tracking-[0.04em] md:justify-end shrink-0">
            <span>© 2020–2026 Würzburg Dynamics. All rights reserved.</span>
            {ICP_NUMBER && (
              <a
                href={ICP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors duration-150"
              >
                {ICP_NUMBER}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
