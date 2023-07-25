import axios from "axios";

const currentDate = new Date();
const currentTime = currentDate.getHours();

function getCurrentTime(date, timezone){
    const time = new Date(date).toLocaleTimeString('en-US', { timeZone: timezone}).split(" ");
    const splitTime = time[0].split(":");
    const currenthour = Number(splitTime[0]);
    let currenthour24 = 0;
    if(time[1] === "AM") currenthour24 = currenthour % 12;
    else
        if(currenthour < 12) currenthour24 = 12 + currenthour;
        else currenthour24 = currenthour;
 
    return({
        currentHour: currenthour24,
        currentTime: splitTime[0]+":"+splitTime[1] + " " + time[1]
    });

}


export const dayOfWeek= ["Sun", "Mon", "Tues", "Wednes","Thurs","Fri","Satur"];

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

export function ForecastData(lat,lon){
    return axios.get(
        "https://api.open-meteo.com/v1/forecast?daily=weathercode,temperature_2m_max,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,windspeed_10m_max&timeformat=unixtime&timezone=auto",
        {
            params:{
                latitude:lat,
                longitude:lon,
            },
        }
    )
    .then(({data}) =>{
            return getForeCastData(data, data.timezone);    
        }
    )
};

export default function CurrentWeatherData(lat,lon){
    return axios.get(
        "https://api.open-meteo.com/v1/forecast?hourly=relativehumidity_2m,temperature_2m,weathercode,windspeed_10m&daily=uv_index_max,uv_index_clear_sky_max&timeformat=unixtime&forecast_days=1&timezone=auto",
        {
            params:{
                latitude:lat,
                longitude:lon,
            }
        }
    )
    .then(({data}) =>{
            const currentTime =getCurrentTime(Date(), data.timezone);
            return getCurrentWeather(data, currentTime.currentHour); 
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


function getForeCastData({daily}, timeZone){
    return daily.time.map((time,index)=>{
        return{
            weatherCode: mapWeatherCode(daily.weathercode[index]),
            maxTemp: Math.round(daily.temperature_2m_max[index]),
            sunRise:{
                    date: new Date(daily.sunrise[index]*1000),
                    time: getCurrentTime(daily.sunrise[index]*1000,timeZone),
                },
            sunSet:{
                    date: new Date(daily.sunset[index]*1000),
                    time: getCurrentTime(daily.sunset[index]*1000,timeZone),
                },

        }
    });
}

export function AirQualityData(lat,lon){
    return axios.get("https://air-quality-api.open-meteo.com/v1/air-quality?hourly=us_aqi_pm2_5,us_aqi_pm10,us_aqi_no2,us_aqi_co,us_aqi_o3,us_aqi_so2&timeformat=unixtime&timezone=auto",
        {
            params:{
                latitude:lat,
                longitude: lon,
            }
        }
    ).then(({data})=>{
        const currentTime =getCurrentTime(Date(), data.timezone);
        return getAirQuality(data, currentTime.currentHour);
    });
}


function getAirQuality({hourly}, currentTime){
    return{
        pm10: hourly.us_aqi_pm10[currentTime],
        pm2: hourly.us_aqi_pm2_5[currentTime],
        co: hourly.us_aqi_co[currentTime],
        no2: hourly.us_aqi_no2[currentTime],
        so2: hourly.us_aqi_so2[currentTime],
        o3: hourly.us_aqi_o3[currentTime],
   };
}


