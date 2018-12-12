/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let res;

var maxPathSum = function (root) {
  res = [];
  res.push(childVal(root));
  let sum = Math.max(...res);
  if (sum == 0) {
    return travel(root, root.val);
  }
  return sum;
};



function childVal(node) {
  if (!node.left && !node.right && node.val > 0) {
    return node.val;
  }
  let ret = node.val;
  let left = right = 0;
  if (node.left) {
    left = childVal(node.left)
  }
  if (node.right) {
    right = childVal(node.right)
  }
  if (ret + right <= 0 && ret + left <= 0) {
    return 0;
  }
  if (ret < 0) {
    res.push(Math.max(left, right))
  }
  return Math.max(ret + right, ret + left);
}

function travel(node, val) {
  if (!node) {
    return val;
  }
  val = Math.max(node.val, val);
  val = travel(node.left, val);
  val = travel(node.right, val);
  return val;
}