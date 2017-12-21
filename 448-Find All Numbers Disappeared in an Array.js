/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr=[], res=[];
    for(let i =0; i<nums.length; i++){
        let t = nums[i];
        arr[t] = 1;
    }
    for(let i=1; i<nums.length+1;i++){
        if(!arr[i]){
            res.push(i)
        }
    }
    return res;
};

let nums = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(nums));