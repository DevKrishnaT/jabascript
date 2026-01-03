let city =  "kanpur";


async function dataWether() {
    
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d69c777823814abaa6554051260101&q=${city}`);
    return await response.json();

    
}

(async () => {
    let data = await dataWether();
    console.log(data.location.name);
    
})();


