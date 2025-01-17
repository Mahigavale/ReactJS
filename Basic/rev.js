
// //let , var , const

// //undefined and null


// typeof (undefined); // default => Nan tpNumber();
// typeof (null); //manually => 0




// //1)Callback Function. varibale=> in an another function.

// // problem in debugging.
// //2) Anonymous Function.

// let v = function () {
//     return 34;
// }

// console.log(v());


// //3)Arrow=>concise,redability.
// //anonymous function,special.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach((n) => {
//     if (n % 2 != 0) {
//         console.log(n);

//     }
// })

// // 15=='15' 15==='15'
// // function oddeven(n)
// // {
// //     if(n%2 !=0)
// //     {
// //        console.log(n);

// //     }
// // }
// // (n)=>{}

// // oddeven();

// console.log("*************************************************************");

// arr.forEach(n => console.log(n));
// //(n)=>{};

// //3)Generator function.
// // we can stop the execution.
// // we can resume it from their.
// // memory = checked.


// function* library() {
//     yield "first book";
//     yield "second book";
//     yield "third book";
//     yield "fourth book";
// }

// const demo4 = library();      //function call

// console.log(demo4.next().value);   //{value:" ",done:" "}   prfoile.email , profile[email]
// console.log(demo4.next().value);
// console.log(demo4.next().value);
// console.log(demo4.next().done);
// console.log(demo4.next().done);

// //infinite sequence.


// function* gen2() {
//     let i = 0;
//     while (true) {
//         yield ++i;
//     }

// }


// let vr=gen2();


// while(true)
// {
// console.log(vr.next());

// }

//spread , rest => ...

let arr=['a','b','c','d'];

let arr2=[1,2,4,5,6,6];

const prof={
    name:"MG",
    email:"MG@",
    mobile:"1344342"
}

let arr3=[...arr,...arr2];
console.log(arr3);

const prof2={...prof,city:"Pune"}; //spread.
console.log(prof2);

//

function add(...numbers)
{
    let sum; //undefined=>Nan

    for(let i=0;i<numbers.length;i++)
    {
       sum=sum+numbers[i];
    }
    console.log(sum);
}
add(1);
add(1,2,3,4);
add('a','b','c','d','e');





















