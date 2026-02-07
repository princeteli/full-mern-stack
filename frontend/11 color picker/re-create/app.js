const color = document.getElementById("color");
const colorBox = document.getElementById("color-box");
const colorCode = document.getElementById("color-code");

color.addEventListener("input" ,()=>{
  let selectedColor = color.value;

  colorBox.style.backgroundColor =selectedColor
  colorCode.textContent = selectedColor
})
