// id=current day to pull in the right date
var currentDate = document.getElementById("current-day");

// user functions - update from moment what style we want
var date = moment().format("MMM Do YYYY");
console.log(moment().format("MMM Do YYYY"));
currentDate.textContent = date;

var saveButton = document.querySelector(".saveBtn");
var scheduleInput = document.querySelector(".description");
var timeBlock = document.querySelector(".time-block");
var hour = document.querySelector(".hour");

saveButton.addEventListener("click", function () {
  console.log(saveButton);

  var scheduleText = scheduleInput.value.trim();
  console.log(scheduleInput);
  var ptag = document.createElement("p");
  ptag.textContent = scheduleText;
  scheduleInput.appendChild(ptag);

  localStorage.setItem("scheduleText", JSON.stringify(scheduleText));
});

function hourTracker() {
  //get current number of hours.
  var currentHour = moment().hour();
  // convert hour into an integer
  var currentHourInt = parseInt(currentHour);
  console.log(currentHourInt);

  // loop over time blocks
  $(".time-block").each(function () {
    //   convert html values to integers
    var timeBlockInt = parseInt(timeBlock.hour);
    console.log(timeBlockInt, currentHourInt);

    //check if we've moved past this time
    if (timeBlockInt < currentHourInt) {
      timeBlock.classList.add("past");
      timeBlock.classList.remove("future");
      timeBlock.classList.remove("present");
    } else if (timeBlockInt === currentHour) {
      timeBlock.classList.remove("past");
      timeBlock.classList.add("present");
      timeBlock.classList.remove("future");
    } else {
      timeBlock.classList.remove("present");
      timeBlock.classList.remove("past");
      timeBlock.classList.add("future");
    }
  });
}
hourTracker();
