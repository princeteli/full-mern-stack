const minNum = 1;
const maxNum = 100;
const ansNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);


let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt("enter num");
  guess = Number(guess);
  if (isNaN(guess)) {
    alert("enter valid number");
  } else if (guess < minNum || guess > maxNum) {
    alert("enter valid number");
  } else {
    attempts++;
    if (guess < ansNum) {
      alert("you enter low number");
    } else if (guess > ansNum) {
      alert("you enter high number");
    } else {
      alert( `correct ans in ${attempts}`);
      running = false;
    }
  }
}
