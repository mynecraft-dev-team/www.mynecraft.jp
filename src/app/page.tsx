import Card from "../components/card";

export default function Home() {
  return (
    <>
      <div className="main-top">
        <span className="text-4xl">
          好きなことを、
          <br />
          楽しく。
        </span>
        <p>そのようなスローガンを元に、私達は開発します。</p>
      </div>
      <div className="inner">
        <Card title="News" />
        <Card title="Works" description="私達はこちらの作品を作っています。" />
      </div>
    </>
  );
}
