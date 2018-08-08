/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:
  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
  @param {number[]} nums
  @param {number} target
  @return {number[]}
*/

var twoSum = function(nums, target) {
    var result = [];
    for(var i = 0; i < nums.length; i++){
        for(var j = 0; j < nums.length; j++){
            if((nums[i] + nums[j]) === target){
              return [i, j];
            }
        }
    }
};

var twoSum2 = function(nums, target) {
    let arr = [],
        obj = {}
    nums.forEach((me, i) => {
        let converse = target - me
        if (obj[converse] !== undefined) { return arr.push(obj[converse], i)} 
        obj[me] = i

    })
    
    return arr
};

//console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum2([2, 7, 11, 15], 9))