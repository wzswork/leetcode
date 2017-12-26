/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if(k<1 || k>nums.length){
        return;
    }
    nums.sort((a,b)=>b-a);
    return nums[k-1];
};