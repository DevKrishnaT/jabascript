let arr = [1, 56, 3, 1, 56, 23, 3, 34, 57, 5];

let nondupplicate = arr.filter((n, i) => arr.indexOf(n) == i);

console.log(nondupplicate);

arr = [...new Set(arr)];

console.log(arr);
