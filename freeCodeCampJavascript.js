// Switch Statements in Javascript 

const dayOfWeek = 7;

switch(dayOfWeek){
    case 1:
        console.log("Its a Monday! Time to start the week strong.");
        break;

    case 2:
        console.log("Its Tuesday. Keep the momentum going.");
        break;

    case 3:
        console.log("Its Wednesday! We're halfway there.");
        break;

    case 4:
        console.log("Its Thursday! Almost the weekend.");
        break;

    case 5:
        console.log("Its Friday! The weekend is near.");
        break;

    case 6:
        console.log("Its Saturday! Enjoy your weekend.");
        break;

    case 7:
        console.log("Its Sunday! Rest and Recharge.");
        break;

    default:
        console.log("Invalid day! Please enter a number between 1 and 7.");
}

// Functions in Javascript 

function greet() {
    console.log("Hello World");
}
greet();

function greetMe(name){
    console.log(`Hello, ${name}. Have a good day.`)
};
greetMe('Chandan Gautam');

// Anonymous Function 

const calculateSum = function (sum1, sum2) {
    return console.log(`The sum of two numbers ${sum1} and ${sum2} is : ` + (sum1 + sum2) )
};
calculateSum(5,11);

// Function with default parameter value 

function greetings(name = "Guest") {
    console.log(`Hello, ${name}. Nice to meet you.`);
};
greetings();
greetings(`Chandan Gautam`);

// Arrow Function in Javascript 

const calculateArea = (width, height) => {
    const area = width * height;
    return area;
};
console.log(calculateArea(23,120));

const calculateArea2 = (width, height) => width * height;
console.log(calculateArea2(27,120));

// Build a loan Qualification Checker using functions and conditional if else statements :)

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

let duplexLoanMsg = getLoanMessage(85000, 850);
let condoLoanMsg = getLoanMessage(65000, 690);
let carLoanMsg = getLoanMessage(45000, 660);
let noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);