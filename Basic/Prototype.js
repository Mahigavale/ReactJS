/**
 * Prototype is the basis for the Protype inheritance .
 * Prototype is associated with the each and every object of JS. whether you give it or not.
 * Prototpye can be modified for the specific JS Object. using the root Object (Constructor.)
 * eg:Array.Prtotype.show=function(){}
 * eg Object.Prototype.display=function(){}
 * The JS engine first searches for the given method or property of Protype in object and if not found then searches the same in the parent protype.
 * That is the mechanism with which the Prototype chaining mechanism works.
 * the Prototype chaining ends at null.
 * If the method / property is not defined in the prototype then JS returns the Undefined.
 * 
 * you can assign the prototype of one Object to an another Object.
 * Show student one example of assigining the prototype one Object to another.
 * Object.setPrototypeOf(Object_to_set,Object_of_which_to_set);
 * 
 * Show students one example of the adding the custom function in Array and Function Objects.
 * Function.Prototype.Function_name=function(){}
 * 
 * prototype works on the constructor of the given Object while __proto__ works on the instances.
 * __proto__ is used to modify the prototypes of the given instances at runtime.=> not advisable
 * 
 * when you modify the instance of given Objet the root constructor function also get's modified.
 * arr.__proto__=== Array.Prototype => True
 */







// let arr=["SRT","MSD"];       //Array ,Function.Object =>Prototype

// // Instance => __Proto__

// //console.log(arr.__proto__ === Array.prototype);

// arr.__proto__.show=function ()
// {
//     console.log(arr.at(0));
    
// }

//arr.show();


Object.prototype.display= function ()
{
    console.log("Custom Display function from Object !");
    
}

let student={
    name:"Aarti",
    email:"Aarti@gmail.com",
    mobile:"747474747",
    show: function ()
    {
        return this.name +"from "+this.demo;
    }
};


student.__proto__.demo="Pune";


let student2={
  
}


student2.__proto__=student;

student2.__proto__.display= function ()
{
    console.log("student 2 specific function !");
    
}
//Object=>Student=>Student2  


//Object.setPrototypeOf(student2,student);

console.log(student2.show());
//console.log(student2.email);
//student.display();
student2.display();



Function.prototype.show=function ()
{
    console.log("show from function Proto");
    
}


function demo()
{

}

console.log(demo.__proto__=== Function.prototype);

demo.show();