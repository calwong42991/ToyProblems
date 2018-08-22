/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let i, left, right, current, sum;
  let result = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b);
  // two pointers
  for(i = 0; i < nums.length; i++){
      current = nums[i];
      left = i+1;
      right = nums.length-1;
      while(left < right){
          sum = current + nums[left] + nums[right];
          if(Math.abs(target - sum) < Math.abs(target - result)){
              result = sum;
          }
          if(sum < target){
              left++;
          }else if(sum > target){
              right--;
          }else{
              return sum;
          }
      }
  }
  return result;
};