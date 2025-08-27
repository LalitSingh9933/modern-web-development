let count =0;
let timer = setInterval(()=>{
    count++;
    console.log("Counter:"+ count);
    if(count ===5){
        clearInterval(timer);
    }
},1000)