// https://leetcode.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0)
    return 0;
  if (needle.length > haystack.length)
    return -1;

  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      var index = i;
      var found = true;
      for (var j = 1, k = index + 1; j < needle.length && k < haystack.length; j++, k++) {
        if (haystack[k] !== needle[j]) {
          found = false;
          break;
        }
      }

      if (found && j === needle.length)
        return index;
    }
  }
  return -1;
};