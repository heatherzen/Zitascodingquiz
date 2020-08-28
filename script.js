var body = document.body;

// variables for style
var myTitle = document.getElementById("title").style.textAlign = "center";
var myIntro = document.getElementById("intro").style.textAlign = "center";
var startQuiz = document.getElementById("startquiz-container").style.textAlign = "center";
var myQuestion = document.getElementById("question").style.textAlign = "center";
var questAnsStyle = document.getElementById("question-answer-container").style = ("text-align: center");
var timerStyle = document.getElementById("timer").style = ("display: flex; justify-content: flex-end; padding: 40px;");


// variables for functions
var startQuizBtn = document.getElementById("#startquiz");
var quesTion = document.getElementById("#question");
var timerCountDown = document.getElementById("#countdown");
var count = 75;
var currentQuestion = 0;
var quizScore = 0;
// var scoreBtn = document.getElementById("#viewhs");
var getScore = document.getElementById("#results");
// clear score with event listener



var questionArray = [
    {
        question: "Arrays are enclosed by...?",
        choices: ["Curly braces", "Brackets", "Parenthesis", "Quotations"],
        answer: [1]
    },
    {
        question: "What do you use to select something by it ID?",
        choices: [".", "Quotations", "#", "$"],
        answer: [2]
    },
    {
        question: "What does i=0 in a for loop do?",
        choices: ["sets function equal to zero", "makes array equal to zero", "sets variable to first element in array", "makes the entire for loop equal to zero"],
        answer: [2]
    },
    {
        question: "What is setInterval of a method of?",
        choices: ["JavaScript", "Windows", "Chrome", "Dev Tools"],
        answer: [1]
    }
]
//need endgame function( set quiz inner html show score, create form for name and score, save score to localstorage)
// function to clear localstorage  json stringify




//funtion for timer
function setTime() {
    var setCounter = setInterval(function () {
        timerCountDown.textContent = count;
        count--;

        if (count <= 0) {
            clearInterval(setCounter);
            return endGame();
        }
    }, 1000);
};

function startQuiz() {
    displayQuestions();
    setTime();
}

function displayQuestions() {
    var questionList = questionArray[currentQuestion].choices.map((questions) => {
        return `<button class="ansbtn" onclick="answerQuestion('${questions})">${questions}</button>`;
    });
    quiz.innerHTML = `${questionArray[currentQuestion].question}<br>${questionList.join("")}`;
}

function answerQuestion(selection) {
    if (questionArray[currentQuestion].answer === selection) {
        quizScore++;   
    }
    else {
        count -= 10;
    }
    currentQuestion++;
    if (currentQuestion === questionArray.length) {
        return endGame()
    }
}

function restartGame() {
    count = 75;
    currentQuestion = 0;
    quizScore = 0;
    startQuiz();
}

var endGame = function() {
    if (questionArray = 0) {
        localStorage.setItem("highScore", highScore);
    }
    
}

var viewScore = function() {
    localStorage.getItem("getScore", getScore)
}


startQuizBtn.addEventListener("click", function () {
    startQuiz();
});

getScore.addEventListener("click", function() {
    viewScore();
});
