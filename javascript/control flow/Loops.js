//for loop

for (let i = 0; i < 5; i++) {
    console.log(`This is iteration number ${i}`);
}
// while loop
let j=0;
while(j<5){
    console.log(`${j}`);
    j++;
}

//print numbers 1 to 100

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// even number from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);

    }
}
//print multiples of 5
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
//print the sum of 50 numbers
let sum = 0;
for (i = 1; i <= 50; i++) {
    sum += i;
    
}
console.log(`The sum of thhe first 50 numbers is : ${sum}`);

//factorial of a number
let n=3;
let factorial =1;
for (let i = 1; i<=n; i++){
    factorial *= i;
}
console.log(`the factorial of ${n} is: ${factorial}`)
//Fibonacci series

let first=0,second=1,c;
let num =10;
for(let i=1; i<=num; i++){
    console.log(first);
    third =first +second;
    first=second;;
    second=third;

}
//practice both controlflow and loops 
//using this example
for(let i=1; i<=20; i++){
    if(i%5===0&& i%3===0){
        console.log("FizzBuzz");
    }
    else if(i%5===0){
        console.log("Fizz");
    }
    else if(i%3===0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}
//once more 

for(let i=1; i<20; i++){
    if(i%5===0&& i%3===0){
        console.log("FizzBuzz");
    }
    else if(i%5===0){
        console.log("Fizz");
    }
    else if(i%3 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}