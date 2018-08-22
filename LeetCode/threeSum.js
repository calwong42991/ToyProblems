/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  let result = [];
  nums.sort((a,b) => a - b);

  for(let i = 0; i < nums.length; i++){
    if( i > 0 && nums[i] === nums[i - 1]) continue;

    let target = 0 - nums[i];
    let hi = nums.length - 1;
    let lo = i + 1;

    while(lo < hi){
      if(nums[lo] + nums[hi] > target ){
        hi--;
      } else if(nums[lo] + nums[hi] < target ){
        lo++;
      } else {
        result.push([nums[i], nums[lo], nums[hi]]);
        lo++;
        hi--;
      }
      while (lo > i + 1 && nums[lo] === nums[lo - 1]) lo++;
      while (nums[hi] === nums[hi + 1]) hi--;
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[ -1, -1, 2],[ -1, 0, 1 ]]