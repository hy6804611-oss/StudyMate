// ======================================
// StudyMate NDA quiz.
// ======================================

const allQuestions = [
  
{
  question: "The primary purpose of the Nigerian Defence Academy is to",
  options: [
    "Train civilians for private employment",
    "Train officers for the Nigerian Armed Forces",
    "Conduct commercial research",
    "Provide vocational education"
  ],
  answer: "Train officers for the Nigerian Armed Forces"
},
{
  question: "Which quality is most essential for an officer who must make decisions under pressure?",
  options: [
    "Popularity",
    "Physical appearance",
    "Financial influence",
    "Sound judgment"
  ],
  answer: "Sound judgment"
},
{
  question: "Integrity in military service means",
  options: [
    "Doing what is right even when no one is watching",
    "Following friends regardless of regulations",
    "Seeking promotion at all costs",
    "Avoiding responsibility"
  ],
  answer: "Doing what is right even when no one is watching"
},
{
  question: "An officer who accepts responsibility for the actions of subordinates demonstrates",
  options: [
    "Ambition",
    "Authority",
    "Accountability",
    "Popularity"
  ],
  answer: "Accountability"
},
{
  question: "Why is physical fitness compulsory for NDA applicants?",
  options: [
    "It guarantees admission",
    "Military training requires endurance and resilience",
    "It replaces academic performance",
    "It is needed only for sports"
  ],
  answer: "Military training requires endurance and resilience"
},
{
  question: "The principle of 'Duty Before Self' requires an officer to",
  options: [
    "Seek personal recognition first",
    "Avoid difficult assignments",
    "Place comfort above responsibility",
    "Place national service above personal interest"
  ],
  answer: "Place national service above personal interest"
},
{
  question: "Which action best demonstrates military professionalism?",
  options: [
    "Ignoring regulations when convenient",
    "Working only under supervision",
    "Performing assigned duties with competence and discipline",
    "Seeking rewards before service"
  ],
  answer: "Performing assigned duties with competence and discipline"
},
{
  question: "The chain of command exists mainly to",
  options: [
    "Ensure proper authority and communication",
    "Increase paperwork",
    "Reduce responsibility",
    "Allow multiple commanders to issue orders"
  ],
  answer: "Ensure proper authority and communication"
},
{
  question: "A cadet who continues training despite repeated setbacks is demonstrating",
  options: [
    "Fear",
    "Overconfidence",
    "Weakness",
    "Perseverance"
  ],
  answer: "Perseverance"
},
{
  question: "Military teamwork is important because",
  options: [
    "Individual success is always more important",
    "Operations are accomplished through coordinated effort",
    "It removes leadership responsibilities",
    "It eliminates discipline"
  ],
  answer: "Operations are accomplished through coordinated effort"
},
{
  question: "According to the NDA Guide, the first responsibility of every applicant before beginning preparation is to",
  options: [
    "Purchase military uniforms",
    "Understand the official admission requirements",
    "Visit the Academy campus",
    "Open a bank account"
  ],
  answer: "Understand the official admission requirements"
},
{
  question: "Why does the NDA Guide emphasize reading only official information?",
  options: [
    "Official information is easier to memorize",
    "Rumours usually contain more details",
    "Official information provides accurate and updated admission procedures",
    "Official information guarantees admission"
  ],
  answer: "Official information provides accurate and updated admission procedures"
},
{
  question: "The NDA Guide describes discipline primarily as",
  options: [
    "Doing the right thing consistently whether supervised or not",
    "Obeying instructions only when punishment is expected",
    "Following friends before regulations",
    "Avoiding responsibility"
  ],
  answer: "Doing the right thing consistently whether supervised or not"
},
{
  question: "According to our lesson, an officer earns respect mainly through",
  options: [
    "Holding the highest rank",
    "Being physically stronger than everyone",
    "Professional competence and good character",
    "Being popular among civilians"
  ],
  answer: "Professional competence and good character"
},
{
  question: "The NDA Guide advises candidates to prepare academically and physically because",
  options: [
    "Only physical fitness is assessed",
    "Both academic ability and military readiness are important",
    "Only the interview determines admission",
    "Physical fitness replaces written examinations"
  ],
  answer: "Both academic ability and military readiness are important"
},
{
  question: "In our chapter on Officer Qualities, integrity was defined as",
  options: [
    "Seeking recognition before duty",
    "Doing whatever is convenient",
    "Avoiding difficult decisions",
    "Being honest and morally upright at all times"
  ],
  answer: "Being honest and morally upright at all times"
},
{
  question: "The main purpose of leadership training at the NDA is to",
  options: [
    "Prepare cadets to command and inspire others effectively",
    "Teach commercial business management",
    "Replace military drills",
    "Reduce academic workload"
  ],
  answer: "Prepare cadets to command and inspire others effectively"
},
{
  question: "According to the NDA Guide, the best response after failing a practice test is to",
  options: [
    "Review mistakes, improve weak areas, and continue preparing",
    "Stop studying for a few weeks",
    "Depend on luck in the real examination",
    "Ignore the result completely"
  ],
  answer: "Review mistakes, improve weak areas, and continue preparing"
},
{
  question: "Which quality enables an officer to remain effective during unexpected challenges?",
  options: [
    "Popularity",
    "Financial influence",
    "Pride",
    "Adaptability"
  ],
  answer: "Adaptability"
},
{
  question: "The NDA Guide concludes that the true goal of every applicant should be to",
  options: [
    "Become famous",
    "Graduate quickly",
    "Serve Nigeria with honour, courage, discipline, and professionalism",
    "Obtain a university degree only"
  ],
  answer: "Serve Nigeria with honour, courage, discipline, and professionalism"
},
{
  question: "According to the NDA Guide, why should a candidate begin preparation several months before the examination?",
  options: [
    "To have enough time for balanced academic and physical preparation",
    "To avoid reading official information",
    "To reduce physical training",
    "To memorize interview answers only"
  ],
  answer: "To have enough time for balanced academic and physical preparation"
},
{
  question: "The NDA Guide states that an applicant should respond to failure by",
  options: [
    "Giving up and choosing another career",
    "Learning from mistakes and improving continuously",
    "Blaming the examination body",
    "Waiting for the next admission without preparation"
  ],
  answer: "Learning from mistakes and improving continuously"
},
{
  question: "Why does the NDA Guide encourage candidates to maintain good health before the Selection Board?",
  options: [
    "Medical fitness is an important part of military service",
    "Health is considered only after graduation",
    "Medical examinations are optional",
    "Physical fitness replaces academic ability"
  ],
  answer: "Medical fitness is an important part of military service"
},
{
  question: "According to our lesson, which habit best reflects self-discipline?",
  options: [
    "Studying only when examinations are close",
    "Waiting for others to give motivation",
    "Following a consistent study and training schedule",
    "Ignoring daily routines"
  ],
  answer: "Following a consistent study and training schedule"
},
{
  question: "The NDA Guide advises applicants to improve weak subjects because",
  options: [
    "The Screening Test assesses only one subject",
    "Balanced academic performance increases overall readiness",
    "Weak subjects are removed from the examination",
    "Physical fitness alone determines success"
  ],
  answer: "Balanced academic performance increases overall readiness"
},
{
  question: "Which personal quality helps an officer remain trustworthy throughout his career?",
  options: [
    "Popularity",
    "Integrity",
    "Pride",
    "Competition"
  ],
  answer: "Integrity"
},
{
  question: "According to the NDA Guide, military discipline is best demonstrated when a cadet",
  options: [
    "Obeys regulations only in the presence of instructors",
    "Performs duties correctly whether supervised or not",
    "Avoids responsibility",
    "Depends on others to complete assignments"
  ],
  answer: "Performs duties correctly whether supervised or not"
},
{
  question: "The Guide emphasizes teamwork because",
  options: [
    "Military operations depend on cooperation toward a common objective",
    "Individual success is more important than teamwork",
    "Leadership eliminates teamwork",
    "Teamwork reduces accountability"
  ],
  answer: "Military operations depend on cooperation toward a common objective"
},
{
  question: "According to our chapter on Officer Mindset, courage includes",
  options: [
    "Taking unnecessary risks to impress others",
    "Doing what is right even when it is difficult",
    "Ignoring lawful authority",
    "Avoiding responsibility"
  ],
  answer: "Doing what is right even when it is difficult"
},
{
  question: "The NDA Guide teaches that the greatest reward of becoming an officer is",
  options: [
    "Personal fame",
    "Financial wealth",
    "Serving the nation with honour and professionalism",
    "Travelling around the world"
  ],
  answer: "Serving the nation with honour and professionalism"
},
{
  question: "According to the NDA Guide, what is the main purpose of the Armed Forces Selection Board (AFSB)?",
  options: [
    "To allocate cadets to hostels",
    "To issue military uniforms",
    "To assess candidates' suitability for officer training",
    "To conduct university examinations"
  ],
  answer: "To assess candidates' suitability for officer training"
},
{
  question: "The NDA Guide advises candidates to avoid examination malpractice because it",
  options: [
    "Makes the examination easier",
    "Improves physical fitness",
    "Guarantees admission",
    "Violates military ethics and integrity"
  ],
  answer: "Violates military ethics and integrity"
},
{
  question: "Which officer quality enables a leader to gain the confidence of subordinates?",
  options: [
    "Leading by personal example",
    "Using fear at all times",
    "Seeking personal recognition",
    "Avoiding responsibility"
  ],
  answer: "Leading by personal example"
},
{
  question: "According to the NDA Guide, effective preparation requires candidates to",
  options: [
    "Study only one subject",
    "Balance academic study with physical training",
    "Focus only on interviews",
    "Depend on rumours"
  ],
  answer: "Balance academic study with physical training"
},
{
  question: "Why is punctuality emphasized in military life?",
  options: [
    "It improves popularity",
    "It replaces discipline",
    "It guarantees promotion",
    "Military operations often depend on precise timing"
  ],
 answer: "Military operations often depend on precise timing"
},
{
  question: "The NDA Guide describes professionalism as",
  options: [
    "Working only when supervised",
    "Seeking rewards before duty",
    "Performing duties with competence, discipline, and integrity",
    "Avoiding difficult tasks"
  ],
  answer: "Performing duties with competence, discipline, and integrity"
},
{
  question: "Which action best demonstrates accountability?",
  options: [
    "Blaming junior personnel for mistakes",
    "Accepting responsibility for one's actions",
    "Ignoring operational failures",
    "Avoiding leadership roles"
  ],
  answer: "Accepting responsibility for one's actions"
},
{
  question: "The NDA Guide encourages candidates to read current affairs because",
  options: [
    "Military officers should understand national and international issues",
    "Current affairs replace Mathematics",
    "Only current affairs are examined",
    "They improve physical fitness"
  ],
  answer: "Military officers should understand national and international issues"
},
{
  question: "According to the NDA Guide, perseverance means",
  options: [
    "Ignoring advice from instructors",
    "Avoiding difficult situations",
    "Continuing to improve despite setbacks",
    "Changing career goals after failure"
  ],
  answer: "Continuing to improve despite setbacks"
},
{
  question: "The NDA ultimately seeks to produce officers who are",
  options: [
    "Politically influential",
    "Commercially successful",
    "Academically qualified only",
    "Disciplined, competent, and committed to national service"
  ],
  answer: "Disciplined, competent, and committed to national service"
},
{
  question: "According to the NDA Guide, the first duty of an officer is to",
  options: [
    "Seek promotion",
    "Serve the nation with honour and loyalty",
    "Protect personal interests",
    "Gain public recognition"
  ],
  answer: "Serve the nation with honour and loyalty"
},
{
  question: "Which quality enables an officer to remain calm and effective during emergencies?",
  options: [
    "Popularity",
    "Physical appearance",
    "Emotional stability",
    "Political influence"
  ],
  answer: "Emotional stability"
},
{
  question: "The NDA Guide states that successful preparation depends MOST on",
  options: [
    "Consistent study, discipline, and physical training",
    "Reading only past questions",
    "Depending on luck",
    "Studying only a week before the examination"
  ],
  answer: "Consistent study, discipline, and physical training"
},
{
  question: "A candidate who honestly admits not knowing an answer during an interview is demonstrating",
  options: [
    "Weakness",
    "Fear",
    "Lack of preparation",
    "Integrity"
  ],
  answer: "Integrity"
},
{
  question: "According to our NDA Guide, why should applicants develop leadership skills before admission?",
  options: [
    "Leadership is developed only after graduation",
    "Every officer is expected to influence and direct others effectively",
    "Leadership is needed only by senior officers",
    "Leadership replaces academic excellence"
  ],
  answer: "Every officer is expected to influence and direct others effectively"
},
{
  question: "The Guide explains that self-discipline is shown when a person",
  options: [
    "Works hard only under supervision",
    "Avoids difficult responsibilities",
    "Follows correct standards without being forced",
    "Depends on friends for motivation"
  ],
  answer: "Follows correct standards without being forced"
},
{
  question: "Which of the following best reflects military loyalty according to the NDA Guide?",
  options: [
    "Supporting friends regardless of regulations",
    "Remaining faithful to Nigeria, lawful authority, and military duty",
    "Following public opinion at all times",
    "Avoiding operational responsibility"
  ],
  answer: "Remaining faithful to Nigeria, lawful authority, and military duty"
},
{
  question: "The NDA Guide encourages applicants to exercise regularly because",
  options: [
    "Physical fitness is essential for military effectiveness",
    "Exercise replaces medical screening",
    "Exercise improves interview scores only",
    "Exercise guarantees admission"
  ],
  answer: "Physical fitness is essential for military effectiveness"
},
{
  question: "According to the Guide, an officer who treats everyone fairly regardless of background is demonstrating",
  options: [
    "Professional fairness",
    "Personal ambition",
    "Popularity",
    "Competition"
  ],
  answer: "Professional fairness"
},
{
  question: "The overall objective of the NDA Guide is to prepare candidates to",
  options: [
    "Pass examinations only",
    "Become physically strong only",
    "Develop into disciplined future military officers",
    "Memorize military history"
  ],
  answer: "Develop into disciplined future military officers"
},
{
  question: "According to the NDA Guide, one major purpose of military discipline is to",
  options: [
    "Encourage unhealthy competition",
    "Promote efficiency and obedience during operations",
    "Reduce leadership responsibilities",
    "Eliminate teamwork"
  ],
  answer: "Promote efficiency and obedience during operations"
},
{
  question: "The NDA Guide advises candidates to prepare for CBT examinations because",
  options: [
    "It improves speed and accuracy under examination conditions",
    "It replaces classroom learning",
    "It guarantees admission",
    "It eliminates the need for revision"
  ],
  answer: "It improves speed and accuracy under examination conditions"
},
{
  question: "An officer who always places the welfare of subordinates above personal comfort demonstrates",
  options: [
    "Popularity",
    "Selfless service",
    "Competition",
    "Authority"
  ],
  answer: "Selfless service"
},
{
  question: "According to the NDA Guide, one benefit of studying military ethics is that it helps officers",
  options: [
    "Become wealthier",
    "Gain popularity",
    "Make responsible and lawful decisions",
    "Avoid physical training"
  ],
  answer: "Make responsible and lawful decisions"
},
{
  question: "The NDA Guide emphasizes continuous learning because",
  options: [
    "Promotion depends only on examinations",
    "Military knowledge never changes",
    "Security challenges and technology continue to evolve",
    "Training ends after graduation"
  ],
  answer: "Security challenges and technology continue to evolve"
},
{
  question: "Which quality enables an officer to inspire confidence in subordinates?",
  options: [
    "Integrity and competence",
    "Political influence",
    "Personal wealth",
    "Physical appearance"
  ],
  answer: "Integrity and competence"
},
{
  question: "According to the NDA Guide, teamwork succeeds when members",
  options: [
    "Compete against one another",
    "Avoid communication",
    "Work together toward a common objective",
    "Depend only on the commander"
  ],
  answer: "Work together toward a common objective"
},
{
  question: "A future officer should obey lawful orders because",
  options: [
    "It strengthens military discipline and operational effectiveness",
    "It guarantees promotion",
    "It replaces leadership",
    "It improves examination scores"
  ],
  answer: "It strengthens military discipline and operational effectiveness"
},
{
  question: "According to our NDA Guide, the best way to overcome weaknesses is to",
  options: [
    "Ignore them completely",
    "Blame others",
    "Identify them and work consistently to improve",
    "Avoid difficult tasks"
  ],
  answer: "Identify them and work consistently to improve"
},
{
  question: "The NDA Guide concludes that an ideal officer is one who is",
  options: [
    "Famous and wealthy",
    "Disciplined, courageous, competent, and patriotic",
    "Academically successful only",
    "Physically fit only"
  ],
  answer: "Disciplined, courageous, competent, and patriotic"
},
{
  question: "According to the NDA Guide, why should an applicant avoid relying on rumours about admission?",
  options: [
    "Rumours are always outdated",
    "Official information provides accurate and reliable guidance",
    "Rumours reduce physical fitness",
    "Official information is released after admission"
  ],
  answer: "Official information provides accurate and reliable guidance"
},
{
  question: "The NDA Guide states that an officer's credibility is built primarily through",
  options: [
    "Political influence",
    "Financial success",
    "Integrity and consistent actions",
    "Years of service alone"
  ],
  answer: "Integrity and consistent actions"
},
{
  question: "According to our lesson, why is time management important during NDA preparation?",
  options: [
    "It helps candidates balance study, exercise, and rest effectively",
    "It reduces the number of subjects to study",
    "It guarantees admission",
    "It removes the need for revision"
  ],
  answer: "It helps candidates balance study, exercise, and rest effectively"
},
{
  question: "The NDA Guide explains that confidence during an interview should be based on",
  options: [
    "Guessing answers boldly",
    "Preparation, honesty, and self-control",
    "Speaking louder than everyone else",
    "Memorizing unrelated facts"
  ],
  answer: "Preparation, honesty, and self-control"
},
{
  question: "A future officer who keeps improving after receiving constructive criticism is demonstrating",
  options: [
    "Arrogance",
    "Professional growth",
    "Weakness",
    "Fear"
  ],
  answer: "Professional growth"
},
{
  question: "According to the NDA Guide, the purpose of physical training is to",
  options: [
    "Develop endurance required for military service",
    "Replace academic preparation",
    "Prepare candidates only for sports competitions",
    "Reduce medical screening requirements"
  ],
 answer: "Develop endurance required for military service"
},
{
  question: "The NDA Guide teaches that leadership is most effective when a leader",
  options: [
    "Commands through fear alone",
    "Leads by personal example",
    "Avoids responsibility",
    "Delegates every difficult task"
  ],
  answer: "Leads by personal example"
},
{
  question: "Which habit best reflects the officer mindset described in the NDA Guide?",
  options: [
    "Seeking excuses for failure",
    "Waiting for motivation before studying",
    "Accepting responsibility and remaining mission-focused",
    "Ignoring personal weaknesses"
  ],
  answer: "Accepting responsibility and remaining mission-focused"
},
{
  question: "According to our NDA Guide, military service demands",
  options: [
    "Commitment to national interest above personal interest",
    "Personal success before national duty",
    "Academic excellence only",
    "Physical fitness only"
  ],
  answer: "Commitment to national interest above personal interest"
},
{
  question: "The final message of the NDA Guide encourages every future cadet to",
  options: [
    "Focus only on passing the examination",
    "Compete with friends",
    "Aim for fame after graduation",
    "Prepare with discipline because the nation will one day depend on your leadership"
  ],
  answer: "Prepare with discipline because the nation will one day depend on your leadership"
},
{
  question: "According to the NDA Guide, why is the medical examination an important stage of the selection process?",
  options: [
    "It replaces the Screening Test",
    "It confirms that candidates are medically fit for military training",
    "It determines academic performance",
    "It is conducted after commissioning"
  ],
  answer: "It confirms that candidates are medically fit for military training"
},
{
  question: "The NDA Guide emphasizes that successful officers are those who",
  options: [
    "Place service before personal interest",
    "Seek promotion before responsibility",
    "Depend entirely on subordinates",
    "Avoid difficult decisions"
  ],
  answer: "Place service before personal interest"
},
{
  question: "According to our lesson, one advantage of studying with a personal timetable is that it",
  options: [
    "Eliminates physical training",
    "Guarantees admission",
    "Improves organization and consistency",
    "Reduces the number of subjects to study"
  ],
  answer: "Improves organization and consistency"
},
{
  question: "The NDA Guide advises candidates to remain calm during interviews because",
  options: [
    "Interviewers prefer silent candidates",
    "Confidence is measured by loudness",
    "Calmness allows candidates to think and respond clearly",
    "It reduces the number of questions asked"
  ],
  answer: "Calmness allows candidates to think and respond clearly"
},
{
  question: "According to the NDA Guide, the best way to prepare for CBT examinations is to",
  options: [
    "Study only on examination day",
    "Practise regularly under timed conditions",
    "Depend only on guessing",
    "Ignore previous mistakes"
  ],
  answer: "Practise regularly under timed conditions"
},
{
  question: "The NDA Guide explains that an officer should always respect lawful authority because",
  options: [
    "It strengthens military order and discipline",
    "It guarantees promotion",
    "It replaces leadership ability",
    "It improves physical fitness"
  ],
  answer: "It strengthens military order and discipline"
},
{
  question: "Which characteristic best reflects the officer mindset described in our Guide?",
  options: [
    "Avoiding responsibility",
    "Waiting for instructions in every situation",
    "Being proactive and mission-focused",
    "Seeking personal recognition"
  ],
  answer: "Being proactive and mission-focused"
},
{
  question: "According to the NDA Guide, why is honesty important during the admission process?",
  options: [
    "It reflects the integrity expected of future officers",
    "It increases examination time",
    "It replaces academic qualifications",
    "It guarantees automatic selection"
  ],
  answer: "It reflects the integrity expected of future officers"
},
{
  question: "The NDA Guide teaches that physical endurance is developed through",
  options: [
    "Regular exercise and consistent training",
    "Reading military history",
    "Interview practice only",
    "Classroom lectures alone"
  ],
 answer: "Regular exercise and consistent training"
},
{
  question: "According to the final chapter of the NDA Guide, the greatest honour of an officer is to",
  options: [
    "Become famous after graduation",
    "Lead with courage, integrity, and loyalty in service to Nigeria",
    "Achieve the highest salary",
    "Avoid operational assignments"
  ],
 answer: "Lead with courage, integrity, and loyalty in service to Nigeria"
},
{
  question: "According to the NDA Guide, why should candidates set realistic study goals during preparation?",
  options: [
    "To reduce the number of subjects studied",
    "To improve steady progress and maintain motivation",
    "To avoid physical training",
    "To shorten the admission process"
  ],
  answer: "To improve steady progress and maintain motivation"
},
{
  question: "The NDA Guide emphasizes that leadership begins with",
  options: [
    "Commanding others",
    "Holding the highest rank",
    "Leading oneself through discipline",
    "Giving orders confidently"
  ],
  answer: "Leading oneself through discipline"
},
{
  question: "According to our Guide, one major benefit of regular revision is that it",
  options: [
    "Improves retention and confidence",
    "Guarantees admission",
    "Eliminates the need for practice tests",
    "Replaces classroom learning"
  ],
  answer: "Improves retention and confidence"
},
{
  question: "The NDA Guide states that a candidate who remains truthful throughout the selection process demonstrates",
  options: [
    "Confidence",
    "Popularity",
    "Professional competence",
    "Integrity"
  ],
  answer: "Integrity"
},
{
  question: "According to the Guide, why should applicants avoid procrastination?",
  options: [
    "It improves interview performance",
    "It creates enough time for consistent preparation",
    "It increases physical strength",
    "It reduces examination stress completely"
  ],
  answer: "It creates enough time for consistent preparation"
},
{
  question: "The NDA Guide teaches that an effective officer should always",
  options: [
    "Accept constructive criticism and improve",
    "Reject advice from others",
    "Depend only on experience",
    "Avoid difficult responsibilities"
  ],
 answer: "Accept constructive criticism and improve"
},
{
  question: "According to the NDA Guide, which quality is essential for earning the trust of subordinates?",
  options: [
    "Personal wealth",
    "Integrity and fairness",
    "Political influence",
    "Academic grades alone"
  ],
 answer: "Integrity and fairness"
},
{
  question: "The NDA Guide recommends practising CBT questions repeatedly because it",
  options: [
    "Builds speed, confidence, and examination accuracy",
    "Replaces textbook study",
    "Guarantees perfect scores",
    "Removes the need for revision"
  ],
 answer: "Builds speed, confidence, and examination accuracy"
},
{
  question: "According to the Officer Mindset chapter, success is achieved through",
  options: [
    "Luck and opportunity",
    "Natural talent alone",
    "Consistent effort, discipline, and determination",
    "Waiting for the perfect time"
  ],
 answer: "Consistent effort, discipline, and determination"
},
{
  question: "The NDA Guide concludes that the responsibility of every future officer is to",
  options: [
    "Seek personal achievement above all else",
    "Protect Nigeria with honour, discipline, and professionalism",
    "Focus only on academic excellence",
    "Avoid national assignments"
  ],
 answer: "Protect Nigeria with honour, discipline, and professionalism"
},
{
  question: "According to the NDA Guide, why should applicants maintain consistency throughout their preparation?",
  options: [
    "It reduces the number of examination subjects",
    "Consistent preparation produces steady improvement over time",
    "It guarantees automatic admission",
    "It replaces physical training"
  ],
  answer: "Consistent preparation produces steady improvement over time"
},
{
  question: "The NDA Guide teaches that a future officer should respond to unexpected challenges by",
  options: [
    "Remaining calm and adapting appropriately",
    "Giving up immediately",
    "Waiting for others to solve the problem",
    "Ignoring the challenge"
  ],
  answer: "Remaining calm and adapting appropriately"
},
{
  question: "According to our Guide, one advantage of obeying the chain of command is that it",
  options: [
    "Increases personal popularity",
    "Allows junior officers to ignore instructions",
    "Promotes order, accountability, and effective communication",
    "Reduces leadership responsibilities"
  ],
  answer: "Promotes order, accountability, and effective communication"
},
{
  question: "The NDA Guide describes courage as",
  options: [
    "Taking unnecessary risks",
    "Acting with confidence despite fear when duty requires it",
    "Ignoring lawful authority",
    "Seeking recognition during every task"
  ],
  answer: "Acting with confidence despite fear when duty requires it"
},
{
  question: "According to the NDA Guide, why is teamwork essential during military operations?",
  options: [
    "Every mission depends on coordinated effort",
    "It replaces leadership",
    "It reduces discipline",
    "It encourages competition"
  ],
 answer: "Every mission depends on coordinated effort"
},
{
  question: "Which quality enables an officer to make fair decisions without bias?",
  options: [
    "Integrity",
    "Popularity",
    "Financial influence",
    "Political affiliation"
  ],
  answer: "Integrity"
},
{
  question: "According to the NDA Guide, an applicant should prepare for interviews by",
  options: [
    "Memorizing every possible answer",
    "Speaking as loudly as possible",
    "Understanding the Academy and answering honestly",
    "Avoiding eye contact"
  ],
  answer: "Understanding the Academy and answering honestly"
},
{
  question: "The Officer Mindset chapter teaches that true leadership begins with",
  options: [
    "Controlling others",
    "Self-discipline and personal responsibility",
    "Holding a high rank",
    "Receiving public recognition"
  ],
  answer: "Self-discipline and personal responsibility"
},
{
  question: "According to the NDA Guide, the best preparation strategy is to",
  options: [
    "Study only past questions",
    "Focus only on physical fitness",
    "Combine lessons, revision, CBT practice, and physical training",
    "Read only on weekends"
  ],
  answer: "Combine lessons, revision, CBT practice, and physical training"
},
{
  question: "The NDA Guide reminds every future officer that success is measured ultimately by",
  options: [
    "Academic certificates only",
    "Personal wealth",
    "Rank alone",
    "Honourable service to Nigeria with discipline, competence, and integrity"
  ],
  answer: "Honourable service to Nigeria with discipline, competence, and integrity"
},
{
  question: "According to the NDA Guide, what should be the primary motivation for becoming a military officer?",
  options: [
    "Personal fame",
    "Financial rewards",
    "Serving Nigeria with honour and commitment",
    "Travelling around the world"
  ],
  answer: "Serving Nigeria with honour and commitment"
},
{
  question: "The NDA Guide emphasizes that discipline is best described as",
  options: [
    "Doing what is right consistently even without supervision",
    "Obeying instructions only when convenient",
    "Following friends before regulations",
    "Avoiding difficult responsibilities"
  ],
  answer: "Doing what is right consistently even without supervision"
},
{
  question: "According to the NDA Guide, why should candidates review their mistakes after every CBT practice?",
  options: [
    "To reduce examination time",
    "To identify weaknesses and improve performance",
    "To memorize the answers only",
    "To avoid studying textbooks"
  ],
  answer: "To identify weaknesses and improve performance"
},
{
  question: "The Officer Qualities chapter explains that an officer must be trusted because",
  options: [
    "Subordinates depend on the officer's judgment and decisions",
    "The officer holds a higher rank",
    "Trust is required only during training",
    "It guarantees promotion"
  ],
  answer: "Subordinates depend on the officer's judgment and decisions"
},
{
  question: "According to the NDA Guide, one benefit of maintaining physical fitness is that it",
  options: [
    "Improves readiness for military training",
    "Eliminates academic examinations",
    "Guarantees admission",
    "Replaces leadership training"
  ],
  answer: "Improves readiness for military training"
},
{
  question: "The NDA Guide advises applicants to remain confident during interviews because",
  options: [
    "Confidence reflects preparation and self-control",
    "Confidence replaces knowledge",
    "Interviewers reward loud voices",
    "Confidence guarantees admission"
  ],
  answer: "Confidence reflects preparation and self-control"
},
{
  question: "According to our Guide, an officer demonstrates professionalism by",
  options: [
    "Performing every assigned duty competently and responsibly",
    "Working only when supervised",
    "Avoiding challenging assignments",
    "Seeking recognition before service"
  ],
  answer: "Performing every assigned duty competently and responsibly"
},
{
  question: "The NDA Guide teaches that successful candidates usually",
  options: [
    "Prepare consistently instead of depending on last-minute reading",
    "Read only a day before the examination",
    "Depend entirely on luck",
    "Ignore physical training"
  ],
  answer: "Prepare consistently instead of depending on last-minute reading"
},
{
  question: "According to the Officer Mindset chapter, perseverance means",
  options: [
    "Refusing to accept advice",
    "Stopping after the first failure",
    "Remaining committed despite obstacles",
    "Changing goals frequently"
  ],
 answer: "Remaining committed despite obstacles"
},
{
  question: "The NDA Guide concludes that every officer should always remember that",
  options: [
    "Leadership is a privilege that requires responsibility and sacrifice",
    "Rank is more important than character",
    "Success depends only on intelligence",
    "Discipline is necessary only during training"
  ],
  answer: "Leadership is a privilege that requires responsibility and sacrifice"
},
{
  question: "According to the NDA Guide, why is regular self-evaluation important during preparation?",
  options: [
    "It replaces classroom learning",
    "It helps candidates identify strengths and weaknesses",
    "It guarantees admission",
    "It eliminates physical training"
  ],
  answer: "It helps candidates identify strengths and weaknesses"
},
{
  question: "The NDA Guide explains that loyalty requires an officer to remain faithful to",
  options: [
    "Personal interests",
    "Friends and relatives only",
    "Political organizations",
    "Nigeria, lawful authority, and military duty"
  ],
  answer: "Nigeria, lawful authority, and military duty"
},
{
  question: "According to our Guide, one purpose of daily revision is to",
  options: [
    "Strengthen long-term understanding of studied topics",
    "Reduce physical endurance",
    "Avoid practising CBT questions",
    "Depend on memory alone"
  ],
  answer: "Strengthen long-term understanding of studied topics"
},
{
  question: "The NDA Guide advises applicants to maintain emotional control because",
  options: [
    "It makes physical training easier",
    "It helps officers make sound decisions under pressure",
    "It guarantees success in interviews",
    "It replaces discipline"
  ],
  answer: "It helps officers make sound decisions under pressure"
},
{
  question: "According to the Officer Qualities chapter, humility means",
  options: [
    "Ignoring constructive criticism",
    "Being willing to learn and improve continuously",
    "Avoiding leadership roles",
    "Accepting failure without effort"
  ],
  answer: "Being willing to learn and improve continuously"
},
{
  question: "The NDA Guide teaches that respect is earned primarily through",
  options: [
    "High military rank alone",
    "Financial success",
    "Professional conduct and good character",
    "Long years of service only"
  ],
  answer: "Professional conduct and good character"
},
{
  question: "According to the Guide, candidates should avoid procrastination because it",
  options: [
    "Creates unnecessary pressure before examinations",
    "Improves physical strength",
    "Guarantees higher scores",
    "Reduces revision time"
  ],
  answer: "Creates unnecessary pressure before examinations"
},
{
  question: "The Officer Mindset chapter emphasizes that true confidence comes from",
  options: [
    "Luck",
    "Preparation and consistent effort",
    "Natural talent alone",
    "Public recognition"
  ],
  answer: "Preparation and consistent effort"
},
{
  question: "According to the NDA Guide, which habit best prepares a candidate for military life?",
  options: [
    "Waiting for instructions before every action",
    "Avoiding responsibility",
    "Living a disciplined and organized lifestyle",
    "Studying only during weekends"
  ],
  answer: "Living a disciplined and organized lifestyle"
},
{
  question: "The final lesson of the NDA Guide reminds every future officer that leadership is",
  options: [
    "A responsibility that demands sacrifice, discipline, and service",
    "A privilege without responsibility",
    "An opportunity for personal gain",
    "Useful only during military training"
  ],
  answer: "A responsibility that demands sacrifice, discipline, and service"
},
{
  question: "According to the NDA Guide, what is the most effective way to prepare for the Armed Forces Selection Board (AFSB)?",
  options: [
    "Depend entirely on recommendations",
    "Develop character, leadership, fitness, and confidence",
    "Memorize interview questions only",
    "Focus only on physical training"
  ],
  answer: "Develop character, leadership, fitness, and confidence"
},
{
  question: "The NDA Guide explains that selfless service means",
  options: [
    "Seeking personal comfort before duty",
    "Avoiding difficult assignments",
    "Working only when rewarded",
    "Putting the nation's interest above personal gain"
  ],
  answer: "Putting the nation's interest above personal gain"
},
{
  question: "According to our Guide, one important benefit of regular physical exercise is that it",
  options: [
    "Builds endurance required for military activities",
    "Guarantees admission into the NDA",
    "Eliminates the need for medical examinations",
    "Replaces academic preparation"
  ],
  answer: "Builds endurance required for military activities"
},
{
  question: "The NDA Guide states that an officer should make decisions based on",
  options: [
    "Personal emotions",
    "Rumours",
    "Facts, sound judgment, and military values",
    "Public opinion"
  ],
  answer: "Facts, sound judgment, and military values"
},
{
  question: "According to the Officer Mindset chapter, failure should be viewed as",
  options: [
    "The end of preparation",
    "A reason to quit",
    "An opportunity to learn and improve",
    "Evidence of inability"
  ],
  answer: "An opportunity to learn and improve"
},
{
  question: "The NDA Guide teaches that respect for others contributes to",
  options: [
    "Weak leadership",
    "Unit cohesion and mutual trust",
    "Reduced discipline",
    "Personal popularity only"
  ],
  answer: "Unit cohesion and mutual trust"
},
{
  question: "According to our Guide, the best candidates prepare by",
  options: [
    "Reading only past questions",
    "Studying consistently while maintaining physical fitness",
    "Waiting until examination week",
    "Ignoring weak subjects"
  ],
  answer: "Studying consistently while maintaining physical fitness"
},
{
  question: "The NDA Guide emphasizes that officers must remain adaptable because",
  options: [
    "Military operations and security challenges continually change",
    "Regulations change every day",
    "Adaptability replaces discipline",
    "It guarantees promotion"
  ],
  answer: "Military operations and security challenges continually change"
},
{
  question: "According to the Guide, an officer demonstrates courage by",
  options: [
    "Taking unnecessary risks",
    "Ignoring lawful authority",
    "Doing what is right despite fear or difficulty",
    "Seeking recognition during operations"
  ],
 answer: "Doing what is right despite fear or difficulty"
},
{
  question: "The NDA Guide concludes that the future of the Armed Forces depends greatly on officers who are",
  options: [
    "Wealthy and influential",
    "Highly popular",
    "Physically strong only",
    "Disciplined, competent, ethical, and committed to national service"
  ],
  answer: "Disciplined, competent, ethical, and committed to national service"
},
{
  question: "According to the NDA Guide, the most reliable source of admission information is",
  options: [
    "Friends and social media posts",
    "Unofficial blogs",
    "The official NDA announcements and publications",
    "Rumours from previous applicants"
  ],
  answer: "The official NDA announcements and publications"
},
{
  question: "The NDA Guide explains that discipline is the foundation of military effectiveness because it",
  options: [
    "Guarantees promotion",
    "Ensures obedience, order, and mission success",
    "Eliminates leadership",
    "Replaces professional competence"
  ],
  answer: "Ensures obedience, order, and mission success"
},
{
  question: "According to the Officer Qualities chapter, an officer who treats every subordinate fairly demonstrates",
  options: [
    "Justice and impartiality",
    "Weakness",
    "Fear of authority",
    "Lack of confidence"
  ],
  answer: "Justice and impartiality"
},
{
  question: "The NDA Guide recommends setting daily study goals because they",
  options: [
    "Reduce the need for revision",
    "Guarantee admission",
    "Help maintain consistency and measure progress",
    "Replace physical training"
  ],
  answer: "Help maintain consistency and measure progress"
},
{
  question: "According to our Guide, an applicant who remains determined despite repeated setbacks possesses",
  options: [
    "Popularity",
    "Perseverance",
    "Authority",
    "Pride"
  ],
  answer: "Perseverance"
},
{
  question: "The NDA Guide teaches that officers should respect the chain of command because it",
  options: [
    "Reduces responsibility",
    "Allows junior officers to make all decisions",
    "Improves discipline and coordination",
    "Eliminates teamwork"
  ],
  answer: "Improves discipline and coordination"
},
{
  question: "According to the Guide, military leadership is most effective when a leader",
  options: [
    "Leads by example and accepts responsibility",
    "Depends entirely on rank",
    "Avoids difficult decisions",
    "Delegates every responsibility"
  ],
  answer: "Leads by example and accepts responsibility"
},
{
  question: "The Officer Mindset chapter encourages future officers to",
  options: [
    "Wait for success to come naturally",
    "Develop discipline, resilience, and continuous self-improvement",
    "Depend only on talent",
    "Ignore constructive criticism"
  ],
  answer: "Develop discipline, resilience, and continuous self-improvement"
},
{
  question: "According to the NDA Guide, one reason candidates should practise under timed conditions is to",
  options: [
    "Increase examination confidence and time management",
    "Reduce the number of questions",
    "Avoid reading textbooks",
    "Replace revision completely"
  ],
  answer: "Increase examination confidence and time management"
},
{
  question: "The final lesson of the NDA Guide teaches that the honour of an officer is measured by",
  options: [
    "Years of service only",
    "Academic qualifications only",
    "Rank and popularity",
    "Character, discipline, and faithful service to Nigeria"
  ],
  answer: "Character, discipline, and faithful service to Nigeria"
},
{
  question: "According to the NDA Guide, why should a candidate maintain a positive attitude throughout the selection process?",
  options: [
    "It guarantees automatic admission",
    "It helps candidates remain motivated and focused despite challenges",
    "It replaces academic preparation",
    "It eliminates physical training"
  ],
  answer: "It helps candidates remain motivated and focused despite challenges"
},
{
  question: "The NDA Guide states that the best way to build self-confidence is through",
  options: [
    "Preparation and consistent practice",
    "Boasting about one's abilities",
    "Ignoring weaknesses",
    "Depending on luck"
  ],
  answer: "Preparation and consistent practice"
},
{
  question: "According to the Officer Qualities chapter, an officer who keeps confidential information secure demonstrates",
  options: [
    "Professional responsibility",
    "Fear",
    "Popularity",
    "Competition"
  ],
  answer: "Professional responsibility"
},
{
  question: "The NDA Guide teaches that applicants should improve their weak subjects because",
  options: [
    "Every subject contributes to overall examination performance",
    "Weak subjects are never examined",
    "Only English matters",
    "Physical fitness replaces academics"
  ],
  answer: "Every subject contributes to overall examination performance"
},
{
  question: "According to our Guide, which habit best develops mental toughness?",
  options: [
    "Avoiding difficult tasks",
    "Facing challenges with determination and discipline",
    "Studying only when motivated",
    "Depending on others for encouragement"
  ],
 answer: "Facing challenges with determination and discipline"
},
{
  question: "The NDA Guide emphasizes that respect for regulations helps to",
  options: [
    "Reduce leadership",
    "Increase confusion",
    "Promote order and operational effectiveness",
    "Guarantee promotion"
  ],
 answer: "Promote order and operational effectiveness"
},
{
  question: "According to the Officer Mindset chapter, a future officer should always",
  options: [
    "Seek opportunities to learn and improve",
    "Assume he already knows everything",
    "Avoid accepting criticism",
    "Wait for success without effort"
  ],
 answer: "Seek opportunities to learn and improve"
},
{
  question: "The NDA Guide explains that military leadership is built on",
  options: [
    "Rank alone",
    "Authority without responsibility",
    "Character, competence, and commitment",
    "Personal influence only"
  ],
 answer: "Character, competence, and commitment"
},
{
  question: "According to the Guide, candidates preparing for the Screening Test should",
  options: [
    "Depend only on past questions",
    "Ignore current affairs",
    "Study only their favourite subjects",
    "Prepare broadly and revise consistently"
  ],
 answer: "Prepare broadly and revise consistently"
},
{
  question: "The final message of the NDA Guide reminds future officers that",
  options: [
    "Success is measured only by rank",
    "Discipline is needed only during training",
    "Military service is a lifelong commitment to honour, integrity, and national duty",
    "Academic excellence alone is enough"
  ],
 answer: "Military service is a lifelong commitment to honour, integrity, and national duty"
},



];


