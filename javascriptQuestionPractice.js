// Function Reverse a string using array methods 

function reverseString(str){
    const arr = [...str];
    console.log(arr)
    arr.reverse();
    console.log(arr);
    return arr.join('');
}

let newString = reverseString('hello');
console.log(newString)

// Write a function to reverse a string without using array methods and also check the string should not be empty and also check data type 

function reverString2(str){
    if(typeof str !== "string"){
        return `Error: Input must be a string.`
    } else if(str.length === 0){
        return `Error: String is empty.`;
    } else {
        let reversed = "";

        for(let i = str.length - 1; i >= 0; i--){
            reversed += str[i];
        }

        return reversed;
    }
};
console.log(reverString2("don"));

// Write a function which check is a data is palindrom or not 

function isPalindrom(str){
    let reversed = str.split('').reverse().join("");
    return reversed === str;
}

console.log(isPalindrom("madam"));