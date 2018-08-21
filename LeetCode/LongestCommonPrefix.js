/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(arr) {
  let result = "";
  if(arr.length === 0){
    return result;
  }
  
  const copyArr = arr;
  const firstString = copyArr.shift();

  let index = 0;
  let indexVal = "";

  while(true){
    indexVal = firstString.charAt(index);
    if(indexVal === "" || !copyArr.every(str => indexVal === str.charAt(index))){
      break;
    } else {
      result += indexVal;
      index++;
    }
  }
  return result;

};

console.log(longestCommonPrefix(["flower","flow","flight"])) // fl
console.log(longestCommonPrefix(["dog","racecar","car"])) // ""