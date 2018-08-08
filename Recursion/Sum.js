// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
let sum = function(n){
  if(n.length === 0){
    return 0
  } else {
    return n[0] + sum(n.slice(1))
  }
}

console.log(sum([1,2,3,4,5,6]));