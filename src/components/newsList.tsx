import Link from "next/link";
import { UrlObject } from "url";

export default function newsList(props: {
  title: String;
  date: String;
  url: UrlObject;
}) {
  return (
    <Link href={props.url}>
      <div className="card">
        <span>{props.title}</span>
        <span>{props.date}</span>
      </div>
    </Link>
  );
}
