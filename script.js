var body = document.body;

var h1El = document.createElement('h1');
h1El.textContent = 'Coding Quiz Challenge';
h1El.setAttribute('style', 'text-align: center; width: 40%; margin: auto;');
body.appendChild(h1El);

var h4El = document.createElement('h4');
h4El.textContent = 'Answer the following questions within the time allotted.  Incorrect answers will deduct from the time given.';
h4El.setAttribute('style', 'font-size: 16px; text-align: center; width: 40%; margin: auto;');
body.appendChild(h4El);

var timerDisplay = document.getElementsByClassName("timer");
timerDisplay.setAttribute('style', 'width:10%; display:flex; justify-content:flex-end; align-items:flex-start; margin:auto;');