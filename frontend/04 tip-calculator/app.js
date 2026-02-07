let bill= document.getElementById('bill');
let tip= document.getElementById('tip');
let button= document.getElementById('btn');
let totalBill= document.getElementById('total');


button.addEventListener('click',(e)=>{
  if(bill.value==="" || tip.value===""){
    alert("please enter value");
  }else if(bill.value<0 || tip.value<0){
    alert("please enter +ve value")
  }else{
    const billAmount = parseFloat(bill.value);
    const tipAmount = parseFloat(tip.value);

    const calTip = billAmount * (tipAmount/100);
    const total = billAmount + calTip;

    totalBill.innerHTML = total;
  }

})