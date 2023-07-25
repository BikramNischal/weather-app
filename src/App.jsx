import { createContext, useContext, useState, useEffect } from "react";
import WeatherDetail from "./components/WeatherDetail"
import CityWeather from "./components/CityWeather";



function App() {
    const [locationDetails, setLocationDetails] = useState(
        {
            lat: 27.65,
            lon: 85.28,
            locationName: "Kathmandu",
        }
    );

    return (

        <div className="box-border flex flex-col justify-between lg:flex-row ">
            <CityWeather location={locationDetails} updateLocation={setLocationDetails} />
            <WeatherDetail location={locationDetails} updateLocation={setLocationDetails} />
        </div>
    );

}

export default App
