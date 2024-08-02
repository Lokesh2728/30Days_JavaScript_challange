async function getalluser()
{
    try {
        const response=await fetch('invalid  url')
    const data=await response.json()
    console.log(data)
        
    } catch (error) {
        console.log('E:',error);    
    }
    finally{
        console.log('thaughtful')
    }
    
    
}
getalluser()