
try {
    let age= prompt("enter the age")
    if(age>100)
    {

        throw new ReferenceError("hello errro is working fine")
    }
} catch (error) {
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
}