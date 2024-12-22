

let Person={
    name:'sonu',
    email:"@gmail.com"
}


let v=Object.getOwnPropertyDescriptor(Person,"name");

console.log(v.writable);
console.log(v.enumerable);
console.log(v.configurable);
console.log(v.value);



let v1=Object.getOwnPropertyDescriptors(Person);


console.log(v1);


console.log(v1.email.writable);



