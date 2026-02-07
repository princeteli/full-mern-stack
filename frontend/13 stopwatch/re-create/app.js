const display = document.getElementById("display")
const stopbtn = document.getElementById("stop")
const startbtn = document.getElementById("start")
const resetbtn = document.getElementById("reset")

let msec = 0;
let secs = 0;
let mins = 0;

let timeId = null;

startbtn.addEventListener("click",()=>{
  if(timeId !== null){
    clearInterval(timeId)
  }
  timeId = setInterval(startTimer ,10)
})

stopbtn.addEventListener("click",()=>{
clearInterval(timeId)
})

resetbtn.addEventListener("click",()=>{
  clearInterval(timeId)
  display.innerHTML = `00 : 00 : 00`
})

function startTimer(){
  msec++
  if(msec == 100){
    secs++
    msec=0
    if(secs==60){
      secs=0;
      mins++
    }
  }

  let msecString = msec < 10 ? `0${msec}` : msec;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;

  display.innerHTML =`${minsString} : ${secsString} : ${msecString}`
}