//array
//task 1-2
let array=[1,2,3,4,5]
// console.log(array)      //[ 1, 2, 3, 4, 5 ]
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])
// console.log(array[4])
// console.log(array[5])

//Task 3
console.log('push')
array.push(6)
//console.log(array)      [ 1, 2, 3, 4, 5, 6 ]
// task 4
let r=array.pop()
// console.log(array,r)
//task5
console.log('unshift')
array.unshift(0)
console.log(array)
// Task 6
console.log('shift')
array.shift(0)
console.log(array)


//loops
let element=[5,10,20,25,30,36]
// for each
console.log('for each');
element.forEach((num)=>{
    console.log(num*num)
})
//for of
console.log('for of')
for(let item of element)
{
    console.log(item)
}
//for in
console.log('for in')
for(let item in element)
    {
        console.log(item)
        }
