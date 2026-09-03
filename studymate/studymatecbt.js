const subjects = [

{name:"Mathematics",icon:"📘"},
{name:"English",icon:"📖"},
{name:"Physics",icon:"⚛️"},
{name:"Chemistry",icon:"🧪"},
{name:"Biology",icon:"🧬"},
{name:"Geography",icon:"🌍"},
{name:"Computer",icon:"💻"},
{name:"History",icon:"🌐"},
{name:"Government",icon:"🏛️"},
{name:"Economics",icon:"📈"},
{name:"Commerce",icon:"💼"},
{name:"Principles of Accounts",icon:"🧮"},
{name:"Literature",icon:"📚"},
{name:"Civic Education",icon:"📙"}

];

const container = document.querySelector(".subjects");

const selectedCount = document.getElementById("selectedCount");

const startExam = document.getElementById("startExam");

let selectedSubjects = [];

subjects.forEach(subject=>{

const card=document.createElement("div");

card.className="subject-card";

card.innerHTML=`
<div class="icon">${subject.icon}</div>
<h3>${subject.name}</h3>
`;

card.onclick=()=>{

if(card.classList.contains("selected")){

card.classList.remove("selected");

selectedSubjects=selectedSubjects.filter(
s=>s!==subject.name
);

}else{

if(selectedSubjects.length>=4){

alert("You can select a maximum of 4 subjects.");

return;

}

card.classList.add("selected");

selectedSubjects.push(subject.name);

}

selectedCount.innerHTML=selectedSubjects.length;

startExam.disabled=(selectedSubjects.length===0);

};

container.appendChild(card);

});

startExam.onclick=()=>{

// Save selected subjects
localStorage.setItem(
"selectedSubjects",
JSON.stringify(selectedSubjects)
);

// Open the next page
window.location.href="cbtsetup.html";

};