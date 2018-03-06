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
var isSymmetric = function(root) {
    if(!root){
        return true;
    }
    let left = [], right = [];
    function traverseLeftFirst(node, arr){
        if(!node){
            arr.push(null);
            return;
        }
        if(node.left == null && node.right == null){
            arr.push(node.val);
            return;
        }
        traverseLeftFirst(node.left, arr);
        arr.push(node.val);
        traverseLeftFirst(node.right, arr);
    }
    function traverseRightFirst(node, arr){
        if(!node){
            arr.push(null);
            return;
        }
        if(node.left == null && node.right == null){
            arr.push(node.val);
            return;
        }
        traverseRightFirst(node.right, arr);
        arr.push(node.val);
        traverseRightFirst(node.left, arr);
    }
    traverseLeftFirst(root, left);
    traverseRightFirst(root, right);
    console.log(left);
    console.log(right);
    for(let i=0; i<left.length; i++){
        if(left[i] != right[i]){
            return false;
        }
    }
    return true;
};