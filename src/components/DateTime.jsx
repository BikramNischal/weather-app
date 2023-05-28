
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


var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var formattedDay = daysOfWeek[day];
var formattedMonth = monthsOfYear[month];

export default function DateTime(){
    let currentTime = hours.toString().padStart(2,'0') + ":" + 
                    mins.toString().padStart(2,'0') + amorpm; 
    let currentDate = formattedDay + ", " + todayDate + " " + formattedMonth + ", " + year;
    return (
        <>
        <p>{currentTime}</p>
        <p>{currentDate}</p>
        </>
    );
}