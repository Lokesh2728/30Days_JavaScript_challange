// setTimeout(()=>
//     {
//         // console.log("hacking under process.........");
        
//     },1000)
//     setTimeout(()=>
//         {
//             // console.log("hacking under process.........");
            
//         },5000)
//         try {
            
//             console.log(lokesh);
//         }
//          catch (error) {
//                 console.log(error);
//         }
// setTimeout(()=>
//     {
//     // console.log("hacking under process.........");

// },10000)
// setTimeout(()=>
//     {
//     // console.log("system hacked");

// },15000)


// 2
const divide=function(a,b){
    
    try{
            if(b==0)
            {
                throw new Error("canot divide by zero!")
            }
        const result= a/b;
        console.log(result)
        }
        catch(error)
        {
            console.log(error.message)
         }
         }
        
    

divide(15,0)