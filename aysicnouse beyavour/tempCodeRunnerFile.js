function fetch(callBack) {

    setTimeout(() => {
        callBack("data recive");
    }, 2000);
    
}

fetch((data) => {
    console.log(data)
})