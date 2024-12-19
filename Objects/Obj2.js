


let employee={
    name:"Saras",
    salary:"2345678.67",
    email:"Saras2gmail.com",
    mobile:"76767676767",
    department:"HR",
    show:function()
     {
      console.log(this.name ,this.mobile, this.department, this.email);
      
     }
}


employee.show();

console.log(delete employee.email); //=> true /false


employee.show();


// console.log(employee.salary);
// console.log(employee["salary"]);

// console.log("name is :",employee.name ,"salary is:" ,employee.salary ,"email" , employee.email,"mobile",employee.mobile);

// function Get_info(employee)
// {
//   console.log(employee.department);
//   console.log(employee.salary);
//   console.log(employee.mobile);
//   console.log(employee.name);
// }


// Get_info(emp);