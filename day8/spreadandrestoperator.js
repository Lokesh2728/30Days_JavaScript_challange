// spread operator 
// spread operator is used to copy the array or object
let a=["apple","orange","banana","papaya"]
console.log(...a)

// rest operator
// rest operator is used to copy the array or object
// it allow multiple arguments 
function sum(...number){
    return number.reduce((total,number)=>total+number,0)
}
console.log(sum(1,2,3,4,5))