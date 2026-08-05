export default function Footer() {
  return (
    <footer
      className="border-t border-[#E5E5E4] px-8 md:px-16 lg:px-24 xl:px-32 py-6 bg-white"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span className="text-[11px] text-[#6B6B6B] tracking-[0.04em]">
          © 2025 Würzburg Dynamics · 深圳惟德精准医疗科技有限公司
        </span>
        <a
          href="mailto:info@wuerzburg-dynamics.com"
          className="text-[11px] text-[#6B6B6B] tracking-[0.04em] hover:text-ink transition-colors duration-150"
        >
          info@wuerzburg-dynamics.com
        </a>
      </div>
    </footer>
  );
}
