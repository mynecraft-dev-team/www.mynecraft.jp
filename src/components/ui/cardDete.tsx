export default function CardDate(props: {
  year: number | undefined;
  month: number;
  day: number;
  hour: number;
}) {
  let yearnoyatu;

  if (props.year === undefined) {
    yearnoyatu = <></>;
  } else {
    yearnoyatu = <>{props.year}年</>;
  }
  // Create a date component
  return (
    <div>
      <span>
        {yearnoyatu} {props.month}月 {props.day}日 {props.hour}時
      </span>
    </div>
  );
}
