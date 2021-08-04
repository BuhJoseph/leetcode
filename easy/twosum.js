// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  var seen = {};
  for (var i = 0; i < nums.length; i++) {
      var diff = target - nums[i];
      if (seen[diff] !== undefined) {
          return [seen[diff], i];
      }
      seen[nums[i]] = i;
  }
};