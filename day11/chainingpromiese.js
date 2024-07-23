const promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true
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