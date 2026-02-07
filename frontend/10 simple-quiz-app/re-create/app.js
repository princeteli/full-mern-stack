const questions = [
  {
    question: "What does HTML stand for?",
    answer: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Tech Modern Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlink and Text Markup Language", correct: false },
    ],
  },
  {
    question: "Which programming language is used for web development?",
    answer: [
      { text: "Python", correct: false },
      { text: "Java", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to change text color?",
    answer: [
      { text: "font-color", correct: false },
      { text: "color", correct: true },
      { text: "text-color", correct: false },
      { text: "background-color", correct: false },
    ],
  },
  {
    question: "What does the 'React' library mainly help with?",
    answer: [
      { text: "Server-side scripting", correct: false },
      { text: "Building user interfaces", correct: true },
      { text: "Database management", correct: false },
      { text: "File handling", correct: false },
    ],
  },
];

const question = document.getElementById("question");
const ansbtn = document.getElementById("answer-button");
const nextbtn = document.getElementById("next-btn");

let currentQIndex = 0;
let score = 0;

function startQuiz() {
  currentQIndex = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQIndex];
  let questionNo = currentQIndex + 1;
  question.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ansbtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", (e) => {
      const selectedbtn = e.target;
      const isCorrect = selectedbtn.dataset.correct === "true";
      if (isCorrect) {
        selectedbtn.classList.add("correct");
        score++;
      } else {
        selectedbtn.classList.add("incorrect");
      }
      Array.from(ansbtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
          button.classList.add("correct")
        }
        button.disabled = true
      })
      nextbtn.style.display ="block"
    });
  });
}

function resetState() {
  nextbtn.style.display = "none";
  while (ansbtn.firstChild) {
    ansbtn.removeChild(ansbtn.firstChild);
  }
}

nextbtn.addEventListener("click" , ()=>{
  if(currentQIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz()
  }
})

function showScore(){
  resetState()

  question.innerHTML = `You score ${score} out of ${questions.length}!`
  nextbtn.innerHTML = "play agein"
  nextbtn.style.display = "block"
}

function  handleNextButton(){
  currentQIndex++
  if(currentQIndex <questions.length){
    showQuestion()
  }
  else{
    showScore()
  }

}
startQuiz();
