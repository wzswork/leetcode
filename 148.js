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
    let mid = getMid(head);
    let l1 = sortList(head);
    let l2 = sortList(mid);
    return mergeList(l1, l2);
};

function getMid(node){
    if(!node){
        return null;
    }
    let f = s = node;
    while(f&&f.next&&f.next.next){
        f = f.next.next;
        s = s.next;
    }
    f = s.next;
    s.next = null;
    return f;
}

function mergeList(l1, l2){
    let h = t = new ListNode(-1);
    t = h.next;
    while(true){
        if(!l1){
            t = l2;
            break;
        }
        if(!l2){
            t = l1;
            break;
        }
        if(l1.val <= l2.val){
            t = l1;
            l1 = l1.next;
            t = t.next;
        }else{
            t = l2;
            l2 = l2.next;
            t = t.next;
        }
    }
    return h.next;
}