// destructuring js


// destructuring is a way to unpack values from arrays, or properties from objects, into distinct variables
console.log("array destructuring")
let names=["alice","Bob","Charlie","Dave"]
const [name1,name2,name3,name4]=names;
console.log(name1,name2,name3,name4);



console.log("-------------------")
console.log('object destructuring ')
const person={
    name:"Alice",
    age:20,
    address:{
        city:"New York",
        state:"NY"

    }
    }
const {name,age,address:{city,state}}=person;
console.log(name,age,city,state);