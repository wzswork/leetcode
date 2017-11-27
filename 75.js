/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let [i, t, j] = [-1, 0, nums.length];
    for(;t<j;t++){
        if(nums[t] == 0){
            i++;
            [nums[i], nums[t]] = [nums[t], nums[i]];
            t != i && t--;
        }else if(nums[t] == 2){
            j--;
            [nums[j], nums[t]] = [nums[t], nums[j]];
            t != j && t--
        }
    }
};