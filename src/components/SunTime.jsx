import SunTimeCard from "./SunTimeCard"
import { dayOfWeek } from "./WeatherData";

export default function SunTime(props) {

    const sunTimeData = props.forecast.map(
        data => {
            return {
                sunrise: data.sunRise.time.currentTime,
                sunset : data.sunSet.time.currentTime,
                day : dayOfWeek[data.sunRise.date.getDay()],
            }
        }
    );

    const sunTimeList = sunTimeData.map(
        data => <li key={
            "suntime_" + sunTimeData.indexOf(data)}>
            <SunTimeCard sunrise={data.sunrise} sunset={data.sunset} day ={data.day} /> 

        </li>
    );


    return (
        <section className="container w-1/2 bg-white p-[20px] rounded-xl">
            <h3 className="text-xl font-bold my-[5px]">Sunrise & Sunset</h3>
            <ul className="flex flex-col gap-[10px]">
                {sunTimeList}
            </ul>
        </section>
    )
}