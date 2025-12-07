// let arr =[];
// console.log(typeof arr);// output: object

// //Creating  array

// // first using array constructor
// let fruits= new Array("apple","orange","banana");
// console.log(fruits);
// //second way array literal
// let fruits1= ["apple","orange","banana","kiwi"];
// console.log(fruits1);


// //Accessing element in array

// console.log(fruits[0]);

// //modifying the array

// fruits1[2]="manago";
// console.log(fruits1);   

//Array Traversal /iterating over array

let fruits =[ 'apple', 'orange','mango','grapes','banana'];
//This is example of using for of loops
for(let item of fruits){
console.log(item);
}


//for in  for index
for(let item in fruits){
    console.log(item);
}
// forEach method
// The arr.forEach() method calls the provided function once  for each element of the array.
//  The provided function may perform any kind of operation on the elements of the given array.

fruits.forEach((curElem, index, arr)=>{
    console.log(`${curElem} ${index}`);
}); 
//map function
// map() creates a new array from calling a function for every array element. map() does not change the original array.
fruits.map((curElem, index,arr)=>{
    console.log(`${curElem} ${index}`); //same output as foreach loop ..
});

// The different between forEach and map() function is simple which forEach don't return out of scop but map function do.

const myArr = fruits.map((currElem, index,arr)=>{
    return `${currElem} ${index}`;
});
console.log(myArr); 

//How to Insert , Add, Replace and Delete Element  in Array(CRUD)
//push
fruits.push("strawberry");//This add strawberry at last of fruit element

//pop
fruits.pop();// remove last element of fruits array
fruits.pop("apple");//it also remove apple from the array according to name;
fruits.unshift("guava");//this add guava at first index
fruits.shift();// This remove guava from the index that is first

// The splice() method: This method of array instance changes the contents of an array by removing or replacing existing elements and/or adding new elements in place .
//*
//  splice (start,deleteCount, item1, item2 ,..... itemN);

console.log(fruits.splice(1,1,'papaya'));//delete index 1 item and adding  papaya at there
console.log()

//searching and  filter in an array

//indexOf();
//console.log(indexOf("mango"))//the output is : index of the element 
console.log(fruits.indexOf("mango"));
//when there is repeated value
console.log(fruits.lastIndexOf("mango"));

//include()
//This method includes check whether an array includes a certain element, returning true or false.
console.log(fruits.includes("mango"));

//find method find();
const number=[1,2,3,5,4,5,6,7,8,0,8,9];
// const result=number.find((currEle)=>{

//     return currEle*5
// });
// console.log(result);

//filter method

// let we want show element of array without 8;
// let value =8;
//  let updateCart = number.filter((curElem)=>{
// return curEle!==value;
//  });
//  console.log(updateCart);

//Q. Give an array of products where each product has a named and a price,
//  write a function that uses the filter method to return an array containing
//  only the products with a price less than or  equal to 50000.
// const products=[
//     {name: "Laptop", price: 120000},
//     {name:"Phone", price:8000},
//     {name:"Table", Price:3000},
//     {name:"Smartphone", price:150000}
// ];

// const filterProducts=products.filter((currElem)=>{
//     return currElem.price<=50000;
// });
// console.log(filterProducts);

//find unique value;

 const number1=[1,2,3,4, 5,6,7,8,9,10,6,7,9,7,4];
// let uniqueValues=number1.filter((curElem,index,arr)=>{
//      return arr.indexOf(curElem)===index;

// });
// console.log(uniqueValues);
// //The alternative is Set method
// console.log([...new Set(number1)]);

//sorting the array
// const fruits3=["Banna","Apple", "Strawberry","Orange","Kiwi"];
// fruits3.sort();
// console.log(fruits3)

//number sort 
const sortNum=number1.sort((a,b)=>a-b);
console.log(sortNum);
//this is another way
const sortNumbers= number1.sort((a,b)=>{
    if(a>b) return 1;
    if(b>a) return -1;
});
console.log(sortNumbers);


//reduce method reduce();

const productPrice = [100,200,300,400,500];
const totalPrice= productPrice.reduce((accum,curElem)=>{
    return accum + curElem;
},0);
 console.log(totalPrice);




