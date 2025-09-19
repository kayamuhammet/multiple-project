const digitalClockView =document.getElementById("time");

function digitalClock() {
    var date = new Date();

    var h = pad(date.getHours());
    var m = pad(date.getMinutes());
    var s = pad(date.getSeconds());

    digitalClockView.textContent = `${h}:${m}:${s}`;
    
}

function pad (num) {
    return num < 10 ? "0" + num : num;
}

setInterval(digitalClock, 1000);
digitalClock();