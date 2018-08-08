/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = nums1.concat(nums2)
  // arr.sort((a,b) => { return a - b})
  arr = quickSortBasic(arr);
  console.log(arr)
  if(arr.length % 2 === 0){
    // even
    let mid = Math.floor(arr.length/2);
    return (arr[mid] + arr[mid - 1] )/2
  }
  if(arr.length % 2 !== 0){
    // odd
    let mid = Math.floor(arr.length/2);
    return arr[mid];
  }
};

let quickSortBasic = function(array){
  if(array.length < 2){
    return array;
  }
  let pivot = array[0];
  let lesser = [];
  let greater = [];

  for(var i = 1; i < array.length; i++){
    if(array[i] < pivot){
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quickSortBasic(lesser).concat(pivot, quickSortBasic(greater));
}


//console.log(findMedianSortedArrays([1,3], [2,4]));
console.log(findMedianSortedArrays([4,5,6,8,9], []))