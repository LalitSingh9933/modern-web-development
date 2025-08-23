let student ={
    name:"lalit Singh",
    age: 25,
    city: "Kathmandu"
};
console.log(student.name);
student.age=26; //this update 
student.country ="Nepal";// this how we add


//method or function inside objects

const user ={
     name:"singh",
     age: 25,
     greet:function(){
        return `Hello , my surname is ${this.name}`;

     }
};
console.log(user.greet());// Hello, my surname  is singh

//looping through an object
// for(let key in user){
//     console.log(key, ':',user[key]);
// }