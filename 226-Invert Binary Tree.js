/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root){
        return null;
    }
    let lt = root.left, rt = root.right;
    root.left = invertTree(rt);
    root.right = invertTree(lt);
    return root;
};