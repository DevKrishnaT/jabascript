let array =  [250,645,300,900,50];

for (let i = 0; i < array.length; i++) {

    let element = array[i];
    let discount = element / 10;
    element = element - discount;
    array[i] = element;
    console.log(array[i]);
}
