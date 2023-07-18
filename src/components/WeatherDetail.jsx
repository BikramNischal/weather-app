import WeatherDetailHeader from "./WeatherDetailHeader";
import MiniWeatherContainer from "./MiniWeatherContainer";
import AirQuality from "./AirQuality";
import Rainfall from "./Rainfall";
import SunTime from "./SunTime";
import {ForecastData, dayOfWeek} from "./WeatherData";


const forecast = await ForecastData(27.65,85.28,Intl.DateTimeFormat().resolvedOptions().timeZone);

export default function WeatherDetail() {
    return (
        <section className=" w-2/3 p-10  bg-blue-50 ">
            <WeatherDetailHeader 
                sunsetTime={forecast[0].sunSet.getHours()} 
                sunriseTime={forecast[0].sunRise.getHours()} />
            <MiniWeatherContainer forecast={forecast} />
            <div className="flex gap-[20px]" >
                <div className="container w-1/2 flex flex-col gap-[20px]">
                    <AirQuality />
                    <Rainfall />
                </div>
                <SunTime forecast={forecast.slice(0,3)} />   
            </div>
        </section>
    );
}