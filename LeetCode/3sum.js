/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  var ret = [];

  // sort array to make sure no duplicates
  nums = nums.sort((a, b) => a - b);
  for (var i = 0; i + 2 < nums.length; i++) {
      // if duplicate continue;
      if (i > 0 && nums[i] == nums[i - 1]) {
          continue;
      }

      var j = i + 1;
      var k = nums.length - 1;  
      var target = -nums[i];
      
      while (j < k) {
          if (nums[j] + nums[k] == target) {
              ret.push([nums[i], nums[j], nums[k]]);
              j++;
              k--;
              while (j < k && nums[j] == nums[j - 1]) j++;
              while (j < k && nums[k] == nums[k + 1]) k--;
          } else if (nums[j] + nums[k] > target) {
              k--;
          } else {
              j++;
          }
      }
  }

  return ret;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))