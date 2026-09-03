// ==========================================
// STUDYMATE ANALYTICS ENGINE
// PREMIUM + ADVANCED ANALYTICS
// ==========================================


// ==========================================
// SUBJECTS
// ==========================================

const SUBJECTS = [

    "Mathematics",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "Geography",
    "Computer Studies",
    "History",
    "Government",
    "Economics",
    "Commerce",
    "Principles of Accounting",
    "Literature",
    "Civic Education"

];


// ==========================================
// HTML ELEMENTS
// ==========================================

const overallAccuracy =
    document.getElementById("overallAccuracy");

const questionsAttempted =
    document.getElementById("questionsAttempted");

const correctAnswers =
    document.getElementById("correctAnswers");

const wrongAnswers =
    document.getElementById("wrongAnswers");

const studyStreak =
    document.getElementById("studyStreak");

const subjectPerformance =
    document.getElementById("subjectPerformance");

const progressPercentage =
    document.getElementById("progressPercentage");

const progressFill =
    document.getElementById("progressFill");

const progressMessage =
    document.getElementById("progressMessage");

const strongestSubject =
    document.getElementById("strongestSubject");

const weakestSubject =
    document.getElementById("weakestSubject");

const activityList =
    document.getElementById("activityList");

const premiumAnalyticsBtn =
    document.getElementById("premiumAnalyticsBtn");

const premiumOpenBtn =
    document.querySelector(".premium-open-btn");

const resetAnalyticsBtn =
    document.getElementById(
        "resetAnalyticsBtn"
    );


// ==========================================
// SAFE JSON
// ==========================================

function getJSON(key, fallback = {}) {

    try {

        const value =
            localStorage.getItem(key);

        if (!value) {
            return fallback;
        }

        return JSON.parse(value);

    } catch (error) {

        console.warn(
            "StudyMate could not read:",
            key
        );

        return fallback;

    }

}


// ==========================================
// SAFE NUMBER
// ==========================================

function getNumber(key, fallback = 0) {

    const value =
        parseInt(
            localStorage.getItem(key),
            10
        );

    return isNaN(value)
        ? fallback
        : value;

}


// ==========================================
// NORMALIZE SUBJECT
// ==========================================

function normalizeSubject(name) {

    const text =
        String(name || "")
            .trim()
            .toLowerCase();


    if (
        text === "computer" ||
        text === "computer studies"
    ) {

        return "Computer Studies";

    }


    if (
        text === "principles of accounts" ||
        text === "principles of accounting"
    ) {

        return "Principles of Accounting";

    }


    return SUBJECTS.find(
        subject =>
            subject.toLowerCase() === text
    ) || name;

}


// ==========================================
// QUIZ ANALYTICS
// ==========================================

function getQuizAnalytics() {

    return getJSON(
        "studyMateQuizAnalytics",
        {}
    );

}


// ==========================================
// QUIZ SUBJECT RESULTS
// ==========================================

function getQuizResults() {

    const analytics =
        getQuizAnalytics();


    const results = {};


    SUBJECTS.forEach(subject => {

        results[subject] = {

            attempts: 0,
            questions: 0,
            correct: 0,
            wrong: 0,
            percentage: 0

        };

    });


    Object.keys(analytics)
        .forEach(key => {

            const subject =
                normalizeSubject(key);


            if (!results[subject]) {
                return;
            }


            const data =
                analytics[key] || {};


            const attempts =
                Number(data.attempts) || 0;

            const questions =
                Number(data.totalQuestions) || 0;

            const correct =
                Number(data.correct) || 0;


            results[subject] = {

                attempts,

                questions,

                correct,

                wrong:
                    Math.max(
                        0,
                        questions - correct
                    ),

                percentage:
                    questions > 0
                        ? Math.round(
                            (
                                correct /
                                questions
                            ) * 100
                        )
                        : 0

            };

        });


    return results;

}


// ==========================================
// OVERALL QUIZ PERFORMANCE
// ==========================================

