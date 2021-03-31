updateCountdown();
//window.setInterval(updateCountdown, 1000);

function updateCountdown() {
    let daysElement = document.getElementById("days");
    let hoursElement = document.getElementById("hours");
    let minutesElement = document.getElementById("minutes");
    let secondsElement = document.getElementById("seconds");

    let date = new Date();
    let days = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    daysElement.getElementsByClassName("current")[0].innerText = days;
    hoursElement.getElementsByClassName("current")[0].innerText = hours;
    minutesElement.getElementsByClassName("current")[0].innerText = minutes;
    secondsElement.getElementsByClassName("current")[0].innerText = seconds;
    secondsElement.getElementsByClassName("current")[1].innerText = seconds;

    daysElement.getElementsByClassName("new")[0].innerText = days;
    hoursElement.getElementsByClassName("new")[0].innerText = hours;
    minutesElement.getElementsByClassName("new")[0].innerText = minutes;
    secondsElement.getElementsByClassName("new")[0].innerText = seconds + 1;
    secondsElement.getElementsByClassName("new")[1].innerText = seconds + 1;
}