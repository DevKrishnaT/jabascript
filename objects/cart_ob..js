const cart = {
    "shirt" : 200,
    "pant"  : 300,
    "lower" : 20,
    "lehnga" : 300,

}

let price = Object.values(cart);
console.log(price);

let total = Object.values(cart).reduce((r ,i) => r + i , 0);
console.log(total);
