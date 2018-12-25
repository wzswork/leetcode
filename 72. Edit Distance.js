/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let d = [[]], len1 = word1.length, len2 = word2.length;
    for(let i = 0; i < len1; i++){
        if(!d[i]){
            d[i]=[];
        }
        d[i][0] = i;
    }

    for(let j = 0; j < len2; j++){
        if(!d[0]){
            d[0]=[];
        }
        d[0][j] = j;
    }

    for(let i = 1; i < len1; i++){
        for(let j = 1; j < len2; j++){
            let cost = word1[i-1] == word2[j-1]?0:1
            d[i][j] = Math.min(d[i-1][j]+1, d[i][j-1]+1, d[i-1][j-1] + cost);
        }
    }
    console.log(d)

    return d[len1-1][len2-1]

};

console.log(minDistance('ros','horse'));