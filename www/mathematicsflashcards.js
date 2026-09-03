const flashcards = [

{
question:"What is the value of any non-zero number raised to the power of 0?",
answer:"1"
},
{
question:"What is the name for a polygon with exactly five sides?",
answer:"A pentagon"
},
{
question:"What is the formula for the area of a circle with radius $r$?",
answer:"$A = \\pi r^2$"
},
{
question:"What number represents the ratio of a circle's circumference to its diameter?",
answer:"$\\pi$ (Pi)"
},
{
question:"What algebraic equation format is written as $ax^2 + bx + c = 0$?",
answer:"A quadratic equation"
},
{
question:"What do you call a whole number greater than 1 that only has factors of 1 and itself?",
answer:"A prime number"
},
{
question:"What geometric theorem states that $a^2 + b^2 = c^2$ for right triangles?",
answer:"The Pythagorean Theorem"
},
{
question:"What is the mathematical term for the longest side of a right-angled triangle?",
answer:"The hypotenuse"
},
{
question:"What mathematical property states that $a \\times b = b \\times a$?",
answer:"The Commutative Property"
},
{
question:"What coordinate system uses an $x$-axis and a $y$-axis to plot points?",
answer:"The Cartesian coordinate system"
},
{
question:"What is the absolute value of $-15$?",
answer:"15"
},
{
question:"What do you call an angle that measures exactly 90 degrees?",
answer:"A right angle"
},
{
question:"What statistical term describes the average of a set of numbers?",
answer:"The mean"
},
{
question:"What statistical term describes the middle value in a sorted list of numbers?",
answer:"The median"
},
{
question:"What statistical term describes the number that appears most frequently in a data set?",
answer:"The mode"
},
{
question:"What type of fraction has a numerator that is larger than or equal to its denominator?",
answer:"An improper fraction"
},
{
question:"What is the value of the factorial expression $4!$?",
answer:"24"
},
{
question:"What is the square root of 144?",
answer:"12"
},
{
question:"What algebraic property states that $a(b + c) = ab + ac$?",
answer:"The Distributive Property"
},
{
question:"What geometric term describes lines in the same plane that never intersect?",
answer:"Parallel lines"
},
{
question:"What is the value of the trigonometric function $\\cos(0^\\circ)$?",
answer:"1"
},
{
question:"What type of number can be written as a fraction of two integers where the denominator is not zero?",
answer:"A rational number"
},
{
question:"What name is given to an angle that measures greater than 90 degrees but less than 180 degrees?",
answer:"An obtuse angle"
},
{
question:"What is the formula for the circumference of a circle with radius $r$?",
answer:"$C = 2\\pi r$"
},
{
question:"What do you call a polynomial that contains exactly three terms?",
answer:"A trinomial"
},
{
question:"What is the value of $x$ if $2x + 5 = 15$?",
answer:"5"
},
{
question:"What do you call two angles whose measurements add up to exactly 90 degrees?",
answer:"Complementary angles"
},
{
question:"What do you call two angles whose measurements add up to exactly 180 degrees?",
answer:"Supplementary angles"
},
{
question:"What is the name for a triangle that has two sides of equal length?",
answer:"An isosceles triangle"
},
{
question:"What mathematical symbol is used to represent the square root of a value?",
answer:"The radical symbol ($\\sqrt{}$)"
},

{
question:"What is the derivative of $e^x$ with respect to $x$?",
answer:"$e^x$"
},
{
question:"What mathematical term describes two lines that intersect at a 90-degree angle?",
answer:"Perpendicular"
},
{
question:"What is the term for a subset that contains no elements?",
answer:"An empty set (or null set)"
},
{
question:"What is the formula for the volume of a sphere with radius $r$?",
answer:"$V = \\frac{4}{3}\\pi r^3$"
},
{
question:"What is the value of $\\sin(90^\\circ)$ or $\\sin(\\frac{\\pi}{2})$?",
answer:"1"
},
{
question:"What is the derivative of $\\ln(x)$ with respect to $x$?",
answer:"$\\frac{1}{x}$"
},
{
question:"What algebraic method solves a quadratic equation by splitting its middle term?",
answer:"Factoring"
},
{
question:"What type of triangle has three sides of completely different lengths?",
answer:"A scalene triangle"
},
{
question:"What is the value of the permutation $P(4,2)$?",
answer:"12"
},
{
question:"What theorem connects the definite integral of a function to its antiderivative?",
answer:"The Fundamental Theorem of Calculus"
},
{
question:"What mathematical symbol represents the square root of negative one?",
answer:"$i$"
},
{
question:"What statistical term describes the difference between the highest and lowest values?",
answer:"The range"
},
{
question:"What do you call an integer that can be divided evenly by 2?",
answer:"An even number"
},
{
question:"What trig identity states that $\\sin^2(x) + \\cos^2(x)$ equals what?",
answer:"1"
},
{
question:"What rule is used to differentiate a composite function $f(g(x))$?",
answer:"The Chain Rule"
},
{
question:"What notation describes a matrix entry located in row $i$ and column $j$?",
answer:"$a_{ij}$"
},
{
question:"What is the sum of the first four positive prime numbers?",
answer:"17"
},
{
question:"What geometric name is given to an un-ending flat surface that extends infinitely?",
answer:"A plane"
},
{
question:"What operation flips a matrix over its diagonal, switching rows and columns?",
answer:"Transpose"
},
{
question:"What type of variation occurs when one variable increases as another decreases?",
answer:"Inverse variation"
},
{
question:"What coordinate point on a graph represents $(0,0)$?",
answer:"The origin"
},
{
question:"What basic property states that $(a + b) + c = a + (b + c)$?",
answer:"The Associative Property"
},
{
question:"What is the value of $\\tan(45^\\circ)$ or $\\tan(\\frac{\\pi}{4})$?",
answer:"1"
},
{
question:"What is the value of the combination $C(5,2)$?",
answer:"10"
},
{
question:"What do you call two events whose outcomes do not influence each other?",
answer:"Independent events"
},
{
question:"What parameter measures the steepness and direction of a straight line?",
answer:"The slope"
},
{
question:"What specific type of numbers are $0, 1, 2, 3...$ with no decimals?",
answer:"Whole numbers"
},
{
question:"What type of sequence has a constant difference between consecutive terms?",
answer:"An arithmetic sequence"
},
{
question:"What do you call a polynomial expression that has exactly two terms?",
answer:"A binomial"
},
{
question:"What is the integral of $x$ with respect to $x$?",
answer:"$\\frac{1}{2}x^2 + C$"
},
{
question:"What is the derivative of $\\sin(x)$ with respect to $x$?",
answer:"$\\cos(x)$"
},
{
question:"What is the derivative of $\\cos(x)$ with respect to $x$?",
answer:"$-\\sin(x)$"
},
{
question:"What mathematical term describes a matrix that has an equal number of rows and columns?",
answer:"A square matrix"
},
{
question:"What do you call an angle that is smaller than 90 degrees?",
answer:"An acute angle"
},
{
question:"What is the name of a polygon that has exactly eight sides?",
answer:"An octagon"
},
{
question:"What is the limit of $\\frac{1}{x}$ as $x$ approaches infinity?",
answer:"0"
},
{
question:"What special type of square matrix has ones on its main diagonal and zeros elsewhere?",
answer:"The identity matrix"
},
{
question:"What do you call a regular quadrilateral with four equal sides and four right angles?",
answer:"A square"
},
{
question:"What is the formula for the area of a triangle with base $b$ and height $h$?",
answer:"$A = \\frac{1}{2}bh$"
},
{
question:"What name is given to numbers that cannot be expressed as a simple fraction, like $\\sqrt{2}$?",
answer:"Irrational numbers"
},
{
question:"What property states that multiplying a number by 1 leaves it completely unchanged?",
answer:"The Multiplicative Identity Property"
},
{
question:"What is the name for a triangle that has all three sides of equal length?",
answer:"An equilateral triangle"
},
{
question:"What mathematical function is the direct inverse of an exponential function?",
answer:"A logarithmic function"
},
{
question:"What do you call a straight line that touches a curve at exactly one point without crossing it?",
answer:"A tangent line"
},
{
question:"What is the value of the factorial expression $0!$?",
answer:"1"
},
{
question:"What name is given to the value inside a radical symbol?",
answer:"The radicand"
},
{
question:"What specific type of matrix contains only zero entries?",
answer:"A zero matrix (or null matrix)"
},
{
question:"What type of graph displays data using vertical or horizontal rectangular bars?",
answer:"A bar graph"
},
{
question:"What algebraic term describes the number multiplied by a variable in an expression?",
answer:"A coefficient"
},
{
question:"What is the sum of the interior angles of any triangle?",
answer:"180 degrees"
},
{
question:"What is the sum of the interior angles of any quadrilateral?",
answer:"360 degrees"
},
{
question:"What rule states that to find the derivative of $x^n$, you multiply by $n$ and subtract 1 from the power?",
answer:"The Power Rule"
},
{
question:"What statistical value is calculated by subtracting the mean from a value, squaring it, averaging the results, and taking the square root?",
answer:"The standard deviation"
},
{
question:"What specific name is given to a sequence where each term is found by multiplying the previous term by a constant?",
answer:"A geometric sequence"
},
{
question:"What do you call a flat geometric shape with four straight sides?",
answer:"A quadrilateral"
},
{
question:"What is the value of $\\log_{10}(100)$?",
answer:"2"
},
{
question:"What do you call a line segment that connects two non-consecutive vertices of a polygon?",
answer:"A diagonal"
},
{
question:"What type of data can only take specific, isolated values rather than a continuous range?",
answer:"Discrete data"
},
{
question:"What is the value of the imaginary unit $i$ raised to the second power ($i^2$)?",
answer:"$-1$"
},
{
question:"What notation represents a set containing elements that belong to either Set A OR Set B?",
answer:"$A \\cup B$ (Union)"
},
{
question:"What notation represents a set containing elements that belong to both Set A AND Set B?",
answer:"$A \\cap B$ (Intersection)"
},
{
question:"What is the formula for the volume of a cylinder with radius $r$ and height $h$?",
answer:"$V = \\pi r^2 h$"
},
{
question:"What do you call a single scalar value computed from a square matrix that determines if it can be inverted?",
answer:"The determinant"
},
{
question:"What name is given to a polynomial with exactly one term?",
answer:"A monomial"
},
{
question:"What theorem states that if a polynomial $f(x)$ is divided by $(x - a)$, the remainder is $f(a)$?",
answer:"The Remainder Theorem"
},
{
question:"What is the reciprocal of the fraction $\\frac{3}{4}$?",
answer:"$\\frac{4}{3}$"
},
{
question:"What do you call the total distance around the outside edge of a polygon?",
answer:"The perimeter"
},
{
question:"What coordinate parameter is often referred to as the independent variable?",
answer:"The $x$-coordinate (or abscissa)"
},
{
question:"What coordinate parameter is often referred to as the dependent variable?",
answer:"The $y$-coordinate (or ordinate)"
},
{
question:"What mathematical method uses a series of rows and columns to organize numerical data?",
answer:"A matrix"
},
{
question:"What theorem describes the expanding of powers of an algebraic expression like $(x + y)^n$?",
answer:"The Binomial Theorem"
},
{
question:"What is the value of $\\cos(90^\\circ)$?",
answer:"0"
},
{
question:"What branch of mathematics deals with collecting, analyzing, interpreting, and presenting data?",
answer:"Statistics"
},
{
question:"What rule is used to find the derivative of two functions that are multiplied together?",
answer:"The Product Rule"
},
{
question:"What rule is used to find the derivative of two functions that are divided by one another?",
answer:"The Quotient Rule"
},
{
question:"What is the name for a polygon that has exactly six sides?",
answer:"A hexagon"
},
{
question:"What do you call the number under the bar in a fraction?",
answer:"The denominator"
},
{
question:"What do you call the number above the bar in a fraction?",
answer:"The numerator"
},
{
question:"What geometric constant equals roughly 2.718 and acts as the base of natural logarithms?",
answer:"$e$ (Euler's number)"
},
{
question:"What is the value of $x$ in the equation $\\sqrt{x} = 9$?",
answer:"81"
},
{
question:"What are the two possible real values of $x$ if $x^2 = 49$?",
answer:"$7$ and $-7$"
},
{
question:"What is the slope of a perfectly horizontal line plotted on a graph?",
answer:"0"
},
{
question:"What term describes a matrix that is equal to its own transpose?",
answer:"A symmetric matrix"
},
{
question:"What type of angle measures exactly 180 degrees?",
answer:"A straight angle"
},
{
question:"What is the derivative of $\\tan(x)$ with respect to $x$?",
answer:"$\\sec^2(x)$"
},
{
question:"What type of line segment runs from the center of a circle to its outer edge?",
answer:"The radius"
},
{
question:"What type of line segment connects two points on a circle and passes through its center?",
answer:"The diameter"
},
{
question:"What do you call a matrix that cannot be inverted because its determinant is exactly zero?",
answer:"A singular matrix"
},
{
question:"What property states that adding zero to any number leaves it completely unchanged?",
answer:"The Additive Identity Property"
},
{
question:"What mathematical symbol represents the set of all real numbers?",
answer:"$\\mathbb{R}$"
},
{
question:"What mathematical symbol represents the set of all integers?",
answer:"$\\mathbb{Z}$"
},
{
question:"What mathematical symbol represents the set of all rational numbers?",
answer:"$\\mathbb{Q}$"
},
{
question:"What is the value of $\\log_2(32)$?",
answer:"5"
},
{
question:"What is the value of $\\sin(30^\\circ)$ or $\\sin(\\frac{\\pi}{6})$?",
answer:"$\\frac{1}{2}$"
},
{
question:"What mathematical operation calculates the area underneath a continuous curve?",
answer:"Integration"
},
{
question:"What is the derivative of a constant number with respect to $x$?",
answer:"0"
},
{
question:"What is the value of the algebraic expression $5!$?",
answer:"120"
},
{
question:"What name is given to an angle that measures greater than 180 degrees but less than 360 degrees?",
answer:"A reflex angle"
},
{
question:"What is the name for a polygon that has exactly ten sides?",
answer:"A decagon"
},
{
question:"What algebraic equation rule states that you can swap the sides of an equation without changing its truth?",
answer:"The Symmetric Property"
},
{
question:"What name is given to a mathematical relationship where each input has exactly one unique output?",
answer:"A function"
},
{
question:"What term describes the complete set of all possible inputs for a given function?",
answer:"The domain"
},
{
question:"What term describes the complete set of all possible outputs that a function can produce?",
answer:"The range"
},
{
question:"What do you call two lines that run in the same three-dimensional space but are neither parallel nor intersecting?",
answer:"Skew lines"
},
{
question:"What is the value of $x$ if $\\frac{x}{4} = 12$?",
answer:"48"
},
{
question:"What do you call a triangle where one of the interior angles is greater than 90 degrees?",
answer:"An obtuse triangle"
},
{
question:"What theorem states that a matrix satisfies its own characteristic equation?",
answer:"The Cayley-Hamilton Theorem"
},
{
question:"What statistical metric measures the degree to which two random variables move together?",
answer:"Covariance"
},
{
question:"What type of number system uses base-16 notation, combining digits 0-9 and letters A-F?",
answer:"Hexadecimal"
},
{
question:"What rule allows you to evaluate limits of indeterminate forms by taking derivatives of the numerator and denominator?",
answer:"L'Hôpital's Rule"
},
{
question:"What is the value of $\\cos(180^\\circ)$ or $\\cos(\\pi)$?",
answer:"$-1$"
},
{
question:"What geometric term describes a straight line that cuts across two or more parallel lines?",
answer:"A transversal line"
},
{
question:"What statistical chart displays data as data points connected by straight line segments?",
answer:"A line graph"
},
{
question:"What do you call a quadrilateral with exactly one pair of parallel sides?",
answer:"A trapezoid (or trapezium)"
},
{
question:"What do you call a quadrilateral where both pairs of opposite sides are parallel?",
answer:"A parallelogram"
},
{
question:"What is the product of a complex number $a + bi$ and its complex conjugate $a - bi$?",
answer:"$a^2 + b^2$"
},
{
question:"What name is given to a matrix containing only one single row of data elements?",
answer:"A row vector"
},
{
question:"What name is given to a matrix containing only one single column of data elements?",
answer:"A column vector"
},
{
question:"What mathematical property states that $a + (b + c) = (a + b) + c$?",
answer:"The Associative Property of Addition"
},
{
question:"What is the value of the algebraic expression $x^0$ assuming $x \\neq 0$?",
answer:"1"
},
{
question:"What is the value of $\\tan(0^\\circ)$?",
answer:"0"
},
{
question:"What is the derivative of $\\sec(x)$ with respect to $x$?",
answer:"$\\sec(x)\\tan(x)$"
},
{
question:"What type of mapping maps a vector space into itself while preserving addition and scalar multiplication?",
answer:"A linear transformation"
},
{
question:"What do you call a sample space event that has a probability of exactly zero?",
answer:"An impossible event"
},
{
question:"What do you call a sample space event that has a probability of exactly one?",
answer:"A certain event"
},
{
question:"What is the value of $\\log_e(e)$?",
answer:"1"
},
{
question:"What rule states that the probability of event A or B occurring is $P(A) + P(B) - P(A \\cap B)$?",
answer:"The Addition Rule of Probability"
},
{
question:"What name is given to a regular three-dimensional shape with six identical square faces?",
answer:"A cube"
},
{
question:"What name is given to a solid shape with two identical circular ends and one smooth curving side?",
answer:"A cylinder"
},
{
question:"What mathematical process simplifies a fraction by dividing both parts by their highest shared factor?",
answer:"Reducing to lowest terms"
},
{
question:"What is the value of $\\cos(30^\\circ)$ or $\\cos(\\frac{\\pi}{6})$?",
answer:"$\\frac{\\sqrt{3}}{2}$"
},
{
question:"What is the slope of a perfectly vertical line plotted on a graph?",
answer:"Undefined"
},
{
question:"What mathematical term describes a matrix that is equal to the negative of its own transpose?",
answer:"A skew-symmetric matrix"
},
{
question:"What is the name for a polygon that has exactly seven sides?",
answer:"A heptagon"
},
{
question:"What is the name for a polygon that has exactly nine sides?",
answer:"A nonagon"
},
{
question:"What name is given to an angle that measures exactly 360 degrees?",
answer:"A full rotation (or perigon)"
},
{
question:"What is the derivative of $\\cot(x)$ with respect to $x$?",
answer:"$-\\csc^2(x)$"
},
{
question:"What is the derivative of $\\csc(x)$ with respect to $x$?",
answer:"$-\\csc(x)\\cot(x)$"
},
{
question:"What do you call a square matrix that can be inverted?",
answer:"An invertible matrix (or non-singular matrix)"
},
{
question:"What mathematical symbol represents the set of all natural numbers?",
answer:"$\\mathbb{N}$"
},
{
question:"What mathematical symbol represents the set of all complex numbers?",
answer:"$\\mathbb{C}$"
},
{
question:"What is the value of $\\log_3(81)$?",
answer:"4"
},
{
question:"What is the value of $\\sin(45^\\circ)$ or $\\sin(\\frac{\\pi}{4})$?",
answer:"$\\frac{\\sqrt{2}}{2}$"
},
{
question:"What is the value of $\\cos(45^\\circ)$ or $\\cos(\\frac{\\pi}{4})$?",
answer:"$\\frac{\\sqrt{2}}{2}$"
},
{
question:"What theorem establishes that the square of the hypotenuse equals the sum of the squares of the other two sides?",
answer:"The Pythagorean Theorem"
},
{
question:"What do you call a triangle where all three interior angles measure less than 90 degrees?",
answer:"An acute triangle"
},
{
question:"What statistical value measures the spread of a data set by calculating the average of the squared deviations from the mean?",
answer:"The variance"
},
{
question:"What is the value of $\\sin(180^\\circ)$ or $\\sin(\\pi)$?",
answer:"0"
},
{
question:"What do you call a straight line segment that connects any two points on a circle's circumference?",
answer:"A chord"
},
{
question:"What is the formula for the volume of a cone with radius $r$ and height $h$?",
answer:"$V = \\frac{1}{3}\\pi r^2 h$"
},
{
question:"What do you call a line segment that connects a vertex of a triangle to the midpoint of the opposite side?",
answer:"A median"
},
{
question:"What do you call a line segment from a triangle's vertex that is perpendicular to the opposite side?",
answer:"An altitude"
},
{
question:"What is the value of the algebraic expression $6!$?",
answer:"720"
},
{
question:"What mathematical term describes a fraction whose numerator is smaller than its denominator?",
answer:"A proper fraction"
},
{
question:"What is the product of any real number and its additive inverse?",
answer:"The negative square of that number"
},
{
question:"What do you call the process of finding the derivative of a function?",
answer:"Differentiation"
},
{
question:"What theorem states that a continuous function on a closed interval must achieve a maximum and minimum value?",
answer:"The Extreme Value Theorem"
},
{
question:"What theorem states that if $f(a) = f(b)$ for a continuous and differentiable interval, there is a point where the derivative is zero?",
answer:"Rolle's Theorem"
},
{
question:"What do you call the point inside a circle that is exactly the same distance from all points on the circumference?",
answer:"The center"
},
{
question:"What do you call a corner point where two or more lines or edges meet in a geometric shape?",
answer:"A vertex"
},
{
question:"What notation describes the derivative of $y$ with respect to $x$ in Leibniz's notation?",
answer:"$\\frac{dy}{dx}$"
},
{
question:"What do you call a matrix operation that swaps two rows or multiplies a row by a non-zero scalar?",
answer:"An elementary row operation"
},
{
question:"What do you call the values $\\lambda$ that satisfy the characteristic equation $\\det(A - \\lambda I) = 0$?",
answer:"Eigenvalues"
},
{
question:"What do you call a non-zero vector $v$ that satisfies the equation $Av = \\lambda v$?",
answer:"An eigenvector"
},
{
question:"What rule states that the probability of two independent events both occurring is $P(A) \\times P(B)$?",
answer:"The Multiplication Rule"
},
{
question:"What type of number system uses base-2 notation, utilizing only the digits 0 and 1?",
answer:"Binary"
},
{
question:"What type of probability is calculated after a specific condition or previous event has already occurred?",
answer:"Conditional probability"
},
{
question:"What three-dimensional geometric shape is perfectly round like a ball?",
answer:"A sphere"
},
{
question:"What name is given to a solid shape with a flat circular base that tapers smoothly to a single point?",
answer:"A cone"
},
{
question:"What is the value of $\\log_a(1)$ for any valid positive base $a$?",
answer:"0"
},


];
// ==========================================
// STUDYMATE FLASHCARD ENGINE
// MATHEMATICS 
// ==========================================

