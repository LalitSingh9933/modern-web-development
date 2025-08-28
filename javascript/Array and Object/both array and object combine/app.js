const user ={
    name: "lalit",
    age: "25",
    isStudent:true,
    greeting(){ return `hi, my name is :${this.name}`;}
}
 user.name; //This is do notaion
 user["age"] //Barcket  noation usful for dynamic keys
 
console.log(user.greeting()) ;

// add/update/delete
user.country ;
user.age =21;
delete user.isStudent;

//iterate object
 console.log(Object.keys(user));
 console.log(Object.values(user));
 console.log(Object.entries(user));


 //destructuring and defaults
 const {name,age, country='India'}=user;
 console.log(name);
 console.log(country);
 console.log(age);

 //optional chaiining and nullish coalescing
// optional chaining help to prevent from crashing the app.
 const data = {profile1:{profile2: {email:"a@b.com"}}};
  console.log(data.profile1.profile2.email);
  
  const theme =data.setting?.them ?? "light";
  
  