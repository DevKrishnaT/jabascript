let nums = [1 ,2, 3, 4, 4, 4, 5, 6, 6, ];

for(let num of nums){
    console.log(num);
};

let repeated = nums.filter(n => n == n+1);
console.log(repeated);