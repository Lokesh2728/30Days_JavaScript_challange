const promise1=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("The promise has  been resolved");
        }, 2000);
})

promise1.then(function(user){
    // console.log(user);
})

// task 2 .catch
 const promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=false
        if(!error){
            resolve({username:"lokesh",password:'123'})// the values been passed as a object
            }
            else{
                reject("Error:The promise has been rejected")
                }
                }, 1000);
 })

 promise2.then((user)=>{
    // console.log(user)
    return user.username;
}).then((username)=>{
    console.log(username)

}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("the promise has been resolve or rejected")
})