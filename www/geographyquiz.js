// ======================================
// StudyMate Geography quiz.
// ======================================

const allQuestions = [
  
  
{
  question: "What is Geography?",
  options: [
    "The study of the Earth and its environment",
    "The study of living things",
    "The study of chemicals",
    "The study of numbers"
  ],
  answer: "The study of the Earth and its environment"
},
{
  question: "Which planet do humans live on?",
  options: [
    "Mars",
    "Earth",
    "Venus",
    "Jupiter"
  ],
  answer: "Earth"
},
{
  question: "The imaginary line that divides the Earth into Northern and Southern Hemispheres is called:",
  options: [
    "Prime Meridian",
    "Equator",
    "Tropic of Cancer",
    "Arctic Circle"
  ],
  answer: "Equator"
},
{
  question: "What is soil?",
  options: [
    "The uppermost layer of the Earth's crust that supports plant growth",
    "A type of rock",
    "A body of water",
    "A layer of clouds"
  ],
  answer: "The uppermost layer of the Earth's crust that supports plant growth"
},
{
  question: "Which soil component is formed from decayed plants and animals?",
  options: [
    "Mineral particles",
    "Humus",
    "Air",
    "Water"
  ],
  answer: "Humus"
},
{
  question: "Which soil type is best for farming?",
  options: [
    "Sandy soil",
    "Clay soil",
    "Loamy soil",
    "Rocky soil"
  ],
  answer: "Loamy soil"
},
{
  question: "Which soil horizon is rich in humus and nutrients?",
  options: [
    "Horizon A",
    "Horizon B",
    "Horizon C",
    "Bedrock"
  ],
  answer: "Horizon A"
},
{
  question: "Which soil type has the largest particles?",
  options: [
    "Clay soil",
    "Loamy soil",
    "Sandy soil",
    "Silt soil"
  ],
  answer: "Sandy soil"
},
{
  question: "Which of the following is a cause of soil erosion?",
  options: [
    "Afforestation",
    "Heavy rainfall",
    "Mulching",
    "Crop rotation"
  ],
  answer: "Heavy rainfall"
},
{
  question: "Which method helps conserve soil?",
  options: [
    "Bush burning",
    "Contour ploughing",
    "Deforestation",
    "Overgrazing"
  ],
  answer: "Contour ploughing"
},
{
  question: "What is drainage?",
  options: [
    "The movement of water across the Earth's surface",
    "The movement of air",
    "The formation of mountains",
    "The study of weather"
  ],
  answer: "The movement of water across the Earth's surface"
},
{
  question: "Where does a river begin?",
  options: [
    "Mouth",
    "Confluence",
    "Source",
    "Delta"
  ],
  answer: "Source"
},
{
  question: "What is a tributary?",
  options: [
    "The end of a river",
    "A smaller river that joins a larger river",
    "A large lake",
    "A mountain stream"
  ],
  answer: "A smaller river that joins a larger river"
},
{
  question: "What is the point where two rivers meet called?",
  options: [
    "Delta",
    "Source",
    "Confluence",
    "Basin"
  ],
  answer: "Confluence"
},
{
  question: "What is the mouth of a river?",
  options: [
    "Where a river begins",
    "Where a river enters a sea, lake or another river",
    "The middle course",
    "The deepest part"
  ],
  answer: "Where a river enters a sea, lake or another river"
},
{
  question: "Which is the longest river in Nigeria?",
  options: [
    "River Benue",
    "River Niger",
    "River Cross",
    "River Sokoto"
  ],
  answer: "River Niger"
},
{
  question: "River Benue is the largest ______ of River Niger.",
  options: [
    "Delta",
    "Tribuary",
    "Tributary",
    "Source"
  ],
  answer: "Tributary"
},
{
  question: "Which of these is an importance of rivers?",
  options: [
    "Generate hydroelectric power",
    "Cause earthquakes",
    "Reduce rainfall",
    "Create deserts"
  ],
  answer: "Generate hydroelectric power"
},
{
  question: "Which of these is a problem facing rivers and lakes?",
  options: [
    "Afforestation",
    "Overfishing",
    "Crop rotation",
    "Terracing"
  ],
  answer: "Overfishing"
},
{
  question: "Environmental hazards can be classified into:",
  options: [
    "Natural and human-made",
    "Mountain and valley",
    "Hot and cold",
    "Wet and dry"
  ],
  answer: "Natural and human-made"
},
{
  question: "Which of these is a natural hazard?",
  options: [
    "Oil spill",
    "Bush burning",
    "Flooding",
    "Pollution"
  ],
  answer: "Flooding"
},
{
  question: "Which agency manages emergencies in Nigeria?",
  options: [
    "NEMA",
    "WAEC",
    "JAMB",
    "NNPC"
  ],
  answer: "NEMA"
},
{
  question: "NESREA is responsible for:",
  options: [
    "Environmental standards and regulations",
    "Conducting examinations",
    "Building roads",
    "Managing airports"
  ],
  answer: "Environmental standards and regulations"
},
{
  question: "What is population?",
  options: [
    "The total number of people living in a particular place",
    "The number of animals in a forest",
    "The amount of rainfall in an area",
    "The number of buildings in a town"
  ],
  answer: "The total number of people living in a particular place"
},
{
  question: "What is a settlement?",
  options: [
    "A place where people establish their homes",
    "A mountain range",
    "A river basin",
    "A forest reserve"
  ],
  answer: "A place where people establish their homes"
},
{
  question: "Which type of settlement is mainly associated with farming?",
  options: [
    "Urban settlement",
    "Rural settlement",
    "Industrial settlement",
    "Commercial settlement"
  ],
  answer: "Rural settlement"
},
{
  question: "Which type of settlement has industries and modern facilities?",
  options: [
    "Rural settlement",
    "Urban settlement",
    "Nomadic settlement",
    "Fishing settlement"
  ],
  answer: "Urban settlement"
},
{
  question: "In which settlement pattern are houses closely grouped together?",
  options: [
    "Linear settlement",
    "Dispersed settlement",
    "Nucleated settlement",
    "Circular settlement"
  ],
  answer: "Nucleated settlement"
},
{
  question: "Which settlement pattern has houses scattered far apart?",
  options: [
    "Dispersed settlement",
    "Linear settlement",
    "Nucleated settlement",
    "Circular settlement"
  ],
  answer: "Dispersed settlement"
},
{
  question: "Linear settlements are commonly found along:",
  options: [
    "Roads and rivers",
    "Mountains only",
    "Deserts only",
    "Forests only"
  ],
  answer: "Roads and rivers"
},
{
  question: "Population density refers to:",
  options: [
    "The number of people per unit area",
    "The number of houses in a town",
    "The birth rate of a country",
    "The number of roads in a city"
  ],
  answer: "The number of people per unit area"
},
{
  question: "What is a population census?",
  options: [
    "The official counting of people",
    "The building of new cities",
    "The measurement of rainfall",
    "The study of rivers"
  ],
  answer: "The official counting of people"
},
{
  question: "Which of these is an importance of population census?",
  options: [
    "Helps government plan development",
    "Causes flooding",
    "Creates deserts",
    "Produces electricity"
  ],
  answer: "Helps government plan development"
},
{
  question: "Which of these is a problem of rapid population growth?",
  options: [
    "Housing shortage",
    "Better healthcare",
    "More farmland",
    "Lower unemployment"
  ],
  answer: "Housing shortage"
},
{
  question: "Agriculture is the practice of:",
  options: [
    "Cultivating crops and rearing animals",
    "Building roads",
    "Making furniture",
    "Mining minerals"
  ],
  answer: "Cultivating crops and rearing animals"
},
{
  question: "Which branch of agriculture involves raising livestock?",
  options: [
    "Fishing",
    "Forestry",
    "Animal husbandry",
    "Crop farming"
  ],
  answer: "Animal husbandry"
},
{
  question: "Which type of farming is mainly for family consumption?",
  options: [
    "Commercial farming",
    "Subsistence farming",
    "Mechanized farming",
    "Mixed farming"
  ],
  answer: "Subsistence farming"
},
{
  question: "Commercial farming is carried out mainly for:",
  options: [
    "Profit",
    "Entertainment",
    "Tourism",
    "Research"
  ],
  answer: "Profit"
},
{
  question: "Which of these is an importance of agriculture?",
  options: [
    "Provides food",
    "Causes earthquakes",
    "Produces volcanoes",
    "Reduces rainfall"
  ],
  answer: "Provides food"
},
{
  question: "Which of these is a problem facing agriculture?",
  options: [
    "Pests and diseases",
    "Good transportation",
    "Fertile soil",
    "Adequate rainfall"
  ],
  answer: "Pests and diseases"
},
{
  question: "Manufacturing industries convert:",
  options: [
    "Raw materials into finished products",
    "Water into oil",
    "Trees into forests",
    "Air into oxygen"
  ],
  answer: "Raw materials into finished products"
},
{
  question: "Which factor affects the location of industries?",
  options: [
    "Availability of raw materials",
    "Color of buildings",
    "Number of rivers only",
    "Cloud formation"
  ],
  answer: "Availability of raw materials"
},
{
  question: "Which of these is an importance of manufacturing industries?",
  options: [
    "Creates employment",
    "Causes drought",
    "Reduces trade",
    "Stops development"
  ],
  answer: "Creates employment"
},
{
  question: "Transportation is the movement of:",
  options: [
    "People and goods from one place to another",
    "Clouds across the sky",
    "Only animals",
    "Only water"
  ],
  answer: "People and goods from one place to another"
},
{
  question: "Which means of transportation is the fastest over long distances?",
  options: [
    "Road transport",
    "Rail transport",
    "Water transport",
    "Air transport"
  ],
  answer: "Air transport"
},
{
  question: "Which means of transport is mainly used for crude oil and natural gas?",
  options: [
    "Road transport",
    "Pipeline transport",
    "Rail transport",
    "Air transport"
  ],
  answer: "Pipeline transport"
},
{
  question: "Which of these is an advantage of transportation?",
  options: [
    "Promotes trade",
    "Causes earthquakes",
    "Reduces employment",
    "Stops tourism"
  ],
  answer: "Promotes trade"
},
{
  question: "Which of these is a problem of transportation?",
  options: [
    "Traffic congestion",
    "Better roads",
    "Fast movement",
    "International trade"
  ],
  answer: "Traffic congestion"
},
{
  question: "Communication is the process of:",
  options: [
    "Sending and receiving information",
    "Growing crops",
    "Mining minerals",
    "Building roads"
  ],
  answer: "Sending and receiving information"
},
{
  question: "Which is an example of electronic communication?",
  options: [
    "Internet",
    "Letter",
    "Notice board",
    "Hand signal"
  ],
  answer: "Internet"
},
{
  question: "Which of these is a modern means of communication?",
  options: [
    "Email",
    "Smoke signals",
    "Town crier",
    "Drum beating"
  ],
  answer: "Email"
},
{
  question: "Which of these is a challenge of modern communication?",
  options: [
    "Cybercrime",
    "Better education",
    "Faster communication",
    "Easy access to information"
  ],
  answer: "Cybercrime"
},
{
  question: "World trade refers to:",
  options: [
    "Buying and selling goods between countries",
    "Trading only within a village",
    "Growing crops",
    "Building factories"
  ],
  answer: "Buying and selling goods between countries"
},
{
  question: "Goods bought from another country are called:",
  options: [
    "Imports",
    "Exports",
    "Resources",
    "Products"
  ],
  answer: "Imports"
},
{
  question: "Goods sold to another country are called:",
  options: [
    "Exports",
    "Imports",
    "Investments",
    "Services"
  ],
  answer: "Exports"
},
{
  question: "Tourism is the movement of people mainly for:",
  options: [
    "Leisure, business or education",
    "Mining only",
    "Fishing only",
    "Manufacturing only"
  ],
  answer: "Leisure, business or education"
},
{
  question: "Travelling within one's own country is known as:",
  options: [
    "Domestic tourism",
    "International tourism",
    "Commercial tourism",
    "Regional tourism"
  ],
  answer: "Domestic tourism"
},
{
  question: "Which of these is a famous tourist attraction in Nigeria?",
  options: [
    "Yankari National Park",
    "Eiffel Tower",
    "Great Wall of China",
    "Taj Mahal"
  ],
  answer: "Yankari National Park"
},
{
  question: "Which factor greatly affects tourism?",
  options: [
    "Security",
    "Moonlight",
    "Planet size",
    "Ocean depth"
  ],
  answer: "Security"
},
{
  question: "Sustainable development means:",
  options: [
    "Using resources without harming future generations",
    "Using all resources immediately",
    "Ignoring the environment",
    "Cutting down all forests"
  ],
  answer: "Using resources without harming future generations"
},
{
  question: "Which of these is a renewable resource?",
  options: [
    "Wind",
    "Coal",
    "Crude oil",
    "Natural gas"
  ],
  answer: "Wind"
},
{
  question: "Which of these is a non-renewable resource?",
  options: [
    "Crude oil",
    "Sunlight",
    "Water",
    "Wind"
  ],
  answer: "Crude oil"
},
{
  question: "Which practice helps conserve the environment?",
  options: [
    "Planting more trees",
    "Illegal logging",
    "Bush burning",
    "Polluting rivers"
  ],
  answer: "Planting more trees"
},
{
  question: "Climate change refers to:",
  options: [
    "Long-term changes in global weather patterns",
    "Daily weather forecast",
    "Seasonal rainfall only",
    "Movement of rivers"
  ],
  answer: "Long-term changes in global weather patterns"
},
{
  question: "Which gas is mainly responsible for global warming?",
  options: [
    "Carbon dioxide",
    "Oxygen",
    "Nitrogen",
    "Hydrogen"
  ],
  answer: "Carbon dioxide"
},
{
  question: "Which of these is an effect of climate change?",
  options: [
    "Rising sea levels",
    "Lower mountain heights",
    "More continents",
    "Smaller oceans"
  ],
  answer: "Rising sea levels"
},
{
  question: "Which organization promotes environmental protection worldwide?",
  options: [
    "UNEP",
    "WHO",
    "FIFA",
    "OPEC"
  ],
  answer: "UNEP"
},
{
  question: "WWF is mainly concerned with:",
  options: [
    "Conserving nature and wildlife",
    "Building roads",
    "International trade",
    "Air transport"
  ],
  answer: "Conserving nature and wildlife"
},
{
  question: "GIS stands for:",
  options: [
    "Geographical Information System",
    "Global Internet Service",
    "Geographical Inspection Service",
    "General Information System"
  ],
  answer: "Geographical Information System"
},
{
  question: "Remote sensing is the collection of information about the Earth's surface:",
  options: [
    "Without direct physical contact",
    "Only by walking",
    "Only by ships",
    "Only by digging"
  ],
  answer: "Without direct physical contact"
},
{
  question: "Which device is commonly used for GPS navigation?",
  options: [
    "Satellite receiver",
    "Microscope",
    "Thermometer",
    "Barometer"
  ],
  answer: "Satellite receiver"
},
{
  question: "Which of these is an application of GIS?",
  options: [
    "Urban planning",
    "Cooking",
    "Tailoring",
    "Carpentry"
  ],
  answer: "Urban planning"
},
{
  question: "Which of these is an advantage of GIS?",
  options: [
    "High accuracy in mapping",
    "Causes pollution",
    "Reduces map quality",
    "Destroys forests"
  ],
  answer: "High accuracy in mapping"
},
{
  question: "The Pacific Ocean is the:",
  options: [
    "Largest ocean",
    "Smallest ocean",
    "Shallowest ocean",
    "Coldest ocean"
  ],
  answer: "Largest ocean"
},
{
  question: "Mount Everest is the world's:",
  options: [
    "Highest mountain above sea level",
    "Longest river",
    "Largest volcano",
    "Deepest valley"
  ],
  answer: "Highest mountain above sea level"
},
{
  question: "The Sahara is the world's largest:",
  options: [
    "Hot desert",
    "Rainforest",
    "Ocean",
    "Mountain range"
  ],
  answer: "Hot desert"
},
{
  question: "Which line divides the Earth into the Eastern and Western Hemispheres?",
  options: [
    "Prime Meridian",
    "Equator",
    "Tropic of Cancer",
    "International Date Line"
  ],
  answer: "Prime Meridian"
},
{
  question: "How long does the Earth take to rotate once on its axis?",
  options: [
    "24 hours",
    "12 hours",
    "30 days",
    "365 days"
  ],
  answer: "24 hours"
},
{
  question: "How long does the Earth take to revolve around the Sun?",
  options: [
    "About 365¼ days",
    "24 hours",
    "30 days",
    "100 days"
  ],
  answer: "About 365¼ days"
},
{
  question: "Which continent is the largest by area?",
  options: [
    "Asia",
    "Africa",
    "Europe",
    "North America"
  ],
  answer: "Asia"
},
{
  question: "Which country is the largest in the world by land area?",
  options: [
    "Russia",
    "Canada",
    "China",
    "United States"
  ],
  answer: "Russia"
},
{
  question: "The Equator is located at:",
  options: [
    "0° latitude",
    "90° North",
    "180° longitude",
    "23½° South"
  ],
  answer: "0° latitude"
},
{
  question: "The Prime Meridian is located at:",
  options: [
    "0° longitude",
    "90° latitude",
    "180° latitude",
    "23½° North"
  ],
  answer: "0° longitude"
},{
  question: "Climate change refers to:",
  options: [
    "Daily weather forecast",
    "Movement of rivers",
    "Long-term changes in global weather patterns",
    "Seasonal rainfall only"
  ],
  answer: "Long-term changes in global weather patterns"
},
{
  question: "Which gas is mainly responsible for global warming?",
  options: [
    "Nitrogen",
    "Carbon dioxide",
    "Hydrogen",
    "Oxygen"
  ],
  answer: "Carbon dioxide"
},
{
  question: "Which of these is an effect of climate change?",
  options: [
    "Smaller oceans",
    "Lower mountain heights",
    "Rising sea levels",
    "More continents"
  ],
  answer: "Rising sea levels"
},
{
  question: "Which organization promotes environmental protection worldwide?",
  options: [
    "WHO",
    "FIFA",
    "UNEP",
    "OPEC"
  ],
  answer: "UNEP"
},
{
  question: "WWF is mainly concerned with:",
  options: [
    "International trade",
    "Conserving nature and wildlife",
    "Air transport",
    "Building roads"
  ],
  answer: "Conserving nature and wildlife"
},
{
  question: "GIS stands for:",
  options: [
    "General Information System",
    "Geographical Inspection Service",
    "Geographical Information System",
    "Global Internet Service"
  ],
  answer: "Geographical Information System"
},
{
  question: "Remote sensing is the collection of information about the Earth's surface:",
  options: [
    "Only by digging",
    "Without direct physical contact",
    "Only by ships",
    "Only by walking"
  ],
  answer: "Without direct physical contact"
},
{
  question: "Which device is commonly used for GPS navigation?",
  options: [
    "Thermometer",
    "Satellite receiver",
    "Barometer",
    "Microscope"
  ],
  answer: "Satellite receiver"
},
{
  question: "Which of these is an application of GIS?",
  options: [
    "Carpentry",
    "Urban planning",
    "Cooking",
    "Tailoring"
  ],
  answer: "Urban planning"
},
{
  question: "Which of these is an advantage of GIS?",
  options: [
    "Reduces map quality",
    "Destroys forests",
    "High accuracy in mapping",
    "Causes pollution"
  ],
  answer: "High accuracy in mapping"
},
{
  question: "The Pacific Ocean is the:",
  options: [
    "Smallest ocean",
    "Coldest ocean",
    "Largest ocean",
    "Shallowest ocean"
  ],
  answer: "Largest ocean"
},
{
  question: "Mount Everest is the world's:",
  options: [
    "Largest volcano",
    "Highest mountain above sea level",
    "Deepest valley",
    "Longest river"
  ],
  answer: "Highest mountain above sea level"
},
{
  question: "The Sahara is the world's largest:",
  options: [
    "Ocean",
    "Hot desert",
    "Rainforest",
    "Mountain range"
  ],
  answer: "Hot desert"
},
{
  question: "Which line divides the Earth into the Eastern and Western Hemispheres?",
  options: [
    "International Date Line",
    "Prime Meridian",
    "Equator",
    "Tropic of Cancer"
  ],
  answer: "Prime Meridian"
},
{
  question: "How long does the Earth take to rotate once on its axis?",
  options: [
    "365 days",
    "12 hours",
    "24 hours",
    "30 days"
  ],
  answer: "24 hours"
},
{
  question: "How long does the Earth take to revolve around the Sun?",
  options: [
    "24 hours",
    "100 days",
    "About 365¼ days",
    "30 days"
  ],
  answer: "About 365¼ days"
},
{
  question: "Which continent is the largest by area?",
  options: [
    "Europe",
    "North America",
    "Asia",
    "Africa"
  ],
  answer: "Asia"
},
{
  question: "Which country is the largest in the world by land area?",
  options: [
    "United States",
    "Russia",
    "China",
    "Canada"
  ],
  answer: "Russia"
},
{
  question: "The Equator is located at:",
  options: [
    "23½° South",
    "0° latitude",
    "180° longitude",
    "90° North"
  ],
  answer: "0° latitude"
},
{
  question: "The Prime Meridian is located at:",
  options: [
    "23½° North",
    "180° latitude",
    "0° longitude",
    "90° latitude"
  ],
  answer: "0° longitude"
},
{
  question: "Which of the following is the world's highest waterfall?",
  options: [
    "Victoria Falls",
    "Niagara Falls",
    "Angel Falls",
    "Kaieteur Falls"
  ],
  answer: "Angel Falls"
},
{
  question: "Victoria Falls is located between:",
  options: [
    "Kenya and Tanzania",
    "Zambia and Zimbabwe",
    "Nigeria and Cameroon",
    "South Africa and Botswana"
  ],
  answer: "Zambia and Zimbabwe"
},
{
  question: "Which mountain is located in Africa?",
  options: [
    "Mount Elbrus",
    "Mount Everest",
    "Mount Kilimanjaro",
    "Mount Denali"
  ],
  answer: "Mount Kilimanjaro"
},
{
  question: "Which mountain is found in Kenya?",
  options: [
    "Mount Kenya",
    "Mount Everest",
    "Mount Elbrus",
    "Mount Fuji"
  ],
  answer: "Mount Kenya"
},
{
  question: "Which river is found in South America?",
  options: [
    "Yangtze River",
    "Amazon River",
    "Congo River",
    "Nile River"
  ],
  answer: "Amazon River"
},
{
  question: "The Yangtze River is located in:",
  options: [
    "India",
    "Japan",
    "China",
    "Russia"
  ],
  answer: "China"
},
{
  question: "Which of the following is a major desert?",
  options: [
    "Amazon",
    "Sahara",
    "Congo Basin",
    "Great Plains"
  ],
  answer: "Sahara"
},
{
  question: "The Prairie grassland is mainly found in:",
  options: [
    "South America",
    "North America",
    "Asia",
    "Africa"
  ],
  answer: "North America"
},
{
  question: "The Pampas grassland is found in:",
  options: [
    "South America",
    "Australia",
    "Europe",
    "Africa"
  ],
  answer: "South America"
},
{
  question: "The Veld grassland is mainly found in:",
  options: [
    "South Africa",
    "India",
    "China",
    "Canada"
  ],
  answer: "South Africa"
},
{
  question: "Approximately what percentage of the Earth's surface is covered by water?",
  options: [
    "29%",
    "50%",
    "71%",
    "90%"
  ],
  answer: "71%"
},
{
  question: "Approximately what percentage of the Earth's surface is land?",
  options: [
    "29%",
    "40%",
    "50%",
    "71%"
  ],
  answer: "29%"
},
{
  question: "The Earth revolves around the Sun in about:",
  options: [
    "30 days",
    "365¼ days",
    "24 hours",
    "12 months exactly"
  ],
  answer: "365¼ days"
},
{
  question: "Which imaginary line divides the Earth into the Northern and Southern Hemispheres?",
  options: [
    "Prime Meridian",
    "International Date Line",
    "Equator",
    "Arctic Circle"
  ],
  answer: "Equator"
},
{
  question: "Which imaginary line divides the Earth into the Eastern and Western Hemispheres?",
  options: [
    "Equator",
    "Prime Meridian",
    "Tropic of Capricorn",
    "Arctic Circle"
  ],
  answer: "Prime Meridian"
},
{
  question: "Which of these should students practice regularly to improve in Geography?",
  options: [
    "Map reading",
    "Typing speed",
    "Drawing cartoons",
    "Swimming"
  ],
  answer: "Map reading"
},
{
  question: "Which of the following is recommended for Geography examinations?",
  options: [
    "Ignore diagrams",
    "Revise regularly",
    "Avoid past questions",
    "Skip map work"
  ],
  answer: "Revise regularly"
},
{
  question: "One important way to prepare for WAEC, NECO, JAMB and NDA Geography is to:",
  options: [
    "Avoid Geography facts",
    "Practice past questions",
    "Study only one chapter",
    "Memorize answers without understanding"
  ],
  answer: "Practice past questions"
},
{
  question: "Which modern technology is commonly used for navigation?",
  options: [
    "GPS",
    "Abacus",
    "Typewriter",
    "Calculator"
  ],
  answer: "GPS"
},
{
  question: "Which modern technology is used to collect real-time images of the Earth's surface?",
  options: [
    "Satellite images",
    "Radio",
    "Television",
    "Compass"
  ],
  answer: "Satellite images"
},
{
  question: "Surveying is the science and art of:",
  options: [
    "Measuring land and determining positions on the Earth's surface",
    "Studying weather conditions",
    "Growing crops",
    "Predicting earthquakes"
  ],
  answer: "Measuring land and determining positions on the Earth's surface"
},
{
  question: "Which type of surveying ignores the Earth's curvature?",
  options: [
    "Hydrographic surveying",
    "Geodetic surveying",
    "Plane surveying",
    "Engineering surveying"
  ],
  answer: "Plane surveying"
},
{
  question: "Which type of surveying considers the Earth's curvature?",
  options: [
    "Plane surveying",
    "Engineering surveying",
    "Geodetic surveying",
    "Cadastral surveying"
  ],
  answer: "Geodetic surveying"
},
{
  question: "Cadastral surveying is mainly used for:",
  options: [
    "Determining property boundaries",
    "Studying oceans",
    "Weather forecasting",
    "Building airports"
  ],
  answer: "Determining property boundaries"
},
{
  question: "Which surveying instrument is used to determine direction and bearings?",
  options: [
    "Level",
    "Compass",
    "Chain",
    "Theodolite"
  ],
  answer: "Compass"
},
{
  question: "Which instrument measures horizontal and vertical angles?",
  options: [
    "GPS receiver",
    "Measuring tape",
    "Theodolite",
    "Level"
  ],
  answer: "Theodolite"
},
{
  question: "Which instrument is used to measure differences in height?",
  options: [
    "Compass",
    "Level",
    "Chain",
    "GPS receiver"
  ],
  answer: "Level"
},
{
  question: "A map is best defined as:",
  options: [
    "A scaled representation of the Earth's surface",
    "A photograph of a country",
    "A weather report",
    "A written description of a place"
  ],
  answer: "A scaled representation of the Earth's surface"
},
{
  question: "Which of these is an essential element of a good map?",
  options: [
    "North arrow",
    "Calculator",
    "Compass bearing table",
    "Weather chart"
  ],
  answer: "North arrow"
},
{
  question: "Which type of map shows natural features such as mountains and rivers?",
  options: [
    "Road map",
    "Political map",
    "Physical map",
    "Population map"
  ],
  answer: "Physical map"
},
{
  question: "Which map shows relief using contour lines?",
  options: [
    "Political map",
    "Road map",
    "Topographic map",
    "Weather map"
  ],
  answer: "Topographic map"
},
{
  question: "Which type of map shows countries, states and boundaries?",
  options: [
    "Physical map",
    "Political map",
    "Population map",
    "Road map"
  ],
  answer: "Political map"
},
{
  question: "One important use of maps is:",
  options: [
    "Navigation",
    "Food preservation",
    "Water purification",
    "Manufacturing cement"
  ],
  answer: "Navigation"
},
{
  question: "Which modern technology helps determine precise locations using satellites?",
  options: [
    "GPS receiver",
    "Barometer",
    "Rain gauge",
    "Thermometer"
  ],
  answer: "GPS receiver"
},
{
  question: "Which modern surveying instrument measures distance, angles and coordinates electronically?",
  options: [
    "Compass",
    "Chain",
    "Total Station",
    "Measuring tape"
  ],
  answer: "Total Station"
},
{
  question: "One application of surveying is:",
  options: [
    "Town and regional planning",
    "Cooking food",
    "Printing newspapers",
    "Making clothing"
  ],
  answer: "Town and regional planning"
},
{
  question: "Which of these is NOT a type of map mentioned in the lesson?",
  options: [
    "Weather map",
    "Political map",
    "Economic map",
    "Road map"
  ],
  answer: "Economic map"
},
{
  question: "Which map is mainly used to show transportation routes?",
  options: [
    "Population map",
    "Road map",
    "Physical map",
    "Weather map"
  ],
  answer: "Road map"
},
{
  question: "Which map element explains the symbols used on a map?",
  options: [
    "Scale",
    "Legend (Key)",
    "Title",
    "North arrow"
  ],
  answer: "Legend (Key)"
},
{
  question: "Which map element shows the relationship between map distance and actual ground distance?",
  options: [
    "Border",
    "Grid",
    "Scale",
    "Title"
  ],
  answer: "Scale"
},
{
  question: "Geographical Information System (GIS) is best defined as:",
  options: [
    "A computer-based system for collecting, storing and analyzing geographical data",
    "A method of weather forecasting",
    "A type of map projection",
    "A land surveying instrument"
  ],
  answer: "A computer-based system for collecting, storing and analyzing geographical data"
},
{
  question: "Which of the following is NOT a component of GIS?",
  options: [
    "Hardware",
    "People",
    "Volcanoes",
    "Software"
  ],
  answer: "Volcanoes"
},
{
  question: "Spatial data in GIS refers to:",
  options: [
    "Map or location data",
    "Financial records",
    "Historical events",
    "Population opinions"
  ],
  answer: "Map or location data"
},
{
  question: "Which GIS component includes procedures for processing geographical information?",
  options: [
    "Methods",
    "Hardware",
    "Data",
    "People"
  ],
  answer: "Methods"
},
{
  question: "One major function of GIS is:",
  options: [
    "Analyzing spatial relationships",
    "Producing electricity",
    "Manufacturing vehicles",
    "Generating rainfall"
  ],
  answer: "Analyzing spatial relationships"
},
{
  question: "GIS is commonly used in:",
  options: [
    "Disaster management",
    "Cooking",
    "Music production",
    "Textile weaving"
  ],
  answer: "Disaster management"
},
{
  question: "Remote sensing collects information about the Earth's surface by using:",
  options: [
    "Satellites and sensors",
    "Only measuring tapes",
    "Only compasses",
    "Only thermometers"
  ],
  answer: "Satellites and sensors"
},
{
  question: "Which of these is a type of remote sensing?",
  options: [
    "Satellite remote sensing",
    "Political sensing",
    "Economic sensing",
    "Manual sensing"
  ],
  answer: "Satellite remote sensing"
},
{
  question: "Aerial remote sensing mainly uses:",
  options: [
    "Aircraft or drones",
    "Ships",
    "Bicycles",
    "Motorcycles"
  ],
  answer: "Aircraft or drones"
},
{
  question: "Which of the following is an instrument used in remote sensing?",
  options: [
    "Radar system",
    "Abacus",
    "Calculator",
    "Microscope"
  ],
  answer: "Radar system"
},
{
  question: "One advantage of GIS and remote sensing is:",
  options: [
    "High level of accuracy",
    "High pollution",
    "Slow data collection",
    "Poor planning"
  ],
  answer: "High level of accuracy"
},
{
  question: "Which of these is a limitation of GIS?",
  options: [
    "Requires trained professionals",
    "Produces rainfall",
    "Reduces electricity use",
    "Eliminates maintenance"
  ],
  answer: "Requires trained professionals"
},
{
  question: "Cloud cover mainly affects:",
  options: [
    "Some satellite images",
    "GPS navigation",
    "Road construction",
    "Population census"
  ],
  answer: "Some satellite images"
},
{
  question: "Google Maps is an example of the use of:",
  options: [
    "GIS and GPS technology",
    "Weather balloons",
    "Mining equipment",
    "Industrial machines"
  ],
  answer: "GIS and GPS technology"
},
{
  question: "GIS helps governments mainly by:",
  options: [
    "Supporting planning and decision-making",
    "Creating earthquakes",
    "Reducing rainfall",
    "Producing crude oil"
  ],
  answer: "Supporting planning and decision-making"
},
{
  question: "Which of these is a use of GIS in everyday life?",
  options: [
    "Traffic management",
    "Making cement",
    "Harvesting fish",
    "Breeding livestock"
  ],
  answer: "Traffic management"
},
{
  question: "Which of the following is a component of GIS?",
  options: [
    "Software",
    "Volcano",
    "River basin",
    "Grassland"
  ],
  answer: "Software"
},
{
  question: "Which of these stores geographical information in GIS?",
  options: [
    "Data",
    "Rainfall",
    "Wind",
    "Sunlight"
  ],
  answer: "Data"
},
{
  question: "People involved in GIS include:",
  options: [
    "GIS specialists and surveyors",
    "Only doctors",
    "Only musicians",
    "Only athletes"
  ],
  answer: "GIS specialists and surveyors"
},
{
  question: "GIS combines maps with:",
  options: [
    "Data",
    "Music",
    "Stories",
    "Paintings"
  ],
  answer: "Data"
},
{
  question: "How many continents are there in the world?",
  options: [
    "6",
    "7",
    "5",
    "8"
  ],
  answer: "7"
},
{
  question: "Which continent is the largest by area?",
  options: [
    "Africa",
    "North America",
    "Asia",
    "Europe"
  ],
  answer: "Asia"
},
{
  question: "Which continent is the smallest?",
  options: [
    "Europe",
    "Australia (Oceania)",
    "Antarctica",
    "South America"
  ],
  answer: "Australia (Oceania)"
},
{
  question: "Which ocean is the largest in the world?",
  options: [
    "Atlantic Ocean",
    "Indian Ocean",
    "Pacific Ocean",
    "Arctic Ocean"
  ],
  answer: "Pacific Ocean"
},
{
  question: "Which ocean is the smallest?",
  options: [
    "Southern Ocean",
    "Arctic Ocean",
    "Atlantic Ocean",
    "Indian Ocean"
  ],
  answer: "Arctic Ocean"
},
{
  question: "Which is the world's largest country by area?",
  options: [
    "Canada",
    "China",
    "Russia",
    "United States"
  ],
  answer: "Russia"
},
{
  question: "Which country has the largest population according to the lesson?",
  options: [
    "China",
    "India",
    "United States",
    "Indonesia"
  ],
  answer: "India"
},
{
  question: "The Tropic of Cancer is located at:",
  options: [
    "66½°N",
    "23½°N",
    "0°",
    "23½°S"
  ],
  answer: "23½°N"
},
{
  question: "The Tropic of Capricorn is located at:",
  options: [
    "66½°S",
    "23½°S",
    "0°",
    "23½°N"
  ],
  answer: "23½°S"
},
{
  question: "The Arctic Circle is located at:",
  options: [
    "66½°N",
    "23½°N",
    "90°N",
    "0°"
  ],
  answer: "66½°N"
},
{
  question: "The Antarctic Circle is located at:",
  options: [
    "66½°S",
    "90°S",
    "23½°S",
    "0°"
  ],
  answer: "66½°S"
},
{
  question: "The International Date Line is approximately:",
  options: [
    "180° longitude",
    "90° longitude",
    "0° latitude",
    "45° longitude"
  ],
  answer: "180° longitude"
},
{
  question: "Which is one of the world's longest rivers?",
  options: [
    "Nile River",
    "Thames River",
    "River Niger",
    "River Benue"
  ],
  answer: "Nile River"
},
{
  question: "Which rainforest is the largest tropical rainforest in the world?",
  options: [
    "Congo Rainforest",
    "Amazon Rainforest",
    "Daintree Rainforest",
    "Sundarbans"
  ],
  answer: "Amazon Rainforest"
},
{
  question: "Which volcano is listed as the world's largest?",
  options: [
    "Mount Fuji",
    "Mauna Loa",
    "Mount Etna",
    "Krakatoa"
  ],
  answer: "Mauna Loa"
},
{
  question: "Which is the largest lake in the world?",
  options: [
    "Lake Victoria",
    "Lake Superior",
    "Caspian Sea",
    "Lake Tanganyika"
  ],
  answer: "Caspian Sea"
},
{
  question: "Which continent contains the Sahara Desert?",
  options: [
    "Asia",
    "Africa",
    "Australia",
    "South America"
  ],
  answer: "Africa"
},
{
  question: "Which mountain is the highest above sea level?",
  options: [
    "Mount Kilimanjaro",
    "Mount Everest",
    "Mount Kenya",
    "Mount Elbrus"
  ],
  answer: "Mount Everest"
},
{
  question: "About what percentage of the Earth's surface is land?",
  options: [
    "29%",
    "71%",
    "50%",
    "40%"
  ],
  answer: "29%"
},
{
  question: "About what percentage of the Earth's surface is covered by water?",
  options: [
    "50%",
    "29%",
    "71%",
    "80%"
  ],
  answer: "71%"
},
{
  question: "Geography helps governments to:",
  options: [
    "Plan development and manage resources",
    "Write novels",
    "Produce music",
    "Repair vehicles"
  ],
  answer: "Plan development and manage resources"
},
{
  question: "Which of the following is an application of Geography?",
  options: [
    "Urban planning",
    "Fashion designing",
    "Acting",
    "Singing"
  ],
  answer: "Urban planning"
},
{
  question: "Which branch of Geography helps in preparing for floods and earthquakes?",
  options: [
    "Disaster management",
    "Music education",
    "Tailoring",
    "Photography"
  ],
  answer: "Disaster management"
},
{
  question: "Which modern tool helps determine accurate locations anywhere on Earth?",
  options: [
    "GPS",
    "Calculator",
    "Thermometer",
    "Barometer"
  ],
  answer: "GPS"
},
{
  question: "GIS is mainly used to:",
  options: [
    "Collect, analyze and display geographical data",
    "Measure body temperature",
    "Predict examination results",
    "Repair computers"
  ],
  answer: "Collect, analyze and display geographical data"
},
{
  question: "Satellite images are mainly used to:",
  options: [
    "Provide real-time images of the Earth's surface",
    "Cook food",
    "Generate electricity",
    "Measure rainfall"
  ],
  answer: "Provide real-time images of the Earth's surface"
},
{
  question: "Drones are commonly used in Geography for:",
  options: [
    "Land surveying and mapping",
    "Fishing",
    "Mining coal",
    "Printing books"
  ],
  answer: "Land surveying and mapping"
},
{
  question: "A person who makes maps is called a:",
  options: [
    "Cartographer",
    "Geologist",
    "Meteorologist",
    "Surveyor"
  ],
  answer: "Cartographer"
},
{
  question: "A meteorologist studies:",
  options: [
    "Weather and climate",
    "Rocks only",
    "Plants only",
    "Animals only"
  ],
  answer: "Weather and climate"
},
{
  question: "Which career specializes in studying rocks and the Earth's crust?",
  options: [
    "Geologist",
    "Pilot",
    "Lawyer",
    "Teacher"
  ],
  answer: "Geologist"
},
{
  question: "Which profession plans towns and cities?",
  options: [
    "Urban and Regional Planner",
    "Farmer",
    "Mechanic",
    "Tailor"
  ],
  answer: "Urban and Regional Planner"
},
{
  question: "Which career uses GIS technology extensively?",
  options: [
    "GIS Specialist",
    "Chef",
    "Driver",
    "Journalist"
  ],
  answer: "GIS Specialist"
},
{
  question: "Geography promotes tourism by:",
  options: [
    "Identifying natural and cultural attractions",
    "Manufacturing vehicles",
    "Producing crude oil",
    "Building aircraft"
  ],
  answer: "Identifying natural and cultural attractions"
},
{
  question: "Geography helps businesses by:",
  options: [
    "Choosing suitable locations",
    "Writing novels",
    "Playing football",
    "Producing movies"
  ],
  answer: "Choosing suitable locations"
},
{
  question: "One study tip recommended in the lesson is to:",
  options: [
    "Practice map reading regularly",
    "Avoid diagrams",
    "Study only one topic",
    "Skip revision"
  ],
  answer: "Practice map reading regularly"
},
{
  question: "Students are advised to relate Geography concepts to:",
  options: [
    "Real-life situations",
    "Magic",
    "Dreams only",
    "Ancient myths"
  ],
  answer: "Real-life situations"
},
{
  question: "One importance of Geography is that it helps:",
  options: [
    "Predict and reduce natural disasters",
    "Increase earthquakes",
    "Stop rainfall permanently",
    "Create volcanoes"
  ],
  answer: "Predict and reduce natural disasters"
},
{
  question: "Which of the following is NOT listed as a Geography career?",
  options: [
    "Professional Footballer",
    "Surveyor",
    "Environmental Scientist",
    "Meteorologist"
  ],
  answer: "Professional Footballer"
},
{
  question: "Which profession is responsible for measuring land boundaries?",
  options: [
    "Surveyor",
    "Pilot",
    "Doctor",
    "Lawyer"
  ],
  answer: "Surveyor"
},
{
  question: "Geography encourages peaceful international cooperation through:",
  options: [
    "Better understanding of countries and cultures",
    "Increasing conflicts",
    "Closing borders",
    "Reducing communication"
  ],
  answer: "Better understanding of countries and cultures"
},
];
  
let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 15 * 60;
let timerId;

const SUBJECT = "GEOGRAPHY";

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
  