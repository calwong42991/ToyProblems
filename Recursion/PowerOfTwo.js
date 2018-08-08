// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
// 1,4,9,16,25,36,49
var powerOfTwo = function(n) {
  var result = n / 2
  if(result < 2){
    return false;
  } 
  if(result === 2){
    return true
  }
  return powerOfTwo(result)
};

console.log(powerOfTwo(9))