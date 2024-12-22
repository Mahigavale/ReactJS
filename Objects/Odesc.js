
let Profile={
    name:"Mahesh",
    city:"Pune",
    email:"mag@2007.com",
    mobile:"1234567890"
}

const{love="mahesh",name,city:studentcity,...rem}=Profile;

console.log(name);
console.log(rem);

console.log(love);

console.log(studentcity);








