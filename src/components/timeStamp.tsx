type props = {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number
}

export default function timeStamp (props: props) {
    return (
        <div>
            {props.year}年{props.month}月{props.day}日 {props.hour}:{props.minute}
        </div>
    )
}