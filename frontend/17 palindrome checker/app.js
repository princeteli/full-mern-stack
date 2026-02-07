let input = document.getElementById("input");
let result = document.getElementById("result");

function run() {
  let word = input.value;
  
  let letters = word.split("");

  let reverseLetter = letters.reverse();

  let reverseWord = reverseLetter.join("");

  if (word.toLowerCase() == reverseWord.toLowerCase()) {
    result.innerText = "palindrome";
  } else {
    result.innerText = "not a palindrome";
  }
}
