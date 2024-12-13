/*
=> flat is used to flatten the given array or nested array to a specific depth.

=>if we don't provide the depth it takes it as 1.

=> Infinity  is also the depth of the given array.

=>it  simplifies the nested array and makes it useful for the operations.
*/


//flat [[[[[]]]]]=>[]
    //depth 
//Infinity
let nums=[10,[20,[30,[67,78,89],56,34],40],50];


console.log(nums.flat(Infinity));





