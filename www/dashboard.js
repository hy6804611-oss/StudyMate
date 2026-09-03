/* =========================================================
   STUDYMATE DASHBOARD
   FIREBASE AUTH + CENTRAL PREMIUM ACCESS
   + ACCOUNT-SPECIFIC PROFILE
========================================================= */


/* =========================================================
   1. FIREBASE
========================================================= */

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
    getAuth,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";


const firebaseConfig = {

    apiKey:
        "AIzaSyBGHydWA5tJ8dCX_uC2y0fxzhwnI0aGYzA",

    authDomain:
        "studymate-32dce.firebaseapp.com",

    projectId:
        "studymate-32dce",

    storageBucket:
        "studymate-32dce.firebasestorage.app",

    messagingSenderId:
        "1069652867136",

    appId:
        "1:1069652867136:web:dd55fc62229ea55d9ec7a5",

    measurementId:
        "G-GNMK1W0QR9"

};


const app =
    initializeApp(
        firebaseConfig
    );


const auth =
    getAuth(app);


/* =========================================================
   2. ACCOUNT-SPECIFIC PROFILE KEYS
========================================================= */

function getProfileKey(
    type,
    uid
) {

    return `studyMate_${type}_${uid}`;

}


/* =========================================================
   3. LOAD PROFILE ON DASHBOARD
========================================================= */

function loadDashboardProfile(
    user
) {

    if (!user || !user.uid) {
        return;
    }


    const nameKey =
        getProfileKey(
            "profileName",
            user.uid
        );


    const pictureKey =
        getProfileKey(
            "profilePicture",
            user.uid
        );


    /*
       First look for the account-specific
       profile information.
    */

    let savedName =
        localStorage.getItem(
            nameKey
        );


    let savedPicture =
        localStorage.getItem(
            pictureKey
        );


    /*
       Compatibility with your OLD profile data.

       If this account has not yet been migrated,
       copy the existing profile information into
       this account's own storage.

       This prevents your existing profile from
       disappearing.
    */

    if (
        !savedName
    ) {

        const oldName =
            localStorage.getItem(
                "studyMateProfileName"
            );


        if (
            oldName &&
            oldName.trim()
        ) {

            savedName =
                oldName;

            localStorage.setItem(
                nameKey,
                oldName
            );

        }

    }


    if (
        !savedPicture
    ) {

        const oldPicture =
            localStorage.getItem(
                "studyMateProfilePicture"
            );


        if (
            oldPicture
        ) {

            savedPicture =
                oldPicture;

            localStorage.setItem(
                pictureKey,
                oldPicture
            );

        }

    }


    /*
       NAME
    */

    const welcomeText =
        document.querySelector(
            ".welcome-text"
        );


    if (
        welcomeText &&
        savedName
    ) {

        welcomeText.textContent =
            `👋 Welcome, ${savedName}`;

    }


    /*
       PROFILE PICTURE
    */

    const profileIcon =
        document.getElementById(
            "profileIcon"
        );


    if (
        profileIcon &&
        savedPicture
    ) {

        profileIcon.innerHTML = "";


        const img =
            document.createElement(
                "img"
            );


        img.src =
            savedPicture;


        img.alt =
            "Profile picture";


        img.style.width =
            "100%";


        img.style.height =
            "100%";


        img.style.objectFit =
            "cover";


        img.style.borderRadius =
            "50%";


        profileIcon.appendChild(
            img
        );

    }

}


/* =========================================================
   4. PREMIUM CONTROLLER
========================================================= */

if (
    !window.StudyMatePremium
) {

    console.error(
        "StudyMate Premium controller was not loaded. " +
        "Make sure premium-access.js is included before dashboard.js."
    );

}


function openCBT() {

    if (
        window.StudyMatePremium
    ) {

        window.StudyMatePremium.openCBT();

        return;

    }


    window.location.href =
        "premium.html";

}


function openAdvancedAnalytics() {

    if (
        window.StudyMatePremium
    ) {

        window.StudyMatePremium
            .openAdvancedAnalytics();

        return;

    }


    window.location.href =
        "premium.html";

}


function openAdvancedPlanner() {

    if (
        window.StudyMatePremium
    ) {

        window.StudyMatePremium
            .openAdvancedPlanner();

        return;

    }


    window.location.href =
        "premium.html";

}


