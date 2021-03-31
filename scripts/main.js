updateCountdown();
window.setInterval(updateCountdown, 1000);

function updateCountdown() {
    let date = new Date();

    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let minutesElement = document.getElementById("minutes");
    let secondsElement = document.getElementById("seconds");

    updateCounter(minutesElement, minutes);
    updateCounter(secondsElement, seconds);
}

function updateCounter(element, newValue) {
    let currentValue = element.getElementsByClassName("current-value")[0].innerText;

    if(currentValue != newValue) {
        element.getElementsByClassName("top current")[0].classList.add("no-transition");
        element.getElementsByClassName("top current")[0].style["background-color"] = "#2a2c41";
        element.getElementsByClassName("top current")[0].style["transform"] = "rotateX(0deg)";
        element.getElementsByClassName("bottom new")[0].classList.add("no-transition");
        element.getElementsByClassName("bottom new")[0].style["background-color"] = "#53567f";
        element.getElementsByClassName("bottom new")[0].style["transform"] = "rotateX(90deg)";

        element.getElementsByClassName("current-value")[0].innerText = newValue - 1;
        element.getElementsByClassName("current-value")[1].innerText = newValue;
        element.getElementsByClassName("new-value")[0].innerText = newValue;
        element.getElementsByClassName("new-value")[1].innerText = newValue;

        element.getElementsByClassName("top current")[0].offsetHeight;
        element.getElementsByClassName("top current")[0].classList.remove("no-transition");
        element.getElementsByClassName("top current")[0].style["background-color"] = "#161722";
        element.getElementsByClassName("top current")[0].style["transform"] = "rotateX(-90deg)";
        element.getElementsByClassName("bottom new")[0].offsetHeight;
        element.getElementsByClassName("bottom new")[0].classList.remove("no-transition");
        element.getElementsByClassName("bottom new")[0].style["background-color"] = "#343650";
        element.getElementsByClassName("bottom new")[0].style["transform"] = "rotateX(0deg)";
    }
}