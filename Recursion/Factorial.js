// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
var factorial = function(n) {
  if(n === 1){
    return 1;
  }
  else {
    return n * (factorial(n -1))
  }
};

console.log(factorial(3));