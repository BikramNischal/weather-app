import DateTime from "./DateTime";

const timeOfDay = () => {
    const date = new Date();
    const hrs = date.getHours();
    if (hrs >= 5 && hrs < 12) return "morning";
    else if (hrs >= 12 && hrs < 6) return "afternoon";
    else return "night";
}


function Greeting() {
    return (
        <p> Good {timeOfDay()} User!</p>
    );
}

export default function WeatherDetailHeader() {
    return (
        <>
            <DateTime />
            <Greeting />
        </>
    );
}