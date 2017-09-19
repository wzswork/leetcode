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



var convertBST = function(root) {
    var sum;
    function work(root){
        if(!root){
            return null;
        }
        if(root.right){
            work(root.right);
        }
        root.val += sum ;
        sum = root.val;
        work(root.left);
    }
    work(root);
    return root;
};