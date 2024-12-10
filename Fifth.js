// +, - ,/ ,% ,> ,< ,>= ,<= !=
// == and ===
// != and !==
// ** => exponential.


// js object => unequal.

//typeof => to find the type of given variable.
let num=10;
let num2='10';


console.log(num==num2);
// value 
console.log(num===num2);
//value and Type 10, '10'

// != and !==
console.log(num!=num2);
//it checks only values
console.log(num !==num2);
//it checks values as well as Types.

let num3=new Number(34);
let num4=new Number(34);

//js :comparison of js object is always false.
console.log(num3==num4);
console.log(num===num4);

//JSON.stringify()
console.log("Stringify :");


console.log(JSON.stringify(num3)==JSON.stringify(num4));

// console.log(typeof(num));
// console.log(typeof(num2));


let number=10**3; //exponential operator . 10^3
console.log(number);


//exponential notation.
//100000000000000000
let num100=10e16;
let num101=10e-5;
console.log(num100);
console.log(num101);



