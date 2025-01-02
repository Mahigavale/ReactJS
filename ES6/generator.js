const { log } = require("console");

function demo()
{
    for(let v=1;v<=10;v++)
    {
        console.log(v);
        
    }
}
//demo();
//Generator => which can pause it's execution.
//and resume from the last paused moment.

//yield =>used for  value return.



function* demo2()
{

    yield 100; // value =100,done => false

    yield 200; //value=200,done =>false

    yield 300; // value=300,done => false
     //value =undefined done => True
}

const gen=demo2();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());



// console.log(gen.next().value); // 1 iteration value , done 
// console.log(gen.next().done); //2
// console.log(gen.next().done); //3
// console.log(gen.next().done); //true
// console.log(gen.next().done); //true



function* demo3()
{
    let n=0;
    while(true)
    {
        n++;
        yield n;
    }
}

const gen2=demo3();

console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());


while (true)
{
    console.log(gen2.next());
    
}






