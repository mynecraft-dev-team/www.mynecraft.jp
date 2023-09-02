export default function postH(props: { h: number; children: React.ReactNode }) {
  let heading: React.ReactNode;

  if (props.h === 1) {
    heading = <h1>{props.children}</h1>;
  } else if (props.h === 2) {
    heading = <h2>{props.children}</h2>;
  } else if (props.h === 3) {
    heading = <h3>{props.children}</h3>;
  } else if (props.h === 4) {
    heading = <h4>{props.children}</h4>;
  } else if (props.h === 5) {
    heading = <h5>{props.children}</h5>;
  } else {
    heading = <h6>{props.children}</h6>;
  }

  return <div>{heading}</div>;
}
