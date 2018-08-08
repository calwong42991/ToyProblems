// 10. Write a function that determines if a string is a palindrome.
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

console.log(palindrome('calvin'))