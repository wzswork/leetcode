/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = [];
    let temps = [nums[0]];
    let max = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(nums[i] < 0){
            temps.push(nums[i])
        }else{
            temps[temps.length-1] += nums[i];
            max = Math.max(max, temps[temps.length-1]);
        }
    }
    let start = temps.indexOf(max) - 1;
    let end = temps.indexOf(max) + 1;
    start = start >= 0 ? start : 0;
    end = end <= temps.length -1 ? end : temps.length;
    res = nums.splice(0, nums.indexOf(temps[start]));
    res = res.splice()
};