function openFormulaBook() {

    if (
        window.StudyMatePremium
    ) {

        window.StudyMatePremium
            .openFormulaBook();

        return;

    }


    window.location.href =
        "premium.html";

}


/* =========================================================
   5. CBT NAVIGATION
========================================================= */

const cbtNavigation =
    document.getElementById(
        "cbtNavigation"
    );


if (
    cbtNavigation
) {

    cbtNavigation.addEventListener(
        "click",
        event => {

            event.preventDefault();

            openCBT();

        }
    );

}


/* =========================================================
   6. ADVANCED ANALYTICS
========================================================= */

const advancedAnalyticsCard =
    document.getElementById(
        "advancedAnalyticsCard"
    );


if (
    advancedAnalyticsCard
) {

    advancedAnalyticsCard.addEventListener(
        "click",
        event => {

            event.preventDefault();

            openAdvancedAnalytics();

        }
    );


    advancedAnalyticsCard.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openAdvancedAnalytics();

            }

        }
    );

}


/* =========================================================
   7. ADVANCED STUDY PLANNER
========================================================= */

const advancedStudyPlannerCard =
    document.getElementById(
        "advancedStudyPlannerCard"
    );


if (
    advancedStudyPlannerCard
) {

    advancedStudyPlannerCard.addEventListener(
        "click",
        event => {

            event.preventDefault();

            openAdvancedPlanner();

        }
    );


    advancedStudyPlannerCard.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openAdvancedPlanner();

            }

        }
    );

}


/* =========================================================
   8. FORMULA BOOK
========================================================= */

const formulaBookBtn =
    document.getElementById(
        "formulaBookBtn"
    );


if (
    formulaBookBtn
) {

    formulaBookBtn.addEventListener(
        "click",
        event => {

            event.preventDefault();

            openFormulaBook();

        }
    );

}


/* =========================================================
   9. PREMIUM UPGRADE CARD
========================================================= */

const premiumUpgradeCard =
    document.getElementById(
        "premiumUpgradeCard"
    );


if (
    premiumUpgradeCard
) {

    premiumUpgradeCard.addEventListener(
        "click",
        event => {

            event.preventDefault();


            if (
                window.StudyMatePremium
            ) {

                window.StudyMatePremium
                    .openPremium();

                return;

            }


            window.location.href =
                "premium.html";

        }
    );


    premiumUpgradeCard.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();


                if (
                    window.StudyMatePremium
                ) {

                    window.StudyMatePremium
                        .openPremium();

                    return;

                }


                window.location.href =
                    "premium.html";

            }

        }
    );

}


/* =========================================================
   10. NORMAL ANALYTICS
========================================================= */

const normalAnalyticsCard =
    document.getElementById(
        "normalAnalyticsCard"
    );


if (
    normalAnalyticsCard
) {

    normalAnalyticsCard.addEventListener(
        "click",
        event => {

            event.preventDefault();

            window.location.href =
                "analytics.html";

        }
    );


    normalAnalyticsCard.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                window.location.href =
                    "analytics.html";

            }

        }
    );

}


/* =========================================================
   11. PREMIUM DASHBOARD
========================================================= */

function updatePremiumDashboard() {

    if (
        !window.StudyMatePremium
    ) {

        return;

    }


    const premium =
        window.StudyMatePremium
            .isPremium();


    const upgradeCard =
        document.getElementById(
            "premiumUpgradeCard"
        );


    const analyticsCard =
        document.getElementById(
            "advancedAnalyticsCard"
        );


    const plannerCard =
        document.getElementById(
            "advancedStudyPlannerCard"
        );


    if (
        premium
    ) {

        if (
            upgradeCard
        ) {

            upgradeCard.style.display =
                "none";

        }


        if (
            analyticsCard
        ) {

            analyticsCard.classList.add(
                "premium-unlocked"
            );


            const link =
                analyticsCard.querySelector(
                    ".advanced-link"
                );


            if (
                link
            ) {

                link.textContent =
                    "Open Advanced Analytics →";

            }

        }


        if (
            plannerCard
        ) {

            plannerCard.classList.add(
                "premium-unlocked"
            );


            const link =
                plannerCard.querySelector(
                    ".advanced-link"
                );


            if (
                link
            ) {

                link.textContent =
                    "Open Advanced Study Planner →";

            }

        }


        return;

    }


    if (
        upgradeCard
    ) {

        upgradeCard.style.display =
            "";

    }


    if (
        analyticsCard
    ) {

        analyticsCard.classList.remove(
            "premium-unlocked"
        );


        const link =
            analyticsCard.querySelector(
                ".advanced-link"
            );


        if (
            link
        ) {

            link.textContent =
                "Unlock Advanced Analytics →";

        }

    }


    if (
        plannerCard
    ) {

        plannerCard.classList.remove(
            "premium-unlocked"
        );


        const link =
            plannerCard.querySelector(
                ".advanced-link"
            );


        if (
            link
        ) {

            link.textContent =
                "Unlock Advanced Planner →";

        }

    }

}


