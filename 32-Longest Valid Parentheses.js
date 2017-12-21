/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if(s.length < 2){
        return 0;
    }
    let [start, maxlen, stack] = [-1, 0, []];
    for(let i = 0; i < s.length; i++){
        if(s[i] == '('){
            stack.push(i);
        }
        if(s[i] == ')'){
            if(stack.length > 0){
                stack.pop();
                if(stack.length > 0){
                    maxlen = Math.max(maxlen, i - stack[-1]);
                }else{
                    maxlen = Math.max(maxlen, i-start);
                }
                
            }else{
                start = i;
            }
        }
    }
    return maxlen;
};

console.log(longestValidParentheses("(()()(()()("))