import Card from "@/components/card";

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
      <div className="inner flex flex-col flex-wrap content-around">
        <div className="mt-5 ml-5">
          <span className="border-solid border-b-2 border-l-4 pl-2 w-64 block text-2xl">
            News
          </span>
        </div>
        <Card title="Works" description="私達はこちらの作品を作っています。" />
      </div>
    </>
  );
}
