let bill = document.getElementById('bill');
let tip = document.getElementById('tip');
let btn = document.getElementById('btn');
let ttl = document.getElementById('total');

btn.addEventListener('click',()=>{
  if(bill.value=='' || tip.value==''){
    alert("enter the value")
  }
  else if(bill.value<0 || tip.value<0){
    alert("enter the +ve value")
  }
  else{
    let billAmount = parseFloat(bill.value);
    let tipAmount = parseFloat(tip.value);

    let calTip = billAmount * (tipAmount/100);
    const total = billAmount + calTip ;

    ttl.innerHTML =total;
  }
})