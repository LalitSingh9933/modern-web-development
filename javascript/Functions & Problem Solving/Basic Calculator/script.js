function calculate(Operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    }
    else {
        // switch (Operation) {
        //     case 'add': result = num1 + num2;
        //         break;
        //     case 'sub': result = num1 - num2;
        //         break;
        //     case 'mul': result = num1 * num2;
        //         break;
        //     case 'div': result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
        //         break;
        // }
        if(Operation==="add"){
            result= num1+num2;
        }
        else if(Operation==="sub"){
            result= num1-num2;
        }
        else if(Operation ==="mul"){
            result = num1*num2;
        }
       else if(Operation === 'div'){
        result= num2!==0 ? num1/num2:"Cannot divide by 0";
       }
    }
    document.getElementById("result").textContent = "Result:" + result;

}