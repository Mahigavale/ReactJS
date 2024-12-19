/*
=> copied by reference.
 =>Properties :named values
 =>Methods :functions to perform on the given Object.
 => Object.Property
 =>Object["Property"]
 =>Nested Objects:
=>Person.person2.mobile
=>Person.person2["mobile"]
=>Person["person2"]["mobile"]
delete  Obj.property ;
*/



const Object_first=
{
    name:"John",
    email:"John@gmail.com",
    mobile:"7774834341"
}

// Object Literal.


// const Object_second=new Object();

// Object_second.name="wilson";
// Object_second.email="wilson@gmail.com";
// Object_second.mobile="8989898989";

//with the help of new keyword.


//console.log(Object_first);
// Object_first.name="Wilson"; //Js Objects are mutable.You can change it.anytime.
// Object_first.city="Pune";

// console.log(Object_first);



let x=Object_first;
x.name="Ajinkya";
console.log(x);
console.log(Object_first);



//console.log(Object_second);







