/**
 * =>Object.Create() is used to create the Object from the existing Object Prototype.
 * => it basically copies the properties from source to the new Object.
 * => extensibilty principal is applicable here.
 * => unless and untill the  values are explicitily set it will log an empty Object in console.
 * =>if you access the properties of new object with the . keyword => earlier Object's properties are displayed.
 */



let Obj={
    city:"latur",
    age:45,
    pension:true
}



let Obj2=Object.create(Obj);

 Obj2.city="Pune";
Obj2.age=67;
Obj2.pension=false;
Obj2.nagar="sadashiv";

console.log(Obj2);
