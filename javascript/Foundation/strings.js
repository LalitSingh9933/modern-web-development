const s= "hello ,world ";
s.length;
//.length is use to measure the length of string
s[0]; // 'h'
s.trim(); //it is used remove extra space in front and back of the string
s.toLowerCase();//lowercase
s.toUpperCase();//upercase
s.includes("hello"); //true boolen value
s.startsWith(" he"); //true boolen
s.endsWith("! "); //true

//slicing and finding
const t= "javascript";
t.slice(0,4); // "java" 
t.slice(-6);//"script"
t.indexOf("script"); //4
t.lastIndexOf("a"); //3

//replace ,split, join
"banana".replace("na", "--");//first match ba--na output
"banana".replaceAll("na" ,"--")// output: ba----
"red, green,blue".split(",")// ["red","green","blue"]
["A", "B","C"].join("-"); //"A-B-C"

//template literals (backticks) modern way 
const name ="laleet", score = 88;
const msg =`  hi ${name}, your score is ${score}`;


//some repeating excercise
// The output should be : Hello
 let a = "hello";
 let ab = a.charAt(0);
 ab.toUpperCase()+ab.slice(1)
 console.log(ab);
 
 
 //how many time the in the para

//  function countThe(para){
//     const matches= para.match(/\bthe\b/gi);
//     return matches ?matches.length: 0;

//  }
//  console.log(countThe("The quick brown fox jumps over the lazy dog."))
// //output is :2 ;

// // mask a phone number except last 3 digits
//  function phoneNumber(phone){
//     if(phone<=3) return phone;
//     return '*'.repeat(phone.length -3)+phone.slice(-3);

//  }
//  console.log(phoneNumber("9864779019"))

 //changing string into array
 let text="Lalit Singh";
 let strArr = Array.from(text);
 console.log(strArr); 