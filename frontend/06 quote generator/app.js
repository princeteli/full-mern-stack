const quotes=[{
  quote:`"hi1"`,
  writer:`1`
},
{
  quote:`"hi2"`,
  writer:`21`
},
{
  quote:`"hi3"`,
  writer:`31`
}
];

let btn = document.querySelector('#Qbtn');
let quote= document.querySelector(".quote");
let writer= document.querySelector(".write");

btn.addEventListener("click",()=>{
  let random =Math.floor(Math.random() * quotes.length);

  quote.innerHTML= quotes[random].quote;

  writer.innerHTML = quotes[random].writer;
})