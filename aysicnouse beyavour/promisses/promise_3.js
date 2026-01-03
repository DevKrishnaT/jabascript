let krishna = Promise.resolve("krishna");
let newname = Promise.resolve("newame");
let setting = Promise.reject("setttingup");
Promise.allSettled([krishna , newname, setting])
.then(reult =>{ 
    console.log("hello")
    console.log(reult);
    
})


