/*
=> ends with checks if the given String  ends with the particular String.
=> returns true or false.
*/



let Names=["Tuendulkar" ,"agarkar" ,"Dravid" ,"Asutkar" , "Niphadkar","dhoni" ,"sharma" ,"kohli"];

   
let Names_Kar= Names.filter(Match_Value)


function Match_Value(value)
{
    if(value.endsWith("kar"))
{
    return value;
}
}

console.log("new Array :",Names_Kar);
