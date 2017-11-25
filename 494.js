/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let amount = 0;
    let i = 0;
    let sum = 0;
    function cal(i, sum, opt){
        if(opt){
            sum += nums[i];
        }else{
            sum -= nums[i];
        }
        
        i++;
        if(nums.length == i && sum == S){
            amount++;
        }else if(nums.length != i){
            cal(i, sum, 0);
            cal(i, sum, 1);
        }
    }
    cal(i, sum, 0);
    cal(i, sum, 1);
    return amount;
};

console.log(findTargetSumWays([1,1,1,1,1],3))