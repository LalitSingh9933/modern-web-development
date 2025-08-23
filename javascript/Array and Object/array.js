let fruits = ['apple','banana', 'mango'];
console.log(fruits[0]);
fruits.push('orange');//add orange on the fruits end
fruits.unshift('kiwe')// add at frist index
fruits.pop(); //remove last orange from the list
fruits.shift();// remove from first
console.log(fruits.length);



// create the array of 5 numbers.find the sum
let numbers=[10,20,30,40,50];
let sum= 0;

//this is for of loop
for (let num of numbers){
    sum +=num;

}
console.log(sum);

//create an array of colors.Add 2, remove 1
let colors=['red','blue','green'];
colors.push('orange','pink');
console.log(colors);
colors.pop();
console.log(colors);

//let use reduce on array
let sum2 = numbers.reduce((acc,curr) =>acc + curr,0);
console.log(sum2);


//let use filter on  array

let ages = [12,18,25,10,30];
let adult= ages.filter(age=>age>=18);
console.log("Adultes", adult);

//map function for double the number
let arr=[1,2,3,4,5];
let double= arr.map(num => num *2);
console.log("Double:", double); // , notation show the prototype in console.

//Array of Object 
let student=[];
