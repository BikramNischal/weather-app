import { useContext, useState } from "react";
import MiniWeatherCard from "./MiniWeatherCard";


export default function MiniWeatherContainer(){
    const [weatherCondition, setWeatherCondition] = useState([1,2,3,4,5,6,7]);

    const listItems = weatherCondition.map(weatherCode => <li key={("weather_code_" + weatherCondition.indexOf(weatherCode))}>
        <MiniWeatherCard  condition={weatherCode} size={"text-4xl"} />
    </li>);

    return(
        <ul className="flex gap-20 my-10">
            {listItems}
        </ul>
    )
}