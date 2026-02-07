let input =document.getElementById("input"); // input box ko select keya
let list =document.getElementById("todoList"); // list box ko select keya



function addTask(){

  if(input.value===''){ // input ke value ke condition lagai
    alert("enter to-do") // alert deya
  }
  else{
    let li = document.createElement("li"); // li element create keya
    li.innerHTML=input.value  // li ke innerhtml equal to input value ke
    list.appendChild(li);  // li ko list me dala 
    let span=document.createElement("span"); // span element create keya 
    span.innerHTML="\u00d7" // span ke value cross(x) ke 
    li.appendChild(span); // span ko li me dala

  }
  input.value ="";  // input box ko vapas MT keya 
  save();  // save function ko call keya
}

list.addEventListener("click",(e)=>{ // list par event listener lagaya
  if(e.target.tagName==="LI"){ // li ko tagname se target keya 
    e.target.classList.toggle("chicked"); // li chick  
  }
  else if(e.target.tagName==="SPAN"){ // li ke span ko target kiya
    e.target.parentElement.remove(); // span pe click keya to uske parent(li) ko remove karo
  }
} ,false) // 


function save(){ // save function for save to do lists 
  localStorage.setItem("data",list.innerHTML); // local storage me list ke innerHTML ko save karo
}

function show(){ // show function list data ko vapas show karta he
  list.innerHTML=localStorage.getItem("data"); // data ko list ke innerhtml me dala 
}

show(); // show function ko call keya