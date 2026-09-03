const buttons=document.querySelectorAll(".timeBtn");

const continueBtn=document.getElementById("continueBtn");

let selectedTime="";

buttons.forEach(button=>{

button.onclick=()=>{

buttons.forEach(btn=>btn.classList.remove("selected"));

button.classList.add("selected");

selectedTime=button.dataset.time;

localStorage.setItem("cbtTime",selectedTime);

continueBtn.disabled=false;

};

});

continueBtn.onclick = () => {

if(selectedTime===""){

alert("Please select an exam duration.");

return;

}

// Save the selected time
localStorage.setItem("cbtTime", selectedTime);

// Open the CBT Exam page
window.location.href = "cbtexam.html";

};