/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    if(!nums.length || !nums){
        return [];
    }
    function Node(val, index){
        this.val = val;
        this.sum = 0;
        this.index = index;
        this.left = this.right = null;
    }
    function build(node, val, index){
        if(node.val > val){
            if(node.left){
                build(node.left, val, index);
            }else{
                node.left = new Node(val, index);
            }
        }else{
            if(node.right){
                build(node.right, val, index);
            }else{
                node.right = new Node(val, index);
            }
        }
    }
    let root = new Node(nums[nums.length-1], 0);
    let result = [];
    for(let i = nums.length -2; i >= 0; i--){
        build(root, nums[i], i);
    }

    function traverse(node, result, sum){
        if(!node){
            return;
        }
        traverse(node.left, result, 0);
        result[node.index] = node.sum + sum;
        traverse(node.right, result, node.sum);
    }

    traverse(root, result, 0);

    return result;
}

console.log(countSmaller([0,2,1]));