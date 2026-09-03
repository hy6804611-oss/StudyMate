// ======================================
// StudyMate Biology quiz.
// ======================================

const allQuestions = [
  
  {
  question: "What is Biology?",
  options: [
    "The study of rocks",
    "The study of life",
    "The study of energy",
    "The study of the stars"
  ],
  answer: "The study of life"
},
{
  question: "The word Biology is derived from two Greek words meaning ______.",
  options: [
    "Life and science",
    "Life and study",
    "Body and study",
    "Nature and knowledge"
  ],
  answer: "Life and study"
},
{
  question: "Which of these is a branch of Biology?",
  options: [
    "Botany",
    "Geology",
    "Astronomy",
    "Meteorology"
  ],
  answer: "Botany"
},
{
  question: "What is the study of plants called?",
  options: [
    "Zoology",
    "Ecology",
    "Botany",
    "Genetics"
  ],
  answer: "Botany"
},
{
  question: "What is the study of animals called?",
  options: [
    "Anatomy",
    "Zoology",
    "Physiology",
    "Microbiology"
  ],
  answer: "Zoology"
},
{
  question: "What is the study of microorganisms called?",
  options: [
    "Ecology",
    "Microbiology",
    "Botany",
    "Taxonomy"
  ],
  answer: "Microbiology"
},
{
  question: "What is the study of heredity and variation called?",
  options: [
    "Genetics",
    "Physiology",
    "Ecology",
    "Anatomy"
  ],
  answer: "Genetics"
},
{
  question: "Which of the following is a characteristic of living things?",
  options: [
    "Movement",
    "Rusting",
    "Freezing",
    "Melting"
  ],
  answer: "Movement"
},
{
  question: "What does respiration do for living things?",
  options: [
    "Produces waste only",
    "Releases energy from food",
    "Stops growth",
    "Makes cells disappear"
  ],
  answer: "Releases energy from food"
},
{
  question: "What does sensitivity mean in living things?",
  options: [
    "Ability to respond to changes in the environment",
    "Ability to sleep",
    "Ability to move quickly",
    "Ability to make food"
  ],
  answer: "Ability to respond to changes in the environment"
},
{
  question: "What is growth?",
  options: [
    "A temporary increase in size",
    "Permanent increase in size and complexity",
    "Reduction in size",
    "Change in colour only"
  ],
  answer: "Permanent increase in size and complexity"
},
{
  question: "What is reproduction?",
  options: [
    "Removal of waste products",
    "Production of young ones of the same species",
    "Movement from place to place",
    "Taking in food"
  ],
  answer: "Production of young ones of the same species"
},
{
  question: "What is excretion?",
  options: [
    "Taking in food",
    "Removal of metabolic waste products",
    "Making new cells",
    "Breaking down food"
  ],
  answer: "Removal of metabolic waste products"
},
{
  question: "What is the basic unit of life called?",
  options: [
    "Tissue",
    "Organ",
    "Cell",
    "System"
  ],
  answer: "Cell"
},
{
  question: "Which of the following states that all living organisms are made of one or more cells?",
  options: [
    "Theory of Evolution",
    "Cell Theory",
    "Law of Gravity",
    "Atomic Theory"
  ],
  answer: "Cell Theory"
},
{
  question: "Which part of the cell controls its activities?",
  options: [
    "Cytoplasm",
    "Nucleus",
    "Vacuole",
    "Cell wall"
  ],
  answer: "Nucleus"
},
{
  question: "Which part of the cell is the site of respiration and energy production?",
  options: [
    "Ribosome",
    "Mitochondrion",
    "Chloroplast",
    "Cell membrane"
  ],
  answer: "Mitochondrion"
},
{
  question: "Which organelle is responsible for protein synthesis?",
  options: [
    "Ribosome",
    "Vacuole",
    "Nucleus",
    "Cell wall"
  ],
  answer: "Ribosome"
},
{
  question: "Which structure is found in plant cells but not in animal cells?",
  options: [
    "Cell membrane",
    "Cytoplasm",
    "Cell wall",
    "Nucleus"
  ],
  answer: "Cell wall"
},
{
  question: "Which structure contains chlorophyll in plant cells?",
  options: [
    "Mitochondrion",
    "Chloroplast",
    "Vacuole",
    "Ribosome"
  ],
  answer: "Chloroplast"
},
{
  question: "What is classification in Biology?",
  options: [
    "The study of cells",
    "The scientific arrangement of living organisms into groups",
    "The process of feeding",
    "The movement of organisms"
  ],
  answer: "The scientific arrangement of living organisms into groups"
},
{
  question: "What is taxonomy?",
  options: [
    "The study of fossils",
    "The branch of Biology that deals with identification, naming and classification of living organisms",
    "The study of plants only",
    "The study of body movement"
  ],
  answer: "The branch of Biology that deals with identification, naming and classification of living organisms"
},
{
  question: "Which of these is a taxonomic rank?",
  options: [
    "Species",
    "Cell",
    "Tissue",
    "Organ"
  ],
  answer: "Species"
},
{
  question: "What is the correct order of the taxonomic hierarchy from highest to lowest?",
  options: [
    "Kingdom, Phylum, Class, Order, Family, Genus, Species",
    "Species, Genus, Family, Order, Class, Phylum, Kingdom",
    "Kingdom, Class, Phylum, Order, Family, Genus, Species",
    "Phylum, Kingdom, Class, Order, Family, Genus, Species"
  ],
  answer: "Kingdom, Phylum, Class, Order, Family, Genus, Species"
},
{
  question: "Which mnemonic is used to remember the taxonomic hierarchy?",
  options: [
    "King Philip Came Over For Good Soup",
    "Pretty Cats Often Find Green Snakes",
    "Kind People Can Only Find Great School",
    "Keep Plants Close Or Find Green Seeds"
  ],
  answer: "King Philip Came Over For Good Soup"
},
{
  question: "Who introduced binomial nomenclature?",
  options: [
    "Charles Darwin",
    "Robert Whittaker",
    "Carolus Linnaeus",
    "Gregor Mendel"
  ],
  answer: "Carolus Linnaeus"
},
{
  question: "Binomial nomenclature uses how many names?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  answer: "Two"
},
{
  question: "What are the two names used in binomial nomenclature?",
  options: [
    "Family and order",
    "Genus and species",
    "Class and phylum",
    "Kingdom and genus"
  ],
  answer: "Genus and species"
},
{
  question: "Which of these is the scientific name of human beings?",
  options: [
    "Panthera leo",
    "Zea mays",
    "Homo sapiens",
    "Musca domestica"
  ],
  answer: "Homo sapiens"
},
{
  question: "Which of these is the scientific name of maize?",
  options: [
    "Mangifera indica",
    "Zea mays",
    "Homo sapiens",
    "Panthera leo"
  ],
  answer: "Zea mays"
},
{
  question: "Which of these is the scientific name of lion?",
  options: [
    "Musca domestica",
    "Panthera leo",
    "Zea mays",
    "Homo sapiens"
  ],
  answer: "Panthera leo"
},
{
  question: "Which kingdom consists of bacteria?",
  options: [
    "Protista",
    "Monera",
    "Fungi",
    "Animalia"
  ],
  answer: "Monera"
},
{
  question: "Which kingdom includes Amoeba and Paramecium?",
  options: [
    "Monera",
    "Protista",
    "Plantae",
    "Animalia"
  ],
  answer: "Protista"
},
{
  question: "Which kingdom includes mushrooms and yeast?",
  options: [
    "Fungi",
    "Plantae",
    "Monera",
    "Animalia"
  ],
  answer: "Fungi"
},
{
  question: "Which kingdom includes all green plants?",
  options: [
    "Animalia",
    "Protista",
    "Plantae",
    "Monera"
  ],
  answer: "Plantae"
},
{
  question: "Which kingdom includes all animals?",
  options: [
    "Animalia",
    "Fungi",
    "Monera",
    "Protista"
  ],
  answer: "Animalia"
},
{
  question: "What type of cell does Kingdom Monera have?",
  options: [
    "Prokaryotic",
    "Eukaryotic",
    "Multinucleate",
    "Plant cell"
  ],
  answer: "Prokaryotic"
},
{
  question: "Which kingdom is made up mostly of single-celled eukaryotes?",
  options: [
    "Monera",
    "Protista",
    "Fungi",
    "Plantae"
  ],
  answer: "Protista"
},
{
  question: "Which kingdom does not contain chlorophyll?",
  options: [
    "Fungi",
    "Plantae",
    "Protista",
    "Animalia"
  ],
  answer: "Fungi"
},
{
  question: "Which of these is an example of a living organism in Kingdom Plantae?",
  options: [
    "Bacteria",
    "Mango tree",
    "Amoeba",
    "Mushroom"
  ],
  answer: "Mango tree"
},
{
  question: "What is diffusion?",
  options: [
    "Movement of particles from a region of lower concentration to higher concentration",
    "Movement of particles from a region of higher concentration to lower concentration",
    "Movement of water only",
    "Movement of blood in the body"
  ],
  answer: "Movement of particles from a region of higher concentration to lower concentration"
},
{
  question: "What is osmosis?",
  options: [
    "Movement of water molecules through a selectively permeable membrane",
    "Movement of oxygen through blood vessels",
    "Movement of food from one organ to another",
    "Movement of waste out of the body by sweating"
  ],
  answer: "Movement of water molecules through a selectively permeable membrane"
},
{
  question: "What is active transport?",
  options: [
    "Movement of substances from lower to higher concentration using energy",
    "Movement of substances from higher to lower concentration without energy",
    "Movement of water only",
    "Movement of food by diffusion"
  ],
  answer: "Movement of substances from lower to higher concentration using energy"
},
{
  question: "Which process requires energy from the cell?",
  options: [
    "Diffusion",
    "Osmosis",
    "Active transport",
    "Evaporation"
  ],
  answer: "Active transport"
},
{
  question: "What is a selectively permeable membrane?",
  options: [
    "A membrane that allows all substances to pass through freely",
    "A membrane that allows certain substances to pass through while preventing others",
    "A membrane found only in the nucleus",
    "A membrane that produces food"
  ],
  answer: "A membrane that allows certain substances to pass through while preventing others"
},
{
  question: "What is a habitat?",
  options: [
    "A group of different species living together",
    "The natural place where an organism lives",
    "The study of living things",
    "A feeding relationship"
  ],
  answer: "The natural place where an organism lives"
},
{
  question: "What is a population?",
  options: [
    "A group of different species living together",
    "A group of organisms of the same species living in the same area",
    "All living and non-living things in an area",
    "A single organism"
  ],
  answer: "A group of organisms of the same species living in the same area"
},
{
  question: "What is a community?",
  options: [
    "A group of different populations living and interacting in the same habitat",
    "A group of organisms of the same species",
    "The physical environment only",
    "The place where a plant grows"
  ],
  answer: "A group of different populations living and interacting in the same habitat"
},
{
  question: "What is an ecosystem?",
  options: [
    "A group of only animals",
    "The interaction between living organisms and their non-living environment",
    "A place where only plants live",
    "A group of organisms of the same species"
  ],
  answer: "The interaction between living organisms and their non-living environment"
},
{
  question: "Which of these is a biotic component of an ecosystem?",
  options: [
    "Water",
    "Air",
    "Plants",
    "Sunlight"
  ],
  answer: "Plants"
},
{
  question: "Which of these is an abiotic component of an ecosystem?",
  options: [
    "Bacteria",
    "Sunlight",
    "Mushroom",
    "Grass"
  ],
  answer: "Sunlight"
},
{
  question: "What is a food chain?",
  options: [
    "A network of many feeding relationships",
    "A sequence showing how energy is transferred from one organism to another",
    "A list of animals in a habitat",
    "A place where food is stored"
  ],
  answer: "A sequence showing how energy is transferred from one organism to another"
},
{
  question: "What is a food web?",
  options: [
    "A single feeding line",
    "A network of interconnected food chains",
    "A list of plant parts",
    "A chain of water movement"
  ],
  answer: "A network of interconnected food chains"
},
{
  question: "What is the main product of photosynthesis?",
  options: [
    "Protein",
    "Glucose",
    "Urea",
    "Carbon dioxide"
  ],
  answer: "Glucose"
},
{
  question: "Which of these is required for photosynthesis?",
  options: [
    "Chlorophyll",
    "Urea",
    "Blood",
    "Bones"
  ],
  answer: "Chlorophyll"
},
{
  question: "Which mineral nutrient is needed for healthy leaf growth?",
  options: [
    "Potassium",
    "Nitrogen",
    "Calcium",
    "Phosphorus"
  ],
  answer: "Nitrogen"
},
{
  question: "Which mineral nutrient is needed for root development and seed formation?",
  options: [
    "Magnesium",
    "Phosphorus",
    "Nitrogen",
    "Iron"
  ],
  answer: "Phosphorus"
},
{
  question: "What is respiration?",
  options: [
    "The process of releasing energy from food in cells",
    "The process of making food in plants",
    "The process of removing urine from the body",
    "The process of carrying blood"
  ],
  answer: "The process of releasing energy from food in cells"
},
{
  question: "Which type of respiration takes place in the presence of oxygen?",
  options: [
    "Anaerobic respiration",
    "Aerobic respiration",
    "Gaseous respiration",
    "Internal respiration"
  ],
  answer: "Aerobic respiration"
},
{
  question: "Which respiratory organ do fish use?",
  options: [
    "Lungs",
    "Skin",
    "Gills",
    "Trachea"
  ],
  answer: "Gills"
},
{
  question: "Which organ transports water and mineral salts in plants?",
  options: [
    "Phloem",
    "Xylem",
    "Cambium",
    "Stomata"
  ],
  answer: "Xylem"
},
{
  question: "Which organ transports manufactured food in plants?",
  options: [
    "Phloem",
    "Xylem",
    "Root hair",
    "Leaf vein"
  ],
  answer: "Phloem"
},
{
  question: "Which blood vessel carries blood away from the heart?",
  options: [
    "Vein",
    "Artery",
    "Capillary",
    "Ventricle"
  ],
  answer: "Artery"
},
{
  question: "Which blood vessel carries blood towards the heart?",
  options: [
    "Artery",
    "Vein",
    "Capillary",
    "Aorta"
  ],
  answer: "Vein"
},
{
  question: "What is the main function of capillaries?",
  options: [
    "Pumping blood",
    "Exchange of materials",
    "Producing blood cells",
    "Carrying blood to the lungs only"
  ],
  answer: "Exchange of materials"
},
{
  question: "Which organ pumps blood throughout the body?",
  options: [
    "Lungs",
    "Heart",
    "Liver",
    "Kidney"
  ],
  answer: "Heart"
},
{
  question: "What is the main function of blood?",
  options: [
    "To digest food",
    "To transport materials around the body",
    "To produce hormones only",
    "To store oxygen in bones"
  ],
  answer: "To transport materials around the body"
},
{
  question: "Which type of respiration occurs without oxygen?",
  options: [
    "Aerobic respiration",
    "Anaerobic respiration",
    "Cellular respiration",
    "External respiration"
  ],
  answer: "Anaerobic respiration"
},
{
  question: "Which respiratory organ do human beings use?",
  options: [
    "Gills",
    "Lungs",
    "Skin",
    "Tracheae"
  ],
  answer: "Lungs"
},
{
  question: "Where does gaseous exchange take place in humans?",
  options: [
    "Bronchi",
    "Alveoli",
    "Nose",
    "Trachea"
  ],
  answer: "Alveoli"
},
{
  question: "Which organ removes urea from the blood?",
  options: [
    "Skin",
    "Lungs",
    "Kidneys",
    "Liver"
  ],
  answer: "Kidneys"
},
{
  question: "Which organ removes carbon dioxide from the body?",
  options: [
    "Kidneys",
    "Lungs",
    "Skin",
    "Bladder"
  ],
  answer: "Lungs"
},
{
  question: "What is excretion?",
  options: [
    "Removal of undigested food",
    "Removal of metabolic waste products",
    "Taking in food",
    "Movement of blood"
  ],
  answer: "Removal of metabolic waste products"
},
{
  question: "What is reproduction?",
  options: [
    "The production of new individuals of the same species",
    "The removal of waste",
    "The release of energy",
    "The movement of substances"
  ],
  answer: "The production of new individuals of the same species"
},
{
  question: "Which male reproductive organ produces sperm?",
  options: [
    "Testes",
    "Ovaries",
    "Uterus",
    "Vagina"
  ],
  answer: "Testes"
},
{
  question: "Which female reproductive organ produces ova?",
  options: [
    "Fallopian tubes",
    "Ovaries",
    "Uterus",
    "Cervix"
  ],
  answer: "Ovaries"
},
{
  question: "What is fertilization?",
  options: [
    "The growth of a baby in the womb",
    "The fusion of sperm and ovum",
    "The release of an ovum",
    "The division of chromosomes"
  ],
  answer: "The fusion of sperm and ovum"
},
{
  question: "What is heredity?",
  options: [
    "The passing of characteristics from parents to offspring",
    "The study of habitats",
    "The movement of food in the body",
    "The study of tissues"
  ],
  answer: "The passing of characteristics from parents to offspring"
},
{
  question: "What is variation?",
  options: [
    "The difference in characteristics among individuals of the same species",
    "The process of feeding",
    "The movement of blood",
    "The removal of waste"
  ],
  answer: "The difference in characteristics among individuals of the same species"
},
{
  question: "Which tissue covers body surfaces and lines organs?",
  options: [
    "Muscle tissue",
    "Connective tissue",
    "Epithelial tissue",
    "Nervous tissue"
  ],
  answer: "Epithelial tissue"
},
{
  question: "What is coordination?",
  options: [
    "The process of removing waste",
    "The process by which body parts work together to respond to changes",
    "The process of making food",
    "The process of producing offspring"
  ],
  answer: "The process by which body parts work together to respond to changes"
},
{
  question: "What is a stimulus?",
  options: [
    "A reaction by the body",
    "Any change in the environment that can be detected by an organism",
    "A type of tissue",
    "A waste product"
  ],
  answer: "Any change in the environment that can be detected by an organism"
},
{
  question: "What is a response?",
  options: [
    "A reaction of an organism to a stimulus",
    "A part of the brain",
    "A type of cell",
    "A food substance"
  ],
  answer: "A reaction of an organism to a stimulus"
},
{
  question: "Which organs make up the nervous system?",
  options: [
    "Heart, lungs and kidneys",
    "Brain, spinal cord and nerves",
    "Stomach, liver and intestines",
    "Bones, muscles and skin"
  ],
  answer: "Brain, spinal cord and nerves"
},
{
  question: "What does CNS stand for?",
  options: [
    "Central Nervous System",
    "Control Nerve System",
    "Common Nervous Structure",
    "Central Nerve Signal"
  ],
  answer: "Central Nervous System"
},
{
  question: "What does PNS stand for?",
  options: [
    "Peripheral Nervous System",
    "Primary Nervous Structure",
    "Peripheral Nerve Signal",
    "Protected Nervous System"
  ],
  answer: "Peripheral Nervous System"
},
{
  question: "Which part of the nervous system consists of the brain and spinal cord?",
  options: [
    "Peripheral nervous system",
    "Central nervous system",
    "Autonomic nervous system",
    "Somatic nervous system"
  ],
  answer: "Central nervous system"
},
{
  question: "Which organ is the control center of the nervous system?",
  options: [
    "Kidney",
    "Brain",
    "Heart",
    "Liver"
  ],
  answer: "Brain"
},
{
  question: "Which organ connects the brain to the rest of the body?",
  options: [
    "Spinal cord",
    "Liver",
    "Trachea",
    "Ureter"
  ],
  answer: "Spinal cord"
},
{
  question: "Which organ is responsible for sight?",
  options: [
    "Ear",
    "Nose",
    "Eye",
    "Tongue"
  ],
  answer: "Eye"
},
{
  question: "Which organ is responsible for hearing and balance?",
  options: [
    "Skin",
    "Ear",
    "Eye",
    "Nose"
  ],
  answer: "Ear"
},
{
  question: "Which organ is responsible for smell?",
  options: [
    "Nose",
    "Tongue",
    "Eye",
    "Ear"
  ],
  answer: "Nose"
},
{
  question: "What is a reflex action?",
  options: [
    "A slow voluntary action",
    "A rapid, automatic and involuntary response to a stimulus",
    "A type of digestion",
    "A form of growth"
  ],
  answer: "A rapid, automatic and involuntary response to a stimulus"
},
{
  question: "Which of these is an example of a reflex action?",
  options: [
    "Writing a letter",
    "Withdrawing the hand from a hot object",
    "Reading a book",
    "Choosing a game"
  ],
  answer: "Withdrawing the hand from a hot object"
},
{
  question: "What is a tissue?",
  options: [
    "A group of similar cells working together to perform a function",
    "A group of different organs",
    "A waste product",
    "A body fluid"
  ],
  answer: "A group of similar cells working together to perform a function"
},
{
  question: "Which tissue covers and protects body surfaces?",
  options: [
    "Muscle tissue",
    "Nervous tissue",
    "Epithelial tissue",
    "Connective tissue"
  ],
  answer: "Epithelial tissue"
},
{
  question: "Which tissue supports, binds and connects body parts?",
  options: [
    "Epithelial tissue",
    "Connective tissue",
    "Muscle tissue",
    "Nervous tissue"
  ],
  answer: "Connective tissue"
},
{
  question: "Which tissue is responsible for body movement?",
  options: [
    "Muscle tissue",
    "Nervous tissue",
    "Epithelial tissue",
    "Bone tissue"
  ],
  answer: "Muscle tissue"
},
{
  question: "Which tissue transmits nerve impulses?",
  options: [
    "Muscle tissue",
    "Epithelial tissue",
    "Nervous tissue",
    "Connective tissue"
  ],
  answer: "Nervous tissue"
},
{
  question: "What is an endoskeleton?",
  options: [
    "An external skeleton",
    "An internal skeleton",
    "A skeleton made of water",
    "A skeleton found only in plants"
  ],
  answer: "An internal skeleton"
},
{
  question: "What is coordination in living organisms?",
  options: [
    "The process by which different body parts work together to respond to changes",
    "The process of removing waste products",
    "The process of making food",
    "The process of storing water"
  ],
  answer: "The process by which different body parts work together to respond to changes"
},
{
  question: "What is a stimulus?",
  options: [
    "A reaction of the body",
    "A change in the environment that can be detected by an organism",
    "A type of tissue",
    "A chemical waste"
  ],
  answer: "A change in the environment that can be detected by an organism"
},
{
  question: "What is a response?",
  options: [
    "A reaction of an organism to a stimulus",
    "A part of the nervous system",
    "A kind of reproduction",
    "A form of nutrition"
  ],
  answer: "A reaction of an organism to a stimulus"
},
{
  question: "What organs make up the central nervous system?",
  options: [
    "Brain and spinal cord",
    "Heart and lungs",
    "Kidneys and liver",
    "Eyes and ears"
  ],
  answer: "Brain and spinal cord"
},
{
  question: "What does the peripheral nervous system consist of?",
  options: [
    "Brain and spinal cord only",
    "All the nerves outside the brain and spinal cord",
    "Only the sense organs",
    "Only the endocrine glands"
  ],
  answer: "All the nerves outside the brain and spinal cord"
},
{
  question: "What is a reflex action?",
  options: [
    "A slow action done by choice",
    "A rapid, automatic and involuntary response to a stimulus",
    "A movement caused by digestion",
    "A process of cell division"
  ],
  answer: "A rapid, automatic and involuntary response to a stimulus"
},
{
  question: "Which of these is an example of a reflex action?",
  options: [
    "Reading a book",
    "Withdrawing the hand from a hot object",
    "Writing a letter",
    "Solving a problem"
  ],
  answer: "Withdrawing the hand from a hot object"
},
{
  question: "Which sense organ is responsible for sight?",
  options: [
    "Ear",
    "Eye",
    "Nose",
    "Tongue"
  ],
  answer: "Eye"
},
{
  question: "Which sense organ is responsible for hearing and balance?",
  options: [
    "Skin",
    "Nose",
    "Ear",
    "Eye"
  ],
  answer: "Ear"
},
{
  question: "Which sense organ is responsible for smell?",
  options: [
    "Tongue",
    "Skin",
    "Nose",
    "Ear"
  ],
  answer: "Nose"
},
{
  question: "Which tissue covers and protects body surfaces?",
  options: [
    "Muscle tissue",
    "Connective tissue",
    "Epithelial tissue",
    "Nervous tissue"
  ],
  answer: "Epithelial tissue"
},
{
  question: "Which tissue supports, binds and connects body parts?",
  options: [
    "Connective tissue",
    "Epithelial tissue",
    "Muscle tissue",
    "Nervous tissue"
  ],
  answer: "Connective tissue"
},
{
  question: "Which tissue is responsible for body movement?",
  options: [
    "Nervous tissue",
    "Muscle tissue",
    "Epithelial tissue",
    "Bone tissue"
  ],
  answer: "Muscle tissue"
},
{
  question: "Which tissue transmits nerve impulses?",
  options: [
    "Connective tissue",
    "Epithelial tissue",
    "Muscle tissue",
    "Nervous tissue"
  ],
  answer: "Nervous tissue"
},
{
  question: "What is an endoskeleton?",
  options: [
    "An internal skeleton",
    "An external skeleton",
    "A fluid skeleton",
    "A plant support tissue"
  ],
  answer: "An internal skeleton"
},
{
  question: "What is an exoskeleton?",
  options: [
    "An internal skeleton",
    "A skeleton found only in plants",
    "An external skeleton",
    "A skeleton made of cartilage only"
  ],
  answer: "An external skeleton"
},
{
  question: "What is heredity?",
  options: [
    "The passing of characteristics from parents to offspring",
    "The process of feeding",
    "The movement of water in plants",
    "The removal of waste"
  ],
  answer: "The passing of characteristics from parents to offspring"
},
{
  question: "What is variation?",
  options: [
    "The difference in characteristics among individuals of the same species",
    "The production of offspring",
    "The movement of blood",
    "The release of energy"
  ],
  answer: "The difference in characteristics among individuals of the same species"
},
{
  question: "What are genes?",
  options: [
    "The organs of the body",
    "Units of heredity that determine inherited characteristics",
    "The bones of the body",
    "The blood vessels of plants"
  ],
  answer: "Units of heredity that determine inherited characteristics"
},
{
  question: "What are chromosomes?",
  options: [
    "Thread-like structures in the nucleus that carry genes",
    "Waste products of the cell",
    "A type of tissue",
    "The food vacuoles of plants"
  ],
  answer: "Thread-like structures in the nucleus that carry genes"
},
{
  question: "What is reproduction?",
  options: [
    "The process by which organisms produce new individuals of the same species",
    "The process of removing waste products",
    "The process of making food",
    "The process of moving substances in the body"
  ],
  answer: "The process by which organisms produce new individuals of the same species"
},
{
  question: "What is sexual reproduction?",
  options: [
    "Reproduction involving one parent only",
    "Reproduction involving the fusion of male and female gametes",
    "Reproduction in plants only",
    "Reproduction without offspring"
  ],
  answer: "Reproduction involving the fusion of male and female gametes"
},
{
  question: "What is asexual reproduction?",
  options: [
    "Reproduction involving two parents",
    "Reproduction involving one parent only",
    "Reproduction that always forms seeds",
    "Reproduction that always forms eggs"
  ],
  answer: "Reproduction involving one parent only"
},
{
  question: "What is fertilization?",
  options: [
    "The fusion of male and female gametes",
    "The division of a cell",
    "The production of waste",
    "The movement of blood"
  ],
  answer: "The fusion of male and female gametes"
},
{
  question: "Which male reproductive organ produces sperm cells?",
  options: [
    "Ovary",
    "Testes",
    "Uterus",
    "Vagina"
  ],
  answer: "Testes"
},
{
  question: "Which female reproductive organ produces ova?",
  options: [
    "Ovaries",
    "Testes",
    "Penis",
    "Scrotum"
  ],
  answer: "Ovaries"
},
{
  question: "What is excretion?",
  options: [
    "Removal of undigested food",
    "Removal of metabolic waste products",
    "Taking in food",
    "Breathing in air"
  ],
  answer: "Removal of metabolic waste products"
},
{
  question: "Which organ removes urea, excess water and mineral salts from the blood?",
  options: [
    "Liver",
    "Kidneys",
    "Lungs",
    "Skin"
  ],
  answer: "Kidneys"
},
{
  question: "Which organ removes carbon dioxide from the body?",
  options: [
    "Lungs",
    "Kidneys",
    "Stomach",
    "Heart"
  ],
  answer: "Lungs"
},
{
  question: "Which organ removes sweat containing water, salts and a small amount of urea?",
  options: [
    "Skin",
    "Brain",
    "Pancreas",
    "Bladder"
  ],
  answer: "Skin"
},
{
  question: "What is respiration?",
  options: [
    "The process of releasing energy from food in cells",
    "The process of removing urine",
    "The process of making food",
    "The process of producing offspring"
  ],
  answer: "The process of releasing energy from food in cells"
},
{
  question: "Which type of respiration takes place in the presence of oxygen?",
  options: [
    "Aerobic respiration",
    "Anaerobic respiration",
    "External respiration",
    "Internal respiration"
  ],
  answer: "Aerobic respiration"
},
{
  question: "Which type of respiration takes place in the absence of oxygen?",
  options: [
    "Aerobic respiration",
    "Anaerobic respiration",
    "Gaseous exchange",
    "Transpiration"
  ],
  answer: "Anaerobic respiration"
},
{
  question: "What is transport in living organisms?",
  options: [
    "Movement of materials from one part of an organism to another",
    "Removal of wastes only",
    "Production of food only",
    "Cell division"
  ],
  answer: "Movement of materials from one part of an organism to another"
},
{
  question: "Which tissue transports water and mineral salts in plants?",
  options: [
    "Phloem",
    "Xylem",
    "Cambium",
    "Epidermis"
  ],
  answer: "Xylem"
},
{
  question: "Which tissue transports manufactured food in plants?",
  options: [
    "Xylem",
    "Phloem",
    "Stomata",
    "Cortex"
  ],
  answer: "Phloem"
},
{
  question: "What is a habitat?",
  options: [
    "A group of different populations living together",
    "The natural place where an organism lives",
    "A feeding relationship",
    "A type of food chain"
  ],
  answer: "The natural place where an organism lives"
},
{
  question: "What is a food chain?",
  options: [
    "A sequence showing how energy is transferred from one organism to another",
    "A list of all animals in a habitat",
    "A place where food is stored",
    "A group of organisms of the same species"
  ],
  answer: "A sequence showing how energy is transferred from one organism to another"
},
{
  question: "What is a food web?",
  options: [
    "A single feeding sequence",
    "A network of interconnected food chains",
    "A type of habitat",
    "A breeding pattern"
  ],
  answer: "A network of interconnected food chains"
},
{
  question: "What is nutrition?",
  options: [
    "The process by which organisms obtain and use food",
    "The removal of waste products",
    "The movement of blood",
    "The response to stimuli"
  ],
  answer: "The process by which organisms obtain and use food"
},
{
  question: "Which of the following is an inherited characteristic?",
  options: [
    "Accent",
    "Blood group",
    "Scar",
    "Tanned skin from the sun"
  ],
  answer: "Blood group"
},
{
  question: "Which of these is a continuous variation?",
  options: [
    "Blood group",
    "Tongue rolling",
    "Height",
    "Sex"
  ],
  answer: "Height"
},
{
  question: "Which of these is a discontinuous variation?",
  options: [
    "Weight",
    "Skin colour",
    "Blood group",
    "Height"
  ],
  answer: "Blood group"
},
{
  question: "What are genes found on?",
  options: [
    "Ribosomes",
    "Chromosomes",
    "Cell walls",
    "Vacuoles"
  ],
  answer: "Chromosomes"
},
{
  question: "What carries hereditary information?",
  options: [
    "DNA",
    "Water",
    "Chlorophyll",
    "Urea"
  ],
  answer: "DNA"
},
{
  question: "What is a dominant trait?",
  options: [
    "A trait that is always hidden",
    "A trait that appears in the offspring when present",
    "A trait caused by disease",
    "A trait found only in plants"
  ],
  answer: "A trait that appears in the offspring when present"
},
{
  question: "What is a recessive trait?",
  options: [
    "A trait that is always visible",
    "A trait that is masked by a dominant trait",
    "A trait found only in animals",
    "A trait that never appears"
  ],
  answer: "A trait that is masked by a dominant trait"
},
{
  question: "Which type of reproduction involves fusion of gametes?",
  options: [
    "Asexual reproduction",
    "Sexual reproduction",
    "Binary fission",
    "Budding"
  ],
  answer: "Sexual reproduction"
},
{
  question: "Which type of reproduction involves one parent only?",
  options: [
    "Sexual reproduction",
    "Asexual reproduction",
    "Fertilization",
    "Pollination"
  ],
  answer: "Asexual reproduction"
},
{
  question: "What is the main advantage of asexual reproduction?",
  options: [
    "It produces no offspring",
    "It is rapid and needs only one parent",
    "It always creates variation",
    "It requires two gametes"
  ],
  answer: "It is rapid and needs only one parent"
},
{
  question: "What is the main advantage of sexual reproduction?",
  options: [
    "It creates genetic variation in offspring",
    "It needs no gametes",
    "It is always faster than asexual reproduction",
    "It happens only in bacteria"
  ],
  answer: "It creates genetic variation in offspring"
},
{
  question: "What is a zygote?",
  options: [
    "A male gamete",
    "A fertilized egg cell",
    "A waste product",
    "A body tissue"
  ],
  answer: "A fertilized egg cell"
},
{
  question: "Which organ is the usual site of fertilization in humans?",
  options: [
    "Uterus",
    "Fallopian tube",
    "Vagina",
    "Cervix"
  ],
  answer: "Fallopian tube"
},
{
  question: "Which organ is called the womb?",
  options: [
    "Vagina",
    "Uterus",
    "Ovary",
    "Scrotum"
  ],
  answer: "Uterus"
},
{
  question: "Which organ receives sperm during mating?",
  options: [
    "Vagina",
    "Ovary",
    "Uterus",
    "Fallopian tube"
  ],
  answer: "Vagina"
},
{
  question: "What is variation useful for?",
  options: [
    "Making all organisms identical",
    "Helping organisms adapt to changing environments",
    "Stopping reproduction",
    "Removing waste"
  ],
  answer: "Helping organisms adapt to changing environments"
},
{
  question: "Which of these is likely to be influenced by environmental factors?",
  options: [
    "Height",
    "Blood group",
    "Eye colour",
    "Sex"
  ],
  answer: "Height"
},
{
  question: "Which of these is a product of photosynthesis?",
  options: [
    "Glucose",
    "Urea",
    "Carbon dioxide",
    "Lactic acid"
  ],
  answer: "Glucose"
},
{
  question: "Which mineral is needed for chlorophyll formation?",
  options: [
    "Calcium",
    "Magnesium",
    "Sodium",
    "Phosphorus"
  ],
  answer: "Magnesium"
},
{
  question: "Which nutrient is mainly responsible for body building and repair?",
  options: [
    "Carbohydrates",
    "Fats and oils",
    "Proteins",
    "Vitamins"
  ],
  answer: "Proteins"
},
{
  question: "Which pigment gives plants their green colour?",
  options: ["Carotene", "Chlorophyll", "Xanthophyll", "Haemoglobin"],
  answer: "Chlorophyll"
},
{
  question: "Which gas is released during photosynthesis?",
  options: ["Nitrogen", "Carbon dioxide", "Oxygen", "Hydrogen"],
  answer: "Oxygen"
},
{
  question: "Which gas is used by plants during photosynthesis?",
  options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
  answer: "Carbon dioxide"
},
{
  question: "Where does photosynthesis take place?",
  options: ["Roots", "Leaves", "Stem", "Flowers"],
  answer: "Leaves"
},
{
  question: "Which blood group is called the universal donor?",
  options: ["A", "B", "AB", "O"],
  answer: "O"
},
{
  question: "Which blood group is called the universal recipient?",
  options: ["A", "B", "AB", "O"],
  answer: "AB"
},
{
  question: "Which chamber of the heart has the thickest wall?",
  options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
  answer: "Left ventricle"
},
{
  question: "The red pigment in blood is called ______.",
  options: ["Melanin", "Haemoglobin", "Chlorophyll", "Plasma"],
  answer: "Haemoglobin"
},
{
  question: "Which blood cells fight against diseases?",
  options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
  answer: "White blood cells"
},
{
  question: "Which blood component helps in clotting?",
  options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
  answer: "Platelets"
},
{
  question: "The liquid part of blood is called ______.",
  options: ["Serum", "Plasma", "Lymph", "Water"],
  answer: "Plasma"
},
{
  question: "Which vitamin helps in blood clotting?",
  options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
  answer: "Vitamin K"
},
{
  question: "Deficiency of Vitamin C causes ______.",
  options: ["Scurvy", "Rickets", "Night blindness", "Beriberi"],
  answer: "Scurvy"
},
{
  question: "Deficiency of Vitamin D causes ______.",
  options: ["Scurvy", "Kwashiorkor", "Rickets", "Goitre"],
  answer: "Rickets"
},
{
  question: "Deficiency of iodine causes ______.",
  options: ["Anaemia", "Goitre", "Scurvy", "Rickets"],
  answer: "Goitre"
},
{
  question: "The largest organ in the human body is the ______.",
  options: ["Liver", "Heart", "Skin", "Brain"],
  answer: "Skin"
},
{
  question: "The largest internal organ is the ______.",
  options: ["Heart", "Liver", "Kidney", "Lung"],
  answer: "Liver"
},
{
  question: "Which organ stores bile?",
  options: ["Pancreas", "Gall bladder", "Liver", "Kidney"],
  answer: "Gall bladder"
},
{
  question: "Bile is produced by the ______.",
  options: ["Kidney", "Pancreas", "Liver", "Stomach"],
  answer: "Liver"
},
{
  question: "Which organ produces insulin?",
  options: ["Liver", "Pancreas", "Kidney", "Stomach"],
  answer: "Pancreas"
},
{
  question: "Insulin helps regulate the level of ______ in the blood.",
  options: ["Protein", "Sugar", "Fat", "Water"],
  answer: "Sugar"
},
{
  question: "Which disease results from lack of insulin?",
  options: ["Hypertension", "Diabetes mellitus", "Asthma", "Malaria"],
  answer: "Diabetes mellitus"
},
{
  question: "The hardest substance in the human body is ______.",
  options: ["Bone", "Enamel", "Nail", "Cartilage"],
  answer: "Enamel"
},
{
  question: "How many pairs of ribs does a healthy adult have?",
  options: ["10", "11", "12", "13"],
  answer: "12"
},
{
  question: "The human vertebral column consists of ______ bones.",
  options: ["26", "28", "30", "33"],
  answer: "33"
},
{
  question: "Which joint is found at the shoulder?",
  options: ["Hinge joint", "Ball and socket joint", "Pivot joint", "Gliding joint"],
  answer: "Ball and socket joint"
},
{
  question: "Which joint is found at the elbow?",
  options: ["Ball and socket joint", "Hinge joint", "Pivot joint", "Suture"],
  answer: "Hinge joint"
},
{
  question: "The functional unit of the kidney is called ______.",
  options: ["Neuron", "Nephron", "Alveolus", "Glomerulus"],
  answer: "Nephron"
},
{
  question: "The smallest unit of life is the ______.",
  options: ["Atom", "Cell", "Organ", "Tissue"],
  answer: "Cell"
},
{
  question: "Which process results in the formation of identical daughter cells?",
  options: ["Meiosis", "Mitosis", "Fertilization", "Pollination"],
  answer: "Mitosis"
},
{
  question: "Which process produces gametes in animals?",
  options: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
  answer: "Meiosis"
},
{
  question: "How many chromosomes are found in a normal human body cell?",
  options: ["23", "46", "44", "48"],
  answer: "46"
},
{
  question: "How many chromosomes are found in a human sperm cell?",
  options: ["46", "44", "23", "22"],
  answer: "23"
},
{
  question: "The fusion of male and female gametes forms a ______.",
  options: ["Embryo", "Foetus", "Zygote", "Placenta"],
  answer: "Zygote"
},
{
  question: "Which part of a flower develops into the fruit after fertilization?",
  options: ["Petal", "Sepal", "Ovary", "Anther"],
  answer: "Ovary"
},
{
  question: "Which part of a flower develops into the seed?",
  options: ["Style", "Stigma", "Ovule", "Petal"],
  answer: "Ovule"
},
{
  question: "Pollination is the transfer of pollen grains from the ______.",
  options: [
    "Stigma to ovary",
    "Anther to stigma",
    "Petal to sepal",
    "Style to ovule"
  ],
  answer: "Anther to stigma"
},
{
  question: "Pollination between flowers on different plants of the same species is called ______.",
  options: [
    "Self-pollination",
    "Cross-pollination",
    "Artificial pollination",
    "Double fertilization"
  ],
  answer: "Cross-pollination"
},
{
  question: "Which agent of pollination is most common?",
  options: ["Wind", "Water", "Insects", "Birds"],
  answer: "Insects"
},
{
  question: "Which part of the flower produces pollen grains?",
  options: ["Stigma", "Anther", "Style", "Ovary"],
  answer: "Anther"
},
{
  question: "Which part of the flower receives pollen grains?",
  options: ["Petal", "Sepal", "Stigma", "Ovule"],
  answer: "Stigma"
},
{
  question: "The female reproductive part of a flower is the ______.",
  options: ["Stamen", "Pistil", "Petal", "Sepal"],
  answer: "Pistil"
},
{
  question: "The male reproductive part of a flower is the ______.",
  options: ["Pistil", "Stamen", "Style", "Ovary"],
  answer: "Stamen"
},
{
  question: "Which organ filters blood in the human body?",
  options: ["Heart", "Kidney", "Liver", "Lung"],
  answer: "Kidney"
},
{
  question: "Which organ produces bile?",
  options: ["Gall bladder", "Liver", "Pancreas", "Stomach"],
  answer: "Liver"
},
{
  question: "Which organ stores bile before it is released?",
  options: ["Kidney", "Gall bladder", "Pancreas", "Heart"],
  answer: "Gall bladder"
},
{
  question: "The largest gland in the human body is the ______.",
  options: ["Pancreas", "Liver", "Pituitary gland", "Thyroid gland"],
  answer: "Liver"
},
{
  question: "Which organ is responsible for pumping blood?",
  options: ["Lung", "Heart", "Kidney", "Brain"],
  answer: "Heart"
},
{
  question: "The normal body temperature of a healthy human is about ______.",
  options: ["35°C", "37°C", "39°C", "40°C"],
  answer: "37°C"
},
{
  question: "The powerhouse of the cell is the ______.",
  options: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi body"],
  answer: "Mitochondrion"
},
{
  question: "The jelly-like substance inside a cell is called ______.",
  options: ["Cell wall", "Cytoplasm", "Nucleus", "Vacuole"],
  answer: "Cytoplasm"
},
{
  question: "Which organelle contains the genetic material of the cell?",
  options: ["Nucleus", "Ribosome", "Mitochondrion", "Vacuole"],
  answer: "Nucleus"
},
{
  question: "Plants lose water vapour mainly through the ______.",
  options: ["Roots", "Stem", "Stomata", "Flowers"],
  answer: "Stomata"
},
{
  question: "The loss of water vapour from plant leaves is called ______.",
  options: ["Respiration", "Transpiration", "Photosynthesis", "Diffusion"],
  answer: "Transpiration"
},
{
  question: "Which tissue strengthens young plant stems?",
  options: ["Xylem", "Collenchyma", "Phloem", "Parenchyma"],
  answer: "Collenchyma"
},
{
  question: "Which tissue stores food in plants?",
  options: ["Parenchyma", "Xylem", "Phloem", "Sclerenchyma"],
  answer: "Parenchyma"
},
{
  question: "Plants respond to light by a process called ______.",
  options: ["Hydrotropism", "Phototropism", "Geotropism", "Thigmotropism"],
  answer: "Phototropism"
},
{
  question: "Growth of roots towards water is called ______.",
  options: ["Phototropism", "Hydrotropism", "Geotropism", "Chemotropism"],
  answer: "Hydrotropism"
},
{
  question: "Growth of roots downward due to gravity is called ______.",
  options: ["Phototropism", "Hydrotropism", "Positive geotropism", "Negative geotropism"],
  answer: "Positive geotropism"
},
{
  question: "The bending of plant tendrils around a support is an example of ______.",
  options: ["Phototropism", "Thigmotropism", "Hydrotropism", "Geotropism"],
  answer: "Thigmotropism"
},
{
  question: "Which vitamin helps in blood clotting?",
  options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
  answer: "Vitamin K"
},
{
  question: "Deficiency of Vitamin C causes ______.",
  options: ["Rickets", "Scurvy", "Night blindness", "Beriberi"],
  answer: "Scurvy"
},
{
  question: "Deficiency of Vitamin D causes ______.",
  options: ["Scurvy", "Rickets", "Kwashiorkor", "Anaemia"],
  answer: "Rickets"
},
{
  question: "Night blindness is caused by lack of ______.",
  options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
  answer: "Vitamin A"
},
{
  question: "Which mineral is needed for making haemoglobin?",
  options: ["Calcium", "Iron", "Iodine", "Phosphorus"],
  answer: "Iron"
},
{
  question: "Which blood cells fight against diseases?",
  options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
  answer: "White blood cells"
},
{
  question: "Which blood cells transport oxygen?",
  options: ["Platelets", "White blood cells", "Red blood cells", "Plasma"],
  answer: "Red blood cells"
},
{
  question: "Which part of the blood helps in clotting?",
  options: ["Plasma", "Platelets", "Red blood cells", "White blood cells"],
  answer: "Platelets"
},
{
  question: "Which blood group is known as the universal donor?",
  options: ["A", "B", "AB", "O"],
  answer: "O"
},
{
  question: "Which blood group is known as the universal recipient?",
  options: ["A", "B", "AB", "O"],
  answer: "AB"
},
{
  question: "Which chamber of the heart has the thickest wall?",
  options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
  answer: "Left ventricle"
},
{
  question: "The largest artery in the human body is the ______.",
  options: ["Pulmonary artery", "Aorta", "Vena cava", "Renal artery"],
  answer: "Aorta"
},
{
  question: "The largest vein in the human body is the ______.",
  options: ["Pulmonary vein", "Renal vein", "Vena cava", "Jugular vein"],
  answer: "Vena cava"
},
{
  question: "Which gas is released during photosynthesis?",
  options: ["Nitrogen", "Carbon dioxide", "Oxygen", "Hydrogen"],
  answer: "Oxygen"
},
{
  question: "Which gas is required for photosynthesis?",
  options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  answer: "Carbon dioxide"
},
{
  question: "The green pigment in plants is called ______.",
  options: ["Chloroplast", "Chlorophyll", "Cellulose", "Cytoplasm"],
  answer: "Chlorophyll"
},
{
  question: "Which part of the digestive system absorbs digested food?",
  options: ["Stomach", "Large intestine", "Small intestine", "Oesophagus"],
  answer: "Small intestine"
},
{
  question: "Where does digestion begin in humans?",
  options: ["Stomach", "Small intestine", "Mouth", "Large intestine"],
  answer: "Mouth"
},
{
  question: "Which organ produces insulin?",
  options: ["Liver", "Pancreas", "Kidney", "Heart"],
  answer: "Pancreas"
},
{
  question: "Diabetes mellitus is caused by insufficient production of ______.",
  options: ["Adrenaline", "Insulin", "Thyroxine", "Oestrogen"],
  answer: "Insulin"
},
{
  question: "The hormone thyroxine is produced by the ______ gland.",
  options: ["Pituitary", "Adrenal", "Thyroid", "Pancreas"],
  answer: "Thyroid"
},
{
  question: "Which gland is known as the master gland?",
  options: ["Thyroid", "Pituitary", "Pancreas", "Adrenal"],
  answer: "Pituitary"
},
{
  question: "The smallest unit of classification is ______.",
  options: ["Genus", "Species", "Family", "Kingdom"],
  answer: "Species"
},
{
  question: "Which kingdom includes bacteria?",
  options: ["Protista", "Monera", "Plantae", "Animalia"],
  answer: "Monera"
},
{
  question: "Which kingdom includes fungi such as mushrooms?",
  options: ["Monera", "Protista", "Fungi", "Animalia"],
  answer: "Fungi"
},
{
  question: "Which kingdom includes flowering plants?",
  options: ["Animalia", "Plantae", "Protista", "Monera"],
  answer: "Plantae"
},
{
  question: "Which kingdom includes all animals?",
  options: ["Animalia", "Fungi", "Monera", "Protista"],
  answer: "Animalia"
},
{
  question: "Who proposed the theory of evolution by natural selection?",
  options: ["Gregor Mendel", "Louis Pasteur", "Charles Darwin", "Carolus Linnaeus"],
  answer: "Charles Darwin"
},
{
  question: "The survival of organisms best adapted to their environment is called ______.",
  options: ["Mutation", "Natural selection", "Respiration", "Variation"],
  answer: "Natural selection"
},
{
  question: "Evolution is best defined as ______.",
  options: [
    "Increase in body size",
    "Gradual change in organisms over many generations",
    "Growth of a single organism",
    "Movement from one habitat to another"
  ],
  answer: "Gradual change in organisms over many generations"
},
];
let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 15 * 60;
let timerId;

const SUBJECT = "BIOLOGY";

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