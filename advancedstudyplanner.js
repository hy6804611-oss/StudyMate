/* =========================================================
   STUDYMATE ADVANCED STUDY PLANNER
   COMPLETE SMART PLANNER ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const goalSelect =
        document.getElementById("advancedGoal");

    const examDateInput =
        document.getElementById("examDate");

    const daysUntilExam =
        document.getElementById("daysUntilExam");

    const recommendedTime =
        document.getElementById("recommendedTime");

    const planSummaryText =
        document.getElementById("planSummaryText");

    const timeButtons =
        document.querySelectorAll(".time-option");

    const generateBtn =
        document.getElementById(
            "generateAdvancedPlanBtn"
        );

    const generatedSection =
        document.getElementById(
            "generatedPlanSection"
        );

    const generatedPlan =
        document.getElementById(
            "generatedPlan"
        );

    const weeklyPlan =
        document.getElementById(
            "weeklyPlan"
        );

    const allocationList =
        document.getElementById(
            "allocationList"
        );

    const priorityList =
        document.getElementById(
            "subjectPriorityList"
        );

    const insightsBox =
        document.getElementById(
            "plannerInsights"
        );

    const adjustPlanBtn =
        document.getElementById(
            "adjustPlanBtn"
        );


    /* =====================================================
       STORAGE
    ===================================================== */

    const STORAGE_KEY =
        "studyMateAdvancedPlannerState";


    /* =====================================================
       PLANNER STATE
    ===================================================== */

    const plannerState = {

        goal: "daily",

        dailyMinutes: 60,

        examDate: "",

        reminderTime: "19:00",

        selectedSubjects: [],

        generated: false,

        generatedPlan: []

    };


    /* =====================================================
       SUBJECTS
    ===================================================== */

    /*
       These are the subjects already supported by
       StudyMate.

       They are NOT automatically selected.
       The student chooses what they actually want.
    */

    const availableSubjects = [

        "Mathematics",
        "English",
        "Physics",
        "Chemistry",
        "Biology",
        "Geography",
        "Computer",
        "Government",
        "Economics",
        "History",
        "Literature",
        "Civic Education",
        "Commerce",
        "Principles of Accounts"

    ];


    /* =====================================================
       LOAD SAVED STATE
    ===================================================== */

    loadPlannerState();


    function loadPlannerState() {

        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );

        if (!saved) {
            return;
        }

        try {

            const data =
                JSON.parse(saved);

            if (
                data &&
                typeof data === "object"
            ) {

                Object.assign(
                    plannerState,
                    data
                );

            }

        } catch (error) {

            console.warn(
                "StudyMate Advanced Planner: saved data could not be loaded."
            );

        }

    }


    /* =====================================================
       SAVE STATE
    ===================================================== */

    function savePlannerState() {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(
                    plannerState
                )
            );

        } catch (error) {

            console.warn(
                "StudyMate Advanced Planner: could not save state."
            );

        }

    }


    /* =====================================================
       GOAL
    ===================================================== */

    if (goalSelect) {

        goalSelect.value =
            plannerState.goal;

        goalSelect.addEventListener(
            "change",
            () => {

                plannerState.goal =
                    goalSelect.value;

                rebuildPlanner();

            }
        );

    }


    /* =====================================================
       STUDY TIME BUTTONS
    ===================================================== */

    function updateTimeButtons() {

        timeButtons.forEach(button => {

            const minutes =
                Number(
                    button.dataset.minutes
                );

            button.classList.toggle(
                "active",
                minutes ===
                Number(
                    plannerState.dailyMinutes
                )
            );

        });

    }


    timeButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const minutes =
                    Number(
                        button.dataset.minutes
                    );

                if (!minutes) {
                    return;
                }

                plannerState.dailyMinutes =
                    minutes;

                updateTimeButtons();

                rebuildPlanner();

            }
        );

    });


    updateTimeButtons();


    /* =====================================================
       EXAM DATE
    ===================================================== */

    if (examDateInput) {

        if (plannerState.examDate) {

            examDateInput.value =
                plannerState.examDate;

        }

        examDateInput.addEventListener(
            "change",
            () => {

                plannerState.examDate =
                    examDateInput.value;

                rebuildPlanner();

            }
        );

        examDateInput.min =
            getLocalDateString();

    }


    /* =====================================================
       REMINDER TIME
    ===================================================== */

    createReminderTimeControl();


    function createReminderTimeControl() {

        /*
           If your HTML already has an input with this ID,
           we use it.

           If it doesn't, JavaScript creates one inside
           the Exam Planning card.
        */

        let reminderInput =
            document.getElementById(
                "advancedReminderTime"
            );

        if (!reminderInput) {

            const cards =
                document.querySelectorAll(
                    ".advanced-card"
                );

            let targetCard =
                examDateInput
                    ? examDateInput.closest(
                        ".advanced-card"
                    )
                    : null;

            if (!targetCard && cards.length) {
                targetCard = cards[0];
            }

            if (targetCard) {

                const wrapper =
                    document.createElement(
                        "div"
                    );

                wrapper.className =
                    "advanced-reminder-control";

                wrapper.innerHTML = `

                    <label
                        for="advancedReminderTime"
                    >
                        Study reminder time
                    </label>

                    <input
                        type="time"
                        id="advancedReminderTime"
                        value="${plannerState.reminderTime}"
                    >

                    <small>
                        StudyMate will remind you at this
                        time on your scheduled study days.
                    </small>

                `;

                targetCard.appendChild(
                    wrapper
                );

                reminderInput =
                    wrapper.querySelector(
                        "#advancedReminderTime"
                    );

            }

        }


        if (!reminderInput) {
            return;
        }


        reminderInput.value =
            plannerState.reminderTime ||
            "19:00";


        reminderInput.addEventListener(
            "change",
            () => {

                plannerState.reminderTime =
                    reminderInput.value ||
                    "19:00";

                savePlannerState();

            }
        );

    }


