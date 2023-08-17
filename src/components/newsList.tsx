import Link from "next/link";
import { UrlObject } from "url";

type Props = {
  title: String;
  date: String;
  url: UrlObject;
};

export default function newsList(props: Props) {
  return (
    <Link href={props.url}>
      <div className="card">
        <span>{props.title}</span>
        <span>{props.date}</span>
      </div>
    </Link>
  );
}
