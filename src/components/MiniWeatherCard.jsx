import {BsQuestion} from "react-icons/bs";
import sun from "../assets/icons/sun.svg";
import cloudsun from "../assets/icons/partially-cloudy.svg";
import cloud from "../assets/icons/cloud.svg";
import rain from "../assets/icons/rain.svg";
import thunderrain from "../assets/icons/thunder-rain.svg";
import thunder from "../assets/icons/thunder.svg";
import snow from "../assets/icons/snow.svg";
import sunrain from "../assets/icons/partially-rainny.svg";


export function ReturnWeatherIcon({ condition, size}) {
    switch (condition) {
        case 1:
            return <img src={sun} className={size} />;

        case 2:
            return <img src={cloudsun} className={size} />;

        case 3:
            return <img src={cloud} className={size} />;

        case 4:
            return <img src={rain} className={size} />;

        case 5:
            return <img src={thunderrain} className={size} />;

        case 6:
            return <img src={thunder} className={size} />;

        case 7:
            return <img src={sunrain} className={size} />;

        case 8:
            return <img src={snow} className={size} />;
        default:
            return <BsQuestion className={size} />

    }

}

export default function MiniWeatherCard(props) {
    return (
        <div className="w-[100px] min-h-[130px] p-2 bg-white 
            border-solid border-2 rounded-xl 
            flex flex-col justify-between items-center">

            <ReturnWeatherIcon condition={props.condition} size="w-4/5" />
            <p>
                {props.day.slice(0,3)}<span className="block text-sm">{props.temp}&deg;</span>
            </p>
        </div>

    )
}