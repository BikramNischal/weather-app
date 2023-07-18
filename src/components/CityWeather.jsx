import CurrentWeather from "./CurrentWeather"
import {WindAndHum,UvIndex} from "./CurrentWeatherMini";
import CurrentWeatherData from "./WeatherData";

const data = await CurrentWeatherData(27.65,85.28,Intl.DateTimeFormat().resolvedOptions().timeZone);

export default function CityWeather() {
    return (
        <section className="w-1/3 px-20 py-10 flex flex-col gap-[50px]">
            <input type="text" placeholder="Location"
                className="h-[50px] bg-blue-100 px-10 rounded-3xl " />

            <div className="flex gap-[25px] flex-col container">
                <CurrentWeather 
                    currentDate={data.currentDate} 
                    currentTemp={data.currentTemp} 
                    weatherCondition={data.currentWeatherCondition} 
                />
                
                <WindAndHum currentHumidity={data.currentHumidity} currentWindSpeed={data.currentWindSpeed} />
                <UvIndex uvIndex={data.currentUvIndex} uvIndexClear={data.currentUvIndexClear} /> 
            </div>
        </section>
    );
}