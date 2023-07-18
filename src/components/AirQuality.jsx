import { AirQualityData } from "./WeatherData";

const airdata = await AirQualityData(27.65,85.28,Intl.DateTimeFormat().resolvedOptions().timeZone);

const elements = [
    { element: "PM2", reading: airdata.pm2 },
    { element: "PM10", reading: airdata.pm10 },
    { element: "SO2", reading: airdata.so2 },
    { element: "NO2", reading: airdata.no2 },
    { element: "O3", reading: airdata.o3 },
    { element: "CO", reading: airdata.co }];


function AirElement(props) {
    return (
        <p className="text-emerald-500">
            <span className="block font-bold text-xl ">{props.elementsReading}</span>{props.elements}
        </p>
    );
}



export default function AirQuality() {

    const airElements = elements.map(
        item =>
            <li key={"Aq-" + (elements.indexOf(item))}
                className="bg-emerald-50 w-[60px] h-[75px] text-center py-2 rounded-xl" >
                <AirElement elementsReading={item.reading} elements={item.element} />
            </li >
    );

    return (
        <div className="bg-white h-1/2 p-[20px] rounded-2xl">
            <div className="flex justify-between">
                <h4 className="text-xl font-bold">Air Quality Index</h4>
                <p>Location</p>
            </div>
            <div className="my-5">
                <h4 className="font-semibold text-xl">Good</h4>
                <p className="text-gray-400">GoodDay to go for a Walk</p>
            </div>
            <ul className="flex justify-between">
                {airElements}
            </ul>
        </div>
    )
}