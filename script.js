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

var answerArray1 = ["Curly braces", ".", "sets function equal to zero", ]
//set variable functions for questions and answers into object array
var questAns1 = function() {
    quesTion.textContent = "Arrays are enclosed by....?";
    buttonA1.addEventListener("click", fucntion) {
        var ansWer1 = fucntion()
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

