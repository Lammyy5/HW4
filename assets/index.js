// elements 
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
console.log('Timer starting')
highscore()
}
function Questions() {
   const firstQuestionEl = document.querySelector('.questions')
   firstQuestion.innerHTML = `<h1>Commonly used data types DO NOT<br></br>
   include:</h1>
   <ul>
   <li> <button>${wrongAnswers[0]}</button></li>
   <li><button>${wrongAnswers[1]}</button></li>
   <li><button>${answersEl[0]}</button></li>
   <li><button>${wrongAnswers[2]}</button></li>
   </ul>`

questionsEl.appendChild(firstQuestionEl);

const secondQuestionEl = document.querySelector('.questions')
   secondQuestion.innerHTML = `<h1>Commonly used data types DO NOT<br></br>
   include:</h1>
   <ul>
   <li> <button>${wrongAnswers[0]}</button></li>
   <li><button>${wrongAnswers[1]}</button></li>
   <li><button>${answersEl[0]}</button></li>
   <li><button>${wrongAnswers[2]}</button></li>
   </ul>`

questionsEl.appendChild(secondQuestionEl);

const thirdQuestionEl = document.querySelector('.questions')
   thirdQuestion.innerHTML = `<h1>Commonly used data types DO NOT<br></br>
   include:</h1>
   <ul>
   <li> <button>${wrongAnswers[0]}</button></li>
   <li><button>${wrongAnswers[1]}</button></li>
   <li><button>${answersEl[0]}</button></li>
   <li><button>${wrongAnswers[2]}</button></li>
   </ul>`

questionsEl.appendChild(thirdQuestionEl);

const fourthQuestionEl = document.querySelector('.questions')
   fourthQuestion.innerHTML = `<h1>Commonly used data types DO NOT<br></br>
   include:</h1>
   <ul>
   <li> <button>${wrongAnswers[0]}</button></li>
   <li><button>${wrongAnswers[1]}</button></li>
   <li><button>${answersEl[0]}</button></li>
   <li><button>${wrongAnswers[2]}</button></li>
   </ul>`

questionsEl.appendChild(fourthQuestionEl);

const fifthQuestionEl = document.querySelector('.questions')
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
function answers(){
answersEl.addEventListener('click', )
}

function highscore() {
    console.log('highscore logged')
}




// Event listerners
startButton.addEventListener("click", startQuiz);
answers.addEventListener('click', )
wrongAnswers.addEventListener('click',)
