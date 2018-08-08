// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var count = array.length
  var sum = 0;

  for(var i = 0; i < count; i++){
    if(Array.isArray(array[i])){
      sum += arraySum(array[i]);
    } else {
      sum += array[i];
    }
  }
  return sum;

};

console.log(arraySum([1,[2,3],[[4]],5])); 