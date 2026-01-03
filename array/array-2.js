let arr = [1 ,2 ,3, 34,54, 5]
// maps
let double = arr.map( n => n *n);
console.log(`maps >= ${double}`);
// filte 
let odd = arr.filter(n => n % 2 != 0);
console.log(`filter (odd) => ${odd}`);
// reduce

let sum = arr.reduce((a , b ) => a + b );
console.log(`reduce (sum) => ${sum}`);




