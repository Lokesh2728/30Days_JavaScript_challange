//program to understand the map filter reduce option
//map function
let arr1=[1,2,3,4,5,6,7]
let new_arr1=arr1.map((num)=>{
    return num*num
})
// console.log(arr1)
// console.log(new_arr1)

//filter function
let arr2=[1,35,58,65,78,96]
let new_arr2=arr2.filter((num)=>
{
    return num>50
})
// console.log(arr2)
// console.log(new_arr2)

//reduce function
let arr3=[1,2,3,4,5]
let new_arr3=arr3.reduce((acc,num)=>
{
    return acc+num
},0)    //In the reduce() method, the 0 is the initial value of the accumulator (acc). It's an optional parameter, but it's essential to understand its role.
console.log(arr3)
console.log(new_arr3)