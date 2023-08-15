type props = {
    h: number,
    title: string
}

export default function postH(Props: props) {
    let heading: React.ReactNode
    
    if (Props.h === 1) {
        heading = <h1>{Props.title}</h1>
    } else if (Props.h === 2)  {
        heading = <h2>{Props.title}</h2>
    } else if (Props.h === 3)  {
        heading = <h3>{Props.title}</h3>
    } else if (Props.h === 4)  {
        heading = <h4>{Props.title}</h4>
    } else if (Props.h === 5)  {
        heading = <h5>{Props.title}</h5>
    } else {
        heading = <h6>{Props.title}</h6>
    }
    
    return (
        <div>
            {heading}
        </div>
    )
}