/* =========================================================
   STUDYMATE NOTIFICATION ENGINE
   Reads from:
   - Normal Study Planner
   - Advanced Study Planner

   IMPORTANT:
   This file does NOT modify either planner.
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       STORAGE KEYS
    ===================================================== */

    const NORMAL_TASKS_KEY =
        "studymateStudyPlannerTasks";

    const ADVANCED_PLAN_KEY =
        "studyMateAdvancedPlannerState";

    const LAST_OPEN_KEY =
        "studymateLastAppOpen";

    const REMINDER_PREFIX =
        "studymateNotificationShown_";


    /* =====================================================
       GET TODAY
    ===================================================== */

    function getToday() {

        const now = new Date();

        const year =
            now.getFullYear();

        const month =
            String(
                now.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                now.getDate()
            ).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }


    /* =====================================================
       NOTIFICATION SUPPORT
    ===================================================== */

    function supportsNotifications() {

        return (
            "Notification" in window
        );

    }


    /* =====================================================
       REQUEST PERMISSION
    ===================================================== */

    async function requestPermission() {

        if (
            !supportsNotifications()
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

            return (
                permission ===
                "granted"
            );

        }

        catch (error) {

            console.warn(
                "StudyMate notification permission error:",
                error
            );

            return false;

        }

    }


    /* =====================================================
       SHOW NOTIFICATION
    ===================================================== */

    function showNotification(
        title,
        body,
        tag
    ) {

        if (
            !supportsNotifications()
        ) {

            return;

        }


        if (
            Notification.permission !==
            "granted"
        ) {

            return;

        }


        try {

            new Notification(
                title,
                {
                    body:
                        body,

                    icon:
                        "icon-192.png",

                    tag:
                        tag ||
                        "studymate-notification"
                }
            );

        }

        catch (error) {

            console.warn(
                "StudyMate notification could not be displayed:",
                error
            );

        }

    }


    /* =====================================================
       NORMAL PLANNER
    ===================================================== */

    function getNormalTasks() {

        try {

            const saved =
                localStorage.getItem(
                    NORMAL_TASKS_KEY
                );


            if (!saved) {

                return [];

            }


            const tasks =
                JSON.parse(
                    saved
                );


            return Array.isArray(tasks)
                ? tasks
                : [];

        }

        catch (error) {

            console.warn(
                "StudyMate could not read normal planner:",
                error
            );

            return [];

        }

    }


    /* =====================================================
       ADVANCED PLANNER
    ===================================================== */

    function getAdvancedPlan() {

        try {

            const saved =
                localStorage.getItem(
                    ADVANCED_PLAN_KEY
                );


            if (!saved) {

                return null;

            }


            const state =
                JSON.parse(
                    saved
                );


            if (
                !state ||
                typeof state !== "object"
            ) {

                return null;

            }


            return state;

        }

        catch (error) {

            console.warn(
                "StudyMate could not read advanced planner:",
                error
            );

            return null;

        }

    }


    /* =====================================================
       NORMAL STUDY REMINDERS
    ===================================================== */

    function checkNormalPlanner() {

        const tasks =
            getNormalTasks();


        if (!tasks.length) {

            return;

        }


        const now =
            new Date();


        const today =
            getToday();


        const currentHour =
            String(
                now.getHours()
            ).padStart(2, "0");


        const currentMinute =
            String(
                now.getMinutes()
            ).padStart(2, "0");


        const currentTime =
            `${currentHour}:${currentMinute}`;


        tasks.forEach(
            task => {

                if (
                    !task ||
                    task.completed ||
                    !task.date ||
                    !task.time
                ) {

                    return;

                }


                if (
                    task.date !==
                    today
                ) {

                    return;

                }


                if (
                    task.time !==
                    currentTime
                ) {

                    return;

                }


                const reminderKey =
                    `${REMINDER_PREFIX}normal_${task.id}_${today}_${currentTime}`;


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


                showNotification(
                    "📚 StudyMate Study Reminder",
                    `It's time to study ${task.subject} — ${task.title}.`,
                    `studymate-normal-${task.id}`
                );

            }
        );

    }


    /* =====================================================
       ADVANCED STUDY REMINDERS
    ===================================================== */

    function checkAdvancedPlanner() {

        const state =
            getAdvancedPlan();


        if (
            !state ||
            !state.generated ||
            !Array.isArray(
                state.generatedPlan
            )
        ) {

            return;

        }


        const now =
            new Date();


        const today =
            getToday();


        const currentTime =
            `${String(
                now.getHours()
            ).padStart(2, "0")}:${String(
                now.getMinutes()
            ).padStart(2, "0")}`;


        const sessions =
            state.generatedPlan.filter(
                session => {

                    return (
                        session &&
                        session.date ===
                            today &&
                        session.reminderTime ===
                            currentTime
                    );

                }
            );


        if (!sessions.length) {

            return;

        }


        const subjects =
            sessions
                .map(
                    session =>
                        session.subject
                )
                .filter(Boolean);


        const uniqueSubjects =
            [...new Set(subjects)];


        const reminderKey =
            `${REMINDER_PREFIX}advanced_${today}_${currentTime}`;


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


        showNotification(
            "📚 StudyMate Advanced Planner",
            `It's time to study: ${uniqueSubjects.join(", ")}.`,
            `studymate-advanced-${today}-${currentTime}`
        );

    }


    /* =====================================================
       STUDENT RETURN REMINDER
       
       If the student has not opened StudyMate
       for a complete day, show a friendly message
       the next time they return.
    ===================================================== */

    function checkStudentReturn() {

        const today =
            getToday();


        const lastOpen =
            localStorage.getItem(
                LAST_OPEN_KEY
            );


        /*
           First visit.
        */

        if (!lastOpen) {

            localStorage.setItem(
                LAST_OPEN_KEY,
                today
            );

            return;

        }


        /*
           Already opened today.
        */

        if (
            lastOpen ===
            today
        ) {

            return;

        }


        const lastDate =
            new Date(
                `${lastOpen}T00:00:00`
            );


        const todayDate =
            new Date(
                `${today}T00:00:00`
            );


        const difference =
            Math.floor(
                (
                    todayDate -
                    lastDate
                ) /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );


        /*
           Only show this after at least
           one complete day away.
        */

        if (
            difference >= 1
        ) {

            showNotification(
                "👋 Welcome back to StudyMate!",
                "Ready to continue your study journey today?",
                "studymate-welcome-back"
            );

        }


        localStorage.setItem(
            LAST_OPEN_KEY,
            today
        );

    }


    /* =====================================================
       START NOTIFICATION ENGINE
    ===================================================== */

    function start() {

        /*
           Do not automatically force the permission
           dialog here.

           The app/page can call requestPermission()
           from a clear user action or onboarding screen.
        */

        checkStudentReturn();

        checkNormalPlanner();

        checkAdvancedPlanner();


        /*
           Check regularly while StudyMate is open.
        */

        setInterval(
            () => {

                checkNormalPlanner();

                checkAdvancedPlanner();

            },
            30000
        );

    }


    /* =====================================================
       PUBLIC API
    ===================================================== */

    window.StudyMateNotifications = {

        requestPermission,

        checkNormalPlanner,

        checkAdvancedPlanner,

        checkStudentReturn,

        start

    };


    /* =====================================================
       INITIALIZE
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            start
        );

    }

    else {

        start();

    }


    console.log(
        "StudyMate Notification Engine loaded successfully."
    );

})();