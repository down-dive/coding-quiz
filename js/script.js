var btnEl = document.querySelector("#start");
var mainEl = document.querySelector("main");
var count = 0;
var score = 0;

const questions = [
  {
    question: "Commonly used data types Do Not Include",
    choiceOne: "booleans",
    choiceTwo: "strings",
    choiceThree: "numbers",
    choiceFour: "alerts",
    correctAnswer: "alerts"
  },
  {
    question: "The condition if/else statement enclosed with ___",
    choiceOne: "quotes",
    choiceTwo: "curly brakets",
    choiceThree: "parenthesis",
    choiceFour: "square brakers",
    correctAnswer: "curly brakets"
  },
  {
    question: "Arrays in JavaScript can be used to store",
    choiceOne: "numbers and strings",
    choiceTwo: "other arrays",
    choiceThree: "booleans",
    choiceFour: "all of the above",
    correctAnswer: "all of the above"
  },
  {
    question: "String values must be enclosed within ___ when being assigned to variables",
    choiceOne: "commas",
    choiceTwo: "curly brakets",
    choiceThree: "parenthesis",
    choiceFour: "quotes",
    correctAnswer: "quotes"
  },
  {
  question: "A very usefull tool being used during development and debugging for printing content to the degugger is",
  choiceOne: "terminal/bash",
  choiceTwo: "for loop",
  choiceThree: "console.log",
  choiceFour: "JavaScript",
  correctAnswer: "console.log"
  },

]


function btnHandler() {

  mainEl.innerHTML = "";

  document.getElementById("testClass").classList.remove("testClass");
  document.getElementById("test").innerHTML = questions[count].question;
  document.getElementById("testButton1").innerHTML = questions[count].choiceOne;
  document.getElementById("testButton2").innerHTML = questions[count].choiceTwo;
  document.getElementById("testButton3").innerHTML = questions[count].choiceThree;
  document.getElementById("testButton4").innerHTML = questions[count].choiceFour;

  count += 1; //now count == 1;

  if (count >= questions.length) {
    document.getElementById("testClass").innerHTML = "";

    document.getElementById("endOfQuiz").classList.remove("endOfQuiz");

    document.getElementById("allDone").innerHTML = "All done!";
    document.getElementById("finalScore").innerHTML = "Your final score is: " + score;
};
}

document.getElementById("testButton1").addEventListener("click", () => {


  if (document.getElementById("testButton1").innerHTML === questions[count - 1].correctAnswer) {
    btnHandler()
  } else {
   btnHandler()
  }

});

document.getElementById("testButton2").addEventListener("click", () => {
  if (document.getElementById(("testButton2").innerHTML === questions[count - 1].correctAnswer)) {
    btnHandler()
  } else {
    btnHandler()
  }
});

document.getElementById("testButton3").addEventListener("click", () => {
  if (document.getElementById(("testButton3").innerHTML === questions[count - 1].correctAnswer)) {
    btnHandler()
  } else {
    btnHandler()
  }
});

document.getElementById("testButton4").addEventListener("click", () => {

  if (document.getElementById(("testButton4").innerHTML === questions[count - 1].correctAnswer)) {
    btnHandler()
  } else {
    btnHandler()
  }
});

btnEl.addEventListener("click", btnHandler);













