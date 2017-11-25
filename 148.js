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
var sortList = function(head) {
    if(!head.next){
        return head;
    }
    if(!head.next.next){
        if(head.next.val < head.val){
            [head.val, head.next.val] = [head.next.val, head.val];
        }
        return head;
    }
    let [i,j,k] = [head, head.next, head.next.next];
    while(k){
        if(k.val > i.val){
            k = k.next;
            continue;
        }
        if(j.val > i.val){
            [k.val, j.val] = [k.val, i.val];
            if(!k.next){
                continue;
            }
        }
        j = j.next;
    }
    [i.val, j.val] = [j.val, i.val];
    sortList(head);
};