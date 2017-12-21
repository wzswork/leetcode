/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arr1=[], arr2=[];
    for(let i=0; i<nums.length; i++){
        let t = nums[i];
        let tabs = Math.abs(t);

        if(t>=0){
            if(arr1[t] == t){
                arr1[t] = "";
            }else{
                arr1[t] = t;
            }
        }else{
            if(arr2[tabs] == t){
                arr2[tabs] = "";
            }else{
                arr2[tabs] = t;
            }
        }
    }
    return parseInt((arr1.concat(arr2)).join(""));

    // var result = 0;
    // 两个相同的数异或操作会变0，0与一个数异或操作会等于该数
    // for(var i = 0 ; i < nums.length; i++)
    // {
    //     result ^= nums[i];
    // }
    // return result;
};

console.log(singleNumber([1,1,2,2,3]));