import {useState, useEffect} from "react";
import WeatherDetailHeader from "./WeatherDetailHeader";
import MiniWeatherContainer from "./MiniWeatherContainer";
import AirQuality from "./AirQuality";
import Rainfall from "./Rainfall";
import SunTime from "./SunTime";
import { ForecastData } from "./WeatherData";


// const forecast = await ForecastData(27.65, 85.28);

export default function WeatherDetail(props) {
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const obtainedData = await ForecastData(props.location.lat, props.location.lon);
            setForecast(obtainedData);
        }
        getData();
    }, [props.location])

    if (forecast) {
        return (
            <section className=" w-2/3 p-10 bg-blue-50 ">
                <WeatherDetailHeader
                    sunsetTime={forecast[0].sunSet.date.getHours()}
                    sunriseTime={forecast[0].sunRise.date.getHours()} />
                <MiniWeatherContainer forecast={forecast} />
                <div className="flex gap-[20px]" >
                    <div className="container w-1/2 flex flex-col gap-[20px]">
                        <AirQuality location={props.location} />
                        <Rainfall />
                    </div>
                    <SunTime forecast={forecast.slice(0, 3)} />
                </div>
            </section>
        );
    }
}