



var fruit="apple";

for(var fruit=1; fruit<5;fruit++)
{
    console.log(fruit);
    
}

console.log(fruit);
console.log(fruit);




//illegal shadowing. let,const =>to =>var
let name="john";
while(true)
{
    var name="john";

    console.log(name);
    
}

console.log(name);

