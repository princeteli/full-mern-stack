const minNum = 1;
const maxNum = 100;
const ansNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt("Enter The Number :-");
  guess = Number(guess);

  if (isNaN(guess)) {
    alert("bhai valid number enter kar");
  } else if (guess < minNum || guess > maxNum) {
    alert("bhai valid number enter kar");
  } else {
    attempts++;
    if (guess < ansNum) {
      alert("bhai thoda higher number enter kar");
    } else if (guess > ansNum) {
      alert("bhai thoda lowwer number enter kar");
    } else {
      alert(`bhai you are guess correct number in ${attempts} attempts and guess is ${guess}`);
      running = false;
    }
  }
}
