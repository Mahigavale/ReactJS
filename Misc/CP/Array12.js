

// console.log(arr.push(67));    //int
// console.log(arr.unshift(111)); //int
// console.log(arr.pop); //removed number
// console.log(arr.shift);

//console.log(arr.slice(2,4))
// arr.splice(3,1,1,1,1,1); //mpodifying . start index,delete count,[]

// console.log(arr);



// arr.copyWithin(3,0,3);
// console.log(arr);




// arr.forEach((n)=>
// {
//     console.log(n);
    
// })

// let arr2=arr.map((n)=>
    // {
//     if(n>15)
//     {
//         return n;
//     }
//     else{
    //         return "0";
    //     }
    // });
    
    // console.log(arr2);

    
    
    // let arr3=arr.filter((n)=>
    // {
    //     if(n>15)
    //     {
    //         return n;
    //     }
    // })
    
    // console.log(arr3);
    
    
    
    //console.log(arr.join("*"));
    
    // console.log(arr.some((n)=>
        // {
    //     return n>15;
    // }));
    
   
    // console.log(arr.find((n)=>
    // {
    //     return n>15;
    // }));
    
    // let arr=[10,13,14,17,19,21,34,67];

    // console.log(arr.includes(13));

// let ar4=Array.from("student");

// console.log(ar4);



    

// let x=23;
// //let x has value of 23 here
// function demo()
// {
//     // here the x overshadows the outer variable.
//     let x=67;

//     console.log(x);
    
// }
    
// demo();
// console.log(x);

    

// var v=45;


// if(true)
// {
//     var v=78;
//     console.log(v);
    
// }
// console.log(v);

    

//let v=67;

// let z=78;

// if(true)
// {
//     var v=56;
//     let z=89;

//     console.log(v,z);
    
// }


// console.log(v,z);


let fruit='apple';

//let is block scoped so it behaves differently

for(let fruit=1; fruit <=4;fruit++)
{

    //inner scope >>outer scope.
    console.log(`${fruit}`);
    
}
console.log(fruit);

//var is function scoped so it behaves differently.

//use const and let over var for the purpose of the shadowing.


var demo="apple";

for(var demo=0;demo<=4;demo++)
{
console.log(demo);

}
console.log(demo);
