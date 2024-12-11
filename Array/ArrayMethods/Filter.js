/*
=>filter is used to filter the given array and return only those elements. which will pass the given
condition.
=> it is the improvised version of the Map() method.

=>Return type : Array

=> doesn't modify the original array.
*/




let nums=[12,13,18,19,2,32];


let num2=nums.filter(vote);


function vote(n)
{
    if(n>=18)
    {
        return n;
    }
}


console.log(num2);
