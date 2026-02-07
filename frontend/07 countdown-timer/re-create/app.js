const endDate = `20 March 2025 12:00 AM`;

document.getElementById('end-date').innerText = endDate;

const inputs = document.querySelectorAll("input")

function clock(){
  const end = new Date(endDate)
  const now = new Date()

  let different =( end - now) / 1000;

  inputs[0].value = Math.floor(different / 3600 / 24);
  inputs[1].value = Math.floor((different / 3600) % 24);
  inputs[2].value = Math.floor((different / 60) % 60);
  inputs[3].value = Math.floor(different % 60);
}

setInterval(
  ()=>{
    clock()
  }
,1000)