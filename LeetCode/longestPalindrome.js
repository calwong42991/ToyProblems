/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // longest palindrome
  var max = '';

  // iterate through the string 
  for (var i = 0; i < s.length; i++) {
    // check for 1 match then 2 for even and odd
    for (var j = 0; j < 2; j++) {
      // starting point left
      var left = i;
      // check right
      var right = i + j;

      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      
      if ((right - left - 1) > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};

var palindrome = function(str) {
  var strLen = str.length;
  if (strLen === 0 || strLen === 1) {
      return true;
  }
  
  if (str[0] !== str[strLen - 1]) {
    return false;
  }
  return palindrome( str.slice(1, strLen - 1) );
  
};

console.log(palindrome('racecare'))