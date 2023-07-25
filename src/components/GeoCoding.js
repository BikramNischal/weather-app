import axios from "axios";


function filterRespose(data){
    let finalData = [];
    let indexData, indexFinalData;
    for(indexData = 0; indexData < data.length; indexData++){
        let isPresent = false;
        for(indexFinalData = 0; indexFinalData < finalData.length; indexFinalData++){
           if(finalData[indexFinalData].display_name === data[indexData].display_name){
            isPresent = true;
            break;
           }
        }

        const place = data[indexData].display_name.split(",");

        if(!isPresent) finalData.push(
            {
               name: place[0],
               display_name:data[indexData].display_name,
               address: place[0] + ", " + place[place.length-1],
               lat: data[indexData].lat,
               lon: data[indexData].lon, 
            }
        );
    } 
    return finalData;
}

export default function GetLocationCoordinates(palce){
    return axios.get(`https://geocode.maps.co/search?q=${palce}`).then(
        ({data})=>{
            return filterRespose(data);
        } 
    )
}





/*
geocoding api
https://geocode.maps.co/search?q={address}

*/