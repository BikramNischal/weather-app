import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const currentDate = new Date();
const currentTime = currentDate.getHours();

export const dayOfWeek= ["Sun", "Mon", "Tue", "Wed","Thu","Fri","Sat"];

export function mapWeatherCode(weathercode){
    if(weathercode <= 1) return {weatherCode: 1, weather: "Clear"}; 
    else if(weathercode < 3) return {weatherCode: 2, weather:"Partly Cloudy"};    
    else if(weathercode < 50) return {weatherCode: 3, weather:"Fog/Cloudy"};
    else if(weathercode < 60) return {weatherCode:7, weather:"Drizzle"};
    else if(weathercode < 70) return {weatherCode:4, weather:"Rain"};
    else if(weathercode < 80) return {weatherCode:8, weather:"Snow"};
    else if(weathercode < 96) return {weatherCode:5, weather:"Rain Shower"};
    else return {weatherCode:6, weather:"Thuderstorm"};

}



//https://api.open-meteo.com/v1/forecast?latitude=27.65&longitude=85.28&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weathercode,windspeed_10m&daily=sunset,uv_index_max,rain_sum,precipitation_probability_max&timeformat=unixtime&forecast_days=1&timezone=auto

export function ForecastData(lat,lon, timezone){
    return axios.get(
        "https://api.open-meteo.com/v1/forecast?daily=weathercode,temperature_2m_max,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,windspeed_10m_max&timeformat=unixtime&timezone=auto",
        {
            params:{
                latitude:lat,
                longitude:lon,
                timezone,
            },
        }
    )
    .then(({data}) =>{
            return getForeCastData(data);
            
        }
    )
};

export default function CurrentWeatherData(lat,lon,timezone){
    return axios.get(
        "https://api.open-meteo.com/v1/forecast?hourly=relativehumidity_2m,temperature_2m,weathercode,windspeed_10m&daily=uv_index_max,uv_index_clear_sky_max&timeformat=unixtime&forecast_days=1&timezone=auto",
        {
            params:{
                latitude:lat,
                longitude:lon,
                timezone,
            }
        }
    )
    .then(({data}) =>{
        return getCurrentWeather(data, currentTime);
             
        }
    )
}


function getCurrentWeather({hourly,daily}, currentTime){
    const{
       uv_index_max: uvIndex,
       uv_index_clear_sky_max: uvIndexClear,
    } = daily

    const date = Date(hourly.time*1000).split(" ");

    return {
        currentTemp: Math.round(hourly.temperature_2m[currentTime]),
        weatherCode: hourly.weathercode[currentTime],
        currentWeatherCondition: mapWeatherCode(hourly.weathercode[currentTime]),
        currentDate: date[2] + " " + date[1],
        currentHumidity: Math.round(hourly.relativehumidity_2m[currentTime]),
        currentWindSpeed: Math.round(hourly.windspeed_10m[currentTime]),
        currentUvIndex: uvIndex[0],
        currentUvIndexClear: uvIndexClear[0],
    };
}

function getForeCastData({daily}){
    return daily.time.map((time,index)=>{
        return{
            weatherCode: mapWeatherCode(daily.weathercode[index]),
            maxTemp: Math.round(daily.temperature_2m_max[index]),
            sunRise: new Date(daily.sunrise[index]*1000),
            sunSet:new  Date(daily.sunset[index]*1000),
        }
    });
}


export function AirQualityData(lat,lon,timezone){
    // "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=27.65&longitude=85.28&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone&timezone=auto&timeformat=unixtime";

    return axios.get("https://air-quality-api.open-meteo.com/v1/air-quality?&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone&timezone=auto&timeformat=unixtime",
        {
            params:{
                latitude:lat,
                longitude: lon,
                timezone,
            }
        }
    ).then(({data})=>{
        return getAirQuality(data, currentTime);
    });
}


function getAirQuality({hourly}, currentTime){
    return{
        pm10: hourly.pm10[currentTime],
        pm2: hourly.pm2_5[currentTime],
        co: hourly.carbon_monoxide[currentTime],
        no2: hourly.nitrogen_dioxide[currentTime],
        so2: hourly.sulphur_dioxide[currentTime],
        o3: hourly.ozone[currentTime],
   };
}