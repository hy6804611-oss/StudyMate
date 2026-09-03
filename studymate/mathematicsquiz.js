// ======================================
// StudyMate Mathematics quiz.
// ======================================

const allQuestions = [
  
  {
question:"Which of the following is a rational number?",
options:[
"√5",
"π",
"√7",
"3/4"
],
answer:"3/4"
},

{
question:"Evaluate: 18 + 6 ÷ 3",
options:[
"20",
"24",
"8",
"10"
],
answer:"20"
},

{
question:"Express 0.625 as a fraction in its simplest form.",
options:[
"3/5",
"1/8",
"5/8",
"8/5"
],
answer:"5/8"
},

{
question:"Convert 45% to a decimal.",
options:[
"4.5",
"0.45",
"45",
"0.045"
],
answer:"0.45"
},

{
question:"Simplify the ratio 24 : 36.",
options:[
"3 : 2",
"4 : 5",
"5 : 6",
"2 : 3"
],
answer:"2 : 3"
},

{
question:"Simplify: 5x + 3x − 2x",
options:[
"8x",
"10x",
"5x",
"6x"
],
answer:"6x"
},

{
question:"Solve: x + 9 = 17",
options:[
"7",
"9",
"8",
"6"
],
answer:"8"
},

{
question:"Solve: 3x = 21",
options:[
"9",
"8",
"6",
"7"
],
answer:"7"
},

{
question:"Evaluate: 2³ × 2².",
options:[
"64",
"16",
"8",
"32"
],
answer:"32"
},

{
question:"Write 0.00072 in standard form.",
options:[
"7.2 × 10⁻⁵",
"72 × 10⁻⁴",
"0.72 × 10⁻³",
"7.2 × 10⁻⁴"
],
answer:"7.2 × 10⁻⁴"
},

{
question:"Evaluate log₁₀(1000).",
options:[
"2",
"4",
"3",
"1"
],
answer:"3"
},

{
question:"If y varies directly as x and y = 24 when x = 6, find y when x = 10.",
options:[
"36",
"30",
"48",
"40"
],
answer:"40"
},

{
question:"The point (-4, 5) lies in which quadrant?",
options:[
"Quadrant IV",
"Quadrant II",
"Quadrant III",
"Quadrant I"
],
answer:"Quadrant II"
},

{
question:"Find the gradient of the line joining (2,3) and (6,11).",
options:[
"4",
"3",
"1",
"2"
],
answer:"2"
},

{
question:"Find the area of a rectangle of length 12 cm and width 5 cm.",
options:[
"65 cm²",
"50 cm²",
"55 cm²",
"60 cm²"
],
answer:"60 cm²"
},

{
question:"Find sin 30°.",
options:[
"√3/2",
"0",
"1",
"1/2"
],
answer:"1/2"
},

{
question:"Which measure of central tendency is the most frequent value?",
options:[
"Mean",
"Mode",
"Median",
"Range"
],
answer:"Mode"
},

{
question:"The range of the data 8, 11, 15, 18, 20 is ______.",
options:[
"10",
"13",
"11",
"12"
],
answer:"12"
},

{
question:"A fair die is rolled once. What is the probability of obtaining an even number?",
options:[
"1/3",
"2/3",
"1/6",
"1/2"
],
answer:"1/2"
},

{
question:"A fair coin is tossed once. Find the probability of obtaining a Head.",
options:[
"1",
"0",
"1/2",
"1/4"
],
answer:"1/2"
},
{
question:"Simplify: 36 ÷ (3 × 4).",
options:[
"12",
"6",
"3",
"9"
],
answer:"3"
},

{
question:"Convert 0.08 to a percentage.",
options:[
"0.8%",
"80%",
"8%",
"800%"
],
answer:"8%"
},

{
question:"Find 25% of ₦800.",
options:[
"₦400",
"₦100",
"₦200",
"₦250"
],
answer:"₦200"
},

{
question:"Express 3/5 as a decimal.",
options:[
"0.3",
"0.6",
"0.8",
"0.5"
],
answer:"0.6"
},

{
question:"Simplify the ratio 15 : 45.",
options:[
"1 : 3",
"3 : 5",
"5 : 15",
"2 : 3"
],
answer:"1 : 3"
},

{
question:"Simplify: 7a + 5a - 3a.",
options:[
"9a",
"8a",
"10a",
"12a"
],
answer:"9a"
},

{
question:"Solve: 5x - 7 = 18.",
options:[
"6",
"4",
"5",
"7"
],
answer:"5"
},

{
question:"Solve simultaneously: x + y = 10 and x - y = 2.",
options:[
"x = 5, y = 5",
"x = 7, y = 3",
"x = 6, y = 4",
"x = 8, y = 2"
],
answer:"x = 6, y = 4"
},

{
question:"Evaluate: 5².",
options:[
"20",
"15",
"10",
"25"
],
answer:"25"
},

{
question:"Evaluate: 10⁰.",
options:[
"10",
"1",
"0",
"100"
],
answer:"1"
},

{
question:"Write 9,500 in standard form.",
options:[
"9.5 × 10³",
"95 × 10²",
"0.95 × 10⁴",
"9.5 × 10⁴"
],
answer:"9.5 × 10³"
},

{
question:"Evaluate log₁₀(100).",
options:[
"1",
"3",
"2",
"10"
],
answer:"2"
},

{
question:"If y varies directly as x and y = 15 when x = 3, find y when x = 8.",
options:[
"35",
"40",
"45",
"30"
],
answer:"40"
},

{
question:"If a ★ b = a + 2b, find 4 ★ 5.",
options:[
"18",
"12",
"14",
"10"
],
answer:"14"
},

{
question:"The point (5, -3) lies in ______.",
options:[
"Quadrant II",
"Quadrant IV",
"Quadrant III",
"Quadrant I"
],
answer:"Quadrant IV"
},

{
question:"Find the perimeter of a rectangle with length 9 cm and width 4 cm.",
options:[
"18 cm",
"30 cm",
"26 cm",
"22 cm"
],
answer:"26 cm"
},

{
question:"Find cos 60°.",
options:[
"√3/2",
"1",
"1/2",
"0"
],
answer:"1/2"
},

{
question:"The average of 6, 8, 10 and 12 is ______.",
options:[
"8",
"10",
"9",
"11"
],
answer:"9"
},

{
question:"The median of 2, 4, 6, 8, 10 is ______.",
options:[
"4",
"8",
"5",
"6"
],
answer:"6"
},

{
question:"A bag contains 5 red balls and 5 blue balls. One ball is selected at random. Find the probability of selecting a blue ball.",
options:[
"1/5",
"2/5",
"1",
"1/2"
],
answer:"1/2"
},
{
question:"Convert 3/20 to a percentage.",
options:[
"30%",
"10%",
"15%",
"20%"
],
answer:"15%"
},

{
question:"Evaluate: 48 ÷ 6 × 2.",
options:[
"12",
"16",
"18",
"24"
],
answer:"16"
},

{
question:"Simplify: 9m - 4m + 2m.",
options:[
"5m",
"11m",
"7m",
"6m"
],
answer:"7m"
},

{
question:"Solve: 4x + 5 = 29.",
options:[
"5",
"6",
"7",
"8"
],
answer:"6"
},

{
question:"Solve simultaneously: x + y = 12 and x - y = 4.",
options:[
"x = 8, y = 4",
"x = 7, y = 5",
"x = 6, y = 6",
"x = 9, y = 3"
],
answer:"x = 8, y = 4"
},

{
question:"Evaluate: 3⁴.",
options:[
"27",
"64",
"81",
"12"
],
answer:"81"
},

{
question:"Write 0.0056 in standard form.",
options:[
"5.6 × 10⁻³",
"56 × 10⁻⁴",
"0.56 × 10⁻²",
"5.6 × 10⁻²"
],
answer:"5.6 × 10⁻³"
},

{
question:"Evaluate log₁₀(1).",
options:[
"1",
"0",
"10",
"-1"
],
answer:"0"
},

{
question:"If y varies directly as x and y = 18 when x = 9, find y when x = 15.",
options:[
"25",
"28",
"30",
"35"
],
answer:"30"
},

{
question:"If a ★ b = ab + 1, find 3 ★ 4.",
options:[
"11",
"13",
"14",
"12"
],
answer:"13"
},

{
question:"The point (-6,-2) lies in ______.",
options:[
"Quadrant II",
"Quadrant I",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant III"
},

{
question:"Find the gradient of the line joining (1,2) and (5,10).",
options:[
"2",
"4",
"3",
"1"
],
answer:"2"
},

{
question:"Find the area of a triangle with base 12 cm and height 8 cm.",
options:[
"96 cm²",
"40 cm²",
"48 cm²",
"56 cm²"
],
answer:"48 cm²"
},

{
question:"Find tan 45°.",
options:[
"0",
"√3",
"1/2",
"1"
],
answer:"1"
},

{
question:"The mode of 3, 5, 5, 7, 9 is ______.",
options:[
"3",
"5",
"7",
"9"
],
answer:"5"
},

{
question:"Find the mean of 4, 6, 8, 10.",
options:[
"8",
"6",
"7",
"9"
],
answer:"7"
},

{
question:"A fair coin is tossed. What is the probability of obtaining a Tail?",
options:[
"1/4",
"1",
"0",
"1/2"
],
answer:"1/2"
},

{
question:"A fair die is rolled once. Find the probability of obtaining a prime number.",
options:[
"1/2",
"1/3",
"2/3",
"1/6"
],
answer:"1/2"
},

{
question:"Which of the following is an irrational number?",
options:[
"5/8",
"0.75",
"√2",
"2.5"
],
answer:"√2"
},

{
question:"Express 0.125 as a fraction in its simplest form.",
options:[
"1/4",
"1/8",
"3/8",
"1/16"
],
answer:"1/8"
},
{
question:"Find 35% of ₦2,000.",
options:[
"₦650",
"₦700",
"₦750",
"₦600"
],
answer:"₦700"
},

{
question:"Evaluate: 72 ÷ (9 × 2).",
options:[
"2",
"3",
"4",
"5"
],
answer:"4"
},

{
question:"Simplify: 4p + 9p - 5p.",
options:[
"7p",
"9p",
"8p",
"10p"
],
answer:"8p"
},

{
question:"Solve: 6x - 8 = 28.",
options:[
"4",
"5",
"6",
"7"
],
answer:"6"
},

{
question:"Solve simultaneously: x + y = 11 and x - y = 1.",
options:[
"x = 5, y = 6",
"x = 7, y = 4",
"x = 6, y = 5",
"x = 8, y = 3"
],
answer:"x = 6, y = 5"
},

{
question:"Evaluate: 4³.",
options:[
"16",
"64",
"32",
"81"
],
answer:"64"
},

{
question:"Write 45,000 in standard form.",
options:[
"45 × 10³",
"4.5 × 10⁴",
"0.45 × 10⁵",
"4.5 × 10⁵"
],
answer:"4.5 × 10⁴"
},

{
question:"Evaluate log₁₀(10).",
options:[
"2",
"1",
"0",
"10"
],
answer:"1"
},

{
question:"If y varies directly as x and y = 28 when x = 7, find y when x = 5.",
options:[
"18",
"22",
"20",
"24"
],
answer:"20"
},

{
question:"If a ★ b = a² + b, find 3 ★ 4.",
options:[
"12",
"11",
"14",
"13"
],
answer:"13"
},

{
question:"The point (4,-7) lies in ______.",
options:[
"Quadrant II",
"Quadrant III",
"Quadrant IV",
"Quadrant I"
],
answer:"Quadrant IV"
},

{
question:"Find the gradient of the line joining (2,1) and (6,9).",
options:[
"2",
"3",
"4",
"1"
],
answer:"2"
},

{
question:"Find the circumference of a circle of radius 7 cm. (Take π = 22/7)",
options:[
"22 cm",
"44 cm",
"49 cm",
"154 cm"
],
answer:"44 cm"
},

{
question:"Find cos 0°.",
options:[
"0",
"1",
"1/2",
"√3/2"
],
answer:"1"
},

{
question:"The median of 5, 8, 10, 12, 15 is ______.",
options:[
"10",
"8",
"12",
"9"
],
answer:"10"
},

{
question:"The range of the data 4, 9, 12, 18, 20 is ______.",
options:[
"14",
"18",
"16",
"12"
],
answer:"16"
},

{
question:"A bag contains 8 green balls and 2 yellow balls. Find the probability of selecting a yellow ball.",
options:[
"1/2",
"1/10",
"1/5",
"4/5"
],
answer:"1/5"
},

{
question:"A fair die is rolled once. Find the probability of obtaining a number greater than 4.",
options:[
"1/6",
"1/3",
"2/3",
"1/2"
],
answer:"1/3"
},

{
question:"Which of the following is an integer?",
options:[
"3.5",
"-7",
"2/3",
"√9"
],
answer:"-7"
},

{
question:"Express 0.2 as a fraction in its simplest form.",
options:[
"1/2",
"1/10",
"1/4",
"1/5"
],
answer:"1/5"
},
{
question:"Find 12.5% of ₦640.",
options:[
"₦60",
"₦90",
"₦80",
"₦70"
],
answer:"₦80"
},

{
question:"Evaluate: 84 ÷ 7 + 6.",
options:[
"20",
"18",
"16",
"14"
],
answer:"18"
},

{
question:"Simplify: 15x - 7x + 2x.",
options:[
"10x",
"8x",
"9x",
"11x"
],
answer:"10x"
},

{
question:"Solve: 8x + 4 = 44.",
options:[
"4",
"6",
"5",
"7"
],
answer:"5"
},

{
question:"Solve simultaneously: x + y = 15 and x - y = 5.",
options:[
"x = 10, y = 5",
"x = 9, y = 6",
"x = 8, y = 7",
"x = 11, y = 4"
],
answer:"x = 10, y = 5"
},

{
question:"Evaluate: 6².",
options:[
"12",
"18",
"36",
"24"
],
answer:"36"
},

{
question:"Write 0.00045 in standard form.",
options:[
"4.5 × 10⁻⁴",
"45 × 10⁻⁵",
"4.5 × 10⁻⁵",
"0.45 × 10⁻³"
],
answer:"4.5 × 10⁻⁴"
},

{
question:"Evaluate log₁₀(10000).",
options:[
"5",
"4",
"3",
"2"
],
answer:"4"
},

{
question:"If y varies directly as x and y = 32 when x = 8, find y when x = 12.",
options:[
"44",
"52",
"48",
"40"
],
answer:"48"
},

{
question:"If a ★ b = a + b + 5, find 6 ★ 4.",
options:[
"13",
"14",
"15",
"16"
],
answer:"15"
},

{
question:"The point (-8,4) lies in ______.",
options:[
"Quadrant I",
"Quadrant II",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant II"
},

{
question:"Find the gradient of the line joining (3,5) and (7,13).",
options:[
"4",
"3",
"1",
"2"
],
answer:"2"
},

{
question:"Find the area of a circle of radius 7 cm. (Take π = 22/7)",
options:[
"154 cm²",
"44 cm²",
"49 cm²",
"88 cm²"
],
answer:"154 cm²"
},

{
question:"Find sin 90°.",
options:[
"0",
"1",
"1/2",
"√3/2"
],
answer:"1"
},

{
question:"The mean of 5, 10, 15, 20 and 25 is ______.",
options:[
"12",
"18",
"15",
"20"
],
answer:"15"
},

{
question:"The mode of 2, 4, 4, 6, 8, 4, 10 is ______.",
options:[
"6",
"2",
"8",
"4"
],
answer:"4"
},

{
question:"A box contains 9 white balls and 3 black balls. Find the probability of selecting a black ball.",
options:[
"1/3",
"1/4",
"3/4",
"1/12"
],
answer:"1/4"
},

{
question:"A fair die is rolled once. What is the probability of obtaining a number less than 3?",
options:[
"1/6",
"2/3",
"1/3",
"1/2"
],
answer:"1/3"
},

{
question:"Which of the following is a whole number?",
options:[
"-1",
"0",
"1/2",
"-5"
],
answer:"0"
},

{
question:"Express 0.375 as a fraction in its simplest form.",
options:[
"1/4",
"5/8",
"3/4",
"3/8"
],
answer:"3/8"
},
{
question:"Find 40% of ₦950.",
options:[
"₦380",
"₦360",
"₦390",
"₦400"
],
answer:"₦380"
},

{
question:"Evaluate: 96 ÷ 8 - 5.",
options:[
"8",
"6",
"7",
"9"
],
answer:"7"
},

{
question:"Simplify: 18y - 9y + 4y.",
options:[
"12y",
"13y",
"11y",
"14y"
],
answer:"13y"
},

{
question:"Solve: 9x - 6 = 48.",
options:[
"6",
"5",
"7",
"8"
],
answer:"6"
},

{
question:"Solve simultaneously: x + y = 16 and x - y = 8.",
options:[
"x = 12, y = 4",
"x = 10, y = 6",
"x = 11, y = 5",
"x = 9, y = 7"
],
answer:"x = 12, y = 4"
},

{
question:"Evaluate: 7².",
options:[
"42",
"49",
"56",
"36"
],
answer:"49"
},

{
question:"Write 0.0032 in standard form.",
options:[
"3.2 × 10⁻²",
"32 × 10⁻⁴",
"3.2 × 10⁻³",
"0.32 × 10⁻²"
],
answer:"3.2 × 10⁻³"
},

{
question:"Evaluate log₁₀(100000).",
options:[
"4",
"5",
"6",
"3"
],
answer:"5"
},

{
question:"If y varies directly as x and y = 45 when x = 9, find y when x = 14.",
options:[
"65",
"75",
"70",
"60"
],
answer:"70"
},

{
question:"If a ★ b = 2a + b, find 5 ★ 7.",
options:[
"15",
"16",
"17",
"18"
],
answer:"17"
},

{
question:"The point (-5,-9) lies in ______.",
options:[
"Quadrant II",
"Quadrant IV",
"Quadrant I",
"Quadrant III"
],
answer:"Quadrant III"
},

{
question:"Find the gradient of the line joining (4,2) and (8,10).",
options:[
"1",
"3",
"2",
"4"
],
answer:"2"
},

{
question:"Find the perimeter of a square of side 9 cm.",
options:[
"18 cm",
"36 cm",
"27 cm",
"81 cm"
],
answer:"36 cm"
},

{
question:"Find tan 0°.",
options:[
"0",
"1",
"√3",
"1/2"
],
answer:"0"
},

{
question:"The median of 7, 9, 11, 13, 15 is ______.",
options:[
"13",
"11",
"9",
"12"
],
answer:"11"
},

{
question:"Find the range of 14, 9, 21, 18, 12.",
options:[
"10",
"11",
"13",
"12"
],
answer:"12"
},

{
question:"A bag contains 6 red balls and 9 blue balls. Find the probability of selecting a red ball.",
options:[
"3/5",
"2/5",
"1/5",
"4/5"
],
answer:"2/5"
},

{
question:"A fair die is rolled once. What is the probability of obtaining a multiple of 3?",
options:[
"1/2",
"1/6",
"2/3",
"1/3"
],
answer:"1/3"
},

{
question:"Which of the following is a prime number?",
options:[
"15",
"21",
"17",
"27"
],
answer:"17"
},

{
question:"Express 0.875 as a fraction in its simplest form.",
options:[
"3/4",
"7/8",
"5/8",
"1/8"
],
answer:"7/8"
},
{
question:"Find 75% of ₦1,200.",
options:[
"₦800",
"₦950",
"₦900",
"₦1,000"
],
answer:"₦900"
},

{
question:"Evaluate: 15 + 24 ÷ 6.",
options:[
"19",
"7",
"9",
"21"
],
answer:"19"
},

{
question:"Simplify: 12a + 5a - 8a.",
options:[
"8a",
"9a",
"10a",
"11a"
],
answer:"9a"
},

{
question:"Solve: 7x + 9 = 44.",
options:[
"3",
"6",
"4",
"5"
],
answer:"5"
},

{
question:"Solve simultaneously: x + y = 20 and x - y = 4.",
options:[
"x = 11, y = 9",
"x = 12, y = 8",
"x = 13, y = 7",
"x = 10, y = 10"
],
answer:"x = 12, y = 8"
},

{
question:"Evaluate: 8².",
options:[
"64",
"48",
"72",
"56"
],
answer:"64"
},

{
question:"Write 320,000 in standard form.",
options:[
"3.2 × 10⁵",
"32 × 10⁴",
"0.32 × 10⁶",
"3.2 × 10⁶"
],
answer:"3.2 × 10⁵"
},

{
question:"Evaluate log₁₀(0.1).",
options:[
"0",
"1",
"-1",
"10"
],
answer:"-1"
},

{
question:"If y varies directly as x and y = 54 when x = 6, find y when x = 9.",
options:[
"72",
"81",
"84",
"90"
],
answer:"81"
},

{
question:"If a ★ b = a - b + 10, find 15 ★ 8.",
options:[
"15",
"16",
"17",
"18"
],
answer:"17"
},

{
question:"The point (7, -6) lies in ______.",
options:[
"Quadrant III",
"Quadrant II",
"Quadrant IV",
"Quadrant I"
],
answer:"Quadrant IV"
},

{
question:"Find the gradient of the line joining (1,4) and (5,12).",
options:[
"2",
"4",
"3",
"1"
],
answer:"2"
},

{
question:"Find the area of a square of side 11 cm.",
options:[
"44 cm²",
"121 cm²",
"22 cm²",
"110 cm²"
],
answer:"121 cm²"
},

{
question:"Find cos 90°.",
options:[
"1",
"0",
"1/2",
"-1"
],
answer:"0"
},

{
question:"Find the mean of 12, 15, 18, 21 and 24.",
options:[
"16",
"20",
"18",
"19"
],
answer:"18"
},

{
question:"The mode of 9, 11, 11, 13, 15, 11 is ______.",
options:[
"13",
"11",
"15",
"9"
],
answer:"11"
},

{
question:"A box contains 7 green balls and 13 white balls. Find the probability of selecting a green ball.",
options:[
"7/20",
"13/20",
"1/2",
"3/10"
],
answer:"7/20"
},

{
question:"A fair die is rolled once. What is the probability of obtaining a factor of 6?",
options:[
"2/3",
"1/3",
"1/2",
"5/6"
],
answer:"2/3"
},

{
question:"Which of the following is a composite number?",
options:[
"19",
"23",
"21",
"17"
],
answer:"21"
},

{
question:"Express 0.04 as a fraction in its simplest form.",
options:[
"1/20",
"1/25",
"1/40",
"1/50"
],
answer:"1/25"
},
{
question:"Find 20% of ₦2,500.",
options:[
"₦600",
"₦500",
"₦400",
"₦450"
],
answer:"₦500"
},

{
question:"Evaluate: 56 ÷ 7 + 9.",
options:[
"15",
"16",
"17",
"18"
],
answer:"17"
},

{
question:"Simplify: 14b - 6b + 3b.",
options:[
"11b",
"10b",
"9b",
"12b"
],
answer:"11b"
},

{
question:"Solve: 11x - 7 = 48.",
options:[
"4",
"5",
"6",
"7"
],
answer:"5"
},

{
question:"Solve simultaneously: x + y = 18 and x - y = 6.",
options:[
"x = 12, y = 6",
"x = 10, y = 8",
"x = 11, y = 7",
"x = 9, y = 9"
],
answer:"x = 12, y = 6"
},

{
question:"Evaluate: 9².",
options:[
"72",
"81",
"90",
"99"
],
answer:"81"
},

{
question:"Write 0.00081 in standard form.",
options:[
"8.1 × 10⁻⁴",
"8.1 × 10⁻⁵",
"81 × 10⁻⁶",
"0.81 × 10⁻³"
],
answer:"8.1 × 10⁻⁴"
},

{
question:"Evaluate log₁₀(0.001).",
options:[
"-1",
"-2",
"-3",
"3"
],
answer:"-3"
},

{
question:"If y varies directly as x and y = 63 when x = 9, find y when x = 11.",
options:[
"70",
"75",
"77",
"81"
],
answer:"77"
},

{
question:"If a ★ b = 3a - b, find 8 ★ 5.",
options:[
"18",
"19",
"20",
"21"
],
answer:"19"
},

{
question:"The point (-9,8) lies in ______.",
options:[
"Quadrant II",
"Quadrant III",
"Quadrant I",
"Quadrant IV"
],
answer:"Quadrant II"
},

{
question:"Find the gradient of the line joining (2,5) and (8,17).",
options:[
"1",
"3",
"2",
"4"
],
answer:"2"
},

{
question:"Find the circumference of a circle of radius 14 cm. (Take π = 22/7)",
options:[
"44 cm",
"88 cm",
"154 cm",
"176 cm"
],
answer:"88 cm"
},

{
question:"Find sin 45°.",
options:[
"1",
"√2/2",
"√3/2",
"1/2"
],
answer:"√2/2"
},

{
question:"Find the median of 4, 6, 8, 10, 12, 14, 16.",
options:[
"8",
"9",
"10",
"11"
],
answer:"10"
},

{
question:"The range of 18, 25, 11, 30 and 16 is ______.",
options:[
"14",
"18",
"19",
"17"
],
answer:"19"
},

{
question:"A bag contains 4 red balls, 5 blue balls and 1 green ball. Find the probability of selecting a green ball.",
options:[
"1/5",
"1/10",
"1/4",
"1/9"
],
answer:"1/10"
},

{
question:"A fair die is rolled once. What is the probability of obtaining an odd number?",
options:[
"1/3",
"2/3",
"1/2",
"1/6"
],
answer:"1/2"
},

{
question:"Which of the following is divisible by 9?",
options:[
"126",
"135",
"142",
"154"
],
answer:"135"
},

{
question:"Express 0.6 as a fraction in its simplest form.",
options:[
"2/5",
"1/2",
"3/5",
"4/5"
],
answer:"3/5"
},
{
question:"Find 60% of ₦450.",
options:[
"₦250",
"₦260",
"₦270",
"₦280"
],
answer:"₦270"
},

{
question:"Evaluate: 81 ÷ 9 × 4.",
options:[
"32",
"36",
"40",
"28"
],
answer:"36"
},

{
question:"Simplify: 20m - 8m - 5m.",
options:[
"7m",
"8m",
"9m",
"10m"
],
answer:"7m"
},

{
question:"Solve: 13x + 5 = 57.",
options:[
"5",
"6",
"4",
"7"
],
answer:"4"
},

{
question:"Solve simultaneously: x + y = 14 and x - y = 2.",
options:[
"x = 8, y = 6",
"x = 9, y = 5",
"x = 7, y = 7",
"x = 10, y = 4"
],
answer:"x = 8, y = 6"
},

{
question:"Evaluate: 10².",
options:[
"20",
"100",
"50",
"200"
],
answer:"100"
},

{
question:"Write 0.0094 in standard form.",
options:[
"9.4 × 10⁻²",
"9.4 × 10⁻³",
"94 × 10⁻⁴",
"0.94 × 10⁻²"
],
answer:"9.4 × 10⁻³"
},

{
question:"Evaluate log₁₀(1000000).",
options:[
"5",
"7",
"6",
"4"
],
answer:"6"
},

{
question:"If y varies directly as x and y = 42 when x = 7, find y when x = 15.",
options:[
"84",
"90",
"96",
"80"
],
answer:"90"
},

{
question:"If a ★ b = a + 4b, find 7 ★ 3.",
options:[
"18",
"19",
"20",
"21"
],
answer:"19"
},

{
question:"The point (6,9) lies in ______.",
options:[
"Quadrant III",
"Quadrant IV",
"Quadrant I",
"Quadrant II"
],
answer:"Quadrant I"
},

{
question:"Find the gradient of the line joining (3,2) and (7,10).",
options:[
"3",
"1",
"2",
"4"
],
answer:"2"
},

{
question:"Find the area of a rectangle of length 15 cm and width 8 cm.",
options:[
"100 cm²",
"120 cm²",
"110 cm²",
"130 cm²"
],
answer:"120 cm²"
},

{
question:"Find cos 30°.",
options:[
"√2/2",
"1/2",
"√3/2",
"1"
],
answer:"√3/2"
},

{
question:"Find the mean of 8, 12, 16, 20 and 24.",
options:[
"15",
"16",
"18",
"20"
],
answer:"16"
},

{
question:"The mode of 6, 7, 8, 8, 8, 10 is ______.",
options:[
"7",
"8",
"10",
"6"
],
answer:"8"
},

{
question:"A box contains 5 white balls and 15 black balls. Find the probability of selecting a white ball.",
options:[
"1/2",
"1/3",
"1/4",
"1/5"
],
answer:"1/4"
},

{
question:"A fair die is rolled once. What is the probability of obtaining a number greater than 2?",
options:[
"1/2",
"2/3",
"5/6",
"4/6"
],
answer:"2/3"
},

{
question:"Which of the following is an even prime number?",
options:[
"4",
"6",
"2",
"8"
],
answer:"2"
},

{
question:"Express 0.125 as a percentage.",
options:[
"1.25%",
"12.5%",
"125%",
"0.125%"
],
answer:"12.5%"
},
{
question:"Find 45% of ₦800.",
options:[
"₦320",
"₦340",
"₦360",
"₦380"
],
answer:"₦360"
},

{
question:"Evaluate: 64 ÷ 8 + 12.",
options:[
"18",
"20",
"22",
"24"
],
answer:"20"
},

{
question:"Simplify: 16x + 7x - 9x.",
options:[
"13x",
"14x",
"15x",
"16x"
],
answer:"14x"
},

{
question:"Solve: 12x - 9 = 39.",
options:[
"5",
"3",
"4",
"6"
],
answer:"4"
},

{
question:"Solve simultaneously: x + y = 22 and x - y = 6.",
options:[
"x = 13, y = 9",
"x = 14, y = 8",
"x = 15, y = 7",
"x = 12, y = 10"
],
answer:"x = 14, y = 8"
},

{
question:"Evaluate: 11².",
options:[
"111",
"132",
"121",
"101"
],
answer:"121"
},

{
question:"Write 0.00063 in standard form.",
options:[
"6.3 × 10⁻⁴",
"6.3 × 10⁻⁵",
"63 × 10⁻⁶",
"0.63 × 10⁻³"
],
answer:"6.3 × 10⁻⁴"
},

{
question:"Evaluate log₁₀(10000000).",
options:[
"8",
"7",
"6",
"5"
],
answer:"7"
},

{
question:"If y varies directly as x and y = 40 when x = 5, find y when x = 9.",
options:[
"70",
"72",
"74",
"68"
],
answer:"72"
},

{
question:"If a ★ b = 2a + 3b, find 4 ★ 6.",
options:[
"24",
"26",
"28",
"30"
],
answer:"26"
},

{
question:"The point (-7,-4) lies in ______.",
options:[
"Quadrant II",
"Quadrant I",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant III"
},

{
question:"Find the gradient of the line joining (5,3) and (9,11).",
options:[
"2",
"3",
"4",
"1"
],
answer:"2"
},

{
question:"Find the perimeter of a rectangle of length 14 cm and width 9 cm.",
options:[
"42 cm",
"46 cm",
"48 cm",
"50 cm"
],
answer:"46 cm"
},

{
question:"Find tan 60°.",
options:[
"√3",
"1",
"√2",
"1/2"
],
answer:"√3"
},

{
question:"Find the median of 9, 12, 15, 18, 21.",
options:[
"18",
"12",
"15",
"21"
],
answer:"15"
},

{
question:"The range of 7, 15, 18, 23 and 29 is ______.",
options:[
"20",
"22",
"21",
"18"
],
answer:"22"
},

{
question:"A bag contains 12 balls, of which 5 are red. Find the probability of selecting a red ball.",
options:[
"5/12",
"7/12",
"1/2",
"5/7"
],
answer:"5/12"
},

{
question:"A fair die is rolled once. What is the probability of obtaining a number less than 5?",
options:[
"2/3",
"1/2",
"5/6",
"4/6"
],
answer:"2/3"
},

{
question:"Which of the following is a factor of 48?",
options:[
"14",
"16",
"18",
"20"
],
answer:"16"
},

{
question:"Express 0.04 as a percentage.",
options:[
"0.4%",
"4%",
"40%",
"0.04%"
],
answer:"4%"
},
{
question:"A store offers a 20% discount on an item originally priced at $150. What is the discount?",
options:[
"$20",
"$25",
"$30",
"$35"
],
answer:"$30"
},

{
question:"Which of the following numbers is irrational?",
options:[
"0.75",
"√11",
"5/8",
"0.2"
],
answer:"√11"
},

{
question:"The value of 3² × 3³ is ______.",
options:[
"243",
"27",
"729",
"81"
],
answer:"243"
},

{
question:"A recipe requires flour and sugar in the ratio 5 : 2. If 20 cups of flour are used, how many cups of sugar are needed?",
options:[
"6",
"8",
"10",
"12"
],
answer:"8"
},

{
question:"The solution of the equation 4x + 9 = 29 is ______.",
options:[
"4",
"5",
"6",
"7"
],
answer:"5"
},

{
question:"A line has a gradient of 0. Which type of line is it?",
options:[
"Vertical line",
"Horizontal line",
"Diagonal line",
"Curved line"
],
answer:"Horizontal line"
},

{
question:"Which expression is equivalent to (2³)²?",
options:[
"2⁵",
"2⁶",
"2⁸",
"2⁹"
],
answer:"2⁶"
},

{
question:"The point (0, 7) lies on the ______.",
options:[
"x-axis",
"Origin",
"y-axis",
"Quadrant I"
],
answer:"y-axis"
},

{
question:"If y = 5x - 2, find the value of y when x = 4.",
options:[
"16",
"18",
"20",
"22"
],
answer:"18"
},

{
question:"Which of the following represents a probability that is impossible?",
options:[
"0",
"1",
"1/2",
"3/4"
],
answer:"0"
},

{
question:"The average of 14, 18, 22 and 26 is ______.",
options:[
"18",
"19",
"20",
"21"
],
answer:"20"
},

{
question:"A car travels 360 km in 6 hours. What is its average speed?",
options:[
"50 km/h",
"55 km/h",
"60 km/h",
"65 km/h"
],
answer:"60 km/h"
},

{
question:"Which of the following equations represents a straight line?",
options:[
"y = 2x + 5",
"y = x² + 1",
"y = 1/x",
"y = √x"
],
answer:"y = 2x + 5"
},

{
question:"A fair die is rolled once. What is the probability of obtaining the number 5?",
options:[
"1/2",
"1/3",
"1/6",
"5/6"
],
answer:"1/6"
},

{
question:"The value of log₁₀(10000) is ______.",
options:[
"2",
"3",
"4",
"5"
],
answer:"4"
},

{
question:"If two lines are perpendicular, the product of their gradients is ______.",
options:[
"0",
"1",
"-1",
"2"
],
answer:"-1"
},

{
question:"Which of the following fractions is equal to 0.875?",
options:[
"3/4",
"5/8",
"7/8",
"9/10"
],
answer:"7/8"
},

{
question:"A class has 32 students. If 24 are present, what percentage of the class is present?",
options:[
"70%",
"75%",
"80%",
"85%"
],
answer:"75%"
},

{
question:"The standard form of 0.000009 is ______.",
options:[
"9 × 10⁻⁵",
"9 × 10⁻⁶",
"9 × 10⁻⁷",
"0.9 × 10⁻⁵"
],
answer:"9 × 10⁻⁶"
},

{
question:"Which of the following statements about parallel lines is correct?",
options:[
"They always intersect.",
"They have equal gradients.",
"They have zero gradients.",
"They form an angle of 90°."
],
answer:"They have equal gradients."
},
{
question:"Which of the following numbers is divisible by both 2 and 3?",
options:[
"15",
"18",
"25",
"35"
],
answer:"18"
},

{
question:"A student scored 72 marks out of 90 in a Mathematics test. What percentage did the student score?",
options:[
"75%",
"80%",
"85%",
"90%"
],
answer:"80%"
},

{
question:"Simplify: (4² × 4³) ÷ 4².",
options:[
"4²",
"4³",
"4⁴",
"4⁵"
],
answer:"4³"
},

{
question:"The coordinates of the origin are ______.",
options:[
"(1,1)",
"(0,1)",
"(1,0)",
"(0,0)"
],
answer:"(0,0)"
},

{
question:"If x = 7, find the value of 3x - 5.",
options:[
"14",
"15",
"16",
"17"
],
answer:"16"
},

{
question:"A factory produced 2,400 bottles in 8 hours. Assuming the production rate is constant, how many bottles are produced per hour?",
options:[
"250",
"280",
"300",
"320"
],
answer:"300"
},

{
question:"Which of the following is equivalent to 0.125?",
options:[
"1/4",
"1/5",
"1/8",
"1/10"
],
answer:"1/8"
},

{
question:"A line has the equation y = -4x + 9. What is its gradient?",
options:[
"-4",
"4",
"9",
"-9"
],
answer:"-4"
},

{
question:"The value of √196 is ______.",
options:[
"12",
"13",
"14",
"16"
],
answer:"14"
},

{
question:"If y varies directly as x and y = 36 when x = 9, find y when x = 15.",
options:[
"54",
"60",
"64",
"72"
],
answer:"60"
},

{
question:"Which of the following is a terminating decimal?",
options:[
"2/3",
"5/8",
"7/9",
"11/15"
],
answer:"5/8"
},

{
question:"The probability of selecting a king from a standard deck of 52 playing cards is ______.",
options:[
"1/13",
"1/26",
"1/52",
"4/13"
],
answer:"1/13"
},

{
question:"If two angles are complementary, their sum is ______.",
options:[
"90°",
"180°",
"270°",
"360°"
],
answer:"90°"
},

{
question:"A line perpendicular to y = 5x - 3 has a gradient of ______.",
options:[
"-5",
"1/5",
"-1/5",
"5"
],
answer:"-1/5"
},

{
question:"The value of log₁₀(100) is ______.",
options:[
"0",
"1",
"2",
"10"
],
answer:"2"
},

{
question:"Which of the following is the correct standard form of 540,000?",
options:[
"5.4 × 10⁴",
"5.4 × 10⁵",
"54 × 10⁴",
"0.54 × 10⁶"
],
answer:"5.4 × 10⁵"
},

{
question:"A school bus travels 180 km in 3 hours. What is its average speed?",
options:[
"50 km/h",
"55 km/h",
"60 km/h",
"65 km/h"
],
answer:"60 km/h"
},

{
question:"The mean of 9, 12, 15, 18 and 21 is ______.",
options:[
"13",
"14",
"15",
"16"
],
answer:"15"
},

{
question:"Which of the following statements is true about a horizontal line?",
options:[
"It has an undefined gradient.",
"It has a gradient of 1.",
"It has a negative gradient.",
"It has a gradient of 0."
],
answer:"It has a gradient of 0."
},

{
question:"If 2x + 7 = 25, the value of x is ______.",
options:[
"7",
"8",
"9",
"10"
],
answer:"9"
},
{
question:"A map uses a scale of 1 : 50,000. If two towns are 8 cm apart on the map, what is the actual distance?",
options:[
"2 km",
"3 km",
"4 km",
"5 km"
],
answer:"4 km"
},

{
question:"Which of the following numbers is a multiple of both 4 and 6?",
options:[
"18",
"20",
"24",
"30"
],
answer:"24"
},

{
question:"Evaluate: (5³ ÷ 5) × 5.",
options:[
"25",
"125",
"625",
"75"
],
answer:"125"
},

{
question:"The equation y = 7x - 4 crosses the y-axis at ______.",
options:[
"-4",
"4",
"7",
"0"
],
answer:"-4"
},

{
question:"A book costs $48 after a 20% discount. What was the original price?",
options:[
"$50",
"$55",
"$60",
"$65"
],
answer:"$60"
},

{
question:"Which of the following ordered pairs lies in Quadrant II?",
options:[
"(4, -2)",
"(-4, 2)",
"(-4, -2)",
"(4, 2)"
],
answer:"(-4, 2)"
},

{
question:"If 5 pencils cost $15, what is the cost of 12 pencils at the same rate?",
options:[
"$30",
"$32",
"$36",
"$40"
],
answer:"$36"
},

{
question:"The value of 2⁵ is ______.",
options:[
"16",
"24",
"32",
"64"
],
answer:"32"
},

{
question:"A fair coin is tossed twice. What is the probability of getting two heads?",
options:[
"1/2",
"1/3",
"1/4",
"3/4"
],
answer:"1/4"
},

{
question:"The graph of y = x + 3 has a gradient of ______.",
options:[
"0",
"1",
"2",
"3"
],
answer:"1"
},

{
question:"Which of the following is equal to 75%?",
options:[
"1/2",
"2/3",
"3/4",
"4/5"
],
answer:"3/4"
},

{
question:"Find the value of √169.",
options:[
"11",
"12",
"13",
"14"
],
answer:"13"
},

{
question:"The mean of 10, 15, 20, 25 and 30 is ______.",
options:[
"18",
"19",
"20",
"21"
],
answer:"20"
},

{
question:"A line parallel to y = -6x + 5 has a gradient of ______.",
options:[
"6",
"-6",
"1/6",
"-1/6"
],
answer:"-6"
},

{
question:"Express 7.2 × 10³ as an ordinary number.",
options:[
"720",
"7200",
"72000",
"72"
],
answer:"7200"
},

{
question:"If 4x = 52, then x = ______.",
options:[
"11",
"12",
"13",
"14"
],
answer:"13"
},

{
question:"The probability of an impossible event is ______.",
options:[
"0",
"1",
"1/2",
"-1"
],
answer:"0"
},

{
question:"Which of the following fractions is equivalent to 0.2?",
options:[
"1/4",
"1/5",
"2/3",
"3/5"
],
answer:"1/5"
},

{
question:"A train travels 540 km in 6 hours. What is its average speed?",
options:[
"80 km/h",
"85 km/h",
"90 km/h",
"95 km/h"
],
answer:"90 km/h"
},

{
question:"Which of the following equations has a negative gradient?",
options:[
"y = 3x + 2",
"y = x + 5",
"y = -2x + 7",
"y = 4x - 1"
],
answer:"y = -2x + 7"
},
{
question:"Which of the following fractions is equivalent to 3/5?",
options:[
"0.3",
"0.5",
"0.6",
"0.8"
],
answer:"0.6"
},

{
question:"Evaluate: 18 + 24 ÷ 6 × 2.",
options:[
"22",
"24",
"26",
"28"
],
answer:"26"
},

{
question:"Simplify: 9a + 4a - 6a.",
options:[
"6a",
"7a",
"8a",
"9a"
],
answer:"7a"
},

{
question:"Solve: 5x + 8 = 33.",
options:[
"3",
"4",
"5",
"6"
],
answer:"5"
},

{
question:"Solve simultaneously: x + y = 13 and x - y = 3.",
options:[
"x = 7, y = 6",
"x = 8, y = 5",
"x = 9, y = 4",
"x = 6, y = 7"
],
answer:"x = 8, y = 5"
},

{
question:"Evaluate: 2⁶.",
options:[
"32",
"48",
"64",
"128"
],
answer:"64"
},

{
question:"Write 0.00072 in standard form.",
options:[
"7.2 × 10⁻³",
"7.2 × 10⁻⁴",
"72 × 10⁻⁵",
"0.72 × 10⁻³"
],
answer:"7.2 × 10⁻⁴"
},

{
question:"Evaluate log₁₀(1000).",
options:[
"2",
"3",
"4",
"10"
],
answer:"3"
},

{
question:"If y varies directly as x and y = 24 when x = 6, find y when x = 11.",
options:[
"40",
"42",
"44",
"46"
],
answer:"44"
},

{
question:"If a ★ b = a² - b, find 6 ★ 8.",
options:[
"26",
"28",
"30",
"32"
],
answer:"28"
},

{
question:"The point (5,-2) lies in ______.",
options:[
"Quadrant I",
"Quadrant II",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant IV"
},

{
question:"Find the gradient of the line joining (1,2) and (5,10).",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
question:"Find the perimeter of a square whose side is 18 cm.",
options:[
"54 cm",
"64 cm",
"72 cm",
"81 cm"
],
answer:"72 cm"
},

{
question:"Find the area of a rectangle measuring 16 cm by 9 cm.",
options:[
"124 cm²",
"134 cm²",
"144 cm²",
"154 cm²"
],
answer:"144 cm²"
},

{
question:"The equation y = 4x - 9 has a y-intercept of ______.",
options:[
"-9",
"4",
"9",
"0"
],
answer:"-9"
},

{
question:"Lines that have equal gradients are ______.",
options:[
"Perpendicular",
"Parallel",
"Horizontal",
"Vertical"
],
answer:"Parallel"
},

{
question:"Express 0.45 as a percentage.",
options:[
"4.5%",
"45%",
"450%",
"0.45%"
],
answer:"45%"
},

{
question:"Convert 3/8 to a decimal.",
options:[
"0.325",
"0.35",
"0.375",
"0.425"
],
answer:"0.375"
},

{
question:"Which of the following relations represents a function?",
options:[
"{(1,2),(1,3)}",
"{(2,4),(3,5)}",
"{(4,6),(4,8)}",
"{(5,7),(5,9)}"
],
answer:"{(2,4),(3,5)}"
},

{
question:"The origin on the Cartesian plane is represented by ______.",
options:[
"(1,0)",
"(0,1)",
"(0,0)",
"(1,1)"
],
answer:"(0,0)"
},
{
question:"A cylindrical water tank has a radius of 7 cm and a height of 10 cm. Using π = 22/7, what is its volume?",
options:[
"1,540 cm³",
"1,440 cm³",
"1,640 cm³",
"1,760 cm³"
],
answer:"1,540 cm³"
},

{
question:"A ladder leans against a wall forming a right triangle. If the ladder is 10 m long and its foot is 6 m from the wall, how high up the wall does it reach?",
options:[
"6 m",
"7 m",
"8 m",
"9 m"
],
answer:"8 m"
},

{
question:"The mean of 18, 22, 25, 30 and 35 is ______.",
options:[
"24",
"25",
"26",
"27"
],
answer:"26"
},

{
question:"A box contains 5 red, 4 blue and 3 green balls. What is the probability of selecting a blue ball?",
options:[
"1/4",
"1/3",
"1/2",
"2/3"
],
answer:"1/3"
},

{
question:"Evaluate: (3² × 3⁴) ÷ 3³.",
options:[
"9",
"27",
"81",
"243"
],
answer:"27"
},

{
question:"If y = 4x - 7, find the value of y when x = 6.",
options:[
"15",
"16",
"17",
"18"
],
answer:"17"
},

{
question:"Which of the following ordered pairs lies in Quadrant III?",
options:[
"(4,-3)",
"(-4,-3)",
"(-4,3)",
"(4,3)"
],
answer:"(-4,-3)"
},

{
question:"Express 62.5% as a fraction in its simplest form.",
options:[
"3/5",
"5/8",
"2/3",
"7/8"
],
answer:"5/8"
},

{
question:"A car uses 24 litres of fuel to travel 360 km. Assuming constant fuel consumption, how many litres are needed to travel 150 km?",
options:[
"8 litres",
"9 litres",
"10 litres",
"12 litres"
],
answer:"10 litres"
},

{
question:"If a ★ b = 2a + b², find 3 ★ 4.",
options:[
"18",
"20",
"22",
"24"
],
answer:"22"
},

{
question:"Evaluate log₁₀(0.01).",
options:[
"-1",
"-2",
"2",
"1"
],
answer:"-2"
},

{
question:"Find the gradient of the line joining the points (2,4) and (8,16).",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
question:"Which of the following is the equation of a line with gradient 3 and y-intercept -2?",
options:[
"y = 3x + 2",
"y = -3x - 2",
"y = 3x - 2",
"y = -2x + 3"
],
answer:"y = 3x - 2"
},

{
question:"A line perpendicular to y = -4x + 1 has a gradient of ______.",
options:[
"4",
"-1/4",
"1/4",
"-4"
],
answer:"1/4"
},

{
question:"Find the value of sin 30°.",
options:[
"√3/2",
"1/2",
"√2/2",
"1"
],
answer:"1/2"
},

{
question:"The mode of 5, 8, 8, 9, 10, 10, 10, 12 is ______.",
options:[
"8",
"9",
"10",
"12"
],
answer:"10"
},

{
question:"Write 4,900,000 in standard form.",
options:[
"4.9 × 10⁵",
"49 × 10⁵",
"4.9 × 10⁶",
"0.49 × 10⁷"
],
answer:"4.9 × 10⁶"
},

{
question:"If two events are impossible, the probability of either event occurring is ______.",
options:[
"0",
"1",
"1/2",
"-1"
],
answer:"0"
},

{
question:"Solve: 7x - 11 = 38.",
options:[
"5",
"6",
"7",
"8"
],
answer:"7"
},

{
question:"A circle has a diameter of 28 cm. Using π = 22/7, what is its circumference?",
options:[
"44 cm",
"66 cm",
"88 cm",
"176 cm"
],
answer:"88 cm"
},
{
question:"A school's student population increased from 800 to 920 in one year. What was the percentage increase?",
options:[
"12%",
"15%",
"18%",
"20%"
],
answer:"15%"
},

{
question:"Solve the equation: 9x + 8 = 71.",
options:[
"6",
"7",
"8",
"9"
],
answer:"7"
},

{
question:"Simplify: 12a - (5a - 3a).",
options:[
"4a",
"6a",
"10a",
"14a"
],
answer:"10a"
},

{
question:"If y varies directly as x and y = 45 when x = 9, find y when x = 16.",
options:[
"70",
"75",
"80",
"85"
],
answer:"80"
},

{
question:"Evaluate: (2⁴ × 2³) ÷ 2².",
options:[
"16",
"32",
"64",
"128"
],
answer:"32"
},

{
question:"The value of log₁₀(0.1) is ______.",
options:[
"-2",
"-1",
"0",
"1"
],
answer:"-1"
},

{
question:"Write 0.00000091 in standard form.",
options:[
"9.1 × 10⁻⁶",
"9.1 × 10⁻⁷",
"91 × 10⁻⁸",
"0.91 × 10⁻⁶"
],
answer:"9.1 × 10⁻⁷"
},

{
question:"If a ★ b = a + 2b, find 15 ★ 8.",
options:[
"29",
"30",
"31",
"32"
],
answer:"31"
},

{
question:"Which ordered pair lies on the y-axis?",
options:[
"(0,5)",
"(5,0)",
"(3,3)",
"(-2,4)"
],
answer:"(0,5)"
},

{
question:"Find the gradient of the line joining (-2,1) and (4,13).",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
question:"A rectangle has a length of 18 cm and a width of 11 cm. What is its area?",
options:[
"188 cm²",
"196 cm²",
"198 cm²",
"208 cm²"
],
answer:"198 cm²"
},

{
question:"A cylinder has a radius of 5 cm and a height of 8 cm. Using π = 3.14, what is its volume?",
options:[
"628 cm³",
"314 cm³",
"512 cm³",
"400 cm³"
],
answer:"628 cm³"
},

{
question:"Find cos 60°.",
options:[
"1",
"√3/2",
"1/2",
"√2/2"
],
answer:"1/2"
},

{
question:"The median of 9, 12, 15, 18, 24 is ______.",
options:[
"12",
"15",
"18",
"24"
],
answer:"15"
},

{
question:"The range of 14, 19, 22, 31 and 37 is ______.",
options:[
"18",
"21",
"23",
"25"
],
answer:"23"
},

{
question:"A bag contains 6 yellow, 5 white and 4 black balls. What is the probability of selecting a white ball?",
options:[
"1/5",
"1/3",
"5/15",
"2/5"
],
answer:"1/3"
},

{
question:"A fair die is rolled once. What is the probability of obtaining a prime number?",
options:[
"1/3",
"1/2",
"2/3",
"5/6"
],
answer:"1/2"
},

{
question:"The relation {(1,4), (2,5), (3,6), (4,7)} is a ______.",
options:[
"Function",
"Not a function",
"Binary operation",
"Equation"
],
answer:"Function"
},

{
question:"Solve simultaneously: x + y = 17 and x - y = 5.",
options:[
"x = 10, y = 7",
"x = 11, y = 6",
"x = 12, y = 5",
"x = 9, y = 8"
],
answer:"x = 11, y = 6"
},

{
question:"The equation y = -3x + 8 cuts the y-axis at ______.",
options:[
"-3",
"3",
"8",
"-8"
],
answer:"8"
},
{
question:"A laptop is sold for $960 after a 20% discount. What was the original price?",
options:[
"$1,000",
"$1,100",
"$1,200",
"$1,250"
],
answer:"$1,200"
},

{
question:"Evaluate: 84 ÷ (7 × 2).",
options:[
"4",
"5",
"6",
"7"
],
answer:"6"
},

{
question:"Simplify: 15m + 9 - 7m + 5.",
options:[
"8m + 14",
"22m + 14",
"8m + 4",
"22m + 4"
],
answer:"8m + 14"
},

{
question:"Solve the equation: 8x - 13 = 43.",
options:[
"6",
"7",
"8",
"9"
],
answer:"7"
},

{
question:"If y varies directly as x and y = 54 when x = 9, find y when x = 14.",
options:[
"72",
"78",
"84",
"90"
],
answer:"84"
},

{
question:"Evaluate: (5²)³.",
options:[
"125",
"625",
"15,625",
"3,125"
],
answer:"15,625"
},

{
question:"Evaluate log₁₀(1).",
options:[
"0",
"1",
"10",
"-1"
],
answer:"0"
},

{
question:"Write 0.00048 in standard form.",
options:[
"4.8 × 10⁻³",
"4.8 × 10⁻⁴",
"4.8 × 10⁻⁵",
"48 × 10⁻⁶"
],
answer:"4.8 × 10⁻⁴"
},

{
question:"If a ★ b = 3a - b, find 9 ★ 7.",
options:[
"18",
"19",
"20",
"21"
],
answer:"20"
},

{
question:"The point (-6, 4) is located in ______.",
options:[
"Quadrant I",
"Quadrant II",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant II"
},

{
question:"Find the gradient of the line joining (0,3) and (5,18).",
options:[
"2",
"3",
"4",
"5"
],
answer:"3"
},

{
question:"A circle has a radius of 14 cm. Using π = 22/7, what is its area?",
options:[
"528 cm²",
"616 cm²",
"704 cm²",
"792 cm²"
],
answer:"616 cm²"
},

{
question:"A cube has an edge length of 6 cm. What is its volume?",
options:[
"108 cm³",
"180 cm³",
"216 cm³",
"324 cm³"
],
answer:"216 cm³"
},

{
question:"Find tan 45°.",
options:[
"0",
"1",
"√2",
"√3"
],
answer:"1"
},

{
question:"The mean of 11, 15, 19, 23 and 27 is ______.",
options:[
"17",
"18",
"19",
"20"
],
answer:"19"
},

{
question:"The probability of getting an even number when a fair die is rolled is ______.",
options:[
"1/3",
"1/2",
"2/3",
"5/6"
],
answer:"1/2"
},

{
question:"Which of the following relations is NOT a function?",
options:[
"{(1,2),(2,3),(3,4)}",
"{(2,5),(2,7),(4,8)}",
"{(4,6),(5,7),(6,8)}",
"{(7,9),(8,10),(9,11)}"
],
answer:"{(2,5),(2,7),(4,8)}"
},

{
question:"Solve simultaneously: x + y = 21 and x - y = 9.",
options:[
"x = 15, y = 6",
"x = 14, y = 7",
"x = 13, y = 8",
"x = 12, y = 9"
],
answer:"x = 15, y = 6"
},

{
question:"The equation y = 5x + 4 intersects the y-axis at ______.",
options:[
"4",
"5",
"-4",
"0"
],
answer:"4"
},

{
question:"Express 0.875 as a percentage.",
options:[
"8.75%",
"87.5%",
"875%",
"0.875%"
],
answer:"87.5%"
},
{
question:"A company increased the salary of its employees by 12%. If an employee earned $2,500 before the increase, what is the new salary?",
options:[
"$2,700",
"$2,750",
"$2,800",
"$2,850"
],
answer:"$2,800"
},

{
question:"Evaluate: 48 ÷ (4 + 2).",
options:[
"6",
"7",
"8",
"9"
],
answer:"8"
},

{
question:"Simplify: 9x + 5 - 4x + 7.",
options:[
"5x + 2",
"13x + 12",
"5x + 12",
"13x + 2"
],
answer:"5x + 12"
},

{
question:"Solve the equation: 5x + 17 = 52.",
options:[
"5",
"6",
"7",
"8"
],
answer:"7"
},

{
question:"If y varies directly as x and y = 56 when x = 8, find y when x = 15.",
options:[
"98",
"100",
"105",
"112"
],
answer:"105"
},

{
question:"Evaluate: (2⁵ × 2²) ÷ 2⁴.",
options:[
"4",
"8",
"16",
"32"
],
answer:"8"
},

{
question:"Evaluate log₁₀(100000).",
options:[
"3",
"4",
"5",
"6"
],
answer:"5"
},

{
question:"Write 7,300,000 in standard form.",
options:[
"7.3 × 10⁵",
"7.3 × 10⁶",
"73 × 10⁵",
"0.73 × 10⁷"
],
answer:"7.3 × 10⁶"
},

{
question:"If a ★ b = a² + 2b, find 4 ★ 6.",
options:[
"24",
"26",
"28",
"30"
],
answer:"28"
},

{
question:"The point (0,-9) lies on the ______.",
options:[
"x-axis",
"y-axis",
"Origin",
"Quadrant IV"
],
answer:"y-axis"
},

{
question:"Find the gradient of the line joining (3,1) and (9,19).",
options:[
"2",
"3",
"4",
"5"
],
answer:"3"
},

{
question:"A rectangular field measures 24 m by 15 m. What is its perimeter?",
options:[
"68 m",
"72 m",
"78 m",
"84 m"
],
answer:"78 m"
},

{
question:"A sphere has a radius of 3 cm. Using V = 4/3πr³ and π = 22/7, what is its volume?",
options:[
"36π cm³",
"72π cm³",
"108π cm³",
"144π cm³"
],
answer:"36π cm³"
},

{
question:"Find cos 45°.",
options:[
"1/2",
"√2/2",
"√3/2",
"1"
],
answer:"√2/2"
},

{
question:"The median of 6, 9, 12, 15, 18, 21 and 24 is ______.",
options:[
"12",
"15",
"18",
"21"
],
answer:"15"
},

{
question:"The probability of drawing a queen from a standard deck of 52 playing cards is ______.",
options:[
"1/13",
"1/26",
"1/52",
"4/13"
],
answer:"1/13"
},

{
question:"Which of the following relations is a function?",
options:[
"{(1,2),(1,5),(3,4)}",
"{(2,4),(3,5),(4,6)}",
"{(5,7),(5,8),(6,9)}",
"{(7,1),(7,2),(8,3)}"
],
answer:"{(2,4),(3,5),(4,6)}"
},

{
question:"Solve simultaneously: x + y = 24 and x - y = 8.",
options:[
"x = 15, y = 9",
"x = 16, y = 8",
"x = 14, y = 10",
"x = 13, y = 11"
],
answer:"x = 16, y = 8"
},

{
question:"A line perpendicular to y = 2x - 5 has a gradient of ______.",
options:[
"-2",
"2",
"-1/2",
"1/2"
],
answer:"-1/2"
},

{
question:"Express 0.0625 as a fraction in its simplest form.",
options:[
"1/8",
"1/16",
"3/32",
"5/64"
],
answer:"1/16"
},
{
question:"A recipe requires flour and sugar in the ratio 7 : 3. If 35 cups of flour are used, how many cups of sugar are needed?",
options:[
"12",
"15",
"18",
"20"
],
answer:"15"
},

{
question:"Evaluate: (18 - 6) × 4 ÷ 3.",
options:[
"12",
"14",
"16",
"18"
],
answer:"16"
},

{
question:"Simplify: 8y + 5 - 3y - 9.",
options:[
"5y - 4",
"11y - 4",
"5y + 4",
"11y + 4"
],
answer:"5y - 4"
},

{
question:"Solve the equation: 6x + 14 = 56.",
options:[
"5",
"6",
"7",
"8"
],
answer:"7"
},

{
question:"If y varies directly as x and y = 81 when x = 9, find y when x = 5.",
options:[
"40",
"42",
"45",
"50"
],
answer:"45"
},

{
question:"Evaluate: 7² - 5².",
options:[
"20",
"22",
"24",
"26"
],
answer:"24"
},

{
question:"The value of log₁₀(10) is ______.",
options:[
"0",
"1",
"2",
"10"
],
answer:"1"
},

{
question:"Write 0.000034 in standard form.",
options:[
"3.4 × 10⁻⁴",
"3.4 × 10⁻⁵",
"34 × 10⁻⁶",
"0.34 × 10⁻⁴"
],
answer:"3.4 × 10⁻⁵"
},

{
question:"If a ★ b = a + b², find 5 ★ 4.",
options:[
"19",
"20",
"21",
"22"
],
answer:"21"
},

{
question:"Which of the following points lies in Quadrant I?",
options:[
"(-3,5)",
"(3,-5)",
"(3,5)",
"(-3,-5)"
],
answer:"(3,5)"
},

{
question:"Find the gradient of the line joining (4,6) and (10,18).",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
question:"A rectangular garden measures 32 m by 18 m. What is its area?",
options:[
"540 m²",
"560 m²",
"576 m²",
"600 m²"
],
answer:"576 m²"
},

{
question:"A cylinder has a diameter of 14 cm and a height of 12 cm. Using π = 22/7, what is its volume?",
options:[
"1,584 cm³",
"1,848 cm³",
"1,960 cm³",
"2,112 cm³"
],
answer:"1,848 cm³"
},

{
question:"Find sin 60°.",
options:[
"1/2",
"√2/2",
"√3/2",
"1"
],
answer:"√3/2"
},

{
question:"The mean of 14, 18, 22, 26 and 30 is ______.",
options:[
"20",
"21",
"22",
"23"
],
answer:"22"
},

{
question:"A bag contains 9 black balls and 6 white balls. What is the probability of selecting a white ball?",
options:[
"1/5",
"2/5",
"3/5",
"4/5"
],
answer:"2/5"
},

{
question:"Which of the following relations is NOT a function?",
options:[
"{(1,3),(2,5),(3,7)}",
"{(2,4),(2,6),(5,8)}",
"{(4,8),(5,9),(6,10)}",
"{(7,2),(8,3),(9,4)}"
],
answer:"{(2,4),(2,6),(5,8)}"
},

{
question:"Solve simultaneously: x + y = 19 and x - y = 7.",
options:[
"x = 12, y = 7",
"x = 13, y = 6",
"x = 11, y = 8",
"x = 10, y = 9"
],
answer:"x = 13, y = 6"
},

{
question:"A line parallel to y = -8x + 3 has a gradient of ______.",
options:[
"8",
"-8",
"1/8",
"-1/8"
],
answer:"-8"
},

{
question:"Express 0.375 as a fraction in its simplest form.",
options:[
"1/4",
"3/8",
"5/8",
"7/8"
],
answer:"3/8"
},
{
question:"A store offers a 15% discount on a jacket priced at $240. What is the sale price?",
options:[
"$196",
"$200",
"$204",
"$210"
],
answer:"$204"
},

{
question:"Evaluate: (45 ÷ 9) × (16 ÷ 4).",
options:[
"18",
"20",
"22",
"24"
],
answer:"20"
},

{
question:"Simplify: 18p - 7p + 4 - 6.",
options:[
"11p - 2",
"25p - 2",
"11p + 2",
"25p + 2"
],
answer:"11p - 2"
},

{
question:"Solve the equation: 9x - 15 = 48.",
options:[
"6",
"7",
"8",
"9"
],
answer:"7"
},

{
question:"If y varies directly as x and y = 72 when x = 8, find y when x = 15.",
options:[
"125",
"130",
"135",
"140"
],
answer:"135"
},

{
question:"Evaluate: (10² + 2²).",
options:[
"102",
"104",
"108",
"110"
],
answer:"104"
},

{
question:"Evaluate log₁₀(100000000).",
options:[
"6",
"7",
"8",
"9"
],
answer:"8"
},

{
question:"Write 0.00000056 in standard form.",
options:[
"5.6 × 10⁻⁵",
"5.6 × 10⁻⁶",
"5.6 × 10⁻⁷",
"56 × 10⁻⁸"
],
answer:"5.6 × 10⁻⁷"
},

{
question:"If a ★ b = 4a - 2b, find 8 ★ 5.",
options:[
"20",
"22",
"24",
"26"
],
answer:"22"
},

{
question:"The point (-8,-5) is located in ______.",
options:[
"Quadrant I",
"Quadrant II",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant III"
},

{
question:"Find the gradient of the line joining (2,7) and (6,19).",
options:[
"2",
"3",
"4",
"5"
],
answer:"3"
},

{
question:"A circle has a radius of 21 cm. Using π = 22/7, what is its circumference?",
options:[
"126 cm",
"132 cm",
"138 cm",
"144 cm"
],
answer:"132 cm"
},

{
question:"A cuboid measures 8 cm by 6 cm by 5 cm. What is its volume?",
options:[
"220 cm³",
"230 cm³",
"240 cm³",
"250 cm³"
],
answer:"240 cm³"
},

{
question:"Find tan 30°.",
options:[
"1/√3",
"√3",
"1",
"√2/2"
],
answer:"1/√3"
},

{
question:"The median of 8, 10, 12, 14, 16, 18, 20 is ______.",
options:[
"12",
"13",
"14",
"15"
],
answer:"14"
},

{
question:"A bag contains 7 blue, 5 red and 8 green balls. What is the probability of selecting a red ball?",
options:[
"1/5",
"1/4",
"5/20",
"7/20"
],
answer:"1/4"
},

{
question:"Which of the following relations is a function?",
options:[
"{(1,2),(1,4),(2,6)}",
"{(2,3),(3,5),(4,7)}",
"{(5,8),(5,9),(6,10)}",
"{(7,1),(7,2),(8,3)}"
],
answer:"{(2,3),(3,5),(4,7)}"
},

{
question:"Solve simultaneously: x + y = 28 and x - y = 10.",
options:[
"x = 17, y = 11",
"x = 18, y = 10",
"x = 19, y = 9",
"x = 16, y = 12"
],
answer:"x = 19, y = 9"
},

{
question:"A line perpendicular to y = -5x + 8 has a gradient of ______.",
options:[
"5",
"-5",
"1/5",
"-1/5"
],
answer:"1/5"
},

{
question:"Express 0.125 as a fraction in its simplest form.",
options:[
"1/4",
"1/6",
"1/8",
"1/10"
],
answer:"1/8"
},
{
question:"A bicycle was purchased for $480 and later sold for $540. What was the percentage profit?",
options:[
"10%",
"12.5%",
"15%",
"20%"
],
answer:"12.5%"
},

{
question:"Evaluate: 96 ÷ 12 + 7 × 3.",
options:[
"27",
"28",
"29",
"30"
],
answer:"29"
},

{
question:"Simplify: 14x - (5x + 2).",
options:[
"9x - 2",
"9x + 2",
"19x - 2",
"19x + 2"
],
answer:"9x - 2"
},

{
question:"Solve the equation: 7x + 9 = 58.",
options:[
"5",
"6",
"7",
"8"
],
answer:"7"
},

{
question:"If y varies directly as x and y = 48 when x = 6, find y when x = 13.",
options:[
"96",
"100",
"104",
"108"
],
answer:"104"
},

{
question:"Evaluate: (6³ ÷ 6²).",
options:[
"6",
"12",
"18",
"36"
],
answer:"6"
},

{
question:"Evaluate log₁₀(0.001).",
options:[
"-1",
"-2",
"-3",
"3"
],
answer:"-3"
},

{
question:"Write 2,580,000 in standard form.",
options:[
"2.58 × 10⁵",
"2.58 × 10⁶",
"25.8 × 10⁵",
"0.258 × 10⁷"
],
answer:"2.58 × 10⁶"
},

{
question:"If a ★ b = 5a + b, find 6 ★ 8.",
options:[
"36",
"38",
"40",
"42"
],
answer:"38"
},

{
question:"The point (9,-6) lies in ______.",
options:[
"Quadrant I",
"Quadrant II",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant IV"
},

{
question:"Find the gradient of the line joining (1,5) and (7,17).",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
question:"A rectangle has a length of 28 cm and a width of 16 cm. What is its area?",
options:[
"428 cm²",
"438 cm²",
"448 cm²",
"458 cm²"
],
answer:"448 cm²"
},

{
question:"A cube has an edge length of 9 cm. What is its volume?",
options:[
"648 cm³",
"729 cm³",
"810 cm³",
"972 cm³"
],
answer:"729 cm³"
},

{
question:"Find cos 0°.",
options:[
"0",
"1/2",
"√3/2",
"1"
],
answer:"1"
},

{
question:"The mean of 16, 18, 20, 22 and 24 is ______.",
options:[
"18",
"19",
"20",
"21"
],
answer:"20"
},

{
question:"A bag contains 4 yellow, 7 white and 9 black balls. What is the probability of selecting a yellow ball?",
options:[
"1/4",
"1/5",
"1/6",
"2/5"
],
answer:"1/5"
},

{
question:"Which of the following relations is NOT a function?",
options:[
"{(1,3),(2,5),(3,7)}",
"{(4,6),(4,8),(5,9)}",
"{(6,2),(7,4),(8,6)}",
"{(9,1),(10,2),(11,3)}"
],
answer:"{(4,6),(4,8),(5,9)}"
},

{
question:"Solve simultaneously: x + y = 30 and x - y = 6.",
options:[
"x = 17, y = 13",
"x = 18, y = 12",
"x = 19, y = 11",
"x = 16, y = 14"
],
answer:"x = 18, y = 12"
},

{
question:"A line parallel to y = 9x - 4 has a gradient of ______.",
options:[
"-9",
"1/9",
"9",
"-1/9"
],
answer:"9"
},

{
question:"Express 0.04 as a fraction in its simplest form.",
options:[
"1/20",
"1/25",
"1/40",
"1/50"
],
answer:"1/25"
},
{
question:"An online store offers a 25% discount on a smartwatch originally priced at $320. What is the sale price?",
options:[
"$220",
"$230",
"$240",
"$250"
],
answer:"$240"
},

{
question:"Evaluate: (72 ÷ 8) + (18 ÷ 3).",
options:[
"13",
"14",
"15",
"16"
],
answer:"15"
},

{
question:"Simplify: 17a - 9a + 6.",
options:[
"7a + 6",
"8a + 6",
"9a + 6",
"10a + 6"
],
answer:"8a + 6"
},

{
question:"Solve the equation: 4x + 11 = 39.",
options:[
"5",
"6",
"7",
"8"
],
answer:"7"
},

{
question:"If y varies directly as x and y = 30 when x = 5, find y when x = 18.",
options:[
"96",
"102",
"108",
"114"
],
answer:"108"
},

{
question:"Evaluate: (3⁴ × 3²) ÷ 3⁵.",
options:[
"3",
"9",
"27",
"81"
],
answer:"3"
},

{
question:"Evaluate log₁₀(10,000,000).",
options:[
"5",
"6",
"7",
"8"
],
answer:"7"
},

{
question:"Write 0.000000083 in standard form.",
options:[
"8.3 × 10⁻⁶",
"8.3 × 10⁻⁷",
"8.3 × 10⁻⁸",
"83 × 10⁻⁹"
],
answer:"8.3 × 10⁻⁸"
},

{
question:"If a ★ b = 2a² - b, find 5 ★ 8.",
options:[
"40",
"42",
"44",
"46"
],
answer:"42"
},

{
question:"Which of the following points lies in Quadrant II?",
options:[
"(6,-4)",
"(-6,4)",
"(-6,-4)",
"(6,4)"
],
answer:"(-6,4)"
},

{
question:"Find the gradient of the line joining (3,4) and (9,22).",
options:[
"2",
"3",
"4",
"5"
],
answer:"3"
},

{
question:"A circular garden has a radius of 14 m. Using π = 22/7, what is its area?",
options:[
"528 m²",
"616 m²",
"704 m²",
"792 m²"
],
answer:"616 m²"
},

{
question:"A cuboid measures 12 cm by 5 cm by 8 cm. What is its volume?",
options:[
"420 cm³",
"440 cm³",
"460 cm³",
"480 cm³"
],
answer:"480 cm³"
},

{
question:"Find tan 60°.",
options:[
"1",
"√2",
"√3",
"2"
],
answer:"√3"
},

{
question:"The mean of 13, 17, 21, 25 and 29 is ______.",
options:[
"19",
"20",
"21",
"22"
],
answer:"21"
},

{
question:"A bag contains 8 red, 6 blue and 6 green balls. What is the probability of selecting a blue ball?",
options:[
"1/5",
"3/10",
"2/5",
"1/2"
],
answer:"3/10"
},

{
question:"Which of the following relations is a function?",
options:[
"{(1,2),(1,5),(2,6)}",
"{(2,3),(3,4),(4,5)}",
"{(4,7),(4,8),(5,9)}",
"{(6,1),(6,2),(7,3)}"
],
answer:"{(2,3),(3,4),(4,5)}"
},

{
question:"Solve simultaneously: x + y = 34 and x - y = 12.",
options:[
"x = 22, y = 12",
"x = 23, y = 11",
"x = 24, y = 10",
"x = 21, y = 13"
],
answer:"x = 23, y = 11"
},

{
question:"A line perpendicular to y = 4x - 7 has a gradient of ______.",
options:[
"4",
"-4",
"1/4",
"-1/4"
],
answer:"-1/4"
},

{
question:"Express 0.875 as a percentage.",
options:[
"8.75%",
"87.5%",
"875%",
"0.875%"
],
answer:"87.5%"
},
{
question:"A retailer bought a tablet for $450 and sold it for $540. What was the percentage profit?",
options:[
"15%",
"18%",
"20%",
"25%"
],
answer:"20%"
},

{
question:"Evaluate: (84 ÷ 7) - (18 ÷ 3).",
options:[
"4",
"5",
"6",
"7"
],
answer:"6"
},

{
question:"Simplify: 20m - 9m + 7.",
options:[
"9m + 7",
"10m + 7",
"11m + 7",
"12m + 7"
],
answer:"11m + 7"
},

{
question:"Solve the equation: 11x - 8 = 69.",
options:[
"6",
"7",
"8",
"9"
],
answer:"7"
},

{
question:"If y varies directly as x and y = 64 when x = 8, find y when x = 20.",
options:[
"140",
"150",
"160",
"170"
],
answer:"160"
},

{
question:"Evaluate: (4³ × 4²) ÷ 4⁴.",
options:[
"4",
"8",
"16",
"64"
],
answer:"4"
},

{
question:"Evaluate log₁₀(1,000,000,000).",
options:[
"7",
"8",
"9",
"10"
],
answer:"9"
},

{
question:"Write 0.0000059 in standard form.",
options:[
"5.9 × 10⁻⁵",
"5.9 × 10⁻⁶",
"5.9 × 10⁻⁷",
"59 × 10⁻⁷"
],
answer:"5.9 × 10⁻⁶"
},

{
question:"If a ★ b = 3a + 2b, find 8 ★ 7.",
options:[
"36",
"38",
"40",
"42"
],
answer:"38"
},

{
question:"The point (-7,8) lies in ______.",
options:[
"Quadrant I",
"Quadrant II",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant II"
},

{
question:"Find the gradient of the line joining (2,3) and (8,21).",
options:[
"2",
"3",
"4",
"5"
],
answer:"3"
},

{
question:"A rectangle has a length of 35 cm and a width of 18 cm. What is its area?",
options:[
"610 cm²",
"620 cm²",
"630 cm²",
"640 cm²"
],
answer:"630 cm²"
},

{
question:"A cube has an edge length of 11 cm. What is its volume?",
options:[
"1,111 cm³",
"1,221 cm³",
"1,331 cm³",
"1,441 cm³"
],
answer:"1,331 cm³"
},

{
question:"Find sin 45°.",
options:[
"1/2",
"√2/2",
"√3/2",
"1"
],
answer:"√2/2"
},

{
question:"The mean of 24, 28, 32, 36 and 40 is ______.",
options:[
"30",
"31",
"32",
"33"
],
answer:"32"
},

{
question:"A bag contains 10 orange, 8 purple and 2 white balls. What is the probability of selecting a white ball?",
options:[
"1/5",
"1/10",
"2/5",
"1/20"
],
answer:"1/10"
},

{
question:"Which of the following relations is NOT a function?",
options:[
"{(2,5),(3,6),(4,7)}",
"{(5,8),(5,9),(6,10)}",
"{(7,1),(8,2),(9,3)}",
"{(10,4),(11,5),(12,6)}"
],
answer:"{(5,8),(5,9),(6,10)}"
},

{
question:"Solve simultaneously: x + y = 26 and x - y = 14.",
options:[
"x = 19, y = 7",
"x = 20, y = 6",
"x = 21, y = 5",
"x = 18, y = 8"
],
answer:"x = 20, y = 6"
},

{
question:"A line parallel to y = -6x + 4 has a gradient of ______.",
options:[
"6",
"-6",
"1/6",
"-1/6"
],
answer:"-6"
},

{
question:"Express 0.32 as a percentage.",
options:[
"3.2%",
"32%",
"320%",
"0.32%"
],
answer:"32%"
},
{
question:"A bookstore sells a novel for $68 after a 15% discount. What was the original price?",
options:[
"$75",
"$80",
"$85",
"$90"
],
answer:"$80"
},

{
question:"Evaluate: (96 ÷ 12) + (45 ÷ 9).",
options:[
"11",
"12",
"13",
"14"
],
answer:"13"
},

{
question:"Simplify: 16x - 9 + 5x + 4.",
options:[
"20x - 5",
"21x - 5",
"21x + 5",
"20x + 5"
],
answer:"21x - 5"
},

{
question:"Solve the equation: 12x + 5 = 89.",
options:[
"6",
"7",
"8",
"9"
],
answer:"7"
},

{
question:"If y varies directly as x and y = 35 when x = 5, find y when x = 18.",
options:[
"112",
"119",
"126",
"133"
],
answer:"126"
},

{
question:"Evaluate: (9² ÷ 9).",
options:[
"9",
"18",
"27",
"81"
],
answer:"9"
},

{
question:"Evaluate log₁₀(0.0001).",
options:[
"-2",
"-3",
"-4",
"4"
],
answer:"-4"
},

{
question:"Write 8,450,000 in standard form.",
options:[
"8.45 × 10⁵",
"8.45 × 10⁶",
"84.5 × 10⁵",
"0.845 × 10⁷"
],
answer:"8.45 × 10⁶"
},

{
question:"If a ★ b = 2a + 3b, find 9 ★ 4.",
options:[
"36",
"38",
"39",
"40"
],
answer:"39"
},

{
question:"The point (7,-9) lies in ______.",
options:[
"Quadrant I",
"Quadrant II",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant IV"
},

{
question:"Find the gradient of the line joining (5,8) and (11,26).",
options:[
"2",
"3",
"4",
"5"
],
answer:"3"
},

{
question:"A rectangular playground measures 42 m by 16 m. What is its perimeter?",
options:[
"108 m",
"112 m",
"116 m",
"120 m"
],
answer:"116 m"
},

{
question:"A cylinder has a radius of 4 cm and a height of 15 cm. Using π = 3.14, what is its volume?",
options:[
"703.2 cm³",
"733.6 cm³",
"753.6 cm³",
"783.2 cm³"
],
answer:"753.6 cm³"
},

{
question:"Find cos 30°.",
options:[
"1/2",
"√2/2",
"√3/2",
"1"
],
answer:"√3/2"
},

{
question:"The mode of 9, 11, 11, 12, 13, 13, 13, 15 is ______.",
options:[
"11",
"12",
"13",
"15"
],
answer:"13"
},

{
question:"A box contains 12 red balls, 5 blue balls and 3 yellow balls. What is the probability of selecting a blue ball?",
options:[
"1/5",
"1/4",
"5/18",
"5/20"
],
answer:"1/4"
},

{
question:"Which of the following relations is a function?",
options:[
"{(1,4),(1,6),(2,8)}",
"{(2,5),(3,7),(4,9)}",
"{(5,2),(5,4),(6,8)}",
"{(7,3),(7,5),(8,9)}"
],
answer:"{(2,5),(3,7),(4,9)}"
},

{
question:"Solve simultaneously: x + y = 36 and x - y = 8.",
options:[
"x = 21, y = 15",
"x = 22, y = 14",
"x = 20, y = 16",
"x = 19, y = 17"
],
answer:"x = 22, y = 14"
},

{
question:"A line perpendicular to y = -2x + 9 has a gradient of ______.",
options:[
"2",
"-2",
"1/2",
"-1/2"
],
answer:"1/2"
},

{
question:"Express 0.45 as a fraction in its simplest form.",
options:[
"3/5",
"7/10",
"9/20",
"1/2"
],
answer:"9/20"
},
{
question:"A customer paid $315 for a television after receiving a 10% discount. What was the original price?",
options:[
"$330",
"$340",
"$350",
"$360"
],
answer:"$350"
},

{
question:"Evaluate: (64 ÷ 8) × (21 ÷ 7).",
options:[
"18",
"21",
"24",
"27"
],
answer:"24"
},

{
question:"Simplify: 25a - 13a + 8.",
options:[
"10a + 8",
"11a + 8",
"12a + 8",
"13a + 8"
],
answer:"12a + 8"
},

{
question:"Solve the equation: 13x - 6 = 85.",
options:[
"6",
"7",
"8",
"9"
],
answer:"7"
},

{
question:"If y varies directly as x and y = 96 when x = 12, find y when x = 9.",
options:[
"64",
"68",
"72",
"76"
],
answer:"72"
},

{
question:"Evaluate: (8² × 8) ÷ 8².",
options:[
"8",
"16",
"32",
"64"
],
answer:"8"
},

{
question:"Evaluate log₁₀(1,000).",
options:[
"2",
"3",
"4",
"5"
],
answer:"3"
},

{
question:"Write 0.0000092 in standard form.",
options:[
"9.2 × 10⁻⁵",
"9.2 × 10⁻⁶",
"9.2 × 10⁻⁷",
"92 × 10⁻⁷"
],
answer:"9.2 × 10⁻⁶"
},

{
question:"If a ★ b = a² + b, find 7 ★ 5.",
options:[
"52",
"53",
"54",
"55"
],
answer:"54"
},

{
question:"The point (-5,-8) lies in ______.",
options:[
"Quadrant I",
"Quadrant II",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant III"
},

{
question:"Find the gradient of the line joining (4,5) and (10,23).",
options:[
"2",
"3",
"4",
"5"
],
answer:"3"
},

{
question:"A square has a side length of 15 cm. What is its perimeter?",
options:[
"45 cm",
"50 cm",
"55 cm",
"60 cm"
],
answer:"60 cm"
},

{
question:"A cone has a radius of 6 cm and a height of 10 cm. Using π = 3.14, what is its volume?",
options:[
"314 cm³",
"376.8 cm³",
"408.2 cm³",
"452.4 cm³"
],
answer:"376.8 cm³"
},

{
question:"Find sin 90°.",
options:[
"0",
"1/2",
"√2/2",
"1"
],
answer:"1"
},

{
question:"The mean of 18, 21, 24, 27 and 30 is ______.",
options:[
"22",
"23",
"24",
"25"
],
answer:"24"
},

{
question:"A bag contains 9 black balls, 7 white balls and 4 green balls. What is the probability of selecting a green ball?",
options:[
"1/4",
"1/5",
"2/5",
"4/15"
],
answer:"1/5"
},

{
question:"Which of the following relations is NOT a function?",
options:[
"{(2,4),(3,5),(4,6)}",
"{(5,7),(5,9),(6,8)}",
"{(7,1),(8,2),(9,3)}",
"{(10,4),(11,5),(12,6)}"
],
answer:"{(5,7),(5,9),(6,8)}"
},

{
question:"Solve simultaneously: x + y = 40 and x - y = 10.",
options:[
"x = 24, y = 16",
"x = 25, y = 15",
"x = 26, y = 14",
"x = 23, y = 17"
],
answer:"x = 25, y = 15"
},

{
question:"A line parallel to y = 7x - 2 has a gradient of ______.",
options:[
"-7",
"1/7",
"7",
"-1/7"
],
answer:"7"
},

{
question:"Express 0.625 as a fraction in its simplest form.",
options:[
"3/5",
"5/8",
"7/10",
"2/3"
],
answer:"5/8"
},
{
question:"A smartphone was sold for $540 after a 10% discount. What was the original price?",
options:[
"$580",
"$590",
"$600",
"$620"
],
answer:"$600"
},

{
question:"Evaluate: (90 ÷ 15) + (36 ÷ 9).",
options:[
"8",
"9",
"10",
"11"
],
answer:"10"
},

{
question:"Simplify: 18y - 7y + 9 - 4.",
options:[
"10y + 5",
"11y + 5",
"12y + 5",
"13y + 5"
],
answer:"11y + 5"
},

{
question:"Solve the equation: 14x + 2 = 100.",
options:[
"5",
"6",
"7",
"8"
],
answer:"7"
},

{
question:"If y varies directly as x and y = 84 when x = 12, find y when x = 15.",
options:[
"98",
"100",
"105",
"108"
],
answer:"105"
},

{
question:"Evaluate: (5⁴ ÷ 5²).",
options:[
"5",
"10",
"25",
"125"
],
answer:"25"
},

{
question:"Evaluate log₁₀(100,000,000,000).",
options:[
"9",
"10",
"11",
"12"
],
answer:"11"
},

{
question:"Write 0.00000047 in standard form.",
options:[
"4.7 × 10⁻⁶",
"4.7 × 10⁻⁷",
"4.7 × 10⁻⁸",
"47 × 10⁻⁹"
],
answer:"4.7 × 10⁻⁷"
},

{
question:"If a ★ b = 4a + b, find 8 ★ 9.",
options:[
"39",
"40",
"41",
"42"
],
answer:"41"
},

{
question:"The point (-9,6) lies in ______.",
options:[
"Quadrant I",
"Quadrant II",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant II"
},

{
question:"Find the gradient of the line joining (2,5) and (8,29).",
options:[
"2",
"3",
"4",
"5"
],
answer:"4"
},

{
question:"A rectangular floor measures 18 m by 14 m. What is its area?",
options:[
"242 m²",
"252 m²",
"262 m²",
"272 m²"
],
answer:"252 m²"
},

{
question:"A cylinder has a radius of 5 cm and a height of 12 cm. Using π = 3.14, what is its volume?",
options:[
"842.4 cm³",
"912.0 cm³",
"942.0 cm³",
"972.4 cm³"
],
answer:"942.0 cm³"
},

{
question:"Find tan 0°.",
options:[
"0",
"1",
"√2",
"Undefined"
],
answer:"0"
},

{
question:"The mean of 15, 20, 25, 30 and 35 is ______.",
options:[
"23",
"24",
"25",
"26"
],
answer:"25"
},

{
question:"A bag contains 11 blue balls, 5 red balls and 4 yellow balls. What is the probability of selecting a red ball?",
options:[
"1/5",
"1/4",
"5/18",
"5/20"
],
answer:"1/4"
},

{
question:"Which of the following relations is a function?",
options:[
"{(1,2),(1,3),(2,4)}",
"{(2,5),(3,6),(4,7)}",
"{(5,8),(5,9),(6,10)}",
"{(7,1),(7,2),(8,3)}"
],
answer:"{(2,5),(3,6),(4,7)}"
},

{
question:"Solve simultaneously: x + y = 42 and x - y = 14.",
options:[
"x = 27, y = 15",
"x = 28, y = 14",
"x = 29, y = 13",
"x = 26, y = 16"
],
answer:"x = 28, y = 14"
},

{
question:"A line perpendicular to y = 3x + 1 has a gradient of ______.",
options:[
"3",
"-3",
"1/3",
"-1/3"
],
answer:"-1/3"
},

{
question:"Express 0.2 as a percentage.",
options:[
"2%",
"20%",
"200%",
"0.2%"
],
answer:"20%"
},
{
question:"A bicycle was sold for $690 after a 15% discount. What was the original price?",
options:[
"$780",
"$800",
"$810",
"$820"
],
answer:"$810"
},

{
question:"Evaluate: (54 ÷ 9) × (28 ÷ 7).",
options:[
"20",
"22",
"24",
"26"
],
answer:"24"
},

{
question:"Simplify: 22x - 9x - 5.",
options:[
"11x - 5",
"12x - 5",
"13x - 5",
"14x - 5"
],
answer:"13x - 5"
},

{
question:"Solve the equation: 15x - 10 = 95.",
options:[
"5",
"6",
"7",
"8"
],
answer:"7"
},

{
question:"If y varies directly as x and y = 66 when x = 6, find y when x = 9.",
options:[
"88",
"99",
"110",
"121"
],
answer:"99"
},

{
question:"Evaluate: (10³ ÷ 10).",
options:[
"10",
"100",
"1,000",
"10,000"
],
answer:"100"
},

{
question:"Evaluate log₁₀(1,000,000).",
options:[
"4",
"5",
"6",
"7"
],
answer:"6"
},

{
question:"Write 0.000072 in standard form.",
options:[
"7.2 × 10⁻⁴",
"7.2 × 10⁻⁵",
"7.2 × 10⁻⁶",
"72 × 10⁻⁶"
],
answer:"7.2 × 10⁻⁵"
},

{
question:"If a ★ b = 3a² - b, find 4 ★ 6.",
options:[
"40",
"42",
"44",
"46"
],
answer:"42"
},

{
question:"The point (8,9) lies in ______.",
options:[
"Quadrant I",
"Quadrant II",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant I"
},

{
question:"Find the gradient of the line joining (1,4) and (7,28).",
options:[
"2",
"3",
"4",
"5"
],
answer:"4"
},

{
question:"A rectangular room measures 15 m by 12 m. What is its perimeter?",
options:[
"48 m",
"50 m",
"52 m",
"54 m"
],
answer:"54 m"
},

{
question:"A cube has an edge length of 12 cm. What is its volume?",
options:[
"1,584 cm³",
"1,628 cm³",
"1,728 cm³",
"1,828 cm³"
],
answer:"1,728 cm³"
},

{
question:"Find cos 90°.",
options:[
"0",
"1/2",
"√2/2",
"1"
],
answer:"0"
},

{
question:"The mean of 17, 22, 27, 32 and 37 is ______.",
options:[
"25",
"26",
"27",
"28"
],
answer:"27"
},

{
question:"A box contains 6 green balls, 9 blue balls and 5 red balls. What is the probability of selecting a green ball?",
options:[
"1/5",
"3/10",
"2/5",
"1/3"
],
answer:"3/10"
},

{
question:"Which of the following relations is NOT a function?",
options:[
"{(2,4),(3,5),(4,6)}",
"{(5,7),(5,8),(6,9)}",
"{(7,1),(8,2),(9,3)}",
"{(10,4),(11,5),(12,6)}"
],
answer:"{(5,7),(5,8),(6,9)}"
},

{
question:"Solve simultaneously: x + y = 38 and x - y = 16.",
options:[
"x = 26, y = 12",
"x = 27, y = 11",
"x = 28, y = 10",
"x = 25, y = 13"
],
answer:"x = 27, y = 11"
},

{
question:"A line parallel to y = -9x + 5 has a gradient of ______.",
options:[
"9",
"-9",
"1/9",
"-1/9"
],
answer:"-9"
},

{
question:"Express 0.04 as a percentage.",
options:[
"0.4%",
"4%",
"40%",
"400%"
],
answer:"4%"
},
{
question:"A laptop was purchased for $960 and sold for $1,080. What was the percentage profit?",
options:[
"10%",
"12.5%",
"15%",
"20%"
],
answer:"12.5%"
},

{
question:"Evaluate: (81 ÷ 9) + (56 ÷ 8).",
options:[
"14",
"15",
"16",
"17"
],
answer:"16"
},

{
question:"Simplify: 24m - 15m + 8.",
options:[
"7m + 8",
"8m + 8",
"9m + 8",
"10m + 8"
],
answer:"9m + 8"
},

{
question:"Solve the equation: 16x - 11 = 101.",
options:[
"6",
"7",
"8",
"9"
],
answer:"7"
},

{
question:"If y varies directly as x and y = 54 when x = 9, find y when x = 20.",
options:[
"110",
"115",
"120",
"125"
],
answer:"120"
},

{
question:"Evaluate: (7³ ÷ 7²).",
options:[
"7",
"14",
"21",
"49"
],
answer:"7"
},

{
question:"Evaluate log₁₀(10,000).",
options:[
"2",
"3",
"4",
"5"
],
answer:"4"
},

{
question:"Write 0.00000091 in standard form.",
options:[
"9.1 × 10⁻⁵",
"9.1 × 10⁻⁶",
"9.1 × 10⁻⁷",
"9.1 × 10⁻⁸"
],
answer:"9.1 × 10⁻⁷"
},

{
question:"If a ★ b = 2a + 4b, find 9 ★ 6.",
options:[
"40",
"42",
"44",
"46"
],
answer:"42"
},

{
question:"The point (-4,-7) lies in ______.",
options:[
"Quadrant I",
"Quadrant II",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant III"
},

{
question:"Find the gradient of the line joining (2,6) and (8,30).",
options:[
"2",
"3",
"4",
"5"
],
answer:"4"
},

{
question:"A rectangular garden measures 25 m by 18 m. What is its area?",
options:[
"425 m²",
"440 m²",
"450 m²",
"475 m²"
],
answer:"450 m²"
},

{
question:"A cylinder has a radius of 7 cm and a height of 15 cm. Using π = 22/7, what is its volume?",
options:[
"2,110 cm³",
"2,210 cm³",
"2,310 cm³",
"2,410 cm³"
],
answer:"2,310 cm³"
},

{
question:"Find tan 90°.",
options:[
"0",
"1",
"Undefined",
"√3"
],
answer:"Undefined"
},

{
question:"The mean of 19, 23, 27, 31 and 35 is ______.",
options:[
"25",
"26",
"27",
"28"
],
answer:"27"
},

{
question:"A bag contains 8 white balls, 7 black balls and 5 blue balls. What is the probability of selecting a black ball?",
options:[
"1/4",
"7/20",
"2/5",
"3/10"
],
answer:"7/20"
},

{
question:"Which of the following relations is a function?",
options:[
"{(1,2),(1,4),(2,6)}",
"{(2,3),(3,5),(4,7)}",
"{(5,6),(5,8),(6,10)}",
"{(7,9),(7,11),(8,13)}"
],
answer:"{(2,3),(3,5),(4,7)}"
},

{
question:"Solve simultaneously: x + y = 44 and x - y = 12.",
options:[
"x = 27, y = 17",
"x = 28, y = 16",
"x = 29, y = 15",
"x = 30, y = 14"
],
answer:"x = 28, y = 16"
},

{
question:"A line perpendicular to y = -4x + 6 has a gradient of ______.",
options:[
"4",
"-4",
"1/4",
"-1/4"
],
answer:"1/4"
},

{
question:"Express 0.875 as a fraction in its simplest form.",
options:[
"5/8",
"7/8",
"3/4",
"9/10"
],
answer:"7/8"
},
{
question:"The average of five numbers is 24. If four of the numbers are 18, 22, 25 and 30, the fifth number is ______.",
options:[
"24",
"25",
"26",
"25"
],
answer:"25"
},

{
question:"The median of 5, 8, 10, 12, 15, 18 and 20 is ______.",
options:[
"10",
"12",
"15",
"18"
],
answer:"12"
},

{
question:"The mode of 6, 7, 8, 8, 9, 10, 8 is ______.",
options:[
"6",
"7",
"8",
"9"
],
answer:"8"
},

{
question:"The probability of getting a head when a fair coin is tossed once is ______.",
options:[
"1/4",
"1/3",
"1/2",
"1"
],
answer:"1/2"
},

{
question:"A bag contains 5 red, 4 blue and 3 green balls. What is the probability of selecting a green ball?",
options:[
"1/4",
"1/3",
"3/12",
"5/12"
],
answer:"1/4"
},

{
question:"Find the area of a triangle with base 14 cm and height 9 cm.",
options:[
"54 cm²",
"63 cm²",
"72 cm²",
"126 cm²"
],
answer:"63 cm²"
},

{
question:"The circumference of a circle of radius 7 cm is ______ (Use π = 22/7).",
options:[
"22 cm",
"44 cm",
"49 cm",
"154 cm"
],
answer:"44 cm"
},

{
question:"Find the hypotenuse of a right-angled triangle with sides 5 cm and 12 cm.",
options:[
"11 cm",
"12 cm",
"13 cm",
"14 cm"
],
answer:"13 cm"
},

{
question:"The value of sin 30° is ______.",
options:[
"1/2",
"√2/2",
"√3/2",
"1"
],
answer:"1/2"
},

{
question:"The value of cos 60° is ______.",
options:[
"0",
"1/2",
"√2/2",
"√3/2"
],
answer:"1/2"
},

{
question:"If P(-2,5) and Q(4,5), the gradient of PQ is ______.",
options:[
"0",
"1",
"5",
"Undefined"
],
answer:"0"
},

{
question:"Which quadrant contains the point (-6,-2)?",
options:[
"Quadrant I",
"Quadrant II",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant III"
},

{
question:"If y varies directly as x and y = 45 when x = 9, find y when x = 11.",
options:[
"50",
"55",
"60",
"65"
],
answer:"55"
},

{
question:"Evaluate log₁₀(100).",
options:[
"0",
"1",
"2",
"10"
],
answer:"2"
},

{
question:"Write 0.00081 in standard form.",
options:[
"8.1 × 10⁻²",
"8.1 × 10⁻³",
"8.1 × 10⁻⁴",
"8.1 × 10⁻⁵"
],
answer:"8.1 × 10⁻⁴"
},

{
question:"If a ★ b = a + 2b, find 8 ★ 6.",
options:[
"18",
"20",
"22",
"24"
],
answer:"20"
},

{
question:"Which of the following relations is a function?",
options:[
"{(1,2),(2,3),(3,4)}",
"{(1,2),(1,4),(2,5)}",
"{(3,4),(3,5),(4,6)}",
"{(5,6),(5,7),(6,8)}"
],
answer:"{(1,2),(2,3),(3,4)}"
},

{
question:"Solve simultaneously: x + y = 15 and x - y = 3.",
options:[
"x = 9, y = 6",
"x = 8, y = 7",
"x = 10, y = 5",
"x = 7, y = 8"
],
answer:"x = 9, y = 6"
},

{
question:"A cylinder has a radius of 3 cm and height 8 cm. Using π = 3.14, find its volume.",
options:[
"226.08 cm³",
"216.08 cm³",
"196.08 cm³",
"246.08 cm³"
],
answer:"226.08 cm³"
},

{
question:"The range of the data 12, 18, 9, 21, 15 is ______.",
options:[
"9",
"10",
"12",
"15"
],
answer:"12"
},
{
question:"The mean of 12, 18, 21, 24, 30 and 33 is ______.",
options:[
"22",
"23",
"23.5",
"24"
],
answer:"23"
},

{
question:"The median of 4, 6, 9, 11, 15, 18 is ______.",
options:[
"9",
"10",
"11",
"12"
],
answer:"10"
},

{
question:"The mode of 14, 16, 18, 18, 20, 22, 22, 22 is ______.",
options:[
"18",
"20",
"22",
"24"
],
answer:"22"
},

{
question:"The range of the data set 25, 18, 31, 12, 20, 27 is ______.",
options:[
"17",
"18",
"19",
"20"
],
answer:"19"
},

{
question:"A die is rolled once. What is the probability of obtaining an even number?",
options:[
"1/6",
"1/3",
"1/2",
"2/3"
],
answer:"1/2"
},

{
question:"A box contains 4 black, 6 white and 10 blue balls. What is the probability of selecting a white ball?",
options:[
"1/5",
"3/10",
"2/5",
"1/2"
],
answer:"3/10"
},

{
question:"Find the area of a circle of radius 14 cm. (Use π = 22/7)",
options:[
"528 cm²",
"616 cm²",
"704 cm²",
"748 cm²"
],
answer:"616 cm²"
},

{
question:"The volume of a cube with edge length 8 cm is ______.",
options:[
"256 cm³",
"384 cm³",
"512 cm³",
"640 cm³"
],
answer:"512 cm³"
},

{
question:"Find the height of a triangle with area 48 cm² and base 12 cm.",
options:[
"6 cm",
"8 cm",
"10 cm",
"12 cm"
],
answer:"8 cm"
},

{
question:"Find tan 45°.",
options:[
"0",
"1",
"√2",
"√3"
],
answer:"1"
},

{
question:"The value of cos 0° is ______.",
options:[
"0",
"1/2",
"1",
"√2/2"
],
answer:"1"
},

{
question:"Find the gradient of the line joining the points (1,2) and (5,14).",
options:[
"2",
"3",
"4",
"5"
],
answer:"3"
},

{
question:"The point (0,7) lies on the ______.",
options:[
"x-axis",
"y-axis",
"origin",
"Quadrant I"
],
answer:"y-axis"
},

{
question:"If y varies directly as x and y = 81 when x = 9, find x when y = 117.",
options:[
"11",
"12",
"13",
"14"
],
answer:"13"
},

{
question:"Evaluate log₁₀(1000).",
options:[
"2",
"3",
"4",
"10"
],
answer:"3"
},

{
question:"Express 0.000092 in standard form.",
options:[
"9.2 × 10⁻⁴",
"9.2 × 10⁻⁵",
"9.2 × 10⁻⁶",
"9.2 × 10⁻⁷"
],
answer:"9.2 × 10⁻⁵"
},

{
question:"If a ★ b = 2a + b², find 3 ★ 5.",
options:[
"29",
"30",
"31",
"32"
],
answer:"31"
},

{
question:"Which of the following relations is NOT a function?",
options:[
"{(1,2),(2,3),(3,4)}",
"{(2,5),(2,6),(4,7)}",
"{(3,6),(4,8),(5,10)}",
"{(6,1),(7,2),(8,3)}"
],
answer:"{(2,5),(2,6),(4,7)}"
},

{
question:"Solve simultaneously: x + y = 22 and x - y = 4.",
options:[
"x = 13, y = 9",
"x = 12, y = 10",
"x = 14, y = 8",
"x = 15, y = 7"
],
answer:"x = 13, y = 9"
},

{
question:"A line perpendicular to y = 5x - 2 has a gradient of ______.",
options:[
"5",
"-5",
"1/5",
"-1/5"
],
answer:"-1/5"
},
{
question:"A train travels 360 km in 4.5 hours. What is its average speed?",
options:[
"70 km/h",
"75 km/h",
"80 km/h",
"90 km/h"
],
answer:"80 km/h"
},

{
question:"The average of eight numbers is 42. If seven of the numbers have a total of 280, the eighth number is ______.",
options:[
"46",
"52",
"56",
"60"
],
answer:"56"
},

{
question:"The median of 12, 15, 18, 21, 24, 27, 30, 33 is ______.",
options:[
"21",
"22.5",
"24",
"25.5"
],
answer:"22.5"
},

{
question:"The range of the data 14, 19, 23, 31, 37, 42 is ______.",
options:[
"23",
"26",
"28",
"31"
],
answer:"28"
},

{
question:"Two fair coins are tossed together. What is the probability of obtaining two heads?",
options:[
"1/2",
"1/3",
"1/4",
"3/4"
],
answer:"1/4"
},

{
question:"A bag contains 5 green, 8 yellow and 7 black balls. What is the probability of selecting a yellow ball?",
options:[
"1/4",
"2/5",
"3/10",
"5/8"
],
answer:"2/5"
},

{
question:"A circular park has a radius of 10 m. Using π = 3.14, what is its area?",
options:[
"300 m²",
"314 m²",
"628 m²",
"942 m²"
],
answer:"314 m²"
},

{
question:"A rectangular swimming pool is 25 m long and 12 m wide. What is its perimeter?",
options:[
"70 m",
"72 m",
"74 m",
"76 m"
],
answer:"74 m"
},

{
question:"A cylinder has a radius of 6 cm and a height of 10 cm. Using π = 3.14, what is its volume?",
options:[
"942.0 cm³",
"1,004.8 cm³",
"1,130.4 cm³",
"1,256.0 cm³"
],
answer:"1,130.4 cm³"
},

{
question:"Find the value of cos 45°.",
options:[
"1/2",
"√2/2",
"√3/2",
"1"
],
answer:"√2/2"
},

{
question:"Find the value of sin 60°.",
options:[
"1/2",
"√2/2",
"√3/2",
"1"
],
answer:"√3/2"
},

{
question:"Find the gradient of the line joining (-2,3) and (4,15).",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
question:"Which point lies on the x-axis?",
options:[
"(0,8)",
"(5,0)",
"(3,7)",
"(-2,4)"
],
answer:"(5,0)"
},

{
question:"If y varies directly as x and y = 56 when x = 8, find y when x = 18.",
options:[
"112",
"118",
"126",
"132"
],
answer:"126"
},

{
question:"Evaluate log₁₀(1).",
options:[
"0",
"1",
"10",
"Undefined"
],
answer:"0"
},

{
question:"Write 0.000000305 in standard form.",
options:[
"3.05 × 10⁻⁵",
"3.05 × 10⁻⁶",
"3.05 × 10⁻⁷",
"3.05 × 10⁻⁸"
],
answer:"3.05 × 10⁻⁷"
},

{
question:"If a ★ b = 3a - b, find 12 ★ 8.",
options:[
"24",
"26",
"28",
"30"
],
answer:"28"
},

{
question:"Which of the following relations is a function?",
options:[
"{(2,5),(3,7),(4,9)}",
"{(1,4),(1,6),(2,8)}",
"{(3,2),(3,5),(4,6)}",
"{(5,7),(5,8),(6,9)}"
],
answer:"{(2,5),(3,7),(4,9)}"
},

{
question:"Solve simultaneously: x + y = 34 and x - y = 18.",
options:[
"x = 24, y = 10",
"x = 25, y = 9",
"x = 26, y = 8",
"x = 23, y = 11"
],
answer:"x = 26, y = 8"
},

{
question:"A line is perpendicular to y = -8x + 5. Its gradient is ______.",
options:[
"-8",
"8",
"1/8",
"-1/8"
],
answer:"1/8"
},
{
question:"The mean of 18, 22, 25, 30, 35 and 40 is ______.",
options:[
"27",
"28",
"28.3",
"29"
],
answer:"28.3"
},

{
question:"The median of 9, 11, 15, 18, 22, 27 and 31 is ______.",
options:[
"15",
"18",
"22",
"27"
],
answer:"18"
},

{
question:"The mode of 4, 6, 6, 7, 8, 8, 8, 9 is ______.",
options:[
"6",
"7",
"8",
"9"
],
answer:"8"
},

{
question:"The range of the data 17, 24, 29, 35, 41 and 46 is ______.",
options:[
"27",
"28",
"29",
"30"
],
answer:"29"
},

{
question:"A card is selected at random from a standard deck of 52 playing cards. What is the probability of selecting a King?",
options:[
"1/52",
"1/26",
"1/13",
"4/13"
],
answer:"1/13"
},

{
question:"A bag contains 9 red, 6 blue and 5 white balls. What is the probability of selecting a white ball?",
options:[
"1/5",
"1/4",
"3/10",
"2/5"
],
answer:"1/4"
},

{
question:"A rectangular field measures 45 m by 28 m. What is its area?",
options:[
"1,160 m²",
"1,200 m²",
"1,260 m²",
"1,320 m²"
],
answer:"1,260 m²"
},

{
question:"A sphere has a radius of 3 cm. Using π = 3.14, what is its volume? (Use V = 4/3πr³)",
options:[
"103.6 cm³",
"113.0 cm³",
"123.6 cm³",
"133.0 cm³"
],
answer:"113.0 cm³"
},

{
question:"Find the value of tan 30°.",
options:[
"1/√3",
"√2/2",
"√3/2",
"√3"
],
answer:"1/√3"
},

{
question:"Find the value of cos 180°.",
options:[
"-1",
"0",
"1",
"Undefined"
],
answer:"-1"
},

{
question:"Find the gradient of the line joining (-1,-2) and (5,10).",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
question:"The point (0, -9) lies on the ______.",
options:[
"x-axis",
"y-axis",
"origin",
"Quadrant IV"
],
answer:"y-axis"
},

{
question:"If y varies directly as x and y = 27 when x = 3, find x when y = 99.",
options:[
"9",
"10",
"11",
"12"
],
answer:"11"
},

{
question:"Evaluate log₁₀(0.01).",
options:[
"-1",
"-2",
"-3",
"2"
],
answer:"-2"
},

{
question:"Write 4,920,000 in standard form.",
options:[
"4.92 × 10⁵",
"4.92 × 10⁶",
"49.2 × 10⁵",
"0.492 × 10⁷"
],
answer:"4.92 × 10⁶"
},

{
question:"If a ★ b = 5a - 2b, find 9 ★ 7.",
options:[
"29",
"31",
"33",
"35"
],
answer:"31"
},

{
question:"Which of the following relations is NOT a function?",
options:[
"{(1,3),(2,4),(3,5)}",
"{(2,6),(2,8),(4,10)}",
"{(5,7),(6,9),(7,11)}",
"{(8,1),(9,2),(10,3)}"
],
answer:"{(2,6),(2,8),(4,10)}"
},

{
question:"Solve simultaneously: x + y = 50 and x - y = 6.",
options:[
"x = 27, y = 23",
"x = 28, y = 22",
"x = 29, y = 21",
"x = 30, y = 20"
],
answer:"x = 28, y = 22"
},

{
question:"A line parallel to y = 12x - 5 has a gradient of ______.",
options:[
"-12",
"1/12",
"12",
"-1/12"
],
answer:"12"
},

{
question:"The probability of selecting a month with exactly 30 days is ______.",
options:[
"1/3",
"5/12",
"1/2",
"7/12"
],
answer:"1/3"
},
{
question:"The average score of 12 students is 68. If one student's score of 80 was recorded incorrectly as 68, what is the correct average?",
options:[
"68",
"69",
"70",
"71"
],
answer:"69"
},

{
question:"The median of 7, 9, 12, 15, 18, 21, 24, 30, 33 is ______.",
options:[
"15",
"18",
"21",
"24"
],
answer:"18"
},

{
question:"The mode of the data 5, 7, 7, 9, 10, 10, 10, 12, 14 is ______.",
options:[
"7",
"9",
"10",
"12"
],
answer:"10"
},

{
question:"The range of the data set 32, 18, 41, 25, 29, 37 is ______.",
options:[
"21",
"22",
"23",
"24"
],
answer:"23"
},

{
question:"A bag contains 3 red, 5 blue, 4 green and 8 white balls. What is the probability of selecting a green ball?",
options:[
"1/4",
"1/5",
"1/6",
"1/8"
],
answer:"1/5"
},

{
question:"A standard deck of 52 playing cards is shuffled. What is the probability of selecting a Heart?",
options:[
"1/2",
"1/4",
"1/13",
"1/52"
],
answer:"1/4"
},

{
question:"A cylinder has a radius of 8 cm and a height of 10 cm. Using π = 3.14, find its volume.",
options:[
"1,809.6 cm³",
"1,909.6 cm³",
"2,009.6 cm³",
"2,109.6 cm³"
],
answer:"2,009.6 cm³"
},

{
question:"The area of a trapezium with parallel sides 12 cm and 20 cm and height 9 cm is ______.",
options:[
"126 cm²",
"132 cm²",
"144 cm²",
"156 cm²"
],
answer:"144 cm²"
},

{
question:"Find the value of sin 45°.",
options:[
"1/2",
"√2/2",
"√3/2",
"1"
],
answer:"√2/2"
},

{
question:"The angle whose cosine is 0 is ______.",
options:[
"0°",
"30°",
"60°",
"90°"
],
answer:"90°"
},

{
question:"Find the gradient of the line joining the points (-3,4) and (5,20).",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
question:"Which of the following points lies on the x-axis?",
options:[
"(0,-8)",
"(-6,0)",
"(4,5)",
"(3,-2)"
],
answer:"(-6,0)"
},

{
question:"If y varies directly as x and y = 84 when x = 14, find x when y = 54.",
options:[
"7",
"8",
"9",
"10"
],
answer:"9"
},

{
question:"Evaluate log₁₀(1,000,000).",
options:[
"4",
"5",
"6",
"7"
],
answer:"6"
},

{
question:"Express 0.00000064 in standard form.",
options:[
"6.4 × 10⁻⁵",
"6.4 × 10⁻⁶",
"6.4 × 10⁻⁷",
"6.4 × 10⁻⁸"
],
answer:"6.4 × 10⁻⁷"
},

{
question:"If a ★ b = 2a - 3b, find 15 ★ 8.",
options:[
"4",
"5",
"6",
"7"
],
answer:"6"
},

{
question:"Which of the following relations is a function?",
options:[
"{(1,5),(2,6),(3,7)}",
"{(2,4),(2,8),(5,10)}",
"{(4,6),(4,7),(6,9)}",
"{(7,3),(7,5),(8,9)}"
],
answer:"{(1,5),(2,6),(3,7)}"
},

{
question:"Solve simultaneously: x + y = 60 and x - y = 8.",
options:[
"x = 34, y = 26",
"x = 35, y = 25",
"x = 36, y = 24",
"x = 33, y = 27"
],
answer:"x = 34, y = 26"
},

{
question:"A line perpendicular to y = -10x + 3 has a gradient of ______.",
options:[
"10",
"-10",
"1/10",
"-1/10"
],
answer:"1/10"
},

{
question:"The probability of selecting a weekend day from a week is ______.",
options:[
"2/7",
"3/7",
"5/7",
"1/2"
],
answer:"2/7"
},
{
question:"The average age of 10 students is 16 years. If one more student aged 20 joins the group, what is the new average age?",
options:[
"16.2 years",
"16.4 years",
"16.6 years",
"16.8 years"
],
answer:"16.4 years"
},

{
question:"The median of 14, 17, 19, 22, 24, 27, 31, 35 is ______.",
options:[
"20",
"20.5",
"21.5",
"23"
],
answer:"23"
},

{
question:"The mode of the data 11, 13, 13, 15, 15, 15, 17, 19 is ______.",
options:[
"13",
"15",
"17",
"19"
],
answer:"15"
},

{
question:"The range of the data 45, 38, 29, 41, 34, 50 is ______.",
options:[
"19",
"20",
"21",
"22"
],
answer:"21"
},

{
question:"A bag contains 8 orange, 7 purple and 5 white balls. What is the probability of selecting a purple ball?",
options:[
"1/4",
"7/20",
"2/5",
"3/10"
],
answer:"7/20"
},

{
question:"Two fair dice are rolled. What is the probability that the sum is 12?",
options:[
"1/6",
"1/12",
"1/18",
"1/36"
],
answer:"1/36"
},

{
question:"A cone has a radius of 5 cm and a height of 12 cm. Using π = 3.14, find its volume.",
options:[
"300.4 cm³",
"314.0 cm³",
"325.2 cm³",
"345.4 cm³"
],
answer:"314.0 cm³"
},

{
question:"A parallelogram has a base of 18 cm and a perpendicular height of 9 cm. Find its area.",
options:[
"144 cm²",
"152 cm²",
"162 cm²",
"172 cm²"
],
answer:"162 cm²"
},

{
question:"Find the value of tan 60°.",
options:[
"1/√3",
"1",
"√2",
"√3"
],
answer:"√3"
},

{
question:"The angle whose sine is 1 is ______.",
options:[
"0°",
"30°",
"60°",
"90°"
],
answer:"90°"
},

{
question:"Find the gradient of the line joining (-4,2) and (2,14).",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
question:"The point (0,0) is called the ______.",
options:[
"Centre",
"Origin",
"Midpoint",
"Vertex"
],
answer:"Origin"
},

{
question:"If y varies directly as x and y = 96 when x = 16, find y when x = 25.",
options:[
"120",
"140",
"150",
"160"
],
answer:"150"
},

{
question:"Evaluate log₁₀(10,000,000).",
options:[
"5",
"6",
"7",
"8"
],
answer:"7"
},

{
question:"Write 0.0000048 in standard form.",
options:[
"4.8 × 10⁻⁴",
"4.8 × 10⁻⁵",
"4.8 × 10⁻⁶",
"4.8 × 10⁻⁷"
],
answer:"4.8 × 10⁻⁶"
},

{
question:"If a ★ b = 4a - b, find 11 ★ 9.",
options:[
"33",
"35",
"37",
"39"
],
answer:"35"
},

{
question:"Which of the following relations is NOT a function?",
options:[
"{(1,2),(2,3),(3,4)}",
"{(4,5),(4,6),(5,7)}",
"{(6,7),(7,8),(8,9)}",
"{(9,10),(10,11),(11,12)}"
],
answer:"{(4,5),(4,6),(5,7)}"
},

{
question:"Solve simultaneously: x + y = 48 and x - y = 20.",
options:[
"x = 32, y = 16",
"x = 34, y = 14",
"x = 36, y = 12",
"x = 30, y = 18"
],
answer:"x = 34, y = 14"
},

{
question:"A line parallel to y = 15x - 8 has a gradient of ______.",
options:[
"-15",
"1/15",
"15",
"-1/15"
],
answer:"15"
},

{
question:"The probability of selecting the letter 'A' from the word MATHEMATICS is ______.",
options:[
"1/11",
"2/11",
"3/11",
"4/11"
],
answer:"2/11"
},
{
question:"The mean of 14, 18, 21, 25, 27, 31 and 32 is ______.",
options:[
"22",
"23",
"24",
"25"
],
answer:"24"
},

{
question:"The median of 8, 10, 13, 15, 18, 21, 24, 27, 30 is ______.",
options:[
"13",
"15",
"18",
"21"
],
answer:"18"
},

{
question:"The mode of 9, 12, 12, 14, 15, 15, 15, 18 is ______.",
options:[
"12",
"14",
"15",
"18"
],
answer:"15"
},

{
question:"The range of the data set 16, 24, 31, 29, 38, 42, 19 is ______.",
options:[
"24",
"25",
"26",
"27"
],
answer:"26"
},

{
question:"A bag contains 12 blue balls, 5 red balls and 3 yellow balls. What is the probability of selecting a red ball?",
options:[
"1/5",
"1/4",
"3/20",
"5/20"
],
answer:"1/4"
},

{
question:"A card is selected at random from a standard deck of 52 playing cards. What is the probability of selecting a Queen?",
options:[
"1/52",
"1/26",
"1/13",
"4/13"
],
answer:"1/13"
},

{
question:"A rectangular hall measures 32 m by 18 m. What is its area?",
options:[
"540 m²",
"560 m²",
"576 m²",
"594 m²"
],
answer:"576 m²"
},

{
question:"A cylinder has a radius of 4 cm and a height of 20 cm. Using π = 3.14, find its volume.",
options:[
"904.32 cm³",
"1,004.80 cm³",
"1,105.60 cm³",
"1,205.40 cm³"
],
answer:"1,004.80 cm³"
},

{
question:"Find the value of cos 30°.",
options:[
"1/2",
"√2/2",
"√3/2",
"1"
],
answer:"√3/2"
},

{
question:"Find the value of sin 0°.",
options:[
"0",
"1/2",
"√2/2",
"1"
],
answer:"0"
},

{
question:"Find the gradient of the line joining the points (3,5) and (9,17).",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
question:"Which quadrant contains the point (-8,7)?",
options:[
"Quadrant I",
"Quadrant II",
"Quadrant III",
"Quadrant IV"
],
answer:"Quadrant II"
},

{
question:"If y varies directly as x and y = 48 when x = 6, find x when y = 120.",
options:[
"12",
"14",
"15",
"16"
],
answer:"15"
},

{
question:"Evaluate log₁₀(100,000).",
options:[
"3",
"4",
"5",
"6"
],
answer:"5"
},

{
question:"Write 7,050,000 in standard form.",
options:[
"7.05 × 10⁵",
"7.05 × 10⁶",
"70.5 × 10⁵",
"0.705 × 10⁷"
],
answer:"7.05 × 10⁶"
},

{
question:"If a ★ b = 2a + 5b, find 7 ★ 6.",
options:[
"40",
"42",
"44",
"46"
],
answer:"44"
},

{
question:"Which of the following relations is a function?",
options:[
"{(2,4),(3,5),(4,6)}",
"{(1,2),(1,3),(2,4)}",
"{(5,6),(5,7),(6,8)}",
"{(7,8),(7,9),(8,10)}"
],
answer:"{(2,4),(3,5),(4,6)}"
},

{
question:"Solve simultaneously: x + y = 52 and x - y = 16.",
options:[
"x = 34, y = 18",
"x = 35, y = 17",
"x = 36, y = 16",
"x = 33, y = 19"
],
answer:"x = 34, y = 18"
},

{
question:"A line perpendicular to y = 6x + 4 has a gradient of ______.",
options:[
"6",
"-6",
"1/6",
"-1/6"
],
answer:"-1/6"
},

{
question:"The probability of selecting the letter 'E' from the word GEOMETRY is ______.",
options:[
"1/8",
"1/4",
"3/8",
"1/2"
],
answer:"1/4"
},
{
question:"The average of 9 numbers is 48. If the sum of 8 of the numbers is 376, the ninth number is ______.",
options:[
"52",
"54",
"56",
"58"
],
answer:"56"
},

{
question:"The median of 11, 14, 16, 19, 22, 25, 28, 31, 35 is ______.",
options:[
"19",
"20",
"22",
"25"
],
answer:"22"
},

{
question:"The mode of the data 3, 5, 5, 7, 8, 8, 8, 10, 12 is ______.",
options:[
"5",
"7",
"8",
"10"
],
answer:"8"
},

{
question:"The range of the data 18, 26, 31, 39, 42, 47, 50 is ______.",
options:[
"30",
"31",
"32",
"33"
],
answer:"32"
},

{
question:"A box contains 7 green balls, 9 white balls and 4 black balls. What is the probability of selecting a black ball?",
options:[
"1/5",
"1/4",
"2/5",
"9/20"
],
answer:"1/5"
},

{
question:"A standard deck of cards is shuffled. What is the probability of selecting an Ace?",
options:[
"1/52",
"1/26",
"1/13",
"1/4"
],
answer:"1/13"
},

{
question:"A circle has a diameter of 28 cm. Using π = 22/7, what is its circumference?",
options:[
"44 cm",
"66 cm",
"88 cm",
"176 cm"
],
answer:"88 cm"
},

{
question:"A cuboid measures 15 cm by 8 cm by 6 cm. What is its volume?",
options:[
"620 cm³",
"680 cm³",
"720 cm³",
"760 cm³"
],
answer:"720 cm³"
},

{
question:"Find the value of tan 45°.",
options:[
"0",
"1",
"√2",
"√3"
],
answer:"1"
},

{
question:"Find the value of cos 60°.",
options:[
"0",
"1/2",
"√2/2",
"1"
],
answer:"1/2"
},

{
question:"Find the gradient of the line joining (-5,4) and (3,20).",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
question:"Which of the following points lies in Quadrant IV?",
options:[
"(-4,6)",
"(4,-6)",
"(-4,-6)",
"(4,6)"
],
answer:"(4,-6)"
},

{
question:"If y varies directly as x and y = 90 when x = 15, find y when x = 12.",
options:[
"66",
"72",
"78",
"84"
],
answer:"72"
},

{
question:"Evaluate log₁₀(0.1).",
options:[
"-2",
"-1",
"0",
"1"
],
answer:"-1"
},

{
question:"Express 0.000056 as a number in standard form.",
options:[
"5.6 × 10⁻⁴",
"5.6 × 10⁻⁵",
"5.6 × 10⁻⁶",
"5.6 × 10⁻⁷"
],
answer:"5.6 × 10⁻⁵"
},

{
question:"If a ★ b = 3a + 4b, find 8 ★ 5.",
options:[
"40",
"42",
"44",
"46"
],
answer:"44"
},

{
question:"Which of the following relations is NOT a function?",
options:[
"{(1,4),(2,5),(3,6)}",
"{(2,7),(2,8),(4,9)}",
"{(5,6),(6,7),(7,8)}",
"{(8,9),(9,10),(10,11)}"
],
answer:"{(2,7),(2,8),(4,9)}"
},

{
question:"Solve simultaneously: x + y = 58 and x - y = 12.",
options:[
"x = 34, y = 24",
"x = 35, y = 23",
"x = 36, y = 22",
"x = 37, y = 21"
],
answer:"x = 35, y = 23"
},

{
question:"A line parallel to y = -11x + 8 has a gradient of ______.",
options:[
"11",
"-11",
"1/11",
"-1/11"
],
answer:"-11"
},

{
question:"The probability of selecting the letter 'O' from the word 'PROBABILITY' is ______.",
options:[
"1/11",
"2/11",
"1/10",
"2/10"
],
answer:"1/11"
},
{
question:"The mean of 24, 28, 31, 35, 37 and 43 is ______.",
options:[
"32",
"33",
"33.5",
"34"
],
answer:"33"
},

{
question:"The median of 13, 16, 19, 22, 25, 28, 31, 34 is ______.",
options:[
"20.5",
"21.5",
"22.5",
"23.5"
],
answer:"23.5"
},

{
question:"The mode of the data 4, 6, 8, 8, 9, 10, 10, 10, 12 is ______.",
options:[
"8",
"9",
"10",
"12"
],
answer:"10"
},

{
question:"The range of the data 14, 21, 26, 33, 38, 45 and 49 is ______.",
options:[
"33",
"34",
"35",
"36"
],
answer:"35"
},

{
question:"A bag contains 10 red balls, 6 blue balls and 4 green balls. What is the probability of selecting a blue ball?",
options:[
"1/5",
"3/10",
"2/5",
"1/2"
],
answer:"3/10"
},

{
question:"Two fair coins are tossed. What is the probability of getting exactly one head?",
options:[
"1/4",
"1/2",
"3/4",
"1"
],
answer:"1/2"
},

{
question:"A circular garden has a radius of 21 m. Using π = 22/7, what is its area?",
options:[
"1,254 m²",
"1,320 m²",
"1,386 m²",
"1,452 m²"
],
answer:"1,386 m²"
},

{
question:"A triangular plot has a base of 24 m and a height of 16 m. What is its area?",
options:[
"168 m²",
"192 m²",
"216 m²",
"240 m²"
],
answer:"192 m²"
},

{
question:"Find the value of sin 90°.",
options:[
"0",
"1/2",
"√2/2",
"1"
],
answer:"1"
},

{
question:"Find the value of cos 90°.",
options:[
"0",
"1/2",
"1",
"Undefined"
],
answer:"0"
},

{
question:"Find the gradient of the line joining the points (-2,-1) and (6,15).",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
question:"Which of the following points lies in Quadrant III?",
options:[
"(5,-4)",
"(-5,-4)",
"(-5,4)",
"(5,4)"
],
answer:"(-5,-4)"
},

{
question:"If y varies directly as x and y = 108 when x = 18, find y when x = 14.",
options:[
"72",
"78",
"84",
"90"
],
answer:"84"
},

{
question:"Evaluate log₁₀(1,000,000,000,000).",
options:[
"10",
"11",
"12",
"13"
],
answer:"12"
},

{
question:"Write 0.0000000095 in standard form.",
options:[
"9.5 × 10⁻⁷",
"9.5 × 10⁻⁸",
"9.5 × 10⁻⁹",
"9.5 × 10⁻¹⁰"
],
answer:"9.5 × 10⁻⁹"
},

{
question:"If a ★ b = 5a + 2b, find 6 ★ 8.",
options:[
"44",
"46",
"48",
"50"
],
answer:"46"
},

{
question:"Which of the following relations is a function?",
options:[
"{(2,5),(3,6),(4,7)}",
"{(1,4),(1,5),(2,6)}",
"{(3,7),(3,8),(4,9)}",
"{(5,10),(5,11),(6,12)}"
],
answer:"{(2,5),(3,6),(4,7)}"
},

{
question:"Solve simultaneously: x + y = 46 and x - y = 18.",
options:[
"x = 30, y = 16",
"x = 31, y = 15",
"x = 32, y = 14",
"x = 29, y = 17"
],
answer:"x = 32, y = 14"
},

{
question:"A line perpendicular to y = 8x - 6 has a gradient of ______.",
options:[
"8",
"-8",
"1/8",
"-1/8"
],
answer:"-1/8"
},

{
question:"The probability of selecting the letter 'S' from the word 'STATISTICS' is ______.",
options:[
"1/10",
"2/10",
"3/10",
"4/10"
],
answer:"3/10"
},

];


let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 15 * 60;
let timerId;

const SUBJECT = "MATHEMATICS";

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const questionNumberEl = document.getElementById("questionNumber");
const progressEl = document.getElementById("progress");
const timerEl = document.getElementById("timer");

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}


// ==========================================
// ANALYTICS
// ==========================================

function saveQuizAnalytics() {

    try {

        let data =
            JSON.parse(
                localStorage.getItem("studyMateQuizAnalytics")
            ) || {};

        if (!data[SUBJECT]) {

            data[SUBJECT] = {
                attempts: 0,
                totalQuestions: 0,
                correct: 0,
                wrong: 0,
                percentage: 0,
                lastScore: 0,
                bestScore: 0,
                lastAttempt: null
            };

        }

        const subject = data[SUBJECT];

        subject.attempts++;

        subject.totalQuestions +=
            quizQuestions.length;

        subject.correct += score;

        subject.wrong +=
            quizQuestions.length - score;

        subject.percentage =
            Math.round(
                (subject.correct /
                subject.totalQuestions) * 100
            );

        subject.lastScore = score;

        subject.bestScore =
            Math.max(
                subject.bestScore,
                score
            );

        subject.lastAttempt =
            new Date().toISOString();

        localStorage.setItem(
            "studyMateQuizAnalytics",
            JSON.stringify(data)
        );

    } catch (error) {

        console.warn(
            "Quiz analytics error:",
            error
        );

    }

}


// ==========================================
// TIMER
// ==========================================

function startTimer() {

    clearInterval(timerId);

    timerEl.textContent =
        formatTime(timeLeft);

    timerId = setInterval(() => {

        timeLeft--;

        timerEl.textContent =
            formatTime(timeLeft);

        if (timeLeft <= 0) {

            clearInterval(timerId);

            showResult();

        }

    }, 1000);

}


// ==========================================
// START QUIZ
// ==========================================

function startQuiz() {

    quizQuestions =
        shuffle([...allQuestions])
        .slice(0, 20);

    currentQuestion = 0;
    score = 0;
    answered = false;
    timeLeft = 15 * 60;

    startTimer();

    loadQuestion();

}


// ==========================================
// LOAD QUESTION
// ==========================================

function loadQuestion() {

    answered = false;

    const q =
        quizQuestions[currentQuestion];

    questionEl.textContent =
        q.question;

    questionNumberEl.textContent =
        `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

    progressEl.textContent =
        `${currentQuestion + 1}/${quizQuestions.length}`;

    optionsEl.innerHTML = "";

    q.options.forEach(option => {

        const button =
            document.createElement("button");

        button.textContent =
            option;

        button.className =
            "option-btn";

        button.onclick =
            () => selectAnswer(button, option);

        optionsEl.appendChild(button);

    });

}


// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(button, answer) {

    if (answered) return;

    answered = true;

    const correctAnswer =
        quizQuestions[currentQuestion].answer;

    const buttons =
        document.querySelectorAll(".option-btn");

    buttons.forEach(btn => {

        btn.disabled = true;

        if (
            btn.textContent ===
            correctAnswer
        ) {

            btn.classList.add("correct");

        }

        if (
            btn.textContent === answer &&
            answer !== correctAnswer
        ) {

            btn.classList.add("wrong");

        }

    });

    if (
        answer === correctAnswer
    ) {

        score++;

    }

}


// ==========================================
// NEXT QUESTION
// ==========================================

nextBtn.addEventListener(
    "click",
    () => {

        if (!answered) {

            alert(
                "Please select an answer first."
            );

            return;

        }

        currentQuestion++;

        if (
            currentQuestion <
            quizQuestions.length
        ) {

            loadQuestion();

        } else {

            clearInterval(timerId);

            showResult();

        }

    }
);


// ==========================================
// SHOW RESULT
// ==========================================

function showResult() {

    clearInterval(timerId);

    const percentage =
        Math.round(
            (score /
            quizQuestions.length) * 100
        );

    let grade = "";
    let remark = "";

    if (percentage >= 80) {

        grade = "A";
        remark =
            "🏆 Excellent! Outstanding Performance.";

    } else if (percentage >= 70) {

        grade = "B";
        remark =
            "🌟 Very Good! Keep it up.";

    } else if (percentage >= 60) {

        grade = "C";
        remark =
            "👍 Good Job! You can still improve.";

    } else if (percentage >= 50) {

        grade = "D";
        remark =
            "🙂 Fair. Practice more.";

    } else {

        grade = "F";
        remark =
            "📚 Poor. Keep Practicing.";

    }


    // SAVE ANALYTICS
    saveQuizAnalytics();


    // SAVE LAST RESULT
    localStorage.setItem(
        "lastQuizSubject",
        SUBJECT
    );

    localStorage.setItem(
        "lastQuizScore",
        score
    );

    localStorage.setItem(
        "lastQuizTotal",
        quizQuestions.length
    );

    localStorage.setItem(
        "lastQuizPercentage",
        percentage
    );


    document.querySelector(
        ".quiz-container"
    ).style.display = "none";

    document.getElementById(
        "resultContainer"
    ).style.display = "block";


    document.getElementById(
        "score"
    ).textContent = score;

    document.getElementById(
        "totalQuestions"
    ).textContent =
        quizQuestions.length;

    document.getElementById(
        "percentage"
    ).textContent =
        percentage + "%";

    document.getElementById(
        "grade"
    ).textContent =
        grade;

    document.getElementById(
        "remark"
    ).textContent =
        remark;

}


// ==========================================
// RESTART
// ==========================================

function restartQuiz() {

    document.querySelector(
        ".quiz-container"
    ).style.display = "block";

    document.getElementById(
        "resultContainer"
    ).style.display = "none";

    startQuiz();

}


// ==========================================
// START
// ==========================================

startQuiz();