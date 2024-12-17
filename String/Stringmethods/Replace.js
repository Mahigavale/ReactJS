/*
=>replace is used to replace the given instances from the string.
=> it only replaces the first instacnce.
=>to replace all the instances use the global expressions or regex.
=> /regex/gi
=>/regex/g => replaces all the global instances of the given search String. Case sensitive.
=>/regex/gi  => replaces all the global instances of the given search String. Case Insensitive.
=>dosen't modify the original string.
*/


let Str="I am the Best the best The Best !";


 console.log(Str.replace(/best/ig,"Mumbai"));
 

