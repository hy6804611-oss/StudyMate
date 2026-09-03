/* =========================================================
   STUDYMATE STUDY STREAK ENGINE
   CENTRAL STREAK SYSTEM — STEP 1
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       STORAGE
    ===================================================== */

    const STORAGE_KEY =
        "studymateStudyStreak";


    /* =====================================================
       DEFAULT DATA
    ===================================================== */

    const defaultState = {

        currentStreak: 0,

        longestStreak: 0,

        lastStudyDate: "",

        studiedToday: false,

        totalStudyDays: 0

    };


    /* =====================================================
       GET LOCAL DATE
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


    /* =====================================================
       LOAD STREAK DATA
    ===================================================== */

    function getState() {

        try {

            const saved =
                localStorage.getItem(
                    STORAGE_KEY
                );

            if (!saved) {

                return {
                    ...defaultState
                };

            }


            const data =
                JSON.parse(saved);


            return {

                ...defaultState,

                ...data

            };

        } catch (error) {

            console.error(
                "StudyMate Streak: Could not load streak data.",
                error
            );


            return {
                ...defaultState
            };

        }

    }


    /* =====================================================
       SAVE STREAK DATA
    ===================================================== */

    function saveState(state) {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(state)
            );

        } catch (error) {

            console.error(
                "StudyMate Streak: Could not save streak data.",
                error
            );

        }

    }


    /* =====================================================
       DATE DIFFERENCE
    ===================================================== */

    function daysBetween(
        firstDate,
        secondDate
    ) {

        const first =
            new Date(
                `${firstDate}T00:00:00`
            );

        const second =
            new Date(
                `${secondDate}T00:00:00`
            );


        const difference =
            second.getTime() -
            first.getTime();


        return Math.round(
            difference /
            (1000 * 60 * 60 * 24)
        );

    }


    /* =====================================================
       RECORD STUDY DAY
       
       This is the MAIN function.

       Other parts of StudyMate will eventually call:

           StudyMateStreak.recordStudyDay()

       when the student actually completes
       a study activity.
    ===================================================== */

    function recordStudyDay() {

        const state =
            getState();


        const today =
            getLocalDateString();


        /* -----------------------------------------------
           Already counted today
        ----------------------------------------------- */

        if (
            state.lastStudyDate === today
        ) {

            state.studiedToday = true;

            saveState(state);

            return {
                ...state
            };

        }


        /* -----------------------------------------------
           First ever study day
        ----------------------------------------------- */

        if (
            !state.lastStudyDate
        ) {

            state.currentStreak = 1;

            state.longestStreak = 1;

            state.totalStudyDays = 1;

            state.lastStudyDate = today;

            state.studiedToday = true;


            saveState(state);


            return {
                ...state
            };

        }


        /* -----------------------------------------------
           Check previous study day
        ----------------------------------------------- */

        const gap =
            daysBetween(
                state.lastStudyDate,
                today
            );


        /* -----------------------------------------------
           Studied yesterday
           → Continue streak
        ----------------------------------------------- */

        if (
            gap === 1
        ) {

            state.currentStreak += 1;

            state.totalStudyDays += 1;

            state.lastStudyDate =
                today;

            state.studiedToday =
                true;


            if (
                state.currentStreak >
                state.longestStreak
            ) {

                state.longestStreak =
                    state.currentStreak;

            }


            saveState(state);


            return {
                ...state
            };

        }


        /* -----------------------------------------------
           Missed one or more days
           → Start a new streak
        ----------------------------------------------- */

        if (
            gap > 1
        ) {

            state.currentStreak = 1;

            state.totalStudyDays += 1;

            state.lastStudyDate =
                today;

            state.studiedToday =
                true;


            saveState(state);


            return {
                ...state
            };

        }


        /* -----------------------------------------------
           Safety fallback
        ----------------------------------------------- */

        state.lastStudyDate =
            today;

        state.studiedToday =
            true;


        saveState(state);


        return {
            ...state
        };

    }


    /* =====================================================
       CHECK TODAY
    ===================================================== */

    function updateTodayStatus() {

        const state =
            getState();


        const today =
            getLocalDateString();


        state.studiedToday =
            state.lastStudyDate === today;


        saveState(state);


        return {
            ...state
        };

    }


    /* =====================================================
       GET CURRENT STREAK
    ===================================================== */

    function getCurrentStreak() {

        const state =
            updateTodayStatus();


        return state.currentStreak;

    }


    /* =====================================================
       GET LONGEST STREAK
    ===================================================== */

    function getLongestStreak() {

        const state =
            getState();


        return state.longestStreak;

    }


    /* =====================================================
       GET COMPLETE STREAK DATA
    ===================================================== */

    function getStreakData() {

        return updateTodayStatus();

    }


    /* =====================================================
       RESET STREAK
       
       Mainly useful during development/testing.
    ===================================================== */

    function resetStreak() {

        const freshState =
            {
                ...defaultState
            };


        saveState(
            freshState
        );


        return {
            ...freshState
        };

    }


    /* =====================================================
       PUBLIC STUDYMATE STREAK API
    ===================================================== */

    window.StudyMateStreak = {

        recordStudyDay:
            recordStudyDay,

        getCurrentStreak:
            getCurrentStreak,

        getLongestStreak:
            getLongestStreak,

        getStreakData:
            getStreakData,

        updateTodayStatus:
            updateTodayStatus,

        resetStreak:
            resetStreak

    };


    /* =====================================================
       READY
    ===================================================== */

    console.log(
        "🔥 StudyMate Streak Engine loaded successfully."
    );

})();