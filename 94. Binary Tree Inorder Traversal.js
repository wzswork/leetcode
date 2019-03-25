/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    var res = [];
    function travel(root){
        if(!root){
            return;
        }
        travel(root.left);
        res.push(root.val);
        travel(root.right);
    }
    travel(root);
    return res;
    
};