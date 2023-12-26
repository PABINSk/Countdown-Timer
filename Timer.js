const daysTimer = document.getElementById("days");
const hoursTimer = document.getElementById("hours");
const minutesTimer = document.getElementById("minutes");
const secondsTimer = document.getElementById("seconds");

const newTimer = "1jan2024";

countDown = () => {
    let newTimerDate = new Date(newTimer);
    let currentDate = new Date();

    let totalSecond = (newTimerDate - currentDate) / 1000;

    let days = Math.floor(totalSecond / 3600/ 24);
    let hours = Math.floor(totalSecond / 3600) % 24;
    let minutes = Math.floor(totalSecond / 60) % 60;
    let seconds = Math.floor(totalSecond) % 60;

    daysTimer.innerHTML = days;
    hoursTimer.innerHTML = hours;
    minutesTimer.innerHTML = minutes;
    secondsTimer.innerHTML= seconds;

}

countDown();
setInterval(countDown , 1000);
