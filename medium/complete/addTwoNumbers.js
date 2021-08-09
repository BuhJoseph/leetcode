// https://leetcode.com/problems/add-two-numbers/

// Runtime: Top 99.49%
// Memory: Top 63.53%

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
var addTwoNumbers = function(l1, l2) {
  if (!l1)
    return l2;
  if (!l2)
    return l1;

  var carry = 0;
  var sum = l1.val + l2.val;
  if (sum >= 10) {
    sum -= 10;
    carry = 1;
  } else {
    carry = 0;
  }
  var result = new ListNode(sum);
  var curr = result;
  l1 = l1.next;
  l2 = l2.next;

  while (l1 && l2) {
    var sum = l1.val + l2.val + carry;
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    curr.next = new ListNode(sum);
    curr = curr.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1) {
    var next = l1.val;
    if (carry) {
      next++;
      if (next >= 10) {
        next -= 10;
      } else {
        carry = 0;
      }
    }
    curr.next = new ListNode(next);
    curr = curr.next;
    l1 = l1.next;
  }
  while (l2) {
    var next = l2.val;
    if (carry) {
      next++;
      if (next >= 10) {
        next -= 10;
      } else {
        carry = 0;
      }
    }
    curr.next = new ListNode(next);
    curr = curr.next;
    l2 = l2.next;
  }

  if (carry) {
    curr.next = new ListNode(1);
  }

  return result;
};
