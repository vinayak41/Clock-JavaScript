let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.minute-hand');
let hourHand = document.querySelector('.hour-hand');

function updateClock() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    hours = hours % 12;

    let secondDegrees = seconds * 6;
    let minuteDegrees = minutes * 6;
    let hourDegrees = hours * 30;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(updateClock, 1000);