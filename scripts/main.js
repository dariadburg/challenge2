// Creating a function to get the real time for the clock on Earth
function realEarthClock() {
    var timeClock = new Date();

    var hours = timeClock.getHours();
    var minutes = timeClock.getMinutes();
    var seconds = timeClock.getSeconds();

    // Add AM and PM to the clock
    if (hours < 12) {
        var amPm = "AM";
    }
    else {
        var amPm = "PM";
    }

    // Convert hours to a 12 hour format in order to use the AM and PM
    if (hours > 12) {
        hours = hours - 12;
    }

    // Have the hours, minutes and seconds start with a O in case it is one numbered
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // Displaying the clock
    document.getElementById('clockEarth').innerHTML = hours + ":" + minutes + ":" + seconds + " " + amPm;
    var t = setTimeout(realEarthClock, 500);
}


// Creating a function to get the real time for the clock on Mars
function realMarsClock() {
    var timeClock = new Date();

    var hours = timeClock.getHours();
    var minutes = timeClock.getMinutes();
    var seconds = timeClock.getSeconds();

    // Have the hours, minutes and seconds start with a O in case it is one numbered
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // Displaying the clock
    document.getElementById('clockMars').innerHTML = hours + ":" + minutes + ":" + seconds;
    var t = setTimeout(realMarsClock, 500);
}
