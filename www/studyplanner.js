/* =========================================================
   STUDYMATE STUDY PLANNER
   CLEAN + STABLE OFFLINE PLANNER
   + STUDY STREAK CONNECTION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       STORAGE
    ===================================================== */

    const STORAGE_KEY =
        "studymateStudyPlannerTasks";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const taskTitle =
        document.getElementById("taskTitle");

    const taskSubject =
        document.getElementById("taskSubject");

    const taskDate =
        document.getElementById("taskDate");

    const taskTime =
        document.getElementById("taskTime");

    const taskDuration =
        document.getElementById("taskDuration");

    const addStudyTaskBtn =
        document.getElementById("addStudyTaskBtn");

    const todayTasks =
        document.getElementById("todayTasks");

    const upcomingTasks =
        document.getElementById("upcomingTasks");

    const plannerToday =
        document.getElementById("plannerToday");

    const progressPercentage =
        document.getElementById(
            "plannerProgressPercentage"
        );

    const progressFill =
        document.getElementById(
            "plannerProgressFill"
        );

    const progressText =
        document.getElementById(
            "plannerProgressText"
        );

    const advancedPlannerBtn =
        document.getElementById(
            "advancedPlannerBtn"
        );


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
            ).padStart(2, "0");

        const day =
            String(
                date.getDate()
            ).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }


    function getTomorrowDateString() {

        const tomorrow =
            new Date();

        tomorrow.setDate(
            tomorrow.getDate() + 1
        );

        return getLocalDateString(
            tomorrow
        );
    }


    function formatDate(
        dateString
    ) {

        if (!dateString) {
            return "";
        }

        const date =
            new Date(
                `${dateString}T00:00:00`
            );

        if (
            Number.isNaN(
                date.getTime()
            )
        ) {
            return "";
        }

        return date.toLocaleDateString(
            undefined,
            {
                weekday: "short",
                month: "short",
                day: "numeric"
            }
        );
    }


    function formatTodayHeader() {

        if (!plannerToday) {
            return;
        }

        const today =
            new Date();

        plannerToday.textContent =
            today.toLocaleDateString(
                undefined,
                {
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                }
            );
    }


    function formatTime(time) {

        if (!time) {
            return "Any time";
        }

        const parts =
            time.split(":");

        let hour =
            Number(parts[0]);

        const minute =
            parts[1] || "00";

        const period =
            hour >= 12
                ? "PM"
                : "AM";

        hour =
            hour % 12 || 12;

        return `${hour}:${minute} ${period}`;
    }


    /* =====================================================
       STORAGE
    ===================================================== */

    function getTasks() {

        try {

            const saved =
                localStorage.getItem(
                    STORAGE_KEY
                );

            if (!saved) {
                return [];
            }

            const tasks =
                JSON.parse(saved);

            if (
                !Array.isArray(tasks)
            ) {
                return [];
            }

            return tasks;

        } catch (error) {

            console.error(
                "StudyMate: Could not load study tasks.",
                error
            );

            return [];
        }
    }


    function saveTasks(tasks) {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(tasks)
            );

            return true;

        } catch (error) {

            console.error(
                "StudyMate: Could not save study tasks.",
                error
            );

            alert(
                "StudyMate could not save your study plan on this device."
            );

            return false;
        }
    }


    /* =====================================================
       SAFE HTML
    ===================================================== */

    function escapeHTML(value) {

        return String(value)
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
       SORTING
    ===================================================== */

    function sortTasks(a, b) {

        const dateA =
            `${a.date} ${a.time || "23:59"}`;

        const dateB =
            `${b.date} ${b.time || "23:59"}`;

        return dateA.localeCompare(
            dateB
        );
    }


    /* =====================================================
       NOTIFICATIONS
    ===================================================== */

    async function requestNotificationPermission() {

        if (
            !("Notification" in window)
        ) {
            return false;
        }

        if (
            Notification.permission ===
            "granted"
        ) {
            return true;
        }

        if (
            Notification.permission ===
            "denied"
        ) {
            return false;
        }

        try {

            const permission =
                await Notification.requestPermission();

            return permission ===
                "granted";

        } catch (error) {

            console.warn(
                "StudyMate notification permission error:",
                error
            );

            return false;
        }
    }


    /* =====================================================
       ADD TASK
    ===================================================== */

    function addTask() {

        const title =
            taskTitle
                ? taskTitle.value.trim()
                : "";

        const subject =
            taskSubject
                ? taskSubject.value
                : "";

        const date =
            taskDate
                ? taskDate.value
                : "";

        const time =
            taskTime
                ? taskTime.value
                : "";

        const duration =
            taskDuration
                ? Number(
                    taskDuration.value
                ) || 30
                : 30;


        if (!title) {

            alert(
                "Please enter what you want to study."
            );

            if (taskTitle) {
                taskTitle.focus();
            }

            return;
        }


        if (!subject) {

            alert(
                "Please select a subject."
            );

            if (taskSubject) {
                taskSubject.focus();
            }

            return;
        }


        if (!date) {

            alert(
                "Please choose a study date."
            );

            if (taskDate) {
                taskDate.focus();
            }

            return;
        }


        const tasks =
            getTasks();


        const newTask = {

            id:
                `${Date.now()}_${Math.random()
                    .toString(36)
                    .slice(2)}`,

            title:
                title,

            subject:
                subject,

            date:
                date,

            time:
                time,

            duration:
                duration,

            completed:
                false,

            completedAt:
                null,

            createdAt:
                new Date().toISOString()

        };


        tasks.push(
            newTask
        );


        if (
            !saveTasks(tasks)
        ) {
            return;
        }


        if (time) {
            requestNotificationPermission();
        }


        if (taskTitle) {
            taskTitle.value = "";
        }

        if (taskSubject) {
            taskSubject.value = "";
        }

        if (taskDate) {
            taskDate.value =
                getTomorrowDateString();
        }

        if (taskTime) {
            taskTime.value = "";
        }

        if (taskDuration) {
            taskDuration.value = "30";
        }


        renderPlanner();


        alert(
            "✅ Study task added successfully!"
        );
    }


    /* =====================================================
       TOGGLE COMPLETE
    ===================================================== */

    function toggleTask(taskId) {

        const tasks =
            getTasks();


        const task =
            tasks.find(
                item =>
                    String(item.id) ===
                    String(taskId)
            );


        if (!task) {
            return;
        }


        /*
           Remember the old state.
           This prevents the streak from being
           triggered when a completed task is
           simply marked incomplete.
        */

        const wasCompleted =
            task.completed;


        task.completed =
            !task.completed;


        task.completedAt =
            task.completed
                ? new Date().toISOString()
                : null;


        if (
            !saveTasks(tasks)
        ) {
            return;
        }


        /* =================================================
           STUDY STREAK CONNECTION

           ONLY record streak activity when the task
           changes from incomplete → completed.

           The streak engine itself prevents multiple
           streak increases on the same day.
        ================================================= */

        if (
            !wasCompleted &&
            task.completed &&
            window.StudyMateStreak &&
            typeof
                window.StudyMateStreak
                    .recordStudyActivity ===
                "function"
        ) {

            window.StudyMateStreak
                .recordStudyActivity();

        }


        renderPlanner();

    }


    /* =====================================================
       DELETE TASK
    ===================================================== */

    function deleteTask(taskId) {

        const tasks =
            getTasks();


        const taskExists =
            tasks.some(
                task =>
                    String(task.id) ===
                    String(taskId)
            );


        if (!taskExists) {
            return;
        }


        const shouldDelete =
            confirm(
                "Delete this study task?"
            );


        if (!shouldDelete) {
            return;
        }


        const remainingTasks =
            tasks.filter(
                task =>
                    String(task.id) !==
                    String(taskId)
            );


        if (
            !saveTasks(
                remainingTasks
            )
        ) {
            return;
        }


        renderPlanner();

    }


    /* =====================================================
       TASK HTML
    ===================================================== */

    function createTaskHTML(task) {

        const completedClass =
            task.completed
                ? " completed"
                : "";


        const duration =
            Number(
                task.duration
            ) || 30;


        return `

            <div
                class="planner-task${completedClass}"
                data-task-id="${escapeHTML(task.id)}"
            >

                <button
                    type="button"
                    class="planner-task-check"
                    data-action="complete"
                    aria-label="${
                        task.completed
                            ? "Mark task incomplete"
                            : "Mark task complete"
                    }"
                >
                    ${
                        task.completed
                            ? "✓"
                            : "○"
                    }
                </button>


                <div
                    class="planner-task-content"
                >

                    <h3>
                        ${escapeHTML(
                            task.title
                        )}
                    </h3>

                    <p>
                        📚 ${escapeHTML(
                            task.subject
                        )}
                    </p>

                    <small>
                        📅 ${formatDate(
                            task.date
                        )}
                        ·
                        ⏰ ${formatTime(
                            task.time
                        )}
                        ·
                        ⏱️ ${duration} min
                    </small>


                    ${
                        task.completed

                            ? `

                                <div
                                    class="planner-task-status"
                                >
                                    ✅ Completed
                                </div>

                            `

                            : `

                                <button
                                    type="button"
                                    class="planner-start-learning"
                                    data-action="start-learning"
                                    data-subject="${escapeHTML(
                                        task.subject
                                    )}"
                                >
                                    ▶️ Start Learning
                                </button>

                            `
                    }

                </div>


                <button
                    type="button"
                    class="planner-task-delete"
                    data-action="delete"
                    aria-label="Delete study task"
                    title="Delete this study task"
                >
                    🗑️
                </button>

            </div>

        `;
    }


    /* =====================================================
       TODAY'S TASKS
    ===================================================== */

    function renderTodayTasks(tasks) {

        if (!todayTasks) {
            return;
        }


        const today =
            getLocalDateString();


        const todayList =
            tasks
                .filter(
                    task =>
                        task.date === today
                )
                .sort(sortTasks);


        if (
            !todayList.length
        ) {

            todayTasks.innerHTML = `

                <div class="planner-empty">

                    <span>
                        📖
                    </span>

                    <p>
                        No study tasks for today.
                    </p>

                    <small>
                        Add a study task for today
                        to see it here.
                    </small>

                </div>

            `;

            return;
        }


        todayTasks.innerHTML =
            todayList
                .map(
                    createTaskHTML
                )
                .join("");
    }


    /* =====================================================
       UPCOMING TASKS
    ===================================================== */

    function renderUpcomingTasks(
        tasks
    ) {

        if (!upcomingTasks) {
            return;
        }


        const today =
            getLocalDateString();


        const upcoming =
            tasks
                .filter(
                    task =>
                        task.date > today
                )
                .sort(sortTasks)
                .slice(0, 10);


        if (
            !upcoming.length
        ) {

            upcomingTasks.innerHTML = `

                <div class="planner-empty">

                    <span>
                        🗓️
                    </span>

                    <p>
                        No upcoming study tasks.
                    </p>

                    <small>
                        Add a future study task
                        to see it here.
                    </small>

                </div>

            `;

            return;
        }


        upcomingTasks.innerHTML =
            upcoming
                .map(
                    createTaskHTML
                )
                .join("");
    }


    /* =====================================================
       DAILY PLAN PROGRESS
    ===================================================== */

    function updateDailyProgress(
        tasks
    ) {

        if (
            !progressPercentage ||
            !progressFill ||
            !progressText
        ) {
            return;
        }


        const today =
            getLocalDateString();


        const todayList =
            tasks.filter(
                task =>
                    task.date === today
            );


        const total =
            todayList.length;


        const completed =
            todayList.filter(
                task =>
                    task.completed
            ).length;


        const percentage =
            total > 0
                ? Math.round(
                    (
                        completed /
                        total
                    ) * 100
                )
                : 0;


        progressPercentage.textContent =
            `${percentage}%`;


        progressFill.style.width =
            `${percentage}%`;


        if (!total) {

            progressText.textContent =
                "No study tasks planned for today.";

            return;
        }


        if (
            completed === total
        ) {

            progressText.textContent =
                `🎉 Amazing! You completed all ${total} study ${
                    total === 1
                        ? "plan"
                        : "plans"
                } today.`;

            return;
        }


        if (
            completed > 0
        ) {

            const remaining =
                total - completed;


            progressText.textContent =
                `💪 ${completed} of ${total} study ${
                    total === 1
                        ? "plan"
                        : "plans"
                } completed. ${remaining} remaining.`;

            return;
        }


        progressText.textContent =
            `📚 0 of ${total} study ${
                total === 1
                    ? "plan"
                    : "plans"
            } completed.`;
    }


    /* =====================================================
       START LEARNING
    ===================================================== */

    function startLearning(
        subject
    ) {

        if (!subject) {
            return;
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
                `${subject} lesson page is not connected yet.`
            );

            return;
        }


        window.location.href =
            page;
    }


    /* =====================================================
       TASK BUTTON EVENTS
    ===================================================== */

    function handleTaskAction(
        event
    ) {

        const button =
            event.target.closest(
                "button[data-action]"
            );


        if (!button) {
            return;
        }


        const taskElement =
            button.closest(
                "[data-task-id]"
            );


        if (!taskElement) {
            return;
        }


        const taskId =
            taskElement.dataset.taskId;


        const action =
            button.dataset.action;


        if (
            action === "complete"
        ) {

            toggleTask(
                taskId
            );

            return;
        }


        if (
            action === "delete"
        ) {

            deleteTask(
                taskId
            );

            return;
        }


        if (
            action === "start-learning"
        ) {

            startLearning(
                button.dataset.subject
            );

        }
    }


    /* =====================================================
       RENDER EVERYTHING
    ===================================================== */

    function renderPlanner() {

        const tasks =
            getTasks();


        renderTodayTasks(
            tasks
        );


        renderUpcomingTasks(
            tasks
        );


        updateDailyProgress(
            tasks
        );


        formatTodayHeader();

    }


    /* =====================================================
       REMINDER SYSTEM
    ===================================================== */

    function checkStudyReminders() {

        const tasks =
            getTasks();


        if (!tasks.length) {
            return;
        }


        const now =
            new Date();


        const today =
            getLocalDateString(
                now
            );


        const currentHour =
            now.getHours();


        const currentMinute =
            now.getMinutes();


        tasks.forEach(
            task => {

                if (
                    task.completed ||
                    !task.date ||
                    !task.time
                ) {
                    return;
                }


                if (
                    task.date !== today
                ) {
                    return;
                }


                const parts =
                    task.time.split(":");


                const taskHour =
                    Number(
                        parts[0]
                    );


                const taskMinute =
                    Number(
                        parts[1]
                    );


                if (
                    taskHour !==
                        currentHour ||
                    taskMinute !==
                        currentMinute
                ) {
                    return;
                }


                const reminderKey =
                    `studymateReminder_${task.id}_${task.date}_${task.time}`;


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


                const title =
                    "📚 StudyMate Study Reminder";


                const message =
                    `It's time to study ${task.subject} — ${task.title}.`;


                if (
                    "Notification" in window &&
                    Notification.permission ===
                        "granted"
                ) {

                    try {

                        new Notification(
                            title,
                            {
                                body:
                                    message,

                                icon:
                                    "icon-192.png",

                                tag:
                                    `studymate-${task.id}`
                            }
                        );

                    } catch (
                        error
                    ) {

                        console.warn(
                            "Could not display study reminder:",
                            error
                        );

                    }

                }


                console.log(
                    `🔔 ${title}: ${message}`
                );

            }
        );
    }


    /* =====================================================
       EVENTS
    ===================================================== */

    if (
        addStudyTaskBtn
    ) {

        addStudyTaskBtn.addEventListener(
            "click",
            addTask
        );

    }


    if (
        taskTitle
    ) {

        taskTitle.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    event.preventDefault();

                    addTask();

                }

            }
        );

    }


    if (
        todayTasks
    ) {

        todayTasks.addEventListener(
            "click",
            handleTaskAction
        );

    }


    if (
        upcomingTasks
    ) {

        upcomingTasks.addEventListener(
            "click",
            handleTaskAction
        );

    }


    /* =====================================================
       TOMORROW AS DEFAULT DATE
    ===================================================== */

    if (
        taskDate
    ) {

        taskDate.min =
            getLocalDateString();


        if (
            !taskDate.value
        ) {

            taskDate.value =
                getTomorrowDateString();

        }

    }


    /* =====================================================
       ADVANCED STUDY PLANNER
    ===================================================== */

    if (
        advancedPlannerBtn
    ) {

        advancedPlannerBtn.addEventListener(
            "click",
            () => {

                window.location.href =
                    "advancedstudyplanner.html";

            }
        );

    }


    /* =====================================================
       REMINDER CHECKER
    ===================================================== */

    setInterval(
        checkStudyReminders,
        30000
    );


    /* =====================================================
       REFRESH DISPLAY
    ===================================================== */

    setInterval(
        () => {

            renderPlanner();

        },
        60000
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    formatTodayHeader();

    renderPlanner();

    checkStudyReminders();


    console.log(
        "StudyMate Study Planner loaded successfully."
    );

});