let a = prompt("ente a nums");
let b = prompt("ebnter a num b");




try {
    if(isNaN(a) || isNaN(b)){
        throw  Error("hello wolds")
    }
    let sum = parseInt(a) + parseInt(b);
    console.log(sum);
    
    
} catch (error) {
    console.error(error.message);
    
    
}