const cart = {
    "shirt" : 200,
    "pant"  : 300,
    "lower" : 20,
    "lehnga" : 300,

}
let wallet = 968;

createOrder(cart)

.then(total => {
    console.log(`total amount: ${total}`)
    return proceedToPayment(total, wallet);
})
.then(updatedWallet => {
    wallet = updatedWallet;
    showOrderSummary(cart , wallet)
}
)
.catch(
    err =>{
        
 console.error("Error:", err.message);

    }
)


function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      reject(new Error("Cart is not valid"));
    } else {
      const total = Object.values(cart).reduce((sum, price) => sum + price, 0);
      resolve(total);
    }
  });
}
function validateCart(cart){
    if(Object.entries(cart).length === 0){
       
        return false;
        
    }
    return true;
}


function proceedToPayment(total, wallet) {
  return new Promise((resolve, reject) => {
    if (wallet < total) {
      reject(new Error("Insufficient wallet balance"));
    } else {
      const updatedWallet = wallet - total;
      console.log("Payment successful");
      resolve(updatedWallet);
    }
  });
}

function showOrderSummary(cart, wallet) {
  console.log("Order Summary:", cart);
  console.log("Remaining Wallet Balance:", wallet);
}