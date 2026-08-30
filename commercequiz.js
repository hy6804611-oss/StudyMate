// ======================================
// StudyMate commerce Quiz
// ======================================

const allQuestions = [
  
{
    question: "Which of the following best describes commerce?",
    options: [
        "Extraction of raw materials from the earth",
        "Buying, selling and all activities that facilitate the exchange of goods and services",
        "Manufacturing finished goods only",
        "Construction of buildings"
    ],
    answer: "Buying, selling and all activities that facilitate the exchange of goods and services"
},
{
    question: "A warehouse licensed by the government for storing imported goods before customs duty is paid is known as a",
    options: [
        "Private warehouse",
        "Cold storage warehouse",
        "Public warehouse",
        "Bonded warehouse"
    ],
    answer: "Bonded warehouse"
},
{
    question: "The main purpose of insurance is to",
    options: [
        "Guarantee profit in business",
        "Provide protection against financial loss",
        "Increase the selling price of goods",
        "Reduce government taxation"
    ],
    answer: "Provide protection against financial loss"
},
{
    question: "Which of the following is NOT a function of money?",
    options: [
        "Store of value",
        "Medium of exchange",
        "Production of goods",
        "Measure of value"
    ],
    answer: "Production of goods"
},
{
    question: "A business owned and managed by one individual is called",
    options: [
        "Partnership",
        "Public limited company",
        "Sole proprietorship",
        "Co-operative society"
    ],
    answer: "Sole proprietorship"
},
{
    question: "Which document is issued by a seller to inform a buyer of the amount payable for goods supplied?",
    options: [
        "Invoice",
        "Receipt",
        "Cheque",
        "Statement of account"
    ],
    answer: "Invoice"
},
{
    question: "The major advantage of sea transport over air transport is that it",
    options: [
        "Is the fastest means of transport",
        "Can carry very heavy and bulky goods at relatively low cost",
        "Requires fewer loading facilities",
        "Operates without weather conditions"
    ],
    answer: "Can carry very heavy and bulky goods at relatively low cost"
},
{
    question: "Which of the following is an example of electronic money?",
    options: [
        "Gold coins",
        "Cowries",
        "Debit card",
        "Banknote"
    ],
    answer: "Debit card"
},
{
    question: "The principle of insurance which requires both parties to disclose all material facts is known as",
    options: [
        "Contribution",
        "Utmost good faith",
        "Subrogation",
        "Indemnity"
    ],
    answer: "Utmost good faith"
},
{
    question: "One major function of a commercial bank is to",
    options: [
        "Print currency notes",
        "Make national laws",
        "Accept deposits from customers",
        "Collect import duties"
    ],
    answer: "Accept deposits from customers"
},
{
    question: "Which of the following best explains home trade?",
    options: [
        "Trade between two neighboring countries",
        "Trade carried out within the boundaries of one country",
        "Trade involving only agricultural products",
        "Trade conducted through the internet"
    ],
    answer: "Trade carried out within the boundaries of one country"
},
{
    question: "An advertisement intended to remind consumers about an existing product is known as",
    options: [
        "Institutional advertising",
        "Reminder advertising",
        "Persuasive advertising",
        "Informative advertising"
    ],
    answer: "Reminder advertising"
},
{
    question: "Which consumer right allows a buyer to receive truthful details about a product before purchase?",
    options: [
        "Right to information",
        "Right to safety",
        "Right to redress",
        "Right to choose"
    ],
    answer: "Right to information"
},
{
    question: "The institution responsible for regulating the money supply in a country is the",
    options: [
        "Merchant bank",
        "Mortgage bank",
        "Central bank",
        "Microfinance bank"
    ],
    answer: "Central bank"
},
{
    question: "Which of the following is a major objective of sales promotion?",
    options: [
        "To reduce production permanently",
        "To increase sales within a short period",
        "To eliminate competition completely",
        "To replace advertising"
    ],
    answer: "To increase sales within a short period"
},
{
    question: "A company raises long-term capital mainly through the",
    options: [
        "Capital market",
        "Money market",
        "Commodity market",
        "Labour market"
    ],
    answer: "Capital market"
},
{
    question: "Which source of business finance comes from within the business itself?",
    options: [
        "Government grant",
        "Bank loan",
        "Retained profit",
        "Trade credit"
    ],
    answer: "Retained profit"
},
{
    question: "The legal document that governs the relationship among partners in a partnership business is called the",
    options: [
        "Certificate of incorporation",
        "Partnership deed",
        "Prospectus",
        "Memorandum of association"
    ],
    answer: "Partnership deed"
},
{
    question: "A company becomes a separate legal entity after receiving the",
    options: [
        "Trading licence",
        "Business permit",
        "Certificate of incorporation",
        "Tax clearance certificate"
    ],
    answer: "Certificate of incorporation"
},
{
    question: "Which modern business practice enables customers to purchase goods through the internet?",
    options: [
        "Warehousing",
        "Factoring",
        "E-commerce",
        "Barter trade"
    ],
    answer: "E-commerce"
},
{
    question: "The branch of production that involves changing raw materials into finished goods is known as",
    options: [
        "Manufacturing",
        "Extraction",
        "Commerce",
        "Construction"
    ],
    answer: "Manufacturing"
},
{
    question: "A person engaged in rendering services such as teaching or medical practice belongs to the",
    options: [
        "Extractive occupation",
        "Commercial occupation",
        "Industrial occupation",
        "Direct service occupation"
    ],
    answer: "Direct service occupation"
},
{
    question: "Which of the following is an example of visible trade?",
    options: [
        "Importation of machinery",
        "Banking services",
        "Tourism",
        "Insurance services"
    ],
    answer: "Importation of machinery"
},
{
    question: "A retailer mainly performs the function of",
    options: [
        "Importing goods",
        "Selling goods directly to final consumers",
        "Manufacturing products",
        "Exporting raw materials"
    ],
    answer: "Selling goods directly to final consumers"
},
{
    question: "The document issued by a buyer requesting goods from a seller is called",
    options: [
        "Delivery note",
        "Order form",
        "Receipt",
        "Invoice"
    ],
    answer: "Order form"
},
{
    question: "Which means of transport is most suitable for delivering perishable goods over long distances in the shortest time?",
    options: [
        "Rail transport",
        "Road transport",
        "Air transport",
        "Sea transport"
    ],
    answer: "Air transport"
},
{
    question: "One major advantage of electronic communication is that it",
    options: [
        "Requires physical delivery",
        "Provides instant exchange of information",
        "Is always expensive",
        "Cannot be used internationally"
    ],
    answer: "Provides instant exchange of information"
},
{
    question: "A warehouse used mainly for preserving fish, meat and fruits is called a",
    options: [
        "Private warehouse",
        "Cold storage warehouse",
        "Public warehouse",
        "Bonded warehouse"
    ],
    answer: "Cold storage warehouse"
},
{
    question: "The payment made by an insured to an insurance company is known as",
    options: [
        "Compensation",
        "Dividend",
        "Premium",
        "Commission"
    ],
    answer: "Premium"
},
{
    question: "Which type of bank account is most suitable for customers who carry out frequent business transactions?",
    options: [
        "Savings account",
        "Current account",
        "Fixed deposit account",
        "Mortgage account"
    ],
    answer: "Current account"
},
{
    question: "Which characteristic makes money easy to divide into smaller units without losing value?",
    options: [
        "Scarcity",
        "Durability",
        "Divisibility",
        "Portability"
    ],
    answer: "Divisibility"
},
{
    question: "One major disadvantage of a sole proprietorship is",
    options: [
        "Unlimited liability",
        "Shared profits",
        "Government ownership",
        "Complex registration procedures"
    ],
    answer: "Unlimited liability"
},
{
    question: "The principle of 'one member, one vote' is commonly associated with",
    options: [
        "Public limited companies",
        "Co-operative societies",
        "Merchant banks",
        "Partnerships"
    ],
    answer: "Co-operative societies"
},
{
    question: "Advertising that focuses on promoting the reputation of an organization rather than a specific product is called",
    options: [
        "Reminder advertising",
        "Institutional advertising",
        "Persuasive advertising",
        "Informative advertising"
    ],
    answer: "Institutional advertising"
},
{
    question: "Offering customers free samples of a new product is an example of",
    options: [
        "Personal selling",
        "Sales promotion",
        "Public relations",
        "Brand positioning"
    ],
    answer: "Sales promotion"
},
{
    question: "Which of the following organizations is responsible for ensuring that food and drugs are safe for public use in Nigeria?",
    options: [
        "FCCPC",
        "CAC",
        "NAFDAC",
        "NGX"
    ],
    answer: "NAFDAC"
},
{
    question: "A licensed professional who buys and sells securities on behalf of investors is known as a",
    options: [
        "Wholesaler",
        "Auditor",
        "Stockbroker",
        "Underwriter"
    ],
    answer: "Stockbroker"
},
{
    question: "Which of the following is a long-term financial instrument traded in the capital market?",
    options: [
        "Treasury bill",
        "Commercial paper",
        "Bond",
        "Bank overdraft"
    ],
    answer: "Bond"
},
{
    question: "Which source of finance allows a business to obtain goods now and pay for them later?",
    options: [
        "Hire purchase",
        "Trade credit",
        "Issue of shares",
        "Retained earnings"
    ],
    answer: "Trade credit"
},
{
    question: "Which modern business technology allows customers to make payments directly with bank cards at retail outlets?",
    options: [
        "ATM",
        "Cloud storage",
        "Point of Sale (POS) system",
        "Video conferencing"
    ],
    answer: "Point of Sale (POS) system"
},
{
    question: "Commerce bridges the gap between",
    options: [
        "Manufacturers and competitors",
        "Producers and consumers",
        "Farmers and miners",
        "Employers and employees"
    ],
    answer: "Producers and consumers"
},
{
    question: "Which branch of production involves obtaining natural resources directly from the earth?",
    options: [
        "Manufacturing",
        "Construction",
        "Extractive production",
        "Commercial production"
    ],
    answer: "Extractive production"
},
{
    question: "A wholesaler differs from a retailer because the wholesaler",
    options: [
        "Sells directly to final consumers",
        "Buys goods mainly in small quantities",
        "Purchases goods in bulk for resale",
        "Produces finished goods"
    ],
    answer: "Purchases goods in bulk for resale"
},
{
    question: "Trade between Nigeria and Brazil is an example of",
    options: [
        "Home trade",
        "Retail trade",
        "Foreign trade",
        "Internal trade"
    ],
    answer: "Foreign trade"
},
{
    question: "A document signed by the buyer after receiving goods in good condition is the",
    options: [
        "Delivery note",
        "Consignment note",
        "Goods received note",
        "Credit note"
    ],
    answer: "Goods received note"
},
{
    question: "Which means of transport is generally considered most suitable for moving crude oil through pipelines?",
    options: [
        "Road transport",
        "Pipeline transport",
        "Rail transport",
        "Air transport"
    ],
    answer: "Pipeline transport"
},
{
    question: "Which of the following is an example of verbal communication?",
    options: [
        "Letter",
        "Telephone conversation",
        "Invoice",
        "Receipt"
    ],
    answer: "Telephone conversation"
},
{
    question: "One important reason businesses store goods in warehouses is to",
    options: [
        "Increase production costs",
        "Reduce product quality",
        "Ensure continuous supply of goods",
        "Avoid paying taxes"
    ],
    answer: "Ensure continuous supply of goods"
},
{
    question: "The insurance principle that prevents an insured person from making profit from a loss is",
    options: [
        "Utmost good faith",
        "Subrogation",
        "Contribution",
        "Indemnity"
    ],
    answer: "Indemnity"
},
{
    question: "Which of the following is NOT a function of a commercial bank?",
    options: [
        "Granting loans",
        "Accepting deposits",
        "Issuing the nation's currency",
        "Transferring money"
    ],
    answer: "Issuing the nation's currency"
},
{
    question: "Which characteristic of money makes it easy to carry from one place to another?",
    options: [
        "Durability",
        "Portability",
        "Scarcity",
        "Homogeneity"
    ],
    answer: "Portability"
},
{
    question: "Which business organization has shareholders but does not offer its shares to the general public?",
    options: [
        "Public limited company",
        "Private limited company",
        "Partnership",
        "Co-operative society"
    ],
    answer: "Private limited company"
},
{
    question: "A credit and thrift co-operative society mainly exists to",
    options: [
        "Export agricultural products",
        "Operate airlines",
        "Encourage savings and provide loans",
        "Manufacture consumer goods"
    ],
    answer: "Encourage savings and provide loans"
},
{
    question: "Which advertising medium is most effective for reaching people while they are travelling on major roads?",
    options: [
        "Magazine",
        "Billboard",
        "Email",
        "Radio drama"
    ],
    answer: "Billboard"
},
{
    question: "A 'Buy One Get One Free' offer is an example of",
    options: [
        "Publicity",
        "Direct marketing",
        "Sales promotion",
        "Personal selling"
    ],
    answer: "Sales promotion"
},
{
    question: "The right of consumers to receive compensation for defective products is known as the right to",
    options: [
        "Choose",
        "Information",
        "Safety",
        "Redress"
    ],
    answer: "Redress"
},
{
    question: "The price of shares on a stock exchange is mainly determined by",
    options: [
        "Government salaries",
        "Demand and supply",
        "Population growth",
        "Weather conditions"
    ],
    answer: "Demand and supply"
},
{
    question: "Which participant assists companies in issuing new securities to the public?",
    options: [
        "Issuing house",
        "Retailer",
        "Consumer association",
        "Warehouse manager"
    ],
    answer: "Issuing house"
},
{
    question: "An overdraft is best described as",
    options: [
        "A long-term investment",
        "A grant from the government",
        "Permission to withdraw more than the account balance",
        "Money saved for retirement"
    ],
    answer: "Permission to withdraw more than the account balance"
},
{
    question: "Which ICT application enables employees in different countries to hold business meetings without travelling?",
    options: [
        "Cloud storage",
        "Online shopping",
        "Video conferencing",
        "Point of Sale (POS)"
    ],
    answer: "Video conferencing"
},
{
    question: "Which of the following is a direct aid to trade?",
    options: [
        "Banking",
        "Mining",
        "Fishing",
        "Manufacturing"
    ],
    answer: "Banking"
},
{
    question: "The main objective of production is to",
    options: [
        "Increase population",
        "Create utility by satisfying human wants",
        "Reduce the number of consumers",
        "Promote government ownership"
    ],
    answer: "Create utility by satisfying human wants"
},
{
    question: "A retailer normally purchases goods from a",
    options: [
        "Consumer",
        "Wholesaler",
        "Government agency",
        "Transport company"
    ],
    answer: "Wholesaler"
},
{
    question: "A country sells more goods to other countries than it buys. This situation is known as",
    options: [
        "Balance of trade deficit",
        "Trade embargo",
        "Favorable balance of trade",
        "Invisible trade"
    ],
    answer: "Favorable balance of trade"
},
{
    question: "Which trade document is issued by a seller to reduce the amount previously charged on an invoice?",
    options: [
        "Credit note",
        "Receipt",
        "Delivery note",
        "Purchase order"
    ],
    answer: "Credit note"
},
{
    question: "Which means of transport is least affected by traffic congestion?",
    options: [
        "Road transport",
        "Rail transport",
        "Air transport",
        "Sea transport"
    ],
    answer: "Rail transport"
},
{
    question: "The transmission of information from one person to another is known as",
    options: [
        "Transportation",
        "Communication",
        "Warehousing",
        "Distribution"
    ],
    answer: "Communication"
},
{
    question: "Which type of warehouse is owned and operated by a business for storing its own goods?",
    options: [
        "Public warehouse",
        "Bonded warehouse",
        "Private warehouse",
        "Cold storage warehouse"
    ],
    answer: "Private warehouse"
},
{
    question: "Which type of insurance provides compensation for damage caused by fire?",
    options: [
        "Marine insurance",
        "Life assurance",
        "Fire insurance",
        "Motor insurance"
    ],
    answer: "Fire insurance"
},
{
    question: "The primary purpose of a savings account is to",
    options: [
        "Encourage regular savings",
        "Finance government projects",
        "Facilitate international trade",
        "Issue shares"
    ],
    answer: "Encourage regular savings"
},
{
    question: "Before the introduction of money, exchange was carried out through the",
    options: [
        "Credit system",
        "Cheque system",
        "Barter system",
        "Banking system"
    ],
    answer: "Barter system"
},
{
    question: "The major source of capital for a sole proprietorship is usually",
    options: [
        "Government grants",
        "Personal savings",
        "Sale of shares",
        "Debentures"
    ],
    answer: "Personal savings"
},
{
    question: "A co-operative society is primarily established to",
    options: [
        "Maximize profits for shareholders",
        "Promote the welfare of its members",
        "Control the banking sector",
        "Collect government taxes"
    ],
    answer: "Promote the welfare of its members"
},
{
    question: "Which of the following is the main objective of persuasive advertising?",
    options: [
        "To educate school students",
        "To convince consumers to buy a product",
        "To regulate product prices",
        "To inspect factories"
    ],
    answer: "To convince consumers to buy a product"
},
{
    question: "A price reduction offered for a limited period is an example of",
    options: [
        "Sales promotion",
        "Market research",
        "Product branding",
        "Public relations"
    ],
    answer: "Sales promotion"
},
{
    question: "Which consumer protection agency ensures products meet approved quality standards in Nigeria?",
    options: [
        "FCCPC",
        "SON",
        "CAC",
        "SEC"
    ],
    answer: "SON"
},
{
    question: "An investor who buys shares in a company expects to earn",
    options: [
        "Rent",
        "Interest only",
        "Dividends",
        "Salary"
    ],
    answer: "Dividends"
},
{
    question: "Which of the following is an external source of business finance?",
    options: [
        "Retained profit",
        "Sale of old equipment",
        "Bank loan",
        "Owner's savings"
    ],
    answer: "Bank loan"
},
{
    question: "A partner who contributes capital but does not take part in managing the business is called a",
    options: [
        "Active partner",
        "Sleeping partner",
        "Nominal partner",
        "Managing partner"
    ],
    answer: "Sleeping partner"
},
{
    question: "The government agency responsible for registering companies in Nigeria is the",
    options: [
        "Corporate Affairs Commission (CAC)",
        "Nigerian Exchange Group (NGX)",
        "Central Bank of Nigeria (CBN)",
        "Federal Inland Revenue Service (FIRS)"
    ],
    answer: "Corporate Affairs Commission (CAC)"
},
{
    question: "Which of the following is classified as an economic occupation?",
    options: [
        "Watching television",
        "Sleeping",
        "Teaching in a secondary school",
        "Playing video games for leisure"
    ],
    answer: "Teaching in a secondary school"
},
{
    question: "One major reason for engaging in foreign trade is to",
    options: [
        "Obtain goods that cannot be produced efficiently at home",
        "Reduce the population of a country",
        "Prevent industrial development",
        "Eliminate local businesses"
    ],
    answer: "Obtain goods that cannot be produced efficiently at home"
},
{
    question: "A document that serves as evidence that payment has been received is a",
    options: [
        "Receipt",
        "Invoice",
        "Quotation",
        "Delivery note"
    ],
    answer: "Receipt"
},
{
    question: "Which aid to trade provides protection against business risks?",
    options: [
        "Transportation",
        "Communication",
        "Insurance",
        "Advertising"
    ],
    answer: "Insurance"
},
{
    question: "Road transport is most suitable for",
    options: [
        "Door-to-door delivery of goods",
        "Transporting crude oil",
        "Intercontinental travel only",
        "Transporting very bulky cargo across oceans"
    ],
    answer: "Door-to-door delivery of goods"
},
{
    question: "Which of the following is an advantage of warehousing?",
    options: [
        "It increases the rate of spoilage",
        "It ensures a steady supply of goods",
        "It discourages bulk purchasing",
        "It eliminates transportation costs"
    ],
    answer: "It ensures a steady supply of goods"
},
{
    question: "Which insurance principle requires the insured to have a financial interest in the property being insured?",
    options: [
        "Contribution",
        "Indemnity",
        "Insurable interest",
        "Subrogation"
    ],
    answer: "Insurable interest"
},
{
    question: "The bank account that usually earns the highest rate of interest is the",
    options: [
        "Savings account",
        "Current account",
        "Fixed deposit account",
        "Salary account"
    ],
    answer: "Fixed deposit account"
},
{
    question: "One major disadvantage of the barter system was",
    options: [
        "Money lost its value",
        "Lack of double coincidence of wants",
        "High banking charges",
        "Inflation"
    ],
    answer: "Lack of double coincidence of wants"
},
{
    question: "A public limited company differs from a private limited company because it",
    options: [
        "Has only one owner",
        "Cannot sue or be sued",
        "Can offer its shares to the public",
        "Has unlimited liability"
    ],
    answer: "Can offer its shares to the public"
},
{
    question: "Members of a co-operative society usually share surplus according to their",
    options: [
        "Age",
        "Educational qualification",
        "Level of participation",
        "Years of residence"
    ],
    answer: "Level of participation"
},
{
    question: "Which advertising medium is most appropriate for reaching a worldwide online audience?",
    options: [
        "Handbills",
        "Internet advertising",
        "Town crier",
        "Notice board"
    ],
    answer: "Internet advertising"
},
{
    question: "Giving customers coupons that can be redeemed later is a form of",
    options: [
        "Personal selling",
        "Sales promotion",
        "Market segmentation",
        "Wholesaling"
    ],
    answer: "Sales promotion"
},
{
    question: "Which consumer right allows buyers to freely select from competing products?",
    options: [
        "Right to choose",
        "Right to information",
        "Right to safety",
        "Right to redress"
    ],
    answer: "Right to choose"
},
{
    question: "The Nigerian Exchange Group (NGX) mainly provides a platform for",
    options: [
        "Collecting taxes",
        "Trading securities",
        "Registering companies",
        "Issuing passports"
    ],
    answer: "Trading securities"
},
{
    question: "Which of the following is NOT an instrument of the capital market?",
    options: [
        "Ordinary shares",
        "Debentures",
        "Treasury bills",
        "Bonds"
    ],
    answer: "Treasury bills"
},
{
    question: "A business that finances the purchase of machinery by paying in installments is using",
    options: [
        "Hire purchase",
        "Trade credit",
        "Retained earnings",
        "Factoring"
    ],
    answer: "Hire purchase"
},
{
    question: "Which type of partner allows his or her name to be used in a partnership but contributes neither capital nor management?",
    options: [
        "Active partner",
        "Sleeping partner",
        "Nominal partner",
        "Limited partner"
    ],
    answer: "Nominal partner"
},
{
    question: "The document that contains the internal rules governing the management of a company is the",
    options: [
        "Memorandum of Association",
        "Articles of Association",
        "Certificate of Incorporation",
        "Prospectus"
    ],
    answer: "Articles of Association"
},
{
    question: "Which of the following is an advantage of e-commerce to consumers?",
    options: [
        "Limited product choice",
        "Shopping at any time from any location",
        "Longer transaction time",
        "Higher operating costs"
    ],
    answer: "Shopping at any time from any location"
},
{
    question: "The main objective of commerce is to",
    options: [
        "Extract raw materials",
        "Facilitate the distribution of goods and services",
        "Manufacture consumer goods",
        "Generate electricity"
    ],
    answer: "Facilitate the distribution of goods and services"
},
{
    question: "Which of the following is classified as a commercial occupation?",
    options: [
        "Fishing",
        "Mining",
        "Retailing",
        "Farming"
    ],
    answer: "Retailing"
},
{
    question: "Production creates utility by",
    options: [
        "Increasing taxes",
        "Destroying goods",
        "Satisfying human wants",
        "Reducing competition"
    ],
    answer: "Satisfying human wants"
},
{
    question: "A person who purchases goods in large quantities from producers and sells them to retailers is known as a",
    options: [
        "Consumer",
        "Wholesaler",
        "Broker",
        "Commission agent"
    ],
    answer: "Wholesaler"
},
{
    question: "Import trade involves",
    options: [
        "Selling goods to another country",
        "Buying goods from another country",
        "Trading within a state",
        "Exchanging goods without money"
    ],
    answer: "Buying goods from another country"
},
{
    question: "Which document informs a buyer that goods have been dispatched?",
    options: [
        "Advice note",
        "Receipt",
        "Credit note",
        "Cheque"
    ],
    answer: "Advice note"
},
{
    question: "The aid to trade responsible for moving goods from producers to consumers is",
    options: [
        "Insurance",
        "Advertising",
        "Transportation",
        "Banking"
    ],
    answer: "Transportation"
},
{
    question: "One major advantage of rail transport is that it",
    options: [
        "Provides door-to-door service",
        "Is suitable for carrying bulky goods over long distances",
        "Is the fastest means of transport",
        "Requires no fixed route"
    ],
    answer: "Is suitable for carrying bulky goods over long distances"
},
{
    question: "Which of the following is an example of written communication?",
    options: [
        "Telephone call",
        "Video conference",
        "Business letter",
        "Face-to-face discussion"
    ],
    answer: "Business letter"
},
{
    question: "Warehousing helps businesses to",
    options: [
        "Reduce the quality of goods",
        "Maintain a continuous supply of goods",
        "Increase customs duties",
        "Avoid transportation"
    ],
    answer: "Maintain a continuous supply of goods"
},
{
    question: "Which type of insurance covers losses resulting from theft or burglary?",
    options: [
        "Marine insurance",
        "Fire insurance",
        "Burglary insurance",
        "Life assurance"
    ],
    answer: "Burglary insurance"
},
{
    question: "Which of the following is a function of the Central Bank?",
    options: [
        "Selling groceries",
        "Issuing the country's currency",
        "Manufacturing coins",
        "Operating supermarkets"
    ],
    answer: "Issuing the country's currency"
},
{
    question: "Money serves as a store of value because it",
    options: [
        "Can be saved for future use",
        "Cannot be exchanged",
        "Must be spent immediately",
        "Is accepted only by banks"
    ],
    answer: "Can be saved for future use"
},
{
    question: "The major disadvantage of a partnership compared to a sole proprietorship is that",
    options: [
        "It has more capital",
        "Profits must be shared among partners",
        "It allows specialization",
        "It attracts more investors"
    ],
    answer: "Profits must be shared among partners"
},
{
    question: "Which type of co-operative society mainly assists farmers with farm inputs and marketing?",
    options: [
        "Consumer co-operative society",
        "Credit and thrift co-operative society",
        "Farmers' co-operative society",
        "Housing co-operative society"
    ],
    answer: "Farmers' co-operative society"
},
{
    question: "Advertising helps producers mainly by",
    options: [
        "Reducing production capacity",
        "Creating awareness of products",
        "Eliminating competition completely",
        "Increasing import duties"
    ],
    answer: "Creating awareness of products"
},
{
    question: "A competition organized to encourage customers to purchase products is an example of",
    options: [
        "Sales promotion",
        "Transportation",
        "Warehousing",
        "Brand registration"
    ],
    answer: "Sales promotion"
},
{
    question: "Which consumer responsibility helps when returning defective goods?",
    options: [
        "Demanding a receipt after purchase",
        "Ignoring product labels",
        "Buying without inspection",
        "Misusing the product"
    ],
    answer: "Demanding a receipt after purchase"
},
{
    question: "The main function of the stock exchange is to",
    options: [
        "Store imported goods",
        "Buy and sell securities",
        "Issue driving licences",
        "Collect customs duties"
    ],
    answer: "Buy and sell securities"
},
{
    question: "A major benefit of cloud storage in modern business is that it",
    options: [
        "Increases paperwork",
        "Allows secure online storage and access to business information",
        "Eliminates internet usage",
        "Prevents electronic communication"
    ],
    answer: "Allows secure online storage and access to business information"
},
{
    question: "Which of the following best describes a private limited company?",
    options: [
        "A company owned and managed only by the government",
        "A company whose shares are offered freely to the public",
        "A company whose shares are owned by a limited number of shareholders",
        "A company owned by one individual"
    ],
    answer: "A company whose shares are owned by a limited number of shareholders"
},

{
    question: "Which document contains the internal rules governing the management of a company?",
    options: [
        "Certificate of Origin",
        "Articles of Association",
        "Bill of Lading",
        "Invoice"
    ],
    answer: "Articles of Association"
},

{
    question: "Which of the following is NOT a characteristic of a public enterprise?",
    options: [
        "Government ownership",
        "Public service orientation",
        "Profit maximization as the primary objective",
        "Management by appointed boards"
    ],
    answer: "Profit maximization as the primary objective"
},

{
    question: "An electronic system that allows customers to pay for goods using bank cards is known as",
    options: [
        "ATM",
        "POS terminal",
        "Cheque book",
        "Passbook"
    ],
    answer: "POS terminal"
},

{
    question: "Which of the following is an example of electronic commerce?",
    options: [
        "Buying goods through an online marketplace",
        "Selling goods only in open markets",
        "Using only cash for transactions",
        "Trading through barter"
    ],
    answer: "Buying goods through an online marketplace"
},

{
    question: "The major objective of consumer protection is to",
    options: [
        "increase taxes",
        "protect buyers against unfair trade practices",
        "reduce production",
        "eliminate competition"
    ],
    answer: "protect buyers against unfair trade practices"
},

{
    question: "Which participant buys and sells securities on behalf of investors?",
    options: [
        "Wholesaler",
        "Importer",
        "Stockbroker",
        "Retailer"
    ],
    answer: "Stockbroker"
},

{
    question: "Which source of finance allows a business to obtain goods before payment is made?",
    options: [
        "Retained earnings",
        "Trade credit",
        "Preference shares",
        "Personal savings"
    ],
    answer: "Trade credit"
},

{
    question: "The principle of insurance that requires honesty from both parties is known as",
    options: [
        "Contribution",
        "Indemnity",
        "Utmost good faith",
        "Subrogation"
    ],
    answer: "Utmost good faith"
},

{
    question: "Which function of money enables it to settle debts payable in the future?",
    options: [
        "Store of value",
        "Medium of exchange",
        "Standard of deferred payment",
        "Measure of value"
    ],
    answer: "Standard of deferred payment"
},

{
    question: "Which type of warehouse is mainly used for imported goods awaiting customs clearance?",
    options: [
        "Cold storage warehouse",
        "Private warehouse",
        "Bonded warehouse",
        "Public warehouse"
    ],
    answer: "Bonded warehouse"
},

{
    question: "A sole proprietor bears",
    options: [
        "limited liability",
        "shared liability",
        "government liability",
        "unlimited liability"
    ],
    answer: "unlimited liability"
},

{
    question: "Which means of communication provides written evidence of business transactions?",
    options: [
        "Telephone call",
        "Letter",
        "Radio announcement",
        "Television broadcast"
    ],
    answer: "Letter"
},

{
    question: "Which type of advertising mainly seeks to convince consumers to buy a product?",
    options: [
        "Reminder advertising",
        "Institutional advertising",
        "Persuasive advertising",
        "Classified advertising"
    ],
    answer: "Persuasive advertising"
},

{
    question: "Which transport system is generally the fastest for international passenger travel?",
    options: [
        "Road transport",
        "Rail transport",
        "Air transport",
        "Water transport"
    ],
    answer: "Air transport"
},

{
    question: "Which banking service enables customers to transfer money electronically without visiting a bank?",
    options: [
        "Internet banking",
        "Cheque clearing",
        "Safe custody",
        "Foreign exchange"
    ],
    answer: "Internet banking"
},

{
    question: "Which type of partner contributes capital but does not participate in daily management?",
    options: [
        "Active partner",
        "Sleeping partner",
        "Nominal partner",
        "Managing partner"
    ],
    answer: "Sleeping partner"
},

{
    question: "Which of the following is an internal source of business finance?",
    options: [
        "Bank loan",
        "Issue of shares",
        "Retained profit",
        "Government grant"
    ],
    answer: "Retained profit"
},

{
    question: "Which organization in Nigeria is responsible for registering companies?",
    options: [
        "Central Bank of Nigeria",
        "Corporate Affairs Commission",
        "Federal Inland Revenue Service",
        "Standards Organisation of Nigeria"
    ],
    answer: "Corporate Affairs Commission"
},

{
    question: "Which of the following is a major challenge associated with modern ICT in commerce?",
    options: [
        "Faster communication",
        "Improved customer service",
        "Cybercrime",
        "Reduced transaction time"
    ],
    answer: "Cybercrime"
},
{
    question: "Which of the following is the primary objective of commerce?",
    options: [
        "To manufacture goods",
        "To facilitate the distribution of goods and services",
        "To extract natural resources",
        "To cultivate crops"
    ],
    answer: "To facilitate the distribution of goods and services"
},

{
    question: "Which occupation is directly involved in converting raw materials into finished goods?",
    options: [
        "Extractive",
        "Commercial",
        "Manufacturing",
        "Constructive"
    ],
    answer: "Manufacturing"
},

{
    question: "Which factor of production is rewarded with wages?",
    options: [
        "Capital",
        "Labour",
        "Land",
        "Entrepreneur"
    ],
    answer: "Labour"
},

{
    question: "Retail trade is mainly concerned with selling goods",
    options: [
        "to manufacturers",
        "to wholesalers",
        "to final consumers",
        "to exporters"
    ],
    answer: "to final consumers"
},

{
    question: "A document issued by a seller requesting payment from the buyer is known as",
    options: [
        "Invoice",
        "Receipt",
        "Delivery note",
        "Waybill"
    ],
    answer: "Invoice"
},

{
    question: "Which aid to trade provides protection against financial losses arising from risks?",
    options: [
        "Transportation",
        "Advertising",
        "Insurance",
        "Communication"
    ],
    answer: "Insurance"
},

{
    question: "Which means of transport is most suitable for carrying crude oil over long distances?",
    options: [
        "Pipeline",
        "Railway",
        "Road",
        "Air"
    ],
    answer: "Pipeline"
},

{
    question: "Which of the following is an example of verbal communication in business?",
    options: [
        "Invoice",
        "Letter",
        "Telephone conversation",
        "Receipt"
    ],
    answer: "Telephone conversation"
},

{
    question: "Goods stored in a warehouse before customs duties are paid are kept in a",
    options: [
        "Private warehouse",
        "Public warehouse",
        "Cold storage warehouse",
        "Bonded warehouse"
    ],
    answer: "Bonded warehouse"
},

{
    question: "The amount paid regularly to obtain insurance coverage is called",
    options: [
        "Claim",
        "Premium",
        "Policy",
        "Compensation"
    ],
    answer: "Premium"
},

{
    question: "Which type of bank account is most suitable for a business with frequent transactions?",
    options: [
        "Savings account",
        "Current account",
        "Fixed deposit account",
        "Mortgage account"
    ],
    answer: "Current account"
},

{
    question: "Which characteristic of money makes it easy to divide into smaller units?",
    options: [
        "Scarcity",
        "Portability",
        "Divisibility",
        "Durability"
    ],
    answer: "Divisibility"
},

{
    question: "Which business unit is owned and controlled by one individual?",
    options: [
        "Partnership",
        "Public limited company",
        "Sole proprietorship",
        "Co-operative society"
    ],
    answer: "Sole proprietorship"
},

{
    question: "A major benefit of a credit and thrift co-operative society is that it",
    options: [
        "manufactures goods",
        "provides affordable loans to members",
        "imports machinery",
        "controls inflation"
    ],
    answer: "provides affordable loans to members"
},

{
    question: "Which type of advertising mainly reminds existing customers about a product?",
    options: [
        "Reminder advertising",
        "Persuasive advertising",
        "Institutional advertising",
        "Classified advertising"
    ],
    answer: "Reminder advertising"
},

{
    question: "Which of the following is a common method of sales promotion?",
    options: [
        "Product warranty",
        "Price discount",
        "Market research",
        "Brand registration"
    ],
    answer: "Price discount"
},

{
    question: "The right of consumers to receive correct information about a product is known as the right to",
    options: [
        "Choice",
        "Information",
        "Safety",
        "Redress"
    ],
    answer: "Information"
},

{
    question: "Which institution regulates the capital market in Nigeria?",
    options: [
        "Central Bank",
        "Corporate Affairs Commission",
        "Securities and Exchange Commission",
        "Federal Ministry of Finance"
    ],
    answer: "Securities and Exchange Commission"
},

{
    question: "Which source of finance involves selling ownership interests in a company?",
    options: [
        "Issue of shares",
        "Trade credit",
        "Bank overdraft",
        "Hire purchase"
    ],
    answer: "Issue of shares"
},

{
    question: "Which modern business practice allows customers to purchase goods from anywhere using the Internet?",
    options: [
        "Barter trade",
        "E-commerce",
        "Door-to-door marketing",
        "Auction sales"
    ],
    answer: "E-commerce"
},
{
    question: "Commerce bridges the gap between producers and consumers mainly through",
    options: [
        "mining",
        "trade and aids to trade",
        "manufacturing",
        "construction"
    ],
    answer: "trade and aids to trade"
},

{
    question: "Which type of occupation is involved in extracting natural resources from the earth?",
    options: [
        "Commercial",
        "Manufacturing",
        "Extractive",
        "Constructive"
    ],
    answer: "Extractive"
},

{
    question: "Production is complete only when goods and services",
    options: [
        "are advertised",
        "reach the final consumer",
        "are manufactured",
        "are packaged"
    ],
    answer: "reach the final consumer"
},

{
    question: "Which form of home trade involves buying goods in bulk from producers and selling to retailers?",
    options: [
        "Retail trade",
        "Foreign trade",
        "Wholesale trade",
        "Barter trade"
    ],
    answer: "Wholesale trade"
},

{
    question: "Import trade refers to",
    options: [
        "selling goods to another country",
        "buying goods from another country",
        "transporting goods within a country",
        "manufacturing goods for export"
    ],
    answer: "buying goods from another country"
},

{
    question: "Which document acknowledges that payment has been received from a buyer?",
    options: [
        "Invoice",
        "Receipt",
        "Quotation",
        "Statement of account"
    ],
    answer: "Receipt"
},

{
    question: "Which aid to trade is responsible for moving goods from producers to consumers?",
    options: [
        "Transportation",
        "Insurance",
        "Advertising",
        "Banking"
    ],
    answer: "Transportation"
},

{
    question: "Which means of transport is generally the cheapest for carrying bulky goods over long distances?",
    options: [
        "Air transport",
        "Road transport",
        "Water transport",
        "Motorcycle transport"
    ],
    answer: "Water transport"
},

{
    question: "Which communication system allows people in different countries to hold meetings online?",
    options: [
        "Postal service",
        "Video conferencing",
        "Notice board",
        "Handbill"
    ],
    answer: "Video conferencing"
},

{
    question: "A warehouse designed for storing fruits, fish and meat is called a",
    options: [
        "Bonded warehouse",
        "Public warehouse",
        "Private warehouse",
        "Cold storage warehouse"
    ],
    answer: "Cold storage warehouse"
},

{
    question: "Which principle of insurance requires that compensation should not exceed the actual loss suffered?",
    options: [
        "Contribution",
        "Indemnity",
        "Utmost good faith",
        "Subrogation"
    ],
    answer: "Indemnity"
},

{
    question: "Which institution has the sole authority to issue legal tender in a country?",
    options: [
        "Commercial bank",
        "Merchant bank",
        "Central bank",
        "Mortgage bank"
    ],
    answer: "Central bank"
},

{
    question: "Which function of money allows people to keep wealth for future use?",
    options: [
        "Store of value",
        "Medium of exchange",
        "Measure of value",
        "Standard of deferred payment"
    ],
    answer: "Store of value"
},

{
    question: "Which type of business organization continues to exist even after the death of its owners?",
    options: [
        "Sole proprietorship",
        "Partnership",
        "Company",
        "Joint venture"
    ],
    answer: "Company"
},

{
    question: "Which principle is commonly associated with co-operative societies?",
    options: [
        "One member, one vote",
        "One share, one vote",
        "Highest investor controls decisions",
        "Profit before service"
    ],
    answer: "One member, one vote"
},

{
    question: "Which advertising medium is most suitable for reaching people while they are travelling on roads?",
    options: [
        "Magazine",
        "Billboard",
        "Radio drama",
        "Email"
    ],
    answer: "Billboard"
},

{
    question: "Giving customers a free gift after purchasing a product is known as",
    options: [
        "Trade credit",
        "Premium offer",
        "Product warranty",
        "Publicity"
    ],
    answer: "Premium offer"
},

{
    question: "Which consumer right allows a buyer to receive compensation for defective goods?",
    options: [
        "Right to information",
        "Right to redress",
        "Right to safety",
        "Right to choose"
    ],
    answer: "Right to redress"
},

{
    question: "Which financial instrument represents ownership in a company?",
    options: [
        "Debenture",
        "Treasury bill",
        "Ordinary share",
        "Bank loan"
    ],
    answer: "Ordinary share"
},

{
    question: "Which ICT application enables businesses to store files securely over the Internet?",
    options: [
        "Cloud storage",
        "Fax machine",
        "Photocopying",
        "Notice board"
    ],
    answer: "Cloud storage"
},
{
    question: "Which branch of commerce is directly involved in the exchange of goods and services?",
    options: [
        "Production",
        "Trade",
        "Manufacturing",
        "Extraction"
    ],
    answer: "Trade"
},

{
    question: "Which type of production involves changing the location of goods from one place to another?",
    options: [
        "Form utility",
        "Place utility",
        "Time utility",
        "Service utility"
    ],
    answer: "Place utility"
},

{
    question: "Which of the following is an example of visible trade?",
    options: [
        "Tourism",
        "Banking services",
        "Export of cocoa",
        "Insurance"
    ],
    answer: "Export of cocoa"
},

{
    question: "A country records a favourable balance of trade when",
    options: [
        "imports exceed exports",
        "exports exceed imports",
        "imports equal exports",
        "there is no foreign trade"
    ],
    answer: "exports exceed imports"
},

{
    question: "Which document states the quantity and price of goods supplied to a buyer?",
    options: [
        "Invoice",
        "Waybill",
        "Delivery note",
        "Receipt"
    ],
    answer: "Invoice"
},

{
    question: "Which aid to trade creates awareness of goods and services among consumers?",
    options: [
        "Warehousing",
        "Advertising",
        "Insurance",
        "Banking"
    ],
    answer: "Advertising"
},

{
    question: "Which mode of transport is least affected by traffic congestion?",
    options: [
        "Road transport",
        "Rail transport",
        "Air transport",
        "Pipeline transport"
    ],
    answer: "Air transport"
},

{
    question: "Which of the following is an electronic means of communication?",
    options: [
        "Telegram",
        "Email",
        "Circular letter",
        "Memo"
    ],
    answer: "Email"
},

{
    question: "One major advantage of warehousing is that it",
    options: [
        "increases import duties",
        "helps stabilize prices",
        "reduces production quality",
        "eliminates transportation"
    ],
    answer: "helps stabilize prices"
},

{
    question: "Which type of insurance covers losses arising from theft by burglars?",
    options: [
        "Fire insurance",
        "Marine insurance",
        "Burglary insurance",
        "Life assurance"
    ],
    answer: "Burglary insurance"
},

{
    question: "Which banking service allows a customer to withdraw more money than is available in the account?",
    options: [
        "Fixed deposit",
        "Overdraft",
        "Mortgage",
        "Standing order"
    ],
    answer: "Overdraft"
},

{
    question: "Which characteristic makes money easy to carry from one place to another?",
    options: [
        "Divisibility",
        "Portability",
        "Homogeneity",
        "Scarcity"
    ],
    answer: "Portability"
},

{
    question: "In a partnership, the document that contains the agreed rules governing the business is called the",
    options: [
        "Memorandum of Association",
        "Prospectus",
        "Partnership Deed",
        "Certificate of Incorporation"
    ],
    answer: "Partnership Deed"
},

{
    question: "Which type of co-operative society is formed mainly to help members obtain loans and save regularly?",
    options: [
        "Consumer co-operative",
        "Producer co-operative",
        "Credit and thrift co-operative",
        "Farmers' co-operative"
    ],
    answer: "Credit and thrift co-operative"
},

{
    question: "Advertising that promotes the image of an organization rather than a specific product is known as",
    options: [
        "Reminder advertising",
        "Institutional advertising",
        "Persuasive advertising",
        "Informative advertising"
    ],
    answer: "Institutional advertising"
},

{
    question: "Which sales promotion method allows customers to receive another item free after buying one?",
    options: [
        "Trade fair",
        "Coupon",
        "Buy One Get One Free (BOGO)",
        "Price list"
    ],
    answer: "Buy One Get One Free (BOGO)"
},

{
    question: "Which Nigerian agency ensures that manufactured and imported products meet approved quality standards?",
    options: [
        "FCCPC",
        "Central Bank of Nigeria",
        "Standards Organisation of Nigeria (SON)",
        "Corporate Affairs Commission"
    ],
    answer: "Standards Organisation of Nigeria (SON)"
},

{
    question: "Which participant in the capital market helps companies issue new securities to investors?",
    options: [
        "Retailer",
        "Issuing house",
        "Warehouse manager",
        "Wholesaler"
    ],
    answer: "Issuing house"
},

{
    question: "Which document legally confirms that a company has been registered by the Corporate Affairs Commission?",
    options: [
        "Prospectus",
        "Articles of Association",
        "Certificate of Incorporation",
        "Memorandum of Association"
    ],
    answer: "Certificate of Incorporation"
},

{
    question: "Which modern business practice allows customers to access banking services through a smartphone application?",
    options: [
        "Mobile banking",
        "Barter trade",
        "Mail order",
        "Warehouse receipt"
    ],
    answer: "Mobile banking"
},

];
let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 15 * 60;
let timerId;

const SUBJECT = "COMMERCE";

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