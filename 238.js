// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].

// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let product = 1;
    let hasZ = 0;
    for(let i = 0; i<nums.length; i++){
        let t = nums[i];
        if(t != 0){
            product *=nums[i];
        }else{
            hasZ ++;
        }
    }
    let res = nums.map(function(v){
        if(v != 0){
            return hasZ?0:product/v;
        }else{
            return hasZ>1?0:product;
        }
    })
    return res;
};
let nums = [1,2,3,4];
console.log(productExceptSelf(nums))