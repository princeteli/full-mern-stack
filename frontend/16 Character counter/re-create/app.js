document.addEventListener("DOMContentLoaded", function () {

// select element 
const textarea = document.getElementById("textarea")
const charCount = document.getElementById("charCount")
const clearButton = document.getElementById("clearButton")

textarea.addEventListener("input",()=>{
  let textLength = textarea.textLength
  charCount.innerText =  textLength
})

clearButton.addEventListener("click", ()=>{
  textarea.value = ""
  charCount.innerText =  0
})

})