/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let s = 0;
    let len = nums.length;
    let len2 = len/2;
    for(let i=0; i<len; i++){
        let t = 1;
        let start = nums[i];
        if(start != -1){
            let or = start;
            let n = nums[or];
            while(start != n){
                nums[or] = -1;
                or = n;
                n = nums[n]
                t++
            }
            if(t>len2){
                return t;
            }
            s = Math.max(s,t);
        }
    }
    return s;
};
let A = [5,4,0,3,1,6,2];
console.log(arrayNesting(A));