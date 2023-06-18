import WeatherDetailHeader from "./WeatherDetailHeader";
import MiniWeatherContainer from "./MiniWeatherContainer";
import AirQuality from "./AirQuality";
import Rainfall from "./Rainfall";
import SunTime from "./SunTime";

export default function WeatherDetail() {
    return (
        <section className=" w-3/4 p-10  bg-blue-50 ">
            <WeatherDetailHeader />
            <MiniWeatherContainer />
            <div className="flex gap-[20px]" >
                <div className="container flex flex-col gap-[20px]">
                    <AirQuality />
                    <Rainfall />
                </div>
                <SunTime />   
            </div>
        </section>
    );
}