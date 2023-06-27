import { useState } from "react";
import { BsWind, BsDroplet } from "react-icons/bs";
import { ReturnWeatherIcon } from "./MiniWeatherCard";


export function WindAndHum() {
    return (
        <div className="flex flex-col gap-[10px]">
            <p>
                <BsWind className="inline-block" />
                <span className="inline-block mx-[10px]">wind </span> | <span className="inline-block mx-[10px]">19km/h</span>
            </p>
            <p>
                <BsDroplet className="inline-block" />
                <span className="inline-block mx-[10px]">Hum</span> | <span className="inline-block mx-[10px]">22%</span>
            </p>
        </div>
    );
}


export default function CurrentWeather() {
    const [weatherCode, setWeatherCode] = useState(1);

    return (
        <div className="h-[400px] p-[20px] bg-blue-500 text-white rounded-xl">
            <p>Location</p>
            <div className="w-4/5 my-[20px] mx-auto flex flex-col gap-[20px] items-center">
                <ReturnWeatherIcon condition={weatherCode} style={"text-7xl font-bold"} />
                <p className="text-xs font-bold">Today, 30 May</p>
                <p className="text-6xl">29 C</p>
                <p className="font-bold">Sunny</p>
                <WindAndHum />
            </div>
        </div>
    )
}