//Higher order array methos 
//it like adata pipelinee
//map 
const nums =[1,2,3];
const doubled = nums.map(n=> n*2);
//the output is 2,4,6 

 const evens = nums.filter(n=>n%2==0); //[2]

  //reduce -fold into single value (sum, object, etc)
  const sum = nums.reduce((acc,n) => acc+ n, 0); //6

  //max with reduce
  const max= [4,9,2,7].reduce((m,n) => n>m ? n:m, -Infinity);

  //find/findInde
   const arr = [{id:1},{id:2}, {id:3}];
   arr.find(x=> x.id ===2); //{id:2}
   arr.findIndex(x => x.id ===2);//output: 1

   //some / every -boolean checks
   [1,3,5].some(n=> n%2 ===0); // false (any event)
[2,4,6].every(n=> n%2 ===0); //true (all event)

// sort
const a1 = [10, 2,5];
const sortedNum = [...a1].sort((x,y)=>x-y); 
//output is : [2,5,10]

const numes = ["ram", 'asha', 'shyam'];
const sortedName = [...names].sort((a,b)=> a.localeCompare(b));

//chaining compose steps

const arry = [1,2,3,4,5,6]
arry.filter(n=>n%2===0)
.map(n=>n*n)
.reduce((acc,n) => acc+n,0);

// in above chaining 
//how value is passing through these methos 
//first filter method filter the even number [2,4,5]
//and map function or method n*n [2*2,4*4,6*6]
//after map the reduce function add the [4+16=36]
//the out put is 56


//mini- project A: student report(objets +Hofs)
const students = [
  { name: "Asha", scores: [80, 92, 88] },
  { name: "Bikash", scores: [60, 55, 70] },
  { name: "Chhabi", scores: [95, 90, 98] }
];

const avg = arr => arr.reduce((s,n)=> s+n, 0)/arr.length;
//status
const withAvgs= students.map(s=>({
    ...s,
    average:Math.round(avg(s.scores)),
    status:avg(s.scores) >=75? "pass":"fail"
}));

const ranked = [...withAvgs].sort((a,b) => b.average -a.average);

const passers =ranked.filter(s=>s.status === "pass").map(s=>s.name);
console.log(withAvgs);
console.log(ranked);
console.log("Passers:",passers);

//mini-project  B: cart totals (reduce in real life)
const cart = [
  { title: "Notebook", price: 120, qty: 2 },
  { title: "Pen",      price: 25,  qty: 5 },
  { title: "Bag",      price: 1500, qty: 1 }
];

const subTotal = cart.reduce((sum, item) => sum +item.price* item.qty,0);
const discount =subTotal>= 2000?0.1 *subTotal:0; //10% dicount
const taxed = (subTotal -discount) *1.13; //13% vat
const total =Math.round(taxed); // rounding to nearest rupee

console.log({subTotal,discount, total});