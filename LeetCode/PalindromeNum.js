/*
  Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
*/

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) { return false; }

  let rev = 0;
  while (x > rev) {
    rev = rev * 10 + Math.floor(x % 10);
    x = Math.floor(x/10);
  }

  return (rev === x || Math.floor(rev/10) === x);

};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(10)); // false
console.log(isPalindrome(-121)); // false