let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let amPm = document.getElementById("amPm"); // Add an element for AM/PM

setInterval(() => {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let period = hours >= 12 ? "PM" : "AM"; // Determine AM/PM

    // Convert hours to 12-hour format
    hours = hours % 12 || 12; // If hours is 0, make it 12

    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
    amPm.innerHTML = period; // Set AM/PM
}, 1000);
