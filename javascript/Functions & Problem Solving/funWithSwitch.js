//write a program to create simple  calculator using function.
 const calculate=(a, b, Operator)=> {
    let result;
    switch (Operator) {
        case "+": result = a + b;
        return result;
          
        case "-": result = a - b;
        return result;
            
        case "*": result = a * b;
        return result;
         case "/" : if(b===0){
            return 'divided by 0 is not allowed'
         }
         else{
            result= a/b;
            return result;
         }
          
        default:
            return "no operator found"

    }
    
}
let calculation = calculate(18, 0, "/");
console.log(calculation);
//wright a function to reverse a given string without built-in reverse methods

const isReverse =(str) =>{
    let reverse= '';
    for(let char=str.length-1; char>=0; char--){
        reverse=reverse+(str[char]);
    }
    return reverse;

}
let  result=isReverse("Lalit Singh");
console.log(result);

//check  for palindrome

 const isPalindrome=(str)=>{
    let reverse = "";
    for(char=str.length-1;char>=0;char--){
        reverse= reverse+str[char];
    }
    if(str === reverse){
        return true;
    }
    else{
        return false;
    }
}
console.log(isPalindrome("lalit"));