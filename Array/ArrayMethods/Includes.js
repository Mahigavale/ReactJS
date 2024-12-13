
/*
=> includes is used to check whether the given value is present in array.

=> return type is boolean.

=>useful for conjuction with the other methods.

*/


let array1=['a','b','c','d','e','f'];



console.log(array1.includes('z'));


console.log(array1.includes('a'));



// a:=> map + 1



if( array1.includes(('z'))) //
{
   console.log(
    array1.map((n)=>
    {
      return  n+'a';
    }))
}
else
{
    console.log("condition unsatisfied !");
    
}
