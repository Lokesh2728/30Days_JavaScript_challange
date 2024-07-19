// task1
function even_odd(number)
{
    if(number%2==0)
    {
        console.log('even')
    }
    else
    {
        console.log('odd')
    }
}

// console.log(even_odd(8))
even_odd(13)

// task2
//  script to print  square of number
function square(number)
{
    return number*number
}
console.log(square(5))

//Function expression
//task3

let sum = function(x,y)
{
    return x+y
}
console.log(sum(5,6))
//task4
// function to contanetae two strings
function concat(str1,str2)
{
    return str1+" "+ str2
}
console.log(concat('hello','world'))

// arrow function
//task5
const add=(num1,num2)=>(num1+num2)
console.log(add(5,6))

//tas7
// function with default values
let sumup=(num1,num2=45)=>(num1+num2)
console.log(sumup(5))

//task8
function greet(name,age=18)
{
    return `hello ${name} you are ${this.age} years old`
}
console.log(greet('sagar',45))