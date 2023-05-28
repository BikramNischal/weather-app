import DateTime from "./DateTime";
import { BsSun, BsSunset, BsMoon } from "react-icons/bs";

const timeOfDay = () => {
    const date = new Date();
    const hrs = date.getHours();
    if (hrs >= 5 && hrs < 12) return 0;
    else if (hrs >= 12 && hrs < 18) return 1;
    else return 2;
}


function Greeting() {
    const tod = timeOfDay();
    if (tod === 0) {
        return (
            <p> <BsSun className="inline-block text-4xl" /> Good {timeOfDay()} User!</p>
        )
    }
    else if (tod === 1) {
        return (
            <p> <BsSunset className="inline-block text-4xl" /> Good {timeOfDay()} User!</p>
        );
    }
    else {
        return (
            <p> <BsMoon className="inline-block text-4xl" /> Good {timeOfDay()} User!</p>
        );
    }
}

export default function WeatherDetailHeader() {
    return (
        <>
            <DateTime />
            <Greeting />
        </>
    );
}