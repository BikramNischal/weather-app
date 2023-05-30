import WeatherDetailHeader from "./WeatherDetailHeader";
import MiniWeatherContainer from "./MiniWeatherContainer";
import AirQuality from "./AirQuality";
import Rainfall from "./Rainfall";
import SunTime from "./SunTime";

export default function WeatherDetail() {
    return (
        <section>
            <WeatherDetailHeader />
            <MiniWeatherContainer />
            <div className="flex" >
                <div className="container flex flex-col gap-10">
                    <AirQuality />
                    <Rainfall />
                </div>
                <SunTime />   
            </div>
        </section>
    );
}