import { useState, useEffect } from "react";
import WeatherDetailHeader from "./WeatherDetailHeader";
import MiniWeatherContainer from "./MiniWeatherContainer";
import AirQuality from "./AirQuality";
import Credit from "./Credit";
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
            <section className=" w-full p-5 bg-blue-50 flex flex-col gap-[10px]
                sm:px-20 sm:py-10 
                lg:p-5 lg:w-2/3 
                2xl:px-10 2xl:py-5 
            ">
                <WeatherDetailHeader
                    sunsetTime={forecast[0].sunSet.date.getHours()}
                    sunriseTime={forecast[0].sunRise.date.getHours()} />
                <MiniWeatherContainer forecast={forecast} />
                <div className="flex flex-col gap-[20px] lg:flex-row" >
                    <SunTime forecast={forecast.slice(0, 3)} />
                    <div className="container w-full h-full m-auto flex flex-col gap-[20px] lg:w-1/2">
                        <AirQuality location={props.location} />
                        <Credit />
                    </div>
                </div>
            </section>
        );
    }
}