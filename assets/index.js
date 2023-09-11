// elements 
const answerButton = document.getElementById("answer-button");
const timerEl = document.getElementById("timer");
let head = document.querySelector('.head');
let question = document.querySelector('#question');
let highScoreEl = document.querySelector('.highscore');
let startButton = document.querySelector(".start-button");
let resetBtn = document.querySelector(".resetBtn");
let nextQuestionindex = 1;
let QI = 0;
let score = 0;
let sec = 65;

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
    question: 'String values must be enclosed within _____ when being assigned to variables',
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

// functions

// Called when Start quiz button is pushed
function startQuiz() {
  sec = 65;
  QI = 0;
  score = 0;



  
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
      input();
    }
  }, 1000);
}


function displayQuestions() {
  resetState();
  let nextQuestion = questions[QI];
  let questionNumb = QI + 1;
  question.innerHTML = questionNumb + ". " + nextQuestion.question;

  nextQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.Text;
    button.classList.add("btn");
    button.setAttribute("style", "display:block;");

    answerButton.appendChild(button);
    button.addEventListener("click", () => {
      QI++;
      if (QI < questions.length) {
        displayQuestions();
        highscore();
        console.log(QI)
      }
      else if (QI === 5) {
        input()
      }
    })})}


function viewHighScore () {
}

function resetButton() {
  startQuiz();
}


function input() {
  endQuiz();
  console.log("quiz ended");
  head.innerHTML = "Good job! you finished";
  startButton.style.display = null;
  startButton.innerHTML = `<button>Reset</button>`


  question.innerHTML = `Your score is ${score} <br>
  <form><input type="text" value="intials"</input></form> <button>Submit</button>`;

  resetBtn.addEventListener("click", resetButton);
  // todo: clear head and questions and add input form for name and itials save to local storage
}

function highscore() {
  if (score <= 5) {
    score++;
    console.log("score")
    localStorage.setItem("score", score);
    const scoreData = localStorage.getItem("score", score);

  }
  // todo count score and render to page at end of quiz save with input
};

function endQuiz() {
  question.innerHTML = "";
  head.innerHTML = "";
  answerButton.innerHTML = "";
  sec = 2;
}
function resetState() {

  startButton.style.display = 'none';
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
};
// Event listerners
startButton.addEventListener("click", startQuiz);