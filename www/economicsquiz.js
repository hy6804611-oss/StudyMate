// ======================================
// StudyMate Economics Quiz
// ======================================

const allQuestions = [
  
{
  question: "Which of the following is regarded as the central problem of Economics?",
  options: [
    "Inflation",
    "Scarcity of resources in relation to unlimited wants",
    "Unemployment",
    "Population growth"
  ],
  answer: "Scarcity of resources in relation to unlimited wants"
},
{
  question: "A country exports cocoa and imports machinery. This activity is known as:",
  options: [
    "Domestic trade",
    "Retail trade",
    "International trade",
    "Wholesale trade"
  ],
  answer: "International trade"
},
{
  question: "The reward for the entrepreneur as a factor of production is:",
  options: [
    "Rent",
    "Wages",
    "Interest",
    "Profit"
  ],
  answer: "Profit"
},
{
  question: "Which of the following is an example of a variable cost?",
  options: [
    "Factory rent",
    "Insurance premium",
    "Raw materials",
    "Manager's salary"
  ],
  answer: "Raw materials"
},
{
  question: "When quantity demanded increases as price falls, the relationship is described by the:",
  options: [
    "Law of Demand",
    "Law of Supply",
    "Law of Diminishing Returns",
    "Law of Comparative Advantage"
  ],
  answer: "Law of Demand"
},
{
  question: "The market structure in which there is only one producer of a commodity is called:",
  options: [
    "Perfect competition",
    "Monopolistic competition",
    "Monopoly",
    "Oligopoly"
  ],
  answer: "Monopoly"
},
{
  question: "The official currency issued in Nigeria is controlled by the:",
  options: [
    "Federal Ministry of Finance",
    "Commercial Banks",
    "Central Bank of Nigeria",
    "Nigerian Stock Exchange"
  ],
  answer: "Central Bank of Nigeria"
},
{
  question: "Inflation mainly results in:",
  options: [
    "An increase in the purchasing power of money",
    "A fall in the purchasing power of money",
    "Lower prices of goods and services",
    "An increase in exports only"
  ],
  answer: "A fall in the purchasing power of money"
},
{
  question: "Which method is used to measure national income by adding all factor incomes?",
  options: [
    "Output Method",
    "Expenditure Method",
    "Income Method",
    "Value-added Method"
  ],
  answer: "Income Method"
},
{
  question: "A tax imposed directly on the income of individuals is known as:",
  options: [
    "Value Added Tax",
    "Custom Duty",
    "Direct Tax",
    "Excise Duty"
  ],
  answer: "Direct Tax"
},
{
  question: "Which of the following is NOT a function of commercial banks?",
  options: [
    "Accepting deposits",
    "Granting loans",
    "Issuing the national currency",
    "Providing payment services"
  ],
  answer: "Issuing the national currency"
},
{
  question: "The exchange of goods and services between different countries is known as:",
  options: [
    "Internal trade",
    "International trade",
    "Retail trade",
    "Home trade"
  ],
  answer: "International trade"
},
{
  question: "Which of the following is a characteristic of perfect competition?",
  options: [
    "Only one seller",
    "High barriers to entry",
    "Many buyers and sellers",
    "Product differentiation"
  ],
  answer: "Many buyers and sellers"
},
{
  question: "The additional cost of producing one more unit of output is called:",
  options: [
    "Average Cost",
    "Marginal Cost",
    "Fixed Cost",
    "Total Cost"
  ],
  answer: "Marginal Cost"
},
{
  question: "The direct exchange of goods for goods without the use of money is known as:",
  options: [
    "Banking",
    "Retailing",
    "Barter",
    "Credit purchase"
  ],
  answer: "Barter"
},
{
  question: "Which of the following is a major objective of economic planning?",
  options: [
    "Increase unemployment",
    "Promote economic growth",
    "Reduce production",
    "Encourage inflation"
  ],
  answer: "Promote economic growth"
},
{
  question: "The movement of labour from one occupation to another is called:",
  options: [
    "Geographical mobility",
    "Occupational mobility",
    "Labour turnover",
    "Migration"
  ],
  answer: "Occupational mobility"
},
{
  question: "A business owned and managed by only one person is called:",
  options: [
    "Partnership",
    "Public Corporation",
    "Sole Proprietorship",
    "Co-operative Society"
  ],
  answer: "Sole Proprietorship"
},
{
  question: "The excess of total revenue over total cost is known as:",
  options: [
    "Capital",
    "Profit",
    "Savings",
    "Investment"
  ],
  answer: "Profit"
},
{
  question: "Which of the following is a major problem facing agriculture in Nigeria?",
  options: [
    "Excess mechanization",
    "Adequate storage facilities",
    "Poor transportation network",
    "Abundant capital"
  ],
  answer: "Poor transportation network"
},
{
  question: "ECOWAS is an example of:",
  options: [
    "A commercial bank",
    "An economic integration organization",
    "A manufacturing industry",
    "A public corporation"
  ],
  answer: "An economic integration organization"
},
{
  question: "Unemployment caused by changes in technology is known as:",
  options: [
    "Seasonal unemployment",
    "Frictional unemployment",
    "Structural unemployment",
    "Voluntary unemployment"
  ],
 answer: "Structural unemployment"
},
{
  question: "The satisfaction a consumer derives from consuming a commodity is called:",
  options: [
    "Utility",
    "Profit",
    "Demand",
    "Revenue"
  ],
  answer: "Utility"
},
{
  question: "The willingness and ability of consumers to buy a commodity at a given price is known as:",
  options: [
    "Supply",
    "Demand",
    "Production",
    "Consumption"
  ],
  answer: "Demand"
},
{
  question: "Which of the following is an example of fixed cost?",
  options: [
    "Cost of raw materials",
    "Transport expenses",
    "Factory rent",
    "Fuel expenses"
  ],
  answer: "Factory rent"
},
{
  question: "The branch of agriculture that deals with the rearing of farm animals is known as:",
  options: [
    "Forestry",
    "Horticulture",
    "Animal Husbandry",
    "Fishery"
  ],
  answer: "Animal Husbandry"
},
{
  question: "Which of the following best explains opportunity cost?",
  options: [
    "The total cost of production",
    "The value of the next best alternative forgone",
    "The price of a commodity",
    "The cost of transporting goods"
  ],
  answer: "The value of the next best alternative forgone"
},
{
  question: "A situation where government expenditure exceeds government revenue is known as:",
  options: [
    "Budget surplus",
    "Balanced budget",
    "Budget deficit",
    "Public investment"
  ],
  answer: "Budget deficit"
},
{
  question: "The reward paid for the use of capital is called:",
  options: [
    "Rent",
    "Interest",
    "Profit",
    "Wages"
  ],
  answer: "Interest"
},
{
  question: "Which of the following is NOT a characteristic of money?",
  options: [
    "Durability",
    "Divisibility",
    "Perishability",
    "Acceptability"
  ],
  answer: "Perishability"
},
{
  question: "A rise in the price of a commodity will normally lead to:",
  options: [
    "An increase in quantity demanded",
    "A decrease in quantity supplied",
    "An increase in quantity supplied",
    "No change in supply"
  ],
  answer: "An increase in quantity supplied"
},
{
  question: "The total value of goods and services produced within a country's borders in one year is called:",
  options: [
    "Gross National Product",
    "National Income",
    "Gross Domestic Product",
    "Disposable Income"
  ],
  answer: "Gross Domestic Product"
},
{
  question: "Which of the following is a function of the Central Bank?",
  options: [
    "Selling food items",
    "Issuing the national currency",
    "Manufacturing goods",
    "Operating supermarkets"
  ],
  answer: "Issuing the national currency"
},
{
  question: "Which type of unemployment occurs because jobs are available only during certain seasons?",
  options: [
    "Structural unemployment",
    "Seasonal unemployment",
    "Voluntary unemployment",
    "Frictional unemployment"
  ],
  answer: "Seasonal unemployment"
},
{
  question: "An increase in the number of industries in a country is known as:",
  options: [
    "Urbanization",
    "Industrialization",
    "Commercialization",
    "Globalization"
  ],
  answer: "Industrialization"
},
{
  question: "The removal of trade barriers among member countries is a major objective of:",
  options: [
    "Population census",
    "Economic integration",
    "Taxation",
    "Inflation"
  ],
  answer: "Economic integration"
},
{
  question: "Which of the following is an example of indirect tax?",
  options: [
    "Company income tax",
    "Personal income tax",
    "Value Added Tax (VAT)",
    "Property tax"
  ],
  answer: "Value Added Tax (VAT)"
},
{
  question: "The process of counting the total number of people living in a country is called:",
  options: [
    "Population growth",
    "Migration",
    "Population census",
    "Urbanization"
  ],
  answer: "Population census"
},
{
  question: "Which of the following is the main objective of production?",
  options: [
    "To create scarcity",
    "To satisfy human wants",
    "To reduce labour",
    "To increase taxation"
  ],
  answer: "To satisfy human wants"
},
{
  question: "A country imports more goods than it exports. This results in:",
  options: [
    "Favourable balance of trade",
    "Balanced trade",
    "Unfavourable balance of trade",
    "Economic integration"
  ],
  answer: "Unfavourable balance of trade"
},
{
  question: "The factor of production that receives wages is:",
  options: [
    "Land",
    "Labour",
    "Capital",
    "Entrepreneur"
  ],
  answer: "Labour"
},
{
  question: "The primary aim of public finance is to:",
  options: [
    "Manage government revenue and expenditure",
    "Produce consumer goods",
    "Control private businesses",
    "Increase imports"
  ],
  answer: "Manage government revenue and expenditure"
},
{
  question: "The basic economic problem arises because:",
  options: [
    "Human wants are limited",
    "Resources are scarce while human wants are unlimited",
    "Production is always increasing",
    "Money is not available"
  ],
  answer: "Resources are scarce while human wants are unlimited"
},
{
  question: "The reward for the factor of production called land is:",
  options: [
    "Profit",
    "Interest",
    "Rent",
    "Wages"
  ],
  answer: "Rent"
},
{
  question: "A decrease in the price of a commodity will normally cause:",
  options: [
    "A fall in demand",
    "An increase in quantity demanded",
    "A decrease in supply",
    "A rise in production cost"
  ],
  answer: "An increase in quantity demanded"
},
{
  question: "Which of the following is a reason why consumers save money?",
  options: [
    "To increase scarcity",
    "To prepare for future needs",
    "To reduce income",
    "To stop production"
  ],
  answer: "To prepare for future needs"
},
{
  question: "The process of combining resources to produce goods and services is known as:",
  options: [
    "Consumption",
    "Production",
    "Exchange",
    "Distribution"
  ],
  answer: "Production"
},
{
  question: "Which of the following is an advantage of division of labour?",
  options: [
    "Reduction in specialization",
    "Increase in productivity",
    "Increase in production cost",
    "Decrease in workers' skills"
  ],
  answer: "Increase in productivity"
},
{
  question: "When the price of a commodity is determined by the forces of demand and supply, it is called:",
  options: [
    "Price control",
    "Price mechanism",
    "Price discrimination",
    "Price fixing"
  ],
  answer: "Price mechanism"
},
{
  question: "The responsiveness of quantity demanded to changes in price is known as:",
  options: [
    "Elasticity of demand",
    "Consumer surplus",
    "Utility",
    "Production possibility"
  ],
  answer: "Elasticity of demand"
},
{
  question: "Which of the following can cause an increase in supply?",
  options: [
    "Increase in production cost",
    "Improved technology",
    "Reduction in available resources",
    "Decrease in the number of producers"
  ],
  answer: "Improved technology"
},
{
  question: "A partnership business is owned by:",
  options: [
    "One person only",
    "The government alone",
    "Two or more persons",
    "Foreign investors only"
  ],
  answer: "Two or more persons"
},
{
  question: "Which of the following is a disadvantage of monopoly?",
  options: [
    "Lower prices always",
    "Limited consumer choice",
    "Many competing firms",
    "Free entry into the market"
  ],
  answer: "Limited consumer choice"
},
{
  question: "The main purpose of agriculture in an economy is to:",
  options: [
    "Provide food and raw materials",
    "Reduce production",
    "Prevent trade",
    "Stop industrial growth"
  ],
  answer: "Provide food and raw materials"
},
{
  question: "Which of the following is a capital expenditure by government?",
  options: [
    "Payment of workers' salaries",
    "Building new roads and hospitals",
    "Payment of electricity bills",
    "Office maintenance"
  ],
  answer: "Building new roads and hospitals"
},
{
  question: "Economic development is mainly concerned with:",
  options: [
    "Improving people's standard of living",
    "Increasing poverty",
    "Reducing production",
    "Stopping investment"
  ],
  answer: "Improving people's standard of living"
},
{
  question: "Which of the following is a function of money?",
  options: [
    "Medium of exchange",
    "Creating scarcity",
    "Reducing production",
    "Stopping trade"
  ],
  answer: "Medium of exchange"
},
{
  question: "A bank loan given to businesses helps to:",
  options: [
    "Reduce investment",
    "Increase production activities",
    "Stop economic growth",
    "Remove competition"
  ],
  answer: "Increase production activities"
},
{
  question: "The movement of people from one country to another is known as:",
  options: [
    "Migration",
    "Industrialization",
    "Specialization",
    "Production"
  ],
  answer: "Migration"
},
{
  question: "Which of the following is a cause of inflation?",
  options: [
    "Increase in production",
    "Excess money supply",
    "Fall in demand",
    "Decrease in prices"
  ],
  answer: "Excess money supply"
},
{
  question: "The main purpose of taxation is to:",
  options: [
    "Generate government revenue",
    "Stop economic activities",
    "Reduce production completely",
    "Prevent savings"
  ],
  answer: "Generate government revenue"
},
{
  question: "A worker who loses a job because machines replace human labour experiences:",
  options: [
    "Seasonal unemployment",
    "Structural unemployment",
    "Voluntary unemployment",
    "Frictional unemployment"
  ],
  answer: "Structural unemployment"
},
{
  question: "Which of the following best explains the problem of scarcity in Economics?",
  options: [
    "Human wants are unlimited while resources are limited",
    "Resources are unlimited while human wants are limited",
    "All resources are equally available",
    "Only poor countries experience scarcity"
  ],
  answer: "Human wants are unlimited while resources are limited"
},
{
  question: "The opportunity cost of attending school is the:",
  options: [
    "School fees paid",
    "Transport fare to school",
    "Next best alternative forgone",
    "Cost of textbooks purchased"
  ],
  answer: "Next best alternative forgone"
},
{
  question: "Which of the following is a feature of a capitalist economy?",
  options: [
    "Government owns all means of production",
    "Private individuals own most productive resources",
    "There is no competition",
    "Prices are fixed by the government"
  ],
  answer: "Private individuals own most productive resources"
},
{
  question: "An increase in consumers' income will normally lead to:",
  options: [
    "A decrease in demand for normal goods",
    "No change in demand",
    "An increase in demand for normal goods",
    "A decrease in supply"
  ],
  answer: "An increase in demand for normal goods"
},
{
  question: "Which of the following is NOT a function of money?",
  options: [
    "Medium of exchange",
    "Store of value",
    "Measure of value",
    "Elimination of scarcity"
  ],
  answer: "Elimination of scarcity"
},
{
  question: "The law of supply states that:",
  options: [
    "The higher the price, the greater the quantity supplied, all other things being equal",
    "The lower the price, the greater the quantity supplied",
    "Supply is independent of price",
    "Demand and supply are always equal"
  ],
  answer: "The higher the price, the greater the quantity supplied, all other things being equal"
},
{
  question: "Which of the following is an example of a public corporation?",
  options: [
    "Dangote Cement Plc",
    "A family business",
    "Central Bank of Nigeria",
    "A partnership firm"
  ],
  answer: "Central Bank of Nigeria"
},
{
  question: "The total amount realized from the sale of goods before deducting any cost is called:",
  options: [
    "Net Profit",
    "Marginal Revenue",
    "Total Revenue",
    "Average Cost"
  ],
  answer: "Total Revenue"
},
{
  question: "Which type of market structure has many sellers producing differentiated products?",
  options: [
    "Monopoly",
    "Perfect Competition",
    "Monopolistic Competition",
    "Duopoly"
  ],
  answer: "Monopolistic Competition"
},
{
  question: "One major objective of economic integration among countries is to:",
  options: [
    "Reduce international trade",
    "Promote free movement of goods and services",
    "Increase import restrictions",
    "Prevent foreign investment"
  ],
  answer: "Promote free movement of goods and services"
},
{
  question: "Which of the following is a primary function of the entrepreneur?",
  options: [
    "Providing labour only",
    "Bearing business risks and organizing production",
    "Paying wages",
    "Supplying land"
  ],
  answer: "Bearing business risks and organizing production"
},
{
  question: "The demand for a commodity is likely to increase when:",
  options: [
    "The price of a substitute falls",
    "Consumers' income increases for a normal good",
    "The price of the commodity rises",
    "The number of buyers decreases"
  ],
  answer: "Consumers' income increases for a normal good"
},
{
  question: "Which of the following is an example of a durable consumer good?",
  options: [
    "Bread",
    "Milk",
    "Television",
    "Sugar"
  ],
  answer: "Television"
},
{
  question: "The equilibrium price of a commodity is determined where:",
  options: [
    "Demand exceeds supply",
    "Supply exceeds demand",
    "Demand equals supply",
    "Government fixes the price"
  ],
  answer: "Demand equals supply"
},
{
  question: "Which of the following is NOT a feature of perfect competition?",
  options: [
    "Free entry and exit",
    "Homogeneous products",
    "One dominant seller",
    "Many buyers and sellers"
  ],
  answer: "One dominant seller"
},
{
  question: "The main source of revenue for most governments is:",
  options: [
    "Taxation",
    "Foreign aid",
    "Borrowing",
    "Donations"
  ],
  answer: "Taxation"
},
{
  question: "Which of the following is an example of invisible trade?",
  options: [
    "Export of cocoa",
    "Import of rice",
    "Banking services",
    "Export of crude oil"
  ],
  answer: "Banking services"
},
{
  question: "Inflation caused by an increase in production costs is known as:",
  options: [
    "Demand-pull inflation",
    "Cost-push inflation",
    "Imported inflation",
    "Hyperinflation"
  ],
  answer: "Cost-push inflation"
},
{
  question: "A decrease in population growth may lead to:",
  options: [
    "Higher pressure on social amenities",
    "Lower labour supply",
    "Higher unemployment automatically",
    "An increase in inflation"
  ],
  answer: "Lower labour supply"
},
{
  question: "The process of converting raw materials into finished goods is called:",
  options: [
    "Consumption",
    "Industrialization",
    "Production",
    "Distribution"
  ],
  answer: "Production"
},
{
  question: "Which of the following best defines GDP?",
  options: [
    "Income earned by citizens abroad only",
    "Total value of goods imported",
    "Total value of final goods and services produced within a country",
    "Total government expenditure"
  ],
  answer: "Total value of final goods and services produced within a country"
},
{
  question: "Which of the following encourages specialization among countries?",
  options: [
    "International trade",
    "Inflation",
    "Population census",
    "Taxation"
  ],
  answer: "International trade"
},
{
  question: "The main aim of a sole proprietorship is to:",
  options: [
    "Maximize profit",
    "Provide free services",
    "Control government revenue",
    "Promote public welfare"
  ],
  answer: "Maximize profit"
},
{
  question: "The money paid regularly to workers for their services is called:",
  options: [
    "Interest",
    "Rent",
    "Profit",
    "Wages"
  ],
  answer: "Wages"
},
{
  question: "Which of the following is a consequence of unemployment?",
  options: [
    "Increase in national output",
    "Improved standard of living",
    "Increase in poverty",
    "Increase in exports"
  ],
  answer: "Increase in poverty"
},
{
  question: "Commercial agriculture is mainly carried out to:",
  options: [
    "Feed only the farmer's family",
    "Produce goods for sale and profit",
    "Reduce market activities",
    "Prevent exports"
  ],
  answer: "Produce goods for sale and profit"
},
{
  question: "A budget in which government revenue equals government expenditure is called:",
  options: [
    "Surplus budget",
    "Balanced budget",
    "Deficit budget",
    "Capital budget"
  ],
  answer: "Balanced budget"
},
{
  question: "Which organization promotes economic cooperation among West African countries?",
  options: [
    "OPEC",
    "ECOWAS",
    "WHO",
    "UNESCO"
  ],
  answer: "ECOWAS"
},
{
  question: "Economic planning helps a country to:",
  options: [
    "Waste scarce resources",
    "Achieve national development goals",
    "Increase unemployment",
    "Reduce production"
  ],
  answer: "Achieve national development goals"
},
{
  question: "The study of how scarce resources are allocated to satisfy unlimited wants is called:",
  options: [
    "Commerce",
    "Accounting",
    "Economics",
    "Marketing"
  ],
  answer: "Economics"
},
{
  question: "Which of the following is the best example of a free good?",
  options: [
    "Petrol",
    "Air",
    "Rice",
    "Electricity"
  ],
  answer: "Air"
},
{
  question: "The branch of Economics that studies individual economic units is known as:",
  options: [
    "Macroeconomics",
    "Microeconomics",
    "International Economics",
    "Public Finance"
  ],
  answer: "Microeconomics"
},
{
  question: "A rightward shift in the demand curve indicates:",
  options: [
    "An increase in demand",
    "A decrease in demand",
    "A fall in supply",
    "An increase in price only"
  ],
  answer: "An increase in demand"
},
{
  question: "Which of the following is an example of working capital?",
  options: [
    "Factory building",
    "Office furniture",
    "Cash at hand",
    "Motor vehicle"
  ],
  answer: "Cash at hand"
},
{
  question: "A market with only two sellers is known as:",
  options: [
    "Monopoly",
    "Duopoly",
    "Oligopoly",
    "Perfect Competition"
  ],
  answer: "Duopoly"
},
{
  question: "The institution responsible for printing Nigeria's currency is the:",
  options: [
    "Federal Ministry of Finance",
    "Nigeria Deposit Insurance Corporation",
    "Central Bank of Nigeria",
    "Nigerian Exchange Group"
  ],
  answer: "Central Bank of Nigeria"
},
{
  question: "Which of the following is a cause of demand-pull inflation?",
  options: [
    "Increase in aggregate demand",
    "Decrease in money supply",
    "Reduction in consumer spending",
    "Increase in unemployment"
  ],
  answer: "Increase in aggregate demand"
},
{
  question: "Which method of farming is mainly practiced for family consumption?",
  options: [
    "Commercial farming",
    "Mechanized farming",
    "Subsistence farming",
    "Mixed farming"
  ],
  answer: "Subsistence farming"
},
{
  question: "The value of goods exported minus the value of goods imported is called:",
  options: [
    "Balance of Trade",
    "National Income",
    "Gross Domestic Product",
    "Disposable Income"
  ],
  answer: "Balance of Trade"
},
{
  question: "Government spending on roads, hospitals and schools is classified as:",
  options: [
    "Indirect tax",
    "Capital expenditure",
    "Recurrent expenditure",
    "Public debt"
  ],
  answer: "Capital expenditure"
},
{
  question: "One major benefit of industrialization is that it:",
  options: [
    "Reduces employment",
    "Discourages investment",
    "Creates job opportunities",
    "Increases dependence on imports"
  ],
  answer: "Creates job opportunities"
},
{
  question: "Which of the following is NOT a factor of production?",
  options: [
    "Land",
    "Labour",
    "Capital",
    "Money"
  ],
  answer: "Money"
},
{
  question: "The willingness of producers to offer goods for sale at a given price is known as:",
  options: [
    "Demand",
    "Consumption",
    "Supply",
    "Distribution"
  ],
  answer: "Supply"
},
{
  question: "An increase in the price of a substitute commodity will normally:",
  options: [
    "Reduce demand for the original commodity",
    "Increase demand for the original commodity",
    "Reduce supply of the original commodity",
    "Have no effect on demand"
  ],
  answer: "Increase demand for the original commodity"
},
{
  question: "The income left after personal income tax has been deducted is called:",
  options: [
    "Gross Income",
    "National Income",
    "Disposable Income",
    "Personal Income"
  ],
  answer: "Disposable Income"
},
{
  question: "Which of the following is an objective of ECOWAS?",
  options: [
    "To promote regional economic cooperation",
    "To print West African currencies",
    "To control world oil prices",
    "To regulate global trade"
  ],
  answer: "To promote regional economic cooperation"
},
{
  question: "The payment made for the temporary use of land is called:",
  options: [
    "Interest",
    "Profit",
    "Rent",
    "Salary"
  ],
 answer: "Rent"
},
{
  question: "Which of the following best describes economic development?",
  options: [
    "An increase in population only",
    "An improvement in the standard of living of the people",
    "An increase in imports only",
    "A reduction in exports"
  ],
  answer: "An improvement in the standard of living of the people"
},
{
  question: "A business organization owned by shareholders is known as:",
  options: [
    "Sole proprietorship",
    "Partnership",
    "Public Limited Company",
    "Co-operative society"
  ],
 answer: "Public Limited Company"
},
{
  question: "Which of the following is the main objective of Economics?",
  options: [
    "To satisfy unlimited human wants with scarce resources",
    "To eliminate all human wants",
    "To increase government expenditure",
    "To prevent international trade"
  ],
 answer: "To satisfy unlimited human wants with scarce resources"
},
{
  question: "A commodity whose demand decreases as consumers' income increases is known as:",
  options: [
    "Luxury good",
    "Normal good",
    "Inferior good",
    "Complementary good"
  ],
  answer: "Inferior good"
},
{
  question: "The main aim of a co-operative society is to:",
  options: [
    "Maximize profit for shareholders",
    "Promote the welfare of its members",
    "Control government expenditure",
    "Eliminate competition"
  ],
  answer: "Promote the welfare of its members"
},
{
  question: "The point where the demand curve and supply curve intersect is called:",
  options: [
    "Marginal point",
    "Equilibrium point",
    "Break-even point",
    "Utility point"
  ],
  answer: "Equilibrium point"
},
{
  question: "Which of the following is NOT a characteristic of money?",
  options: [
    "Portability",
    "Uniformity",
    "Perishability",
    "Durability"
  ],
  answer: "Perishability"
},
{
  question: "The amount spent on producing one additional unit of output is known as:",
  options: [
    "Average cost",
    "Fixed cost",
    "Marginal cost",
    "Total cost"
  ],
  answer: "Marginal cost"
},
{
  question: "The removal of import duties among member countries is a feature of:",
  options: [
    "Economic integration",
    "Inflation",
    "Population growth",
    "Taxation"
  ],
  answer: "Economic integration"
},
{
  question: "Which of the following is a major function of commercial banks?",
  options: [
    "Printing currency",
    "Accepting deposits from customers",
    "Making national budgets",
    "Collecting customs duties"
  ],
  answer: "Accepting deposits from customers"
},
{
  question: "The value of all final goods and services produced by the citizens of a country, both at home and abroad, is known as:",
  options: [
    "Gross Domestic Product",
    "National Expenditure",
    "Gross National Product",
    "Disposable Income"
  ],
  answer: "Gross National Product"
},
{
  question: "A sustained rise in the general price level of goods and services is called:",
  options: [
    "Deflation",
    "Inflation",
    "Depression",
    "Recession"
  ],
  answer: "Inflation"
},
{
  question: "The branch of agriculture concerned with growing trees for commercial purposes is:",
  options: [
    "Forestry",
    "Fishery",
    "Horticulture",
    "Animal Husbandry"
  ],
  answer: "Forestry"
},
{
  question: "Which of the following is a feature of a developing economy?",
  options: [
    "High level of industrialization",
    "High per capita income",
    "High rate of unemployment",
    "Low population growth"
  ],
  answer: "High rate of unemployment"
},
{
  question: "A country experiences a favourable balance of trade when:",
  options: [
    "Imports are greater than exports",
    "Exports are greater than imports",
    "Imports equal exports",
    "Government expenditure exceeds revenue"
  ],
  answer: "Exports are greater than imports"
},
{
  question: "The desire for goods and services backed by the ability to pay is known as:",
  options: [
    "Supply",
    "Utility",
    "Demand",
    "Production"
  ],
  answer: "Demand"
},
{
  question: "The money received from the sale of goods before deducting expenses is:",
  options: [
    "Net profit",
    "Total revenue",
    "Marginal cost",
    "Average revenue"
  ],
  answer: "Total revenue"
},
{
  question: "Which of the following is an example of direct taxation?",
  options: [
    "Value Added Tax",
    "Import duty",
    "Company Income Tax",
    "Excise duty"
  ],
  answer: "Company Income Tax"
},
{
  question: "The study of how government raises and spends revenue is called:",
  options: [
    "Public Finance",
    "Commercial Banking",
    "International Trade",
    "Economic Integration"
  ],
  answer: "Public Finance"
},
{
  question: "One major benefit of specialization is that it:",
  options: [
    "Reduces productivity",
    "Increases efficiency",
    "Raises production costs",
    "Discourages trade"
  ],
  answer: "Increases efficiency"
},
{
  question: "The total income earned by the factors of production in a country during a given period is called:",
  options: [
    "National Income",
    "Public Debt",
    "Government Revenue",
    "Gross Expenditure"
  ],
  answer: "National Income"
},
{
  question: "A budget in which government expenditure exceeds revenue is known as:",
  options: [
    "Balanced budget",
    "Surplus budget",
    "Deficit budget",
    "Capital budget"
  ],
  answer: "Deficit budget"
},
{
  question: "The basic purpose of economic planning is to:",
  options: [
    "Reduce the standard of living",
    "Achieve national economic objectives",
    "Discourage investment",
    "Eliminate all imports"
  ],
  answer: "Achieve national economic objectives"
},
{
  question: "The reward paid to labour for its contribution to production is called:",
  options: [
    "Profit",
    "Rent",
    "Wages",
    "Interest"
  ],
  answer: "Wages"
},
{
  question: "Which of the following is a basic feature of a mixed economy?",
  options: [
    "Only the government owns resources",
    "Only private individuals own resources",
    "Both the government and private individuals own resources",
    "There is no government intervention"
  ],
  answer: "Both the government and private individuals own resources"
},
{
  question: "A rise in the price of a commodity, other things being equal, will normally lead to:",
  options: [
    "A decrease in quantity demanded",
    "An increase in quantity demanded",
    "No change in demand",
    "A fall in supply"
  ],
  answer: "A decrease in quantity demanded"
},
{
  question: "Which of the following is an example of a cash crop in Nigeria?",
  options: [
    "Yam",
    "Cassava",
    "Cocoa",
    "Maize"
  ],
  answer: "Cocoa"
},
{
  question: "The ability of a commodity to satisfy human wants is known as:",
  options: [
    "Scarcity",
    "Utility",
    "Demand",
    "Supply"
  ],
  answer: "Utility"
},
{
  question: "Which of the following is NOT a source of government revenue?",
  options: [
    "Taxation",
    "Loans",
    "Profits from public enterprises",
    "House rent paid by citizens to landlords"
  ],
  answer: "House rent paid by citizens to landlords"
},
{
  question: "The organization responsible for maintaining price stability in Nigeria is the:",
  options: [
    "Central Bank of Nigeria",
    "Federal Inland Revenue Service",
    "Nigerian Customs Service",
    "Ministry of Agriculture"
  ],
  answer: "Central Bank of Nigeria"
},
{
  question: "When total revenue is equal to total cost, a firm is said to be at:",
  options: [
    "Marginal point",
    "Break-even point",
    "Maximum profit point",
    "Loss point"
  ],
  answer: "Break-even point"
},
{
  question: "Which of the following encourages international trade?",
  options: [
    "High tariffs",
    "Trade restrictions",
    "Comparative advantage",
    "Import bans"
  ],
  answer: "Comparative advantage"
},
{
  question: "The process of transferring goods from producers to consumers is called:",
  options: [
    "Distribution",
    "Consumption",
    "Production",
    "Exchange"
  ],
  answer: "Distribution"
},
{
  question: "Which of the following is a function of the price mechanism?",
  options: [
    "Printing currency",
    "Allocating scarce resources",
    "Conducting elections",
    "Collecting taxes"
  ],
  answer: "Allocating scarce resources"
},
{
  question: "The unemployment experienced while searching for a new job is called:",
  options: [
    "Structural unemployment",
    "Seasonal unemployment",
    "Frictional unemployment",
    "Technological unemployment"
  ],
  answer: "Frictional unemployment"
},
{
  question: "A tax imposed on imported goods is known as:",
  options: [
    "Income tax",
    "Value Added Tax",
    "Customs duty",
    "Property tax"
  ],
  answer: "Customs duty"
},
{
  question: "Which of the following is an objective of industrialization?",
  options: [
    "Increase dependence on imports",
    "Reduce production",
    "Create employment opportunities",
    "Discourage investment"
  ],
  answer: "Create employment opportunities"
},
{
  question: "The economic system in which consumers determine what should be produced is known as:",
  options: [
    "Command economy",
    "Market economy",
    "Traditional economy",
    "Planned economy"
  ],
  answer: "Market economy"
},
{
  question: "The average standard of living in a country is commonly measured using:",
  options: [
    "Per capita income",
    "Population density",
    "Exchange rate",
    "Inflation rate"
  ],
  answer: "Per capita income"
},
{
  question: "Which of the following is a benefit of commercial banks to the economy?",
  options: [
    "Printing banknotes",
    "Granting loans to businesses",
    "Making national laws",
    "Collecting customs duties"
  ],
 answer: "Granting loans to businesses"
},
{
  question: "Which stage of economic integration allows the free movement of labour and capital among member countries?",
  options: [
    "Free Trade Area",
    "Customs Union",
    "Common Market",
    "Political Union"
  ],
  answer: "Common Market"
},
{
  question: "The total amount owed by the government as a result of borrowing is called:",
  options: [
    "National income",
    "Public debt",
    "Budget surplus",
    "Capital expenditure"
  ],
 answer: "Public debt"
},
{
  question: "Economics is best defined as the study of how:",
  options: [
    "Governments conduct elections",
    "Businesses maximize profits only",
    "Scarce resources are allocated to satisfy unlimited wants",
    "Money is printed and distributed"
  ],
  answer: "Scarce resources are allocated to satisfy unlimited wants"
},
{
  question: "Which of the following is a basic assumption of Economics?",
  options: [
    "Human wants are limited",
    "Resources are scarce",
    "Resources are unlimited",
    "Goods are always free"
  ],
  answer: "Resources are scarce"
},
{
  question: "The cost that remains constant regardless of the level of output is called:",
  options: [
    "Marginal cost",
    "Variable cost",
    "Average cost",
    "Fixed cost"
  ],
  answer: "Fixed cost"
},
{
  question: "Which of the following is an example of an invisible import?",
  options: [
    "Importation of vehicles",
    "Payment for foreign insurance services",
    "Importation of rice",
    "Importation of machinery"
  ],
  answer: "Payment for foreign insurance services"
},
{
  question: "A successful population policy should aim at:",
  options: [
    "Increasing poverty",
    "Improving the quality of life",
    "Reducing agricultural production",
    "Discouraging education"
  ],
  answer: "Improving the quality of life"
},
{
  question: "Which of the following is the reward for capital?",
  options: [
    "Rent",
    "Wages",
    "Interest",
    "Profit"
  ],
  answer: "Interest"
},
{
  question: "The major objective of production is to:",
  options: [
    "Create employment only",
    "Satisfy human wants",
    "Increase taxes",
    "Reduce consumption"
  ],
  answer: "Satisfy human wants"
},
{
  question: "The direct exchange of one commodity for another without using money is called:",
  options: [
    "Trade by barter",
    "Retail trade",
    "International trade",
    "Wholesale trade"
  ],
  answer: "Trade by barter"
},
{
  question: "Which of the following is a function of the entrepreneur?",
  options: [
    "Receiving rent",
    "Bearing business risks",
    "Receiving wages",
    "Receiving interest"
  ],
  answer: "Bearing business risks"
},
{
  question: "When demand is greater than supply, the market price will generally:",
  options: [
    "Fall",
    "Remain unchanged",
    "Rise",
    "Become zero"
  ],
  answer: "Rise"
},
{
  question: "A commercial bank mainly creates money through:",
  options: [
    "Printing currency",
    "Granting loans",
    "Collecting taxes",
    "Buying government assets"
  ],
  answer: "Granting loans"
},
{
  question: "The sum of fixed cost and variable cost is known as:",
  options: [
    "Marginal cost",
    "Average cost",
    "Total cost",
    "Opportunity cost"
  ],
  answer: "Total cost"
},
{
  question: "Which of the following is a major cause of structural unemployment?",
  options: [
    "Holiday periods",
    "Technological changes",
    "Rainy season",
    "Labour strikes"
  ],
  answer: "Technological changes"
},
{
  question: "Government expenditure on salaries and office maintenance is classified as:",
  options: [
    "Capital expenditure",
    "Development expenditure",
    "Recurrent expenditure",
    "Public debt"
  ],
  answer: "Recurrent expenditure"
},
{
  question: "Which of the following is a feature of subsistence farming?",
  options: [
    "Large-scale production for export",
    "Heavy mechanization",
    "Production mainly for family consumption",
    "Use of advanced technology only"
  ],
  answer: "Production mainly for family consumption"
},
{
  question: "The removal of quotas and tariffs among member countries promotes:",
  options: [
    "Inflation",
    "Economic integration",
    "Public finance",
    "Population growth"
  ],
 answer: "Economic integration"
},
{
  question: "Which of the following best measures a country's economic growth?",
  options: [
    "Increase in Gross Domestic Product",
    "Increase in population",
    "Increase in imports",
    "Increase in unemployment"
  ],
  answer: "Increase in Gross Domestic Product"
},
{
  question: "Which of the following is NOT a characteristic of labour as a factor of production?",
  options: [
    "Labour is human effort",
    "Labour cannot be separated from the worker",
    "Labour is perfectly mobile everywhere",
    "Labour is rewarded with wages"
  ],
  answer: "Labour is perfectly mobile everywhere"
},
{
  question: "The buying and selling of goods within a country's borders is known as:",
  options: [
    "International trade",
    "Domestic trade",
    "Entrepot trade",
    "Foreign exchange"
  ],
  answer: "Domestic trade"
},
{
  question: "One major objective of taxation is to:",
  options: [
    "Reduce government revenue",
    "Provide funds for public services",
    "Increase inflation",
    "Discourage production"
  ],
  answer: "Provide funds for public services"
},
{
  question: "Economic development is achieved when there is:",
  options: [
    "Improved standard of living and sustained growth",
    "Continuous increase in imports",
    "High unemployment",
    "Decline in industrial output"
  ],
  answer: "Improved standard of living and sustained growth"
},
{
  question: "Which of the following is a major determinant of demand for a commodity?",
  options: [
    "Consumers' income",
    "Cost of production",
    "Number of producers",
    "Government expenditure"
  ],
  answer: "Consumers' income"
},
{
  question: "The satisfaction obtained from consuming an additional unit of a commodity is called:",
  options: [
    "Total utility",
    "Marginal utility",
    "Consumer surplus",
    "Opportunity cost"
  ],
  answer: "Marginal utility"
},
{
  question: "Which of the following is an example of a natural resource?",
  options: [
    "Machine",
    "Factory",
    "Forest",
    "Money"
  ],
  answer: "Forest"
},
{
  question: "The payment made for the use of borrowed money is known as:",
  options: [
    "Rent",
    "Interest",
    "Profit",
    "Salary"
  ],
  answer: "Interest"
},
{
  question: "Which of the following is a characteristic of a sole proprietorship?",
  options: [
    "Unlimited liability",
    "Separate legal entity",
    "Many shareholders",
    "Perpetual succession"
  ],
  answer: "Unlimited liability"
},
{
  question: "A rise in the cost of production will most likely:",
  options: [
    "Increase supply",
    "Reduce supply",
    "Increase demand",
    "Reduce demand"
  ],
  answer: "Reduce supply"
},
{
  question: "Which of the following is a major function of money as a store of value?",
  options: [
    "It can be kept for future use",
    "It determines market price",
    "It reduces production cost",
    "It controls inflation"
  ],
  answer: "It can be kept for future use"
},
{
  question: "The difference between total revenue and total cost is known as:",
  options: [
    "Capital",
    "Profit",
    "Investment",
    "Savings"
  ],
  answer: "Profit"
},
{
  question: "Which of the following encourages agricultural development in Nigeria?",
  options: [
    "Poor road network",
    "Access to farm credit",
    "High cost of fertilizer",
    "Inadequate storage facilities"
  ],
  answer: "Access to farm credit"
},
{
  question: "The value of goods produced by citizens of a country both at home and abroad is:",
  options: [
    "Gross Domestic Product",
    "Net National Product",
    "Gross National Product",
    "Disposable Income"
  ],
  answer: "Gross National Product"
},
{
  question: "Which of the following is NOT a source of public revenue?",
  options: [
    "Taxes",
    "Fines",
    "Loans",
    "Consumer demand"
  ],
  answer: "Consumer demand"
},
{
  question: "The continuous increase in the capacity to produce goods and services is known as:",
  options: [
    "Economic growth",
    "Economic depression",
    "Economic recession",
    "Economic stagnation"
  ],
  answer: "Economic growth"
},
{
  question: "Which of the following is an advantage of international trade?",
  options: [
    "Reduction in specialization",
    "Increase in the variety of goods available",
    "Decrease in foreign exchange earnings",
    "Elimination of competition"
  ],
  answer: "Increase in the variety of goods available"
},
{
  question: "A fall in the general price level of goods and services is called:",
  options: [
    "Inflation",
    "Deflation",
    "Reflation",
    "Stagflation"
  ],
  answer: "Deflation"
},
{
  question: "Which of the following is an example of indirect taxation?",
  options: [
    "Petroleum Profit Tax",
    "Personal Income Tax",
    "Value Added Tax",
    "Company Income Tax"
  ],
  answer: "Value Added Tax"
},
{
  question: "The unemployment experienced by fresh graduates searching for jobs is called:",
  options: [
    "Structural unemployment",
    "Seasonal unemployment",
    "Frictional unemployment",
    "Disguised unemployment"
  ],
  answer: "Frictional unemployment"
},
{
  question: "Which stage of economic integration involves a common external tariff?",
  options: [
    "Free Trade Area",
    "Customs Union",
    "Common Market",
    "Economic Union"
  ],
  answer: "Customs Union"
},
{
  question: "One objective of economic planning is to:",
  options: [
    "Increase poverty",
    "Promote balanced economic development",
    "Reduce production",
    "Encourage unemployment"
  ],
  answer: "Promote balanced economic development"
},
{
  question: "The quantity of goods and services a producer is willing and able to offer for sale is called:",
  options: [
    "Demand",
    "Production",
    "Supply",
    "Distribution"
  ],
  answer: "Supply"
},
{
  question: "Which of the following is the best definition of Economics?",
  options: [
    "The study of money alone",
    "The study of production only",
    "The study of how scarce resources are allocated to satisfy unlimited wants",
    "The study of government expenditure only"
  ],
  answer: "The study of how scarce resources are allocated to satisfy unlimited wants"
},
{
  question: "The factor of production that coordinates other factors is known as:",
  options: [
    "Labour",
    "Entrepreneur",
    "Capital",
    "Land"
  ],
  answer: "Entrepreneur"
},
{
  question: "When the price of a commodity falls, the quantity demanded will normally:",
  options: [
    "Increase",
    "Decrease",
    "Remain constant",
    "Become zero"
  ],
  answer: "Increase"
},
{
  question: "Which of the following is an example of a variable cost?",
  options: [
    "Factory rent",
    "Insurance premium",
    "Cost of raw materials",
    "Manager's salary"
  ],
  answer: "Cost of raw materials"
},
{
  question: "The reward received by an entrepreneur is:",
  options: [
    "Interest",
    "Rent",
    "Profit",
    "Wages"
  ],
  answer: "Profit"
},
{
  question: "Which of the following is a major function of wholesalers?",
  options: [
    "Buying directly from final consumers",
    "Breaking bulk for retailers",
    "Producing finished goods",
    "Collecting taxes"
  ],
  answer: "Breaking bulk for retailers"
},
{
  question: "A persistent increase in the general price level reduces the:",
  options: [
    "Purchasing power of money",
    "Population size",
    "Supply of goods",
    "Level of employment"
  ],
  answer: "Purchasing power of money"
},
{
  question: "Which of the following is a feature of monopolistic competition?",
  options: [
    "One seller only",
    "Identical products",
    "Product differentiation",
    "No freedom of entry"
  ],
  answer: "Product differentiation"
},
{
  question: "The institution that accepts deposits and grants loans to customers is called:",
  options: [
    "Central Bank",
    "Commercial Bank",
    "Insurance Company",
    "Stock Exchange"
  ],
  answer: "Commercial Bank"
},
{
  question: "A decrease in import duties is most likely to:",
  options: [
    "Reduce international trade",
    "Encourage imports",
    "Increase unemployment automatically",
    "Reduce production completely"
  ],
  answer: "Encourage imports"
},
{
  question: "Which of the following is a consequence of rapid population growth?",
  options: [
    "Lower pressure on social amenities",
    "Increase in unemployment",
    "Decrease in demand for food",
    "Reduction in urbanization"
  ],
  answer: "Increase in unemployment"
},
{
  question: "Which sector of the economy is mainly involved in mining and farming?",
  options: [
    "Primary sector",
    "Secondary sector",
    "Tertiary sector",
    "Quaternary sector"
  ],
  answer: "Primary sector"
},
{
  question: "The total amount of money received from selling a firm's output is known as:",
  options: [
    "Average cost",
    "Total revenue",
    "Net income",
    "Marginal utility"
  ],
  answer: "Total revenue"
},
{
  question: "Which of the following is an example of capital intensive production?",
  options: [
    "Using many workers with simple tools",
    "Using advanced machines and few workers",
    "Producing goods manually",
    "Using only family labour"
  ],
  answer: "Using advanced machines and few workers"
},
{
  question: "Government borrowing from the public through treasury bills is a way of:",
  options: [
    "Generating public debt",
    "Reducing taxation",
    "Increasing exports",
    "Reducing inflation completely"
  ],
  answer: "Generating public debt"
},
{
  question: "One major objective of ECOWAS is to:",
  options: [
    "Promote economic cooperation among West African countries",
    "Control world oil prices",
    "Provide military rule",
    "Regulate global banking"
  ],
  answer: "Promote economic cooperation among West African countries"
},
{
  question: "The excess of exports over imports is referred to as:",
  options: [
    "Balance of payments deficit",
    "Trade imbalance",
    "Favourable balance of trade",
    "Invisible trade"
  ],
  answer: "Favourable balance of trade"
},
{
  question: "Which of the following best explains consumer sovereignty?",
  options: [
    "Consumers determine what producers should produce through their purchases",
    "Consumers fix market prices",
    "Consumers own all firms",
    "Consumers collect taxes"
  ],
  answer: "Consumers determine what producers should produce through their purchases"
},
{
  question: "The continuous rise in the output of goods and services over time is called:",
  options: [
    "Economic growth",
    "Economic integration",
    "Economic recession",
    "Economic stagnation"
  ],
  answer: "Economic growth"
},
{
  question: "Which of the following is NOT a function of commercial banks?",
  options: [
    "Accepting deposits",
    "Granting loans",
    "Printing legal tender",
    "Facilitating payments"
  ],
  answer: "Printing legal tender"
},
{
  question: "The main reason for studying Economics is to:",
  options: [
    "Understand how scarce resources are managed efficiently",
    "Learn only how to make profit",
    "Study political systems",
    "Eliminate all human wants"
  ],
  answer: "Understand how scarce resources are managed efficiently"
},
{
  question: "The desire for a commodity backed by the ability and willingness to pay is known as:",
  options: [
    "Demand",
    "Need",
    "Utility",
    "Scarcity"
  ],
  answer: "Demand"
},
{
  question: "Which of the following is an example of an indirect tax?",
  options: [
    "Company Income Tax",
    "Petroleum Profit Tax",
    "Value Added Tax (VAT)",
    "Personal Income Tax"
  ],
  answer: "Value Added Tax (VAT)"
},
{
  question: "A business owned and managed by one person is called:",
  options: [
    "Partnership",
    "Public Limited Company",
    "Co-operative Society",
    "Sole Proprietorship"
  ],
  answer: "Sole Proprietorship"
},
{
  question: "The law of diminishing marginal utility states that:",
  options: [
    "Utility increases continuously",
    "The satisfaction from each additional unit consumed eventually decreases",
    "Price always falls as consumption increases",
    "Demand is always greater than supply"
  ],
  answer: "The satisfaction from each additional unit consumed eventually decreases"
},
{
  question: "Which of the following is a feature of a command economy?",
  options: [
    "Private ownership of all resources",
    "Government ownership and control of major resources",
    "Free operation of market forces only",
    "Complete absence of government"
  ],
  answer: "Government ownership and control of major resources"
},
{
  question: "The minimum payment made to a factor of production to keep it in its present use is known as:",
  options: [
    "Economic rent",
    "Transfer earnings",
    "Profit",
    "Interest"
  ],
  answer: "Transfer earnings"
},
{
  question: "Which of the following is a major function of retailers?",
  options: [
    "Buying directly from manufacturers in very large quantities",
    "Selling goods in small quantities to final consumers",
    "Producing raw materials",
    "Printing money"
  ],
  answer: "Selling goods in small quantities to final consumers"
},
{
  question: "An increase in the supply of a commodity, with demand remaining constant, will normally:",
  options: [
    "Increase its price",
    "Reduce its price",
    "Have no effect on price",
    "Eliminate demand"
  ],
  answer: "Reduce its price"
},
{
  question: "Which of the following best explains capital formation?",
  options: [
    "The destruction of capital goods",
    "The accumulation of capital goods for future production",
    "The printing of more money",
    "The payment of salaries"
  ],
  answer: "The accumulation of capital goods for future production"
},
{
  question: "The exchange of goods and services between different countries is known as:",
  options: [
    "Domestic trade",
    "Retail trade",
    "International trade",
    "Internal commerce"
  ],
  answer: "International trade"
},
{
  question: "Which of the following is a cause of inflation?",
  options: [
    "Excess aggregate demand over aggregate supply",
    "Increase in production of goods",
    "Decrease in money supply",
    "Reduction in government spending"
  ],
  answer: "Excess aggregate demand over aggregate supply"
},
{
  question: "Which of the following is NOT a function of the Central Bank?",
  options: [
    "Issuing currency",
    "Acting as banker to the government",
    "Granting loans to the general public",
    "Controlling money supply"
  ],
  answer: "Granting loans to the general public"
},
{
  question: "The value of goods and services produced within a country's borders in one year is called:",
  options: [
    "Gross National Product",
    "Gross Domestic Product",
    "National Income",
    "Per Capita Income"
  ],
  answer: "Gross Domestic Product"
},
{
  question: "Which of the following is an effect of unemployment?",
  options: [
    "Higher national output",
    "Improved living standards",
    "Increase in social problems",
    "Lower dependency ratio"
  ],
  answer: "Increase in social problems"
},
{
  question: "Economic planning is important because it helps to:",
  options: [
    "Waste scarce resources",
    "Achieve national development goals efficiently",
    "Reduce production",
    "Discourage investment"
  ],
  answer: "Achieve national development goals efficiently"
},
{
  question: "Which of the following is a characteristic of wants?",
  options: [
    "They are limited",
    "They can all be satisfied at once",
    "They are unlimited",
    "They never change"
  ],
  answer: "They are unlimited"
},
{
  question: "The branch of Economics that studies the economy as a whole is:",
  options: [
    "Microeconomics",
    "Macroeconomics",
    "Business Economics",
    "Agricultural Economics"
  ],
  answer: "Macroeconomics"
},
{
  question: "A fall in the general level of prices over a long period is known as:",
  options: [
    "Inflation",
    "Reflation",
    "Deflation",
    "Stagflation"
  ],
  answer: "Deflation"
},
{
  question: "Which of the following is the main objective of production?",
  options: [
    "To maximize consumers' wants",
    "To satisfy human wants through goods and services",
    "To increase unemployment",
    "To reduce government revenue"
  ],
  answer: "To satisfy human wants through goods and services"
},
{
  question: "The concept of opportunity cost is best described as:",
  options: [
    "The money spent on production",
    "The value of the next best alternative forgone",
    "The total cost of production",
    "The profit made from production"
  ],
  answer: "The value of the next best alternative forgone"
},
{
  question: "Which of the following is regarded as the central economic problem of every society?",
  options: [
    "Inflation",
    "Scarcity",
    "Unemployment",
    "Taxation"
  ],
  answer: "Scarcity"
},
{
  question: "The cost of producing one more unit of a commodity is called:",
  options: [
    "Average cost",
    "Fixed cost",
    "Marginal cost",
    "Total cost"
  ],
  answer: "Marginal cost"
},
{
  question: "Which of the following is an example of a complementary good to petrol?",
  options: [
    "Motor car",
    "Bicycle",
    "Kerosene",
    "Electricity"
  ],
  answer: "Motor car"
},
{
  question: "A market structure in which there is only one producer is known as:",
  options: [
    "Oligopoly",
    "Perfect competition",
    "Duopoly",
    "Monopoly"
  ],
  answer: "Monopoly"
},
{
  question: "The primary objective of a consumer is to:",
  options: [
    "Maximize satisfaction",
    "Maximize production",
    "Increase taxation",
    "Control inflation"
  ],
  answer: "Maximize satisfaction"
},
{
  question: "Which of the following is a function of the Nigerian Stock Exchange?",
  options: [
    "Printing currency",
    "Providing a market for buying and selling securities",
    "Granting agricultural loans",
    "Collecting customs duties"
  ],
  answer: "Providing a market for buying and selling securities"
},
{
  question: "Which of the following is a likely effect of rapid inflation?",
  options: [
    "Increase in the purchasing power of money",
    "Reduction in the cost of living",
    "Decrease in the value of money",
    "Increase in exports only"
  ],
  answer: "Decrease in the value of money"
},
{
  question: "The movement of people from rural areas to urban centres is known as:",
  options: [
    "Urban-rural migration",
    "Rural-urban migration",
    "International migration",
    "Seasonal migration"
  ],
  answer: "Rural-urban migration"
},
{
  question: "Which of the following is a major objective of taxation?",
  options: [
    "To provide revenue for government",
    "To eliminate production",
    "To increase unemployment",
    "To discourage savings"
  ],
  answer: "To provide revenue for government"
},
{
  question: "A country is said to have an unfavourable balance of trade when:",
  options: [
    "Exports are greater than imports",
    "Exports are equal to imports",
    "Imports are greater than exports",
    "There are no imports"
  ],
  answer: "Imports are greater than exports"
},
{
  question: "Economic growth is commonly measured by the increase in:",
  options: [
    "Population",
    "Gross Domestic Product",
    "Imports",
    "Government expenditure"
  ],
  answer: "Gross Domestic Product"
},
{
  question: "Which of the following is NOT a feature of money?",
  options: [
    "Durability",
    "Divisibility",
    "Scarcity of wants",
    "Acceptability"
  ],
  answer: "Scarcity of wants"
},
{
  question: "Which of the following is a reward for entrepreneurship?",
  options: [
    "Wages",
    "Interest",
    "Rent",
    "Profit"
  ],
  answer: "Profit"
},
{
  question: "The amount of goods a consumer is willing and able to buy at a given price is called:",
  options: [
    "Supply",
    "Demand",
    "Production",
    "Consumption"
  ],
  answer: "Demand"
},
{
  question: "One major advantage of division of labour is:",
  options: [
    "Lower productivity",
    "Greater efficiency",
    "Higher production cost",
    "Increase in unemployment"
  ],
  answer: "Greater efficiency"
},
{
  question: "Which of the following is a function of the Central Bank of Nigeria?",
  options: [
    "Selling household goods",
    "Controlling the money supply",
    "Producing manufactured goods",
    "Operating retail shops"
  ],
  answer: "Controlling the money supply"
},
{
  question: "The use of government policies to influence economic activities is called:",
  options: [
    "Economic planning",
    "Industrial action",
    "Population census",
    "Trade by barter"
  ],
  answer: "Economic planning"
},
{
  question: "The basic economic questions of what, how and for whom to produce arise because:",
  options: [
    "Resources are unlimited",
    "Human wants are limited",
    "Resources are scarce",
    "Governments control production"
  ],
  answer: "Resources are scarce"
},
{
  question: "Which of the following is an example of fixed capital?",
  options: [
    "Fuel",
    "Raw materials",
    "Factory building",
    "Cash"
  ],
  answer: "Factory building"
},
{
  question: "The main purpose of Economics is to help individuals and societies:",
  options: [
    "Spend without planning",
    "Allocate scarce resources efficiently",
    "Eliminate all human wants",
    "Avoid production"
  ],
  answer: "Allocate scarce resources efficiently"
},
{
  question: "A situation in which resources are fully utilized is known as:",
  options: [
    "Underemployment",
    "Full employment",
    "Seasonal employment",
    "Disguised unemployment"
  ],
  answer: "Full employment"
},
{
  question: "Which of the following best describes opportunity cost?",
  options: [
    "The total cost of production",
    "The market price of a commodity",
    "The next best alternative forgone",
    "The amount spent on labour"
  ],
  answer: "The next best alternative forgone"
},
{
  question: "The payment made for the use of land in production is known as:",
  options: [
    "Interest",
    "Wages",
    "Profit",
    "Rent"
  ],
  answer: "Rent"
},
{
  question: "Which of the following is a feature of perfect competition?",
  options: [
    "One seller dominates the market",
    "Products are homogeneous",
    "There are barriers to entry",
    "Firms determine market price"
  ],
  answer: "Products are homogeneous"
},
{
  question: "The value of all goods and services produced within a country in one year is called:",
  options: [
    "Gross Domestic Product",
    "National Income",
    "Per Capita Income",
    "Gross National Product"
  ],
  answer: "Gross Domestic Product"
},
{
  question: "Which of the following is an example of direct tax?",
  options: [
    "Excise duty",
    "Value Added Tax",
    "Personal Income Tax",
    "Import duty"
  ],
  answer: "Personal Income Tax"
},
{
  question: "An increase in the number of buyers in a market will most likely:",
  options: [
    "Decrease demand",
    "Increase demand",
    "Reduce supply",
    "Reduce production"
  ],
  answer: "Increase demand"
},
{
  question: "Which of the following is a function of money as a medium of exchange?",
  options: [
    "It makes barter unnecessary",
    "It reduces production costs",
    "It controls inflation",
    "It determines population growth"
  ],
  answer: "It makes barter unnecessary"
},
{
  question: "The production of goods mainly for sale is known as:",
  options: [
    "Subsistence production",
    "Commercial production",
    "Primary production",
    "Domestic production"
  ],
  answer: "Commercial production"
},
{
  question: "Which of the following is the major objective of development planning?",
  options: [
    "Increase unemployment",
    "Promote sustainable economic growth",
    "Reduce exports",
    "Increase dependence on imports"
  ],
  answer: "Promote sustainable economic growth"
},





];
let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 15 * 60;
let timerId;

const SUBJECT = "ECONOMICS";

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