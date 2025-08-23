let student = {
    name: "lalit Singh",
    age: 25,
    city: "Kathmandu"
};
console.log(student.name);
student.age = 26; //this update 
student.country = "Nepal";// this how we add


//method or function inside objects

const user = {
    name: "singh",
    age: 25,
    greet: function () {
        return `Hello , my surname is ${this.name}`;

    }
};
console.log(user.greet());// Hello, my surname  is singh

//looping through an object
for (let key in user) {
    console.log(key, ':', user[key]);
}

//boject inside Array inside object

let school = {
    name: "NAST school",
    students: [
        { id: 1, name: "lalit", grades: [80, 85, 90] },
        { id: 2, name: "pramod", grades: [70, 75, 78] }
    ]
};
 console.log(school.students[0].name)
 console.log(school.students[1].grades[2]);

 //bracket notation
let teacher= {"frist name": "lalit", age:25};

console.log(teacher['first name']);//lalit
//dynamic key
let key="age";
console.log(user[key]);
//output is: 25