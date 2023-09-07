// elements 
let head = document.querySelector('.head');
let question = document.querySelector('#question');
let highScoreEl = document.querySelector('.highscore');
let startButton = document.querySelector(".start-button");



const questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      { Text: 'strings', correct: false },
      { Text: 'booleans', correct: false },
      { Text: 'alerts', correct: true },
      { Text: 'numbers', correct: false },
    ]
  },
  {
    question: 'The condition in an if else statement is enclosed within:___',
    answers: [
      { Text: 'parentheses', correct: true },
      { Text: 'curly brackets', correct: false },
      { Text: 'numbers and strings', correct: false },
      { Text: 'square brackets', correct: false },
    ]
  },
  {
    question: 'Arrays in JavaScript can be used to store:____?',
    answers: [
      { Text: 'strings', correct: false },
      { Text: 'booleans', correct: false },
      { Text: 'alerts', correct: false },
      { Text: 'all of the above', correct: true },
    ]
  },
  {
    question: 'String values must be enclosed within _____ when being assigned to variables<',
    answers: [
      { Text: 'curly brackets', correct: false },
      { Text: 'quotes', correct: true },
      { Text: 'commas', correct: false },
      { Text: 'periods', correct: false },
    ]
  },
  {
    question: 'A very useful during development and debugging for printing content to the debugger is:',
    answers: [
      { Text: 'console.log', correct: true },
      { Text: 'terminal', correct: false },
      { Text: 'for loops', correct: false },
      { Text: 'JavaScript', correct: false },
    ]
  }
]
let nextQuestionindex = 0;
let QI = 0;
let score = 0;
let sec = 5;
// functions
const answerButton = document.getElementById("answer-button");
const timerEl = document.getElementById("timer");
const nextButton = document.getElementById("next-btn");
// Called when Start quiz button is pushed
function startQuiz() {
  nextQuestionindex = 0;
  score = 0;
  // nextButton.innerHTML = "Next"

  
  startTimer();
  displayQuestions();


};
function startTimer() {
  const timer = setInterval(function () {
    sec--;
    timerEl.innerHTML = "Time:" + sec;
    if (sec === 0) {
      clearInterval(timer);
      timerEl.innerHTML = "Time's up!"
    }
  }, 1000);
}
function displayQuestions() {
  resetState();
  // head.innerHTML= "";
  // question.innerHTML= "";
  // answerButton.innerHTML ="";
  // for (i = 0; i < questions.length;i++){
  //   const quest = questions[QI].question;
  //   var userAnswers = questions[QI].answers;
  //   question.innerHTML = quest;
  let nextQuestion = questions[QI];
  let questionNumb = QI + 1;
  question.innerHTML = questionNumb + ". " + nextQuestion.question;

  nextQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.Text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct= answer.correct;
    }
    button.addEventListener('click',highscore);
  })
  }

// userAnswers.forEach(newBtn => {
//     const button = document.createElement("button");
//     button.textContent = newBtn;
//     button.classList.add("btn");
  




function highscore(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct = "true"){
      score++;
      console.log('true')
    }
    button.disabled = true;
  });
  // nextButton.style.display = "block"
   displayQuestions();
  // todo
};
function buttonFunc(){
  QI++;
  if(QI < questions.length){
    displayQuestions();
  }
}
// try with displayQuestions function
nextButton.addEventListener("click", ()=>{
  if(QI < questions.length){
     buttonFunc();
  }
})


function endQuiz() {
  question.innerHTML = "";
  head.innerHTML= "";
  answerButton.innerHTML = "";


}
function resetState() {

  startButton.style.display = 'none';
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
  
};
// Event listerners
startButton.addEventListener("click", startQuiz);

