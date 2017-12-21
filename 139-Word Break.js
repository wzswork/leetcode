/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if(s.length == 0){
        return true;
    }
    for(let i=0; i<wordDict.length; i++){
        if(s.substr(0, wordDict[i].length) == wordDict[i]){
            if(wordBreak(s.substr(wordDict[i].length), wordDict)){
                return true;
            }
        }
    }
    return false;
};

console.log(wordBreak("leetcode",["leet","code"]))