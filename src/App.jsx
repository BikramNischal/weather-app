import { createContext, useContext, useState, useEffect } from "react";
import WeatherDetail from "./components/WeatherDetail"
import WeatherContext from "./components/WeatherContext";
import CityWeather from "./components/CityWeather";




function App() {
    const [weatherArray, setWeatherArray] = useState([]);
    const data = useContext(WeatherContext);
    data.then((arr) => setWeatherArray(arr));

    if (weatherArray[0]) {
        return (
            <div className="flex gap-20 m-20 ">
                <WeatherDetail />
                <CityWeather />
            </div>
        );
    }
}

export default App
