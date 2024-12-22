/**
 * =>define propety is used to configure the properties  for the given Object.
 * => flags: writable,enumerable,configurable
 * => by default all are set to true.
 * => once assigned value at creation,you can change it later with the help of defineproperty.
 * =>don't forget it only takes a single argument.
 * =>definedproperties with negate enumerable doesn't reflect in Object but we can access it with the help of dot operator.
 */



// let profile=
// {
//     name:'john'    //writable :false
// }


// Object.defineProperty(profile,"name" ,{
//     writable:false,
//     configurable:false,
//     enumerable:false
// })

// console.log(profile);

// //onsole.log(profile.name="sam");

// console.log(delete profile.name);

// console.log(profile);

// console.log(profile.name);



// email, number,address =>number=> secret, address =>fix

// const demo={
//     email:"ajsjslakdlda@gmail.com",
//     number:565364533,
//     address:"city pride , Pune"
// }

// Object.defineProperty(demo,"number" ,{
//     enumerable:false
// })


// Object.defineProperty(demo,"address",{
//     writable:false
// })


let profile={};

Object.defineProperty(profile,"name",{
    value:"mahesh",
    enumerable:true
})


Object.defineProperty(profile,"email",{
    value:"abc@gmail.com",
    enumerable:true
})


console.log(profile);