function displayOverallPerformance() {

    const results =
        getQuizResults();


    let totalQuestions = 0;

    let totalCorrect = 0;


    SUBJECTS.forEach(subject => {

        totalQuestions +=
            results[subject].questions;

        totalCorrect +=
            results[subject].correct;

    });


    const totalWrong =
        Math.max(
            0,
            totalQuestions - totalCorrect
        );


    const accuracy =
        totalQuestions > 0
            ? Math.round(
                (
                    totalCorrect /
                    totalQuestions
                ) * 100
            )
            : 0;


    if (overallAccuracy) {

        overallAccuracy.textContent =
            accuracy + "%";

    }


    if (questionsAttempted) {

        questionsAttempted.textContent =
            totalQuestions;

    }


    if (correctAnswers) {

        correctAnswers.textContent =
            totalCorrect;

    }


    if (wrongAnswers) {

        wrongAnswers.textContent =
            totalWrong;

    }

}


// ==========================================
// SUBJECT PERFORMANCE
// ==========================================

function displaySubjectPerformance() {

    if (!subjectPerformance) {
        return;
    }


    const results =
        getQuizResults();


    subjectPerformance.innerHTML = "";


    SUBJECTS.forEach(subject => {

        const data =
            results[subject];


        const item =
            document.createElement("div");


        item.className =
            "subject-performance-item";


        if (data.attempts > 0) {

            item.innerHTML = `

                <div class="subject-name">

                    ${subject}

                    <strong>
                        ${data.percentage}%
                    </strong>

                </div>

                <div class="subject-bar">

                    <div
                        class="subject-bar-fill"
                        style="width:${data.percentage}%">
                    </div>

                </div>

                <div class="subject-details">

                    ${data.correct}/${data.questions}
                    correct •

                    ${data.attempts}
                    attempt${data.attempts === 1 ? "" : "s"}

                </div>

            `;

        } else {

            item.innerHTML = `

                <div class="subject-name">

                    ${subject}

                    <strong>—</strong>

                </div>

                <div class="subject-bar">

                    <div
                        class="subject-bar-fill"
                        style="width:0%">
                    </div>

                </div>

                <div class="subject-details">

                    Not attempted yet

                </div>

            `;

        }


        subjectPerformance.appendChild(item);

    });

}


// ==========================================
// FLASHCARD ANALYTICS
// ==========================================

function getFlashcardAnalytics() {

    return getJSON(
        "studyMateFlashcardAnalytics",
        {}
    );

}


// ==========================================
// TOTAL FLASHCARDS REVIEWED
// ==========================================

function getTotalFlashcardsReviewed() {

    const analytics =
        getFlashcardAnalytics();


    let total = 0;


    Object.values(analytics)
        .forEach(data => {

            total +=
                Number(data.reviewed) || 0;

        });


    const savedTotal =
        getNumber(
            "flashcardsReviewed",
            0
        );


    return Math.max(
        total,
        savedTotal
    );

}


// ==========================================
// LESSON PROGRESS SUMMARY
// ==========================================

function getLessonProgressSummary() {

    const data =
        getJSON(
            "studyMateLessonProgress",
            {}
        );


    let totalProgress = 0;

    let completedSubjects = 0;


    const subjectProgress = {};


    SUBJECTS.forEach(subject => {

        subjectProgress[subject] = 0;

    });


    Object.keys(data)
        .forEach(key => {

            const subject =
                normalizeSubject(key);


            if (
                !Object.prototype.hasOwnProperty
                    .call(
                        subjectProgress,
                        subject
                    )
            ) {

                return;

            }


            let progress = 0;

            const value =
                data[key];


            if (
                typeof value === "number"
            ) {

                progress =
                    Number(value) || 0;

            }

            else if (
                value &&
                typeof value === "object"
            ) {

                progress =
                    Number(
                        value.progress
                    ) || 0;

            }


            progress =
                Math.min(
                    Math.max(
                        progress,
                        0
                    ),
                    100
                );


            subjectProgress[subject] =
                Math.max(
                    subjectProgress[subject],
                    progress
                );

        });


    SUBJECTS.forEach(subject => {

        const progress =
            subjectProgress[subject] || 0;


        totalProgress +=
            progress;


        if (progress >= 100) {

            completedSubjects++;

        }

    });


    return {

        subjectProgress,

        totalProgress,

        averageProgress:
            Math.round(
                totalProgress /
                SUBJECTS.length
            ),

        completedSubjects,

        totalSubjects:
            SUBJECTS.length

    };

}


// ==========================================
// SIMPLE LESSON PROGRESS
// ==========================================

