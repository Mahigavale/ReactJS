/*
=> map method is used to obtain the result in the form of an  new array.
=>takes callback function as an argument.
=>returns the new array with the specified condition on given array.
=>if you want to retreieve the new array with the specified conditions then the map is the method you will opt for.
=>dosen't affect the original array.
=> returns undefined for the elements that dosen't passes the given condition.
=>keeps the length of the array as it is.

=> improvisation : Filter()
*/




let arr=[2,4,6,8,10];   //[8 , 10]



let arr2=arr.map(gretater)

function gretater(n)
{
    if(n>=8)
    {
       return n;
        
    }
}


// console.log(arr2);


// console.log(arr2.length);
// console.log(arr.length);








let arr3=[17,21,13,56,34,12,78];



function vote(n)
{
    if(n>=18)

        return n;

    }


    let arr4=arr3.map(vote);

    console.log(arr4);

    //data inconsistency.
    