/* =====================================================
   SUBJECT SELECTION
===================================================== */

setupSubjectSelection();

function setupSubjectSelection() {

    const subjectSelect =
        document.getElementById("advancedSubjectSelect");

    const addSubjectBtn =
        document.getElementById("addAdvancedSubjectBtn");

    const selectedSubjectsBox =
        document.getElementById("selectedSubjects");


    /*
       USE THE EXISTING HTML SELECTOR.

       Do NOT create another subject selector.
    */

    if (!subjectSelect) {
        console.warn(
            "StudyMate: advancedSubjectSelect was not found."
        );
        return;
    }


    /*
       Load the 14 StudyMate subjects
       into the existing selector.
    */

    subjectSelect.innerHTML = `
        <option value="">
            Select a subject
        </option>

        ${availableSubjects.map(subject => `
            <option value="${escapeHTML(subject)}">
                ${escapeHTML(subject)}
            </option>
        `).join("")}
    `;


    /*
       Add Subject button
    */

    if (addSubjectBtn) {

        addSubjectBtn.addEventListener(
            "click",
            () => {

                const subject =
                    subjectSelect.value;


                if (!subject) {

                    showMessage(
                        "Please select a subject first."
                    );

                    return;

                }


                toggleSelectedSubject(subject);


                /*
                   Reset the selector immediately.
                */

                subjectSelect.value = "";


                /*
                   IMPORTANT:
                   Do NOT rebuild the entire planner here.
                   Only update the subject area.
                */

                updateSubjectSelectionUI();
                updateSummary();
                renderPriority();
                renderAllocation();

            }
        );

    }


    /*
       Also allow selecting by pressing Enter/change.
    */

    subjectSelect.addEventListener(
        "change",
        () => {

            const subject =
                subjectSelect.value;


            if (!subject) {
                return;
            }


            toggleSelectedSubject(subject);


            subjectSelect.value = "";


            updateSubjectSelectionUI();
            updateSummary();
            renderPriority();
            renderAllocation();

        }
    );


    updateSubjectSelectionUI();

}


/* =====================================================
   TOGGLE SUBJECT
===================================================== */

