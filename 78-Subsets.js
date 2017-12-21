/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
    let result = [];
    
    function work(i, nums, result){
        result.push(nums);
        for(i; i<nums.length; i++){
            let [...temp] = [...nums];
            temp.splice(i,1);
            work(i, temp, result);
        }
    }

    work(0, nums, result);
    
    return result;
};

console.log(subsets([1,2,3]));