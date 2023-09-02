export default function NonFrameCard(props: { title: String }) {
  return (
    <div className="card">
      <div className="card-body">
        <span className="card-title">{props.title}</span>
      </div>
    </div>
  );
}