function toggleSelectedSubject(subject) {

    const index =
        plannerState.selectedSubjects
            .indexOf(subject);


    /*
       SUBJECT NOT SELECTED
       → SELECT IT
    */

    if (index === -1) {

        plannerState.selectedSubjects.push(
            subject
        );

    }


    /*
       SUBJECT ALREADY SELECTED
       → REMOVE IT
    */

    else {

        plannerState.selectedSubjects.splice(
            index,
            1
        );

    }


    /*
       If a plan already exists, immediately
       regenerate it using the CURRENT subjects.

       This prevents old subjects from remaining
       inside the generated plan.
    */

    if (plannerState.generated) {

        plannerState.generatedPlan =
            generateSchedule();

    }


    savePlannerState();

}


/* =====================================================
   SUBJECT DISPLAY
===================================================== */

function updateSubjectSelectionUI() {

    const box =
        document.getElementById(
            "selectedSubjects"
        );


    if (!box) {
        return;
    }


    const subjects =
        plannerState.selectedSubjects;


    /*
       NOTHING SELECTED
    */

    if (!subjects.length) {

        box.innerHTML = `

            <div class="selection-empty">

                📚

                <p>
                    No subjects selected yet.
                </p>

                <small>
                    Choose a subject above to add it
                    to your Advanced Study Plan.
                </small>

            </div>

        `;

        return;

    }


    /*
       DISPLAY CURRENT SUBJECTS
    */

    box.innerHTML =
        subjects
            .map(
                subject => `

                    <div
                        class="selected-subject-item"
                    >

                        <span class="selected-subject-icon">
                            ${getSubjectIcon(subject)}
                        </span>

                        <strong>
                            ${escapeHTML(subject)}
                        </strong>

                        <button
                            type="button"
                            class="remove-selected-subject"
                            data-remove-subject="${escapeHTML(subject)}"
                            aria-label="Remove ${escapeHTML(subject)}"
                        >
                            ×
                        </button>

                    </div>

                `
            )
            .join("");


    /*
       REMOVE BUTTONS
    */

    box
        .querySelectorAll(
            "[data-remove-subject]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const subject =
                        button.dataset.removeSubject;


                    const index =
                        plannerState.selectedSubjects
                            .indexOf(subject);


                    if (index !== -1) {

                        plannerState.selectedSubjects
                            .splice(index, 1);

                    }


                    /*
                       Update immediately.
                       No full-page rebuild.
                    */

                    if (plannerState.generated) {

                        plannerState.generatedPlan =
                            generateSchedule();

                    }


                    savePlannerState();

                    updateSubjectSelectionUI();
                    updateSummary();
                    renderPriority();
                    renderAllocation();
                    renderGeneratedPlan();
                    renderWeeklyPlan();
                    renderInsights();

                }
            );

        });

}


/* =====================================================
   SUBJECT ICONS
===================================================== */

