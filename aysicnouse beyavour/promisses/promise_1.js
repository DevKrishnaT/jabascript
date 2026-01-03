function fetch() {

    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("data rejet");
        }, 1000);
    });
    
}

fetch().then((data) =>{
    console.log(data);
    
})