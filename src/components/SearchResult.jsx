import { useState, useEffect, useContext } from "react";
import GetLocationCoordinates from "./GeoCoding";
// import {MyLocation} from "../App";


function Address(props) {
    return (
        <p className="text-left h-[50px]" >
            <span className="font-bold block">{props.place}</span>
            <span className="block italic text-gray-600 text-sm ">{props.address}</span>
        </p>
    );
}


export default function SearchResult(props) {
    const [displayResult, setDisplayResult] = useState("hidden");
    const [location, setLocation] = useState(props.result);
    const [data, setData] = useState(null);
    
    const handleClick = (data) =>{
        setDisplayResult("hidden");
        setLocation(null);
        props.updateLocation(
            {
                lat: Number(data.lat),
                lon: Number(data.lon),
                locationName:data.name,
            }
        );
    }
    
    useEffect(() => {
        if(location){
            setDisplayResult("block");
            const getData = async () => {
                const obtainedData = await GetLocationCoordinates(location);
                setData(obtainedData);
            }
            getData();
        }
    }, [location]);

    if (data) {
        const style = displayResult + " " + " w-[300px] h-[300px] my-[20px] bg-blue-50 rounded-xl absolute overflow-y-scroll";
        const addressList = data.map(
            address => <li 
                key={"addres_code_" + data.indexOf(address)}
                onClick= {() => {handleClick(address)}}
                className="group p-[10px] border-b-2 border-grey-600 last:border-b-0"     
            >
                <Address place={address.name} address={address.address} />
                <span className="hidden group-hover:block rounded-lg text-blue-500 text-xs ">{address.display_name}</span>
            </li>
        );

        return (
            <ul className={style} >
                {addressList}
            </ul>
        )
    }
}