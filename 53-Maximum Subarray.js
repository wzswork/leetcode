/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let temp = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(temp <= 0){
            temp = nums[i];
            max = Math.max(max, temp);
        }else if(nums[i] + temp < 0 && i < nums.length - 1){
            temp = nums[i+1];
            max = Math.max(max, temp);
            i++;
        }else{
            temp = temp + nums[i];
            max = Math.max(max, temp);
        }
    }
    return max;
};