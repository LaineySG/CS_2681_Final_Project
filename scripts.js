
function testFunction () { // subroutine - no value returned.
    if (document.getElementById("contactusform").checkValidity()) {
        alert ("Form Submitted! We will get back to you shortly.");
    }
}


function eventCountdown () { 
    const currentdate = new Date();
    const eventdate = new Date("March 1, 2023 06:00:00");
    const msperday = 1000 * 60 * 60 * 24;
    const msperhour = 1000 * 60 * 60;
    const mspermin = 1000 * 60;
    const mspersec = 1000;
    let result = ""; 
    const monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    const weekdaynames = ["Sunday", "Monday", "Tuesday", 'Wednesday', "Thursday", "Friday", "saturday"];
    datediff = new Date(Math.abs(eventdate - currentdate));
    //result = Math.ceil(result / msperday);
    // result is currently in MS
    //round or whatever
    if (eventdate != currentdate && eventdate > currentdate) {
        days = parseInt(datediff / msperday);
        datediff = datediff % msperday;
        hours = parseInt(datediff / msperhour);
        datediff = datediff % msperhour;
        mins = parseInt(datediff / mspermin);
        datediff = datediff % mspermin; // gives # of mins different
        seconds = parseInt(datediff / mspersec);
        result = days + " days, " + hours + " hours, " + mins + " mins, and " + seconds + " seconds until the event!";
        return result;
    } else {
        result = (datediff < msperday) ? "This event is currently happening!" : "This event has passed!"; // conditional operator
        return result;
    }
 }
document.getElementById("eventtimertext").innerHTML = eventCountdown(); 

function menuControl() {
    links = document.getElementById("mobilemenubarlinks")
    if (links.style.display == "none") {
        links.style.display = "block";
    } else {
        links.style.display = "none";
    }
}