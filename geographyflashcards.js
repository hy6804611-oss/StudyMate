const flashcards = [
{
question:"Who is known as the Father of Geography?",
answer:"Eratosthenes."
},

{
question:"What is the shape of the Earth?",
answer:"The Earth is approximately spherical in shape and is slightly flattened at the poles."
},

{
question:"What is the Equator?",
answer:"The Equator is the imaginary line that divides the Earth into the Northern and Southern Hemispheres at 0° latitude."
},

{
question:"What is latitude?",
answer:"Latitude is the angular distance of a place north or south of the Equator, measured in degrees."
},

{
question:"Which line of longitude is also called the Greenwich Meridian?",
answer:"The Prime Meridian (0° longitude)."
},

{
question:"What is the main importance of the Prime Meridian?",
answer:"It is the reference line used for measuring longitude and calculating world time."
},

{
question:"Which latitude is the longest?",
answer:"The Equator (0° latitude)."
},

{
question:"What is the maximum longitude east or west of the Prime Meridian?",
answer:"180°."
},

{
question:"What is the Tropic of Cancer?",
answer:"The Tropic of Cancer is the line of latitude at 23½° North."
},

{
question:"What is the Tropic of Capricorn?",
answer:"The Tropic of Capricorn is the line of latitude at 23½° South."
},

{
question:"What is the Arctic Circle?",
answer:"The Arctic Circle is the line of latitude at 66½° North."
},

{
question:"What is the Antarctic Circle?",
answer:"The Antarctic Circle is the line of latitude at 66½° South."
},

{
question:"What is the Earth's axis?",
answer:"The Earth's axis is the imaginary line through the North and South Poles on which the Earth rotates."
},

{
question:"How long does the Earth take to rotate once?",
answer:"The Earth takes approximately 24 hours to complete one rotation."
},

{
question:"How long does the Earth take to revolve around the Sun?",
answer:"The Earth takes about 365¼ days to complete one revolution around the Sun."
},

{
question:"What causes day and night?",
answer:"Day and night are caused by the rotation of the Earth on its axis."
},

{
question:"What causes the seasons?",
answer:"The seasons are caused by the Earth's revolution around the Sun together with the tilt of its axis."
},

{
question:"What is weather?",
answer:"Weather is the condition of the atmosphere at a particular place and time."
},

{
question:"What is climate?",
answer:"Climate is the average weather condition of a place over a long period of time."
},

{
question:"What instrument is used to measure rainfall?",
answer:"A rain gauge."
},

{
question:"What is relief?",
answer:"Relief is the variation in the height and slope of the Earth's surface."
},

{
question:"Name the highest mountain in Africa.",
answer:"Mount Kilimanjaro."
},

{
question:"Name the largest plateau in Nigeria.",
answer:"The Jos Plateau."
},

{
question:"Why are plains important for agriculture?",
answer:"They have fertile soils and are easy to cultivate."
},

{
question:"What is a V-shaped valley?",
answer:"A valley formed mainly by river erosion."
},

{
question:"Name the four major agents of erosion.",
answer:"Running water, wind, glaciers, and waves."
},

{
question:"What is weathering?",
answer:"Weathering is the breakdown of rocks in their original position by physical, chemical, or biological processes."
},

{
question:"Name the three main types of weathering.",
answer:"Physical weathering, chemical weathering, and biological weathering."
},

{
question:"What is a river?",
answer:"A river is a natural stream of flowing water that usually empties into a lake, sea, or ocean."
},

{
question:"What is the upper course of a river?",
answer:"The section of a river near its source where erosion is greatest."
},

{
question:"What is the lower course of a river?",
answer:"The section of a river near its mouth where deposition is dominant."
},

{
question:"What is a distributary?",
answer:"A branch of a river that flows away from the main river, usually in a delta."
},

{
question:"What is another name for a watershed?",
answer:"A divide."
},

{
question:"What determines the size of a drainage basin?",
answer:"The extent of the land area drained by the river and its tributaries."
},

{
question:"What is a delta?",
answer:"A delta is a fan-shaped deposit of sediments formed where a river enters a sea or lake."
},

{
question:"What is an estuary?",
answer:"An estuary is the tidal mouth of a river where fresh water mixes with seawater."
},

{
question:"What is the water cycle?",
answer:"The water cycle is the continuous movement of water between the Earth's surface and the atmosphere."
},

{
question:"What is evaporation?",
answer:"Evaporation is the process by which water changes from liquid to water vapour."
},

{
question:"What is condensation?",
answer:"Condensation is the process by which water vapour cools and changes into liquid water."
},

{
question:"What is precipitation?",
answer:"Precipitation is any form of water, such as rain, snow, or hail, that falls from the atmosphere to the Earth."
},

{
question:"What is humidity?",
answer:"Humidity is the amount of water vapour present in the atmosphere."
},

{
question:"What instrument is used to measure humidity?",
answer:"A hygrometer."
},

{
question:"What is atmospheric pressure?",
answer:"Atmospheric pressure is the force exerted by the weight of the air on the Earth's surface."
},

{
question:"What instrument is used to measure atmospheric pressure?",
answer:"A barometer."
},

{
question:"What is wind?",
answer:"Wind is air in motion from an area of high pressure to an area of low pressure."
},

{
question:"What instrument is used to measure wind speed?",
answer:"An anemometer."
},

{
question:"What instrument shows wind direction?",
answer:"A wind vane."
},

{
question:"What are contour lines?",
answer:"Contour lines are lines on a map joining places of equal height above sea level."
},

{
question:"What is a map?",
answer:"A map is a scaled representation of the Earth's surface or part of it."
},

{
question:"What is scale on a map?",
answer:"Scale is the relationship between a distance on a map and the corresponding distance on the ground."
},

{
question:"What is a physical map?",
answer:"A physical map shows natural features such as mountains, rivers, and valleys."
},

{
question:"What is a political map?",
answer:"A political map shows boundaries of countries, states, and towns."
},

{
question:"What is population?",
answer:"Population is the total number of people living in a particular area."
},

{
question:"What is population density?",
answer:"Population density is the number of people living per unit area of land."
},

{
question:"What is migration?",
answer:"Migration is the movement of people from one place to another for permanent or temporary settlement."
},

{
question:"What is emigration?",
answer:"Emigration is the movement of people out of a country to live elsewhere."
},

{
question:"What is immigration?",
answer:"Immigration is the movement of people into a country to live there."
},

{
question:"What is urbanization?",
answer:"Urbanization is the growth in the size and population of towns and cities."
},

{
question:"What is settlement?",
answer:"Settlement is a place where people establish and live."
},

{
question:"What is a rural settlement?",
answer:"A rural settlement is a settlement located in the countryside where farming is the main occupation."
},

{
question:"What is an urban settlement?",
answer:"An urban settlement is a settlement with a large population where commerce, industry, and services are the major occupations."
},

{
question:"What is agriculture?",
answer:"Agriculture is the cultivation of crops and the rearing of animals for human use."
},

{
question:"What is subsistence farming?",
answer:"Subsistence farming is farming carried out mainly to provide food for the farmer and the farmer's family."
},

{
question:"What is commercial farming?",
answer:"Commercial farming is farming carried out mainly for sale and profit."
},

{
question:"What is crop rotation?",
answer:"Crop rotation is the practice of growing different crops on the same piece of land in successive seasons."
},

{
question:"What is irrigation?",
answer:"Irrigation is the artificial supply of water to crops."
},

{
question:"What is livestock farming?",
answer:"Livestock farming is the rearing of animals such as cattle, sheep, goats, and poultry."
},

{
question:"What is fishing?",
answer:"Fishing is the harvesting of fish and other aquatic organisms from water bodies."
},

{
question:"What is forestry?",
answer:"Forestry is the management and conservation of forests and forest resources."
},

{
question:"What is mining?",
answer:"Mining is the extraction of minerals from the Earth."
},

{
question:"What is a mineral?",
answer:"A mineral is a naturally occurring inorganic substance found in the Earth's crust."
},

{
question:"What is petroleum?",
answer:"Petroleum is a naturally occurring liquid fossil fuel found beneath the Earth's surface."
},

{
question:"What is renewable energy?",
answer:"Renewable energy is energy obtained from natural sources that can be replenished continuously."
},

{
question:"Give one example of renewable energy.",
answer:"Solar energy."
},

{
question:"What is non-renewable energy?",
answer:"Non-renewable energy is energy obtained from resources that cannot be replaced quickly after use."
},

{
question:"Give one example of a non-renewable energy source.",
answer:"Crude oil."
},

{
question:"What is transportation?",
answer:"Transportation is the movement of people and goods from one place to another."
},

{
question:"Name the four major means of transportation.",
answer:"Road, rail, water, and air transport."
},

{
question:"What is trade?",
answer:"Trade is the buying and selling of goods and services."
},

{
question:"What is commerce?",
answer:"Commerce includes all activities involved in the distribution and exchange of goods and services."
},

{
question:"What is export trade?",
answer:"Export trade is the sale of goods and services from one country to another."
},

{
question:"What is import trade?",
answer:"Import trade is the purchase of goods and services from another country."
},

{
question:"What is tourism?",
answer:"Tourism is the movement of people from one place to another for leisure, business, or recreation."
},

{
question:"What is industry?",
answer:"Industry is the production of goods through the processing of raw materials."
},

{
question:"What is manufacturing?",
answer:"Manufacturing is the process of converting raw materials into finished goods."
},

{
question:"What is soil?",
answer:"Soil is the upper layer of the Earth's crust that supports plant growth."
},

{
question:"Name the three main types of soil.",
answer:"Sandy soil, clay soil, and loamy soil."
},

{
question:"Which type of soil is best for agriculture?",
answer:"Loamy soil."
},

{
question:"What is soil erosion?",
answer:"Soil erosion is the removal of the top layer of soil by water, wind, or human activities."
},

{
question:"State one method of controlling soil erosion.",
answer:"Planting trees."
},

{
question:"What is desertification?",
answer:"Desertification is the gradual spread of desert conditions into previously productive land."
},

{
question:"State one cause of desertification.",
answer:"Deforestation."
},

{
question:"What is afforestation?",
answer:"Afforestation is the planting of trees in areas where there were previously no forests."
},

{
question:"What is deforestation?",
answer:"Deforestation is the cutting down of trees on a large scale."
},

{
question:"What is conservation?",
answer:"Conservation is the wise use and protection of natural resources."
},

{
question:"What is pollution?",
answer:"Pollution is the contamination of the environment by harmful substances."
},

{
question:"Name the three major types of pollution.",
answer:"Air pollution, water pollution, and land pollution."
},

{
question:"What is global warming?",
answer:"Global warming is the gradual increase in the Earth's average temperature due to greenhouse gases."
},

{
question:"What is the greenhouse effect?",
answer:"The greenhouse effect is the trapping of heat in the Earth's atmosphere by greenhouse gases."
},

{
question:"State one effect of global warming.",
answer:"Rising sea levels."
},

{
question:"What is a natural resource?",
answer:"A natural resource is any material or substance obtained from nature that can be used by humans."
},

{
question:"What is a renewable resource?",
answer:"A renewable resource is a natural resource that can be replaced naturally within a short period."
},

{
question:"What is a non-renewable resource?",
answer:"A non-renewable resource is a natural resource that cannot be replaced within a human lifetime."
},

{
question:"What is vegetation?",
answer:"Vegetation is the collective plant life growing naturally in a particular area."
},

{
question:"What is natural vegetation?",
answer:"Natural vegetation is plant life that grows without human interference."
},

{
question:"Name the major vegetation zones of the world.",
answer:"Equatorial forest, tropical grassland (savanna), desert, Mediterranean, temperate grassland, temperate forest, and tundra."
},

{
question:"What is the equatorial rainforest?",
answer:"The equatorial rainforest is a dense evergreen forest found around the Equator with heavy rainfall throughout the year."
},

{
question:"What is the savanna vegetation?",
answer:"Savanna vegetation consists mainly of grasses with scattered trees and is found in tropical regions."
},

{
question:"What is a desert?",
answer:"A desert is a very dry region that receives less than 250 mm of rainfall annually."
},

{
question:"Name the largest hot desert in the world.",
answer:"The Sahara Desert."
},

{
question:"What is a biome?",
answer:"A biome is a large natural region characterized by its climate, vegetation, and wildlife."
},

{
question:"What is rainfall?",
answer:"Rainfall is the amount of rain that falls in a particular place over a given period."
},

{
question:"What instrument measures temperature?",
answer:"A thermometer."
},

{
question:"What is sunshine duration?",
answer:"Sunshine duration is the total number of hours the sun shines in a day."
},

{
question:"What instrument records sunshine duration?",
answer:"A sunshine recorder."
},

{
question:"What are clouds?",
answer:"Clouds are masses of tiny water droplets or ice crystals suspended in the atmosphere."
},

{
question:"How are clouds formed?",
answer:"Clouds are formed when water vapour cools and condenses into tiny droplets."
},

{
question:"What is dew?",
answer:"Dew is water formed when water vapour condenses on cool surfaces near the ground."
},

{
question:"What is fog?",
answer:"Fog is a cloud that forms close to the Earth's surface, reducing visibility."
},

{
question:"What is mist?",
answer:"Mist is a thin layer of tiny water droplets suspended near the ground, causing slight reduction in visibility."
},

{
question:"What is frost?",
answer:"Frost is the formation of ice crystals on surfaces when the temperature falls below the freezing point."
},

{
question:"What is hail?",
answer:"Hail is precipitation in the form of balls or lumps of ice."
},

{
question:"What is snow?",
answer:"Snow is frozen precipitation that falls as ice crystals in cold regions."
},

{
question:"What is climate change?",
answer:"Climate change is the long-term alteration of global or regional weather patterns."
},

{
question:"What is a continent?",
answer:"A continent is a large continuous landmass on the Earth's surface."
},

{
question:"How many continents are there in the world?",
answer:"There are seven continents."
},

{
question:"Name the seven continents.",
answer:"Africa, Asia, Europe, North America, South America, Australia, and Antarctica."
},

{
question:"What is an ocean?",
answer:"An ocean is a vast body of salt water covering a large part of the Earth's surface."
},

{
question:"How many oceans are there in the world?",
answer:"There are five oceans."
},

{
question:"Name the five oceans.",
answer:"Pacific Ocean, Atlantic Ocean, Indian Ocean, Arctic Ocean, and Southern Ocean."
},

{
question:"Which is the largest continent in the world?",
answer:"Asia."
},

{
question:"Which is the smallest continent in the world?",
answer:"Australia."
},

{
question:"Which is the largest ocean in the world?",
answer:"The Pacific Ocean."
},

{
question:"Which is the smallest ocean in the world?",
answer:"The Arctic Ocean."
},

{
question:"Which continent is known as the 'Dark Continent'?",
answer:"Africa."
},

{
question:"Which continent is permanently covered with ice?",
answer:"Antarctica."
},

{
question:"What is a peninsula?",
answer:"A peninsula is a piece of land surrounded by water on three sides."
},

{
question:"What is an island?",
answer:"An island is a piece of land completely surrounded by water."
},

{
question:"What is an archipelago?",
answer:"An archipelago is a group or chain of islands."
},

{
question:"What is a cape?",
answer:"A cape is a pointed piece of land extending into a sea or ocean."
},

{
question:"What is a gulf?",
answer:"A gulf is a large body of sea water partly enclosed by land."
},

{
question:"What is a bay?",
answer:"A bay is a broad inlet of the sea where the land curves inward."
},

{
question:"What is a strait?",
answer:"A strait is a narrow waterway connecting two larger bodies of water."
},

{
question:"What is an isthmus?",
answer:"An isthmus is a narrow strip of land connecting two larger land masses."
},

{
question:"What is a lagoon?",
answer:"A lagoon is a shallow body of salt water separated from the sea by sandbars or coral reefs."
},

{
question:"What is a harbour?",
answer:"A harbour is a sheltered area of water where ships can anchor safely."
},

{
question:"What is longitude?",
answer:"Longitude is the angular distance of a place east or west of the Prime Meridian."
},

{
question:"What is the distance between two lines of latitude?",
answer:"Approximately 111 kilometres."
},

{
question:"What is the Prime Meridian?",
answer:"The Prime Meridian is the line of 0° longitude that passes through Greenwich, England."
},

{
question:"What is the total length of the Equator?",
answer:"Approximately 40,075 kilometres."
},

{
question:"How many degrees of longitude are there around the Earth?",
answer:"360 degrees."
},

{
question:"How many degrees of latitude are there from the North Pole to the South Pole?",
answer:"180 degrees."
},

{
question:"What is the International Date Line?",
answer:"The International Date Line is an imaginary line near 180° longitude where the calendar date changes."
},

{
question:"What is local time?",
answer:"Local time is the time determined by the position of the sun at a particular place."
},

{
question:"What is standard time?",
answer:"Standard time is the official time adopted by a country or region."
},

{
question:"How many degrees of longitude represent one hour difference in time?",
answer:"15 degrees."
},

{
question:"How many minutes of time correspond to one degree of longitude?",
answer:"4 minutes."
},

{
question:"What is Greenwich Mean Time (GMT)?",
answer:"Greenwich Mean Time is the standard time measured from the Prime Meridian at Greenwich, England."
},

{
question:"What is a hemisphere?",
answer:"A hemisphere is one half of the Earth divided by the Equator or the Prime Meridian."
},

{
question:"Name the four hemispheres of the Earth.",
answer:"Northern Hemisphere, Southern Hemisphere, Eastern Hemisphere, and Western Hemisphere."
},

{
question:"What is relative relief?",
answer:"The difference in height between the highest and lowest points in an area."
},

{
question:"What is a mountain?",
answer:"A mountain is a very high area of land rising prominently above its surroundings."
},

{
question:"What is a hill?",
answer:"A hill is a naturally raised area of land that is lower than a mountain."
},

{
question:"What is a plateau?",
answer:"A plateau is a large area of high, flat land."
},

{
question:"What is a plain?",
answer:"A plain is a broad area of flat or gently rolling land."
},

{
question:"What is a valley?",
answer:"A valley is a low area of land between hills or mountains, often with a river flowing through it."
},

{
question:"What is a gorge?",
answer:"A gorge is a deep, narrow valley with steep sides, usually formed by river erosion."
},

{
question:"What is a cliff?",
answer:"A cliff is a steep rock face rising almost vertically."
},

{
question:"What is a waterfall?",
answer:"A waterfall is a place where a river flows over a steep drop."
},

{
question:"Which is the longest river in Africa?",
answer:"The River Nile."
},

{
question:"What is the source of a river?",
answer:"The source of a river is the place where the river begins."
},

{
question:"What is the mouth of a river?",
answer:"The mouth of a river is the place where it empties into a larger body of water."
},

{
question:"What is a tributary?",
answer:"A tributary is a smaller river or stream that flows into a larger river."
},

{
question:"What is a watershed?",
answer:"A watershed is the highland that separates the drainage basins of rivers."
},

{
question:"What is a drainage basin?",
answer:"A drainage basin is the area of land drained by a river and its tributaries."
},

{
question:"What is erosion?",
answer:"Erosion is the wearing away of the Earth's surface by agents such as water, wind, and ice."
},

{
question:"Which type of weathering is most common in hot and wet climates?",
answer:"Chemical weathering."
},

{
question:"What is deposition?",
answer:"Deposition is the laying down of materials carried by agents such as rivers, wind, or glaciers."
},

{
question:"What is a delta?",
answer:"A delta is a fan-shaped deposit of sediments formed at the mouth of a river."
},

{
question:"What is an estuary?",
answer:"An estuary is the wide tidal mouth of a river where it meets the sea."
},

{
question:"What is a glacier?",
answer:"A glacier is a large mass of slowly moving ice formed from accumulated snow."
},

{
question:"What is a meander?",
answer:"A meander is a winding bend or curve in the course of a river."
},

{
question:"What is an oxbow lake?",
answer:"An oxbow lake is a crescent-shaped lake formed when a river meander is cut off from the main channel."
},

{
question:"What is floodplain?",
answer:"A floodplain is a flat area of land beside a river that is regularly flooded."
},

{
question:"What is a levee?",
answer:"A levee is a raised bank of sediment deposited naturally along the sides of a river during floods."
},

{
question:"What is a volcano?",
answer:"A volcano is an opening in the Earth's crust through which molten rock, ash, and gases are expelled."
},

{
question:"What is magma?",
answer:"Magma is molten rock found beneath the Earth's surface."
},

{
question:"What is lava?",
answer:"Lava is molten rock that reaches the Earth's surface during a volcanic eruption."
},

{
question:"What is an earthquake?",
answer:"An earthquake is the sudden shaking of the Earth's crust caused by movements within the Earth."
},

{
question:"What is an epicentre?",
answer:"An epicentre is the point on the Earth's surface directly above the focus of an earthquake."
},

{
question:"What is the focus of an earthquake?",
answer:"The focus is the point inside the Earth where an earthquake begins."
},

{
question:"What is weathering by exfoliation?",
answer:"Exfoliation is the peeling off of outer rock layers due to repeated heating and cooling."
},

{
question:"What is chemical weathering?",
answer:"Chemical weathering is the breakdown of rocks through chemical reactions."
},

{
question:"What is biological weathering?",
answer:"Biological weathering is the breakdown of rocks by living organisms such as plants and animals."
},

{
question:"What is mass movement?",
answer:"Mass movement is the downhill movement of weathered materials under the influence of gravity."
},

{
question:"What is landslide?",
answer:"A landslide is the rapid movement of rock, soil, and debris down a slope."
},

{
question:"What is contour line?",
answer:"A contour line is a line on a map joining places of equal height above sea level."
},

{
question:"What is a contour map?",
answer:"A contour map is a map that shows the relief of an area using contour lines."
},

{
question:"What do closely spaced contour lines indicate?",
answer:"Closely spaced contour lines indicate a steep slope."
},

{
question:"What do widely spaced contour lines indicate?",
answer:"Widely spaced contour lines indicate a gentle slope."
},


];



// ==========================================
// STUDYMATE FLASHCARD ENGINE
// GEOGRAPHY 
// ==========================================

const SUBJECT = "Geography";

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