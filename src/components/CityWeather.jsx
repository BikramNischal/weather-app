import { useState, useContext, useEffect } from "react";
import CurrentWeather from "./CurrentWeather"
import CurrentWeatherMini from "./CurrentWeatherMini";
import WeatherContext from "./WeatherContext";

export default function CityWeather() {
    return (
        <section className="w-1/4 p-10 flex flex-col gap-[50px]">
            <input type="text" placeholder="Location"
                className="h-[50px] bg-blue-100 px-10 rounded-3xl " />

            <div className="flex gap-20 flex-col container w-300">
                <CurrentWeather />
                <CurrentWeatherMini />
                <CurrentWeatherMini />
            </div>
        </section>
    );
}