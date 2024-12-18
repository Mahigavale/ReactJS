
/*
=>hoisting is a default behavior in js in which the declarations of the variables are moved to the top of the current scope.
=>only the declarations are taken to the top and not the intializations.
=>var allows us the later intialization after the declaration of the variables.
=>let and const dosen't offers us the same courtsey as the var.
=>let and const demands us to intialize the variables at the time of declarations.
=>Variables declared with let and const are hoisted to the top of their scope,
 but they are not initialized until the actual declaration is encountered in the code. 
 Before that point, they are in a "temporal dead zone,"
  which means you cannot use them before their declaration.
*/


//number=70;
console.log("line number 16:",number);
number=20;
console.log("line number 18:",number);
var number;


console.log(names);
//temporal dead zone.
let names="John";
console.log(names);
