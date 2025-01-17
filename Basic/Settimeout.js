/**
 * Settimeout is one of the two native methods to work with asynchronus programming in js.
 * it executes a function after the specific  miliseconds.
 * Syntax => Settimeout (function object, delay);
 * you can use the arrow function instead of the function object to use the settimeout.
 * it just executes the function only once.
 * you can clear the settimeout with the help of the setTimeout().
 */




// function demo()
// {
//     alert("Hii welcome to our page !");
    
// }

for(let i=0;i<3;i++){

 let n=setTimeout(()=>{
alert("from settimeout");

},1000);
}

//console.log(n);

clearTimeout(n);

