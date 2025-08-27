//This is for setting the data
localStorage.setItem("name", "laleet");
// This is for getting the data
let user = localStorage.getItem("name");
console.log(user);
// this is for remove data
localStorage.removeItem("name");
//this is for clear data
localStorage.clear();

let person ={name:"laleet", level: 9};
localStorage.setItem("person",JSON.stringify(person));

let data =JSON.parse(localStorage.getItem("person"));
console.log(data.name);