/*
=> as the name suggests this method is used to copy the elements of the array to the same array.

=>it takes three arguments (target,start,length-to-copy)

=>overwrites only the given indices elements and keeps all the elements as it is.

=>modifies the original array. :=> Modifying method.
*/




//vo-bm-vo-bm-vm-ta
// cars.copyWithin(2,3,3);
// // 2=> target 
// //3=> start
// //=>3=>how many

// //volvo,bmw,honda,skoda,vw,tata
// console.log(cars);


// let cars=['volvo','bmw','honda','skoda','vw', 'tata'];
// cars.copyWithin(3,1,1);
//3 index
//2 index
//1 number
// 3=>target
//2 =>start
// 1=> how many.

//console.log(cars);
//volvo,bmw,honda,skoda,vw,tata
//volvo,bmw,bmw,honda,vw,tata =>SAI
//


let numbers=[0,1,2,3,4,5];

//console.log(numbers.copyWithin(3,0,2));
// 0,1,2,0,1,5


//console.log(numbers.copyWithin(4,0,3));
//0,1,2,3,0,1 


console.log(numbers.copyWithin(4,1,3));
//0,1,2,3,1,2





