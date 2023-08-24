// elements 
let message = document.querySelector('.message')
let questionsEl = document.querySelector('.questions')
let highScoreEl = document.querySelector('.highscore')
let timerEl = document.querySelector('.timer')
let startButton = document.querySelector('.start-button')
let answersEl = ['alerts','parentheses','all of the above','quotes','console.log']
let wrongAnswers = ['strings','booleans','numbers','square brackets','numbers and strings'
,'other arrays','commas','curly brackets','periods','JavaScript','terminal','for loops'];


let timer = 0;
let timerCount;

// functions


// Called when Start quiz button is pushed
function startQuiz() {
    console.log('starting quiz');
    timer = 75;

   
    questions()
}
function startTimer() {

   timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
highscore()

}
}
function answers(){
   
message.innerHTML = "correct"
}
function questions(){
firstQuestion()
}


function firstQuestion() {
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

}

 
function secondQuestionEl() {
   const secondQuestion= document.querySelector('.questions')
   secondQuestion.innerHTML = `<h1>The condition in an if else statement is enclosed within:___</h1>
   <ul>
   <li> <button>${wrongAnswers[0]}</button></li>
   <li><button>${wrongAnswers[1]}</button></li>
   <li><button>${answersEl[0]}</button></li>
   <li><button>${wrongAnswers[2]}</button></li>
   </ul>`

questionsEl.appendChild(secondQuestionEl);
}
function thirdQuestionEl() { 
   const thirdQuestion = document.querySelector('.questions')
   thirdQuestion.innerHTML = `<h1>Arrays in JavaScript can be used to store:____</h1>
   <ul>
   <li> <button>${wrongAnswers[0]}</button></li>
   <li><button>${wrongAnswers[1]}</button></li>
   <li><button>${answersEl[0]}</button></li>
   <li><button>${wrongAnswers[2]}</button></li>
   </ul>`

questionsEl.appendChild(thirdQuestionEl);
}
function fourthQuestionEl() {
   const fourthQuestion = document.querySelector('.questions')
   fourthQuestion.innerHTML = `<h1>String values must be enclosed within _____ <br>
   when being assigned to variables</h1>
   <ul>
   <li> <button>${wrongAnswers[0]}</button></li>
   <li><button>${wrongAnswers[1]}</button></li>
   <li><button>${answersEl[0]}</button></li>
   <li><button>${wrongAnswers[2]}</button></li>
   </ul>`

questionsEl.appendChild(fourthQuestionEl);
}
function fifthQuestionEl() {
   const fifthQuestion = document.querySelector('.questions')
   fifthQuestion.innerHTML = `<h1>A very useful duringf development and<br> debugging for 
   printing content to the debugger is </h1>
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
    timerEl.textContent = timer;
}




// Event listerners
startButton.addEventListener("click", startQuiz);
answersEl.addEventListener('click', answers)
wrongAnswers.addEventListener('click', highscore)
