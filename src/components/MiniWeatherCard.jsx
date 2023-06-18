import { BsSun, BsCloudSun, BsCloud, BsCloudRain, BsCloudLightningRain, BsLightning, BsCloudHaze2, BsQuestion } from "react-icons/bs";


export function ReturnWeatherIcon({ condition, style }) {
    switch (condition) {
        case 1:
            return <BsSun className={style} />;

        case 2:
            return <BsCloudSun className={style} />

        case 3:
            return <BsCloud className={style} />

        case 4:
            return <BsCloudRain className={style} />

        case 5:
            return <BsCloudLightningRain className={style} />

        case 6:
            return <BsLightning className={style} />

        case 7:
            return <BsCloudHaze2 className={style} />

        default:
            return <BsQuestion className={style} />

    }

}

export default function MiniWeatherCard(props) {
    return (
        <div className="w-[90px] h-[120px] p-2 bg-white 
            border-solid border-2 rounded-xl 
            flex flex-col justify-between items-center"
            >
            <ReturnWeatherIcon condition={props.condition} style={props.size + " " + "text-blue-500"} />
            <p>
                sun<span className="block text-xs">temp</span>
            </p>
        </div>

    )
}