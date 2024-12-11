// callback function :argument
// first element to pass the condition returns.
// if no element is found returns the default or undefined.
//can change the default with the help of the logical or operator.

//function object ; => call back function.

//150 <element

let arr=[67,78,89,11,234,567,432,12,34];


console.log(arr.find(even) || "no even element");



function even(n)
{
    if(n%2==0)
    {
        return n;
    }
}










