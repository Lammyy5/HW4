// elements 
var message = document.querySelector('.message')
var questionsEl = document.querySelector('.questions')
var highScoreEl = document.querySelector('.highscore')
var timerEl = document.querySelector('.timer')
var startButton = document.querySelector('.start-button')
let answersEl = ['alerts','parentheses','all of the above','quotes','console.log']
let wrongAnswers = ['strings','booleans','numbers','square brackets','numbers and strings'
,'other arrays','commas','curly brackets','periods','JavaScript','terminal','for loops'];


var timer =0;

// functions


// Called when Start quiz button is pushed
function startQuiz() {
    console.log('starting quiz');

    startTimer()
    Questions()

}
function startTimer() {

highscore()
}
function Questions() {
   const firstQuestionEl = document.querySelector('.questions')
   firstQuestionEl.innerHTML = `<h2>Commonly used data types DO NOT<br></br>
   include:</h2>
   <ul>
   <li> <button>${wrongAnswers[0]}</button></li>
   <li><button>${wrongAnswers[1]}</button></li>
   <li><button>${answersEl[0]}</button></li>
   <li><button>${wrongAnswers[2]}</button></li>
   </ul>`

questionsEl.appendChild(firstQuestionEl);
secondQuestion()
}

 
function secondQuestionEl(secondQuestion) {document.querySelector('.questions')
   secondQuestion.innerHTML = `<h1>Commonly used data types DO NOT<br></br>
   include:</h1>
   <ul>
   <li> <button>${wrongAnswers[0]}</button></li>
   <li><button>${wrongAnswers[1]}</button></li>
   <li><button>${answersEl[0]}</button></li>
   <li><button>${wrongAnswers[2]}</button></li>
   </ul>`

questionsEl.appendChild(secondQuestionEl);
}
function thirdQuestionEl(thirdQuestion) { document.querySelector('.questions')
   thirdQuestion.innerHTML = `<h1>Commonly used data types DO NOT<br></br>
   include:</h1>
   <ul>
   <li> <button>${wrongAnswers[0]}</button></li>
   <li><button>${wrongAnswers[1]}</button></li>
   <li><button>${answersEl[0]}</button></li>
   <li><button>${wrongAnswers[2]}</button></li>
   </ul>`

questionsEl.appendChild(thirdQuestionEl);
}
function fourthQuestionEl(fourthQuestion) {document.querySelector('.questions')
   fourthQuestion.innerHTML = `<h1>Commonly used data types DO NOT<br></br>
   include:</h1>
   <ul>
   <li> <button>${wrongAnswers[0]}</button></li>
   <li><button>${wrongAnswers[1]}</button></li>
   <li><button>${answersEl[0]}</button></li>
   <li><button>${wrongAnswers[2]}</button></li>
   </ul>`

questionsEl.appendChild(fourthQuestionEl);
}
function fifthQuestionEl(fifthQuestion) {document.querySelector('.questions')
   fifthQuestion.innerHTML = `<h1>Commonly used data types DO NOT<br></br>
   include:</h1>
   <ul>
   <li> <button>${wrongAnswers[0]}</button></li>
   <li><button>${wrongAnswers[1]}</button></li>
   <li><button>${answersEl[0]}</button></li>
   <li><button>${wrongAnswers[2]}</button></li>
   </ul>`

questionsEl.appendChild(fifthQuestionEl);
}
function answers() { 
// subtract from time if answer is wrong 
}

function highscore() {
    // take data from time after quiz and save intials and score
}




// Event listerners
startButton.addEventListener("click", startQuiz);
answersEl.addEventListener('click', answers)
wrongAnswers.addEventListener('click',)
