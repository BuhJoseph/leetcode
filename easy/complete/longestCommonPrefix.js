// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 1) return strs[0];
  var prefix = '';
  var index = 0;
  while (true) {
    var nextChar = strs[0][index];
    for (var i = 1; i < strs.length; i++) {
      if (!strs[i][index] || strs[i][index] !== nextChar) {
        return prefix;
      }
    }
    prefix = prefix + nextChar;
    index++;
  }
};

console.log(longestCommonPrefix([""]));

