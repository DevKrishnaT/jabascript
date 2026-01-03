let nums = [1, 2, 3, 4];

let double = nums.map( n => n*n);

console.log(`double = ${double}`);

//
let nums_2 = [1, 2, 3, 4, 5, 6];

let even = nums_2.filter(n => n %2 == 0);

console.log(`even = ${even}`);

//
let nums_3 = [10, 15, 20, 25, 30];

let q3 = nums_3.filter(n => n > 15).map(n => n*2);

console.log(`mixed = ${q3}`);

// 
let nums_4 = [5, 10, 15];

let q4 = nums_4.reduce((a , i) => a + i , 0);

console.log(`sum = ${q4}`);

//

let nums_5 = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true }
];

let q5 = nums_5.filter( n => n == true);

console.log(q5)
// idk this one dint qwork with object

