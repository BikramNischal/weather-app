import { WindAndHum } from "./CurrentWeather";



export default function CurrentWeatherMini(props) {
    const style = "flex justify-between p-[20px] rounded-xl text-md" + " " + props.text + " " + props.background;
    return (
        <div className={style}>
            <WindAndHum />
            <p>tomorrow <span className="block my-[10px]">26 C</span></p>
        </div>
    );
}