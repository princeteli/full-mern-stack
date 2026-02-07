let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);
  let result = document.getElementById("output");

  let height_status = false;
  let weight_status = false;
  
  if(isNaN(height) || height <= 0){
    document.getElementById("height_e").innerHTML= "please enter height"
  }else{ 
    document.getElementById("height_e").innerHTML= ""
     height_status = true;
  }
  
  if(isNaN(weight) || weight <= 0){
    document.getElementById("weight_e").innerHTML= "please enter height"
  }else{ 
    document.getElementById("weight_e").innerHTML= ""
   weight_status = true;
  }

  if(height_status && weight_status){

    const bmi = (weight/((height * height)/ 10000)).toFixed(2);

    if(bmi < 18.6){
      result.innerHTML = "underweight "+bmi
    }else if(bmi >= 18.6 && bmi < 24.9){
      result.innerHTML = "normal "+bmi
    }else{
   result.innerHTML = "overweight "+bmi
    }
  }else{
    alert("error  in form")
    result.innerHTML=""
  }
});
