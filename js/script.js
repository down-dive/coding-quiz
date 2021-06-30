var btnEl = document.querySelector("#start");
var scoreBtn = document.querySelector("#high-score");
var mainEl = document.querySelector("main");
var count = 0;
var time = 75;
var pageContentEl = document.querySelector(".start");
var timeEl = document.querySelector("#time")
var startCountDown;
var form = document.querySelector("#form")

// an array with object for questions and answers
const questions = [
  // first question
  {
    question: "Commonly used data types Do Not Include",
    choiceOne: "booleans",
    choiceTwo: "strings",
    choiceThree: "numbers",
    choiceFour: "alerts",
    correctAnswer: "alerts"
  },
  // second question
  {
    question: "The condition if/else statement enclosed with ___",
    choiceOne: "quotes",
    choiceTwo: "curly brakets",
    choiceThree: "parenthesis",
    choiceFour: "square brakers",
    correctAnswer: "curly brakets"
  },
  // third question
  {
    question: "Arrays in JavaScript can be used to store",
    choiceOne: "numbers and strings",
    choiceTwo: "other arrays",
    choiceThree: "booleans",
    choiceFour: "all of the above",
    correctAnswer: "all of the above"
  },
  // fourth question
  {
    question: "String values must be enclosed within ___ when being assigned to variables",
    choiceOne: "commas",
    choiceTwo: "curly brakets",
    choiceThree: "parenthesis",
    choiceFour: "quotes",
    correctAnswer: "quotes"
  },
  // fifth question
  {
    question: "A very usefull tool being used during development and debugging for printing content to the debugger is",
    choiceOne: "terminal/bash",
    choiceTwo: "for loop",
    choiceThree: "console.log",
    choiceFour: "JavaScript",
    correctAnswer: "console.log"
  },
]

// buttons interacions
function btnHandler() {

  mainEl.innerHTML = "";

  // final score
  if (count >= questions.length) {
    document.getElementById("testClass").innerHTML = "";
    document.getElementById("endOfQuiz").classList.remove("endOfQuiz");
    document.getElementById("allDone").innerHTML = "All done!";
    document.getElementById("finalScore").innerHTML = "Your final score is: " + time;
    if (localStorage.getItem("High Score") < time) {
      localStorage.setItem("High Score", time)
    }

    // document.getElementById("initials").innerHTML = "Enter your initials";
    var label = document.createElement("label");
    label.innerHTML = "Enter your initials: ";
    form.appendChild(label);
    var initials = document.createElement("input");
    initials.className = "initials"
    form.appendChild(initials);
    var submit = document.createElement("button");
    submit.className = "submit"
    submit.innerHTML = "Submit"
    form.appendChild(submit);

    document.querySelector(".submit").addEventListener("click", () => {
      scoreHandler(event)
    })
  } else {
    document.getElementById("testClass").classList.remove("testClass");
    document.getElementById("test").innerHTML = questions[count].question;
    document.getElementById("testButton1").innerHTML = questions[count].choiceOne;
    document.getElementById("testButton2").innerHTML = questions[count].choiceTwo;
    document.getElementById("testButton3").innerHTML = questions[count].choiceThree;
    document.getElementById("testButton4").innerHTML = questions[count].choiceFour;

    count += 1; //now count == 1;
  }
}

function scoreHandler(event) {
  event.preventDefault()

  console.log('document.querySelector(".initials").value')
  localStorage.setItem("initials", document.querySelector(".initials").value)
}



// first answer
document.getElementById("testButton1").addEventListener("click", () => {

  if (document.getElementById("testButton1").innerText == questions[count - 1].correctAnswer) {
    console.log(questions[count - 1].correctAnswer)
    time += 5;
    btnHandler()
  } else {
    time -= 5;
    btnHandler()
  }
});

// second answer
document.getElementById("testButton2").addEventListener("click", () => {
  if (document.getElementById("testButton2").innerText == questions[count - 1].correctAnswer) {
    time += 5;
    btnHandler()
  } else {
    time -= 5;
    btnHandler()
  }
});

// third answer
document.getElementById("testButton3").addEventListener("click", () => {
  if (document.getElementById("testButton3").innerText == questions[count - 1].correctAnswer) {
    time += 5;
    btnHandler()
  } else {
    time -= 5;
    btnHandler()
  }
});

// forth answer
document.getElementById("testButton4").addEventListener("click", () => {
  console.log(questions[count - 1].correctAnswer)
  console.log(document.getElementById("testButton4").innerText)
  if (document.getElementById("testButton4").innerText == questions[count - 1].correctAnswer) {
    time += 5;
    btnHandler()
  } else {
    time -= 5;
    btnHandler()
  }
});

// timer
btnEl.addEventListener("click", function () {
  btnHandler()
  startCountDown = setInterval(() => {
    time--;
    timer()

  }, 1000)

});

scoreBtn.addEventListener("click", function () {

  mainEl.innerHTML = "";
  console.log("clicked")

  var score = document.createElement("div")
  score.innerHTML = 'Highest score is:'
  score.className = "score"
  mainEl.appendChild(score)
    // console.log(localStorage.getItem("initials"))
    // localStorage.getItem("initials")
})

// stop timer
var timer = function () {
  timeEl.innerText = time;
  if (count > questions.length - 1) {
    clearInterval(startCountDown);
  }
}

if (localStorage.getItem("High Score") == null) {
  localStorage.setItem("High Score", 0)
}





















