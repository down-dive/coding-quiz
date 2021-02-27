var btnEl = document.querySelector("#start");
var mainEl = document.querySelector("main");
var count = 0;

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
    choiceThree: "patenthesis",
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

  // var question = document.createElement("div");
  mainEl.innerHTML = "";

  document.getElementById("testClass").classList.remove("testClass");
  document.getElementById("test").textContent = questions[count].question;
  document.getElementById("testButton1").innerHTML = questions[count].choiceOne;
  document.getElementById("testButton2").innerHTML = questions[count].choiceTwo;
  document.getElementById("testButton3").innerHTML = questions[count].choiceThree;
  document.getElementById("testButton4").innerHTML = questions[count].choiceFour;

  // mainEl.appendChild(question);
  // var heading = document.createElement("h1");
  // heading.textContent = questions[count].question;
  // question.appendChild(heading);

  // var answerOne = document.createElement("button");
  // answerOne.textContent = questions[count].choiceOne;
  // answerOne.className = "button";
  // question.appendChild(answerOne);

  // var answerTwo = document.createElement("button");
  // answerTwo.textContent = questions[count].choiceTwo;
  // answerTwo.className = "button";
  // question.appendChild(answerTwo);

  // var answerThree = document.createElement("button");
  // answerThree.textContent = questions[count].choiceThree;
  // answerThree.className = "button";
  // question.appendChild(answerThree);

  // var answerFour = document.createElement("button");
  // answerFour.textContent = questions[count].choiceFour;
  // answerFour.className = "button";
  // question.appendChild(answerFour);

  //console.log(questions[count].question) // question 1

  count += 1; //now count == 1;

  //console.log(questions[count].question) // question 2

};

document.getElementById("testButton1").addEventListener("click", () => {

  if (document.getElementById("testButton1").innerHTML == "booleans") {
    alert(questions[count - 1].correctAnswer)
  } else {
    alert("no")
  }

  if (document.getElementById("testButton1").innerHTML == questions[count - 1].correctAnswer) {
    console.log(("testButton1").textContent)
    alert(document.getElementById("testButton1").innerHTML)
    return btnHandler()
  } else {
    console.log("wrong");
    return btnHandler()
  }

});

document.getElementById("testButton2").addEventListener("click", () => {
  if (document.getElementById(("testButton2").innerHTML === questions[count - 1].correctAnswer)) {
    console.log(("testButton2").textContent)
    btnHandler()
  } else {
    console.log("wrong");
    btnHandler()
  }
});

document.getElementById("testButton3").addEventListener("click", () => {
  if (document.getElementById(("testButton3").innerHTML === questions[count - 1].correctAnswer)) {
    console.log(("testButton3").textContent)
    btnHandler()
  } else {
    console.log("wrong");
    btnHandler()
  }
});

document.getElementById("testButton4").addEventListener("click", () => {
  if (document.getElementById("testButton4").innerHTML == questions[count - 1].correctAnswer) {
    console.log("correct")
  } else {

    console.log("incorrect")
  }

  btnHandler 

  if (document.getElementById(("testButton4").innerHTML === questions[count - 1].correctAnswer)) {
    console.log(("testButton4").textContent)
    btnHandler()
  } else {
    console.log("wrong");
    btnHandler()
  }
});

btnEl.addEventListener("click", btnHandler);

// var taskButtonHandler = function(event) {
//     console.log(event.target);

//     if (event.target.matches("#button")) {
//       // get the element's task id
// console.log("It worked!")
//     }
//   };













