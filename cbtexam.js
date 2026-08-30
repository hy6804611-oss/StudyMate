// ======================================
// STUDYMATE CBT ENGINE
// SAFE REPAIR VERSION
// ======================================


// ======================================
// LOAD SELECTED SUBJECTS
// ======================================

const selectedSubjects =
    JSON.parse(
        localStorage.getItem("selectedSubjects")
    ) || [];


// ======================================
// SETTINGS
// ======================================

const QUESTIONS_PER_SUBJECT = 40;


// ======================================
// VARIABLES
// ======================================

let examQuestions = [];
let userAnswers = [];
let currentQuestion = 0;
let subjectProgress = {};
let timeLeft = 0;


// ======================================
// HTML ELEMENTS
// ======================================

const questionNumber =
    document.getElementById("questionNumber");

const questionBox =
    document.getElementById("question");

const options =
    document.querySelectorAll(".option");

const nextBtn =
    document.getElementById("nextBtn");

const previousBtn =
    document.getElementById("previousBtn");

const submitBtn =
    document.getElementById("submitBtn");

const timer =
    document.getElementById("timer");

const subjectTabs =
    document.getElementById("subjectTabs");

const currentSubject =
    document.getElementById("currentSubject");

const questionPalette =
    document.getElementById("questionPalette");

const progressFill =
    document.getElementById("progressFill");


// ======================================
// SUBJECT ICONS
// ======================================

const subjectIcons = {

    "Mathematics": "📘",

    "English": "📖",

    "Physics": "⚛️",

    "Chemistry": "🧪",

    "Biology": "🧬",

    "Geography": "🌍",

    "Computer": "💻",

    "History": "🌐",

    "Government": "🏛️",

    "Economics": "📈",

    "Commerce": "💼",

    "Principles of Accounts": "🧮",

    "Literature": "📚",

    "Civic Education": "📙"

};


// ======================================
// CREATE SUBJECT TABS
// ======================================
//
// IMPORTANT:
// selectedSubjects already contains the
// exact order in which the user selected
// the subjects.
//
// Example:
//
// Mathematics → English → Physics
//
// will create:
//
// Mathematics | English | Physics
//
// No sorting is performed.
// ======================================

function createSubjectTabs() {

    subjectTabs.innerHTML = "";

    selectedSubjects.forEach(subject => {

        const tab =
            document.createElement("button");

        tab.className =
            "subject-tab";

        tab.dataset.subject =
            subject;

        tab.innerHTML = `
            <span>
                ${subjectIcons[subject] || "📚"}
            </span>
            <span>${subject}</span>
        `;

        subjectTabs.appendChild(tab);

    });

}


// Create the tabs immediately
createSubjectTabs();


// ======================================
// SHUFFLE
// ======================================

function shuffle(array) {

    const arr = [...array];

    for (
        let i = arr.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [arr[i], arr[j]] =
            [arr[j], arr[i]];

    }

    return arr;

}


// ======================================
// BUILD EXAM
// ======================================
//
// IMPORTANT:
// We loop through selectedSubjects,
// NOT through the question bank.
//
// Therefore the exam follows the
// user's selected-subject order.
// ======================================

selectedSubjects.forEach(subject => {

    if (!cbtQuestions[subject]) {

        return;

    }

    let questions =
        shuffle(
            cbtQuestions[subject]
        );


    questions =
        questions.slice(
            0,
            Math.min(
                QUESTIONS_PER_SUBJECT,
                questions.length
            )
        );


    questions.forEach(q => {

        examQuestions.push({

            subject: q.subject,

            question: q.question,

            options:
                shuffle(
                    [...q.options]
                ),

            answer: q.answer

        });

    });

});


// ======================================
// FIND FIRST QUESTION OF EACH SUBJECT
// ======================================

examQuestions.forEach((q, index) => {

    if (
        subjectProgress[q.subject]
        === undefined
    ) {

        subjectProgress[q.subject] =
            index;

    }

});


// ======================================
// CONNECT GENERATED SUBJECT TABS
// ======================================

function connectSubjectTabs() {

    const subjectCards =
        document.querySelectorAll(
            ".subject-tab"
        );


    subjectCards.forEach(tab => {

        const subject =
            tab.dataset.subject;


        tab.onclick = () => {

            // Save current position
            if (
                examQuestions[currentQuestion]
            ) {

                subjectProgress[
                    examQuestions[
                        currentQuestion
                    ].subject
                ] =
                    currentQuestion;

            }


            // Find first question
            // belonging to selected subject

            const subjectIndex =
                examQuestions.findIndex(
                    q =>
                        q.subject === subject
                );


            if (
                subjectIndex !== -1
            ) {

                currentQuestion =
                    subjectIndex;

                loadQuestion();

            }

        };

    });

}


// Connect generated tabs
connectSubjectTabs();


// ======================================
// TIMER
// ======================================

let minutes =
    parseInt(
        localStorage.getItem(
            "cbtTime"
        )
    );


if (isNaN(minutes)) {

    minutes = 30;

}


timeLeft =
    minutes * 60;


function updateTimer() {

    const mins =
        Math.floor(
            timeLeft / 60
        );


    const secs =
        timeLeft % 60;


    timer.innerHTML =
        "⏱ " +
        String(mins).padStart(
            2,
            "0"
        ) +
        ":" +
        String(secs).padStart(
            2,
            "0"
        );


    if (
        timeLeft <= 0
    ) {

        clearInterval(
            timerInterval
        );


        alert(
            "⏰ Time is up!"
        );


        submitBtn.click();

        return;

    }


    timeLeft--;

}


