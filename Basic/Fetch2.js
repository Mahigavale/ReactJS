/**
 * Get: default method in Fetch. returns a promise use .JSON() to convert the response to JSON and use it accordingly.
 *
 * POST: don't forget to convert the given body to JSON.stringify() before passing it in url body.
 * 
 * fetch('url',{method:'',headers:{'CT':'a/j'},body:JSON.stringify({})})
 * 
 * PUT: everything as same just the updating value must be a part of the url.
 *  
 * fetch(`url${} ${}`, { method:'PUT',headers:{'CT':'a/j'}})
 * 
 * DELETE : the deleting parameter must be the part of the given url. use pathvariable in backend for this.
 * 
 * 
 * things to remember :
 * 
 * if the returning type of given operation is JSON return response.JSON();
 * 
 * if the returning type of given operation is String return response.text();
 * 
 * if you are passing an JSON object in the given url then body:JSON.Stringify({Object});
 * 
 */


// Get the data.


// let get_data = fetch("http://localhost:8080/get-employees");


// get_data.then((response) => {

//     return response.json();

// }).then((response2) => {
//     console.log(response2);

// }).catch((error) => {
//     console.log(error);

// })

//Post The Data
// let add_data = fetch("http://localhost:8080/add-emp", {
//     method: 'POST',
//     headers:
//     {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         "name": "Sachin Tendulkar",
//         "email": "Srt@gmail.com",
//         "mobile": "1234567890"
//     })
// })

// add_data.then((response) => {
//     return response.json();
// }).then((response2) => {
//     console.log(response2);

// }).catch((error) => {
//     console.log(error);

// })


//Put /Update the Data

// const name = "Rahul Dravid";
// const id = 11;

// const update_data = fetch(`http:localhost:8080/change-name?name=${name}&id=${id}`,
//     {
//         method: 'PUT',
//         headers:
//         {
//             'Content-Type': 'application/json'
//         }
//     }
// );


// update_data.then((value) => {
//     return value.text();
// }).then((value2) => {
//     console.log(value2);

// }).catch((error) => {
//     console.log(error);

// })



//Delete the Data

const id = 6
const delete_data = fetch(`http://localhost:8080/delete-emp/${id}`,
    {
        method: 'DELETE',
        headers:
        {
            'Content-Type': 'application/json'
        }
    }
)


delete_data.then((Value) => {
    return Value.text();
}).then((Value2) => {
    console.log(Value2);

}).catch((err) => {
    console.log(err);

})