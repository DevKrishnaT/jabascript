let arr = [1 ,2 ,3, 34,54, 5]

arr.push(10)
arr.unshift(90);
let hold = arr.pop();
arr.shift();

//for(let num of arr){
//    console.log(num);
//}
console.log(arr);

for(let num of arr){
    console.log(num * num);
}

