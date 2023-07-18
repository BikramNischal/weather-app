import { useState } from "react";
import { ReturnWeatherIcon } from "./MiniWeatherCard";


export default function CurrentWeather(props) {
    return (
        <div className="min-h-[400px] p-[20px] bg-blue-400 text-white rounded-xl">
            <p className="font-bold">Location</p>
            <div className="w-4/5 my-[20px] mx-auto flex flex-col gap-[20px] items-center">
                <ReturnWeatherIcon condition={props.weatherCondition.weatherCode} size="w-2/3" />
                <p className="text-base font-bold">Today, {props.currentDate}</p>
                <p className="text-6xl">{props.currentTemp}&deg;C</p>
                <p className="font-bold">{props.weatherCondition.weather}</p>
            </div>
        </div>
    )
}