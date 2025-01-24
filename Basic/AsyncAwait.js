/**
 * 
 * Promise =await
 * function =async
 */



//Promise => async await.



// const Demo=fetch("http://localhost:8080/get-employees");


// Demo.then((response)=>
// {
//     return response.json();
// }).then((data)=>
// {
//     console.log(data);
    
// })


 async function fetch_data()

{
    try{
    const Demo=await fetch("http://localhost:8080/get-employees")

    const data= await Demo.json();

    console.log(data);
    }
    catch(e)
    {
        console.log(e);
        
    }
    
}

fetch_data();