const SUBJECT = "Mathematics";

let favorites =
    JSON.parse(
        localStorage.getItem("favorites")
    ) || [];

let currentCard = 0;
let showingAnswer = false;


// ==========================================
// HTML ELEMENTS
// ==========================================

const front =
    document.querySelector(".card-front");

const back =
    document.querySelector(".card-back");

const flashcard =
    document.querySelector(".flashcard");

const nextBtn =
    document.querySelector(".next-card");

const previousBtn =
    document.querySelector(".previous-card");

const shuffleBtn =
    document.querySelector(".shuffle-card");

const favoriteBtn =
    document.querySelector(".favorite-card");

const cardCounter =
    document.getElementById("cardCounter");

const progressFill =
    document.getElementById("progressFill");

const progressPercent =
    document.getElementById("progressPercent");

const progressCount =
    document.getElementById("progressCount");


// ==========================================
// GET FLASHCARD ANALYTICS
// ==========================================

function getFlashcardAnalytics() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "studyMateFlashcardAnalytics"
            )
        ) || {};

    } catch (error) {

        return {};

    }

}


// ==========================================
// SAVE FLASHCARD ANALYTICS
// ==========================================

function saveFlashcardAnalytics(action) {

    try {

        let analytics =
            getFlashcardAnalytics();


        if (!analytics[SUBJECT]) {

            analytics[SUBJECT] = {

                sessions: 0,

                reviewed: 0,

                completed: 0,

                lastReviewed: null

            };

        }


        const subject =
            analytics[SUBJECT];


        // New session

        if (action === "STARTED") {

            subject.sessions++;

        }


        // Card reviewed

        if (action === "CARD_REVIEWED") {

            subject.reviewed++;

            subject.lastReviewed =
                new Date().toISOString();

        }


        // Completed

        if (action === "COMPLETED") {

            subject.completed++;

            subject.lastReviewed =
                new Date().toISOString();

        }


        localStorage.setItem(

            "studyMateFlashcardAnalytics",

            JSON.stringify(analytics)

        );


        // ----------------------------------
        // ALSO SAVE GENERAL ACTIVITY
        // ----------------------------------

        let activities =
            JSON.parse(
                localStorage.getItem(
                    "studyMateActivity"
                )
            ) || [];


        activities.push({

            subject: SUBJECT,

            type: "FLASHCARD",

            action: action,

            cardNumber:
                currentCard + 1,

            totalCards:
                flashcards.length,

            date:
                new Date().toISOString()

        });


        localStorage.setItem(

            "studyMateActivity",

            JSON.stringify(activities)

        );


        // ----------------------------------
        // SIMPLE TOTAL FLASHCARD COUNT
        // ----------------------------------

        let totalReviewed = 0;


        Object.values(analytics)
            .forEach(data => {

                totalReviewed +=
                    Number(data.reviewed) || 0;

            });


        localStorage.setItem(

            "flashcardsReviewed",

            totalReviewed

        );


        // ----------------------------------
        // SUBJECT-SPECIFIC COUNT
        // ----------------------------------

        localStorage.setItem(

            "flashcards_" +
            SUBJECT,

            subject.reviewed

        );


    } catch (error) {

        console.warn(

            "StudyMate Flashcard Analytics Error:",

            error

        );

    }

}


