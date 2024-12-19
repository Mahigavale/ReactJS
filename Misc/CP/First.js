
let Str = "welcome to the city !";

//wElcOmE tO thE cIty ! ;


let Arr = Str.split('');

//String.split()=>Arr=>filter, map=> new array => String => array.join();

let Arr2 = Arr.map(change_case); 


function change_case(n) {
    if (n == 'a' || n == 'e' || n == 'i' || n == 'o' || n == 'u') {
        return n.toUpperCase();
    }

    else {
        return n;
    }
}

console.log(Arr.join(''));

console.log(Arr2.join(''));



