let month = document.querySelector('#month');
let day1 = document.querySelector('#day1');
let day2 = document.querySelector('#day2');
let year = document.querySelector('#year');
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];


let currentDate = new Date();
console.log(currentDate);
month.innerHTML = months[currentDate.getMonth()];
day1.innerHTML = days[currentDate.getDay()];
day2.innerHTML = currentDate.getDate();
year.innerHTML = currentDate.getFullYear();