function getLessonProgress() {

    return getLessonProgressSummary()
        .averageProgress;

}


// ==========================================
// OVERALL LEARNING PROGRESS
// ==========================================

function calculateOverallLearningProgress() {

    const summary =
        getLessonProgressSummary();


    const flashcards =
        getTotalFlashcardsReviewed();


    const SUBJECT_WEIGHT =
        90 / SUBJECTS.length;


    let lessonContribution = 0;


    SUBJECTS.forEach(subject => {

        const progress =
            summary.subjectProgress[subject] || 0;


        lessonContribution +=
            (
                progress / 100
            ) * SUBJECT_WEIGHT;

    });


    const FLASHCARD_TARGET =
        100;


    const flashcardContribution =
        Math.min(
            (
                flashcards /
                FLASHCARD_TARGET
            ) * 10,
            10
        );


    let overallProgress =
        lessonContribution +
        flashcardContribution;


    const allSubjectsComplete =
        summary.completedSubjects ===
        SUBJECTS.length;


    const flashcardsComplete =
        flashcards >=
        FLASHCARD_TARGET;


    if (
        allSubjectsComplete &&
        flashcardsComplete
    ) {

        overallProgress = 100;

    }


    return {

        overallProgress:
            Math.min(
                Math.max(
                    overallProgress,
                    0
                ),
                100
            ),

        lessonContribution,

        flashcardContribution,

        summary,

        flashcards

    };

}


// ==========================================
// DISPLAY LEARNING PROGRESS
// ==========================================

function displayLearningProgress() {

    const data =
        calculateOverallLearningProgress();


    const displayProgress =
        Math.round(
            data.overallProgress
        );


    if (progressPercentage) {

        progressPercentage.textContent =
            displayProgress + "%";

    }


    if (progressFill) {

        progressFill.style.width =
            displayProgress + "%";

    }


    if (progressMessage) {

        if (displayProgress === 0) {

            progressMessage.textContent =
                "Start studying your lessons and reviewing flashcards to build your learning progress.";

        }

        else if (displayProgress < 25) {

            progressMessage.textContent =
                "Good start! Keep completing your lessons across all subjects.";

        }

        else if (displayProgress < 50) {

            progressMessage.textContent =
                "You're making progress. Keep working through your subjects.";

        }

        else if (displayProgress < 80) {

            progressMessage.textContent =
                "Great progress! Keep completing your remaining subjects.";

        }

        else if (displayProgress < 100) {

            progressMessage.textContent =
                "Excellent progress! Keep going until all subjects are complete.";

        }

        else {

            progressMessage.textContent =
                "🎉 Excellent! You have completed your full learning progress.";

        }

    }

}


// ==========================================
// STUDY STREAK
// ==========================================

function displayStudyStreak() {

    let streak = 0;


    /*
       Use the original StudyMate Study Streak engine.
       This keeps Analytics synchronized with the
       actual study streak.
    */

    if (
        window.StudyMateStreak &&
        typeof
            window.StudyMateStreak
                .getCurrentStreak ===
            "function"
    ) {

        streak =
            Number(
                window.StudyMateStreak
                    .getCurrentStreak()
            ) || 0;

    }


    /*
       Display the real streak.
    */

    if (studyStreak) {

        studyStreak.textContent =
            streak + " days";

    }

}

// ==========================================
// RECENT ACTIVITY
// ==========================================

function getRecentLessonActivities() {

    const chapterData =
        getJSON(
            "studyMateChapterStudyData",
            {}
        );


    const activities = [];


    Object.keys(chapterData)
        .forEach(subjectKey => {

            const subject =
                normalizeSubject(subjectKey);


            const subjectData =
                chapterData[subjectKey];


            if (
                !subjectData ||
                typeof subjectData !== "object"
            ) {

                return;

            }


            Object.keys(subjectData)
                .forEach(chapterNumber => {

                    const record =
                        subjectData[
                            chapterNumber
                        ];


                    if (
                        !record ||
                        typeof record !== "object"
                    ) {

                        return;

                    }


                    const seconds =
                        Number(
                            record.studySeconds
                        ) || 0;


                    if (seconds <= 0) {
                        return;
                    }


                    const lastStudied =
                        record.lastStudied
                            ? new Date(
                                record.lastStudied
                            ).getTime()
                            : 0;


                    activities.push({

                        subject,

                        chapter:
                            chapterNumber,

                        seconds,

                        completed:
                            Boolean(
                                record.completed
                            ),

                        lastStudied

                    });

                });

        });


    return activities.sort(
        (a, b) =>
            b.lastStudied -
            a.lastStudied
    );

}


