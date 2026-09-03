/* =========================================================
   STUDYMATE STUDY STREAK ENGINE
   ONE CENTRAL STREAK SYSTEM
========================================================= */

(function () {

    const STORAGE_KEY = "studymateStudyStreak";

    function getToday() {

        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }


    function getYesterday() {

        const date = new Date();

        date.setDate(date.getDate() - 1);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }


    function getData() {

        try {

            const saved =
                localStorage.getItem(STORAGE_KEY);

            if (!saved) {

                return {
                    currentStreak: 0,
                    longestStreak: 0,
                    lastStudyDate: null
                };

            }

            const data = JSON.parse(saved);

            return {
                currentStreak:
                    Number(data.currentStreak) || 0,

                longestStreak:
                    Number(data.longestStreak) || 0,

                lastStudyDate:
                    data.lastStudyDate || null
            };

        } catch (error) {

            console.error(
                "StudyMate streak error:",
                error
            );

            return {
                currentStreak: 0,
                longestStreak: 0,
                lastStudyDate: null
            };
        }
    }


    function saveData(data) {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );
    }


    function recordStudyActivity() {

        const data = getData();

        const today = getToday();
        const yesterday = getYesterday();


        /* Already recorded today */

        if (
            data.lastStudyDate === today
        ) {

            return data;

        }


        /* First study activity */

        if (
            !data.lastStudyDate
        ) {

            data.currentStreak = 1;

        }


        /* Continued streak */

        else if (
            data.lastStudyDate === yesterday
        ) {

            data.currentStreak += 1;

        }


        /* Streak was broken */

        else {

            data.currentStreak = 1;

        }


        /* Longest streak */

        if (
            data.currentStreak >
            data.longestStreak
        ) {

            data.longestStreak =
                data.currentStreak;

        }


        data.lastStudyDate = today;


        saveData(data);


        updateDashboardStreak();


        return data;
    }


    function getCurrentStreak() {

        return getData().currentStreak;

    }


    function getLongestStreak() {

        return getData().longestStreak;

    }


    function updateDashboardStreak() {

        const streakElement =
            document.getElementById(
                "dayStreak"
            );


        if (!streakElement) {
            return;
        }


        streakElement.textContent =
            getCurrentStreak();

    }


    /* =====================================================
       PUBLIC STUDYMATE STREAK API
    ===================================================== */

    window.StudyMateStreak = {

        recordStudyActivity,

        getCurrentStreak,

        getLongestStreak,

        updateDashboardStreak

    };


    /* =====================================================
       UPDATE DASHBOARD WHEN PAGE LOADS
    ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            updateDashboardStreak();

        }
    );


})();