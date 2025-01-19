
/**
 *  before moving to async and await => mandatory to learn promises.
 * promises => pending ,resolve, rejected.
 *  promise chaining is also possible and valid in JS.
 * each.then() must have a  seperate scope. 
 * can we chain the error ?
 * reslove and reject => keywords to look for.
 * async and await makes it easy for us to work with the promises.
 * latest addition 
 * functions => arrow
 * pending state of the prmoise , rejected and fullfilled.
 * Promise.all([p1,p2,p3]).then().catch()=>Promise Concurrency.
 */



// const prom = new Promise((resolve, reject) => {
//     //Api => Fetch 
//     let n = 100;

//     if (n == 101) {
//         resolve(100);
//     }
//     else {
//         reject("number not equal to 102 !");
//     }
// });


// prom.then((value) => {
//     console.log("resolved value:",value);
//     return value;

// }).then((value)=>{
//     console.log(value+100);

// })
// .catch((error) => {
//     console.log("error :", error);

// })



// function demo() {

//     const Obj = {
//         name: "John",
//         age: 34,
//         email: "2w56t7y8"
//     }

//     return new Promise((res, rej) => {


//         if (Obj.name == "Johns") {
//             res(Obj);
//         }
//         else {
//             rej("Name dosen't match:error")
//         }
//     })
// }


// demo().then((v)=>
// {
// console.log(v);
// }).catch((v)=>
// {
// console.log(v);
// })



// const prom = new Promise((res, rej) => {
//  //Api => Json Object
//     setTimeout(() => {
//         let num = 100;
//         if (num == 100) {
//             res("fullfilled !");
//         }
//         else {
//             rej("failed !")
//         }
//     }, 3000)
// });

// console.log(prom);

// prom.then((v)=>{console.log(v);
// }).catch((e)=>{console.log(e);
// })

// console.log(prom);



//Promise concurrency !

// let prom1=new Promise((res,rej)=>
// {
//  rej(100);
// });


// let prom2=new Promise((res,rej)=>
// {
//     res(200);
// });

// Promise.all([prom1,prom2]).then((v)=>
// {
//     console.log(v);

// }).catch((e)=>
// {
//     console.log("error",e);

// }).finally(()=>
// {
//     console.log("finally");

// })


// 10

const Obj = {
    name: "abc",
    email: "asd;,ad",
    mobile: "1234567890"
}




function adddata() {
    return new Promise((res, rej) => {





        if (Obj.mobile.length == 10) {
            return res(Obj);
        }
        else {
            return rej("FAILED !");
        }
    })
};



adddata().then((Obj) => {
    console.log(Obj);
}).catch((v) => {
    console.log(v);

}).finally(() => {
    console.log("code executed !");

});