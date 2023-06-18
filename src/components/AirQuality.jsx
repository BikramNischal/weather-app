const elements = [
    { element: "PM2", reading: 23 },
    { element: "PM10", reading: 54 },
    { element: "SO2", reading: 23 },
    { element: "NO2", reading: 54 },
    { element: "O2", reading: 67 },
    { element: "CO", reading: 10 }];



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
        <div className="bg-white p-[20px] rounded-2xl">
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