// ==========================================
// RECENT ACTIVITY DISPLAY
// ==========================================

function displayRecentActivity() {

    if (!activityList) {
        return;
    }


    activityList.innerHTML = "";


    const lessonActivities =
        getRecentLessonActivities();


    const quizAnalytics =
        getQuizAnalytics();


    let quizAttempts = 0;


    Object.values(quizAnalytics)
        .forEach(data => {

            quizAttempts +=
                Number(data.attempts) || 0;

        });


    const flashcards =
        getTotalFlashcardsReviewed();


    lessonActivities
        .slice(0, 5)
        .forEach(activity => {

            const seconds =
                activity.seconds;


            const minutes =
                Math.floor(
                    seconds / 60
                );


            const remainingSeconds =
                seconds % 60;


            let timeText;


            if (minutes > 0) {

                timeText =
                    minutes +
                    " minute" +
                    (
                        minutes === 1
                            ? ""
                            : "s"
                    );

            }

            else {

                timeText =
                    seconds +
                    " second" +
                    (
                        seconds === 1
                            ? ""
                            : "s"
                    );

            }


            const item =
                document.createElement("div");


            item.className =
                "activity-item";


            item.innerHTML = `

                <div class="activity-icon">
                    📖
                </div>

                <div class="activity-content">

                    <strong>
                        ${activity.subject}
                    </strong>

                    <p>
                        Chapter
                        ${activity.chapter}
                        studied •
                        ${timeText}
                        ${activity.completed
                            ? " • ✅ Completed"
                            : ""
                        }
                    </p>

                </div>

            `;


            activityList.appendChild(item);

        });


    if (quizAttempts > 0) {

        const item =
            document.createElement("div");


        item.className =
            "activity-item";


        item.innerHTML = `

            <div class="activity-icon">
                📝
            </div>

            <div class="activity-content">

                <strong>
                    Quiz Assessment
                </strong>

                <p>
                    ${quizAttempts}
                    quiz attempt${quizAttempts === 1
                        ? ""
                        : "s"
                    }
                    recorded
                </p>

            </div>

        `;


        activityList.appendChild(item);

    }


    if (flashcards > 0) {

        const item =
            document.createElement("div");


        item.className =
            "activity-item";


        item.innerHTML = `

            <div class="activity-icon">
                📚
            </div>

            <div class="activity-content">

                <strong>
                    Flashcards Reviewed
                </strong>

                <p>
                    ${flashcards}
                    flashcard${flashcards === 1
                        ? ""
                        : "s"
                    }
                    reviewed
                </p>

            </div>

        `;


        activityList.appendChild(item);

    }


    if (
        activityList.children.length === 0
    ) {

        activityList.innerHTML = `

            <div class="empty-activity">

                <span>📚</span>

                <p>
                    Your recent study activity
                    will appear here as you learn.
                </p>

            </div>

        `;

    }

}


// ==========================================
// STRONGEST / WEAKEST
// ==========================================

function getStrongestAndWeakest() {

    const results =
        getQuizResults();


    const attempted =
        SUBJECTS.filter(
            subject =>
                results[subject].questions > 0
        );


    if (attempted.length === 0) {

        return {

            strongest: "—",

            weakest: "—"

        };

    }


    let strongest =
        attempted[0];

    let weakest =
        attempted[0];


    attempted.forEach(subject => {

        if (
            results[subject].percentage >
            results[strongest].percentage
        ) {

            strongest =
                subject;

        }


        if (
            results[subject].percentage <
            results[weakest].percentage
        ) {

            weakest =
                subject;

        }

    });


    return {

        strongest,

        weakest

    };

}


// ==========================================
// REMOVE FREE STRONGEST / WEAKEST
// ==========================================

