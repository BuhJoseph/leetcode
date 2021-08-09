// https://leetcode.com/problems/add-two-numbers/

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
  var num1 = 0;
  var num2 = 0;

  var i = 0;
  while (l1) {
    num1 += l1.val * (10 ** i++);
    l1 = l1.next;
  }
  i = 0;
  while (l2) {
    num2 += l2.val * (10 ** i++);
    l2 = l2.next;
  }
  var sum = num1 + num2;
  console.log(num1, num2);
  var digits = [];
  while (sum > 0) {
      var digit = sum % 10;
      digits.push(digit);
      sum = Math.floor(sum / 10);
  }
  var result = new ListNode(digits[0]);
  var curr = result;
  for (var i = 1; i < digits.length; i++) {
    var next = new ListNode(digits[i]);
    curr.next = next;
    curr = next;
  }
  return result;
};
