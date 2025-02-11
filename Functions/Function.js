//mkdir folder_name


//function => reusable code block to compute something again and again.

//code readability increased.

//less code.

//takes parameters so just change the params and values change.o/p change.

//default values in parameters and overriding them.while actually invoking them.

// Objects in js.the whole js is Object. Object is collecton of properties and values seperated by colon.

//objects are created with the const keywords. so that we can't reassign them but 
//change some of their properties.

//Object has the property names and property values and can be used to hold the functions to perform specific operations on given properties of the object.

//This :=> in object:=> Object scope , in function :=> Owner of function , Stand alone global scope

//function object. ()=> execution

//ways to create the Object  1)new Keyword 2)Object literal.






// function myfunction()
// {

//     console.log("myfunction  !");
    
// }


// myfunction();

// console.log(myfunction);



// //defualt values overriding.

// //returning functions.

// function add(num1=100,num2=100)
// {
// return num1+num2;
// }


// console.log(add(123,123));



function demo()
{
    console.log("function called !");
    
}

demo(); //=> Execution
console.log(demo); // Function Object !

//default values;


function sum(a,b=500)
{
console.log(a+b);
}

// variable=>undefined =>.Tonumber()=>NaN
//default values:
// sum(100,200);
// sum(100);


// Anonymous => Not named !


//IIFE=> anonymous function.

// (function ()
// {
//     console.log("IIFE");
    
// })();



// let arr=[10,20,30,40,50];
// function greater(v)
// {
//     if(v>10)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }



// console.log(arr.map((v)=>
// {
// if(v>20)
// {
//     return true;
// }
// else{
//     return false;
// }
// }));

//return.log

//Generator function => 

// function* gen()
// {
//     yield 10; //(10,f)
//     yield 20; //(20,f)
//     yield 30; //(30,f)
//     yield 40; //(40,f)
//     //(undefined,T)
//     //
// }
// //Object


// let demo_obj=gen();

// console.log(demo_obj.next());
// console.log(demo_obj.next());
// console.log(demo_obj.next());
// console.log(demo_obj.next());
// console.log(demo_obj.next());

function* demor()
{
    for(let v=10;v<50;v++)
    {
       yield v;
        
    }
}

const count=demor();

//generating a sequence.
console.log(count.next());
console.log(count.next());
console.log(count.next());