function removeFreeStrongestWeakest() {

    if (strongestSubject) {

        const strongestCard =
            strongestSubject.closest(
                ".highlight-card"
            );


        if (strongestCard) {

            strongestCard.style.display =
                "none";

        }

    }


    if (weakestSubject) {

        const weakestCard =
            weakestSubject.closest(
                ".highlight-card"
            );


        if (weakestCard) {

            weakestCard.style.display =
                "none";

        }

    }

}


// ==========================================
// PREMIUM STATUS
// ==========================================
//
// Payment will be connected later.
//
// For now, StudyMate remains FREE.
// We do not automatically unlock Premium.
// ==========================================

function isPremiumUser() {

    return (
        localStorage.getItem(
            "studyMatePremium"
        ) === "true"
    );

}


// ==========================================
// ADVANCED ANALYTICS DATA
// ==========================================

function getAdvancedAnalytics() {

    const quizResults =
        getQuizResults();


    const progressData =
        calculateOverallLearningProgress();


    const strongestWeakest =
        getStrongestAndWeakest();


    let totalAttempts = 0;
    let totalQuestions = 0;
    let totalCorrect = 0;
    let totalWrong = 0;


    SUBJECTS.forEach(subject => {

        const data =
            quizResults[subject];


        totalAttempts +=
            data.attempts;

        totalQuestions +=
            data.questions;

        totalCorrect +=
            data.correct;

        totalWrong +=
            data.wrong;

    });


    const averageQuizScore =
        totalQuestions > 0
            ? Math.round(
                (
                    totalCorrect /
                    totalQuestions
                ) * 100
            )
            : 0;


    const subjectBreakdown =
        SUBJECTS.map(subject => {

            return {

                subject,

                lessonProgress:
                    progressData.summary
                        .subjectProgress[subject] || 0,

                quizScore:
                    quizResults[subject].percentage,

                attempts:
                    quizResults[subject].attempts,

                questions:
                    quizResults[subject].questions,

                correct:
                    quizResults[subject].correct,

                wrong:
                    quizResults[subject].wrong

            };

        });


    const completedSubjects =
        progressData.summary
            .completedSubjects;


    const remainingSubjects =
        SUBJECTS.length -
        completedSubjects;


    return {

        subjectBreakdown,

        overallProgress:
            Math.round(
                progressData.overallProgress
            ),

        lessonProgress:
            progressData.summary
                .averageProgress,

        completedSubjects,

        remainingSubjects,

        totalSubjects:
            SUBJECTS.length,

        totalQuizAttempts:
            totalAttempts,

        totalQuestions,

        totalCorrect,

        totalWrong,

        averageQuizScore,

        totalFlashcards:
            progressData.flashcards,

        strongestSubject:
            strongestWeakest.strongest,

        needsImprovement:
            strongestWeakest.weakest,

        studyStreak:
            getNumber(
                "studyStreak",
                0
            )

    };

}


// ==========================================
// PREMIUM PANEL
// ==========================================

