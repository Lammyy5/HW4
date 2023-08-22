// elements 
var highScoreEl = document.querySelector('.highscore')
var timerEl = document.querySelector('.timer')
var startButton = document.querySelector('.start-button')
let answers = ['alerts','parentheses','all of the above','quotes','console.log']
let wrongAnswers = ['strings','booleans','numbers','square brackets','numbers and strings'
,'other arrays','commas','curly brackets','periods','JavaScript','terminal','for loops'] 

var timer =0;

// functions


// Called when Start quiz button is pushed
function startQuiz() {
    console.log('starting quiz');

    startTimer()
    nextQuestion()

}
function startTimer() {
console.log('Timer starting')
highscore()
}
function nextQuestion() {
   let answers = document.createElement('div')
   
}

function highscore() {
    console.log('highscore logged')
}




// Event listerners
startButton.addEventListener("click", startQuiz);


