import DateTime from "./DateTime";
import { BsSun, BsSunset, BsMoon } from "react-icons/bs";

const timeOfDay = () => {
    const date = new Date();
    const hrs = date.getHours();
    if (hrs >= 5 && hrs < 12) return 0;
    else if (hrs >= 12 && hrs < 18) return 1;
    else return 2;
}


function Greeting(props) {
    const tod = timeOfDay();
    if (tod === 0) {
        return (
            <p className={" " + props.color + " " + props.bold}>
                <BsSun className="inline-block text-4xl" /> Good Morning User!
            </p>
        )
    }
    else if (tod === 1) {
        return (
            <p className={" " + props.color + " " + props.bold}>
                <BsSunset className="inline-block  text-4xl" /> Good Afternoon User!
            </p>
        );
    }
    else {
        return (
            <p className={" " + props.color + " " + props.bold}>
                <BsMoon className="inline-block  text-4xl" /> Good Night User!
            </p>
        );
    }
}

export default function WeatherDetailHeader() {
    return (
        <>
            <DateTime />
            <Greeting color="text-blue-600" bold="font-bold" />
        </>
    );
}