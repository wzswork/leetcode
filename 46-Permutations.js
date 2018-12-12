/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function generate(nums, key){
    var res = [];
    for(let i = 0; i<=nums.length; i++){
        let [...cnums] = [...nums];
        cnums.splice(i, 0, key);
        res.push(cnums);
    }
    return res
}

var permute = function(nums) {
    let res = [[nums[0]]];
    for(let i = 1; i<nums.length; i++){
        let tempres = [];
        for(let t = 0; t < res.length; t++){
            tempres = tempres.concat(generate(res[t], nums[i]))
        }
        res = tempres;
    }
    return res;
};

let nums = [1,2,3];

console.log(permute(nums));