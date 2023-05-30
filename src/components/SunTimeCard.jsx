import { BsSunrise, BsSunset } from "react-icons/bs";


export default function SunTimeCard() {
    return (
        <div className="my-5">
            <h4 className="my-3">Day</h4>
            <div className="flex gap-10">
                <div className="flex gap-5">
                    <BsSunrise className="text-4xl" />
                    <p>
                        Sunrise  <span className="block">4:40AM</span>
                    </p>
                </div>

                <div className="flex gap-5">
                    <BsSunset className="text-4xl" />
                    <p>
                        Sunset  <span className="block">4:40PM</span>
                    </p>
                </div>
            </div>
        </div>
    );
}