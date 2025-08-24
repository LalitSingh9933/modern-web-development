//Destructuring objects

let car = { brand: "Toyota", model:"hylex",year:2022};

//normal way 
console.log(car.brand, car.model);

//destructuring way
let {brand, model}=car;
console.log(brand, model);

//rename variable while destructuring
let {year: carYear}=car;
console.log(carYear)
// the output is year value which is  : 2022

let {color= "Balck"}= car;
console.log(color);

//Destructuring Arrays

let numbers = [10,20,30,40];
//normal way
let first = numbers[0];
let second = numbers[1];
//destructuring way
let [a,b]=numbers;
console.log(a,b);

// default values
let [p,q,r=90]=[1,2];
console.log(p,q,r);

let [head, ...rest]=numbers;
console.log(head);// this out put is 10

console.log(rest);//This output is 20 30,40


//Destructuirn in function Parameters
 function printUser({ name, age}){
    console.log(`${name} is ${age} year old`);
 }
 let user={name:"lalit", age:30};
 printUser(user);

 // Combining Objects and arrays destructuring

 let students=[
    {name:"grace", scores:[90, 85,88]},
    { name:"caven", scores:[75,80,79]}
 ];
 for(let{ name, scores:[s1,s2,s3]} of students){
    console.log(`${name} scores:${s1},${s2},${s3}`);
 }