
/**
 * Fetch is used to fetch the file/resource from the server.
 * returns a promise which can be resolved to an Object.
 * 
 * don't forget to convert the response to JSon with the help of .Json and use promise chaining.
 * if the backend response is text use response.Text();
 * if the backend response is Json Object use response.Json();
 * 
 * 1)Get the Data.=>Simplest way.
 * 2)Add the Data. => use the JSON.Stringify({}) in body to pass the data
 * 3)Update the Data.
 * 4)Delete the Data.=> directly use the pathvariable aspect here
 */


// const data=fetch("http://localhost:8080/get-employees");

// data.then((v)=>
// {
//     const v2=v.json();

//     return v2;
// }).then((v)=>
// {
//     console.log(v);
    
// })


// const action= fetch("http://localhost:8080/delete-emp/4", {
//     method:'DELETE',
//     headers: {
//         'Content-Type':'application/json'
//     }

// });

// action.then((v)=>
// {
//     const v2=v.text();

//     return v2;
// }).then((v)=>
// {
//     console.log(v);
    
// }).catch((v)=>
// {
//     console.log(v);
    
// })


// const add_data=fetch("http://localhost:8080/add-emp",{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         "name":"Mahesh Gavale",
//         "email":"Maheshgavale07@Gmail.com",
//         "mobile":"1234567890"
//        })
// });

// add_data.then((v)=>
// {
//     const v2=v.json();

//     return v2;
// }).then((v)=>
// {
//     console.log("the Object added :",v);
    
// }).catch((v)=>
// {
//     console.log(v);
    
// })

const new_name="prem chopra";
const id=7;

const update_data=fetch(`http://localhost:8080/change-name?name=${new_name}&id=${id}`,
    {
     method:'PUT',
     headers:
     {
        'Content-Type':'application/json'
     }
    })


    update_data.then((v)=>
    {
        const v2=v.text();

        return v2;
    }).then((v)=>
    {
        console.log(v);
        
    }).catch((e)=>
    {
        console.log(e);
        
    })