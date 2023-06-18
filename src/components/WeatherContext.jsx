import { createContext, useState, useContext, useEffect } from "react";

const key = import.meta.env.VITE_API_KEY;

const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=kathmandu&days=7&aqi=yes&alerts=no`;


const apiData = (async function () {
    const response = await fetch(url);
    const data = await response.json();
    const forecast  = data.forecast;
    return forecast
})();

let forecastData;
if(apiData){
    forecastData = apiData.then((forecastArr) => {return forecastArr.forecastday});
}

const WeatherContext = createContext(forecastData);
export default WeatherContext;