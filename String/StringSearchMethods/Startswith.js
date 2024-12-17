/*
=> Startswith() dosen't take the  regex as  input. 
=>returns the true if conditions is fullfilled.
=> returns false.
*/


let Str="I am the best!";


console.log(Str.startsWith("I"));



let Cities=["Mumbai" ,"pune","LAtur","Solapur","aSAnsol" ,"Eeta","Indiranagar" ,"OPpal", "ARJununwadi"];
//:=> cities :=> a,e,i,o,u => 

    
    let new_cities=Cities.map((n)=>
    {
        return n.toLowerCase();
    })
    
    console.log(new_cities);
    

    new_cities.forEach((n)=>
    {
        if(n.startsWith("i"))

            {
                console.log(n);
                
            }
            else if(n.startsWith("o"))
            {
                console.log(n);
                
            }
            else if(n.startsWith("a"))
            {
                console.log(n);
                
            }
    });
    