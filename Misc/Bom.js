/**
 * BOM =>browser object model interacts with the browser window.
 * git gives us the information about the Broweser,version, language,
 * we can use navigator,location etc to fetch the information about the current and next pages.
 * 
 * 
 * Bom => Popup models, History model
 * 
 * Popup=> alert (why third party alerts are prefered ?),confirm(conditional statements),prompt(2 i/p )
 * 
 * History=> history.forward();
 *           history.backward();
 *           history.go(); //positive and negative numbers for the pages 
 *            //create three pages=> navigate to from one to second ,second to third
 * 
 * screen => width ,height
 * 
 * Navigator => Information about browser.(online /offline)
 * location => Url info.... manipulation
 * 
 * geolacation => watch ,clearwatch , get current position
 * 
 * 
 * 
 */





//window.alert("hi from bom !");
//alert =>code execution halts, position => browser. //no return 


// let value=confirm("are you over 18 years ?"); //boolean value

// console.log(value);
// if(value==true){


//     setTimeout(demo, 2000);
// }
// else{
//     console.log("you are underage !");

// }

// function demo()
// {
//     console.log("data posted !");

// }


//placeholder
// let result=window.prompt("hiii","Please enter the name");

// console.log(result);



// function moveforward()
// {
//  history.forward();
// }


// function movebackward()
// {
// history.back();
// }


// function moveforwardtwopages()
// {
// history.go(2); // +2 forward
// }

// function movebackwardtwopages()
// {

//     history.go(-2);  //-2 backward.
// }


// desktop site , mobile site :=> dimensions => you can decide :=>
// let screen_height=screen.width;


// if(screen_height >450)
// {
//     console.log("This the laptop screen");

// }
// else if(screen_height <450 && screen_height >0)
// {
//     console.log("mobile screen");

// }
// else{
//     console.log("some error has occured !");

// }


//console.log(navigator);
//App :=> please connect to internet


// let flag=navigator.onLine;   //true/false
// if(flag)
// {
//     console.log("you are Online !");

// }
// else{
//     console.log("please connect to internet !");

// }


//  const text_value=navigator.clipboard.readText();     //Promise
//  text_value.then((text)=>
// {
//     console.log(text);

// }).catch((error)=>
// {

//     console.log(error);

// })

//navigator => Browser



//location.assign("https://www.google.co.uk/"); //navigate to the given url


// console.log(navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
    

// }, (error) => {
//     console.log(error);

// }));


// console.log(navigator.geolocation.watchPosition((success)=>
// {
//     console.log(success.coords.accuracy.toPrecision());
//     console.log(success.timestamp.toString());
    
    
// }));


