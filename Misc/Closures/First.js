/*
=>closure is nothing but the binding of the required data with the function itself.
=> required data || lexical scope || surrounding state : ek hi bat hai !
=> generally nested functions work with these closures.
=> important concept.
*/


//let city="Pune";

// function Outer()
// {
//    let city="latur";
//    //private variable.
//     function Inner()
//     {
        
//         console.log("city:",city);
        
//     }

//     return Inner;
// }


// let Result=Outer();

// console.log(Result);

// Result();

//null=>0 undefined=> nan
// toNumber()
    

function Outer(x)
{
    function Inner(y)
    {
        return x+y;
    }
    return Inner;
}

const demo=Outer(40);   //undefined  || value

console.log(demo(50));   //undefined  || value




 

  