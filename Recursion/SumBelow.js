// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n === 0){
    return 0
  } else {
    return n-1 + sumBelow(n - 1)
  }
};

console.log(sumBelow(10))