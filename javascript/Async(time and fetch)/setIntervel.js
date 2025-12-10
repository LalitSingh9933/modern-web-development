let count =0;
let timer = setInterval(()=>{
    count++;
    console.log("Counter:"+ count);
    if(count ===5){
        clearInterval(timer);
    }
},1000)

//revise 

 // write a javascript program that define a function called repeatedFunction. This function should log the message "This function repeats every 1000 milliseconds 
 // (second)" to the console. Then, set up an interval using setInterval() to call repeatedFunction every 1000 milliseconds. Additionally , after 5 seconds have elapsed. use setTimeout() to clear the interval previously set up.
 //"ehen the interval is cleared."

//  const repeatedFunction =()=>{
//     console.log("This function will be repeated every 1000 millisecond (1 second).");
//  }
// //  repeatedFunction();
//  const intervalID=setInterval(repeatedFunction,1000)//In this line repeatedFunction call in every 1000milisecond
 
//  setTimeout(()=>{
//     clearInterval(intervalID);
//  },5000);


