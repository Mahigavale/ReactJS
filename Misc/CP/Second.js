

// [Prime numbers  from given array !]


let arr = [13, 47, 79, 31, 23, 45, 78, 90, 67];



let arr2 = arr.filter(Logic)

//console.log(arr2);

function Logic(n) {
    let flag = true;
    for (let v = 2; v < n; v++) {
        if (n % v == 0) {
            flag = false;
            break;
        }
    }
    if (flag==true) {
        return n;
    }
}

console.log("prime numbers:",arr2);





