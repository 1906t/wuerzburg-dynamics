export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500&display=swap"
      />
      <div lang="zh">{children}</div>
    </>
  );
}
