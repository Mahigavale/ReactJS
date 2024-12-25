
// let arr=[10,20,30,40,50];

// // let arr2=[60,70,80,90,100];

// // console.log(...arr,...arr2);


// let [a,...b]=arr;

// console.log(a);

// console.log(b);


// const Person={
//     id:12,
//     name:"JD",
//     city:"Pune",
//     div:"kokan",
//     age:56
// }

// const add={
//     adid:45,
//     addnum:234
// }

// let obj3={...Person,...add};


// console.log(obj3);
//...v=>[]

function add(...v)
{
  console.log(
    v.reduce(reducelogic));
    
}

add(10,20);
add(10);
add(10,20,30);
add(1,2,3,4,5,6,7,8,9,0);
add('a','b','c')

add("I","am","the","best");


function reducelogic(total,e)
{
    return total=total+e;
}

