function revealTime(){
    var date = new Date(); 
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var meridum = "AM";

    if(hrs == 0){
        hrs = 12;
    }

    if(hrs > 12){
        hrs -= 12;
        meridum = "PM";
    }

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    var time = hrs + ":" + min + ":" + sec + " " + meridum;
    document.getElementById("DigitalClock").textContent = time;

    setTimeout(revealTime, 1000);
}

revealTime();

function hideTime(){
    document.querySelector("#DigitalClock").classList.add("hide");
}

document.getElementById("btn-hide").addEventListener("click", hideTime);

function showTime(){
    document.getElementById("DigitalClock").classList.remove("hide");;
}

document.getElementById("btn-hide").addEventListener("dblclick", showTime);