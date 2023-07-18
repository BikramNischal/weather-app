import { createContext, useContext, useState, useEffect } from "react";
import WeatherDetail from "./components/WeatherDetail"
import CityWeather from "./components/CityWeather";

function App() {
    return (
        <div className="box-border flex justify-between">
            <WeatherDetail />
            <CityWeather />
        </div>
    );

}

export default App