function getSubjectIcon(subject) {

    const icons = {

        "Mathematics": "📐",
        "English": "📖",
        "Physics": "⚡",
        "Chemistry": "🧪",
        "Biology": "🧬",
        "Geography": "🌍",
        "Computer": "💻",
        "Government": "🏛️",
        "Economics": "📈",
        "History": "🏺",
        "Literature": "📚",
        "Civic Education": "🤝",
        "Commerce": "💼",
        "Principles of Accounts": "🧮"

    };

    return icons[subject] || "📚";

}


    /* =====================================================
       DATE HELPERS
    ===================================================== */

    function getLocalDateString(
        date = new Date()
    ) {

        const year =
            date.getFullYear();

        const month =
            String(
                date.getMonth() + 1
            ).padStart(
                2,
                "0"
            );

        const day =
            String(
                date.getDate()
            ).padStart(
                2,
                "0"
            );

        return `${year}-${month}-${day}`;

    }


    function parseDate(
        dateString
    ) {

        return new Date(
            `${dateString}T00:00:00`
        );

    }


    function formatDate(
        dateString
    ) {

        const date =
            parseDate(dateString);

        return date.toLocaleDateString(
            undefined,
            {
                weekday: "long",
                month: "short",
                day: "numeric"
            }
        );

    }


    function addDays(
        date,
        amount
    ) {

        const result =
            new Date(date);

        result.setDate(
            result.getDate() + amount
        );

        return result;

    }


    function daysBetween(
        first,
        second
    ) {

        const oneDay =
            1000 *
            60 *
            60 *
            24;

        return Math.round(
            (
                second.getTime() -
                first.getTime()
            ) /
            oneDay
        );

    }


    /* =====================================================
       EXAM COUNTDOWN
    ===================================================== */

    function updateExamCountdown() {

        if (!daysUntilExam) {
            return;
        }


        if (!plannerState.examDate) {

            daysUntilExam.textContent =
                "No exam date selected";

            return;

        }


        const today =
            parseDate(
                getLocalDateString()
            );

        const exam =
            parseDate(
                plannerState.examDate
            );


        const days =
            daysBetween(
                today,
                exam
            );


        if (days > 1) {

            daysUntilExam.textContent =
                `${days} days remaining`;

        }

        else if (days === 1) {

            daysUntilExam.textContent =
                "1 day remaining";

        }

        else if (days === 0) {

            daysUntilExam.textContent =
                "Exam is today";

        }

        else {

            daysUntilExam.textContent =
                "Exam date has passed";

        }

    }


    updateExamCountdown();


    /* =====================================================
       STUDY TIME FORMAT
    ===================================================== */

    function formatStudyTime(
        minutes
    ) {

        minutes =
            Number(minutes) || 0;


        if (minutes < 60) {

            return `${minutes} minutes`;

        }


        if (
            minutes %
            60 ===
            0
        ) {

            const hours =
                minutes / 60;

            return `${hours} ${
                hours === 1
                    ? "hour"
                    : "hours"
            }`;

        }


        return `${Math.floor(
            minutes / 60
        )}h ${
            minutes % 60
        }m`;

    }


    /* =====================================================
       AVAILABLE STUDY DAYS
    ===================================================== */

    function getStudyDates() {

        const today =
            parseDate(
                getLocalDateString()
            );


        /*
           No exam date:
           Create today's plan only.

           This prevents the planner from inventing
           weeks of sessions when the student has not
           provided an exam date.
        */

        if (!plannerState.examDate) {

            return [
                getLocalDateString()
            ];

        }


        const exam =
            parseDate(
                plannerState.examDate
            );


        const difference =
            daysBetween(
                today,
                exam
            );


        /*
           Exam today or already passed.
        */

        if (difference <= 0) {

            return [];

        }


        /*
           IMPORTANT:
           Stop one day BEFORE the exam.
        */

        const numberOfStudyDays =
            Math.max(
                1,
                difference
            );


        const dates = [];


        for (
            let i = 0;
            i < numberOfStudyDays;
            i++
        ) {

            const date =
                addDays(
                    today,
                    i
                );

            dates.push(
                getLocalDateString(
                    date
                )
            );

        }


        return dates;

    }


    /* =====================================================
       SUBJECT PRIORITY
    ===================================================== */

    function getSubjectWeight(
        subject,
        index
    ) {

        /*
           At this stage we don't invent fake scores.

           Every selected subject gets a fair base weight.

           The planner can later use actual StudyMate
           performance data if available.
        */

        return 1;

    }


    /* =====================================================
       CREATE DAILY SESSIONS
    ===================================================== */

    function generateSchedule() {

        const subjects =
            plannerState.selectedSubjects
                .filter(Boolean);


        const dates =
            getStudyDates();


        if (
            !subjects.length ||
            !dates.length
        ) {

            return [];

        }


        const minutes =
            Number(
                plannerState.dailyMinutes
            ) || 60;


        const schedule = [];


        /*
           Rotate subjects across the available days.

           Example:

           Monday    Mathematics
           Tuesday   English
           Wednesday Physics
           Thursday  Mathematics
           Friday    English

           The number of sessions is based on the
           selected daily study time.
        */

        dates.forEach(
            (date, dayIndex) => {

                const subject =
                    subjects[
                        dayIndex %
                        subjects.length
                    ];


                schedule.push({

                    id:
                        `${date}_${dayIndex}_${subject}`,

                    date:

                        date,

                    subject:

                        subject,

                    minutes:

                        minutes,

                    reminderTime:

                        plannerState.reminderTime,

                    sessionType:

                        getSessionType(
                            dayIndex,
                            dates.length
                        )

                });

            }
        );


        return schedule;

    }


    /* =====================================================
       SESSION TYPE
    ===================================================== */

    function getSessionType(
        dayIndex,
        totalDays
    ) {

        if (
            totalDays <= 1
        ) {

            return "Focused Study";

        }


        if (
            dayIndex >=
            totalDays - 3
        ) {

            return "Revision";

        }


        if (
            dayIndex %
            3 ===
            2
        ) {

            return "Practice & Review";

        }


        return "Focused Study";

    }


    /* =====================================================
       GENERATE PLAN BUTTON
    ===================================================== */

    if (generateBtn) {

        generateBtn.addEventListener(
            "click",
            () => {

                generateAndDisplayPlan();

            }
        );

    }


    function generateAndDisplayPlan() {

        if (
            plannerState.selectedSubjects
                .length === 0
        ) {

            showMessage(
                "Please select at least one subject before generating your study plan."
            );

            return;

        }


        if (
            plannerState.examDate &&
            getStudyDates().length === 0
        ) {

            showMessage(
                "Your exam date has already arrived. Please choose a future exam date."
            );

            return;

        }


        plannerState.generatedPlan =
            generateSchedule();

        plannerState.generated =
            true;


        savePlannerState();

        renderEverything();


        if (generatedSection) {

            generatedSection.hidden =
                false;


            setTimeout(
                () => {

                    generatedSection.scrollIntoView(
                        {
                            behavior: "smooth",
                            block: "start"
                        }
                    );

                },
                100
            );

        }

    }


    /* =====================================================
       REBUILD WHEN INPUTS CHANGE
    ===================================================== */

