function checkAnswer() {

    let answer = document.getElementById("answer").value;
    let result = document.getElementById("result");

    if(answer.toLowerCase() === "hypertext markup language"){
        result.innerHTML = "✅ Correct! Excellent work.";
    }else{
        result.innerHTML = "❌ Incorrect. The correct answer is HyperText Markup Language.";
    }
}

function askAI(){

    let question = document.getElementById("question").value;
    let response = document.getElementById("response");

    if(question==""){
        response.innerHTML="Please enter a question.";
    }else{
        response.innerHTML="🤖 Demo AI received your question:<br><b>"+question+"</b><br><br>Real AI will be connected soon.";
    }

}