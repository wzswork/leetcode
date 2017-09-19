/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function(s) {
    if(s == ""){
        return 0;
    }
    let count = 0;
    for(let i = 0; i < s.length; i++){
        let len = Math.min(i,s.length-1-i);
        for(let j=0; j<=len; j++){
            if(s[i-j] == s[i+j]){
                count ++;
            }else{
                break;
            }
        }
        if(s[i] == s[i+1]){
            let len2 = Math.min(i, s.length - 1 - (i+1))
            for(let j=0; j<=len; j++){
                if(s[i-j] == s[i+1+j]){
                    count ++;
                }else{
                    break;
                }
            }
        }
    }
    return count;
};

console.log(countSubstrings('aaa'))