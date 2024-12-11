/*
=>Foreach method is used to apply the given function on each of the element.

=>it can't be used to return anything. 

=>applies the given function on the given element.

=>element level operations to perform on given elements.

=> Iterative method. iterates over the each and every element of the given array.

=>dosen't affect the original array.

*/





let arr=[10,11,12,13,14,15];



// arr.forEach(Increase)





// function Increase(n)
// {
//  console.log(++n);

// }





let arr2=[111,23,37,7,13,22];



arr2.forEach(OddEven);




function OddEven(n)
{

    if(n%2==0)
    {
        console.log(n,"even");

    }
    else
    {
        console.log(n,"odd");
        
    }

}




