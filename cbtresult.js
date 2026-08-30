// Load Result
const result =
JSON.parse(localStorage.getItem("cbtResult"));

if(result){

document.getElementById("score").innerHTML =
result.score + " / " + result.total;

document.getElementById("percentage").innerHTML =
result.percentage + "%";

document.getElementById("correct").innerHTML =
result.score;

document.getElementById("wrong").innerHTML =
result.total - result.score;

document.getElementById("timeUsed").innerHTML =
result.timeUsed;

// Grade
let grade = "F";

if(result.percentage >= 80){

grade = "A";

}else if(result.percentage >= 70){

grade = "B";

}else if(result.percentage >= 60){

grade = "C";

}else if(result.percentage >= 50){

grade = "D";

}

document.getElementById("grade").innerHTML = grade;

}

// Try Again
document.querySelector(".retryBtn").onclick = ()=>{

window.location.href = "cbtexam.html";

};

// Dashboard
document.querySelector(".dashboardBtn").onclick = ()=>{

window.location.href = "dashboard.html";

};

// Review Answers
document.querySelector(".reviewBtn").onclick = ()=>{

window.location.href = "review.html";

};