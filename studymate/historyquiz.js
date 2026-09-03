// ======================================
// StudyMate History quiz.
// ======================================

const allQuestions = [
  
  {
  question: "History is best defined as the study of",
  options: [
    "Future events",
    "Past events based on evidence",
    "Scientific discoveries only",
    "Government policies only"
  ],
  answer: "Past events based on evidence"
},
{
  question: "Which of the following is a primary source of history?",
  options: [
    "A history textbook",
    "A newspaper summary",
    "An ancient handwritten letter",
    "An encyclopedia"
  ],
  answer: "An ancient handwritten letter"
},
{
  question: "The study of past events helps us to",
  options: [
    "Understand the present and prepare for the future",
    "Predict lottery numbers",
    "Avoid scientific discoveries",
    "Ignore human development"
  ],
  answer: "Understand the present and prepare for the future"
},
{
  question: "Which ancient civilization built the Great Pyramids of Giza?",
  options: [
    "Ancient Egypt",
    "Ancient Rome",
    "Ancient Greece",
    "Ancient China"
  ],
  answer: "Ancient Egypt"
},
{
  question: "The earliest known writing system in Mesopotamia was",
  options: [
    "Latin",
    "Hieroglyphics",
    "Cuneiform",
    "Greek Alphabet"
  ],
  answer: "Cuneiform"
},
{
  question: "Ancient Greece is widely recognized as the birthplace of",
  options: [
    "Democracy",
    "Feudalism",
    "Communism",
    "Imperialism"
  ],
  answer: "Democracy"
},
{
  question: "Which city-state was famous for philosophy and democracy in Ancient Greece?",
  options: [
    "Rome",
    "Athens",
    "Sparta",
    "Alexandria"
  ],
  answer: "Athens"
},
{
  question: "The Roman Empire was especially known for its",
  options: [
    "Roads and legal system",
    "Pyramids",
    "Silk production",
    "Printing press"
  ],
  answer: "Roads and legal system"
},
{
  question: "The Medieval Period is also known as the",
  options: [
    "Stone Age",
    "Bronze Age",
    "Middle Ages",
    "Modern Age"
  ],
  answer: "Middle Ages"
},
{
  question: "The Renaissance first began in",
  options: [
    "Italy",
    "France",
    "Germany",
    "Spain"
  ],
  answer: "Italy"
},
{
  question: "The Renaissance encouraged the revival of",
  options: [
    "Ancient Greek and Roman learning",
    "Nuclear science",
    "Industrial machines",
    "Space exploration"
  ],
  answer: "Ancient Greek and Roman learning"
},
{
  question: "Which event marked the beginning of the Industrial Revolution?",
  options: [
    "The invention of the steam engine and factory system",
    "The discovery of America",
    "The fall of Rome",
    "The Cold War"
  ],
  answer: "The invention of the steam engine and factory system"
},
{
  question: "The Industrial Revolution first started in",
  options: [
    "Britain",
    "Russia",
    "Japan",
    "Canada"
  ],
  answer: "Britain"
},
{
  question: "Imperialism refers to",
  options: [
    "One country's domination over another",
    "Peaceful cooperation among nations",
    "Religious freedom",
    "International sports competitions"
  ],
  answer: "One country's domination over another"
},
{
  question: "The immediate cause of World War I was the assassination of",
  options: [
    "Napoleon Bonaparte",
    "Archduke Franz Ferdinand",
    "Adolf Hitler",
    "Otto von Bismarck"
  ],
  answer: "Archduke Franz Ferdinand"
},
{
  question: "World War II ended in",
  options: [
    "1943",
    "1944",
    "1945",
    "1946"
  ],
  answer: "1945"
},
{
  question: "The Cold War was mainly a rivalry between",
  options: [
    "Britain and France",
    "China and Japan",
    "The United States and the Soviet Union",
    "Germany and Italy"
  ],
  answer: "The United States and the Soviet Union"
},
{
  question: "The United Nations was established in",
  options: [
    "1919",
    "1939",
    "1945",
    "1955"
  ],
  answer: "1945"
},
{
  question: "The main purpose of the United Nations is to",
  options: [
    "Promote international peace and cooperation",
    "Control world trade",
    "Rule independent countries",
    "Collect international taxes"
  ],
  answer: "Promote international peace and cooperation"
},
{
  question: "Decolonization refers to the process by which",
  options: [
    "Countries gain independence from colonial rule",
    "Countries increase taxation",
    "Empires expand their territories",
    "People migrate to cities"
  ],
  answer: "Countries gain independence from colonial rule"
},
{
  question: "Human rights are best described as",
  options: [
    "Privileges given only to government officials",
    "Basic rights and freedoms belonging to every person",
    "Benefits enjoyed only by citizens of developed countries",
    "Laws made by traditional rulers"
  ],
  answer: "Basic rights and freedoms belonging to every person"
},
{
  question: "Which of the following is a fundamental human right?",
  options: [
    "Right to education",
    "Right to corruption",
    "Right to discrimination",
    "Right to oppress others"
  ],
  answer: "Right to education"
},
{
  question: "Democracy is a system of government in which",
  options: [
    "Only the military rules",
    "Power belongs to the people",
    "Only kings make laws",
    "Religious leaders control the government"
  ],
  answer: "Power belongs to the people"
},
{
  question: "One major feature of democracy is",
  options: [
    "Free and fair elections",
    "One-party dictatorship",
    "Military rule",
    "Absolute monarchy"
  ],
  answer: "Free and fair elections"
},
{
  question: "Globalization refers to the",
  options: [
    "Isolation of countries",
    "Increasing interaction and interdependence among countries",
    "Division of countries into smaller states",
    "End of international trade"
  ],
  answer: "Increasing interaction and interdependence among countries"
},
{
  question: "Which of the following has greatly promoted globalization?",
  options: [
    "The Internet",
    "Stone tools",
    "Horse carts",
    "Smoke signals"
  ],
  answer: "The Internet"
},
{
  question: "The African Union (AU) mainly promotes",
  options: [
    "Peace, unity and development in Africa",
    "Colonial rule",
    "Military dictatorship",
    "Religious conflicts"
  ],
  answer: "Peace, unity and development in Africa"
},
{
  question: "The headquarters of the United Nations is located in",
  options: [
    "London",
    "Paris",
    "New York",
    "Geneva"
  ],
  answer: "New York"
},
{
  question: "Which international organization regulates global trade?",
  options: [
    "World Trade Organization (WTO)",
    "African Union (AU)",
    "UNESCO",
    "OPEC"
  ],
  answer: "World Trade Organization (WTO)"
},
{
  question: "The main purpose of the International Monetary Fund (IMF) is to",
  options: [
    "Promote global financial stability",
    "Organize sporting events",
    "Protect wildlife",
    "Build roads in every country"
  ],
  answer: "Promote global financial stability"
},
{
  question: "Climate change mainly results from",
  options: [
    "Greenhouse gas emissions",
    "Reading books",
    "Building schools",
    "Planting trees"
  ],
  answer: "Greenhouse gas emissions"
},
{
  question: "Which of the following contributes most to deforestation?",
  options: [
    "Tree planting",
    "Logging and land clearing",
    "Recycling",
    "Conservation"
  ],
  answer: "Logging and land clearing"
},
{
  question: "The three Rs of waste management are",
  options: [
    "Reduce, Reuse and Recycle",
    "Read, Revise and Remember",
    "Repair, Remove and Replace",
    "Reduce, Repair and Recover"
  ],
  answer: "Reduce, Reuse and Recycle"
},
{
  question: "Sustainable development means",
  options: [
    "Using resources without considering the future",
    "Meeting present needs without harming future generations",
    "Stopping all development",
    "Using only non-renewable resources"
  ],
  answer: "Meeting present needs without harming future generations"
},
{
  question: "Technology is best defined as",
  options: [
    "The practical application of scientific knowledge",
    "The study of history",
    "The study of politics",
    "The study of religion"
  ],
  answer: "The practical application of scientific knowledge"
},
{
  question: "Artificial Intelligence (AI) enables computers to",
  options: [
    "Think and perform tasks requiring human intelligence",
    "Grow like plants",
    "Produce electricity naturally",
    "Replace all human beings completely"
  ],
  answer: "Think and perform tasks requiring human intelligence"
},
{
  question: "One important benefit of satellites is",
  options: [
    "Weather forecasting and communication",
    "Increasing air pollution",
    "Causing earthquakes",
    "Destroying forests"
  ],
  answer: "Weather forecasting and communication"
},
{
  question: "Negotiation is a method of conflict resolution that involves",
  options: [
    "Direct discussion between parties",
    "Using military force",
    "Ignoring the disagreement",
    "Economic sanctions only"
  ],
  answer: "Direct discussion between parties"
},
{
  question: "Peacekeeping operations are mainly carried out to",
  options: [
    "Maintain peace and protect civilians",
    "Start wars",
    "Expand empires",
    "Promote colonialism"
  ],
  answer: "Maintain peace and protect civilians"
},
{
  question: "Which of the following is the best way to promote lasting peace?",
  options: [
    "Dialogue, justice and cooperation",
    "Violence and revenge",
    "Discrimination",
    "Ignoring conflicts"
  ],
  answer: "Dialogue, justice and cooperation"
},
{
  question: "Which of the following best explains why historians study the past?",
  options: [
    "To understand present events and prepare for the future",
    "To predict the weather",
    "To discover new planets",
    "To replace scientific research"
  ],
  answer: "To understand present events and prepare for the future"
},
{
  question: "Which ancient civilization is often called the 'Cradle of Civilization'?",
  options: [
    "Ancient Egypt",
    "Mesopotamia",
    "Ancient Greece",
    "Ancient Rome"
  ],
  answer: "Mesopotamia"
},
{
  question: "Who is known as the 'Father of History'?",
  options: [
    "Plato",
    "Socrates",
    "Herodotus",
    "Aristotle"
  ],
  answer: "Herodotus"
},
{
  question: "The Olympic Games originated in",
  options: [
    "Ancient Rome",
    "Ancient Egypt",
    "Ancient Greece",
    "Persia"
  ],
  answer: "Ancient Greece"
},
{
  question: "Which language became the official language of the Roman Empire?",
  options: [
    "Greek",
    "Hebrew",
    "Latin",
    "Arabic"
  ],
  answer: "Latin"
},
{
  question: "Feudalism was a major feature of the",
  options: [
    "Renaissance",
    "Industrial Revolution",
    "Middle Ages",
    "Cold War"
  ],
  answer: "Middle Ages"
},
{
  question: "The invention of the printing press is associated with",
  options: [
    "Johannes Gutenberg",
    "Isaac Newton",
    "Christopher Columbus",
    "Galileo Galilei"
  ],
  answer: "Johannes Gutenberg"
},
{
  question: "Which event greatly encouraged European exploration in the 15th century?",
  options: [
    "The Renaissance",
    "The Cold War",
    "World War II",
    "The French Revolution"
  ],
  answer: "The Renaissance"
},
{
  question: "One major effect of the Industrial Revolution was",
  options: [
    "Decrease in factory production",
    "Growth of urban centres",
    "Reduction in trade",
    "End of inventions"
  ],
  answer: "Growth of urban centres"
},
{
  question: "Imperialism mainly involved",
  options: [
    "The peaceful sharing of resources",
    "Expansion of powerful nations over weaker territories",
    "Formation of sports organizations",
    "Promotion of democracy"
  ],
  answer: "Expansion of powerful nations over weaker territories"
},
{
  question: "The alliance between Britain, France and Russia during World War I was called the",
  options: [
    "Axis Powers",
    "Triple Entente",
    "Warsaw Pact",
    "League of Nations"
  ],
  answer: "Triple Entente"
},
{
  question: "Which event brought the United States into World War II?",
  options: [
    "The Berlin Blockade",
    "The Battle of Britain",
    "Attack on Pearl Harbor",
    "Treaty of Versailles"
  ],
  answer: "Attack on Pearl Harbor"
},
{
  question: "The Cold War ended with the collapse of the",
  options: [
    "Roman Empire",
    "Soviet Union",
    "British Empire",
    "League of Nations"
  ],
  answer: "Soviet Union"
},
{
  question: "The principal judicial organ of the United Nations is the",
  options: [
    "General Assembly",
    "Security Council",
    "International Court of Justice",
    "UNESCO"
  ],
  answer: "International Court of Justice"
},
{
  question: "A major objective of decolonization was to",
  options: [
    "Strengthen colonial rule",
    "Grant political independence to colonies",
    "Expand European empires",
    "Reduce international trade"
  ],
  answer: "Grant political independence to colonies"
},
{
  question: "Which document is regarded as a milestone in the protection of human rights worldwide?",
  options: [
    "Universal Declaration of Human Rights",
    "Treaty of Versailles",
    "Magna Carta",
    "Kyoto Protocol"
  ],
  answer: "Universal Declaration of Human Rights"
},
{
  question: "Globalization has been accelerated mainly by improvements in",
  options: [
    "Communication and transportation",
    "Agriculture alone",
    "Mining only",
    "Traditional festivals"
  ],
  answer: "Communication and transportation"
},
{
  question: "Which organization is responsible for promoting education, science and culture worldwide?",
  options: [
    "UNESCO",
    "NATO",
    "OPEC",
    "ECOWAS"
  ],
  answer: "UNESCO"
},
{
  question: "Which international agreement aims to reduce global warming?",
  options: [
    "Paris Agreement",
    "Treaty of Rome",
    "Yalta Agreement",
    "Treaty of Tordesillas"
  ],
  answer: "Paris Agreement"
},
{
  question: "One important contribution of modern science and technology to society is",
  options: [
    "Improved healthcare and communication",
    "Increase in illiteracy",
    "Reduction in education",
    "Elimination of trade"
  ],
  answer: "Improved healthcare and communication"
},
{
  question: "Which source would be most reliable to a historian studying an ancient kingdom?",
  options: [
    "A historical novel",
    "An archaeological artifact",
    "A social media post",
    "A fictional movie"
  ],
  answer: "An archaeological artifact"
},
{
  question: "The main purpose of archaeology is to",
  options: [
    "Predict future events",
    "Study human history through material remains",
    "Translate modern languages",
    "Study weather patterns"
  ],
  answer: "Study human history through material remains"
},
{
  question: "Which river played the greatest role in the development of Ancient Egyptian civilization?",
  options: [
    "River Congo",
    "River Niger",
    "River Nile",
    "River Thames"
  ],
  answer: "River Nile"
},
{
  question: "The Hanging Gardens were associated with the civilization of",
  options: [
    "Mesopotamia",
    "Ancient Greece",
    "Ancient Rome",
    "Ancient China"
  ],
  answer: "Mesopotamia"
},
{
  question: "Which Greek philosopher taught Alexander the Great?",
  options: [
    "Socrates",
    "Plato",
    "Aristotle",
    "Herodotus"
  ],
  answer: "Aristotle"
},
{
  question: "The Roman Republic was governed mainly by",
  options: [
    "An elected Senate and magistrates",
    "A military dictator",
    "Religious leaders only",
    "Foreign rulers"
  ],
  answer: "An elected Senate and magistrates"
},
{
  question: "During the Middle Ages, castles were mainly built for",
  options: [
    "Entertainment",
    "Defense and protection",
    "Sports competitions",
    "Scientific research"
  ],
  answer: "Defense and protection"
},
{
  question: "Which movement encouraged curiosity, creativity and renewed interest in classical learning?",
  options: [
    "The Cold War",
    "The Renaissance",
    "Imperialism",
    "Feudalism"
  ],
  answer: "The Renaissance"
},
{
  question: "Christopher Columbus is remembered for",
  options: [
    "Discovering Australia",
    "Reaching the Americas in 1492",
    "Inventing the compass",
    "Building the Suez Canal"
  ],
  answer: "Reaching the Americas in 1492"
},
{
  question: "Which invention greatly increased textile production during the Industrial Revolution?",
  options: [
    "Steam engine",
    "Printing press",
    "Compass",
    "Telephone"
  ],
  answer: "Steam engine"
},
{
  question: "A major reason European nations established colonies was to",
  options: [
    "Promote local independence",
    "Obtain raw materials and new markets",
    "Reduce international trade",
    "End industrial production"
  ],
  answer: "Obtain raw materials and new markets"
},
{
  question: "The Treaty of Versailles was signed after",
  options: [
    "World War II",
    "The Cold War",
    "World War I",
    "The Renaissance"
  ],
  answer: "World War I"
},
{
  question: "Which countries formed the major Axis Powers during World War II?",
  options: [
    "Britain, France and USA",
    "Germany, Italy and Japan",
    "USA, USSR and Britain",
    "China, India and Canada"
  ],
  answer: "Germany, Italy and Japan"
},
{
  question: "The Berlin Wall became a symbol of",
  options: [
    "The Renaissance",
    "The Industrial Revolution",
    "The Cold War",
    "The Roman Empire"
  ],
  answer: "The Cold War"
},
{
  question: "The Secretary-General is the chief administrative officer of the",
  options: [
    "African Union",
    "European Union",
    "United Nations",
    "Commonwealth"
  ],
  answer: "United Nations"
},
{
  question: "Many African countries gained independence mainly during the",
  options: [
    "15th Century",
    "18th Century",
    "Mid-20th Century",
    "21st Century"
  ],
  answer: "Mid-20th Century"
},
{
  question: "Freedom of expression is an example of a",
  options: [
    "Human right",
    "Trade agreement",
    "Military law",
    "Colonial policy"
  ],
  answer: "Human right"
},
{
  question: "Which of the following is a positive effect of globalization?",
  options: [
    "Improved international trade",
    "Complete loss of communication",
    "End of technological development",
    "Elimination of education"
  ],
  answer: "Improved international trade"
},
{
  question: "Which organization mainly promotes cooperation among West African countries?",
  options: [
    "NATO",
    "ECOWAS",
    "ASEAN",
    "OPEC"
  ],
  answer: "ECOWAS"
},
{
  question: "Planting more trees helps to reduce",
  options: [
    "Literacy",
    "Climate change",
    "Historical research",
    "Population growth"
  ],
  answer: "Climate change"
},
{
  question: "The scientific study of past human societies through excavation is known as",
  options: [
    "Archaeology",
    "Geography",
    "Anthropology",
    "Economics"
  ],
  answer: "Archaeology"
},
{
  question: "Which ancient civilization developed hieroglyphic writing?",
  options: [
    "Ancient Egypt",
    "Mesopotamia",
    "Ancient Greece",
    "Ancient Rome"
  ],
  answer: "Ancient Egypt"
},
{
  question: "Sparta was famous in Ancient Greece for its",
  options: [
    "Military strength",
    "Democratic government",
    "Large libraries",
    "Trading activities"
  ],
  answer: "Military strength"
},
{
  question: "The Roman Colosseum was mainly used for",
  options: [
    "Religious worship",
    "Public entertainment",
    "Government meetings",
    "Educational activities"
  ],
  answer: "Public entertainment"
},
{
  question: "The dominant religion in medieval Europe was",
  options: [
    "Christianity",
    "Islam",
    "Judaism",
    "Hinduism"
  ],
  answer: "Christianity"
},
{
  question: "Humanism was a major idea promoted during the",
  options: [
    "Industrial Revolution",
    "Renaissance",
    "Cold War",
    "First World War"
  ],
  answer: "Renaissance"
},
{
  question: "Vasco da Gama is remembered for",
  options: [
    "Discovering America",
    "Finding a sea route to India",
    "Inventing the steam engine",
    "Leading the French Revolution"
  ],
  answer: "Finding a sea route to India"
},
{
  question: "Which industry expanded rapidly during the Industrial Revolution?",
  options: [
    "Textile industry",
    "Film industry",
    "Tourism industry",
    "Aviation industry"
  ],
  answer: "Textile industry"
},
{
  question: "Colonialism often resulted in",
  options: [
    "Political domination of weaker territories",
    "Equal partnership among nations",
    "Complete independence for colonies",
    "The abolition of trade"
  ],
  answer: "Political domination of weaker territories"
},
{
  question: "Which event officially marked the end of World War I?",
  options: [
    "Signing of the Armistice in 1918",
    "Attack on Pearl Harbor",
    "The Battle of Britain",
    "The Berlin Blockade"
  ],
  answer: "Signing of the Armistice in 1918"
},
{
  question: "The Holocaust occurred during",
  options: [
    "The Cold War",
    "World War II",
    "The Renaissance",
    "The Industrial Revolution"
  ],
  answer: "World War II"
},
{
  question: "The Cold War was described as 'cold' because",
  options: [
    "It took place during winter",
    "There was no direct large-scale war between the two superpowers",
    "Only cold countries participated",
    "It involved only economic activities"
  ],
  answer: "There was no direct large-scale war between the two superpowers"
},
{
  question: "Which UN agency is responsible for children's welfare?",
  options: [
    "UNICEF",
    "WHO",
    "UNESCO",
    "FAO"
  ],
  answer: "UNICEF"
},
{
  question: "Kwame Nkrumah is best known for leading the independence movement of",
  options: [
    "Nigeria",
    "Kenya",
    "Ghana",
    "South Africa"
  ],
  answer: "Ghana"
},
{
  question: "The right to vote in democratic elections is known as",
  options: [
    "Political right",
    "Economic right",
    "Cultural right",
    "Religious right"
  ],
  answer: "Political right"
},
{
  question: "One disadvantage of globalization is",
  options: [
    "Rapid spread of diseases",
    "Improved communication",
    "Increased international trade",
    "Better access to information"
  ],
  answer: "Rapid spread of diseases"
},
{
  question: "Which of the following is NOT an international organization?",
  options: [
    "United Nations",
    "African Union",
    "ECOWAS",
    "Amazon River"
  ],
  answer: "Amazon River"
},
{
  question: "The destruction of forests on a large scale is called",
  options: [
    "Afforestation",
    "Deforestation",
    "Urbanization",
    "Industrialization"
  ],
  answer: "Deforestation"
},
{
  question: "Which modern technology allows computers to learn from data and make decisions?",
  options: [
    "Artificial Intelligence",
    "Steam Engine",
    "Compass",
    "Printing Press"
  ],
  answer: "Artificial Intelligence"
},
{
  question: "A peaceful method of resolving conflict is through",
  options: [
    "Negotiation",
    "Violence",
    "War",
    "Revenge"
  ],
  answer: "Negotiation"
},
{
  question: "Which of the following is considered a secondary source of history?",
  options: [
    "An autobiography",
    "A history textbook",
    "An ancient inscription",
    "An original government document"
  ],
  answer: "A history textbook"
},
{
  question: "The Code of Hammurabi was developed in",
  options: [
    "Ancient Egypt",
    "Babylon",
    "Ancient Rome",
    "Ancient China"
  ],
  answer: "Babylon"
},
{
  question: "Which ancient civilization invented paper?",
  options: [
    "Ancient Egypt",
    "Ancient China",
    "Ancient Greece",
    "Ancient Rome"
  ],
  answer: "Ancient China"
},
{
  question: "Socrates was a famous",
  options: [
    "Roman Emperor",
    "Greek philosopher",
    "Egyptian king",
    "Chinese inventor"
  ],
  answer: "Greek philosopher"
},
{
  question: "Julius Caesar was an important leader of",
  options: [
    "Ancient Greece",
    "Ancient Rome",
    "Ancient Egypt",
    "Persia"
  ],
  answer: "Ancient Rome"
},
{
  question: "Which event marked the end of the Western Roman Empire?",
  options: [
    "The fall of Rome in AD 476",
    "The Renaissance",
    "The French Revolution",
    "The Industrial Revolution"
  ],
  answer: "The fall of Rome in AD 476"
},
{
  question: "Knights were most closely associated with the",
  options: [
    "Industrial Revolution",
    "Middle Ages",
    "Cold War",
    "Ancient Greece"
  ],
  answer: "Middle Ages"
},
{
  question: "Leonardo da Vinci was famous as a",
  options: [
    "Military commander",
    "Scientist and artist",
    "Roman Emperor",
    "Greek philosopher"
  ],
  answer: "Scientist and artist"
},
{
  question: "Which invention greatly improved sea navigation during the Age of Exploration?",
  options: [
    "Compass",
    "Steam engine",
    "Printing press",
    "Telephone"
  ],
  answer: "Compass"
},
{
  question: "The Industrial Revolution led to the growth of",
  options: [
    "Nomadic lifestyles",
    "Urban centres",
    "Feudal kingdoms",
    "Small villages only"
  ],
  answer: "Urban centres"
},
{
  question: "Which European country controlled India for many years?",
  options: [
    "Britain",
    "Spain",
    "Portugal",
    "Belgium"
  ],
  answer: "Britain"
},
{
  question: "The League of Nations was created after",
  options: [
    "World War I",
    "World War II",
    "The Cold War",
    "The Renaissance"
  ],
  answer: "World War I"
},
{
  question: "The atomic bombs dropped during World War II were on",
  options: [
    "Tokyo and Kyoto",
    "Hiroshima and Nagasaki",
    "Berlin and Munich",
    "Seoul and Busan"
  ],
  answer: "Hiroshima and Nagasaki"
},
{
  question: "NATO was established mainly to",
  options: [
    "Promote military cooperation among Western countries",
    "Control world trade",
    "Protect wildlife",
    "Promote tourism"
  ],
  answer: "Promote military cooperation among Western countries"
},
{
  question: "Which African country became the first in sub-Saharan Africa to gain independence in 1957?",
  options: [
    "Nigeria",
    "Kenya",
    "Ghana",
    "South Africa"
  ],
  answer: "Ghana"
},
{
  question: "Freedom from discrimination is an example of",
  options: [
    "A human right",
    "A political party",
    "A trade agreement",
    "A military law"
  ],
  answer: "A human right"
},
{
  question: "One major driver of globalization is",
  options: [
    "Improved transportation",
    "Isolation of countries",
    "Reduction in communication",
    "Closure of borders"
  ],
  answer: "Improved transportation"
},
{
  question: "The headquarters of the African Union is located in",
  options: [
    "Nairobi",
    "Addis Ababa",
    "Lagos",
    "Cairo"
  ],
  answer: "Addis Ababa"
},
{
  question: "Which human activity contributes most to global warming?",
  options: [
    "Burning fossil fuels",
    "Planting trees",
    "Recycling waste",
    "Using bicycles"
  ],
  answer: "Burning fossil fuels"
},
{
  question: "Which method of conflict resolution involves a neutral third party helping disputing sides reach an agreement?",
  options: [
    "War",
    "Mediation",
    "Colonization",
    "Sanctions"
  ],
  answer: "Mediation"
},
{
  question: "Which method do historians use to determine the age of ancient objects?",
  options: [
    "Carbon dating",
    "Photosynthesis",
    "Evaporation",
    "Distillation"
  ],
  answer: "Carbon dating"
},
{
  question: "Which civilization is credited with developing one of the earliest systems of law known as the Code of Hammurabi?",
  options: [
    "Babylon",
    "Ancient Egypt",
    "Ancient Greece",
    "Ancient Rome"
  ],
  answer: "Babylon"
},
{
  question: "Which of the following was a major contribution of Ancient Egypt?",
  options: [
    "Democracy",
    "Pyramids and Hieroglyphics",
    "The Olympic Games",
    "Feudalism"
  ],
  answer: "Pyramids and Hieroglyphics"
},
{
  question: "Who wrote the famous epic poems 'The Iliad' and 'The Odyssey'?",
  options: [
    "Homer",
    "Plato",
    "Aristotle",
    "Socrates"
  ],
  answer: "Homer"
},
{
  question: "Which Roman structure carried water to cities?",
  options: [
    "Aqueduct",
    "Colosseum",
    "Forum",
    "Pantheon"
  ],
  answer: "Aqueduct"
},
{
  question: "During the Middle Ages, monasteries were important because they",
  options: [
    "Preserved knowledge and learning",
    "Produced steam engines",
    "Built pyramids",
    "Organized Olympic Games"
  ],
  answer: "Preserved knowledge and learning"
},
{
  question: "Which artist painted the Mona Lisa?",
  options: [
    "Leonardo da Vinci",
    "Michelangelo",
    "Raphael",
    "Donatello"
  ],
  answer: "Leonardo da Vinci"
},
{
  question: "Who was the first European explorer to reach India by sea from Europe?",
  options: [
    "Christopher Columbus",
    "Vasco da Gama",
    "Ferdinand Magellan",
    "James Cook"
  ],
  answer: "Vasco da Gama"
},
{
  question: "The spinning jenny was invented during the",
  options: [
    "Industrial Revolution",
    "Cold War",
    "Middle Ages",
    "Renaissance"
  ],
  answer: "Industrial Revolution"
},
{
  question: "Which European power colonized the Congo?",
  options: [
    "Belgium",
    "Britain",
    "France",
    "Portugal"
  ],
  answer: "Belgium"
},
{
  question: "Which event directly led Britain to declare war on Germany in 1914?",
  options: [
    "Germany invaded Belgium",
    "Germany attacked Pearl Harbor",
    "The Russian Revolution",
    "The Treaty of Versailles"
  ],
  answer: "Germany invaded Belgium"
},
{
  question: "Which conference divided Germany into occupation zones after World War II?",
  options: [
    "Yalta Conference",
    "Berlin Conference",
    "Paris Conference",
    "Bandung Conference"
  ],
  answer: "Yalta Conference"
},
{
  question: "The Cuban Missile Crisis occurred during the",
  options: [
    "First World War",
    "Second World War",
    "Cold War",
    "Industrial Revolution"
  ],
  answer: "Cold War"
},
{
  question: "Which organ of the United Nations elects the Secretary-General?",
  options: [
    "General Assembly on the recommendation of the Security Council",
    "International Court of Justice",
    "World Health Organization",
    "UNESCO"
  ],
  answer: "General Assembly on the recommendation of the Security Council"
},
{
  question: "Nelson Mandela is most closely associated with the struggle against",
  options: [
    "Apartheid",
    "Feudalism",
    "Imperialism in India",
    "The Cold War"
  ],
  answer: "Apartheid"
},
{
  question: "Which of the following is an economic right?",
  options: [
    "Right to work",
    "Right to vote",
    "Freedom of religion",
    "Freedom of speech"
  ],
  answer: "Right to work"
},
{
  question: "Which of the following is a negative effect of globalization?",
  options: [
    "Loss of some local cultures",
    "Improved international communication",
    "Greater access to information",
    "Expansion of global trade"
  ],
  answer: "Loss of some local cultures"
},
{
  question: "Which organization promotes cooperation among oil-exporting countries?",
  options: [
    "OPEC",
    "ECOWAS",
    "UNESCO",
    "WHO"
  ],
  answer: "OPEC"
},
{
  question: "Which gas is the largest contributor to the enhanced greenhouse effect?",
  options: [
    "Carbon dioxide",
    "Oxygen",
    "Nitrogen",
    "Hydrogen"
  ],
  answer: "Carbon dioxide"
},
{
  question: "Which principle is most important for achieving lasting peace after a conflict?",
  options: [
    "Reconciliation and justice",
    "Military occupation",
    "Economic sanctions only",
    "Political isolation"
  ],
  answer: "Reconciliation and justice"
},
{
  question: "Which branch of history studies human cultures through artifacts and remains?",
  options: [
    "Archaeology",
    "Geology",
    "Astronomy",
    "Meteorology"
  ],
  answer: "Archaeology"
},
{
  question: "The fertile land between the Tigris and Euphrates rivers was known as",
  options: [
    "Mesopotamia",
    "Nile Valley",
    "Indus Valley",
    "Yellow River Basin"
  ],
  answer: "Mesopotamia"
},
{
  question: "Which ancient civilization is credited with inventing the compass?",
  options: [
    "Ancient Rome",
    "Ancient Greece",
    "Ancient China",
    "Ancient Egypt"
  ],
  answer: "Ancient China"
},
{
  question: "Who was the teacher of Alexander the Great?",
  options: [
    "Plato",
    "Aristotle",
    "Socrates",
    "Homer"
  ],
  answer: "Aristotle"
},
{
  question: "The Roman Empire reached its greatest size under Emperor",
  options: [
    "Augustus",
    "Trajan",
    "Nero",
    "Constantine"
  ],
  answer: "Trajan"
},
{
  question: "Feudalism was based mainly on the exchange of",
  options: [
    "Money for goods",
    "Land for loyalty and military service",
    "Books for knowledge",
    "Gold for silver"
  ],
  answer: "Land for loyalty and military service"
},
{
  question: "The Renaissance encouraged the development of",
  options: [
    "Humanism",
    "Imperialism",
    "Colonialism",
    "Communism"
  ],
  answer: "Humanism"
},
{
  question: "Which explorer first reached the Americas in 1492?",
  options: [
    "Christopher Columbus",
    "Vasco da Gama",
    "Ferdinand Magellan",
    "James Cook"
  ],
  answer: "Christopher Columbus"
},
{
  question: "Which invention greatly improved transportation during the Industrial Revolution?",
  options: [
    "Steam locomotive",
    "Printing press",
    "Compass",
    "Telephone"
  ],
  answer: "Steam locomotive"
},
{
  question: "A major reason for European imperialism in Africa was to obtain",
  options: [
    "Raw materials",
    "Snow",
    "Volcanoes",
    "Earthquakes"
  ],
  answer: "Raw materials"
},
{
  question: "The alliance of Germany, Austria-Hungary and Italy before World War I was known as the",
  options: [
    "Triple Alliance",
    "Triple Entente",
    "Axis Powers",
    "Allied Powers"
  ],
  answer: "Triple Alliance"
},
{
  question: "Which country dropped atomic bombs on Japan in 1945?",
  options: [
    "Britain",
    "United States",
    "France",
    "Soviet Union"
  ],
  answer: "United States"
},
{
  question: "The Berlin Airlift was one of the major events of the",
  options: [
    "Industrial Revolution",
    "Cold War",
    "Renaissance",
    "First World War"
  ],
  answer: "Cold War"
},
{
  question: "The headquarters of the International Court of Justice is located in",
  options: [
    "The Hague",
    "New York",
    "London",
    "Geneva"
  ],
  answer: "The Hague"
},
{
  question: "Which African leader became the first President of independent Ghana?",
  options: [
    "Kwame Nkrumah",
    "Jomo Kenyatta",
    "Julius Nyerere",
    "Nelson Mandela"
  ],
  answer: "Kwame Nkrumah"
},
{
  question: "The right to freedom of religion is classified as",
  options: [
    "A fundamental human right",
    "An economic policy",
    "A colonial law",
    "A military regulation"
  ],
  answer: "A fundamental human right"
},
{
  question: "One advantage of globalization is",
  options: [
    "Greater international cooperation",
    "Complete cultural isolation",
    "Reduction in communication",
    "End of world trade"
  ],
  answer: "Greater international cooperation"
},
{
  question: "Which organization is responsible for improving global public health?",
  options: [
    "WHO",
    "UNESCO",
    "ECOWAS",
    "OPEC"
  ],
  answer: "WHO"
},
{
  question: "Which of the following is a renewable source of energy?",
  options: [
    "Coal",
    "Solar energy",
    "Petroleum",
    "Natural gas"
  ],
  answer: "Solar energy"
},
{
  question: "The peaceful settlement of disputes through discussion between opposing parties is called",
  options: [
    "Negotiation",
    "Colonization",
    "Sanction",
    "Revolution"
  ],
  answer: "Negotiation"
},
{
  question: "History is important because it helps people to",
  options: [
    "Understand past events and make better future decisions",
    "Predict the weather accurately",
    "Invent new machines",
    "Study only modern politics"
  ],
  answer: "Understand past events and make better future decisions"
},
{
  question: "Which of the following is an example of an archaeological source of history?",
  options: [
    "Ancient pottery",
    "Television news",
    "Modern magazine",
    "Radio broadcast"
  ],
  answer: "Ancient pottery"
},
{
  question: "Ancient Egypt depended mainly on the River Nile for",
  options: [
    "Agriculture and transportation",
    "Building airplanes",
    "Mining petroleum",
    "Manufacturing computers"
  ],
  answer: "Agriculture and transportation"
},
{
  question: "The Olympic Games originated from",
  options: [
    "Ancient Rome",
    "Ancient Greece",
    "Ancient Egypt",
    "Mesopotamia"
  ],
  answer: "Ancient Greece"
},
{
  question: "Which of the following was a major contribution of Ancient Rome?",
  options: [
    "Roman law",
    "Pyramids",
    "Hieroglyphics",
    "Cuneiform writing"
  ],
  answer: "Roman law"
},
{
  question: "The Middle Ages are often associated with",
  options: [
    "Feudalism",
    "Industrialization",
    "Globalization",
    "Space exploration"
  ],
  answer: "Feudalism"
},
{
  question: "The Renaissance encouraged people to focus on",
  options: [
    "Learning, art and scientific thinking",
    "Isolation from other societies",
    "Ending education",
    "Military dictatorship"
  ],
  answer: "Learning, art and scientific thinking"
},
{
  question: "One major result of the Age of Exploration was",
  options: [
    "Increased trade between continents",
    "The end of sea travel",
    "The collapse of all kingdoms",
    "The disappearance of maps"
  ],
  answer: "Increased trade between continents"
},
{
  question: "Factories became common during the",
  options: [
    "Industrial Revolution",
    "Middle Ages",
    "Ancient Period",
    "Cold War"
  ],
  answer: "Industrial Revolution"
},
{
  question: "One effect of colonialism in Africa was",
  options: [
    "Loss of political independence",
    "Immediate industrial development everywhere",
    "End of international trade",
    "Complete political freedom"
  ],
  answer: "Loss of political independence"
},
{
  question: "World War I began in",
  options: [
    "1914",
    "1918",
    "1939",
    "1945"
  ],
  answer: "1914"
},
{
  question: "The main aim of the League of Nations was to",
  options: [
    "Maintain world peace",
    "Promote colonialism",
    "Control world trade",
    "Expand empires"
  ],
  answer: "Maintain world peace"
},
{
  question: "World War II began in",
  options: [
    "1939",
    "1914",
    "1945",
    "1929"
  ],
  answer: "1939"
},
{
  question: "The Cold War was mainly a conflict of",
  options: [
    "Ideas and political systems",
    "Religious beliefs",
    "Ancient civilizations",
    "Agricultural practices"
  ],
  answer: "Ideas and political systems"
},
{
  question: "The United Nations was created mainly to",
  options: [
    "Promote peace and international cooperation",
    "Control all governments",
    "Expand colonial territories",
    "Collect taxes from countries"
  ],
  answer: "Promote peace and international cooperation"
},
{
  question: "Decolonization refers to",
  options: [
    "The process through which colonies gained independence",
    "The spread of imperialism",
    "The beginning of industrialization",
    "The formation of empires"
  ],
  answer: "The process through which colonies gained independence"
},
{
  question: "Democracy is strengthened when citizens",
  options: [
    "Participate in free and fair elections",
    "Ignore government policies",
    "Reject education",
    "Prevent others from voting"
  ],
  answer: "Participate in free and fair elections"
},
{
  question: "One positive effect of globalization is",
  options: [
    "Faster exchange of information",
    "Complete disappearance of cultures",
    "End of international communication",
    "Reduction in technology"
  ],
  answer: "Faster exchange of information"
},
{
  question: "Environmental pollution can be reduced by",
  options: [
    "Recycling and proper waste disposal",
    "Burning more forests",
    "Dumping waste into rivers",
    "Increasing oil spills"
  ],
  answer: "Recycling and proper waste disposal"
},
{
  question: "One important way to resolve conflicts peacefully is through",
  options: [
    "Dialogue and mediation",
    "Violence",
    "War",
    "Revenge"
  ],
  answer: "Dialogue and mediation"
},
{
  question: "Which of the following best describes history?",
  options: [
    "The study of future events",
    "The study of past human events based on evidence",
    "The study of living organisms",
    "The study of the Earth's atmosphere"
  ],
  answer: "The study of past human events based on evidence"
},
{
  question: "Which ancient civilization is famous for building the Parthenon?",
  options: [
    "Ancient Rome",
    "Ancient Egypt",
    "Ancient Greece",
    "Mesopotamia"
  ],
  answer: "Ancient Greece"
},
{
  question: "The Roman Empire made a lasting contribution to the world through its",
  options: [
    "Legal system",
    "Pyramids",
    "Paper making",
    "Silk production"
  ],
  answer: "Legal system"
},
{
  question: "The Renaissance is often described as a period of",
  options: [
    "Cultural and intellectual rebirth",
    "Global wars",
    "Colonial expansion",
    "Economic depression"
  ],
  answer: "Cultural and intellectual rebirth"
},
{
  question: "Which development greatly improved trade during the Age of Exploration?",
  options: [
    "Improved navigation and sea voyages",
    "Construction of railways",
    "Air transportation",
    "Space exploration"
  ],
  answer: "Improved navigation and sea voyages"
},
{
  question: "Which of the following was an important invention of the Industrial Revolution?",
  options: [
    "Steam engine",
    "Internet",
    "Mobile phone",
    "Television"
  ],
  answer: "Steam engine"
},
{
  question: "Imperialism mainly benefited the colonial powers by providing",
  options: [
    "Raw materials and markets",
    "Democratic governments",
    "Religious freedom",
    "Equal development for all colonies"
  ],
  answer: "Raw materials and markets"
},
{
  question: "Which event officially ended World War I?",
  options: [
    "Treaty of Versailles",
    "Formation of NATO",
    "The Cold War",
    "The Yalta Conference"
  ],
  answer: "Treaty of Versailles"
},
{
  question: "Which organization replaced the League of Nations after World War II?",
  options: [
    "United Nations",
    "African Union",
    "European Union",
    "ECOWAS"
  ],
  answer: "United Nations"
},
{
  question: "The Cold War mainly involved competition between",
  options: [
    "The United States and the Soviet Union",
    "Britain and France",
    "Germany and Italy",
    "China and Japan"
  ],
  answer: "The United States and the Soviet Union"
},
{
  question: "The main purpose of the United Nations Security Council is to",
  options: [
    "Maintain international peace and security",
    "Control world trade",
    "Promote tourism",
    "Manage international sports"
  ],
  answer: "Maintain international peace and security"
},
{
  question: "One important achievement of decolonization was",
  options: [
    "Political independence of colonies",
    "Expansion of colonial empires",
    "End of international organizations",
    "Reduction in world population"
  ],
  answer: "Political independence of colonies"
},
{
  question: "Which of the following is an important principle of democracy?",
  options: [
    "Rule of law",
    "Military dictatorship",
    "Absolute monarchy",
    "One-party rule only"
  ],
  answer: "Rule of law"
},
{
  question: "Globalization has made it easier for countries to",
  options: [
    "Exchange goods, services and information",
    "Avoid communication",
    "Prevent international travel",
    "End international trade"
  ],
  answer: "Exchange goods, services and information"
},
{
  question: "Which international organization promotes peace and unity among African countries?",
  options: [
    "African Union",
    "United Nations",
    "NATO",
    "WTO"
  ],
  answer: "African Union"
},
{
  question: "Which of the following is a major cause of environmental pollution?",
  options: [
    "Improper waste disposal",
    "Tree planting",
    "Recycling",
    "Environmental conservation"
  ],
 answer: "Improper waste disposal"
},
{
  question: "Science and technology have improved society mainly through",
  options: [
    "Advances in medicine, communication and transportation",
    "Reducing education",
    "Ending international trade",
    "Preventing industrial development"
  ],
  answer: "Advances in medicine, communication and transportation"
},
{
  question: "Peacebuilding aims to",
  options: [
    "Prevent future conflicts and promote lasting peace",
    "Increase military spending",
    "Promote violence",
    "Expand colonial territories"
  ],
  answer: "Prevent future conflicts and promote lasting peace"
},
{
  question: "Which method of conflict resolution involves both parties discussing their differences directly?",
  options: [
    "Negotiation",
    "War",
    "Boycott",
    "Rebellion"
  ],
  answer: "Negotiation"
},
{
  question: "The best way to learn from history is to",
  options: [
    "Study past events critically and apply the lessons learned",
    "Ignore historical evidence",
    "Memorize dates only",
    "Study only modern events"
  ],
  answer: "Study past events critically and apply the lessons learned"
},





];
let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 15 * 60;
let timerId;

const SUBJECT = "HISTORY";

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