/**
 *=> copies one or two properties to the target.
 *=>if the source and target has the same keys then override the values in target.
 *=>even if in the sources there are multiple sources with the same  keys then the sources later in the params list will overwrite.
 *=>modifies original target.
 *=>empty Objects case.
 => you can add some new properties also in the target Object,directly.
 **/


let Obj1 = {
    a: 12,
    b: 23
}

let obj2 = {
    c: 45,
    d: 67,
    f:6789
}

let obj3 =
{
    c: 89,
    d: 78,
    f:6600
}

// let obj4=
//     { c: 100, d: 569 };


Object.assign(Obj1, obj3, obj2, {c:340,d:780,name:"Pune"}); //modifies the original object =>Obj1
//

console.log(Obj1);
