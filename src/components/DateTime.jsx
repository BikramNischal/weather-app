import {useState, useEffect} from 'react';

function getDateTime() {
    var date = new Date();

    var hours = date.getHours();
    var mins = date.getMinutes();
    var amorpm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : "12";


    var day = date.getDay(); // Sunday - Saturday: 0 - 6
    var todayDate = date.getDate();
    var month = date.getMonth(); // January - December: 0 - 11
    var year = date.getFullYear();
    
    return({
        hrs: hours,
        mins: mins,
        amorpm: amorpm, 
        day : day,
        todayDate: todayDate,
        month: month,
        year: year
    });
}

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function DateTime() {
    const [controlState, setControlState] = useState(getDateTime().mins);
    let dateTime = getDateTime();
    useEffect(()=>{
        setInterval(()=>{
            setControlState(getDateTime().mins);
        }, 1000);
        dateTime = getDateTime();
    },[controlState])

    // convert time into hours:minutes AM|PM format   
    let currentTime = dateTime.hrs.toString().padStart(2, '0') + ":" +
        dateTime.mins.toString().padStart(2, '0') + " " + dateTime.amorpm;

    //convert date into dayofweek, DATE MONTH YEAR format
    let currentDate = daysOfWeek[dateTime.day] + ", " 
        + dateTime.todayDate + " " + monthsOfYear[dateTime.month] + ", " + dateTime.year;
    return (
        <>
            <p className="text-4xl">{currentTime}</p>
            <p>{currentDate}</p>
        </>
    );
}