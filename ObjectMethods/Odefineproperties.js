/**
 * => same as defineproperty but the  only difference is that it takes multiple arguments at the same time.
 * =>Odefine(o,{ p1:{flags},p2:{flages},p3:{flages},p4:{flags}})
 */




let profile = {};



Object.defineProperties(profile, {
    name: {
        value: "madhav",
        enumerable: true,
        writable:true,
        configurable:false
    },
    email: {
        value: "abc@gmail.com",
        enumerable: true
    }
    ,
    city: {
        value: "Pune",
        enumerable: true
    }

});

console.log(profile);
