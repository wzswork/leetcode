/**
 * @param {number[][]} M
 * @return {number}
 */
// 广度优先搜索
var findCircleNum = function(M) {
    let len = M.length,sum=0,res=[];
    function mapNum(M,i){
        M[i][i] = 0;
        for(let t = 0; t<len; t++){
            if(M[i][t] == 1){
                M[i][t] = M[t][i] = 0;
                res.push(t);
            }
        }
        console.log('res'+res);
        if(res.length>0){
            mapNum(M,res.shift());
        }
    }
    for(let n = 0; n < len; n++){
        console.log(n+":"+M[n][n])
        if(M[n][n] == 1){
            mapNum(M,n);
            sum++
        }
    }
    return sum;
};

let M = [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]];
console.log(findCircleNum(M));