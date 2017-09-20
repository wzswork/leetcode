/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    function work(l,r,str,res){
        if(l==0&&r==0){
            res.push(str);
            return;
        }
        if(l>0){
            let s = str + '(';
            let t = l -1;
            work(t,r,s,res);
        }
        if(r>l){
            let s = str+')';
            let t = r -1;
            work(l,t,s,res);
        }
    }
    let res=[];
    work(n,n,'',res);
    return res;
};

console.log(generateParenthesis(3));