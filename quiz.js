var quizForm = document.querySelector(".form-quiz");
var submitBtn = document.querySelector("#btn-submit");
var outputDiv = document.querySelector("#div-output");

var correctAnswers = ["90°", "right angled"];



function CalculateScore(){
    let score = 0;
    let index = 0;
    var formReslts = new FormData(quizForm);
    for(let value of formReslts.values())
    {
        if(value === correctAnswers[index])
        {
            score = score + 1;
        }
        index = index + 1;
    }
    outputDiv.innerText = "Your Score is :" + score;
}





submitBtn.addEventListener("click", CalculateScore);