function rebuildPlanner() {

    updateExamCountdown();

    if (plannerState.generated) {

        plannerState.generatedPlan =
            generateSchedule();

    }

    savePlannerState();

    renderEverything();

}

    /* =====================================================
       RENDER EVERYTHING
    ===================================================== */

    function renderEverything() {

        updateExamCountdown();

        updateTimeButtons();

        updateSummary();

        renderPriority();

        renderAllocation();

        renderGeneratedPlan();

        renderWeeklyPlan();

        renderInsights();

        updateSubjectSelectionUI();

    }


    /* =====================================================
       SUMMARY
    ===================================================== */

    function updateSummary() {

        if (recommendedTime) {

            recommendedTime.textContent =
                formatStudyTime(
                    plannerState.dailyMinutes
                );

        }


        if (!planSummaryText) {
            return;
        }


        const subjects =
            plannerState.selectedSubjects;


        if (!subjects.length) {

            planSummaryText.textContent =
                "Select the subjects you want StudyMate to include in your plan.";

            return;

        }


        if (
            plannerState.examDate
        ) {

            const dates =
                getStudyDates();

            planSummaryText.textContent =
                `${subjects.length} selected subject${
                    subjects.length === 1
                        ? ""
                        : "s"
                } will be distributed across ${
                    dates.length
                } study day${
                    dates.length === 1
                        ? ""
                        : "s"
                } before your exam.`;

            return;

        }


        planSummaryText.textContent =
            `${subjects.length} selected subject${
                subjects.length === 1
                    ? ""
                    : "s"
            } will be included in your study plan.`;

    }


    /* =====================================================
       PRIORITY
    ===================================================== */

    function renderPriority() {

        if (!priorityList) {
            return;
        }


        const subjects =
            plannerState.selectedSubjects;


        if (!subjects.length) {

            priorityList.innerHTML = `

                <div class="priority-empty">

                    📊

                    <p>
                        Select your subjects to see
                        your study priorities.
                    </p>

                </div>

            `;

            return;

        }


        priorityList.innerHTML =
            subjects
                .map(
                    (subject, index) => `

                        <div
                            class="priority-item"
                        >

                            <span>
                                ${index === 0
                                    ? "🔵"
                                    : "🟢"}
                            </span>

                            <div>

                                <strong>
                                    ${escapeHTML(
                                        subject
                                    )}
                                </strong>

                                <small>
                                    ${
                                        index === 0
                                            ? "Primary study focus"
                                            : "Included in your study rotation"
                                    }
                                </small>

                            </div>

                        </div>

                    `
                )
                .join("");

    }


    /* =====================================================
       TIME ALLOCATION
    ===================================================== */

    function renderAllocation() {

        if (!allocationList) {
            return;
        }


        const subjects =
            plannerState.selectedSubjects;


        if (!subjects.length) {

            allocationList.innerHTML = `

                <div class="allocation-empty">

                    🧮

                    <p>
                        Select subjects to see your
                        smart time allocation.
                    </p>

                </div>

            `;

            return;

        }


        const minutes =
            plannerState.dailyMinutes;


        const each =
            Math.floor(
                minutes /
                subjects.length
            );


        let remainder =
            minutes %
            subjects.length;


        allocationList.innerHTML =
            subjects
                .map(
                    subject => {

                        let allocated =
                            each;

                        if (remainder > 0) {

                            allocated += 1;

                            remainder--;

                        }


                        return `

                            <div
                                class="allocation-item"
                            >

                                <span>
                                    ${getSubjectIcon(
                                        subject
                                    )}
                                </span>

                                <div>

                                    <strong>
                                        ${escapeHTML(
                                            subject
                                        )}
                                    </strong>

                                    <small>
                                        ${allocated} min today
                                    </small>

                                </div>

                            </div>

                        `;

                    }
                )
                .join("");

    }


    /* =====================================================
       GENERATED PLAN
    ===================================================== */
    function renderGeneratedPlan() {

        if (!generatedPlan) {
            return;
        }


        const plan =
            plannerState.generatedPlan || [];


        if (!plannerState.generated) {

            generatedPlan.innerHTML = `

                <div class="generated-empty">

                    <span>✨</span>

                    <h3>
                        Your plan is ready to create
                    </h3>

                    <p>
                        Select your subjects and press
                        Generate My Study Plan.
                    </p>

                </div>

            `;

            return;

        }


        if (!plan.length) {

            generatedPlan.innerHTML = `

                <div class="generated-empty">

                    <span>📚</span>

                    <h3>
                        No study sessions available
                    </h3>

                    <p>
                        Check your subjects and exam date.
                    </p>

                </div>

            `;

            return;

        }


        generatedPlan.innerHTML =
            plan
                .map(
                    (session, index) => `

                        <div
                            class="generated-session-card"
                        >

                            <div
                                class="session-number"
                            >
                                ${index + 1}
                            </div>

                            <div
                                class="session-content"
                            >

                                <h3>
                                    ${getSubjectIcon(
                                        session.subject
                                    )}
                                    ${escapeHTML(
                                        session.subject
                                    )}
                                </h3>

                                <p>
                                    ${escapeHTML(
                                        session.sessionType
                                    )}
                                </p>

                                <div
                                    class="session-meta"
                                >

                                    <span>
                                        📅
                                        ${formatDate(
                                            session.date
                                        )}
                                    </span>

                                    <span>
                                        ⏱️
                                        ${session.minutes} min
                                    </span>

                                    <span>
                                        🔔
                                        ${formatTime(
                                            session.reminderTime
                                        )}
                                    </span>

                                </div>

                                <button
                                    type="button"
                                    class="planner-start-learning"
                                    data-action="advanced-start"
                                    data-subject="${escapeHTML(
                                        session.subject
                                    )}"
                                >
                                    ▶️ Start Learning
                                </button>

                            </div>

                        </div>

                    `
                )
                .join("");

    }


    /* =====================================================
       WEEKLY OVERVIEW
    ===================================================== */

    function renderWeeklyPlan() {

        if (!weeklyPlan) {
            return;
        }


        const plan =
            plannerState.generatedPlan || [];


        if (!plan.length) {

            weeklyPlan.innerHTML = `

                <div class="weekly-empty">

                    🗓️

                    <p>
                        Your schedule will appear here
                        after you generate your plan.
                    </p>

                </div>

            `;

            return;

        }


        const grouped = {};


        plan.forEach(
            session => {

                if (
                    !grouped[
                        session.date
                    ]
                ) {

                    grouped[
                        session.date
                    ] = [];

                }

                grouped[
                    session.date
                ].push(session);

            }
        );


        weeklyPlan.innerHTML =
            Object.entries(grouped)
                .map(
                    ([date, sessions]) => `

                        <div
                            class="weekly-day"
                        >

                            <strong>
                                ${formatDate(
                                    date
                                )}
                            </strong>

                            <small>
                                ${
                                    sessions
                                        .map(
                                            item =>
                                                escapeHTML(
                                                    item.subject
                                                )
                                        )
                                        .join(
                                            " • "
                                        )
                                }
                            </small>

                        </div>

                    `
                )
                .join("");

    }


    /* =====================================================
       INSIGHTS
    ===================================================== */

    function renderInsights() {

        if (!insightsBox) {
            return;
        }


        const subjects =
            plannerState.selectedSubjects;


        const plan =
            plannerState.generatedPlan || [];


        if (!subjects.length) {

            insightsBox.innerHTML = `

                <div class="insight-empty">

                    💡

                    <p>
                        Select your subjects and StudyMate
                        will generate planning insights.
                    </p>

                </div>

            `;

            return;

        }


        const examMessage =
            plannerState.examDate
                ? `Your exam timeline is being used to organize ${
                    plan.length
                } study session${
                    plan.length === 1
                        ? ""
                        : "s"
                }.`
                : "No exam date is set, so StudyMate is using a flexible study plan.";


        insightsBox.innerHTML = `

            <div class="insight-item">

                <span>🧠</span>

                <div>

                    <strong>
                        Smart planning
                    </strong>

                    <p>
                        ${escapeHTML(
                            examMessage
                        )}
                    </p>

                </div>

            </div>


            <div class="insight-item">

                <span>⏰</span>

                <div>

                    <strong>
                        Reminder
                    </strong>

                    <p>
                        Your selected reminder time is
                        ${escapeHTML(
                            formatTime(
                                plannerState.reminderTime
                            )
                        )}.
                    </p>

                </div>

            </div>

        `;

    }


    /* =====================================================
       START LEARNING
    ===================================================== */

    function startLearning(
        subject
    ) {
      /* RECORD STUDY ACTIVITY FOR STREAK */

if (
    window.StudyMateStreak &&
    typeof window.StudyMateStreak.recordStudyActivity === "function"
) {
    window.StudyMateStreak.recordStudyActivity();
}

        const subjectPages = {

            "Mathematics":
                "mathematics.html",

            "English":
                "english.html",

            "Physics":
                "physics.html",

            "Chemistry":
                "chemistry.html",

            "Biology":
                "biology.html",

            "Geography":
                "geography.html",

            "Computer":
                "computer.html",

            "Government":
                "government.html",

            "Economics":
                "economics.html",

            "History":
                "history.html",

            "Literature":
                "literature.html",

            "Civic Education":
                "civiceducation.html",

            "Commerce":
                "commerce.html",

            "Principles of Accounts":
                "accounts.html"

        };


        const page =
            subjectPages[
                subject
            ];


        if (!page) {

            alert(
                `The ${subject} lesson page is not connected yet.`
            );

            return;

        }


        window.location.href =
            page;

    }


    /* =====================================================
       GENERATED PLAN BUTTON EVENTS
    ===================================================== */

    if (generatedPlan) {

        generatedPlan.addEventListener(
            "click",
            event => {

                const button =
                    event.target.closest(
                        "[data-action='advanced-start']"
                    );

                if (!button) {
                    return;
                }


                startLearning(
                    button.dataset.subject
                );

            }
        );

    }


