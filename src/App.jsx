import { useContext, useState, useEffect } from "react";
import WeatherDetail from "./components/WeatherDetail"

const key = import.meta.env.VITE_API_KEY;
const url =
    `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=Kathmandu&days=7&aqi=yes&alerts=no`;

fetch(url).then((data) => {
    return data.json();
}).then((jsondata) => {
    console.log(jsondata);
});

function App() {
    // cosnt [weatherDate, setWeatherDate] = useState(null);
    // useEffect({
    //     fetch()
    // }) 
    return (
        <>
            <WeatherDetail />
        </>
    )
}

export default App
