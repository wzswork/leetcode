/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head){
        return true;
    }
    let arr = [];
    let a = b = head;
    while(b.next&&b.next.next){
        arr.push(a.val);
        a = a.next;
        b = b.next.next;
    }
    if(b.next){
        arr.push(a.val)
        a = a.next
    }else{
        a = a.next
    }
    for(let i=arr.length-1; i>=0; i--){
        if(a.val != arr[i]){
            return false;
        }
        a = a.next
    }
    return true;

};