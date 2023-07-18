import DateTime from "./DateTime";
import { BsSun, BsSunset, BsMoon, BsSunrise } from "react-icons/bs";

const timeOfDay = (sunrise, sunset) => {
    const date = new Date();
    const hrs = date.getHours();
    if (hrs >= sunrise && hrs < 12) return 0;
    else if (hrs >= 12 && hrs < 17) return 1;
    else if (hrs >= 17 && hrs < sunset) return 2;
    else return 3;
}


function Greeting(props) {
    const tod = timeOfDay(props.sunrise,props.sunset);
    if (tod === 0) {
        return (
            <p className="text-blue-600 font-bold" >
                <BsSunrise className="inline-block text-4xl" /> Good Morning!
            </p>
        )
    }
    else if (tod === 1) {
        return (
            <p className="text-blue-600 font-bold" >
                <BsSun className="inline-block  text-4xl" /> Good Afternoon!
            </p>
        );
    }
    else if (tod === 2) {
        return (
            <p className="text-blue-600 font-bold" >
                <BsSunset className="inline-block  text-4xl" /> Good Evening!
            </p>
        );
    }
    else {
        return (
            <p className="text-blue-600 font-bold" >
                <BsMoon className="inline-block  text-4xl" /> Good Night!
            </p>
        );
    }
}

export default function WeatherDetailHeader(props) {
    return (
        <>
            <DateTime />
            <Greeting sunrise={props.sunriseTime} sunset={props.sunsetTime} />
        </>
    );
}