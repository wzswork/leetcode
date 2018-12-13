/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let res = 0;
    if (!s) {
        return res
    }
    let smap = {}, len = 0, start = 0;
    for(let i = 0; i < s.length; i++){
        let k = s[i];
        // if(s[i] == " "){
        //     k = "%s";
        // }
        if(!smap[k]){
            smap[k] = 1;
            len ++;
            res = Math.max(res, len);
        }else{
            len = 0;
            smap = {};
            i = start;
            start ++;
        }
    }
    return res;
};

console.log(lengthOfLongestSubstring("dvdf"))