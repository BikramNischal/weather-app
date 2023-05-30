import { useState, useContext,useEffect } from "react";
import CurrentWeather from "./CurrentWeather"
import CurrentWeatherMini from "./CurrentWeatherMini";
import WeatherContext from "./WeatherContext";

export default function CityWeather() {
    const [weatherArray, setWeatherArray] = useState([]);
    const data = useContext(WeatherContext);
    data.then((arr) => setWeatherArray(arr));
    let currentWeather={};
    if(weatherArray[0]){
        currentWeather = weatherArray[0];
    }

    const [weatherCondition, setWeatherCondition] = useState();


    return (
        <section className="flex flex-col gap-20">
            <input type="text" placeholder="Location" className="border-solid border-2 border-black" />
            <div className="flex gap-20 flex-col container w-300">
                <CurrentWeather />
                <CurrentWeatherMini />
                <CurrentWeatherMini />
            </div>
        </section>
    );
}