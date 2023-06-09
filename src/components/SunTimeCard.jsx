import { BsSunrise, BsSunset } from "react-icons/bs";


export default function SunTimeCard() {
    return (
        <div className="bg-orange-100 p-[25px] rounded-xl">
            <h4 className="font-bold">Sunday</h4>
            <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                    <BsSunrise className="text-4xl text-orange-500" />
                    <p className="text-gray-500">
                        Sunrise  <span className="block font-bold text-blue-500">4:40AM</span>
                    </p>
                </div>

                <div className="flex gap-5 items-center">
                    <BsSunset className="text-4xl text-orange-500" />
                    <p className="text-gray-500">
                        Sunset  <span className="block font-bold text-blue-500">4:40PM</span>
                    </p>
                </div>
            </div>
        </div>
    );
}