/*
=> reduce method is used to reduce the given array into the single value.

=>it is like the scalar function in the mysql.

=>it takes two arguments. (Previous result , current element.)

=> the reduce method starts it's working from the first element and stores the zeroth element as the result of previous iteration.
*/


let numbers=[1,2,3,4,5,6];

console.log(numbers.reduce(totalsub));


function totalsub(total,c)
{
    console.log("total :",total ,"element :",c);
    
return  total -=c;  //shortrhand
}


