/*
=> modifying method.

=> modifies the original array.

=>takes three arguments 1)start index 2)delete count 3)arguments to add.

=>splice takes indices from the one and not from zero.

=>when you take the zero index it adds the values in front of the first element.

drawback : modifies the original array.

toSpliced():=>
*/




let num=['a','b','f'];

//abcdef



num.splice(2,1,'c','d','e');

//console.log(num);



let arr2=['n','a','z','a','b','c'];

//naman

arr2.splice(2,4,'m','a','n');

//console.log(arr2);





let num3= ['a', 'b','c','d','e'];


num3.splice(1,0,'y','z');

console.log(num3);

