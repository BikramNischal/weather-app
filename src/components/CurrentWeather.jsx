import { useState } from "react";
import { BsWind, BsDroplet } from "react-icons/bs";
import { ReturnWeatherIcon } from "./MiniWeatherCard";


export function WindAndHum() {
    return (
        <div>
            <p><BsWind className="inline-block" /> wind |19km/h</p>
            <p><BsDroplet className="inline-block" /> Hum |  22%</p>
        </div>
    );
}


export default function CurrentWeather() {
    const [weatherCode, setWeatherCode] = useState(1);

    return (
        <div className="h-[400px]  p-[20px] bg-blue-500 text-white">
            <p>Location</p>
            <div>
                <ReturnWeatherIcon condition={weatherCode} size={"text-6xl"} />
                <p>Today, 30 May</p>
                <p>29 C</p>
                <p>Sunny</p>
                <WindAndHum />
            </div>
        </div>
    )
}