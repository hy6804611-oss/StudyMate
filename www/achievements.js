/* =========================================================
   STUDYMATE ACHIEVEMENT ENGINE
   ================================================

   IMPORTANT:
   - Uses StudyMateStreak as the ONLY source for study days.
   - Does NOT calculate the streak.
   - Does NOT use Analytics for achievement progress.
   - Analytics reset does NOT reset achievements.
   - Multiple tasks on one day still count as ONE study day.
   - Level/badge can rise AND cool down when the student stops.
   - Level 15 = 100% achievement progress.
   - Badge 1 is the starting badge for every student.
========================================================= */

(function () {

    const STORAGE_KEY =
        "studyMateAchievements";


    /* =====================================================
       BADGE SYSTEM
    ===================================================== */

    const BADGES = [

        {
            level: 1,
            name: "Study Starter",
            icon: "🌱",
            requiredDays: 0
        },

        {
            level: 2,
            name: "Study Learner",
            icon: "📚",
            requiredDays: 7
        },

        {
            level: 3,
            name: "Focused Learner",
            icon: "🎯",
            requiredDays: 14
        },

        {
            level: 4,
            name: "Dedicated Student",
            icon: "🔥",
            requiredDays: 21
        },

        {
            level: 5,
            name: "Study Builder",
            icon: "🏗️",
            requiredDays: 30
        },

        {
            level: 6,
            name: "Knowledge Seeker",
            icon: "🔎",
            requiredDays: 40
        },

        {
            level: 7,
            name: "Study Champion",
            icon: "🏆",
            requiredDays: 50
        },

        {
            level: 8,
            name: "Learning Master",
            icon: "🧠",
            requiredDays: 65
        },

        {
            level: 9,
            name: "Academic Star",
            icon: "🌟",
            requiredDays: 80
        },

        {
            level: 10,
            name: "Study Expert",
            icon: "⭐",
            requiredDays: 100
        },

        {
            level: 11,
            name: "Knowledge Master",
            icon: "💡",
            requiredDays: 120
        },

        {
            level: 12,
            name: "Elite Learner",
            icon: "👑",
            requiredDays: 140
        },

        {
            level: 13,
            name: "Academic Master",
            icon: "💎",
            requiredDays: 160
        },

        {
            level: 14,
            name: "Study Legend",
            icon: "🏅",
            requiredDays: 180
        },

        {
            level: 15,
            name: "StudyMate Legend",
            icon: "👑",
            requiredDays: 200
        }

    ];


    /* =====================================================
       COOLDOWN RULE
       
       After the student stops studying:

       0-6 missed days
       → keep current badge

       7 missed days
       → drop 1 badge

       14 missed days
       → drop 2 badges

       21 missed days
       → drop 3 badges

       etc.

       The badge does NOT change simply because
       a new calendar day started.
    ===================================================== */

    const COOLDOWN_DAYS =
        7;


    /* =====================================================
       DEFAULT DATA
    ===================================================== */

    function getDefaultData() {

        return {

            level: 1,

            badge: "Study Starter",

            badgeIcon: "🌱",

            achievementProgress: 1,

            highestLevelReached: 1,

            earnedBadges: [1],

            lastCongratulationsLevel: 1,

            lastKnownStudyStreak: 0,

            lastAchievementUpdate: null

        };

    }


    /* =====================================================
       SAVE
    ===================================================== */

    function saveData(data) {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(data)
            );

        }

        catch (error) {

            console.warn(
                "StudyMate could not save achievement data.",
                error
            );

        }

    }


    /* =====================================================
       LOAD
    ===================================================== */

    function getData() {

        try {

            const saved =
                localStorage.getItem(
                    STORAGE_KEY
                );


            if (!saved) {

                const fresh =
                    getDefaultData();

                saveData(fresh);

                return fresh;

            }


            const parsed =
                JSON.parse(saved);


            const data = {

                ...getDefaultData(),

                ...parsed

            };


            if (
                !Array.isArray(
                    data.earnedBadges
                )
            ) {

                data.earnedBadges = [1];

            }


            if (
                !data.earnedBadges.includes(1)
            ) {

                data.earnedBadges.push(1);

            }


            return data;

        }

        catch (error) {

            console.warn(
                "StudyMate could not load achievement data.",
                error
            );

            return getDefaultData();

        }

    }


    /* =====================================================
       GET STUDY STREAK
       
       IMPORTANT:
       We DO NOT calculate the streak here.
       
       The existing study-streak.js remains responsible
       for calculating the streak.
    ===================================================== */

    function getStudyStreak() {

        if (
            window.StudyMateStreak &&
            typeof
                window.StudyMateStreak
                    .getCurrentStreak ===
                "function"
        ) {

            return Math.max(
                0,
                Number(
                    window.StudyMateStreak
                        .getCurrentStreak()
                ) || 0
            );

        }


        /*
           Fallback only.

           This does NOT change your streak engine.
        */

        return Math.max(
            0,
            Number(
                localStorage.getItem(
                    "studyStreak"
                )
            ) || 0
        );

    }


    /* =====================================================
       GET LAST STUDY DATE
    ===================================================== */

    function getLastStudyDate() {

        try {

            /*
               Your current streak engine stores its data
               under this key.
            */

            const saved =
                localStorage.getItem(
                    "studymateStudyStreak"
                );


            if (!saved) {
                return null;
            }


            const data =
                JSON.parse(saved);


            return data.lastStudyDate || null;

        }

        catch (error) {

            return null;

        }

    }


    /* =====================================================
       GET TODAY
    ===================================================== */

    function getTodayDate() {

        const date =
            new Date();


        return new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
        );

    }


    /* =====================================================
       CALCULATE MISSED DAYS
    ===================================================== */

    function getMissedDays() {

        const lastStudyDate =
            getLastStudyDate();


        if (!lastStudyDate) {

            return 0;

        }


        const lastDate =
            new Date(
                lastStudyDate +
                "T00:00:00"
            );


        if (
            isNaN(
                lastDate.getTime()
            )
        ) {

            return 0;

        }


        const today =
            getTodayDate();


        const difference =
            today.getTime() -
            lastDate.getTime();


        const days =
            Math.floor(
                difference /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );


        /*
           If studied today:
           0 missed days.

           If studied yesterday:
           1 calendar day difference,
           but the student has not missed
           the full 7-day cooldown yet.
        */

        return Math.max(
            0,
            days
        );

    }


    /* =====================================================
       FIND BADGE
    ===================================================== */

    function getBadge(level) {

        return (
            BADGES.find(
                badge =>
                    badge.level ===
                    Number(level)
            )
            ||
            BADGES[0]
        );

    }


    /* =====================================================
       CALCULATE LEVEL FROM STREAK
    ===================================================== */

    function calculateLevelFromStreak(
        streak
    ) {

        let level = 1;


        BADGES.forEach(
            badge => {

                if (
                    streak >=
                    badge.requiredDays
                ) {

                    level =
                        badge.level;

                }

            }
        );


        return level;

    }


    /* =====================================================
       CALCULATE COOLDOWN LEVEL
       
       Example:

       Student reached Level 6.

       Miss 7 days:
       Level 5.

       Miss another 7 days:
       Level 4.

       This prevents the badge from changing
       immediately just because the student
       missed one day.
    ===================================================== */

    function calculateCooldownLevel(
        highestLevel,
        missedDays
    ) {

        if (
            missedDays <
            COOLDOWN_DAYS
        ) {

            return highestLevel;

        }


        const levelsToDrop =
            Math.floor(
                missedDays /
                COOLDOWN_DAYS
            );


        return Math.max(
            1,
            highestLevel -
            levelsToDrop
        );

    }


    /* =====================================================
       ACHIEVEMENT PROGRESS
       
       Progress is based on the BADGE SYSTEM.

       Level 1 = 1%

       Level 15 = 100%

       It does NOT use Analytics.
    ===================================================== */

    function calculateAchievementProgress(
        level
    ) {

        if (
            level >= 15
        ) {

            return 100;

        }


        const progress =
            (
                (level - 1) /
                (15 - 1)
            ) * 100;


        return Math.max(
            1,
            Math.round(
                progress
            )
        );

    }


    /* =====================================================
       UPDATE ACHIEVEMENTS
    ===================================================== */

    function updateAchievements() {

        const data =
            getData();


        const streak =
            getStudyStreak();


        const missedDays =
            getMissedDays();


        const streakLevel =
            calculateLevelFromStreak(
                streak
            );


        const previousLevel =
            Number(
                data.level
            ) || 1;


        const highestLevel =
            Math.max(
                1,
                Number(
                    data.highestLevelReached
                ) || 1,
                streakLevel
            );


        /*
           If the student is actively studying,
           use the level earned by the current streak.

           If they have stopped for 7+ days,
           cooldown begins.
        */

        let currentLevel;


        if (
            missedDays <
            COOLDOWN_DAYS
        ) {

            /*
               Keep the earned badge while the
               student is inside the grace period.

               This means missing a day does NOT
               immediately destroy the badge.
            */

            currentLevel =
                Math.max(
                    1,
                    Math.min(
                        highestLevel,
                        Math.max(
                            streakLevel,
                            previousLevel
                        )
                    )
                );

        }

        else {

            currentLevel =
                calculateCooldownLevel(
                    highestLevel,
                    missedDays
                );

        }


        /*
           If the student is actively studying
           and has reached a new level, allow
           the badge to rise.
        */

        if (
            missedDays <
            COOLDOWN_DAYS &&
            streakLevel >
            previousLevel
        ) {

            currentLevel =
                streakLevel;

        }


        currentLevel =
            Math.max(
                1,
                Math.min(
                    15,
                    currentLevel
                )
            );


        const currentBadge =
            getBadge(
                currentLevel
            );


        /*
           Update current badge.
        */

        data.level =
            currentLevel;


        data.badge =
            currentBadge.name;


        data.badgeIcon =
            currentBadge.icon;


        /*
           Highest achievement reached
           remains permanent.

           This is useful for achievement history,
           but it does NOT prevent cooldown.
        */

        data.highestLevelReached =
            highestLevel;


        /*
           Achievement progress follows
           the current badge level.
        */

        data.achievementProgress =
            calculateAchievementProgress(
                currentLevel
            );


        data.lastKnownStudyStreak =
            streak;


        data.lastAchievementUpdate =
            new Date().toISOString();


        /*
           Record earned badges.

           Once a badge has genuinely been reached,
           it remains in the achievement history.

           Cooldown only changes the CURRENT badge.
        */

        if (
            !Array.isArray(
                data.earnedBadges
            )
        ) {

            data.earnedBadges = [];

        }


        if (
            !data.earnedBadges.includes(1)
        ) {

            data.earnedBadges.push(1);

        }


        if (
            streakLevel >
            1
        ) {

            for (
                let level = 2;
                level <= streakLevel;
                level++
            ) {

                if (
                    !data.earnedBadges.includes(
                        level
                    )
                ) {

                    data.earnedBadges.push(
                        level
                    );

                }

            }

        }


        data.earnedBadges.sort(
            (a, b) =>
                Number(a) -
                Number(b)
        );


        saveData(data);


        /*
           Congratulations ONLY when a new
           badge is actually reached.

           Cooldown does not trigger congratulations.
        */

        if (
            streakLevel >
            previousLevel &&
            missedDays === 0
        ) {

            showBadgeCongratulations(
                getBadge(
                    streakLevel
                )
            );

        }


        updateAchievementDisplay(
            data,
            streak
        );


        renderAchievementBadges(
            data
        );


        updateNextAchievement(
            data,
            streak
        );


        /*
           Notify the rest of StudyMate.
        */

        try {

            window.dispatchEvent(
                new CustomEvent(
                    "studymateAchievementUpdated",
                    {
                        detail: data
                    }
                )
            );

        }

        catch (error) {}


        return data;

    }


    /* =====================================================
       DASHBOARD DISPLAY
       
       IDs supported:

       userLevel
       userBadges
       achievementProgress
       achievementProgressPercentage
       badgeProgress
       achievementProgressFill
       badgeProgressFill
       achievementTitle
       achievementStreak
       currentAchievementStreak
    ===================================================== */

    function updateAchievementDisplay(
        data,
        streak
    ) {

        const levelElement =
            document.getElementById(
                "userLevel"
            );


        if (
            levelElement
        ) {

            levelElement.textContent =
                data.level;

        }


        const badgeElement =
            document.getElementById(
                "userBadges"
            );


        if (
            badgeElement
        ) {

            badgeElement.innerHTML = `

                <span
                    class="dashboard-badge-icon"
                    title="${escapeHTML(
                        data.badge
                    )}"
                    aria-label="${escapeHTML(
                        data.badge
                    )}"
                >
                    ${data.badgeIcon}
                </span>

            `;

        }


        const progressElements = [

            document.getElementById(
                "achievementProgress"
            ),

            document.getElementById(
                "achievementProgressPercentage"
            ),

            document.getElementById(
                "badgeProgress"
            )

        ];


        progressElements
            .filter(Boolean)
            .forEach(
                element => {

                    element.textContent =
                        `${data.achievementProgress}%`;

                }
            );


        const progressBars = [

            document.getElementById(
                "achievementProgressFill"
            ),

            document.getElementById(
                "badgeProgressFill"
            )

        ];


        progressBars
            .filter(Boolean)
            .forEach(
                bar => {

                    bar.style.width =
                        `${data.achievementProgress}%`;

                }
            );


        const titleElement =
            document.getElementById(
                "achievementTitle"
            );


        if (
            titleElement
        ) {

            titleElement.textContent =
                data.badge;

        }


        const streakElements = [

            document.getElementById(
                "achievementStreak"
            ),

            document.getElementById(
                "currentAchievementStreak"
            )

        ];


        streakElements
            .filter(Boolean)
            .forEach(
                element => {

                    element.textContent =
                        `${streak} day${
                            streak === 1
                                ? ""
                                : "s"
                        }`;

                }
            );


        /*
           Optional progress message.
        */

        const message =
            document.getElementById(
                "achievementProgressText"
            );


        if (
            message
        ) {

            if (
                data.level >= 15
            ) {

                message.textContent =
                    "🎉 You have reached the highest StudyMate badge!";

            }

            else {

                const nextBadge =
                    getBadge(
                        data.level + 1
                    );


                const remaining =
                    Math.max(
                        0,
                        nextBadge.requiredDays -
                        streak
                    );


                if (
                    remaining > 0
                ) {

                    message.textContent =
                        `${remaining} more study day${
                            remaining === 1
                                ? ""
                                : "s"
                        } to reach ${nextBadge.name}.`;

                }

                else {

                    message.textContent =
                        "Keep studying to unlock your next badge!";

                }

            }

        }

    }


    /* =====================================================
       RENDER BADGES
    ===================================================== */
