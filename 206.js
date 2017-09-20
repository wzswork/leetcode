/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    function reverse(root, prev){
        if(!root){
            return prev;
        }
        let t = root.next;
        root.next = prev;
        return reverse(t,root);
        
    }
    return reverse(head,null);
};