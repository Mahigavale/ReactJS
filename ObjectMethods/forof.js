/**
 * =>for of is used to access the values of the given array.
 * =>forof dosen't works with the Object untill it is iterable.(Object.entries() to make it iterable.)
 */



let arr=['a','b','c','d','e','f'];


for(let v of arr)
{
    console.log(v);
    
}

/**
 * 
 *   for(char c:arr)
 * {
 * Syso(c);
 * }
 * 
 * 
 */


for(let v=0;v<arr.length;v++)
{
    console.log(arr[v]);
    
}