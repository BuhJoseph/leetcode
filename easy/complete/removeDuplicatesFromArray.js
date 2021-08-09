// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Runtime: Top 70.67%
// Memory: Top 97.59%

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 1) return 0;
  var curr = nums[0];
  var index = 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] !== curr) {
      nums[index++] = nums[i];
      curr = nums[i];
    }
  }
  return index;
};