// variable and data types

console.log("Hello World") // used to print statement
// var a=50;
// var a=20;   var is globally scoped 
// console.log(a)
// as var can be change anytime and we dose not use it
 let a=50;  //here if we used to change let with anither variable it shows error
 console.log(a) // let is block scoped
 
const item=false;
console.log(item)

// data types 
// there are 7 ttypes of primitive data types 
//nn bb ss u
// 1. number
let b=35;
let c=null;
let d=true;
let e=BigInt(35);
let f=Symbol("hello");
let g="lokesh";
let h=undefined;

console.log(b,c,d,e,f,g,h)
console.log(typeof(c))

//object is a non primitive data type
 const stud={
    name:"lokesh",
    age:20,
    address:"hyd"
 }
 console.log(stud["name"])