function renderAdvancedAnalytics() {

    if (!isPremiumUser()) {

        return;

    }


    if (
        document.getElementById(
            "advancedAnalyticsPanel"
        )
    ) {

        return;

    }


    const data =
        getAdvancedAnalytics();


    const premiumSection =
        document.querySelector(
            ".premium-section"
        );


    if (!premiumSection) {

        console.warn(
            "Premium section not found."
        );

        return;

    }


    const panel =
        document.createElement("div");


    panel.id =
        "advancedAnalyticsPanel";


    panel.className =
        "advanced-analytics-panel";


    panel.innerHTML = `

        <div class="advanced-header">

            <span class="premium-label">
                👑 PREMIUM
            </span>

            <h2>
                📊 Advanced Analytics
            </h2>

            <p>
                Detailed insights from your
                existing StudyMate learning data.
            </p>

        </div>


        <div class="advanced-grid">


            <div class="advanced-card">

                <h3>
                    📊 Subject Progress Breakdown
                </h3>

                <div class="advanced-subject-list">

                    ${data.subjectBreakdown
                        .map(item => `

                            <div class="advanced-subject">

                                <div class="advanced-subject-top">

                                    <span>
                                        ${item.subject}
                                    </span>

                                    <strong>
                                        ${item.lessonProgress}%
                                    </strong>

                                </div>

                                <div class="advanced-progress">

                                    <div
                                        style="width:${item.lessonProgress}%">
                                    </div>

                                </div>

                            </div>

                        `)
                        .join("")
                    }

                </div>

            </div>


            <div class="advanced-card">

                <h3>
                    📈 Progress Trends
                </h3>

                <div class="advanced-stat">

                    <span>
                        Overall Learning Progress
                    </span>

                    <strong>
                        ${data.overallProgress}%
                    </strong>

                </div>

                <div class="advanced-stat">

                    <span>
                        Lesson Completion
                    </span>

                    <strong>
                        ${data.lessonProgress}%
                    </strong>

                </div>

                <div class="advanced-stat">

                    <span>
                        Subjects Completed
                    </span>

                    <strong>
                        ${data.completedSubjects}/${data.totalSubjects}
                    </strong>

                </div>

            </div>


            <div class="advanced-card">

                <h3>
                    🎯 Quiz Insights
                </h3>

                <div class="advanced-stat">

                    <span>
                        Quiz Attempts
                    </span>

                    <strong>
                        ${data.totalQuizAttempts}
                    </strong>

                </div>

                <div class="advanced-stat">

                    <span>
                        Questions Answered
                    </span>

                    <strong>
                        ${data.totalQuestions}
                    </strong>

                </div>

                <div class="advanced-stat">

                    <span>
                        Correct Answers
                    </span>

                    <strong>
                        ${data.totalCorrect}
                    </strong>

                </div>

                <div class="advanced-stat">

                    <span>
                        Average Score
                    </span>

                    <strong>
                        ${data.averageQuizScore}%
                    </strong>

                </div>

            </div>


            <div class="advanced-card">

                <h3>
                    💪 Strongest Subject
                </h3>

                <div class="advanced-big-value">
                    ${data.strongestSubject}
                </div>

                <p>
                    Based on quiz performance.
                </p>

            </div>


            <div class="advanced-card">

                <h3>
                    ⚠️ Needs Improvement
                </h3>

                <div class="advanced-big-value">
                    ${data.needsImprovement}
                </div>

                <p>
                    This subject currently has
                    the lowest quiz performance.
                </p>

            </div>


            <div class="advanced-card">

                <h3>
                    🧠 Flashcard Insights
                </h3>

                <div class="advanced-stat">

                    <span>
                        Flashcards Reviewed
                    </span>

                    <strong>
                        ${data.totalFlashcards}
                    </strong>

                </div>

                <div class="advanced-stat">

                    <span>
                        Flashcard Target
                    </span>

                    <strong>
                        100
                    </strong>

                </div>

            </div>


            <div class="advanced-card">

                <h3>
                    📚 Lesson Insights
                </h3>

                <div class="advanced-stat">

                    <span>
                        Subjects Completed
                    </span>

                    <strong>
                        ${data.completedSubjects}
                    </strong>

                </div>

                <div class="advanced-stat">

                    <span>
                        Subjects Remaining
                    </span>

                    <strong>
                        ${data.remainingSubjects}
                    </strong>

                </div>

            </div>


            <div class="advanced-card">

                <h3>
                    🔥 Study Habits
                </h3>

                <div class="advanced-stat">

                    <span>
                        Current Study Streak
                    </span>

                    <strong>
                        ${data.studyStreak} days
                    </strong>

                </div>

            </div>


            <div class="advanced-card">

                <h3>
                    🏆 Learning Achievements
                </h3>

                <div class="achievement-list">

                    ${
                        data.completedSubjects > 0
                        ? "🏅 First subject progress recorded"
                        : "🔒 Complete a subject to earn an achievement"
                    }

                    <br><br>

                    ${
                        data.totalQuizAttempts > 0
                        ? "🎯 First quiz activity recorded"
                        : "🔒 Complete a quiz to earn a quiz achievement"
                    }

                    <br><br>

                    ${
                        data.totalFlashcards > 0
                        ? "🧠 Flashcard activity recorded"
                        : "🔒 Review flashcards to earn a flashcard achievement"
                    }

                </div>

            </div>


            <div class="advanced-card">

                <h3>
                    📌 Personalized Insights
                </h3>

                <p>

                    ${
                        data.overallProgress === 0
                        ? "Start studying to generate personalized learning insights."
                        : data.remainingSubjects === 0
                            ? "🎉 All subjects have been completed!"
                            : `You have ${data.remainingSubjects} subject${data.remainingSubjects === 1 ? "" : "s"} remaining to complete.`
                    }

                </p>

                <p>

                    ${
                        data.averageQuizScore >= 70
                        ? "🎯 Your current quiz accuracy is looking strong."
                        : data.totalQuestions > 0
                            ? "📚 More quiz practice could help improve your accuracy."
                            : "📝 Complete some quizzes to receive performance insights."
                    }

                </p>

            </div>


            <div class="advanced-card">

                <h3>
                    🕒 Detailed Activity History
                </h3>

                <div id="advancedHistory">

                    ${getAdvancedHistoryHTML()}

                </div>

            </div>


        </div>

    `;


    premiumSection.after(panel);

}


