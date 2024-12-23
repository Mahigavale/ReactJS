

// const Employee={

//     name:"John Doe",
//     dept:"it",
//     joining:"12/12/24",
//     salary:"456789$",
//     getdetail:function()
//     {
//        return this.name+" "+this.dept+" "+this.salary;
//     }
// }

// const {name,salary,dept:department}=Employee;

// console.log(name);

// console.log(salary);

// console.log(Employee);

// console.log(department);


//console.log(city);
//console.log(getdetail());




//Array:

// let arr=['arr','brr','crr','drr','errr'];

// //comma => to skip the elements.

// let [a, e='yuo' , , b]=arr;
// console.log(a,b);
// console.log(e);

//console.log(arr);



let Student={
    name:"Alexa",
    marks:89,
    city:"LA",
    hobbies:["travelling", "reading","singing"]
};

let {name, hobbies:[a,b,c]}=Student;

//let[a,b,c]=["tarvelling","reading","singing"];

console.log(name,a,b,c);



//console.log(Student.name +" has hobbies "+ Student.hobbies[0]);