// ==========================================
// START FLASHCARD SESSION
// ==========================================

saveFlashcardAnalytics(
    "STARTED"
);


// ==========================================
// CARD COUNTER
// ==========================================

function updateCardCounter() {

    if (!cardCounter) {
        return;
    }

    cardCounter.innerHTML =

        `📖 Card ${currentCard + 1} of ${flashcards.length}`;

}


// ==========================================
// LOAD CARD
// ==========================================

function loadCard() {

    if (!flashcards.length) {
        return;
    }


    document.querySelector(
        ".card-front .card-content"
    ).innerHTML =

        flashcards[currentCard].question;


    document.querySelector(
        ".card-back .card-content"
    ).innerHTML =

        flashcards[currentCard].answer;


    showingAnswer = false;


    flashcard.classList.remove(
        "flipped"
    );


    updateCardCounter();


    const percent =

        (
            (currentCard + 1) /
            flashcards.length
        ) * 100;


    if (progressFill) {

        progressFill.style.width =
            percent + "%";

    }


    if (progressPercent) {

        progressPercent.innerHTML =
            Math.round(percent) + "%";

    }


    if (progressCount) {

        progressCount.innerHTML =

            (currentCard + 1) +
            " / " +
            flashcards.length;

    }

}


// ==========================================
// FLIP CARD
// ==========================================

