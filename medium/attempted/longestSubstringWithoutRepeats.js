// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Runtime: Top 46%
// Memory: Top 56%

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var longest = 0;
  var start = 0;
  var chars = {};
  for (var i = 0; i < s.length; i++) {
    if (chars[s[i]] === undefined || chars[s[i]] < start) {
      chars[s[i]] = i;
    } else {
      if (i - start > longest) {
        longest = i - start;
      }
      start = chars[s[i]] + 1;
      chars[s[i]] = i;
    }
  }

  if (i - start > longest) {
    longest = i - start;
  }

  return longest;
};