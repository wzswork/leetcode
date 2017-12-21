/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // splice效率不够高
    // let len = nums.length;
    // for(let i=len-1; i>=0; i--){
    //     let t = nums[i];
    //     if(t==0){
    //         nums.splice(i,1);
    //         len--;
    //         i--;
    //     }
    // }
    let len = nums.length;
    let index = 0;
    for(let i=0; i<len; i++){
        let t = nums[i];
        if(t != 0){
            nums[index] = t;
            index++;
        }
    }
    for(let i=index;i<len;i++){
        nums[i] = 0;
    }
};