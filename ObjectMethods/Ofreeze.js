
//Object Mutability. 

// Immutability for security reason.

const Order={

    orderid:12,
    orderprice:2345589879n,
    orderlocation:"Pune",
    orderitem:"Mustang",
    Address:
    {
        pincode:234566,
        locality:"lane 8"
    }
}

Object.freeze(Order); //lock :no modify,no addition,no deletion.

//Object.seal(Order);

//console.log(Object.isSealed(Order));

console.log(Object.isFrozen(Order));


console.log(Order.orderid=34);

console.log(delete Order.orderid);


console.log(Order);








