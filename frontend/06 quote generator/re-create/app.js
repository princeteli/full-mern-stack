const quotes =[{quote :`"q1fefefe"`,
  writer :`w1`},

  {quote:`"q2"`,
    writer:`w2`},

  {quote:`"q3"`,
    writer:`w3`}
]

let quote =document.querySelector("#quote");
let writer =document.querySelector("#writer");
let btn =document.querySelector("#btn");

btn.addEventListener("click",()=>{
  let ramdom =Math.floor(Math.random()* quotes.length);

  quote.innerHTML = quotes[ramdom].quote;
  writer.innerHTML = quotes[ramdom].writer;

})