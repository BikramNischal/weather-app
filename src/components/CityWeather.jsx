import { useState, useEffect, useContext } from "react";
import CurrentWeather from "./CurrentWeather"
import { WindAndHum, UvIndex } from "./CurrentWeatherMini";
import CurrentWeatherData from "./WeatherData";
import Search from "./Search";


export default function CityWeather(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const obtainedData = await CurrentWeatherData(props.location.lat, props.location.lon);
            setData(obtainedData);
        }
        getData();
    }, [props.location])

    if (data) {
        return (
            <section className="w-full p-5  
                sm:px-20 sm:py-10 
                lg:p-5 lg:w-1/3 
                2xl:px-20 2xl:py-10 flex flex-col gap-[50px]">
                <Search location={props.location} updateLocation={props.updateLocation} />
                <div className="flex gap-[25px] flex-col mx-auto container ">
                    <CurrentWeather
                        location={props.location.locationName}
                        currentDate={data.currentDate}
                        currentTemp={data.currentTemp}
                        weatherCondition={data.currentWeatherCondition}
                    />

                    <WindAndHum 
                        currentHumidity={data.currentHumidity} 
                        currentWindSpeed={data.currentWindSpeed} />

                    <UvIndex 
                        uvIndex={data.currentUvIndex} 
                        uvIndexClear={data.currentUvIndexClear} />
                </div>
            </section>
        );
    }
}