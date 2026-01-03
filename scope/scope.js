let name = 'krishna';

function outer() {
    let surname= "thakur";
    function inner() {
        let middle = "sinmgh";
        console.log(name);
        console.log(middle);
        
        console.log(surname);
        
        
    }
    inner();
}
outer();