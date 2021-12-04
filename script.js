var answer = "";
var buttons, correctCounter, totalCounter;

//to switch the correct answer with another one
function switchAnswers() {
    buttons = document.getElementsByName("choices");
    var Position = Math.floor(4 * Math.random() + 1);
    if(Position != 0) {
        var tempButton = buttons[Position].value;
        buttons[Position].value = answer;
        buttons[0].value = tempButton;
    }
}
//to make the buttons show color around them when clicked
//and increment both counters
function buttonClicked(button) {
    if(button.value == answer) {
        //let the button show the color green
        button.className = "correct";

        //to increment the number of correct answers
        correctCounter = document.getElementById("score").innerHTML;
        correctCounter++;
        document.getElementById("score").innerHTML = correctCounter;

        //increment the total number of quetions answered.
        totalCounter = document.getElementById("outOf").innerHTML;
        totalCounter++;
        document.getElementById("outOf").innerHTML = totalCounter;

    } else {
        //let the button show the color red
        button.className = "wrong";

        //increment the total number of quetions answered.
        totalCounter = document.getElementById("outOf").innerHTML;
        totalCounter++;
        document.getElementById("outOf").innerHTML = totalCounter;
    }
    for(i = 0; i < 4; i++)
        buttons[i].disabled = true;
}

function showHint() {
    document.getElementById("hint").innerHTML = "Answer: " + answer;
    for(i = 0; i < 4; i++)
        buttons[i].disabled = true;
}
