/* =========================================================
   STUDYMATE ADVANCED ANALYTICS ENGINE
   COMPLETE CORRECTED VERSION

   PART 1 OF 4

   FEATURES:
   - Lesson progress
   - Quiz analytics
   - CBT analytics
   - CBT history
   - Flashcards
   - Overall progress
   - Subject performance
   - Strongest / weakest subject
   - Personalized insights
   - Recent activity
   - FULL ANALYTICS RESET

   IMPORTANT:
   - DO NOT MODIFY CBT FILES.
   - DO NOT DELETE cbtResult during analytics reset.
   - DO NOT DELETE examQuestions during analytics reset.
   - DO NOT DELETE userAnswers during analytics reset.
   - Old CBT results are prevented from being re-captured
     after an analytics reset.
   - A NEW CBT result will still be captured normally.
========================================================= */


/* =========================================================
   1. SUBJECTS
========================================================= */

const ADVANCED_SUBJECTS = [

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


/* =========================================================
   2. STORAGE KEYS
========================================================= */

const ADVANCED_KEYS = {

    lessonProgress:
        "studyMateLessonProgress",

    quizAnalytics:
        "studyMateQuizAnalytics",

    cbtHistory:
        "studyMateCBTHistory",

    cbtResult:
        "cbtResult",

    examQuestions:
        "examQuestions",

    userAnswers:
        "userAnswers",

    flashcardAnalytics:
        "studyMateFlashcardAnalytics",

    flashcardsReviewed:
        "flashcardsReviewed",

    studyStreak:
        "studyStreak",

    chapterStudyData:
        "studyMateChapterStudyData",

    cbtResetMarker:
        "studyMateCBTAnalyticsReset"

};


/* =========================================================
   3. SAFE JSON READER
========================================================= */

function advancedGetJSON(
    key,
    fallback = {}
) {

    try {

        const value =
            localStorage.getItem(key);


        if (!value) {

            return fallback;

        }


        return JSON.parse(value);

    }

    catch (error) {

        console.warn(
            "StudyMate Advanced Analytics could not read:",
            key,
            error
        );


        return fallback;

    }

}


/* =========================================================
   4. SAFE NUMBER READER
========================================================= */

function advancedGetNumber(
    key,
    fallback = 0
) {

    const value =
        Number(
            localStorage.getItem(key)
        );


    return Number.isFinite(value)
        ? value
        : fallback;

}


/* =========================================================
   5. SAFE STORAGE SETTER
========================================================= */

function advancedSetStorage(
    key,
    value
) {

    try {

        localStorage.setItem(
            key,
            value
        );


        return true;

    }

    catch (error) {

        console.warn(
            "StudyMate could not save:",
            key,
            error
        );


        return false;

    }

}


/* =========================================================
   6. SUBJECT NORMALIZATION
========================================================= */

function advancedNormalizeSubject(
    name
) {

    const text =
        String(name || "")
            .trim()
            .toLowerCase();


    if (
        text === "math" ||
        text === "maths" ||
        text === "mathematics"
    ) {

        return "Mathematics";

    }


    if (
        text === "english" ||
        text === "english language"
    ) {

        return "English";

    }


    if (
        text === "physics"
    ) {

        return "Physics";

    }


    if (
        text === "chemistry"
    ) {

        return "Chemistry";

    }


    if (
        text === "biology"
    ) {

        return "Biology";

    }


    if (
        text === "geography"
    ) {

        return "Geography";

    }


    if (
        text === "computer" ||
        text === "computer studies" ||
        text === "computer science"
    ) {

        return "Computer Studies";

    }


    if (
        text === "history"
    ) {

        return "History";

    }


    if (
        text === "government"
    ) {

        return "Government";

    }


    if (
        text === "economics"
    ) {

        return "Economics";

    }


    if (
        text === "commerce"
    ) {

        return "Commerce";

    }


    if (
        text === "principles of accounts" ||
        text === "principles of accounting" ||
        text === "accounting"
    ) {

        return "Principles of Accounting";

    }


    if (
        text === "literature" ||
        text === "literature in english"
    ) {

        return "Literature";

    }


    if (
        text === "civic" ||
        text === "civic education"
    ) {

        return "Civic Education";

    }


    const matched =
        ADVANCED_SUBJECTS.find(
            subject =>
                subject.toLowerCase() === text
        );


    return matched || name;

}


/* =========================================================
   7. CREATE EMPTY SUBJECT DATA
========================================================= */

function createAdvancedEmptySubjectData() {

    const data = {};


    ADVANCED_SUBJECTS.forEach(
        subject => {

            data[subject] = {

                lessonProgress: 0,

                quizAttempts: 0,
                quizQuestions: 0,
                quizCorrect: 0,
                quizWrong: 0,
                quizPercentage: 0,

                cbtAttempts: 0,
                cbtQuestions: 0,
                cbtCorrect: 0,
                cbtWrong: 0,
                cbtPercentage: 0

            };

        }
    );


    return data;

}


/* =========================================================
   8. LESSON PROGRESS
========================================================= */

function advancedGetLessonProgress() {

    const saved =
        advancedGetJSON(
            ADVANCED_KEYS.lessonProgress,
            {}
        );


    const progress = {};


    ADVANCED_SUBJECTS.forEach(
        subject => {

            progress[subject] = 0;

        }
    );


    if (
        !saved ||
        typeof saved !== "object"
    ) {

        return progress;

    }


    Object.keys(saved)
        .forEach(
            key => {

                const subject =
                    advancedNormalizeSubject(
                        key
                    );


                if (
                    !Object.prototype.hasOwnProperty
                        .call(
                            progress,
                            subject
                        )
                ) {

                    return;

                }


                const value =
                    saved[key];


                let percentage = 0;


                if (
                    typeof value === "number"
                ) {

                    percentage =
                        Number(value) || 0;

                }

                else if (
                    value &&
                    typeof value === "object"
                ) {

                    percentage =
                        Number(
                            value.progress
                        ) || 0;

                }


                percentage =
                    Math.min(
                        Math.max(
                            percentage,
                            0
                        ),
                        100
                    );


                progress[subject] =
                    Math.max(
                        progress[subject],
                        percentage
                    );

            }
        );


    return progress;

}


/* =========================================================
   9. QUIZ ANALYTICS SOURCE
========================================================= */

function advancedGetQuizAnalytics() {

    return advancedGetJSON(
        ADVANCED_KEYS.quizAnalytics,
        {}
    );

}


/* =========================================================
   10. QUIZ DATA
========================================================= */

function advancedGetQuizData() {

    const analytics =
        advancedGetQuizAnalytics();


    const results = {};


    ADVANCED_SUBJECTS.forEach(
        subject => {

            results[subject] = {

                attempts: 0,

                questions: 0,

                correct: 0,

                wrong: 0,

                percentage: 0

            };

        }
    );


    if (
        !analytics ||
        typeof analytics !== "object"
    ) {

        return results;

    }


    Object.keys(analytics)
        .forEach(
            key => {

                const subject =
                    advancedNormalizeSubject(
                        key
                    );


                if (
                    !results[subject]
                ) {

                    return;

                }


                const item =
                    analytics[key] || {};


                const attempts =
                    Number(
                        item.attempts ??
                        item.totalAttempts ??
                        item.quizAttempts ??
                        0
                    ) || 0;


                const questions =
                    Number(
                        item.totalQuestions ??
                        item.questions ??
                        item.questionCount ??
                        0
                    ) || 0;


                const correct =
                    Number(
                        item.correct ??
                        item.correctAnswers ??
                        0
                    ) || 0;


                let wrong =
                    Number(
                        item.wrong ??
                        item.wrongAnswers ??
                        0
                    );


                if (
                    !Number.isFinite(wrong)
                ) {

                    wrong = 0;

                }


                if (
                    wrong === 0 &&
                    questions > correct
                ) {

                    wrong =
                        questions -
                        correct;

                }


                results[subject] = {

                    attempts,

                    questions,

                    correct,

                    wrong,

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

            }
        );


    return results;

}


/* =========================================================
   11. QUIZ TOTALS
========================================================= */

function advancedGetQuizTotals(
    quizData
) {

    let attempts = 0;

    let questions = 0;

    let correct = 0;

    let wrong = 0;


    ADVANCED_SUBJECTS.forEach(
        subject => {

            const data =
                quizData[subject];


            attempts +=
                Number(data.attempts) || 0;


            questions +=
                Number(data.questions) || 0;


            correct +=
                Number(data.correct) || 0;


            wrong +=
                Number(data.wrong) || 0;

        }
    );


    const accuracy =
        questions > 0
            ? Math.round(
                (
                    correct /
                    questions
                ) * 100
            )
            : 0;


    return {

        attempts,

        questions,

        correct,

        wrong,

        accuracy

    };

}


/* =========================================================
   12. GET CBT HISTORY
========================================================= */

function advancedGetCBTHistory() {

    const history =
        advancedGetJSON(
            ADVANCED_KEYS.cbtHistory,
            []
        );


    return Array.isArray(history)
        ? history
        : [];

}


/* =========================================================
   13. SAVE CBT HISTORY
========================================================= */

function advancedSaveCBTHistory(
    history
) {

    try {

        localStorage.setItem(
            ADVANCED_KEYS.cbtHistory,
            JSON.stringify(history)
        );


        return true;

    }

    catch (error) {

        console.warn(
            "Could not save CBT history.",
            error
        );


        return false;

    }

}


/* =========================================================
   14. CBT ATTEMPT ID
========================================================= */

function advancedCreateCBTAttemptId(
    result,
    questions,
    answers
) {

    const questionText =
        Array.isArray(questions)
            ? questions
                .map(
                    question =>
                        String(
                            question?.question ||
                            ""
                        )
                )
                .join("|")
            : "";


    const answerText =
        Array.isArray(answers)
            ? answers
                .map(
                    answer =>
                        String(
                            answer ?? ""
                        )
                )
                .join("|")
            : "";


    return [

        String(
            result?.score ?? 0
        ),

        String(
            result?.total ?? 0
        ),

        String(
            result?.percentage ?? 0
        ),

        String(
            result?.timeUsed ?? ""
        ),

        questionText,

        answerText

    ].join("::");

}


/* =========================================================
   15. GET CURRENT CBT ATTEMPT ID
========================================================= */

function advancedGetCurrentCBTAttemptId() {

    const result =
        advancedGetJSON(
            ADVANCED_KEYS.cbtResult,
            null
        );


    if (
        !result ||
        typeof result !== "object"
    ) {

        return null;

    }


    const questions =
        advancedGetJSON(
            ADVANCED_KEYS.examQuestions,
            []
        );


    const answers =
        advancedGetJSON(
            ADVANCED_KEYS.userAnswers,
            []
        );


    if (
        !Array.isArray(questions) ||
        questions.length === 0
    ) {

        return null;

    }


    return advancedCreateCBTAttemptId(
        result,
        questions,
        answers
    );

}


/* =========================================================
   16. CBT RESET CHECK
========================================================= */

function advancedCBTWasReset() {

    return (
        localStorage.getItem(
            ADVANCED_KEYS.cbtResetMarker
        ) === "true"
    );

}


/* =========================================================
   END OF PART 1
========================================================= */
/* =========================================================
   STUDYMATE ADVANCED ANALYTICS ENGINE
   PART 2 OF 4
========================================================= */


/* =========================================================
   17. CAPTURE LATEST CBT
========================================================= */

function advancedCaptureLatestCBT() {

    /*
       IMPORTANT:

       If Analytics was reset, we do NOT immediately
       capture the old CBT result again.

       However, if the student completes a NEW CBT,
       the CBT data will change and we will allow
       the new attempt to be captured.
    */


    const result =
        advancedGetJSON(
            ADVANCED_KEYS.cbtResult,
            null
        );


    if (
        !result ||
        typeof result !== "object"
    ) {

        return;

    }


    const questions =
        advancedGetJSON(
            ADVANCED_KEYS.examQuestions,
            []
        );


    const answers =
        advancedGetJSON(
            ADVANCED_KEYS.userAnswers,
            []
        );


    if (
        !Array.isArray(questions) ||
        questions.length === 0
    ) {

        return;

    }


    const attemptId =
        advancedCreateCBTAttemptId(
            result,
            questions,
            answers
        );


    /*
       =====================================================
       CRITICAL RESET LOGIC
       =====================================================

       If reset marker is true, compare the CURRENT CBT
       against the CBT that existed when reset happened.

       If it is the SAME CBT:
       - ignore it

       If it is a DIFFERENT CBT:
       - this is a new attempt
       - capture it normally
    */


    const resetMarker =
        localStorage.getItem(
            ADVANCED_KEYS.cbtResetMarker
        );


    if (
        resetMarker &&
        resetMarker === attemptId
    ) {

        return;

    }


    /*
       If marker exists but the CBT is now different,
       the student has completed a NEW CBT.

       Remove the reset marker so future analytics
       work normally.
    */

    if (
        resetMarker &&
        resetMarker !== attemptId
    ) {

        localStorage.removeItem(
            ADVANCED_KEYS.cbtResetMarker
        );

    }


    let history =
        advancedGetCBTHistory();


    /*
       Prevent duplicate attempts.
    */

    if (
        history.some(
            attempt =>
                attempt &&
                attempt.id === attemptId
        )
    ) {

        return;

    }


    /*
       Create subject breakdown.
    */

    const subjectData = {};


    ADVANCED_SUBJECTS.forEach(
        subject => {

            subjectData[subject] = {

                questions: 0,

                correct: 0,

                wrong: 0

            };

        }
    );


    /*
       Analyze every CBT question.
    */

    questions.forEach(
        (question, index) => {

            if (
                !question ||
                typeof question !== "object"
            ) {

                return;

            }


            const subject =
                advancedNormalizeSubject(
                    question.subject
                );


            if (
                !subjectData[subject]
            ) {

                return;

            }


            subjectData[subject]
                .questions++;


            const userAnswer =
                answers[index];


            const correctAnswer =
                question.answer;


            if (
                userAnswer !== undefined &&
                userAnswer !== null &&
                userAnswer !== ""
            ) {

                if (
                    String(userAnswer) ===
                    String(correctAnswer)
                ) {

                    subjectData[subject]
                        .correct++;

                }

                else {

                    subjectData[subject]
                        .wrong++;

                }

            }

            else {

                /*
                   Unanswered questions count as wrong
                   for performance calculations.
                */

                subjectData[subject]
                    .wrong++;

            }

        }
    );


    /*
       Convert to clean CBT history format.
    */

    const subjectCBT = {};


    ADVANCED_SUBJECTS.forEach(
        subject => {

            subjectCBT[subject] = {

                questions:
                    subjectData[subject]
                        .questions,

                correct:
                    subjectData[subject]
                        .correct,

                wrong:
                    subjectData[subject]
                        .wrong

            };

        }
    );


    /*
       Save complete CBT attempt.
    */

    history.push({

        id:
            attemptId,

        date:
            new Date().toISOString(),

        score:
            Number(result.score) || 0,

        total:
            Number(result.total) ||
            questions.length,

        percentage:
            Number(result.percentage) || 0,

        timeUsed:
            result.timeUsed ||
            "00:00",

        subjects:
            subjectCBT

    });


    advancedSaveCBTHistory(
        history
    );

}


/* =========================================================
   18. BUILD CBT ANALYTICS
========================================================= */

function advancedGetCBTData() {

    /*
       Capture a new CBT if one exists.
    */

    advancedCaptureLatestCBT();


    const history =
        advancedGetCBTHistory();


    const results = {};


    ADVANCED_SUBJECTS.forEach(
        subject => {

            results[subject] = {

                attempts: 0,

                questions: 0,

                correct: 0,

                wrong: 0,

                percentage: 0

            };

        }
    );


    history.forEach(
        attempt => {

            if (
                !attempt ||
                !attempt.subjects
            ) {

                return;

            }


            ADVANCED_SUBJECTS.forEach(
                subject => {

                    const data =
                        attempt.subjects[
                            subject
                        ];


                    if (
                        !data
                    ) {

                        return;

                    }


                    const questions =
                        Number(
                            data.questions
                        ) || 0;


                    const correct =
                        Number(
                            data.correct
                        ) || 0;


                    const wrong =
                        Number(
                            data.wrong
                        ) || 0;


                    if (
                        questions <= 0
                    ) {

                        return;

                    }


                    results[subject]
                        .attempts++;


                    results[subject]
                        .questions +=
                        questions;


                    results[subject]
                        .correct +=
                        correct;


                    results[subject]
                        .wrong +=
                        wrong;

                }
            );

        }
    );


    /*
       Calculate subject percentages.
    */

    ADVANCED_SUBJECTS.forEach(
        subject => {

            const data =
                results[subject];


            data.percentage =
                data.questions > 0
                    ? Math.round(
                        (
                            data.correct /
                            data.questions
                        ) * 100
                    )
                    : 0;

        }
    );


    return results;

}


/* =========================================================
   19. CBT TOTALS
========================================================= */

function advancedGetCBTTotals(
    cbtData
) {

    let attempts = 0;

    let questions = 0;

    let correct = 0;

    let wrong = 0;


    ADVANCED_SUBJECTS.forEach(
        subject => {

            const data =
                cbtData[subject];


            attempts +=
                Number(data.attempts) || 0;


            questions +=
                Number(data.questions) || 0;


            correct +=
                Number(data.correct) || 0;


            wrong +=
                Number(data.wrong) || 0;

        }
    );


    const accuracy =
        questions > 0
            ? Math.round(
                (
                    correct /
                    questions
                ) * 100
            )
            : 0;


    return {

        attempts,

        questions,

        correct,

        wrong,

        accuracy

    };

}


/* =========================================================
   20. FLASHCARD ANALYTICS
========================================================= */

function advancedGetFlashcards() {

    const analytics =
        advancedGetJSON(
            ADVANCED_KEYS.flashcardAnalytics,
            {}
        );


    let total = 0;


    if (
        analytics &&
        typeof analytics === "object"
    ) {

        Object.values(analytics)
            .forEach(
                data => {

                    if (
                        data &&
                        typeof data === "object"
                    ) {

                        total +=
                            Number(
                                data.reviewed
                            ) || 0;

                    }

                }
            );

    }


    const savedTotal =
        advancedGetNumber(
            ADVANCED_KEYS.flashcardsReviewed,
            0
        );


    return Math.max(
        total,
        savedTotal
    );

}


/* =========================================================
   21. CALCULATE OVERALL LEARNING PROGRESS
========================================================= */

function advancedCalculateOverallProgress(
    lessonProgress,
    flashcards
) {

    let lessonTotal = 0;

    let completedSubjects = 0;


    ADVANCED_SUBJECTS.forEach(
        subject => {

            const progress =
                Number(
                    lessonProgress[subject]
                ) || 0;


            lessonTotal +=
                progress;


            if (
                progress >= 100
            ) {

                completedSubjects++;

            }

        }
    );


    const averageLessonProgress =
        Math.round(
            lessonTotal /
            ADVANCED_SUBJECTS.length
        );


    /*
       Lessons = 90%
       Flashcards = 10%
    */

    const subjectWeight =
        90 /
        ADVANCED_SUBJECTS.length;


    let lessonContribution = 0;


    ADVANCED_SUBJECTS.forEach(
        subject => {

            const progress =
                Number(
                    lessonProgress[subject]
                ) || 0;


            lessonContribution +=
                (
                    progress /
                    100
                ) *
                subjectWeight;

        }
    );


    const flashcardContribution =
        Math.min(
            (
                flashcards /
                100
            ) * 10,
            10
        );


    let overallProgress =
        lessonContribution +
        flashcardContribution;


    if (
        completedSubjects ===
            ADVANCED_SUBJECTS.length &&
        flashcards >= 100
    ) {

        overallProgress = 100;

    }


    overallProgress =
        Math.min(
            Math.max(
                overallProgress,
                0
            ),
            100
        );


    return {

        overallProgress:
            Math.round(
                overallProgress
            ),

        averageLessonProgress,

        completedSubjects,

        remainingSubjects:
            ADVANCED_SUBJECTS.length -
            completedSubjects

    };

}


/* =========================================================
   22. GET COMPLETE ADVANCED DATA
========================================================= */

function getAdvancedData() {

    const lessonProgress =
        advancedGetLessonProgress();


    const quiz =
        advancedGetQuizData();


    const quizTotals =
        advancedGetQuizTotals(
            quiz
        );


    const cbt =
        advancedGetCBTData();


    const cbtTotals =
        advancedGetCBTTotals(
            cbt
        );


    const flashcards =
        advancedGetFlashcards();


    const progress =
        advancedCalculateOverallProgress(
            lessonProgress,
            flashcards
        );


    const subjects = {};


    ADVANCED_SUBJECTS.forEach(
        subject => {

            subjects[subject] = {

                lessonProgress:
                    lessonProgress[subject] ||
                    0,

                quiz:
                    quiz[subject],

                cbt:
                    cbt[subject]

            };

        }
    );


    return {

        lessonProgress,

        quiz,

        quizTotals,

        cbt,

        cbtTotals,

        flashcards,

        overallProgress:
            progress.overallProgress,

        averageLessonProgress:
            progress.averageLessonProgress,

        completedSubjects:
            progress.completedSubjects,

        remainingSubjects:
            progress.remainingSubjects,

        totalSubjects:
            ADVANCED_SUBJECTS.length,

        studyStreak:
    (
        window.StudyMateStreak &&
        typeof window.StudyMateStreak.getCurrentStreak === "function"
    )
        ? Number(
            window.StudyMateStreak.getCurrentStreak()
        ) || 0
        : 0,

        subjects

    };

}


/* =========================================================
   END OF PART 2
========================================================= */
/* =========================================================
   STUDYMATE ADVANCED ANALYTICS ENGINE
   PART 3 OF 4
========================================================= */


/* =========================================================
   23. STRONGEST SUBJECT
========================================================= */

function advancedGetStrongestSubject(
    data
) {

    const attempted =
        ADVANCED_SUBJECTS.filter(
            subject => {

                return (
                    data.cbt[subject].questions > 0 ||
                    data.quiz[subject].questions > 0
                );

            }
        );


    if (
        attempted.length === 0
    ) {

        return "—";

    }


    let strongest =
        attempted[0];


    let strongestScore =
        -1;


    attempted.forEach(
        subject => {

            const cbt =
                data.cbt[subject];


            const quiz =
                data.quiz[subject];


            let score = 0;

            let count = 0;


            if (
                cbt.questions > 0
            ) {

                score +=
                    cbt.percentage;

                count++;

            }


            if (
                quiz.questions > 0
            ) {

                score +=
                    quiz.percentage;

                count++;

            }


            const average =
                count > 0
                    ? score / count
                    : 0;


            if (
                average >
                strongestScore
            ) {

                strongestScore =
                    average;

                strongest =
                    subject;

            }

        }
    );


    return strongest;

}


/* =========================================================
   24. WEAKEST SUBJECT
========================================================= */

function advancedGetWeakestSubject(
    data
) {

    const attempted =
        ADVANCED_SUBJECTS.filter(
            subject => {

                return (
                    data.cbt[subject].questions > 0 ||
                    data.quiz[subject].questions > 0
                );

            }
        );


    if (
        attempted.length === 0
    ) {

        return "—";

    }


    let weakest =
        attempted[0];


    let weakestScore =
        101;


    attempted.forEach(
        subject => {

            const cbt =
                data.cbt[subject];


            const quiz =
                data.quiz[subject];


            let score = 0;

            let count = 0;


            if (
                cbt.questions > 0
            ) {

                score +=
                    cbt.percentage;

                count++;

            }


            if (
                quiz.questions > 0
            ) {

                score +=
                    quiz.percentage;

                count++;

            }


            const average =
                count > 0
                    ? score / count
                    : 0;


            if (
                average <
                weakestScore
            ) {

                weakestScore =
                    average;

                weakest =
                    subject;

            }

        }
    );


    return weakest;

}


/* =========================================================
   25. SAFE TEXT SETTER
========================================================= */

function advancedSetText(
    id,
    value
) {

    const element =
        document.getElementById(
            id
        );


    if (
        element
    ) {

        element.textContent =
            value;

    }

}


/* =========================================================
   26. DISPLAY OVERALL PROGRESS
========================================================= */

function displayAdvancedOverall(
    data
) {

    advancedSetText(
        "advancedOverallProgress",
        data.overallProgress + "%"
    );


    const progressFill =
        document.getElementById(
            "advancedOverallProgressFill"
        );


    if (
        progressFill
    ) {

        progressFill.style.width =
            data.overallProgress + "%";

    }


    let message;


    if (
        data.overallProgress === 0
    ) {

        message =
            "Start studying to generate personalized learning insights.";

    }

    else if (
        data.overallProgress < 25
    ) {

        message =
            "Good start! Keep completing your lessons and quizzes.";

    }

    else if (
        data.overallProgress < 50
    ) {

        message =
            "You're making progress. Keep studying consistently.";

    }

    else if (
        data.overallProgress < 80
    ) {

        message =
            "Great progress! Keep working through your remaining subjects.";

    }

    else if (
        data.overallProgress < 100
    ) {

        message =
            "Excellent progress! You're getting close to completing your learning journey.";

    }

    else {

        message =
            "🎉 Outstanding! Your complete learning progress is finished.";

    }


    advancedSetText(
        "advancedProgressMessage",
        message
    );

}


/* =========================================================
   27. DISPLAY GENERAL STATISTICS
========================================================= */

function displayAdvancedStatistics(
    data
) {

    advancedSetText(
        "advancedSubjectsCompleted",
        data.completedSubjects
    );


    advancedSetText(
        "advancedLessonProgress",
        data.averageLessonProgress +
        "%"
    );


    advancedSetText(
        "advancedQuizAttempts",
        data.quizTotals.attempts
    );


    advancedSetText(
        "advancedFlashcards",
        data.flashcards
    );


    advancedSetText(
        "advancedStudyStreak",
        data.studyStreak +
        " days"
    );


    advancedSetText(
        "advancedSubjectsRemaining",
        data.remainingSubjects
    );

}


/* =========================================================
   28. DISPLAY CBT PERFORMANCE
========================================================= */

function displayAdvancedCBT(
    data
) {

    advancedSetText(
        "advancedCBTQuestions",
        data.cbtTotals.questions
    );


    advancedSetText(
        "advancedCBTCorrect",
        data.cbtTotals.correct
    );


    advancedSetText(
        "advancedCBTWrong",
        data.cbtTotals.wrong
    );


    advancedSetText(
        "advancedCBTAccuracy",
        data.cbtTotals.accuracy +
        "%"
    );


    advancedSetText(
        "advancedCBTScore",
        data.cbtTotals.accuracy +
        "%"
    );


    advancedSetText(
        "advancedCBTAttempts",
        data.cbtTotals.attempts
    );


    const progress =
        document.getElementById(
            "advancedCBTProgress"
        );


    if (
        progress
    ) {

        progress.style.width =
            data.cbtTotals.accuracy +
            "%";

    }


    const alternativeProgress =
        document.getElementById(
            "advancedCBTProgressFill"
        );


    if (
        alternativeProgress
    ) {

        alternativeProgress.style.width =
            data.cbtTotals.accuracy +
            "%";

    }

}


/* =========================================================
   29. DISPLAY QUIZ PERFORMANCE
========================================================= */

function displayAdvancedQuiz(
    data
) {

    advancedSetText(
        "advancedQuizAttempts",
        data.quizTotals.attempts
    );


    advancedSetText(
        "advancedQuizQuestions",
        data.quizTotals.questions
    );


    advancedSetText(
        "advancedQuizCorrect",
        data.quizTotals.correct
    );


    advancedSetText(
        "advancedQuizWrong",
        data.quizTotals.wrong
    );


    advancedSetText(
        "advancedQuizAccuracy",
        data.quizTotals.accuracy +
        "%"
    );


    advancedSetText(
        "advancedQuizScore",
        data.quizTotals.accuracy +
        "%"
    );


    const quizProgress =
        document.getElementById(
            "advancedQuizProgress"
        );


    if (
        quizProgress
    ) {

        quizProgress.style.width =
            data.quizTotals.accuracy +
            "%";

    }


    const quizFill =
        document.getElementById(
            "advancedQuizProgressFill"
        );


    if (
        quizFill
    ) {

        quizFill.style.width =
            data.quizTotals.accuracy +
            "%";

    }

}


/* =========================================================
   30. DISPLAY SUBJECT PERFORMANCE
========================================================= */

function displayAdvancedSubjects(
    data
) {

    const container =
        document.getElementById(
            "advancedSubjectPerformance"
        );


    if (
        !container
    ) {

        return;

    }


    container.innerHTML = "";


    ADVANCED_SUBJECTS.forEach(
        subject => {

            const lesson =
                data.lessonProgress[
                    subject
                ] || 0;


            const quiz =
                data.quiz[
                    subject
                ];


            const cbt =
                data.cbt[
                    subject
                ];


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "advanced-subject-card";


            const quizPercentage =
                quiz.questions > 0
                    ? quiz.percentage
                    : 0;


            const cbtPercentage =
                cbt.questions > 0
                    ? cbt.percentage
                    : 0;


            const quizDisplay =
                quiz.questions > 0
                    ? quiz.percentage +
                      "%"
                    : "—";


            const cbtDisplay =
                cbt.questions > 0
                    ? cbt.percentage +
                      "%"
                    : "—";


            card.innerHTML = `

                <div
                    class="advanced-subject-header"
                >

                    <strong>
                        ${subject}
                    </strong>

                </div>


                <div
                    class="advanced-subject-row"
                >

                    <span>
                        📖 Lesson Progress
                    </span>

                    <strong>
                        ${lesson}%
                    </strong>

                </div>


                <div
                    class="advanced-mini-bar"
                >

                    <div
                        style="width:${lesson}%"
                    ></div>

                </div>


                <div
                    class="advanced-subject-row"
                >

                    <span>
                        📝 Quiz Performance
                    </span>

                    <strong>
                        ${quizDisplay}
                    </strong>

                </div>


                <div
                    class="advanced-mini-bar quiz"
                >

                    <div
                        style="width:${quizPercentage}%"
                    ></div>

                </div>


                <div
                    class="advanced-subject-details"
                >

                    Quiz:
                    ${quiz.correct}/${quiz.questions}
                    correct
                    •
                    ${quiz.attempts}
                    attempt${quiz.attempts === 1 ? "" : "s"}

                </div>


                <div
                    class="advanced-subject-row"
                >

                    <span>
                        🎯 CBT Performance
                    </span>

                    <strong>
                        ${cbtDisplay}
                    </strong>

                </div>


                <div
                    class="advanced-mini-bar cbt"
                >

                    <div
                        style="width:${cbtPercentage}%"
                    ></div>

                </div>


                <div
                    class="advanced-subject-details"
                >

                    CBT:
                    ${cbt.correct}/${cbt.questions}
                    correct
                    •
                    ${cbt.attempts}
                    attempt${cbt.attempts === 1 ? "" : "s"}

                </div>

            `;


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   31. DISPLAY STRONGEST / WEAKEST
========================================================= */

function displayAdvancedHighlights(
    data
) {

    const strongest =
        advancedGetStrongestSubject(
            data
        );


    const weakest =
        advancedGetWeakestSubject(
            data
        );


    advancedSetText(
        "advancedStrongestSubject",
        strongest
    );


    advancedSetText(
        "advancedWeakestSubject",
        weakest
    );

}


/* =========================================================
   32. PERSONALIZED INSIGHTS
========================================================= */

function displayAdvancedInsights(
    data
) {

    const container =
        document.getElementById(
            "advancedPersonalizedInsights"
        ) ||
        document.getElementById(
            "advancedInsights"
        );


    if (
        !container
    ) {

        console.warn(
            "Personalized Insights container not found."
        );

        return;

    }


    const insights = [];


    /*
       Overall progress
    */

    if (
        data.overallProgress === 0
    ) {

        insights.push(
            "📚 Start studying lessons to begin building your learning progress."
        );

    }

    else if (
        data.overallProgress >= 80
    ) {

        insights.push(
            "🚀 Your overall learning progress is excellent. Keep pushing toward 100%."
        );

    }

    else {

        insights.push(
            `📈 Your overall learning progress is ${data.overallProgress}%. Keep studying consistently.`
        );

    }


    /*
       Remaining subjects
    */

    if (
        data.remainingSubjects > 0
    ) {

        insights.push(
            `📖 You have ${data.remainingSubjects} subject${data.remainingSubjects === 1 ? "" : "s"} remaining to complete.`
        );

    }

    else {

        insights.push(
            "🎉 You have completed all subjects!"
        );

    }


    /*
       Quiz
    */

    if (
        data.quizTotals.questions > 0
    ) {

        if (
            data.quizTotals.accuracy >= 80
        ) {

            insights.push(
                `📝 Your quiz accuracy is ${data.quizTotals.accuracy}%, which is excellent.`
            );

        }

        else if (
            data.quizTotals.accuracy >= 60
        ) {

            insights.push(
                `📝 Your quiz accuracy is ${data.quizTotals.accuracy}%. Keep practicing to improve it further.`
            );

        }

        else {

            insights.push(
                `📚 Your quiz accuracy is ${data.quizTotals.accuracy}%. More practice can help strengthen your understanding.`
            );

        }

    }

    else {

        insights.push(
            "📝 Complete a quiz to start receiving quiz-specific insights."
        );

    }


    /*
       CBT
    */

    if (
        data.cbtTotals.questions > 0
    ) {

        if (
            data.cbtTotals.accuracy >= 80
        ) {

            insights.push(
                `🎯 Your CBT accuracy is ${data.cbtTotals.accuracy}%. Excellent performance.`
            );

        }

        else if (
            data.cbtTotals.accuracy >= 60
        ) {

            insights.push(
                `🎯 Your CBT accuracy is ${data.cbtTotals.accuracy}%. Keep practicing to improve your score.`
            );

        }

        else {

            insights.push(
                `🎯 Your CBT accuracy is ${data.cbtTotals.accuracy}%. Review your weak areas before your next CBT.`
            );

        }

    }

    else {

        insights.push(
            "🎯 Complete a CBT to generate CBT performance insights."
        );

    }


    /*
       Flashcards
    */

    if (
        data.flashcards > 0
    ) {

        insights.push(
            `🧠 You have reviewed ${data.flashcards} flashcards. Keep using flashcards to reinforce what you learn.`
        );

    }


    /*
       Streak
    */

    if (
        data.studyStreak > 0
    ) {

        insights.push(
            `🔥 You currently have a ${data.studyStreak}-day study streak. Keep it going!`
        );

    }


    /*
       Strongest / weakest
    */

    const strongest =
        advancedGetStrongestSubject(
            data
        );


    const weakest =
        advancedGetWeakestSubject(
            data
        );


    if (
        strongest !== "—"
    ) {

        insights.push(
            `💪 Your strongest current subject is ${strongest}.`
        );

    }


    if (
        weakest !== "—"
    ) {

        insights.push(
            `⚠️ Consider giving extra practice to ${weakest}.`
        );

    }


    container.innerHTML =
        insights
            .map(
                insight =>
                    `<p>${insight}</p>`
            )
            .join("");

}


/* =========================================================
   END OF PART 3
========================================================= */
/* =========================================================
   STUDYMATE ADVANCED ANALYTICS ENGINE
   PART 4 OF 4
========================================================= */


/* =========================================================
   33. LESSON ACTIVITY
========================================================= */

function advancedGetLessonActivity() {

    const chapterData =
        advancedGetJSON(
            ADVANCED_KEYS.chapterStudyData,
            {}
        );


    const activities = [];


    if (
        !chapterData ||
        typeof chapterData !== "object"
    ) {

        return activities;

    }


    Object.keys(chapterData)
        .forEach(
            subjectKey => {

                const subject =
                    advancedNormalizeSubject(
                        subjectKey
                    );


                const subjectData =
                    chapterData[
                        subjectKey
                    ];


                if (
                    !subjectData ||
                    typeof subjectData !== "object"
                ) {

                    return;

                }


                Object.keys(subjectData)
                    .forEach(
                        chapter => {

                            const record =
                                subjectData[
                                    chapter
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


                            if (
                                seconds <= 0
                            ) {

                                return;

                            }


                            const timestamp =
                                record.lastStudied
                                    ? new Date(
                                        record.lastStudied
                                    ).getTime()
                                    : 0;


                            activities.push({

                                type:
                                    "lesson",

                                subject,

                                chapter,

                                seconds,

                                timestamp,

                                completed:
                                    Boolean(
                                        record.completed
                                    )

                            });

                        }
                    );

            }
        );


    return activities;

}


/* =========================================================
   34. QUIZ ACTIVITY
========================================================= */

function advancedGetQuizActivity() {

    const analytics =
        advancedGetQuizAnalytics();


    const activities = [];


    if (
        !analytics ||
        typeof analytics !== "object"
    ) {

        return activities;

    }


    Object.keys(analytics)
        .forEach(
            key => {

                const subject =
                    advancedNormalizeSubject(
                        key
                    );


                const data =
                    analytics[key];


                if (
                    !data ||
                    typeof data !== "object"
                ) {

                    return;

                }


                const attempts =
                    Number(
                        data.attempts ??
                        data.totalAttempts ??
                        0
                    ) || 0;


                const questions =
                    Number(
                        data.totalQuestions ??
                        data.questions ??
                        0
                    ) || 0;


                const correct =
                    Number(
                        data.correct ??
                        data.correctAnswers ??
                        0
                    ) || 0;


                if (
                    attempts <= 0 &&
                    questions <= 0
                ) {

                    return;

                }


                const possibleDate =
                    data.lastAttempt ||
                    data.lastAttemptDate ||
                    data.lastPlayed ||
                    data.updatedAt ||
                    data.timestamp ||
                    null;


                const timestamp =
                    possibleDate
                        ? new Date(
                            possibleDate
                        ).getTime()
                        : 0;


                activities.push({

                    type:
                        "quiz",

                    subject,

                    attempts,

                    questions,

                    correct,

                    percentage:
                        questions > 0
                            ? Math.round(
                                (
                                    correct /
                                    questions
                                ) * 100
                            )
                            : 0,

                    timestamp

                });

            }
        );


    return activities;

}


/* =========================================================
   35. CBT ACTIVITY
========================================================= */

function advancedGetCBTActivity() {

    const history =
        advancedGetCBTHistory();


    return history.map(
        attempt => {

            return {

                type:
                    "cbt",

                score:
                    Number(
                        attempt.score
                    ) || 0,

                total:
                    Number(
                        attempt.total
                    ) || 0,

                percentage:
                    Number(
                        attempt.percentage
                    ) || 0,

                timestamp:
                    attempt.date
                        ? new Date(
                            attempt.date
                        ).getTime()
                        : 0,

                date:
                    attempt.date || ""

            };

        }
    );

}


/* =========================================================
   36. FLASHCARD ACTIVITY
========================================================= */

function advancedGetFlashcardActivity() {

    const total =
        advancedGetFlashcards();


    if (
        total <= 0
    ) {

        return [];

    }


    return [

        {

            type:
                "flashcard",

            total,

            timestamp:
                Date.now()

        }

    ];

}


/* =========================================================
   37. COMPLETE ACTIVITY LIST
========================================================= */

function advancedGetAllActivity() {

    const activities = [

        ...advancedGetLessonActivity(),

        ...advancedGetQuizActivity(),

        ...advancedGetCBTActivity(),

        ...advancedGetFlashcardActivity()

    ];


    return activities.sort(
        (a, b) =>
            b.timestamp -
            a.timestamp
    );

}


/* =========================================================
   38. FORMAT ACTIVITY DATE
========================================================= */

function advancedFormatDate(
    timestamp
) {

    if (
        !timestamp
    ) {

        return "Recent activity";

    }


    try {

        return new Date(
            timestamp
        ).toLocaleString();

    }

    catch {

        return "Recent activity";

    }

}


/* =========================================================
   39. DISPLAY RECENT ACTIVITY
========================================================= */

function displayAdvancedActivity() {

    const container =
        document.getElementById(
            "advancedActivity"
        ) ||
        document.getElementById(
            "advancedActivityHistory"
        );


    if (
        !container
    ) {

        console.warn(
            "Advanced activity container not found."
        );

        return;

    }


    const activities =
        advancedGetAllActivity();


    if (
        activities.length === 0
    ) {

        container.innerHTML = `

            <div class="advanced-empty">

                📚

                <p>
                    Your recent study activity
                    will appear here as you learn.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    activities
        .slice(0, 20)
        .forEach(
            activity => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "advanced-history-item";


                if (
                    activity.type === "lesson"
                ) {

                    const minutes =
                        Math.floor(
                            activity.seconds /
                            60
                        );


                    item.innerHTML = `

                        <div class="activity-icon">
                            📖
                        </div>

                        <div>

                            <strong>
                                ${activity.subject}
                            </strong>

                            <span>
                                Chapter
                                ${activity.chapter}
                                studied
                                ${
                                    activity.completed
                                        ? " • ✅ Completed"
                                        : ""
                                }
                            </span>

                            <small>
                                ${minutes}
                                minute${minutes === 1 ? "" : "s"}
                                •
                                ${advancedFormatDate(
                                    activity.timestamp
                                )}
                            </small>

                        </div>

                    `;

                }


                else if (
                    activity.type === "quiz"
                ) {

                    item.innerHTML = `

                        <div class="activity-icon">
                            📝
                        </div>

                        <div>

                            <strong>
                                ${activity.subject}
                                Quiz
                            </strong>

                            <span>
                                ${activity.correct}/${activity.questions}
                                correct
                                •
                                ${activity.percentage}%
                            </span>

                            <small>
                                ${activity.attempts}
                                quiz attempt${activity.attempts === 1 ? "" : "s"}
                                ${
                                    activity.timestamp
                                        ? " • " +
                                          advancedFormatDate(
                                              activity.timestamp
                                          )
                                        : ""
                                }
                            </small>

                        </div>

                    `;

                }


                else if (
                    activity.type === "cbt"
                ) {

                    item.innerHTML = `

                        <div class="activity-icon">
                            🎯
                        </div>

                        <div>

                            <strong>
                                CBT Assessment
                            </strong>

                            <span>
                                ${activity.score}/${activity.total}
                                •
                                ${activity.percentage}%
                            </span>

                            <small>
                                CBT completed
                                •
                                ${advancedFormatDate(
                                    activity.timestamp
                                )}
                            </small>

                        </div>

                    `;

                }


                else if (
                    activity.type === "flashcard"
                ) {

                    item.innerHTML = `

                        <div class="activity-icon">
                            🧠
                        </div>

                        <div>

                            <strong>
                                Flashcards Reviewed
                            </strong>

                            <span>
                                ${activity.total}
                                flashcards reviewed
                            </span>

                            <small>
                                Flashcard activity recorded
                            </small>

                        </div>

                    `;

                }


                container.appendChild(
                    item
                );

            }
        );

}



/* =========================================================
   40. RESET ADVANCED ANALYTICS
   TRUE FRESH START — KEEP STUDY STREAK
========================================================= */

function setupAdvancedReset() {

    const resetButton =
        document.getElementById(
            "advancedAnalyticsReset"
        ) ||
        document.getElementById(
            "resetAnalyticsBtn"
        );


    if (!resetButton) {

        console.warn(
            "Advanced Analytics reset button not found."
        );

        return;

    }


    resetButton.onclick = () => {

        const confirmed =
            confirm(

                "⚠️ RESET STUDYMATE ANALYTICS?\n\n" +

                "This will completely reset:\n\n" +

                "• Lesson progress\n" +
                "• Chapter study activity\n" +
                "• Quiz analytics\n" +
                "• CBT results\n" +
                "• CBT questions\n" +
                "• CBT answers\n" +
                "• CBT analytics history\n" +
                "• Flashcard analytics\n" +
                "• Flashcard review count\n\n" +

                "Your STUDY STREAK will NOT be reset.\n" +
                "Your account will NOT be deleted.\n\n" +

                "After the reset, CBT results will remain empty " +
                "until the student takes a new CBT.\n\n" +

                "Continue?"

            );


        if (!confirmed) {

            return;

        }


        /* =================================================
           LESSON PROGRESS
        ================================================= */

        localStorage.removeItem(
            ADVANCED_KEYS.lessonProgress
        );


        /* =================================================
           CHAPTER STUDY ACTIVITY
        ================================================= */

        localStorage.removeItem(
            ADVANCED_KEYS.chapterStudyData
        );


        /* =================================================
           QUIZ ANALYTICS
        ================================================= */

        localStorage.removeItem(
            ADVANCED_KEYS.quizAnalytics
        );


        /* =================================================
           CBT ANALYTICS HISTORY
        ================================================= */

        localStorage.removeItem(
            ADVANCED_KEYS.cbtHistory
        );


        /* =================================================
           CBT CURRENT RESULT
           
           IMPORTANT:
           The CBT result must disappear after reset.
        ================================================= */

        localStorage.removeItem(
            ADVANCED_KEYS.cbtResult
        );


        /* =================================================
           CBT QUESTIONS
        ================================================= */

        localStorage.removeItem(
            ADVANCED_KEYS.examQuestions
        );


        /* =================================================
           CBT USER ANSWERS
        ================================================= */

        localStorage.removeItem(
            ADVANCED_KEYS.userAnswers
        );


        /* =================================================
           OTHER CBT SESSION DATA
        ================================================= */

        localStorage.removeItem(
            "cbtQuestions"
        );


        localStorage.removeItem(
            "cbtAnswers"
        );


        localStorage.removeItem(
            "currentCBT"
        );


        localStorage.removeItem(
            "currentExam"
        );


        localStorage.removeItem(
            "examResult"
        );


        /* =================================================
           FLASHCARD ANALYTICS
        ================================================= */

        localStorage.removeItem(
            ADVANCED_KEYS.flashcardAnalytics
        );


        localStorage.removeItem(
            ADVANCED_KEYS.flashcardsReviewed
        );


        /* =================================================
           IMPORTANT:
           DO NOT DELETE studyStreak
           
           The student's streak survives the reset.
        ================================================= */


        /* =================================================
           REMOVE OLD CBT RESET MARKER
           
           We don't need it because the old CBT itself
           has already been completely cleared.
        ================================================= */

        localStorage.removeItem(
            ADVANCED_KEYS.cbtResetMarker
        );


        /* =================================================
           SUCCESS MESSAGE
        ================================================= */

        alert(

            "✅ StudyMate has been reset successfully.\n\n" +

            "📖 Lessons: 0%\n" +
            "📝 Quizzes: 0\n" +
            "🎯 CBT: 0%\n" +
            "🧠 Flashcards: 0\n\n" +

            "🔥 Your study streak has been preserved.\n\n" +

            "Take a new CBT to begin recording new results."

        );


        /* =================================================
           RELOAD
        ================================================= */

        window.location.reload();

    };

}
/* =========================================================
   41. INITIALIZE ADVANCED ANALYTICS
========================================================= */

function initializeAdvancedAnalytics() {

    const data =
        getAdvancedData();


    /*
       Overall progress
    */

    displayAdvancedOverall(
        data
    );


    /*
       General statistics
    */

    displayAdvancedStatistics(
        data
    );


    /*
       CBT
    */

    displayAdvancedCBT(
        data
    );


    /*
       Quiz
    */

    displayAdvancedQuiz(
        data
    );


    /*
       Subject performance
    */

    displayAdvancedSubjects(
        data
    );


    /*
       Strongest / weakest
    */

    displayAdvancedHighlights(
        data
    );


    /*
       Personalized insights
    */

    displayAdvancedInsights(
        data
    );


    /*
       Recent activity
    */

    displayAdvancedActivity();


    /*
       Reset button
    */

    setupAdvancedReset();


    /*
       Debug information
    */

    console.log(
        "=========================================="
    );


    console.log(
        "StudyMate Advanced Analytics loaded."
    );


    console.log(
        "Quiz Analytics:",
        data.quiz
    );


   console.log(
        "Quiz Totals:",
        data.quizTotals
    );


    console.log(
        "CBT Analytics:",
        data.cbt
    );


    console.log(
        "CBT Totals:",
        data.cbtTotals
    );


    console.log(
        "Lesson Progress:",
        data.lessonProgress
    );


    console.log(
        "Flashcards:",
        data.flashcards
    );


    console.log(
        "CBT Reset Marker:",
        localStorage.getItem(
            ADVANCED_KEYS.cbtResetMarker
        )
    );


    console.log(
        "Current CBT ID:",
        advancedGetCurrentCBTAttemptId()
    );


    console.log(
        "Recent Activity:",
        advancedGetAllActivity()
    );


    console.log(
        "Complete Advanced Data:",
        data
    );


    console.log(
        "=========================================="
    );

}


/* =========================================================
   42. START
========================================================= */

initializeAdvancedAnalytics();


/* =========================================================
   END OF STUDYMATE ADVANCED ANALYTICS ENGINE
========================================================= */