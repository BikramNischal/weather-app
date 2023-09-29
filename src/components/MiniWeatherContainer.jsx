import { useEffect, useState } from "react";
import MiniWeatherCard from "./MiniWeatherCard";
import { dayOfWeek } from "./WeatherData";


export default function MiniWeatherContainer(props) {
    const [weatherCondition, setWeatherCondition] = useState(props.forecast);

    useEffect(() =>{
        setWeatherCondition(props.forecast);
    },[props.forecast])
    
    const listItems = weatherCondition.map(
        forecast => <li key={
            ("weather_code_" + weatherCondition.indexOf(forecast))} className="mx-[5px]">
            <MiniWeatherCard 
                condition={forecast.weatherCode.weatherCode} 
                temp={forecast.maxTemp}  
                day ={dayOfWeek[forecast.sunRise.date.getDay()]} 
                />
        </li>
    );

    return (
        <ul className="flex justify-between my-10 overflow-x-scroll no-scrollbar">
            {listItems}
        </ul>
    )
}
