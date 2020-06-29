var body = document.body;

// variables for style
var myTitle = document.getElementById("title").style.textAlign = "center";
var myIntro = document.getElementById("intro").style.textAlign = "center";
var startQuiz = document.getElementById("startquiz-container").style.textAlign = "center";
var myQuestion = document.getElementById("question").style.textAlign = "center";
var myAnswers = document.getElementById("answer-container").style = ("text-align: center");
var timerStyle = document.getElementById("timer").style = ("display: flex; justify-content: flex-end; padding: 40px;");


// variables for functions
var startQuizBtn = document.querySelector("#startquiz");
var quesTions = document.querySelector("#question");
var timerCountDown = document.querySelector("#countdown");
var count = 75;


//funtion for timer

var setCounterText = setInterval(function() {
    timerCountDown.textContent = count;
    count--;
});
setCounterText();


