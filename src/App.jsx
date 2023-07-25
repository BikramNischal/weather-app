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

        <div className="box-border flex justify-between">
            <WeatherDetail location={locationDetails} updateLocation={setLocationDetails} />
            <CityWeather location={locationDetails} updateLocation={setLocationDetails} />
        </div>
    );

}

export default App
