let marks = [85,97,44,37,76,60];
let totalM = 0;
let totalS = 0;

for (let one of marks){
    totalM += one;
    totalS++;
}

console.log(totalM/totalS);