const p1= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 resolved')
        }, 11000)

})
const p2= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 resolved')
        }, 2000)

})
const p3= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3 resolved')
        }, 3000)

})

// p1.then((user)=>{
//     console.log(user)
// }
// )
// p2.then((user)=>{
//     console.log(user)
// }
// )
// p3.then((user)=>{
//     console.log(user)
// }
// )
// Promise.all([p1, p2, p3]).then((values) => {
//     console.log(values); 
//   });

Promise.race([p1,p2,p3]).then((values)=>{
    console.log(values);
});