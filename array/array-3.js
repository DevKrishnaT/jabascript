let arr = [1 ,2 ,3, 34,57, 5];

let odd_sum = arr.filter(n => n % 2 !== 0).reduce((a , b)=> a + b , 0);

console.log(odd_sum);