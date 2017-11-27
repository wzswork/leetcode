/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map([['{','}'],['[',']'],['(',')']]);
    const [...left] = map.keys();
    const [...right] = map.values();
    let stack = [];
    for(sym of s){
        if(stack.length == 0 && right.includes(sym)){
            return false;
        }
        if(left.includes(sym)){
            stack.push(sym);
        }else{
            let cur = stack.pop();
            if(map.get(cur) != sym){
                return false;
            }
        }
    }
    if(stack.length != 0){
        return false;
    }
    return true;
};