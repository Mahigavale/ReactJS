
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
} ;



Object.seal(Order);


console.log(Object.isSealed(Order));




console.log(delete Order.orderid);

Order.orderid=56;

console.log(Order);



//it can allow us to modify the existing values.

//can't add new properties.

//can't delete existing properties.







