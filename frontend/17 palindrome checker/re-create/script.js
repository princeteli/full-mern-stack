let input = document.getElementById('input')
let result = document.getElementById('result')

function run(){
  let word = input.value 

  let letters = word.split("")

  let reverse = letters.reverse()
  let reverseword = reverse.join("")

  if(word.toLowerCase() === reverseword.toLowerCase() ){
    result.innerText = "palindrome";
  } else {
    result.innerText = "not a palindrome";
  }
}