flashcard.addEventListener(
    "click",
    () => {

        flashcard.classList.toggle(
            "flipped"
        );

        showingAnswer =
            !showingAnswer;

    }
);


// ==========================================
// NEXT CARD
// ==========================================

nextBtn.addEventListener(
    "click",
    () => {

        currentCard++;


        // ----------------------------------
        // ALL CARDS COMPLETED
        // ----------------------------------

        if (
            currentCard >=
            flashcards.length
        ) {

            saveFlashcardAnalytics(
                "COMPLETED"
            );


            localStorage.setItem(

                "flashcardCompleted",

                "true"

            );


            localStorage.setItem(

                "flashcardSubject",

                SUBJECT

            );


            window.location.href =
                "flashcardcompleted.html";


            return;

        }


        // ----------------------------------
        // RECORD REVIEWED CARD
        // ----------------------------------

        saveFlashcardAnalytics(

            "CARD_REVIEWED"

        );


        loadCard();

    }
);


// ==========================================
// PREVIOUS CARD
// ==========================================

previousBtn.addEventListener(
    "click",
    () => {

        if (currentCard === 0) {

            alert(
                "📖 You are already on the first flashcard."
            );

            return;

        }


        currentCard--;

        loadCard();

    }
);


// ==========================================
// SHUFFLE
// ==========================================

