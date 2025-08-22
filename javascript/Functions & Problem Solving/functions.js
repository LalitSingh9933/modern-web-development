// Basic functions

function greeting() {

    console.log("Hello, World");

}
greeting();

// function with parameters

function add(a, b) {
    return a + b;

}
console.log(add(5, 10));
const sum = add(4, 7);
console.log(sum);
//  one more exampe: write a function square(n) return n2. 

function square(n) {
    return n * n;
}
const number = square(2);
console.log(number);
// another example : write a function isEve(num), return true/fase
function isEven(num) {
    if (num % 2 === 0) {
        return true
    }
    else {
        return false;
    }
}
console.log(isEven(5));

// Arrow Function (This is important for now days)
const mutiply = (x, y) => x * y;//This used when there is no multiple return or logic
console.log(mutiply(3, 5));
//another example

const squareArrow = (num) => {
    return num * num;
}
console.log(squareArrow(3));

//multiple Function Example .. celsius and bmi

function celsiusFun(celsius) {
    return (celsius * 9 / 5) + 32;
}
function bmi(weight, height) {
    return weight / (height * height);
}
console.log(celsiusFun(30));
console.log(bmi(70, 1.75));

//write 10 small functions (sum array, reverse string, factorial,max of 3 numbers etc)

const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;

}
let arr = [1, 2, 3, 4, 5];

console.log(sumArray(arr));

// Reverse String

function reversString(str) {
    return str.split("").reverse().join("");
}
console.log(reversString("hello world"));
// using recursion

function reverseStrFun(str) {
    if (str === "") {
        return "";
    }
    return reverseStrFun(str.slice(1)) + str[0];

}
console.log(reverseStrFun("JavaScript"));
//factorial
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5))

//max number
function maxNumber(a,b,c){
    return Math.max(a,b,c);
}
console.log(maxNumber(3,6,2));

//check prime
function isPrime(n){
    if(n<2) return false;
    for(let i= 2; i<=Math.sqrt(n); i++){
        return false;
    }
    return true;

}
 console.log(isPrime(25));