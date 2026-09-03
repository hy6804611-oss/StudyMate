function checkAnswer() {

    let answer = document.getElementById("answer").value;
    let result = document.getElementById("result");

    if(answer.toLowerCase() === "hypertext markup language"){
        result.innerHTML = "✅ Correct! Excellent work.";
    }else{
        result.innerHTML = "❌ Incorrect. The correct answer is HyperText Markup Language.";
    }
}

