import { BsSun, BsCloudSun, BsCloud, BsCloudRain, BsCloudLightningRain, BsLightning, BsCloudHaze2, BsQuestion } from "react-icons/bs";


function ReturnWeatherCondition({ condition, size }) {
    switch (condition) {
        case 1:
            return <BsSun className={size} />;

        case 2:
            return <BsCloudSun className={size} />

        case 3:
            return <BsCloud className={size} />

        case 4:
            return <BsCloudRain className={size} />

        case 5:
            return <BsCloudLightningRain className={size} />

        case 6:
            return <BsLightning className={size} />

        case 7:
            return <BsCloudHaze2 className={size} />

        default:
            return <BsQuestion className={size} />

    }

}



export default function MiniWeatherCard({ condition, size }) {
    return (
        <div>
            <ReturnWeatherCondition condition={condition} size={size} />
            <p>sun</p>
            <p>temp</p>
        </div>

    )
}