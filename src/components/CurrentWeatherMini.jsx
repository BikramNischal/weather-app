import { BsWind, BsDroplet, BsCloudSun, BsSun } from "react-icons/bs";


export function WindAndHum(props) {
    return (
        <div className="flex flex-col gap-[10px] p-[20px] rounded-xl text-md font-bold text-white bg-orange-400">
            <div className="flex justify-between">
                <p>
                    <BsWind className="inline-block" />
                    <span className="inline-block mx-[10px]">Wind Speed </span>
                </p>
                <span className="inline-block">{props.currentWindSpeed} km/h</span>
            </div>
            <div className="flex justify-between">
                <p>
                    <BsDroplet className="inline-block" />
                    <span className="inline-block mx-[10px]">Humidity</span>
                </p>
                <span className="inline-block">{props.currentHumidity} %</span>
            </div>
        </div>
    );
}

export function UvIndex(props) {
    return (
        <div className="flex flex-col gap-[10px] p-[20px] rounded-xl font-bold text-md text-white bg-red-400">
            <div className="flex justify-between">
                <p>
                    <BsCloudSun className="inline-block" />
                    <span className="inline-block mx-[10px]">UV Index </span>
                </p>
                <span className="inline-block">{props.uvIndex}</span>
            </div>
            <div className="flex justify-between">
                <p>
                    <BsSun className="inline-block" />
                    <span className="inline-block mx-[10px]">UV Index Clear</span>
                </p>
                <span className="inline-block">{props.uvIndexClear}</span>
            </div>
        </div>
    )
}