// ==========================================
// ADVANCED HISTORY
// ==========================================

function getAdvancedHistoryHTML() {

    const activities =
        getRecentLessonActivities();


    if (activities.length === 0) {

        return `
            <p>
                No detailed lesson activity yet.
            </p>
        `;

    }


    return activities
        .slice(0, 10)
        .map(activity => {

            const date =
                activity.lastStudied
                    ? new Date(
                        activity.lastStudied
                    ).toLocaleString()
                    : "Unknown date";


            return `

                <div class="history-item">

                    <strong>
                        ${activity.subject}
                    </strong>

                    <span>
                        Chapter ${activity.chapter}
                    </span>

                    <small>
                        ${date}
                    </small>

                </div>

            `;

        })
        .join("");

}



// ==========================================
// PREMIUM BUTTON HANDLER
// TEMPORARY: OPEN ADVANCED ANALYTICS DIRECTLY
// PAYMENT LOCK WILL BE CONNECTED LATER
// ==========================================

function setupPremiumButtons() {

    const handlePremiumClick = () => {

        // Open the separate Advanced Analytics page
        window.location.href =
            "advancedanalytics.html";

    };


    if (premiumAnalyticsBtn) {

        premiumAnalyticsBtn.onclick =
            handlePremiumClick;

    }


    if (premiumOpenBtn) {

        premiumOpenBtn.onclick =
            handlePremiumClick;

    }

}
// ==========================================
// RESET LEARNING DATA
// ==========================================

function setupResetButton() {

    if (!resetAnalyticsBtn) {
        return;
    }


    resetAnalyticsBtn.onclick = () => {

        const confirmed =
            confirm(
                "⚠️ Reset all learning data?\n\n" +

                "This will erase:\n" +
                "• Lesson progress\n" +
                "• Chapter study time\n" +
                "• Quiz analytics\n" +
                "• Flashcard analytics\n\n" +

                "Your Study Streak and account data " +
                "will NOT be deleted.\n\n" +

                "This cannot be undone."
            );


        if (!confirmed) {

            return;

        }


        localStorage.removeItem(
            "studyMateLessonProgress"
        );

        localStorage.removeItem(
            "studyMateChapterStudyData"
        );

        localStorage.removeItem(
            "studyMateQuizAnalytics"
        );

        localStorage.removeItem(
            "studyMateFlashcardAnalytics"
        );

        localStorage.removeItem(
            "flashcardsReviewed"
        );


        alert(
            "✅ Learning data has been reset.\n\n" +
            "Your StudyMate analytics will now " +
            "start recording from zero."
        );


        location.reload();

    };

}


// ==========================================
// INITIALIZE
// ==========================================

displayOverallPerformance();

displaySubjectPerformance();

displayStudyStreak();

displayLearningProgress();

displayRecentActivity();

removeFreeStrongestWeakest();

setupPremiumButtons();

setupResetButton();





// ==========================================
// DEBUG
// ==========================================

console.log(
  "=================================="
);

console.log(
    "StudyMate Analytics loaded."
);

console.log(
    "=================================="
);

console.log(
    "Quiz:",
    getQuizAnalytics()
);

console.log(
    "Flashcards:",
    getFlashcardAnalytics()
);

console.log(
    "Total flashcards reviewed:",
    getTotalFlashcardsReviewed()
);

console.log(
    "Lessons:",
    getLessonProgressSummary()
);

console.log(
    "Advanced Analytics:",
    getAdvancedAnalytics()
);

console.log(
    "=================================="
);
      