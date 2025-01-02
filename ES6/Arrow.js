

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// n*5 ; new Array !

let arr2 = arr.map(n => { return n * 5 });





let arr3 = arr.filter((n) => {
    if (n % 6 == 0) {
        return n;
    }
})


console.log(arr3);


arr3.forEach(n=>console.log(n));

