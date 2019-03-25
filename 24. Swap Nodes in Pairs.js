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
var swapPairs = function(head) {
    if(!head){
        return head;
    }
    let p1, p2;
    p1 = head.next;
    if(p1){
        head.next = p1.next;
        p1.next = head;
        head = p1;
        p1 = p1.next;
    }
    while(p1&&p1.next&&p1.next.next){
        p2 = p1.next;
        p1.next = p2.next;
        p1 = p1.next;
        p2.next = p1.next;
        p1.next = p2;
        p1 = p1.next;
    }
    return head
};