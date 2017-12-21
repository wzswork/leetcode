/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    var t3 = new TreeNode(0);
    if(!t1){
        return t2;
    }else if(!t2){
        return t1;
    }
    t3.val = t1.val + t2.val;
    t3.left = mergeTrees(t1.left, t2.left);
    t3.right = mergeTrees(t1.right,t2.right);
    
    return t3;
};