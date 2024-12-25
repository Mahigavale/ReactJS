


// let arr=["mahesh","mansi","tata","bmw"];

// // console.log(arr[0]);

// // console.log(arr[3]);


// let[a,,,d]=arr; //array destructuring



// console.log(a);
// console.log(d);





let Signin={
    name:"Mahesh ",
    email:"maheshlovesrmanu@gmail.com",
    mobile:"1431431431",
    password:"********"
}

 let{name,password,...rem}=Signin;  //spread Operator
 console.log(rem);


 let arr=[10,20,30,40,50];
 let arr2=[60,70,80,90,100];

 let arr3=[...arr,...arr2]
//  console.log(a);
//  console.log(b);
//  console.log(r);

console.log(arr3);




let first={
    a:10,
    b:20
}
let second={
    c:20,
    d:40
}
let third={...first,...second};
console.log(third);



//
function Add(...n)  //[]  //rest Operator
{
    return n.reduce((total,n)=>
    {
        return total+=n;
    })
}

console.log(Add(10,20,30));
console.log(Add('a','b','c'));




 
 








