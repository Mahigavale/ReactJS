
// //function expression
// //assigned to a variable. 1)

// demo();
// //v();

// let v = function () {
//     console.log("no name function !");

// };
// v();

// function demo() {
//     console.log("demo function!");

// }



// //anonymous function as an argument.
// let arr = [5, 10, 15, 20, 25];


// //callback functions.
// arr.forEach(function (n) { console.log(n + 1); })


// let arr2 = arr.map(function (n) { return n * 5 });

// console.log(arr2);


// //IIFE : Immediately invoked function expression.

// (function () {
//     (function () {

//         (function (v) {
//             console.log("inner iffe !" + v);

//         })(67);

//         console.log("demo from iife");

//     })();
//     console.log("IIFE function is here !");

// })();

// convert "john matthew hayden" to J.M.Matthew

const str= 'john matthew hayden';

const Name=demo(str);
console.log(Name);


function demo(str)
{
const array=str.split(" ");

const firstLetter=array[0].charAt(0).toUpperCase();

const lastLetter=array[1]. charAt(0).toUpperCase();

const middleLetter=array[1].charAt(0).toUpperCase() + array[1].slice(1).toLowerCase();
//console.log(lastLetter);
const result=`${firstLetter}.  ${lastLetter}. ${middleLetter}`;

 return result;

}  