let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 15 * 60;
let timerId;

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
function startTimer() {
    clearInterval(timerId);

    timerEl.textContent = formatTime(timeLeft);

    timerId = setInterval(() => {

        timeLeft--;

        timerEl.textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timerId);
            showResult();
        }

    }, 1000);
}
function startQuiz() {

    quizQuestions = shuffle([...allQuestions]).slice(0, 20);

    currentQuestion = 0;
    score = 0;
    answered = false;
    timeLeft = 15 * 60;

    startTimer();
    loadQuestion();

}
function loadQuestion() {

    answered = false;

    const q = quizQuestions[currentQuestion];

    questionEl.textContent = q.question;

    questionNumberEl.textContent =
        `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

    progressEl.textContent =
        `${currentQuestion + 1}/${quizQuestions.length}`;

    optionsEl.innerHTML = "";

    q.options.forEach(option => {

        const button = document.createElement("button");

        button.textContent = option;

        button.className = "option-btn";

        button.onclick = () => selectAnswer(button, option);

        optionsEl.appendChild(button);

    });

}
function selectAnswer(button, answer) {

    if (answered) return;

    answered = true;

    const correctAnswer = quizQuestions[currentQuestion].answer;

    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(btn => {

        btn.disabled = true;

        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        }

        if (
            btn.textContent === answer &&
            answer !== correctAnswer
        ) {
            btn.classList.add("wrong");
        }

    });

    if (answer === correctAnswer) {
        score++;
    }

}
nextBtn.addEventListener("click", () => {

    if (!answered) {
        alert("Please select an answer first.");
        return;
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        loadQuestion();

    } else {

        clearInterval(timerId);
        showResult();

    }

});
function showResult() {

    clearInterval(timerId);

    const percentage = Math.round((score / quizQuestions.length) * 100);

    let grade = "";
    let remark = "";

    if (percentage >= 80) {
        grade = "A";
        remark = "🏆 Excellent! Outstanding Performance.";
    } else if (percentage >= 70) {
        grade = "B";
        remark = "🌟 Very Good! Keep it up.";
    } else if (percentage >= 60) {
        grade = "C";
        remark = "👍 Good Job! You can still improve.";
    } else if (percentage >= 50) {
        grade = "D";
        remark = "🙂 Fair. Practice more.";
    } else {
        grade = "F";
        remark = "📚 Poor. Keep Practicing.";
    }

    document.querySelector(".quiz-container").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";

    document.getElementById("score").textContent = score;
    document.getElementById("totalQuestions").textContent = quizQuestions.length;
    document.getElementById("percentage").textContent = percentage + "%";
    document.getElementById("grade").textContent = grade;
    document.getElementById("remark").textContent = remark;

}
function restartQuiz() {

    document.querySelector(".quiz-container").style.display = "block";
    document.getElementById("resultContainer").style.display = "none";

    startQuiz();

}

startQuiz();