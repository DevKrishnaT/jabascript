var containsDuplicate = function(nums) {

    let non_dup = new Set();

    for ( let n of nums){
        if(non_dup.has(n)){
            return true;
        }else{
            non_dup.add(n);
        }
        
    }
    return false;

    
    
};
nums = [1 ,2 ,3 ,4 ,5, 6 ,1]

console.log(containsDuplicate(nums));
