// ======================================
// StudyMate Physics quiz.
// ======================================

const allQuestions = [
  

{
question: "Which of the following is a derived physical quantity?",
options: ["Mass", "Time", "Velocity", "Length"],
answer: "Velocity"
},

{
question: "A body travels 240 m in 30 seconds. Calculate its average speed.",
options: ["6 m/s", "8 m/s", "10 m/s", "12 m/s"],
answer: "8 m/s"
},

{
question: "Which instrument is used to measure atmospheric pressure?",
options: ["Thermometer", "Barometer", "Hydrometer", "Ammeter"],
answer: "Barometer"
},

{
question: "A car starts from rest and accelerates uniformly at 4 m/s² for 5 s. Calculate its final velocity.",
options: ["15 m/s", "18 m/s", "20 m/s", "25 m/s"],
answer: "20 m/s"
},

{
question: "The SI unit of electric current is:",
options: ["Volt", "Ampere", "Ohm", "Watt"],
answer: "Ampere"
},

{
question: "Which electromagnetic wave has the highest frequency?",
options: ["Radio waves", "Microwaves", "Ultraviolet rays", "Gamma rays"],
answer: "Gamma rays"
},

{
question: "A force of 60 N acts on a body of mass 12 kg. Calculate the acceleration produced.",
options: ["2 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
answer: "5 m/s²"
},

{
question: "Which of the following is a renewable source of energy?",
options: ["Coal", "Petroleum", "Solar energy", "Natural gas"],
answer: "Solar energy"
},

{
question: "The tendency of a body to resist change in its state of motion is called:",
options: ["Momentum", "Inertia", "Impulse", "Acceleration"],
answer: "Inertia"
},

{
question: "Calculate the density of a substance of mass 600 g and volume 200 cm³.",
options: ["2 g/cm³", "3 g/cm³", "4 g/cm³", "5 g/cm³"],
answer: "3 g/cm³"
},

{
question: "Which device converts mechanical energy into electrical energy?",
options: ["Transformer", "Electric motor", "Generator", "Battery"],
answer: "Generator"
},

{
question: "The image formed by a plane mirror is always:",
options: ["Real and inverted", "Virtual and upright", "Real and upright", "Magnified"],
answer: "Virtual and upright"
},

{
question: "Heat transfer through solids mainly occurs by:",
options: ["Radiation", "Convection", "Conduction", "Evaporation"],
answer: "Conduction"
},

{
question: "A resistor of 4 Ω carries a current of 3 A. Calculate the potential difference across it.",
options: ["7 V", "10 V", "12 V", "14 V"],
answer: "12 V"
},

{
question: "Which particle has no electrical charge?",
options: ["Electron", "Proton", "Neutron", "Positron"],
answer: "Neutron"
},

{
question: "The frequency of a wave is 25 Hz. Calculate its period.",
options: ["0.02 s", "0.04 s", "0.05 s", "0.08 s"],
answer: "0.04 s"
},

{
question: "Which gas law states that the pressure of a fixed mass of gas is inversely proportional to its volume at constant temperature?",
options: ["Charles' Law", "Boyle's Law", "Pressure Law", "Combined Gas Law"],
answer: "Boyle's Law"
},

{
question: "The force that opposes motion between two surfaces in contact is called:",
options: ["Gravity", "Friction", "Tension", "Upthrust"],
answer: "Friction"
},

{
question: "A machine has a mechanical advantage of 5 and an efficiency of 80%. Calculate its velocity ratio.",
options: ["4", "5", "6.25", "8"],
answer: "6.25"
},

{
question: "Radioactive decay is a:",
options: ["Chemical change", "Physical change", "Nuclear process", "Mechanical process"],
answer: "Nuclear process"
},
{
question: "Which of the following is a vector quantity?",
options: ["Mass", "Energy", "Force", "Temperature"],
answer: "Force"
},

{
question: "The SI unit of pressure is:",
options: ["Newton", "Joule", "Pascal", "Watt"],
answer: "Pascal"
},

{
question: "A body of mass 50 kg is lifted through a height of 10 m. (Take g = 10 m/s²). Calculate the potential energy gained.",
options: ["500 J", "2,500 J", "5,000 J", "10,000 J"],
answer: "5,000 J"
},

{
question: "Which colour of visible light has the longest wavelength?",
options: ["Violet", "Blue", "Green", "Red"],
answer: "Red"
},

{
question: "The property of a liquid responsible for floating objects is known as:",
options: ["Viscosity", "Surface tension", "Upthrust", "Density"],
answer: "Upthrust"
},

{
question: "An object moves with a constant velocity. Its acceleration is:",
options: ["1 m/s²", "5 m/s²", "10 m/s²", "0 m/s²"],
answer: "0 m/s²"
},

{
question: "The device used to detect electric current in a circuit is called:",
options: ["Galvanometer", "Hydrometer", "Voltmeter", "Thermometer"],
answer: "Galvanometer"
},

{
question: "Which of the following materials is a good electrical insulator?",
options: ["Copper", "Aluminium", "Rubber", "Silver"],
answer: "Rubber"
},

{
question: "The frequency of an electromagnetic wave is 6 × 10¹⁴ Hz. If the speed of light is 3 × 10⁸ m/s, calculate its wavelength.",
options: ["2 × 10⁻⁷ m", "5 × 10⁻⁷ m", "8 × 10⁻⁷ m", "1 × 10⁻⁶ m"],
answer: "5 × 10⁻⁷ m"
},

{
question: "Which law explains the operation of a transformer?",
options: ["Newton's Second Law", "Faraday's Law of Electromagnetic Induction", "Hooke's Law", "Ohm's Law"],
answer: "Faraday's Law of Electromagnetic Induction"
},

{
question: "A sound wave cannot travel through:",
options: ["Air", "Water", "Steel", "Vacuum"],
answer: "Vacuum"
},

{
question: "The image formed by a convex lens when the object is beyond 2F is:",
options: ["Virtual and enlarged", "Real, inverted and diminished", "Virtual and erect", "Real and same size"],
answer: "Real, inverted and diminished"
},

{
question: "The process by which heat is transferred through liquids and gases is called:",
options: ["Radiation", "Conduction", "Convection", "Reflection"],
answer: "Convection"
},

{
question: "Calculate the resistance of a conductor if a current of 4 A flows through it when connected to a 24 V supply.",
options: ["4 Ω", "5 Ω", "6 Ω", "8 Ω"],
answer: "6 Ω"
},

{
question: "Which semiconductor material is most commonly used in electronic devices?",
options: ["Iron", "Copper", "Silicon", "Aluminium"],
answer: "Silicon"
},

{
question: "The time taken for half the radioactive atoms in a sample to decay is known as:",
options: ["Decay period", "Life span", "Half-life", "Radiation period"],
answer: "Half-life"
},

{
question: "Which of the following is NOT a renewable source of energy?",
options: ["Wind", "Solar", "Coal", "Hydroelectric"],
answer: "Coal"
},

{
question: "A machine has an efficiency of 75%. If the input work is 800 J, calculate the useful output work.",
options: ["400 J", "500 J", "600 J", "700 J"],
answer: "600 J"
},

{
question: "The speed of radio waves in free space is approximately:",
options: ["3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁸ m/s", "3 × 10⁹ m/s"],
answer: "3 × 10⁸ m/s"
},

{
question: "A force of 40 N moves an object through a distance of 15 m. Calculate the work done.",
options: ["400 J", "500 J", "600 J", "700 J"],
answer: "600 J"
},
{
question: "Which of the following is a fundamental SI unit?",
options: ["Newton", "Joule", "Kilogram", "Pascal"],
answer: "Kilogram"
},

{
question: "A body travels 150 km in 3 hours. Calculate its average speed.",
options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
answer: "50 km/h"
},

{
question: "The tendency of a stretched material to regain its original shape after removing the applied force is called:",
options: ["Plasticity", "Elasticity", "Rigidity", "Density"],
answer: "Elasticity"
},

{
question: "A machine has a velocity ratio of 8 and a mechanical advantage of 6. Calculate its efficiency.",
options: ["60%", "70%", "75%", "80%"],
answer: "75%"
},

{
question: "The S.I. unit of power is:",
options: ["Joule", "Pascal", "Watt", "Newton"],
answer: "Watt"
},

{
question: "The quantity of heat required to raise the temperature of 1 kg of a substance by 1°C is known as:",
options: ["Latent Heat", "Specific Heat Capacity", "Heat Capacity", "Thermal Conductivity"],
answer: "Specific Heat Capacity"
},

{
question: "Which of the following gases is commonly used in electric bulbs?",
options: ["Hydrogen", "Nitrogen", "Argon", "Oxygen"],
answer: "Argon"
},

{
question: "A wave has a wavelength of 4 m and a frequency of 50 Hz. Calculate its speed.",
options: ["100 m/s", "150 m/s", "200 m/s", "250 m/s"],
answer: "200 m/s"
},

{
question: "The angle of incidence is equal to the angle of reflection according to:",
options: ["Snell's Law", "Ohm's Law", "Law of Reflection", "Newton's Law"],
answer: "Law of Reflection"
},

{
question: "Which of the following is an application of total internal reflection?",
options: ["Magnifying glass", "Optical fibre", "Plane mirror", "Convex mirror"],
answer: "Optical fibre"
},

{
question: "The resistance of a metallic conductor generally ______ as temperature increases.",
options: ["Decreases", "Remains constant", "Increases", "Becomes zero"],
answer: "Increases"
},

{
question: "Two resistors of 4 Ω and 6 Ω are connected in series. Calculate their total resistance.",
options: ["2 Ω", "10 Ω", "24 Ω", "12 Ω"],
answer: "10 Ω"
},

{
question: "Which of the following materials is magnetic?",
options: ["Copper", "Plastic", "Iron", "Glass"],
answer: "Iron"
},

{
question: "The splitting of white light into its component colours is called:",
options: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
answer: "Dispersion"
},

{
question: "An alpha particle is identical to the nucleus of a:",
options: ["Hydrogen atom", "Helium atom", "Carbon atom", "Oxygen atom"],
answer: "Helium atom"
},

{
question: "Which electronic component allows current to flow in only one direction?",
options: ["Resistor", "Capacitor", "Diode", "Transformer"],
answer: "Diode"
},

{
question: "A transformer has 500 turns in the primary coil and 100 turns in the secondary coil. If the primary voltage is 240 V, calculate the secondary voltage.",
options: ["24 V", "48 V", "60 V", "120 V"],
answer: "48 V"
},

{
question: "Which energy transformation occurs in an electric fan?",
options: ["Electrical to Chemical", "Electrical to Mechanical", "Mechanical to Electrical", "Chemical to Electrical"],
answer: "Electrical to Mechanical"
},

{
question: "The process by which unstable nuclei emit radiation spontaneously is called:",
options: ["Fusion", "Fission", "Radioactivity", "Electrolysis"],
answer: "Radioactivity"
},

{
question: "A communication satellite is mainly used to:",
options: ["Generate electricity", "Transmit communication signals", "Measure earthquakes", "Produce X-rays"],
answer: "Transmit communication signals"
},
{
question: "Which of the following is NOT a fundamental physical quantity?",
options: ["Length", "Mass", "Time", "Force"],
answer: "Force"
},

{
question: "A car increases its velocity from 10 m/s to 30 m/s in 5 seconds. Calculate its acceleration.",
options: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
answer: "4 m/s²"
},

{
question: "A body of mass 8 kg experiences an acceleration of 3 m/s². Calculate the force acting on it.",
options: ["11 N", "24 N", "32 N", "40 N"],
answer: "24 N"
},

{
question: "The energy possessed by a body due to its position is called:",
options: ["Kinetic Energy", "Potential Energy", "Mechanical Energy", "Heat Energy"],
answer: "Potential Energy"
},

{
question: "A force of 50 N is applied to move an object through a distance of 12 m. Calculate the work done.",
options: ["500 J", "550 J", "600 J", "650 J"],
answer: "600 J"
},

{
question: "The efficiency of a machine is always:",
options: ["Greater than 100%", "Equal to 100%", "Less than or equal to 100%", "Greater than its mechanical advantage"],
answer: "Less than or equal to 100%"
},

{
question: "The SI unit of pressure is equivalent to:",
options: ["N/m²", "kg/m³", "J/s", "Nm"],
answer: "N/m²"
},

{
question: "A substance has a density of 2,500 kg/m³. Calculate the mass of 0.4 m³ of the substance.",
options: ["625 kg", "800 kg", "1000 kg", "1200 kg"],
answer: "1000 kg"
},

{
question: "Which property of matter explains why bridges are provided with expansion joints?",
options: ["Elasticity", "Density", "Thermal Expansion", "Pressure"],
answer: "Thermal Expansion"
},

{
question: "The SI unit of specific heat capacity is:",
options: ["J/kg", "J/kg°C", "W/kg", "N/kg"],
answer: "J/kg°C"
},

{
question: "According to Charles' Law, the volume of a fixed mass of gas is directly proportional to its:",
options: ["Pressure", "Density", "Absolute Temperature", "Mass"],
answer: "Absolute Temperature"
},

{
question: "Which of the following waves can be polarized?",
options: ["Sound Waves", "Water Waves", "Electromagnetic Waves", "Seismic Waves"],
answer: "Electromagnetic Waves"
},

{
question: "The pitch of a sound depends on its:",
options: ["Amplitude", "Frequency", "Speed", "Intensity"],
answer: "Frequency"
},

{
question: "A concave mirror is commonly used as:",
options: ["Driving mirror", "Shaving mirror", "Periscope mirror", "Rear-view mirror"],
answer: "Shaving mirror"
},

{
question: "The refractive index of a medium is the ratio of:",
options: ["Speed of light in the medium to speed in vacuum", "Speed of light in vacuum to speed in the medium", "Angle of incidence to angle of refraction", "Frequency to wavelength"],
answer: "Speed of light in vacuum to speed in the medium"
},

{
question: "Calculate the current flowing through a 20 Ω resistor connected across a 240 V supply.",
options: ["10 A", "12 A", "15 A", "20 A"],
answer: "12 A"
},

{
question: "Which of the following is used to increase or decrease alternating voltage?",
options: ["Generator", "Transformer", "Motor", "Capacitor"],
answer: "Transformer"
},

{
question: "Which radioactive emission has the greatest ionizing power?",
options: ["Gamma rays", "Beta particles", "Alpha particles", "X-rays"],
answer: "Alpha particles"
},

{
question: "The main function of a transistor in an electronic circuit is to:",
options: ["Store charge", "Amplify or switch signals", "Generate electricity", "Measure current"],
answer: "Amplify or switch signals"
},

{
question: "Which of the following communication devices uses optical fibres for transmitting information?",
options: ["Radio", "Television", "Fibre-optic communication system", "Radar"],
answer: "Fibre-optic communication system"
},
{
question: "A displacement-time graph with a constant positive slope represents:",
options: ["Uniform acceleration", "Uniform velocity", "Retardation", "Body at rest"],
answer: "Uniform velocity"
},

{
question: "Which of the following is measured using a vernier caliper?",
options: ["Temperature", "Small internal and external diameters", "Atmospheric pressure", "Electric current"],
answer: "Small internal and external diameters"
},

{
question: "A force of 120 N acts on a body of mass 15 kg. Calculate the acceleration produced.",
options: ["6 m/s²", "7 m/s²", "8 m/s²", "9 m/s²"],
answer: "8 m/s²"
},

{
question: "The product of mass and velocity is known as:",
options: ["Force", "Momentum", "Impulse", "Power"],
answer: "Momentum"
},

{
question: "Which law states that for every action there is an equal and opposite reaction?",
options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Hooke's Law"],
answer: "Newton's Third Law"
},

{
question: "A machine lifts a load of 900 N using an effort of 180 N. Calculate its mechanical advantage.",
options: ["3", "4", "5", "6"],
answer: "5"
},

{
question: "The upward force exerted by a fluid on an immersed body is called:",
options: ["Friction", "Viscosity", "Upthrust", "Pressure"],
answer: "Upthrust"
},

{
question: "Which property of liquids causes insects such as water striders to walk on water?",
options: ["Density", "Surface tension", "Viscosity", "Pressure"],
answer: "Surface tension"
},

{
question: "The transfer of heat by electromagnetic waves is known as:",
options: ["Conduction", "Convection", "Radiation", "Expansion"],
answer: "Radiation"
},

{
question: "A gas occupies 200 cm³ at 300 K. Calculate its volume at 450 K if pressure remains constant.",
options: ["250 cm³", "275 cm³", "300 cm³", "350 cm³"],
answer: "300 cm³"
},

{
question: "The unit of frequency is:",
options: ["Metre", "Hertz", "Second", "Newton"],
answer: "Hertz"
},

{
question: "A wave has a frequency of 40 Hz and travels at 320 m/s. Calculate its wavelength.",
options: ["4 m", "6 m", "8 m", "10 m"],
answer: "8 m"
},

{
question: "Which colour of light is deviated the least when passing through a glass prism?",
options: ["Violet", "Blue", "Green", "Red"],
answer: "Red"
},

{
question: "The instrument used to produce a virtual enlarged image of small objects is:",
options: ["Concave mirror", "Microscope", "Periscope", "Telescope"],
answer: "Microscope"
},

{
question: "Calculate the electrical power consumed by a device operating at 240 V and drawing a current of 5 A.",
options: ["480 W", "960 W", "1200 W", "1500 W"],
answer: "1200 W"
},

{
question: "A 6 Ω resistor and a 3 Ω resistor are connected in parallel. Their equivalent resistance is:",
options: ["2 Ω", "3 Ω", "4 Ω", "9 Ω"],
answer: "2 Ω"
},

{
question: "Which magnetic material can retain its magnetism for a long time?",
options: ["Soft iron", "Steel", "Copper", "Aluminium"],
answer: "Steel"
},

{
question: "The process of charging a conductor without touching it is known as:",
options: ["Conduction", "Induction", "Friction", "Polarization"],
answer: "Induction"
},

{
question: "Which of the following radiations has the least penetrating power?",
options: ["Gamma rays", "Beta particles", "Alpha particles", "X-rays"],
answer: "Alpha particles"
},

{
question: "Which electronic component stores electrical charge temporarily?",
options: ["Diode", "Capacitor", "Transistor", "Resistor"],
answer: "Capacitor"
},
{
question: "The reading error of a measuring instrument when it reads a value even though the true value is zero is called:",
options: ["Percentage error", "Random error", "Zero error", "Systematic error"],
answer: "Zero error"
},

{
question: "Which instrument is most suitable for measuring the diameter of a thin wire accurately?",
options: ["Metre rule", "Tape rule", "Micrometer screw gauge", "Vernier caliper"],
answer: "Micrometer screw gauge"
},

{
question: "A body moves with an initial velocity of 12 m/s and accelerates uniformly at 2 m/s² for 8 s. Calculate the distance travelled.",
options: ["128 m", "144 m", "160 m", "176 m"],
answer: "160 m"
},

{
question: "The area under a velocity-time graph represents the:",
options: ["Acceleration", "Distance travelled", "Speed", "Momentum"],
answer: "Distance travelled"
},

{
question: "Which of the following is an example of Newton's First Law of Motion?",
options: ["A rocket launching into space", "A passenger moves forward when a moving bus stops suddenly", "A football accelerates when kicked", "A stone falls freely to the ground"],
answer: "A passenger moves forward when a moving bus stops suddenly"
},

{
question: "A machine has a mechanical advantage of 8 and a velocity ratio of 10. Calculate its efficiency.",
options: ["70%", "75%", "80%", "85%"],
answer: "80%"
},

{
question: "The pressure exerted by a liquid depends mainly on its:",
options: ["Colour", "Depth", "Shape of the container", "Surface area"],
answer: "Depth"
},

{
question: "A block has a mass of 4 kg and occupies a volume of 0.002 m³. Calculate its density.",
options: ["1000 kg/m³", "1500 kg/m³", "2000 kg/m³", "2500 kg/m³"],
answer: "2000 kg/m³"
},

{
question: "The S.I. unit of latent heat is:",
options: ["J/kg", "J", "W", "J/kg°C"],
answer: "J/kg"
},

{
question: "Which of the following processes occurs at constant temperature?",
options: ["Boiling of pure water", "Heating a metal rod", "Cooling hot tea", "Heating dry sand"],
answer: "Boiling of pure water"
},

{
question: "According to Boyle's Law, if the pressure of a gas is doubled while temperature remains constant, its volume will:",
options: ["Double", "Remain unchanged", "Be halved", "Triple"],
answer: "Be halved"
},

{
question: "The loudness of a sound depends on its:",
options: ["Frequency", "Amplitude", "Velocity", "Wavelength"],
answer: "Amplitude"
},

{
question: "An object is placed at the principal focus of a convex lens. The image formed is:",
options: ["Virtual and upright", "Real and inverted", "At infinity", "Same size as the object"],
answer: "At infinity"
},

{
question: "The critical angle is defined as the angle of incidence in the denser medium for which the angle of refraction is:",
options: ["0°", "45°", "60°", "90°"],
answer: "90°"
},

{
question: "Calculate the charge that flows through a conductor carrying a current of 5 A for 4 minutes.",
options: ["300 C", "600 C", "900 C", "1200 C"],
answer: "1200 C"
},

{
question: "A 100 W electric bulb operates for 5 hours. Calculate the electrical energy consumed in kWh.",
options: ["0.2 kWh", "0.3 kWh", "0.5 kWh", "5.0 kWh"],
answer: "0.5 kWh"
},

{
question: "Soft iron is preferred for making electromagnets because it:",
options: ["Retains magnetism permanently", "Is a poor conductor", "Is easily magnetized and demagnetized", "Has a high electrical resistance"],
answer: "Is easily magnetized and demagnetized"
},

{
question: "The negatively charged particle found outside the nucleus of an atom is the:",
options: ["Proton", "Neutron", "Electron", "Positron"],
answer: "Electron"
},

{
question: "Which semiconductor device is commonly used to convert alternating current (AC) into direct current (DC)?",
options: ["Capacitor", "Diode", "Resistor", "Transistor"],
answer: "Diode"
},

{
question: "The main purpose of a communication satellite is to:",
options: ["Generate electricity", "Transmit communication signals over long distances", "Measure atmospheric pressure", "Detect radioactive substances"],
answer: "Transmit communication signals over long distances"
},
{
question: "The SI unit of momentum is:",
options: ["kg m/s", "N/m²", "J/s", "kg/m³"],
answer: "kg m/s"
},

{
question: "A train travels at a speed of 25 m/s for 8 minutes. Calculate the distance covered.",
options: ["10 km", "11 km", "12 km", "13 km"],
answer: "12 km"
},

{
question: "A force of 150 N acts on an object and moves it through 20 m. Calculate the work done.",
options: ["2500 J", "3000 J", "3500 J", "4000 J"],
answer: "3000 J"
},

{
question: "The efficiency of a machine is 60%. If the input work is 500 J, calculate the useful output work.",
options: ["200 J", "250 J", "300 J", "350 J"],
answer: "300 J"
},

{
question: "Which of the following instruments is used to measure relative humidity?",
options: ["Hydrometer", "Hygrometer", "Barometer", "Thermometer"],
answer: "Hygrometer"
},

{
question: "The boiling point of pure water at standard atmospheric pressure is:",
options: ["90°C", "95°C", "100°C", "105°C"],
answer: "100°C"
},

{
question: "A gas occupies a volume of 500 cm³ at a pressure of 100 kPa. Calculate its new volume if the pressure is increased to 250 kPa at constant temperature.",
options: ["100 cm³", "150 cm³", "200 cm³", "250 cm³"],
answer: "200 cm³"
},

{
question: "The echo of a sound is produced due to:",
options: ["Refraction", "Reflection", "Diffraction", "Interference"],
answer: "Reflection"
},

{
question: "The frequency range of sound audible to a healthy human being is approximately:",
options: ["2 Hz – 200 Hz", "20 Hz – 20,000 Hz", "200 Hz – 200,000 Hz", "2,000 Hz – 20,000 Hz"],
answer: "20 Hz – 20,000 Hz"
},

{
question: "Which of the following optical instruments uses two convex lenses?",
options: ["Simple microscope", "Compound microscope", "Periscope", "Camera"],
answer: "Compound microscope"
},

{
question: "A ray of light passes from air into glass. It bends:",
options: ["Away from the normal", "Towards the normal", "Parallel to the surface", "At 90°"],
answer: "Towards the normal"
},

{
question: "The resistance of a conductor depends on its:",
options: ["Length only", "Cross-sectional area only", "Material, length and cross-sectional area", "Colour only"],
answer: "Material, length and cross-sectional area"
},

{
question: "Three resistors of 2 Ω, 3 Ω and 5 Ω are connected in series. Calculate their equivalent resistance.",
options: ["5 Ω", "8 Ω", "10 Ω", "15 Ω"],
answer: "10 Ω"
},

{
question: "The region around a magnet where magnetic force can be detected is known as the:",
options: ["Magnetic circuit", "Magnetic domain", "Magnetic field", "Magnetic flux"],
answer: "Magnetic field"
},

{
question: "Charging a body by rubbing it with another material is known as charging by:",
options: ["Induction", "Conduction", "Friction", "Polarization"],
answer: "Friction"
},

{
question: "The atomic number of an element is equal to the number of:",
options: ["Neutrons", "Electrons and neutrons", "Protons", "Nucleons"],
answer: "Protons"
},

{
question: "Which radioactive radiation consists of high-energy electromagnetic waves?",
options: ["Alpha rays", "Beta rays", "Gamma rays", "Cathode rays"],
answer: "Gamma rays"
},

{
question: "A transistor has three terminals known as:",
options: ["Anode, Cathode and Gate", "Emitter, Base and Collector", "Positive, Negative and Earth", "Input, Output and Ground"],
answer: "Emitter, Base and Collector"
},

{
question: "Which of the following energy sources is non-renewable?",
options: ["Wind", "Solar", "Natural Gas", "Hydroelectric"],
answer: "Natural Gas"
},

{
question: "Radar systems operate mainly by using:",
options: ["Sound waves", "Infrared rays", "Microwaves", "Ultrasonic waves"],
answer: "Microwaves"
},
{
question: "The slope of a velocity-time graph represents:",
options: ["Distance", "Displacement", "Acceleration", "Momentum"],
answer: "Acceleration"
},

{
question: "A body moves with a uniform velocity of 18 m/s for 25 s. Calculate the distance travelled.",
options: ["350 m", "400 m", "450 m", "500 m"],
answer: "450 m"
},

{
question: "Which of the following is the SI unit of energy?",
options: ["Newton", "Joule", "Watt", "Pascal"],
answer: "Joule"
},

{
question: "A force of 250 N acts on a body of mass 50 kg. Calculate its acceleration.",
options: ["2 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
answer: "5 m/s²"
},

{
question: "The turning effect of a force about a pivot is known as:",
options: ["Pressure", "Moment", "Impulse", "Momentum"],
answer: "Moment"
},

{
question: "The pressure at a point in a liquid depends on:",
options: ["The shape of the container", "The depth of the liquid", "The colour of the liquid", "The surface area of the container"],
answer: "The depth of the liquid"
},

{
question: "A piece of wood floats on water because:",
options: ["Its mass is small", "Its density is less than that of water", "It contains air", "Its volume is large"],
answer: "Its density is less than that of water"
},

{
question: "The expansion of railway tracks during hot weather is due to:",
options: ["Increase in pressure", "Thermal expansion", "Conduction", "Radiation"],
answer: "Thermal expansion"
},

{
question: "Which temperature scale has its absolute zero at −273°C?",
options: ["Fahrenheit", "Kelvin", "Celsius", "Reaumur"],
answer: "Kelvin"
},

{
question: "The energy transferred during a change of state without temperature change is called:",
options: ["Specific Heat Capacity", "Latent Heat", "Heat Capacity", "Thermal Energy"],
answer: "Latent Heat"
},

{
question: "A wave travels at 360 m/s and has a wavelength of 12 m. Calculate its frequency.",
options: ["24 Hz", "30 Hz", "36 Hz", "42 Hz"],
answer: "30 Hz"
},

{
question: "The loudness of sound is measured in:",
options: ["Hertz", "Pascal", "Decibel", "Newton"],
answer: "Decibel"
},

{
question: "Which of the following mirrors always forms a virtual, upright and diminished image?",
options: ["Plane mirror", "Concave mirror", "Convex mirror", "Parabolic mirror"],
answer: "Convex mirror"
},

{
question: "The bending of light as it passes from one medium to another is called:",
options: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
answer: "Refraction"
},

{
question: "Calculate the current flowing through a resistor of 24 Ω connected to a 240 V supply.",
options: ["5 A", "8 A", "10 A", "12 A"],
answer: "10 A"
},

{
question: "The unit of electrical resistance is:",
options: ["Volt", "Ampere", "Ohm", "Watt"],
answer: "Ohm"
},

{
question: "Which material is commonly used as the core of an electromagnet?",
options: ["Steel", "Soft iron", "Copper", "Aluminium"],
answer: "Soft iron"
},

{
question: "An atom consists of a central nucleus containing:",
options: ["Electrons and protons", "Protons and neutrons", "Electrons and neutrons", "Only protons"],
answer: "Protons and neutrons"
},

{
question: "Which electronic component is used to oppose the flow of electric current?",
options: ["Diode", "Resistor", "Capacitor", "Transistor"],
answer: "Resistor"
},

{
question: "Which communication technology uses light signals to transmit information through thin strands of glass?",
options: ["Radar", "Satellite Communication", "Fibre Optics", "Radio Broadcasting"],
answer: "Fibre Optics"
},
{
question: "Which branch of Physics deals with the study of heat and temperature?",
options: ["Mechanics", "Optics", "Thermodynamics", "Electronics"],
answer: "Thermodynamics"
},

{
question: "A cyclist travels 540 m in 45 seconds. Calculate the average speed.",
options: ["10 m/s", "12 m/s", "14 m/s", "16 m/s"],
answer: "12 m/s"
},

{
question: "A body of mass 20 kg is moving at 6 m/s. Calculate its momentum.",
options: ["26 kg m/s", "100 kg m/s", "120 kg m/s", "140 kg m/s"],
answer: "120 kg m/s"
},

{
question: "The law of conservation of momentum applies when:",
options: ["External forces act on the system", "The system is isolated", "Only friction acts", "The body is at rest"],
answer: "The system is isolated"
},

{
question: "The SI unit of moment (torque) is:",
options: ["N", "Nm", "J", "Pa"],
answer: "Nm"
},

{
question: "Which instrument is used to measure the density (relative density) of liquids?",
options: ["Barometer", "Hydrometer", "Hygrometer", "Thermometer"],
answer: "Hydrometer"
},

{
question: "The upward force experienced by an object immersed in a liquid is equal to:",
options: ["Its weight", "The weight of the liquid displaced", "Its mass", "The pressure of the liquid"],
answer: "The weight of the liquid displaced"
},

{
question: "Heat from the Sun reaches the Earth mainly by:",
options: ["Conduction", "Convection", "Radiation", "Evaporation"],
answer: "Radiation"
},

{
question: "A metal rod of length 2 m expands by 0.004 m when heated. Calculate its final length.",
options: ["2.002 m", "2.004 m", "2.040 m", "2.400 m"],
answer: "2.004 m"
},

{
question: "Which gas law states that the pressure of a fixed mass of gas is directly proportional to its absolute temperature at constant volume?",
options: ["Boyle's Law", "Charles' Law", "Pressure Law", "Avogadro's Law"],
answer: "Pressure Law"
},

{
question: "When two identical waves meet in phase, the result is:",
options: ["Destructive interference", "Constructive interference", "Diffraction", "Refraction"],
answer: "Constructive interference"
},

{
question: "Ultrasonic waves have frequencies:",
options: ["Below 20 Hz", "Between 20 Hz and 20,000 Hz", "Above 20,000 Hz", "Exactly 20 Hz"],
answer: "Above 20,000 Hz"
},

{
question: "The defect of vision corrected using a concave lens is:",
options: ["Hypermetropia", "Myopia", "Astigmatism", "Presbyopia"],
answer: "Myopia"
},

{
question: "The ratio of the sine of the angle of incidence to the sine of the angle of refraction is called:",
options: ["Magnification", "Critical Angle", "Refractive Index", "Focal Length"],
answer: "Refractive Index"
},

{
question: "A 60 W electric bulb operates for 10 hours. Calculate the electrical energy consumed in kWh.",
options: ["0.4 kWh", "0.5 kWh", "0.6 kWh", "0.8 kWh"],
answer: "0.6 kWh"
},

{
question: "Which instrument is used to measure potential difference?",
options: ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
answer: "Voltmeter"
},

{
question: "Magnetic field lines around a straight current-carrying conductor are:",
options: ["Straight lines", "Circular", "Parallel", "Elliptical"],
answer: "Circular"
},

{
question: "The number of protons in the nucleus of an atom is known as its:",
options: ["Mass Number", "Atomic Number", "Nucleon Number", "Isotope Number"],
answer: "Atomic Number"
},

{
question: "The process of splitting a heavy nucleus into lighter nuclei with the release of energy is called:",
options: ["Fusion", "Fission", "Radioactivity", "Ionization"],
answer: "Fission"
},

{
question: "A transistor is mainly used in electronic circuits for:",
options: ["Measuring voltage", "Amplification and switching", "Storing electrical energy", "Producing heat"],
answer: "Amplification and switching"
},
{
question: "Which of the following quantities has both magnitude and direction?",
options: ["Distance", "Speed", "Velocity", "Mass"],
answer: "Velocity"
},

{
question: "A body starts from rest and accelerates uniformly at 5 m/s² for 6 seconds. Calculate its final velocity.",
options: ["20 m/s", "25 m/s", "30 m/s", "35 m/s"],
answer: "30 m/s"
},

{
question: "The area under a force-distance graph represents the:",
options: ["Momentum", "Power", "Work Done", "Pressure"],
answer: "Work Done"
},

{
question: "A machine lifts a load of 600 N with an effort of 150 N. Calculate its mechanical advantage.",
options: ["2", "3", "4", "5"],
answer: "4"
},

{
question: "The SI unit of density is:",
options: ["kg/m²", "kg/m³", "g/cm³", "N/m³"],
answer: "kg/m³"
},

{
question: "A liquid exerts a pressure of 12,000 Pa at a certain depth. If the area is 0.4 m², calculate the force acting on the surface.",
options: ["3,000 N", "4,200 N", "4,800 N", "5,200 N"],
answer: "4,800 N"
},

{
question: "The instrument used to measure atmospheric humidity is called:",
options: ["Hydrometer", "Barometer", "Hygrometer", "Manometer"],
answer: "Hygrometer"
},

{
question: "Which of the following materials is a poor conductor of heat?",
options: ["Copper", "Iron", "Aluminium", "Wood"],
answer: "Wood"
},

{
question: "The process by which heat is transferred through the bulk movement of fluids is known as:",
options: ["Conduction", "Convection", "Radiation", "Reflection"],
answer: "Convection"
},

{
question: "The SI unit of frequency is:",
options: ["Second", "Metre", "Hertz", "Joule"],
answer: "Hertz"
},

{
question: "A wave has a wavelength of 0.5 m and a frequency of 600 Hz. Calculate its speed.",
options: ["150 m/s", "200 m/s", "250 m/s", "300 m/s"],
answer: "300 m/s"
},

{
question: "Which colour suffers the greatest deviation when white light passes through a prism?",
options: ["Red", "Yellow", "Green", "Violet"],
answer: "Violet"
},

{
question: "The image formed by a plane mirror is always:",
options: ["Real and inverted", "Virtual and erect", "Real and diminished", "Virtual and inverted"],
answer: "Virtual and erect"
},

{
question: "According to Ohm's Law, if the resistance of a conductor is doubled while the voltage remains constant, the current will:",
options: ["Double", "Remain constant", "Be halved", "Become zero"],
answer: "Be halved"
},

{
question: "A resistor of 8 Ω carries a current of 5 A. Calculate the potential difference across it.",
options: ["30 V", "35 V", "40 V", "45 V"],
answer: "40 V"
},

{
question: "The magnetic effect of electric current was first discovered by:",
options: ["Newton", "Faraday", "Oersted", "Ohm"],
answer: "Oersted"
},

{
question: "The emission of electrons from the surface of a metal due to heating is known as:",
options: ["Photoelectric emission", "Thermionic emission", "Ionization", "Electrolysis"],
answer: "Thermionic emission"
},

{
question: "The half-life of a radioactive substance is 8 days. How long will it take for one-quarter of the original sample to remain?",
options: ["8 days", "12 days", "16 days", "24 days"],
answer: "16 days"
},

{
question: "Which electronic component is designed to store electrical energy in an electric field?",
options: ["Resistor", "Capacitor", "Diode", "Transistor"],
answer: "Capacitor"
},

{
question: "Which communication system is most suitable for transmitting television signals across continents?",
options: ["Optical fibre only", "Communication satellite", "Loudspeaker", "Microscope"],
answer: "Communication satellite"
},
{
question: "The SI unit of acceleration is:",
options: ["m/s", "m/s²", "km/h", "N"],
answer: "m/s²"
},

{
question: "A body travels 720 km in 9 hours. Calculate its average speed.",
options: ["60 km/h", "70 km/h", "80 km/h", "90 km/h"],
answer: "80 km/h"
},

{
question: "A force of 90 N acts on a body for 4 seconds. Calculate the impulse produced.",
options: ["180 Ns", "270 Ns", "360 Ns", "450 Ns"],
answer: "360 Ns"
},

{
question: "The quantity of matter contained in a body is called:",
options: ["Density", "Weight", "Mass", "Volume"],
answer: "Mass"
},

{
question: "Which simple machine is used for drawing water from a well?",
options: ["Lever", "Pulley", "Wheel and axle", "Inclined plane"],
answer: "Pulley"
},

{
question: "The pressure exerted by a solid depends on:",
options: ["Its colour", "Force and area of contact", "Its temperature", "Its density only"],
answer: "Force and area of contact"
},

{
question: "A cube has a side length of 0.2 m and a mass of 16 kg. Calculate its density.",
options: ["1500 kg/m³", "1800 kg/m³", "2000 kg/m³", "2500 kg/m³"],
answer: "2000 kg/m³"
},

{
question: "Which of the following substances expands the most when heated?",
options: ["Solid", "Liquid", "Gas", "All equally"],
answer: "Gas"
},

{
question: "The S.I. unit of specific latent heat is:",
options: ["J", "J/kg", "J/kg°C", "W/kg"],
answer: "J/kg"
},

{
question: "Which gas law explains the working principle of a bicycle pump?",
options: ["Charles' Law", "Boyle's Law", "Pressure Law", "Avogadro's Law"],
answer: "Boyle's Law"
},

{
question: "The phenomenon in which waves bend around obstacles is called:",
options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
answer: "Diffraction"
},

{
question: "Which property of sound enables us to distinguish between the voices of different people?",
options: ["Pitch", "Intensity", "Quality (Timbre)", "Frequency"],
answer: "Quality (Timbre)"
},

{
question: "A convex lens is used to correct:",
options: ["Myopia", "Hypermetropia", "Astigmatism", "Colour blindness"],
answer: "Hypermetropia"
},

{
question: "The refractive index of glass is 1.5. If the speed of light in vacuum is 3 × 10⁸ m/s, calculate its speed in glass.",
options: ["1 × 10⁸ m/s", "1.5 × 10⁸ m/s", "2 × 10⁸ m/s", "2.5 × 10⁸ m/s"],
answer: "2 × 10⁸ m/s"
},

{
question: "A 2 A current flows through a conductor for 5 minutes. Calculate the quantity of charge transferred.",
options: ["300 C", "500 C", "600 C", "900 C"],
answer: "600 C"
},

{
question: "Which electrical device automatically breaks a circuit when excessive current flows?",
options: ["Capacitor", "Fuse", "Resistor", "Transformer"],
answer: "Fuse"
},

{
question: "The direction of the magnetic field around a current-carrying conductor can be determined using:",
options: ["Left-hand rule", "Right-hand grip rule", "Snell's Law", "Ohm's Law"],
answer: "Right-hand grip rule"
},

{
question: "Isotopes of an element have the same:",
options: ["Mass number", "Number of neutrons", "Atomic number", "Atomic mass"],
answer: "Atomic number"
},

{
question: "The process in which two light nuclei combine to form a heavier nucleus is called:",
options: ["Fission", "Fusion", "Radioactivity", "Ionization"],
answer: "Fusion"
},

{
question: "Which of the following devices converts sound signals into electrical signals?",
options: ["Loudspeaker", "Microphone", "Transformer", "Generator"],
answer: "Microphone"
},
{
question: "Which of the following is a base (fundamental) SI quantity?",
options: ["Force", "Power", "Electric Current", "Pressure"],
answer: "Electric Current"
},

{
question: "A runner completes a 400 m race in 50 s. Calculate the average speed.",
options: ["6 m/s", "7 m/s", "8 m/s", "9 m/s"],
answer: "8 m/s"
},

{
question: "A body accelerates uniformly from 15 m/s to 35 m/s in 10 s. Calculate its acceleration.",
options: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"],
answer: "2 m/s²"
},

{
question: "A force of 80 N acts on a body causing it to move 25 m in the direction of the force. Calculate the work done.",
options: ["1,600 J", "1,800 J", "2,000 J", "2,200 J"],
answer: "2,000 J"
},

{
question: "A machine has an efficiency of 90%. If the input work is 2,000 J, calculate the useful output work.",
options: ["1,600 J", "1,700 J", "1,800 J", "1,900 J"],
answer: "1,800 J"
},

{
question: "Which simple machine consists of a grooved wheel and a rope?",
options: ["Wheel and Axle", "Pulley", "Lever", "Wedge"],
answer: "Pulley"
},

{
question: "The SI unit of pressure is equivalent to:",
options: ["kg/m³", "N/m²", "J/s", "kg m/s"],
answer: "N/m²"
},

{
question: "An object has a mass of 18 kg and a volume of 0.006 m³. Calculate its density.",
options: ["2,000 kg/m³", "2,500 kg/m³", "3,000 kg/m³", "3,500 kg/m³"],
answer: "3,000 kg/m³"
},

{
question: "The tendency of a body to return to its original shape after deformation is called:",
options: ["Viscosity", "Elasticity", "Plasticity", "Rigidity"],
answer: "Elasticity"
},

{
question: "Which of the following is NOT a mode of heat transfer?",
options: ["Conduction", "Convection", "Radiation", "Condensation"],
answer: "Condensation"
},

{
question: "According to Charles' Law, the volume of a gas increases when:",
options: ["Pressure increases", "Temperature increases at constant pressure", "Mass increases", "Density increases"],
answer: "Temperature increases at constant pressure"
},

{
question: "A wave has a speed of 500 m/s and a frequency of 250 Hz. Calculate its wavelength.",
options: ["0.5 m", "1 m", "2 m", "4 m"],
answer: "2 m"
},

{
question: "The phenomenon responsible for the production of echoes is:",
options: ["Refraction", "Reflection", "Dispersion", "Polarization"],
answer: "Reflection"
},

{
question: "A camera mainly uses which type of lens?",
options: ["Concave Lens", "Convex Lens", "Cylindrical Lens", "Plane Lens"],
answer: "Convex Lens"
},

{
question: "The image formed by a concave mirror when the object is between the pole and the principal focus is:",
options: ["Real and inverted", "Virtual, erect and magnified", "Real and diminished", "Virtual and diminished"],
answer: "Virtual, erect and magnified"
},

{
question: "A resistor of 12 Ω is connected to a 48 V battery. Calculate the current flowing through it.",
options: ["2 A", "3 A", "4 A", "5 A"],
answer: "4 A"
},

{
question: "A transformer with more turns in the secondary coil than the primary coil is called a:",
options: ["Step-down transformer", "Step-up transformer", "Current transformer", "Isolation transformer"],
answer: "Step-up transformer"
},

{
question: "The process of producing magnetism in a material by placing it in a magnetic field is known as:",
options: ["Electrolysis", "Induction", "Magnetic Induction", "Electromagnetic Radiation"],
answer: "Magnetic Induction"
},

{
question: "Which radioactive emission is deflected the most in an electric field?",
options: ["Alpha particles", "Beta particles", "Gamma rays", "X-rays"],
answer: "Beta particles"
},

{
question: "A diode is mainly used in electrical circuits to:",
options: ["Store electrical energy", "Amplify signals", "Allow current to flow in one direction", "Increase voltage"],
answer: "Allow current to flow in one direction"
},
{
question: "The S.I. unit of force is:",
options: ["Pascal", "Joule", "Newton", "Watt"],
answer: "Newton"
},

{
question: "A vehicle moves with a constant speed of 30 m/s for 4 minutes. Calculate the distance covered.",
options: ["6,200 m", "6,800 m", "7,200 m", "7,800 m"],
answer: "7,200 m"
},

{
question: "A body is thrown vertically upwards with an initial velocity of 20 m/s. (Take g = 10 m/s²). Calculate the maximum height reached.",
options: ["10 m", "15 m", "20 m", "25 m"],
answer: "20 m"
},

{
question: "Which of the following statements correctly describes inertia?",
options: ["The ability to perform work", "The tendency of a body to resist changes in its state of rest or motion", "The force of attraction between two bodies", "The pressure exerted by a liquid"],
answer: "The tendency of a body to resist changes in its state of rest or motion"
},

{
question: "The product of force and perpendicular distance from the pivot is called:",
options: ["Momentum", "Power", "Moment", "Impulse"],
answer: "Moment"
},

{
question: "The mechanical advantage of a machine is the ratio of:",
options: ["Effort to Load", "Load to Effort", "Output Work to Input Work", "Velocity Ratio to Efficiency"],
answer: "Load to Effort"
},

{
question: "Which of the following quantities is measured in Pascals?",
options: ["Pressure", "Power", "Energy", "Force"],
answer: "Pressure"
},

{
question: "A metal block has a density of 8,000 kg/m³ and a volume of 0.003 m³. Calculate its mass.",
options: ["18 kg", "20 kg", "22 kg", "24 kg"],
answer: "24 kg"
},

{
question: "The transfer of heat through direct contact between particles is known as:",
options: ["Radiation", "Convection", "Conduction", "Evaporation"],
answer: "Conduction"
},

{
question: "The Kelvin temperature corresponding to 27°C is:",
options: ["273 K", "290 K", "300 K", "310 K"],
answer: "300 K"
},

{
question: "According to Boyle's Law, pressure and volume of a fixed mass of gas are:",
options: ["Directly proportional", "Inversely proportional", "Equal", "Independent"],
answer: "Inversely proportional"
},

{
question: "The number of complete waves passing a point in one second is called:",
options: ["Amplitude", "Period", "Frequency", "Velocity"],
answer: "Frequency"
},

{
question: "Which property of light is responsible for the formation of shadows?",
options: ["Reflection", "Refraction", "Rectilinear Propagation", "Dispersion"],
answer: "Rectilinear Propagation"
},

{
question: "A person suffering from long-sightedness is corrected using a:",
options: ["Concave lens", "Convex lens", "Plane mirror", "Concave mirror"],
answer: "Convex lens"
},

{
question: "A conductor has a resistance of 15 Ω. If a current of 2 A flows through it, calculate the potential difference.",
options: ["20 V", "25 V", "30 V", "35 V"],
answer: "30 V"
},

{
question: "Electrical power can be calculated using:",
options: ["P = VI", "P = IR", "P = V/R", "P = Q/t"],
answer: "P = VI"
},

{
question: "Which of the following materials is commonly used to make permanent magnets?",
options: ["Soft Iron", "Steel", "Copper", "Aluminium"],
answer: "Steel"
},

{
question: "The nucleus of an atom contains:",
options: ["Electrons only", "Protons only", "Protons and Neutrons", "Electrons and Neutrons"],
answer: "Protons and Neutrons"
},

{
question: "The process of converting alternating current (AC) to direct current (DC) is known as:",
options: ["Amplification", "Rectification", "Oscillation", "Modulation"],
answer: "Rectification"
},

{
question: "Which communication device converts electrical signals into sound waves?",
options: ["Microphone", "Loudspeaker", "Satellite Dish", "Radar"],
answer: "Loudspeaker"
},
{
question: "Which of the following is a derived SI unit?",
options: ["Metre", "Second", "Newton", "Kilogram"],
answer: "Newton"
},

{
question: "A body starts from rest and accelerates uniformly at 4 m/s² for 10 seconds. Calculate the distance covered.",
options: ["100 m", "150 m", "200 m", "250 m"],
answer: "200 m"
},

{
question: "A car moving at 18 m/s is brought to rest uniformly in 6 seconds. Calculate its deceleration.",
options: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
answer: "3 m/s²"
},

{
question: "The change in momentum of a body is equal to its:",
options: ["Power", "Impulse", "Work Done", "Pressure"],
answer: "Impulse"
},

{
question: "A body of mass 15 kg is lifted vertically through a height of 8 m. (Take g = 10 m/s²). Calculate the gain in potential energy.",
options: ["1,000 J", "1,100 J", "1,200 J", "1,300 J"],
answer: "1,200 J"
},

{
question: "The velocity ratio of a machine is defined as the ratio of:",
options: ["Load to Effort", "Effort to Load", "Distance moved by effort to distance moved by load", "Output work to input work"],
answer: "Distance moved by effort to distance moved by load"
},

{
question: "Which of the following is NOT a property of liquids?",
options: ["They have definite volume", "They flow", "They have definite shape", "They exert pressure"],
answer: "They have definite shape"
},

{
question: "A body weighs 500 N in air and 350 N when completely immersed in water. Calculate the upthrust acting on it.",
options: ["100 N", "150 N", "200 N", "250 N"],
answer: "150 N"
},

{
question: "The transfer of heat by the movement of molecules within a fluid is called:",
options: ["Radiation", "Conduction", "Convection", "Diffusion"],
answer: "Convection"
},

{
question: "A gas occupies 240 cm³ at 300 K. Calculate its volume at 450 K if pressure remains constant.",
options: ["300 cm³", "320 cm³", "360 cm³", "400 cm³"],
answer: "360 cm³"
},

{
question: "The time taken for one complete oscillation is known as the:",
options: ["Amplitude", "Period", "Frequency", "Velocity"],
answer: "Period"
},

{
question: "Which of the following electromagnetic waves is commonly used in television remote controls?",
options: ["Radio Waves", "Infrared Rays", "Ultraviolet Rays", "Gamma Rays"],
answer: "Infrared Rays"
},

{
question: "A ray of light passing from glass into air bends:",
options: ["Towards the normal", "Away from the normal", "Along the normal", "At right angles to the surface"],
answer: "Away from the normal"
},

{
question: "The focal length of a lens is 20 cm. Calculate its power.",
options: ["2 D", "3 D", "4 D", "5 D"],
answer: "5 D"
},

{
question: "Three resistors of 4 Ω each are connected in parallel. Calculate their equivalent resistance.",
options: ["1.33 Ω", "2 Ω", "4 Ω", "12 Ω"],
answer: "1.33 Ω"
},

{
question: "Which instrument is used to detect very small electric currents?",
options: ["Voltmeter", "Ammeter", "Galvanometer", "Hydrometer"],
answer: "Galvanometer"
},

{
question: "The magnetic field inside a long solenoid is:",
options: ["Circular", "Uniform", "Irregular", "Zero"],
answer: "Uniform"
},

{
question: "Which radioactive radiation is not affected by electric or magnetic fields?",
options: ["Alpha Particles", "Beta Particles", "Gamma Rays", "Cathode Rays"],
answer: "Gamma Rays"
},

{
question: "A semiconductor whose conductivity increases when impurities are added is said to be:",
options: ["Intrinsic", "Extrinsic", "Magnetic", "Insulating"],
answer: "Extrinsic"
},

{
question: "A modem is primarily used to:",
options: ["Store electrical energy", "Convert digital signals to analogue signals and vice versa", "Generate electricity", "Measure resistance"],
answer: "Convert digital signals to analogue signals and vice versa"
},
{
question: "The slope of a distance-time graph represents:",
options: ["Acceleration", "Velocity", "Force", "Power"],
answer: "Velocity"
},

{
question: "A stone is dropped freely from a height of 45 m. (Take g = 10 m/s²). Calculate the time taken to reach the ground.",
options: ["2 s", "3 s", "4 s", "5 s"],
answer: "3 s"
},

{
question: "A body of mass 10 kg moving at 8 m/s is brought to rest in 4 s. Calculate the average retarding force acting on it.",
options: ["10 N", "15 N", "20 N", "25 N"],
answer: "20 N"
},

{
question: "The SI unit of power is equivalent to:",
options: ["J/s", "N/m²", "kg m/s", "V/A"],
answer: "J/s"
},

{
question: "A machine has a mechanical advantage of 6 and a velocity ratio of 8. Calculate its efficiency.",
options: ["60%", "70%", "75%", "80%"],
answer: "75%"
},

{
question: "The pressure exerted by a liquid increases with:",
options: ["Decrease in depth", "Increase in depth", "Decrease in density", "Decrease in gravity"],
answer: "Increase in depth"
},

{
question: "An object has a mass of 5 kg and occupies a volume of 0.0025 m³. Calculate its density.",
options: ["1000 kg/m³", "1500 kg/m³", "2000 kg/m³", "2500 kg/m³"],
answer: "2000 kg/m³"
},

{
question: "The transfer of heat from the Sun to the Earth occurs through:",
options: ["Conduction", "Convection", "Radiation", "Evaporation"],
answer: "Radiation"
},

{
question: "Which of the following thermometers is most suitable for measuring very low temperatures?",
options: ["Mercury Thermometer", "Alcohol Thermometer", "Clinical Thermometer", "Laboratory Thermometer"],
answer: "Alcohol Thermometer"
},

{
question: "A gas occupies a volume of 400 cm³ at 100 kPa. Calculate its volume when the pressure is increased to 200 kPa at constant temperature.",
options: ["100 cm³", "150 cm³", "200 cm³", "300 cm³"],
answer: "200 cm³"
},

{
question: "The speed of sound is greatest in:",
options: ["Air", "Water", "Vacuum", "Steel"],
answer: "Steel"
},

{
question: "The phenomenon responsible for the bending of waves around obstacles is:",
options: ["Reflection", "Refraction", "Diffraction", "Interference"],
answer: "Diffraction"
},

{
question: "A convex mirror always forms an image that is:",
options: ["Real and enlarged", "Virtual, erect and diminished", "Real and inverted", "Virtual and magnified"],
answer: "Virtual, erect and diminished"
},

{
question: "The power of a lens is measured in:",
options: ["Dioptre", "Hertz", "Pascal", "Candela"],
answer: "Dioptre"
},

{
question: "A current of 0.5 A flows through a conductor for 10 minutes. Calculate the quantity of charge transferred.",
options: ["150 C", "200 C", "250 C", "300 C"],
answer: "300 C"
},

{
question: "Which of the following devices converts electrical energy into mechanical energy?",
options: ["Generator", "Transformer", "Electric Motor", "Rectifier"],
answer: "Electric Motor"
},

{
question: "Which of the following materials is commonly used as the core of a transformer?",
options: ["Copper", "Soft Iron", "Steel", "Aluminium"],
answer: "Soft Iron"
},

{
question: "The total number of protons and neutrons in the nucleus of an atom is known as the:",
options: ["Atomic Number", "Mass Number", "Nucleon Charge", "Isotope Number"],
answer: "Mass Number"
},

{
question: "Which semiconductor device is mainly used as an electronic switch and amplifier?",
options: ["Capacitor", "Diode", "Transistor", "Resistor"],
answer: "Transistor"
},

{
question: "The main advantage of fibre-optic communication over copper cables is:",
options: ["Higher electrical resistance", "Greater signal loss", "Higher bandwidth and lower signal loss", "Lower transmission speed"],
answer: "Higher bandwidth and lower signal loss"
},

];


let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 15 * 60;
let timerId;

const SUBJECT = "PHYSICS";

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

