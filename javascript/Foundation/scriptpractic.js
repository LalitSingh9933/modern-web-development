
// variable  in javascript:

let name = "laleet";
const birthYear = 2000;// cannot be changed 
let age = 23;// this is the new way of variable declaration
var city ="kathmandu";// this is old way of variable declaration
console.log(`My name is ${name}, I a ${age} years old and I live in ${city}`)

// Data types in javascript:

let age1 = 23; // this is number data type
let myName = "lalit"; // string
let isStudent = true; // boolean
let myDetails = {
    name: "Lalit",
    age: 23,
    isStudent: true,
    city: "Kathmandu",
    country: "Nepal"
}// This is object data type
let nothings = null; // null data type

let myArray = [1, 2, 3, 4, 5]; // This is array data type
let unknown; // undefined

console.log(typeof age); // the out put is number. typeof shows which data type it is .

console.log(myDetails, null, 2);//this will print the object in a readable format
console.log(myDetails.name); // this dot notation object property access
console.log(myDetails["age"]); // this is bracket notation object property access   
console.log(myArray[0]); // this will print the first element of the array
console.log(myArray.length); // This will print the length of the array

//Operators in js
// Arithmetic operators
let num1 = 10;
let num2 = 23;
let sum = num1 + num2;
let difference = num2 - num1;
let product = num1 * num2;
let quotient = num2 / num1;
let reminder = num2 % num1;
let power = num1 ** 2; // this will print the power of num1 to
console.log(`The sum of ${num1} and ${num2} is : ${sum}`);
console.log(`The difference of ${num2} and ${num1} is : ${difference}`);
console.log(`The product of ${num1} and ${num2} is : ${product}`);
console.log(`The quotient of ${num2} and ${num1} is : ${quotient}`);
console.log(`The reminder of ${num2} and ${num1} is : ${reminder}`);// the out put is 3
console.log(`The power of ${num1} is : ${power}`); // the out put is 100

//comparison operators
let isEqual = num1 == num2; // this will check if num1 is equal to num2
let isNotEqual = num1 != num2; // num1 is not equal to num2
let check = num1 === num2; // this will check if num1 is strictly equal to num2.. this is  recommended way in real world website 
let check1= num1 !== num2; // num1 is strictly not equal to num2..
let isGreaterThan = num1 > num2; // this will check if num1 is greater than num2
let isLessThan = num1 < num2; // this will check if num1 is less than num2
let num5 = num1 >= num2; // this will check if num1 is greater than or equal to num2
let num3 = num1 <= num2; // num1 is less than or equal to num2
//logic operators
//these opeartors are used to combine multiple conditions 
let num4 = num1 > 5 && num2 < 30; // this will check if num1 is greater than 5 and num2 is less than 30
let num6= num1 > 5 || num2 < 20; // this will check if num1 is greater than 5 or num2 is less than 20
let num7= !(num1 > 5); // this will check if num1 is not greater than 5
//
//Assignment operators
let x = 10; // this will assign 10 to x
x += 5; // this will add 5 to x
x -= 3; // this will subtract 3 from x
x *= 2; // this will multiply x by 2
x /= 4; // this will divide x by 4
x %= 3; // this will get the reminder of x divided by 3
console.log(`The value of x is : ${x}`); 
//

//Area o f rectangle
let length = 10;
let breadth = 5;
let area = length * breadth;
console.log(`The area of rectangle is : ${area}`);

//convert celsius to fahrenheit
let celsius = 25;
let fahrenheit = (celsius *9/5) + 32;
console.log(`The temperature in fahrenheit is : ${fahrenheit}`);

// calculate BMI
let weight = 52;
let height = 1.67; // meters
let bmi = weight /(height * height);
console.log(`The BMI is : ${bmi}`);

