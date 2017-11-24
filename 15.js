/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let r = new Set();
    for(let t = 0; t < nums.length-2; t++){
        let label = -nums[t]; 
        let [i,j] = [t+1, nums.length-1];
        while(i<j){
            if(i-1 != t && nums[i] == nums[i-1] ){
                i++;
                continue;
            }
            if(j!= nums.length-1 && nums[j] == nums[j+1]){
                j--;
                continue;
            }
            if(nums[i]+nums[j] == label){
                r.add([nums[t], nums[i], nums[j]].join(","));
                i++;
                j--;
            }else if(nums[i]+nums[j] > label){
                j--;
            }else{
                i++;
            }
        }
    }
    r = Array.from(r);
    r = r.map((item)=>{item = item.split(','); return item.map((item)=>parseInt(item))});
    return r;
};

console.log(threeSum([-2,0,0,2,2]))