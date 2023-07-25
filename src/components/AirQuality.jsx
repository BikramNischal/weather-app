import { useState, useEffect } from "react";
import { AirQualityData } from "./WeatherData";

// const airdata = await AirQualityData(27.65, 85.28);


function airCondition(value, lowerLim, upperLim) {
    if (value < lowerLim) return 0; // no risk healthy air 
    else if (value >= lowerLim && value < upperLim) return 1; // slightly polluted air good to wear a mask
    else return 2; // don't go out with out a mask or stay at home 
}

const getElements = (airdata) => {
    return ([
        {
            element: "PM2",
            reading: airdata.pm2,
            condition: airCondition(airdata.pm2, 12, 55.5)
        },
        {
            element: "PM10",
            reading: airdata.pm10,
            condition: airCondition(airdata.pm10, 55, 255),
        },
        {
            element: "SO2",
            reading: airdata.so2,
            condition: airCondition(airdata.so2, 35, 185),
        },
        {
            element: "NO2",
            reading: airdata.no2,
            condition: airCondition(airdata.no2, 54, 360),
        },
        {
            element: "O3",
            reading: airdata.o3,
            condition: airCondition(airdata.o3, 55, 85),
        },
        {
            element: "CO",
            reading: airdata.co,
            condition: airCondition(airdata.co, 4.5, 12.5)

        }
    ])
};


function AirElement(props) {
    let style;
    if (props.condition === 0) style = "text-emerald-500";
    else if (props.condition === 1) style = "text-yellow-500";
    else style = "text-red-500";

    return (
        <p className={style}>
            <span className="block font-bold text-xl ">{props.elementsReading}</span>{props.elements}
        </p>
    );
}



export default function AirQuality(props) {
    const [airData, setAirData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const obtainedData = await AirQualityData(props.location.lat, props.location.lon);
            setAirData(obtainedData);
        }
        getData();
    }, [props.location])



    if (airData) {
        const elements = getElements(airData);

        let airValue = 0;

        const airElements = elements.map(
            item => {
                airValue += item.condition;
                let style;
                if (item.condition === 0) style = "bg-emerald-50";
                else if (item.condition === 1) style = "bg-yellow-50";
                else style = "bg-red-50";

                return (
                    <li key={"Aq-" + (elements.indexOf(item))}
                        className={style + " w-[60px] h-[75px] text-center py-2 rounded-xl"} >
                        <AirElement
                            elementsReading={item.reading}
                            elements={item.element}
                            condition={item.condition} />
                    </li >
                );
            }
        );

        const finalAirValue = airValue / elements.length;
        let statement = "", condition = "";
        if (finalAirValue < 0.5) {
            condition = "Good";
            statement = "It's a good day for a walk!";
        }
        else if (finalAirValue < 1.4) {
            condition = "Unhealthy",
                statement = "It's recommended to a wear a mask before going out!";
        }
        else {
            condition = "Harmful"
            statement = "MUST wear a mask before going out!";
        }

        return (
            <div className="bg-white h-1/2 p-[20px] rounded-2xl">
                <div className="flex justify-between">
                    <h4 className="text-xl font-bold">Air Quality Index</h4>
                    <p>Location</p>
                </div>
                <div className="my-5">
                    <h4 className="font-semibold text-xl">{condition}</h4>
                    <p className="text-gray-400">{statement}</p>
                </div>
                <ul className="flex justify-between">
                    {airElements}
                </ul>
            </div>
        )

    }
}