import Card from "../components/card";

export default function Home() {
  return (
    <>
      <div className="main-top flex flex-col flex-wrap content-center justify-center h-80">
        <span className="text-8xl">
          好きなことを、
          <br />
          楽しく。
        </span>
        <p>そのようなスローガンを元に、私達は開発します。</p>
      </div>
      <div className="inner flex ">
        <Card title="News" />
        <Card title="Works" description="私達はこちらの作品を作っています。" />
      </div>
    </>
  );
}
