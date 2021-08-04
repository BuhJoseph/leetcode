// https://leetcode.com/problems/merge-two-sorted-lists/

// Runtime: Top 94.06%
// Memory: Top 50.95%

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  var merged;
  if (l1.val < l2.val) {
    merged = l1;
    l1 = l1.next;
  } else {
    merged = l2;
    l2 = l2.next;
  }

  var pointer = merged;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      pointer.next = l1;
      pointer = pointer.next;
      l1 = l1.next;
    } else {
      pointer.next = l2;
      pointer = pointer.next;
      l2 = l2.next;
    }
  }
  if (l1) pointer.next = l1;
  if (l2) pointer.next = l2;
  return merged;
};