/* =========================================================
   12. FIREBASE LOGIN
========================================================= */

onAuthStateChanged(
    auth,
    async user => {

        if (
            !user
        ) {

            window.location.href =
                "login.html";

            return;

        }


        console.log(
            "StudyMate user:",
            user.uid
        );


        /*
           LOAD THE CURRENT ACCOUNT'S
           NAME AND PROFILE PICTURE.
        */

        loadDashboardProfile(
            user
        );


        updatePremiumDashboard();

    }
);


/* =========================================================
   13. LOGOUT
========================================================= */

const logoutBtn =
    document.getElementById(
        "logoutBtn"
    );


if (
    logoutBtn
) {

    logoutBtn.addEventListener(
        "click",
        async () => {

            try {

                await signOut(
                    auth
                );


                window.location.href =
                    "login.html";

            }

            catch (
                error
            ) {

                console.error(
                    "StudyMate logout error:",
                    error
                );


                alert(
                    "Unable to log out right now."
                );

            }

        }
    );

}


/* =========================================================
   14. ACHIEVEMENT SYSTEM
========================================================= */

function updateDashboardAchievements() {

    if (
        !window.StudyMateAchievements
    ) {

        console.warn(
            "StudyMate Achievement system was not loaded."
        );

        return;

    }


    const data =
        window.StudyMateAchievements.getData();


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

        const level =
            Number(
                data.level
            ) || 1;


        const badges = {

            1: {
                icon: "🌱",
                name: "First Step"
            },

            2: {
                icon: "📚",
                name: "Study Learner"
            },

            3: {
                icon: "🎯",
                name: "Focused Learner"
            },

            4: {
                icon: "🏗️",
                name: "Study Builder"
            },

            5: {
                icon: "🔎",
                name: "Knowledge Seeker"
            },

            6: {
                icon: "🔥",
                name: "Dedicated Learner"
            },

            7: {
                icon: "🏆",
                name: "Study Champion"
            },

            8: {
                icon: "🧠",
                name: "Learning Expert"
            },

            9: {
                icon: "🥇",
                name: "Master Learner"
            },

            10: {
                icon: "⭐",
                name: "Study Pro"
            },

            11: {
                icon: "🌟",
                name: "Academic Star"
            },

            12: {
                icon: "👑",
                name: "Learning Master"
            },

            13: {
                icon: "💎",
                name: "Study Elite"
            },

            14: {
                icon: "🏅",
                name: "Study Legend"
            },

            15: {
                icon: "👑",
                name: "StudyMate Master"
            }

        };


        const badge =
            badges[level] ||
            badges[15];


        badgeElement.innerHTML = `
            <span
                class="dashboard-badge-icon"
                title="${badge.name}"
                aria-label="${badge.name}"
            >
                ${badge.icon}
            </span>
        `;

    }


    const progressElement =
        document.getElementById(
            "overallProgress"
        );


    if (
        progressElement
    ) {

        progressElement.textContent =
            `${data.achievementProgress}%`;

    }

}


/* =========================================================
   15. INITIAL ACHIEVEMENT UPDATE
========================================================= */

updateDashboardAchievements();


window.addEventListener(
    "studymateAchievementUpdated",
    updateDashboardAchievements
);


/* =========================================================
   16. DASHBOARD READY
========================================================= */

console.log(
    "StudyMate Dashboard loaded successfully."
);

console.log(
    "Central Premium Access:",
    Boolean(
        window.StudyMatePremium
    )
);