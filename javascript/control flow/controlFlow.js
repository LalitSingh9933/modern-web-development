let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log('You are not eligible to vote');
}

// Ternary operator
let isEligible = (age >= 18) ? "You can vote" : "You cannot vote";
console.log(isEligible);

// odd even number
let number = 10;
if (number % 2 == 0) {
    console.log("The number is even");
}
else {
    console.log("The number is odd");
}
//Find largest number
let num1 = 10;
let num2 = 20;
let num3 = 30;
if (num1 > num2 && num1 > num3) {
    console.log("The largest number is " + num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log("The largest number is " + num2);

}
else {
    console.log("The largest number is " + num3);
}
// Grade system
let marks = 85;
if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 80) {
    console.log("Grade B");
}
else if (marks >= 70) {
    console.log("Grade C");
}
else if (marks >= 60) {
    console.log("Grade D");
}
else {
    console.log("Grade F");
}

//switch case
let day = 3;
switch (day) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Satuarday");
        break;
    default:
        console.log("Invalid day");
        break;

}