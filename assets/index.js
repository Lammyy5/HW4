// elements 
let head = document.querySelector('.head')
let message = document.querySelector('.message')
const question = document.querySelector('.question')
let highScoreEl = document.querySelector('.highscore')
let timerEl = document.querySelector('.timer')
let startButton = document.querySelector('.start-button')
let answersEl = ['alerts', 'parentheses', 'all of the above', 'quotes', 'console.log']
let wrongAnswers = ['strings', 'booleans', 'numbers', 'square brackets', 'numbers and strings'
  , 'other arrays', 'commas', 'curly brackets', 'periods', 'JavaScript', 'terminal', 'for loops'];
let answerButtons = document.getElementsByName('.answer-buttons')

let nextQuestionindex = 0;

const questions = [
  {
    question: 'Commonly used data types DO NOT include:',
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
];
// functions


// Called when Start quiz button is pushed
function startQuiz() {
  console.log('starting quiz');
  nextQuestionindex = 0;

  startTimer();
  
  
}
function startTimer() {
  let sec = 75;
  timer = setInterval(() => {
    timerEl.innerHTML = 'Time:' + sec;
    sec--;
  }, 1000);
  timer.appendChild(timerEl)
}
function displayQuestions() {
  resetState();
  let nextQuestions = questions[nextQuestionindex]
  let questionNumb = nextQuestionindex + 1;
  question.innerHTML = questionNumb + ". " + nextQuestions.question;

  nextQuestions.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.Text;
    button.classList.add('btn')
    
    answerButtons.appendChild(button);
  })
}


function answerFunc() {
  // subtract from time if answer is wrong

}

function highscore() {
  // take data from time after quiz and save intials and score
  timerEl.textContent = timer;
}



function resetState(){
  startButton.style.display = 'none';
  head.style.display = 'none';
}
// Event listerners
startButton.addEventListener("click", startQuiz);
startButton.addEventListener('click', displayQuestions)
