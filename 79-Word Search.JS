/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function findMap(i, j, index, word, board){
    if (index == word.length) {
        return true;
    }
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] != word[index]) {
        return false;
    }
    let tmp = board[i][j];
    board[i][j] = '#';
    
    let rst = findMap(i + 1, j, index + 1, word, board) || findMap(i, j + 1, index + 1, word, board) || findMap(i, j - 1, index + 1, word, board) || findMap(i - 1, j, index + 1, word, board);
    
    board[i][j] = tmp;
    return rst;
}
var exist = function(board, word) {
    let [n,result] = [0,0];
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] == word[n]){
                if (findMap(i, j, 0, word,board) == true) {
                    return true;
                }
            }
        }
    }
    return false;
};