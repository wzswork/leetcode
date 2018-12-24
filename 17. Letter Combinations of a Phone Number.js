/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    var chars = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }

    var res = [];

    function inputLetter(res, digit){
        var newRes = [];
        res.forEach(element => {
            chars[digit].forEach(char => {
                newRes.push(element + char)
            })
        });
        if(res.length == 0){
            newRes = chars[digit]
        }
        return newRes;
    }

    for(let i = 0, slen = digits.length; i < slen; i++){
        res = inputLetter(res, digits[i])
    }
};