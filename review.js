const container = document.getElementById("reviewContainer");

// Load exam data
const questions =
JSON.parse(localStorage.getItem("examQuestions")) || [];

const answers =
JSON.parse(localStorage.getItem("userAnswers")) || [];

if(questions.length===0){

container.innerHTML=`
<h2 style="text-align:center;color:white;">
No Review Available
</h2>
`;

}else{

questions.forEach((q,index)=>{

const correct =
answers[index]===q.answer;

container.innerHTML+=`

<div class="review-card">

<h3>
Question ${index+1}
</h3>

<p class="question">
${q.question}
</p>

<p class="${correct ? "correctAnswer" : "yourAnswer"}">
${correct ? "✅" : "❌"} Your Answer:
<b>${answers[index] || "Not Answered"}</b>
</p>

<p class="correctAnswer">
✅ Correct Answer:
<b>${q.answer}</b>
</p>

<p class="${correct?"right":"wrong"}">

${correct?"✔ Correct":"✖ Incorrect"}

</p>

</div>

`;

});

}

// Back button
document.getElementById("backBtn").onclick=()=>{

window.location.href="dashboard.html";

};