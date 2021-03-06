/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (!s || !p || p[0] == '*') {
        return false
    }
    let i = j = 0,
        slen = s.length,
        plen = p.length;
    while (i < slen&& j < plen) {
        if (p[j] == '*') {
            if (isEqual(s[i], p[j - 1])) {
                i++
            }else{
                j++
            }
        }else if(isEqual(s[i], p[j])){
            i++;
            j++;
        }else if( j + 1 < plen -1 && p[j+1] === '*'){
            j += 2;
        }else{
            return false;
        }
    }
    if(i === slen && j >= plen - 1){
        if(p[j] == '*' || j == plen){
            return true;
        }
        return false;
    }else if(i < slen){
        return false;
    }else if(p[j] != '*'){
        return false;
    }else {
        j++
        while(j < plen){
            if(!isEqual(s[i], p[j])){
                return false;
            }
            j++;
        }
        return true;
    }
    
};

isEqual = function(a, b){
    if(a === b){
        return true;
    }
    if(a === '.' || b === '.'){
        return true;
    }
    return false;
}

console.log(isMatch("aaa","aaaa"))