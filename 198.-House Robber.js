/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let sum = [];
    if(!nums) return 0;
    switch(nums.length){
        case 0: return 0;
        case 1: return nums[0];
        case 2: return Math.max(nums[0], nums[1]);
        default: sum[0] = nums[0]; sum[1] = Math.max(nums[0], nums[1]);
    }
    for(let i=2; i<nums.length; i++){
        sum[i] = Math.max(sum[i-1], sum[i-2]+nums[i]);
    }
    return sum[sum.length-1];
};