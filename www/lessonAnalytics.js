// ==========================================
// STUDYMATE LESSON ANALYTICS
// UNIVERSAL CHAPTER + STUDY TIME TRACKER
// ==========================================
//
// RULES
// ------------------------------------------
// • Each subject = 90% / 14
// • Each subject ≈ 6.43% maximum
// • Each subject is divided by its REAL
//   number of chapters
// • Each chapter = 60 minutes maximum
// • 60 minutes = 100% of that chapter
// • Study time continues across different days
// • Timer is completely hidden
// • Timer pauses when page is inactive
// • Chapter must reach its END before
//   becoming fully completed
// • Progress is never counted twice
// ==========================================


// ==========================================
// SETTINGS
// ==========================================

const LESSON_PROGRESS_KEY =
    "studyMateLessonProgress";

const CHAPTER_DATA_KEY =
    "studyMateChapterStudyData";


// ==========================================
// STUDY TIME SETTINGS
// ==========================================

// 60 minutes = full chapter

const CHAPTER_TARGET_MINUTES = 60;

const CHAPTER_TARGET_SECONDS =
    CHAPTER_TARGET_MINUTES * 60;


// ==========================================
// SUBJECT LIST
// ==========================================

const STUDYMATE_SUBJECTS = [

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
// NORMALIZE SUBJECT
// ==========================================

function normalizeLessonSubject(name) {

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


    if (
        text.includes("civic education")
    ) {

        return "Civic Education";

    }


    const found =
        STUDYMATE_SUBJECTS.find(
            subject =>
                subject.toLowerCase() === text
        );


    return found || String(name || "").trim();

}


// ==========================================
// DETECT CURRENT SUBJECT
// ==========================================

function getCurrentSubject() {

    // --------------------------------------
    // 1. data-subject
    // --------------------------------------

    const bodySubject =
        document.body.getAttribute(
            "data-subject"
        );


    if (bodySubject) {

        return normalizeLessonSubject(
            bodySubject
        );

    }


    // --------------------------------------
    // 2. Filename
    // --------------------------------------

    const fileName =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    const subjectFiles = {

        "mathematics.html":
            "Mathematics",

        "english.html":
            "English",

        "physics.html":
            "Physics",

        "chemistry.html":
            "Chemistry",

        "biology.html":
            "Biology",

        "geography.html":
            "Geography",

        "computer.html":
            "Computer Studies",

        "computerstudies.html":
            "Computer Studies",

        "history.html":
            "History",

        "government.html":
            "Government",

        "economics.html":
            "Economics",

        "commerce.html":
            "Commerce",

        "principlesofaccounting.html":
            "Principles of Accounting",

        "principlesofaccounts.html":
            "Principles of Accounting",

        "literature.html":
            "Literature",

        "civiceducation.html":
            "Civic Education"

    };


    if (subjectFiles[fileName]) {

        return subjectFiles[fileName];

    }


    // --------------------------------------
    // 3. Page title
    // --------------------------------------

    const title =
        document.title || "";


    const titleLower =
        title.toLowerCase();


    const foundSubject =
        STUDYMATE_SUBJECTS.find(
            subject =>
                titleLower.includes(
                    subject.toLowerCase()
                )
        );


    if (foundSubject) {

        return foundSubject;

    }


    return null;

}


// ==========================================
// FIND CHAPTERS
// ==========================================

function getLessonChapters() {

    const headings =
        Array.from(
            document.querySelectorAll("h1")
        );


    const chapters = [];


    headings.forEach(
        (heading, index) => {

            const text =
                heading.textContent
                    .trim();


            const match =
                text.match(
                    /CHAPTER\s+(\d+)/i
                );


            if (!match) {

                return;

            }


            const number =
                parseInt(
                    match[1],
                    10
                );


            if (isNaN(number)) {

                return;

            }


            chapters.push({

                number,

                title:
                    text,

                element:
                    heading,

                index

            });

        }
    );


    chapters.sort(
        (a, b) =>
            a.number - b.number
    );


    return chapters;

}


// ==========================================
// GET CHAPTER DATA
// ==========================================

function getChapterStudyData() {

    try {

        const saved =
            localStorage.getItem(
                CHAPTER_DATA_KEY
            );


        if (!saved) {

            return {};

        }


        const parsed =
            JSON.parse(saved);


        if (
            !parsed ||
            typeof parsed !== "object"
        ) {

            return {};

        }


        return parsed;

    } catch (error) {

        console.warn(
            "StudyMate could not read chapter study data.",
            error
        );


        return {};

    }

}


// ==========================================
// SAVE CHAPTER DATA
// ==========================================

function saveChapterStudyData(data) {

    try {

        localStorage.setItem(
            CHAPTER_DATA_KEY,
            JSON.stringify(data)
        );


    } catch (error) {

        console.warn(
            "StudyMate could not save chapter study data.",
            error
        );

    }

}


// ==========================================
// GET LESSON PROGRESS
// ==========================================

function getLessonProgressData() {

    try {

        const saved =
            localStorage.getItem(
                LESSON_PROGRESS_KEY
            );


        if (!saved) {

            return {};

        }


        const parsed =
            JSON.parse(saved);


        if (
            !parsed ||
            typeof parsed !== "object"
        ) {

            return {};

        }


        return parsed;

    } catch (error) {

        return {};

    }

}


// ==========================================
// SAVE LESSON PROGRESS
// ==========================================

function saveLessonProgressData(data) {

    try {

        localStorage.setItem(
            LESSON_PROGRESS_KEY,
            JSON.stringify(data)
        );


    } catch (error) {

        console.warn(
            "StudyMate could not save lesson progress.",
            error
        );

    }

}


// ==========================================
// GET CHAPTER RECORD
// ==========================================

function getChapterRecord(
    subject,
    chapterNumber
) {

    const data =
        getChapterStudyData();


    if (
        !data[subject]
    ) {

        data[subject] = {};

    }


    if (
        !data[subject][chapterNumber]
    ) {

        data[subject][chapterNumber] = {

            studySeconds: 0,

            endReached: false,

            completed: false,

            lastStudied:
                null

        };

    }


    return data[subject][chapterNumber];

}


// ==========================================
// UPDATE CHAPTER RECORD
// ==========================================

function updateChapterRecord(
    subject,
    chapterNumber,
    record
) {

    const data =
        getChapterStudyData();


    if (
        !data[subject]
    ) {

        data[subject] = {};

    }


    data[subject][chapterNumber] = {

        studySeconds:
            Math.min(
                Number(
                    record.studySeconds
                ) || 0,
                CHAPTER_TARGET_SECONDS
            ),

        endReached:
            Boolean(
                record.endReached
            ),

        completed:
            Boolean(
                record.completed
            ),

        lastStudied:
            record.lastStudied ||
            new Date().toISOString()

    };


    saveChapterStudyData(data);

}


// ==========================================
// CHAPTER PERCENTAGE
// ==========================================

function getChapterPercentage(
    studySeconds
) {

    const seconds =
        Math.min(
            Math.max(
                Number(studySeconds) || 0,
                0
            ),
            CHAPTER_TARGET_SECONDS
        );


    return (
        seconds /
        CHAPTER_TARGET_SECONDS
    ) * 100;

}


// ==========================================
// SUBJECT MAXIMUM WEIGHT
// ==========================================
//
// 90% / 14 subjects
//
// ≈ 6.43%
// ==========================================

function getSubjectWeight() {

    return (
        90 /
        STUDYMATE_SUBJECTS.length
    );

}


// ==========================================
// CHAPTER WEIGHT
// ==========================================
//
// Example:
//
// Subject has 20 chapters
//
// 6.43 / 20
//
// = 0.3215%
// ==========================================

function getChapterWeight(
    totalChapters
) {

    if (
        !totalChapters ||
        totalChapters <= 0
    ) {

        return 0;

    }


    return (
        getSubjectWeight() /
        totalChapters
    );

}


// ==========================================
// CALCULATE SUBJECT PROGRESS
// ==========================================

function calculateSubjectProgress(
    subject,
    chapters
) {

    if (
        !subject ||
        !chapters.length
    ) {

        return {

            percentage: 0,

            completedChapters: 0,

            totalChapters:
                chapters.length

        };

    }


    const data =
        getChapterStudyData();


    const subjectData =
        data[subject] || {};


    const chapterWeight =
        getChapterWeight(
            chapters.length
        );


    let contribution = 0;

    let completedChapters = 0;


    chapters.forEach(
        chapter => {

            const record =
                subjectData[
                    chapter.number
                ] || {};


            const seconds =
                Number(
                    record.studySeconds
                ) || 0;


            const chapterProgress =
                Math.min(
                    Math.max(
                        getChapterPercentage(
                            seconds
                        ),
                        0
                    ),
                    100
                );


            contribution +=
                (
                    chapterProgress /
                    100
                ) *
                chapterWeight;


            if (
                record.completed
            ) {

                completedChapters++;

            }

        }
    );


    return {

        percentage:
            contribution,

        completedChapters,

        totalChapters:
            chapters.length

    };

}


// ==========================================
// SAVE SUBJECT PROGRESS
// ==========================================

function saveCurrentSubjectProgress(
    subject,
    chapters
) {

    const result =
        calculateSubjectProgress(
            subject,
            chapters
        );


    const data =
        getLessonProgressData();


    const oldValue =
        data[subject];


    let oldProgress = 0;


    if (
        typeof oldValue === "number"
    ) {

        oldProgress =
            Number(oldValue) || 0;

    }

    else if (
        oldValue &&
        typeof oldValue === "object"
    ) {

        oldProgress =
            Number(
                oldValue.progress
            ) || 0;

    }


    // --------------------------------------
    // IMPORTANT
    //
    // Do NOT use the old percentage as a
    // permanent minimum here.
    //
    // The actual chapter records are now
    // the source of truth.
    // --------------------------------------

    data[subject] = {

        progress:
            Number(
                result.percentage.toFixed(4)
            ),

        completedChapters:
            result.completedChapters,

        totalChapters:
            result.totalChapters,

        updatedAt:
            new Date().toISOString()

    };


    saveLessonProgressData(data);


    return result;

}


// ==========================================
// CURRENT CHAPTER
// ==========================================

let currentChapter = null;


// ==========================================
// CHAPTER TIMERS
// ==========================================

const activeTimers = {};


// ==========================================
// LAST ACTIVITY TIME
// ==========================================

let lastActivityTime =
    Date.now();


// ==========================================
// PAGE ACTIVE STATE
// ==========================================

let pageIsActive =
    !document.hidden;


// ==========================================
// TIMER INTERVAL
// ==========================================

let timerInterval = null;


// ==========================================
// RECORD STUDY SECOND
// ==========================================

function recordStudySecond(
    subject,
    chapterNumber
) {

    if (
        !pageIsActive
    ) {

        return;

    }


    const record =
        getChapterRecord(
            subject,
            chapterNumber
        );


    if (
        record.completed
    ) {

        return;

    }


    let seconds =
        Number(
            record.studySeconds
        ) || 0;


    if (
        seconds >=
        CHAPTER_TARGET_SECONDS
    ) {

        return;

    }


    seconds++;


    record.studySeconds =
        Math.min(
            seconds,
            CHAPTER_TARGET_SECONDS
        );


    record.lastStudied =
        new Date().toISOString();


    // --------------------------------------
    // 60 MINUTES REACHED
    // --------------------------------------

    if (
        record.studySeconds >=
        CHAPTER_TARGET_SECONDS
    ) {

        record.studySeconds =
            CHAPTER_TARGET_SECONDS;


        // ----------------------------------
        // Only FULLY complete after the
        // student has also reached the end.
        // ----------------------------------

        if (
            record.endReached
        ) {

            record.completed =
                true;

        }

    }


    updateChapterRecord(
        subject,
        chapterNumber,
        record
    );


    // --------------------------------------
    // Update analytics continuously
    // --------------------------------------

    saveCurrentSubjectProgress(
        subject,
        window.studyMateLessonChapters ||
        []
    );

}


// ==========================================
// START HIDDEN TIMER
// ==========================================

function startChapterTimer(
    subject,
    chapterNumber
) {

    if (
        activeTimers[chapterNumber]
    ) {

        return;

    }


    activeTimers[chapterNumber] =
        true;


    console.log(
        "StudyMate timer started:",
        subject,
        "Chapter",
        chapterNumber
    );

}


// ==========================================
// STOP HIDDEN TIMER
// ==========================================

function stopChapterTimer(
    chapterNumber
) {

    if (
        activeTimers[chapterNumber]
    ) {

        delete activeTimers[
            chapterNumber
        ];

    }

}


// ==========================================
// TIMER ENGINE
// ==========================================

function runHiddenTimer() {

    if (
        !pageIsActive
    ) {

        return;

    }


    if (
        !currentChapter
    ) {

        return;

    }


    const subject =
        window.studyMateCurrentSubject;


    if (!subject) {

        return;

    }


    if (
        !activeTimers[
            currentChapter.number
        ]
    ) {

        return;

    }


    recordStudySecond(
        subject,
        currentChapter.number
    );

}


// ==========================================
// VISIBILITY CHANGE
// ==========================================

document.addEventListener(
    "visibilitychange",
    () => {

        pageIsActive =
            !document.hidden;


        lastActivityTime =
            Date.now();


        if (
            !pageIsActive
        ) {

            console.log(
                "StudyMate timer paused."
            );

        } else {

            console.log(
                "StudyMate timer resumed."
            );

        }

    }
);


// ==========================================
// WINDOW FOCUS
// ==========================================

window.addEventListener(
    "focus",
    () => {

        pageIsActive = true;

        lastActivityTime =
            Date.now();

    }
);


// ==========================================
// WINDOW BLUR
// ==========================================

window.addEventListener(
    "blur",
    () => {

        pageIsActive = false;

    }
);


// ==========================================
// CHAPTER END DETECTION
// ==========================================
//
// We determine the end of a chapter as
// the point immediately before the next
// CHAPTER heading.
//
// For the final chapter, the bottom of the
// document is used.
// ==========================================

function getChapterEndPoint(
    chapters,
    index
) {

    if (
        index <
        chapters.length - 1
    ) {

        return chapters[
            index + 1
        ].element;

    }


    return document.body;

}


// ==========================================
// CHAPTER END OBSERVER
// ==========================================

function startChapterEndTracking(
    subject,
    chapters
) {

    const endElements = [];


    chapters.forEach(
        (chapter, index) => {

            const endElement =
                getChapterEndPoint(
                    chapters,
                    index
                );


            endElements.push({

                chapter,

                endElement

            });

        }
    );


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        const match =
                            endElements.find(
                                item =>
                                    item.endElement ===
                                    entry.target
                           );


                        if (!match) {

                            return;

                        }


                        const chapter =
                            match.chapter;


                        const record =
                            getChapterRecord(
                                subject,
                                chapter.number
                            );


                        // ----------------------------------
                        // Student reached chapter boundary
                        // ----------------------------------

                        record.endReached =
                            true;


                        // ----------------------------------
                        // If 60 minutes has already
                        // been accumulated, complete it.
                        // ----------------------------------

                        if (
                            record.studySeconds >=
                            CHAPTER_TARGET_SECONDS
                        ) {

                            record.studySeconds =
                                CHAPTER_TARGET_SECONDS;

                            record.completed =
                                true;

                        }


                        record.lastStudied =
                            new Date().toISOString();


                        updateChapterRecord(
                            subject,
                            chapter.number,
                            record
                        );


                        saveCurrentSubjectProgress(
                            subject,
                            chapters
                        );


                        console.log(
                            "📖 StudyMate chapter end reached:",
                            subject,
                            "Chapter",
                            chapter.number
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },

            {

                threshold: 0.1

            }

        );


    endElements.forEach(
        item => {

            observer.observe(
                item.endElement
            );

        }
    );

}


