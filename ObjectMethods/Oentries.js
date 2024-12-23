/**
 * Object.keys()=>returns the array of the keys of the given object. in the form of the iterable.
 * Object.values()=>returns the iterable of the values of the given Object.
 * Object.entries()=>return the entries i.e. key and value pairs of the given Object.
 * `${k}`,`${v}`
 * Object.entries can be used to convert the given Object in the form of the Map.
 * easy to iterate.
 */



let Person={
    name:"John",
    city:"latur",
    region:"marathwada"

}


let arr=Object.keys(Person);

let arr1=Object.values(Person);

console.log(arr);
console.log(arr1);


let arr2=Object.entries(Person);


for(let[k,v] of arr2)
{
    console.log(`${k}`,`${v}`);
    
}

//Object =>Map  or Iterable.
