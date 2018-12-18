/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0, end = height.length -1, len = height.length-1;
    let max = 0;
    while(start < end){
        max = Math.max(max, Math.min(height[start],height[end])*(end-start));
        height[start] > height[end] ? end-- : start++;
    }
    return max;
};