function renderAchievementBadges(data) {

    const grid =
        document.getElementById(
            "achievementGrid"
        );

    if (!grid) {
        return;
    }


    /*
       Every StudyMate student starts with
       Badge 1 automatically.

       Badge 1 is NEVER shown as LOCKED.
    */

    const earnedBadges =
        Array.isArray(data.earnedBadges)
            ? data.earnedBadges
            : [1];


    if (
        !earnedBadges.includes(1)
    ) {

        earnedBadges.push(1);

    }


    grid.innerHTML =
        BADGES.map(badge => {

            const isEarned =
                earnedBadges.includes(
                    badge.level
                );


            const isCurrent =
                badge.level ===
                Number(data.level);


            let status;
            let description;


            /*
               CURRENT BADGE
            */

            if (isCurrent) {

                status =
                    "🏅 CURRENT BADGE";

                description =
                    "✨ This is your current StudyMate badge.";

            }


            /*
               PREVIOUSLY EARNED BADGE
            */

            else if (isEarned) {

                status =
                    "✅ EARNED";

                description =
                    "You have earned this badge.";

            }


            /*
               LOCKED FUTURE BADGE
            */

            else {

                status =
                    "🔒 LOCKED";

                description =
                    "Keep studying to unlock this badge.";

            }


            const className =
                isCurrent
                    ? "achievement-item earned current"
                    : isEarned
                        ? "achievement-item earned"
                        : "achievement-item locked";


            return `

                <article
                    class="${className}"
                    data-level="${badge.level}"
                >

                    <div class="achievement-icon">
                        ${badge.icon}
                    </div>


                    <div class="achievement-info">

                        <span class="achievement-status">
                            ${status}
                        </span>


                        <h3>
                            Level ${badge.level} —
                            ${escapeHTML(
                                badge.name
                            )}
                        </h3>


                        <p>
                            ${description}
                        </p>


                        <small>

                            ${
                                badge.requiredDays === 0

                                    ? "Starting badge — automatically available"

                                    : `Requirement: ${badge.requiredDays} study days`

                            }

                        </small>

                    </div>

                </article>

            `;

        }).join("");

}

    /* =====================================================
       NEXT ACHIEVEMENT
    ===================================================== */

    function updateNextAchievement(
        data,
        streak
    ) {

        const next =
            getBadge(
                Math.min(
                    15,
                    data.level + 1
                )
            );


        const nameElement =
            document.getElementById(
                "nextAchievementName"
            );


        const textElement =
            document.getElementById(
                "nextAchievementText"
            );


        if (
            data.level >= 15
        ) {

            if (
                nameElement
            ) {

                nameElement.textContent =
                    "StudyMate Legend";

            }


            if (
                textElement
            ) {

                textElement.textContent =
                    "🎉 You have reached the highest badge.";

            }


            return;

        }


        if (
            nameElement
        ) {

            nameElement.textContent =
                `${next.icon} ${next.name}`;

        }


        if (
            textElement
        ) {

            const remaining =
                Math.max(
                    0,
                    next.requiredDays -
                    streak
                );


            textElement.textContent =
                `${remaining} more study day${
                    remaining === 1
                        ? ""
                        : "s"
                } to unlock this badge.`;

        }

    }


    /* =====================================================
       CONGRATULATIONS POPUP
    ===================================================== */

    function showBadgeCongratulations(
        badge
    ) {

        const data =
            getData();


        if (
            Number(
                data.lastCongratulationsLevel
            ) >=
            badge.level
        ) {

            return;

        }


        data.lastCongratulationsLevel =
            badge.level;


        saveData(data);


        const existing =
            document.getElementById(
                "studyMateBadgePopup"
            );


        if (
            existing
        ) {

            existing.remove();

        }


        const popup =
            document.createElement(
                "div"
            );


        popup.id =
            "studyMateBadgePopup";


        popup.innerHTML = `

            <div class="studymate-badge-popup-box">

                <div class="studymate-badge-popup-icon">
                    ${badge.icon}
                </div>


                <div class="studymate-badge-popup-content">

                    <strong>
                        🎉 Congratulations!
                    </strong>


                    <h3>
                        You just earned a new badge!
                    </h3>


                    <p>
                        Level ${badge.level} —
                        ${escapeHTML(
                            badge.name
                        )}
                    </p>


                    <small>
                        Keep studying and keep growing! 📚
                    </small>


                    <button
                        type="button"
                        id="closeStudyMateBadgePopup"
                    >
                        Continue Studying
                    </button>

                </div>

            </div>

        `;


        document.body.appendChild(
            popup
        );


        const closeButton =
            document.getElementById(
                "closeStudyMateBadgePopup"
            );


        if (
            closeButton
        ) {

            closeButton.addEventListener(
                "click",
                () => {

                    popup.remove();

                }
            );

        }


        setTimeout(
            () => {

                if (
                    document.body.contains(
                        popup
                    )
                ) {

                    popup.remove();

                }

            },
            7000
        );

    }


    /* =====================================================
       SAFE HTML
    ===================================================== */

    function escapeHTML(
        value
    ) {

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
       PUBLIC API
    ===================================================== */

    window.StudyMateAchievements = {

        update:
            updateAchievements,

        getData:
            getData,

        getBadges:
            () => BADGES,

        getLevel:
            () =>
                getData().level,

        getProgress:
            () =>
                getData().achievementProgress,

        getCurrentBadge:
            () => {

                const data =
                    getData();

                return getBadge(
                    data.level
                );

            },

        getEarnedBadges:
            () => {

                const data =
                    getData();

                return Array.isArray(
                    data.earnedBadges
                )
                    ? data.earnedBadges
                    : [];

            }

    };


    /* =====================================================
       INITIALIZE
    ===================================================== */

    function initialize() {

        const data =
            updateAchievements();


        /*
           Make sure the achievements page
           gets rendered after the data is ready.
        */

        renderAchievementBadges(
            data
        );

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialize
        );

    }

    else {

        initialize();

    }


    console.log(
        "StudyMate Achievement Engine loaded."
    );

})();