// ==========================================
// CHAPTER PROGRESS DISPLAY IN CONSOLE
// ==========================================

function logChapterProgress(
    subject,
    chapters
) {

    const data =
        getChapterStudyData();


    const subjectData =
        data[subject] || {};


    console.log(
        "=================================="
    );


    console.log(
        "STUDYMATE CHAPTER PROGRESS"
    );


    chapters.forEach(
        chapter => {

            const record =
                subjectData[
                    chapter.number
                ] || {};


            const seconds =
                Number(
                    record.studySeconds
                ) || 0;


            const minutes =
                Math.floor(
                    seconds / 60
                );


            const chapterPercentage =
                getChapterPercentage(
                    seconds
                );


            console.log(

                "Chapter " +
                chapter.number +
                ": " +

                minutes +
                " min / 60 min — " +

                chapterPercentage
                    .toFixed(2) +
                "%",

                record.completed
                    ? "✅ COMPLETED"
                    : ""

            );

        }
    );


    console.log(
        "=================================="
    );

}


// ==========================================
// INITIALIZE
// ==========================================

function initializeLessonAnalytics() {

    const subject =
        getCurrentSubject();


    const chapters =
        getLessonChapters();


    console.log(
        "=================================="
    );


    console.log(
        "STUDYMATE LESSON ANALYTICS"
    );


    console.log(
        "Subject:",
        subject
    );


    console.log(
        "Chapters detected:",
        chapters.length
    );


    console.log(
        "Chapter target:",
        CHAPTER_TARGET_MINUTES +
        " minutes"
    );


    console.log(
        "Subject maximum:",
        getSubjectWeight().toFixed(4) +
        "%"
    );


    console.log(
        "=================================="
    );


    if (!subject) {

        console.warn(
            "StudyMate could not determine the subject."
        );

        return;

    }


    if (
        chapters.length === 0
    ) {

        console.warn(
            "StudyMate could not find CHAPTER headings."
        );

        return;

    }


    // --------------------------------------
    // Make data globally available
    // --------------------------------------

    window.studyMateCurrentSubject =
        subject;


    window.studyMateLessonChapters =
        chapters;


    // --------------------------------------
    // Initial calculation
    // --------------------------------------

    saveCurrentSubjectProgress(
        subject,
        chapters
    );


    // --------------------------------------
    // Determine which chapter the student
    // is currently viewing.
    // --------------------------------------

    const chapterObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        const chapter =
                            chapters.find(
                                item =>
                                    item.element ===
                                    entry.target
                            );


                        if (!chapter) {

                            return;

                        }


                        // Stop previous chapter timer

                        if (
                            currentChapter &&
                            currentChapter.number !==
                            chapter.number
                        ) {

                            stopChapterTimer(
                                currentChapter.number
                            );

                        }


                        currentChapter =
                            chapter;


                        startChapterTimer(
                            subject,
                            chapter.number
                        );


                        console.log(
                            "📚 Currently studying:",
                            subject,
                            "Chapter",
                            chapter.number
                        );

                    }
                );

            },

            {

                threshold: 0.25

            }

        );


    chapters.forEach(
        chapter => {

            chapterObserver.observe(
                chapter.element
            );

        }
    );


    // --------------------------------------
    // Start chapter end tracking
    // --------------------------------------

    startChapterEndTracking(
        subject,
        chapters
    );


    // --------------------------------------
    // Start hidden timer
    //
    // Runs once every second.
    // Nothing is displayed on the page.
    // --------------------------------------

    timerInterval =
        setInterval(
            runHiddenTimer,
            1000
        );


    // --------------------------------------
    // Debug information
    // --------------------------------------

    logChapterProgress(
        subject,
        chapters
    );

}


// ==========================================
// START AFTER PAGE LOAD
// ==========================================

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeLessonAnalytics
    );

} else {

    initializeLessonAnalytics();

}