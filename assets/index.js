// elements 
let head = document.querySelector('.head');
let question = document.querySelector('#question');
let highScoreEl = document.querySelector('.highscore');
let startButton = document.querySelector(".start-button");



const questions = [
  {
    question: "Commonly used data types DO NOT include:",
    correctAnswer: 'alerts',
    answers: [
      'strings',
      'booleans',
      'alerts',
      'numbers',
    ]

  },
  {
    question: 'The condition in an if else statement is enclosed within:___',
    correctAnswer: 'parentheses',
    answers: [
      'parentheses',
      'curly brackets',
      'numbers and strings',
      'square brackets',
    ]

  },
  {
    question: 'Arrays in JavaScript can be used to store:____?',
    correctAnswer: 'all of the above',
    answers: [
      'strings',
      'booleans',
      'alerts',
      'all of the above',
    ]

  },
  {
    question: 'String values must be enclosed within _____ when being assigned to variables<',
    correctAnswer: 'quotes',
    answers: [
      'curly brackets',
      'quotes',
      'commas',
      'periods',
    ]

  },
  {
    question: 'A very useful during development and debugging for printing content to the debugger is:',
    correctAnswer: 'console.log',
    answers: [
      'console.log',
      'terminal',
      'for loops',
      'JavaScript',
    ]

  }
];
let nextQuestionindex = 0;
let QI = 0
let sec = 5;
// functions
const answerButton = document.getElementById("answer-button");
const timerEl = document.getElementById("timer");
// Called when Start quiz button is pushed
function startQuiz() {
  nextQuestionindex = 0;

  displayQuestions();
  startTimer();


};
function startTimer() {
  const timer = setInterval(function () {
    sec--;
    timerEl.innerHTML = "Time:" + sec;
    if (sec <= 0) {
      clearInterval(timer);
      timerEl.innerHTML = "Time's up!"
    }
  }, 1000);
}
function displayQuestions() {
  resetState();
  for (i = 0; i < questions.length;i++){
    let quest = questions[QI].question;
    var userAnswers = questions[QI].answers;
    question.innerHTML = quest;
  }

userAnswers.forEach(newBtn => {
    const button = document.createElement("button");
    button.innerHTML = newBtn;
    button.classList.add("btn");
    button.addEventListener('click', highscore())
    
    answerButton.appendChild(button)
      })


    
    
  }




function highscore() {
  QI++;
   
  // todo
};



function resetState() {

  startButton.style.display = 'none';
  head.style.display = 'none';
};
// Event listerners
startButton.addEventListener("click", startQuiz);

