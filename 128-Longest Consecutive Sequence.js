/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let combination = new Map();
    let all = new Set();
    let max = 0;
    for(let num of nums){
        if(all.has(num)){
            continue;
        }
        all.add(num);
        let [less, great] = [num - 1, num + 1];
        if(combination.has(less)){
            let t = combination.get(num) || 1;
            combination.set(num, combination.get(less) + t);
            combination.set(less, combination.get(num));
        }
        if(combination.has(great)){
            let t = combination.get(num) || 1;
            combination.set(num, combination.get(great) + t);
            combination.set(great, combination.get(num));
        }
        combination.has(num)||combination.set(num, 1);
        max = Math.max(max, combination.get(num));
    }
    return max;
};

console.log(longestConsecutive([1,2,0,1]))