// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 0) return true;
  if (s.length === 1) return false;

  var open = ['(', '{', '['];
  var close = [')', '}', ']'];

  var stack = [];
  stack.push(s[0]);
  for (var i = 1; i < s.length; i++) {
    if (open.includes(s[i])) {
      stack.push(s[i]);
    } else {
      var next = stack.pop();
      var index = open.indexOf(next);
      if (close.indexOf(s[i]) !== index) {
        return false;
      }
    }
  }

  if (stack.length === 0) return true;
  return false;
};