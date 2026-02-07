function clock() {
  let monthNames = [
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
    "December",
  ];

  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let today = new Date();
  let data = document.getElementById("Date");
  
  data.innerHTML =
  dayNames[today.getDay()] +
  " " +
  today.getDate() +
  " " +
  monthNames[today.getMonth()] +
  " " +
  today.getFullYear();
  
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("min");
  let seconds = document.getElementById("sec");
  
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = h < 12 ? "AM" : "PM";

  var h = h % 12 || 12;

  var h = h < 10 ? "0" + h : h;
  var m = m < 10 ? "0" + m : m;
  var s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}



var inter = setInterval(clock, 1000);
