/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let len = nums.length;
    if(len < 1){
        return;
    }
    let res = [];
    for(let i=0; i<len; i++){
        let t = nums[i];
        res[t] = res[t]||0;
        res[t]++;
        if(res[t]>len/2){
            return t;
        }
    }
    return;
};