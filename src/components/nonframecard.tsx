type Props = {
  title: String;
};

export default function NonFrameCard(props: Props) {
  return (
    <div className="card">
      <div className="card-body">
        <span className="card-title">{props.title}</span>
      </div>
    </div>
  );
}
