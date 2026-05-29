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

// JavaScript Functions
// Functions are reusable blocks of code that perform a specific task.
// Functions can be defined using the function keyword followed by a name, a list of parameters, and a block of code that performs the task.
// function addNumbers(x, y, z) {
//   return x + y + z;
// }

// console.log(addNumbers(5, 3, 8)); // Output: 16
// Arguments are values passed to a function when it is called.
// A function call is the process of executing a function in a program by specifying the function's name followed by parentheses, optionally including arguments inside the parentheses.
// When a function finishes its execution, it will always return a value.
// By default, the return value of a function is undefined.
// The return keyword is used to specify the value to be returned from the function and ends the function execution.
// Default parameters allow functions to have predefined values that will be used if an argument is not provided when the function is called. This makes functions more flexible and prevents errors in cases where certain arguments might be omitted.
// const calculateTotal = (amount, taxRate = 0.05) => {
//   return amount + (amount * taxRate);
// };

// console.log(calculateTotal(100)); // Output: 105
// Anonymous functions are functions without a name that can be assigned to variables. By assigning them to variables, you can reuse them anywhere the variable is accessible.
// const multiplyNumbers = function(firstNumber, secondNumber) {
//   return firstNumber * secondNumber;
// };

// console.log(multiplyNumbers(4, 5)); // Output: 20
// Arrow Functions
// Arrow functions are a more concise way to write functions in JavaScript.
// const calculateArea = (length, width) => {
//   const area = length * width;
//   return `The area of the rectangle is ${area} square units.`;
// };

// console.log(calculateArea(5, 10)); // Output: "The area of the rectangle is 50 square units."
// When defining an arrow function, you do not need the function keyword.
// If you are using a single parameter, you can omit the parentheses around the parameter list.
// const cube = x => {
//   return x * x * x;
// };

// console.log(cube(3)); // Output: 27
// If the function body consists of a single expression, you can omit the curly braces and the return keyword.
// const square = number => number * number;

// console.log(square(5)); // Output: 25
// Scope in Programming
// Global scope: This is the outermost scope in JavaScript. Variables declared in the global scope are accessible from anywhere in the code and are called global variables.
// Local scope: This refers to variables declared within a function. These variables are only accessible within the function where they are declared and are called local variables.
// Block scope: A block is a set of statements enclosed in curly braces {} such as in if statements, or loops.
// Block scoping with let and const provides even finer control over variable accessibility, helping to prevent errors and make your code more predictable.

// Arrays in Javascript 

// Arrays in JavaScript are dynamic, which means you can easily add or remove elements from them. There are four main methods for adding and removing elements from the beginning and end of an array: push(), pop(), shift(), and unshift(). 