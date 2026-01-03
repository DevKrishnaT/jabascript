let nums = [1,0,1,1], k = 1;

var containsNearbyDuplicate = function(nums, k) {
    let ob = {}

    for (let i = 0; i < nums.length; i++){
          if(Object.hasOwn(ob , nums[i]))  {
            if(i - ob[nums[i]] <= k){
                return true;
            }
          } 
            ob[nums[i]] = i;
          
    };
    return false;
    
    
};

console.log(containsNearbyDuplicate(nums , k));


