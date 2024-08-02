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

 
promise2 .then((data)=>{
    // console.log(data)
    return data.username
    }).then((username) => {
        console.log(username)
    }).catch((err) => {
        console.log(err)
    });
    