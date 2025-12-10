console.log("start");
setTimeout(()=>{
    console.log("Hello after 2 second");

} ,2000);
console.log("end");
//revise 
 const mycallBack =()=>{
    console.log("It schedule the callback function after a delay of 2000 milliseconds (2sec)");
 }
 const myWork = setTimeout(mycallBack,2000);
 // to stop it 
 clearTimeout(myWork);