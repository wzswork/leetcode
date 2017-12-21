/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let res = [];
    traverse(root, res);
    let temp = res[0];
    for(let i = 0; i < res.length; i++){
        if(res[i] <= temp && i != 0){
            return false;
        }else{
            temp = res[i];
        }
    }
    return true;
};

function traverse(node, res){
    if(!node){
        return;
    }
    traverse(node.left, res);
    res.push(node.val);
    traverse(node.right, res);
}