var btnEl = document.querySelector("button");
var mainEl = document.querySelector("main");

var btnHandler = function() {
    // var startEl = document.querySelector("#start")
    // startEl.style.display = "none";
    // event.preventDefault();

    var question = document.createElement("div");
    mainEl.innerHTML = "";


 
    mainEl.appendChild(question);

    var heading = document.createElement("h1");
    heading.textContent = "Commonly used data types Do Not Include";
    question.appendChild(heading);
    var answerOne = document.createElement("button");
    answerOne.textContent = "booleans";
    question.appendChild(answerOne);
    var answerTwo = document.createElement("button");
    answerTwo.textContent = "strings";
    question.appendChild(answerTwo);
    var answerThree = document.createElement("button");
    answerThree.textContent = "numbers";
    question.appendChild(answerThree);
    var answerFour = document.createElement("button");
    answerFour.textContent = "alerts";
    question.appendChild(answerFour);

};

btnEl.addEventListener("click", btnHandler);






