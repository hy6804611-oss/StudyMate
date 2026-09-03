// =====================================================
// STUDYMATE — DAILY STUDY TIPS
// 50 DIFFERENT TIPS
// =====================================================

const studyTips = [

    "Study consistently every day. Even 30 minutes daily is better than studying only once a week.",

    "Start with the subject you find most difficult while your mind is still fresh.",

    "Don't just read your notes. Test yourself by trying to remember what you studied.",

    "Break large topics into smaller sections so they are easier to understand.",

    "After studying a topic, explain it in your own words to check your understanding.",

    "Practice questions regularly. They help you discover what you truly understand.",

    "When you make a mistake, study the reason behind the mistake instead of simply moving on.",

    "Take short breaks during long study sessions to help maintain your concentration.",

    "Review older topics regularly so you don't forget what you have already learned.",

    "Set one clear goal before every study session.",

    "Keep distractions away while studying so you can concentrate better.",

    "Don't wait until the exam is close before you begin serious revision.",

    "Use flashcards to quickly review important definitions, formulas and concepts.",

    "Try to understand a concept instead of memorizing everything without meaning.",

    "After completing a lesson, answer practice questions to test your knowledge.",

    "Consistency beats last-minute studying. Small progress every day adds up.",

    "If a topic is difficult, divide it into smaller parts and learn one part at a time.",

    "Give extra attention to the subjects and topics you find most challenging.",

    "Before finishing your study session, quickly review what you learned that day.",

    "Believe in your ability to improve. Every study session is progress.",

    "Use your study time intentionally. Know what you want to accomplish before you start.",

    "Write down important points instead of trying to remember every sentence.",

    "Practice explaining difficult ideas as if you were teaching another student.",

    "Mix reading with practice questions to make your revision more effective.",

    "Keep track of the topics you have completed so you can see your progress.",

    "Review your mistakes from previous tests before attempting another practice test.",

    "When you don't understand something, go back to the basic idea and build from there.",

    "Avoid trying to learn everything in one sitting. Give yourself time to understand and remember.",

    "Use your strongest study period for the subjects that require the most concentration.",

    "At the beginning of each week, decide which topics you want to complete.",

    "At the end of the week, review what you learned and identify topics that need more attention.",

    "Don't be discouraged by difficult questions. They show you where you can improve.",

    "Practice Mathematics and other problem-solving subjects by actually solving problems.",

    "For subjects with many definitions, use flashcards and frequent short reviews.",

    "For scientific subjects, focus on understanding processes and relationships between concepts.",

    "For English, improve by regularly reading, learning vocabulary and practicing questions.",

    "For Geography, connect concepts with real places, maps and examples whenever possible.",

    "For History and Government, organize important events, people and ideas into clear notes.",

    "For Economics and Commerce, learn the meaning of important terms and apply them to examples.",

    "For Accounting, practice calculations repeatedly until the steps become familiar.",

    "Use CBT practice to become comfortable with answering questions under exam conditions.",

    "Read every question carefully before choosing your answer.",

    "If you are unsure about an answer during practice, mark it and return to it later.",

    "Don't measure your progress only by your scores. Understanding your mistakes is also progress.",

    "Create a simple routine that you can realistically follow every day.",

    "Studying for a short time every day can build a stronger habit than occasional long sessions.",

    "Before an exam, prioritize revision and practice instead of trying to learn everything from zero.",

    "Get enough rest so your mind can stay focused during your study sessions.",

    "Your goal is not to study for the longest time. Your goal is to learn effectively.",

    "Keep going even when progress feels slow. Learning takes time, practice and consistency."

];


// =====================================================
// GET TODAY'S TIP
// =====================================================

function getDailyStudyTip() {

    const today = new Date();

    const startOfYear =
        new Date(today.getFullYear(), 0, 0);

    const difference =
        today - startOfYear;

    const oneDay =
        1000 * 60 * 60 * 24;

    const dayOfYear =
        Math.floor(difference / oneDay);

    const tipIndex =
        dayOfYear % studyTips.length;

    return studyTips[tipIndex];

}


// =====================================================
// DISPLAY TODAY'S TIP
// =====================================================

const dailyStudyTip =
    document.getElementById("dailyStudyTip");

if (dailyStudyTip) {

    dailyStudyTip.textContent =
        getDailyStudyTip();

}