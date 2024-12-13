/*
 => used to check if the every element of the given array passes a certain condition.

 => great to check the array compatibility.

=> doesn't modifies the original array.

Converse:=> Some.

*/


let numbers=[11,13,15,17,19,21];



 function Greater(n)
 {
   return n>=15;
 }


console.log(numbers.every(Greater));


function Even(n)
{
    return n%2==0;
}

let arr2=[11,22,44,66,88,44];

//
console.log(arr2.every(Even));

