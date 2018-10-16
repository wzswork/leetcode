/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return [];
    }
    var res = [], index = 0;
    function travel(node, res, index){
        if(!node){
            return;
        }
        if(!res[index]){
            res[index] = [];
        }
        res[index].push(node.val)
        travel(node.left, res, index+1);
        travel(node.right, res, index+1);
    }
    travel(root, res, index);

    return res;
};