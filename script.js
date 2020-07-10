// id=current day to pull in the right date
var currentDate = document.getElementById("current-day");

// user functions - update from moment what style we want
var date = moment().format("MMM Do YYYY");
console.log(moment().format("MMM Do YYYY"));
currentDate.textContent = date;
