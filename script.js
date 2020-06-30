var body = document.body;

// variables for style
var myTitle = document.getElementById("title").style.textAlign = "center";
var myIntro = document.getElementById("intro").style.textAlign = "center";
var startQuiz = document.getElementById("startquiz-container").style.textAlign = "center";
var myQuestion = document.getElementById("question").style.textAlign = "center";
var questAnsStyle = document.getElementById("question-answer-container").style = ("text-align: center");
var timerStyle = document.getElementById("timer").style = ("display: flex; justify-content: flex-end; padding: 40px;");


// variables for functions
var startQuizBtn = document.querySelector("#startquiz");
var quesTion = document.querySelector("#question");
var timerCountDown = document.querySelector("#countdown");
var count = 75;
 
var choiceQuest1 
// Answer arrays
// var answerArray1 = ["Curly braces", ".", "sets function equal to zero", "JavaScript"];
// var answerArray2 = ["Brackets", "quotations", "sets variable before the for loop starts", "Windows"];
// var answerArray3 = ["Parenthesis", "#", "grabs first element of an array in a for loop", "Chrome"];
// var answerArray4 = ["Quotations", "$", "makes array equal to zero", "Dev Tools"];

//set function for variables for questions and answers
function(quesTion) {
    quesTion.textContent = "Arrays are enclosed by....?";
    buttonA1.addEventListener("click", fucntion) {
        for (i=0, answerArray1.length, i++) {
            answerArray1.querySelector('#')
        }
    }
}

//funtion for timer
var setCounter = setInterval(function() {
    timerCountDown.textContent = count;
    count--;
});
setCounter();

startQuizBtn.addEventListener("click", function() {

})

