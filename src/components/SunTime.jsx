import SunTimeCard from "./SunTimeCard"

export default function SunTime() {
    return (
        <section>
            <h3>Sunrise & Sunset</h3>
            <div>
                <SunTimeCard />
                <SunTimeCard />
                <SunTimeCard />
            </div>
        </section>
    )
}