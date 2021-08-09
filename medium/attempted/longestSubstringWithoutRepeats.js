// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Runtime: Top 14%
// Memory: Top 8%

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var longest = '';
  var curr = '';
  var chars = {};
  for (var i = 0; i < s.length; i++) {
    if (chars[s[i]] === undefined) {
      chars[s[i]] = i;
      curr = curr + s[i];
    } else {
      if (curr.length > longest.length) {
        longest = curr;
      }
      i = chars[s[i]];
      curr = '';
      chars = {};
    }
  }
  if (curr.length > longest.length) {
    longest = curr;
  }

  return longest.length;
};