/**
 * SetInterval => used to repeat the same task after a specific period of time.
 * everything is same as settimeout but with only difference that it get's repeated every interval
 * if you don't clear the setinterval it goes on for infinite.
 * you can clear the interval with the help of the interval variable.
 */



 let n=setInterval(() => {
    console.log(" set interval");
    
    
}, 1000);


clearInterval(n);