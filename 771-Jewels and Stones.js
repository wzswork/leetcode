/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let Jmap = {};
    for(let i = 0, Jlen = J.length; i < Jlen; i++){
        Jmap[J[i]] = true;
    }
    let ret = 0;
    for(let j = 0, Slen = S.length; j < Slen; j++){
        if(Jmap[S[j]]){
            ret ++;
        }
    }
    return ret;
};