updateTimer();


const timerInterval =
    setInterval(
        updateTimer,
        1000
    );


// ======================================
// LOAD QUESTION
// ======================================

function loadQuestion() {

    if (
        examQuestions.length === 0
    ) {

        questionBox.innerHTML =
            "No questions found.";

        return;

    }


    const q =
        examQuestions[
            currentQuestion
        ];


    // ==================================
    // ACTIVE SUBJECT TAB
    // ==================================

    const subjectCards =
        document.querySelectorAll(
            ".subject-tab"
        );


    subjectCards.forEach(tab => {

        tab.classList.remove(
            "active"
        );


        if (
            tab.dataset.subject ===
            q.subject
        ) {

            tab.classList.add(
                "active"
            );

        }

    });


    // ==================================
    // CURRENT SUBJECT
    // ==================================

    currentSubject.innerHTML =
        "📘 " + q.subject;


    // ==================================
    // QUESTION NUMBER
    // ==================================

    questionNumber.innerHTML =
        "Question " +
        (
            currentQuestion + 1
        ) +
        " of " +
        examQuestions.length;


    // ==================================
    // PROGRESS BAR
    // ==================================

    const progress =
        (
            (
                currentQuestion + 1
            ) /
            examQuestions.length
        ) * 100;


    progressFill.style.width =
        progress + "%";


    // ==================================
    // QUESTION
    // ==================================

    questionBox.innerHTML =
        q.question;


    // ==================================
    // OPTIONS
    // ==================================

    options.forEach(
        (btn, index) => {

            btn.innerHTML =
                String.fromCharCode(
                    65 + index
                ) +
                ". " +
                q.options[index];


            btn.classList.remove(
                "selected"
            );


            // Restore answer

            if (
                userAnswers[
                    currentQuestion
                ] ===
                q.options[index]
            ) {

                btn.classList.add(
                    "selected"
                );

            }


            // Select answer

            btn.onclick = () => {

                userAnswers[
                    currentQuestion
                ] =
                    q.options[index];


                options.forEach(
                    option => {

                        option.classList.remove(
                            "selected"
                        );

                    }
                );


                btn.classList.add(
                    "selected"
                );


                buildQuestionPalette();

            };

        }
    );


    // ==================================
    // QUESTION PALETTE
    // ==================================

    buildQuestionPalette();

}


// ======================================
// QUESTION PALETTE
// ======================================

function buildQuestionPalette() {

    questionPalette.innerHTML =
        "";


    examQuestions.forEach(
        (q, index) => {

            const box =
                document.createElement(
                    "div"
                );


            box.className =
                "question-box";


            box.innerHTML =
                index + 1;


            // Current question

            if (
                index ===
                currentQuestion
            ) {

                box.classList.add(
                    "active"
                );

            }


            // Answered question

            if (
                userAnswers[index]
            ) {

                box.classList.add(
                    "answered"
                );

            }


            // Click question

            box.onclick = () => {

                currentQuestion =
                    index;

                loadQuestion();

            };


            questionPalette.appendChild(
                box
            );

        }
    );

}


// ======================================
// NEXT
// ======================================

nextBtn.onclick = () => {

    if (
        currentQuestion <
        examQuestions.length - 1
    ) {

        subjectProgress[
            examQuestions[
                currentQuestion
            ].subject
        ] =
            currentQuestion;


        currentQuestion++;


        loadQuestion();

    }

};


// ======================================
// PREVIOUS
// ======================================

previousBtn.onclick = () => {

    if (
        currentQuestion > 0
    ) {

        subjectProgress[
            examQuestions[
                currentQuestion
            ].subject
        ] =
            currentQuestion;


        currentQuestion--;


        loadQuestion();

    }

};


// ======================================
// SUBMIT EXAM
// ======================================

submitBtn.onclick = () => {

    let score = 0;


    examQuestions.forEach(
        (q, index) => {

            if (
                userAnswers[index] ===
                q.answer
            ) {

                score++;

            }

        }
    );


    const percentage =
        Math.round(
            (
                score /
                examQuestions.length
            ) * 100
        );


    const totalMinutes =
        parseInt(
            localStorage.getItem(
                "cbtTime"
            )
        ) || 30;


    const secondsUsed =
        (
            totalMinutes * 60
        ) -
        timeLeft;


    const mins =
        Math.floor(
            secondsUsed / 60
        );


    const secs =
        secondsUsed % 60;


    const timeUsed =
        String(mins).padStart(
            2,
            "0"
        ) +
        ":" +
        String(secs).padStart(
            2,
            "0"
        );


    // ==================================
    // SAVE RESULT
    // ==================================

    localStorage.setItem(
        "cbtResult",

        JSON.stringify({

            score:
                score,

            total:
                examQuestions.length,

            percentage:
                percentage,

            timeUsed:
                timeUsed

        })
    );


    // ==================================
    // SAVE REVIEW QUESTIONS
    // ==================================

    localStorage.setItem(
        "examQuestions",

        JSON.stringify(
            examQuestions
        )
    );


    // ==================================
    // SAVE USER ANSWERS
    // ==================================

    localStorage.setItem(
        "userAnswers",

        JSON.stringify(
            userAnswers
        )
    );


    clearInterval(
        timerInterval
    );


    // ==================================
    // GO TO RESULT
    // ==================================

    window.location.href =
        "cbtresult.html";

};


// ======================================
// START CBT
// ======================================

loadQuestion();

buildQuestionPalette();