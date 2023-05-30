import { WindAndHum } from "./CurrentWeather";



export default function CurrentWeatherMini() {
    return (
        <div className="flex gap-20">
            <WindAndHum />
            <p>tomorrow <span className="block">26 C</span></p>
        </div>
    );
}