// Create variables for name, age, city and print them. 

let name = 'Chandan Gautam';
const age = 26;
const city = 'Pune';
console.log(name, age, city);

// Count the number of characters in a string. 

let stringData = "Chandan Ashok Gautam";
console.log(stringData.length);

// Convert a string to uppercase 

console.log(stringData.toUpperCase());
console.log(stringData.toLowerCase());

// swap two variables without using a third variable. 

let a = 10;
let b = 20;
console.log(a);
console.log(b);
[a,b] = [b,a];
console.log(a);
console.log(b);

// Check if a string contains a specific word. 

const sentence = "I am learning Javascript from freeCodeCamp";
console.log(sentence.includes("I am javascript"));

// Reverse a String using for loop 

const reverseString3 = (str) => {
    let reversed = "";

    for(let i = str.length - 1; i >= 0; i--){
        reversed = reversed + str[i];
    }
    return reversed;
}

console.log(reverseString3("chandan"))

const data = "gautam";

// Reverse a String using in-built methods 

let dataReverse = data.split('').reverse().join('');
console.log(dataReverse);

// Check if a string is a palindrome using in built string methods. 

const isPalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return reversed === str;
}

console.log(isPalindrome('mam')) 

// Check if a string is a palindrom using for loop 

const isPalindrome2 = (str) => {
    let reversed = "";

    for(let i = str.length - 1; i >= 0; i--){
        reversed = reversed + str[i];
    }

    return reversed === str;
}

console.log(isPalindrome2('dad'));
