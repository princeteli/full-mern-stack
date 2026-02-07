const endDate = "31 March 2025 10:00 PM"

document.getElementById("end-date").innerText = endDate;


const inputs = document.querySelectorAll("input")
function clock(){
  const end = new Date(endDate);
  const now = new Date()

  const diff = (end - now)/1000 ;

  // convert days
 inputs[0].value=Math.floor(diff/3600/24);

 //convert in hours
 inputs[1].value=Math.floor((diff/3600)%24);

 //convert in minutes
 inputs[2].value=Math.floor((diff/60)% 60);

 // convert in seconds
 inputs[3].value=Math.floor(diff % 60);

}


setInterval(
  ()=>{
    clock()
  }
,1000)