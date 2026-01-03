let nums = [1,2,3,], k = 2;


var containsNearbyDuplicate = function(nums, k) {
for (let i = 0; i < nums.length; i++) {
    for(let j = i +1 ; j < nums.length; j++){
        if(nums[i] === nums[j]){
            if(Math.abs(i -j) <= k){
                return true;
            }
        }
    }
    
}
return false;
};

console.log(containsNearbyDuplicate(nums , k));