shuffleBtn.addEventListener(
    "click",
    () => {

        if (
            flashcards.length <= 1
        ) {

            return;

        }


        let randomCard;


        do {

            randomCard =
                Math.floor(
                    Math.random() *
                    flashcards.length
                );

        } while (
            randomCard === currentCard
        );


        currentCard =
            randomCard;


        saveFlashcardAnalytics(
            "SHUFFLED"
        );


        loadCard();

    }
);


// ==========================================
// FAVORITES
// ==========================================

favoriteBtn.addEventListener(
    "click",
    () => {

        const card =
            flashcards[currentCard];


        const exists =
            favorites.find(
                f =>
                    f.question ===
                    card.question
            );


        if (exists) {

            alert(
                "⭐ This flashcard is already in your favorites."
            );

            return;

        }


        // ----------------------------------
        // FREE FAVORITE LIMIT
        // ----------------------------------

        if (
            favorites.length >= 10
        ) {

            alert(

                "⭐ Free users can save only 10 favorites.\n\n" +

                "Upgrade to StudyMate Premium for unlimited favorites."

            );

            return;

        }


        favorites.push({

            subject:
                SUBJECT,

            question:
                card.question,

            answer:
                card.answer

        });


        localStorage.setItem(

            "favorites",

            JSON.stringify(
                favorites
            )

        );


        alert(
            "⭐ Flashcard added to Favorites!"
        );

    }
);


// ==========================================
// LOAD FIRST CARD
// ==========================================

loadCard();


// ==========================================
// COMPLETION POPUP
// ==========================================

function showCompletionPopup() {

    const restart =
        confirm(

            "🎉 Flashcards Completed!\n\n" +

            "You have studied all " +

            flashcards.length +

            " flashcards.\n\n" +

            "Press OK to Study Again.\n\n" +

            "Press Cancel to go back to Subjects."

        );


    if (restart) {

        currentCard = 0;

        loadCard();

    } else {

        window.location.href =
            "flashcards.html";

    }

}