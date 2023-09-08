const todayInput = document.getElementById("dow");
const timeInput = document.getElementById("ct");

//Getting the day
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date();
const day = today.getDay();
const nam = weekday[day];

todayInput.textContent = `${nam},`;



let timeInMilliseconds = (time) => {
const da = Date.now();
 timeInput.textContent = "Current Time:  " + da 
};
setInterval(timeInMilliseconds,1);
