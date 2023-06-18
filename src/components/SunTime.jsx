import SunTimeCard from "./SunTimeCard"

export default function SunTime() {
    return (
        <section className="bg-white p-[20px] rounded-xl">
            <h3 className="text-xl font-bold my-[5px]">Sunrise & Sunset</h3>
            <div className="flex flex-col gap-[10px]">
                <SunTimeCard />
                <SunTimeCard />
                <SunTimeCard />
            </div>
        </section>
    )
}