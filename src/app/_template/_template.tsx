// このように書いてください! (本当はMDで書きたかったけど...)
import Heading from "@/components/post-h";

export default function Home() {
  return (
    <div className="inner">
      {/* h1やh2のようなheadingタグはこのコンポーネントを使用してください */}
      <Heading h={1} title="hoge"></Heading>
      <p>Hoge</p>
    </div>
  );
}
