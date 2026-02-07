function clock() {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var today = new Date();

  // Fix: Use getDay() instead of getDate() for the correct day name
  document.getElementById('Date').innerHTML = dayNames[today.getDay()] + ' ' +
      today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = h < 12 ? "AM" : "PM";

  // Convert 24-hour format to 12-hour format
  h = h % 12 || 12;

  // Fix: Proper zero-padding for hours, minutes, and seconds
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  document.getElementById('hours').innerHTML = h;
  document.getElementById('min').innerHTML = m;
  document.getElementById('sec').innerHTML = s;
  document.getElementById('ampm').innerHTML = day;
}

// Fix: Use 1000ms instead of 400ms for smoother updates
var inter = setInterval(clock, 1000);
