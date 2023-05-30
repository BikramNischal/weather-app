import { createContext, useContext, useState, useEffect } from "react";
import WeatherDetail from "./components/WeatherDetail"
import WeatherContext from "./components/WeatherContext";






function App() {
    const data = useContext(WeatherContext);
    console.log(data);
    return (
        <>
            <WeatherDetail />
        </>
    );
}

export default App