/* =====================================================
   PLAN ADJUSTMENT
===================================================== */

if (adjustPlanBtn) {

    adjustPlanBtn.addEventListener(
        "click",
        () => {

            /*
               There must be at least one subject.
            */

            if (
                !plannerState.selectedSubjects.length
            ) {

                showMessage(
                    "Select at least one subject before adjusting your plan."
                );

                return;

            }


            /*
               Generate a completely fresh schedule
               from the CURRENT settings.

               This means removed subjects disappear.
               Newly added subjects are included.
            */

            plannerState.generatedPlan =
                generateSchedule();


            plannerState.generated =
                true;


            savePlannerState();


            /*
               Update the visible planner.
            */

            renderEverything();


            /*
               Make sure the generated plan is visible.
            */

            if (generatedSection) {

                generatedSection.hidden =
                    false;


                generatedSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }


            showMessage(
                "Your study plan has been adjusted using your current subjects, study time, exam date and reminder time."
            );

        }
    );

}

    /* =====================================================
       RESET GENERATED PLAN WHEN SUBJECT CHANGES
    ===================================================== */

    /*
       This is intentionally NOT a permanent-history
       system.

       The generated schedule always reflects the
       current selected subjects.
    */

    function clearGeneratedPlan() {

        plannerState.generatedPlan = [];

        plannerState.generated = false;

        savePlannerState();

        renderEverything();

    }


    /* =====================================================
       REMINDER SYSTEM
    ===================================================== */

    function checkAdvancedReminder() {

        if (
            !plannerState.generated ||
            !plannerState.generatedPlan.length
        ) {
            return;
        }


        const now =
            new Date();


        const today =
            getLocalDateString(
                now
            );


        const currentTime =
            `${String(
                now.getHours()
            ).padStart(2, "0")}:${String(
                now.getMinutes()
            ).padStart(2, "0")}`;


        const todaySessions =
            plannerState.generatedPlan
                .filter(
                    session =>
                        session.date ===
                        today
                );


        if (!todaySessions.length) {
            return;
        }


        if (
            currentTime !==
            plannerState.reminderTime
        ) {
            return;
        }


        const reminderKey =
            `studyMateAdvancedReminder_${today}_${currentTime}`;


        if (
            localStorage.getItem(
                reminderKey
            )
        ) {
            return;
        }


        localStorage.setItem(
            reminderKey,
            "shown"
        );


        const subjects =
            todaySessions
                .map(
                    session =>
                        session.subject
                )
                .join(", ");


        showBrowserNotification(
            "📚 StudyMate Advanced Planner",
            `It's time to study: ${subjects}.`
        );

    }


    function showBrowserNotification(
        title,
        body
    ) {

        if (
            "Notification" in window &&
            Notification.permission ===
                "granted"
        ) {

            try {

                new Notification(
                    title,
                    {
                        body,
                        icon:
                            "icon-192.png"
                    }
                );

            } catch (error) {

                console.warn(
                    "Could not show notification.",
                    error
                );

            }

        }

    }


    /* =====================================================
       REQUEST NOTIFICATION PERMISSION
    ===================================================== */
    function requestNotificationPermission() {

        if (
            !("Notification" in window)
        ) {
            return;
        }


        if (
            Notification.permission ===
            "default"
        ) {

            Notification.requestPermission()
                .catch(
                    () => {}
                );

        }

    }


    /* =====================================================
       MESSAGE
    ===================================================== */

    function showMessage(
        message
    ) {

        /*
           Use a simple alert for now so this works
           without requiring another HTML component.
        */

        alert(
            `StudyMate\n\n${message}`
        );

    }


    /* =====================================================
       FORMAT TIME
    ===================================================== */

    function formatTime(
        time
    ) {

        if (!time) {
            return "Not set";
        }


        const parts =
            time.split(":");


        let hour =
            Number(
                parts[0]
            );


        const minute =
            parts[1] ||
            "00";


        const period =
            hour >= 12
                ? "PM"
                : "AM";


        hour =
            hour % 12 ||
            12;


        return `${hour}:${minute} ${period}`;

    }


    /* =====================================================
       SAFE HTML
    ===================================================== */

    function escapeHTML(
        value
    ) {

        return String(
            value
        )
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }


    /* =====================================================
       REMINDER CHECK
    ===================================================== */

    setInterval(
        checkAdvancedReminder,
        30000
    );


    checkAdvancedReminder();


    /* =====================================================
       INITIAL RENDER
    ===================================================== */

    renderEverything();


    /* =====================================================
       INITIAL NOTIFICATION REQUEST
    ===================================================== */

    if (
        plannerState.generated
    ) {

        /*
           Ask only after the user already has a generated
           planner. This avoids immediately asking for
           notification permission when the page first opens.
        */

        setTimeout(
            requestNotificationPermission,
            1500
        );

    }


    /* =====================================================
       PUBLIC API
    ===================================================== */

    window.studyMateAdvancedPlanner = {

        state:
            plannerState,

        subjects:
            availableSubjects,

        generate:
            generateAndDisplayPlan,

        rebuild:
            rebuildPlanner,

        clear:
            clearGeneratedPlan,

        getSchedule:
            () =>
                plannerState.generatedPlan,

        startLearning:
            startLearning

    };


    console.log(
        "StudyMate Advanced Planner loaded successfully."
    );

});