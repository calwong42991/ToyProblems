/**
 * @param {string} digits
 * @return {string[]}
 */

const phoneDictionary = {
  2: ['a','b','c'],
  3: ['d','e','f'],
  4: ['g','h','i'],
  5: ['j','k','l'],
  6: ['m', 'n', 'o'],
  7: ['p','q','r','s'],
  8: ['t','u','v'],
  9: ['w','x','y','z']
}


var letterCombinations = function(digits) {
  if(digits.length = 0 || digits === ""){
    return [];
  }
  
  let combos = [];

  let comboGenerator = function(str, position){
    if(str.length === digits.length){
      combos.push(str);
      return;
    }

    phoneDictionary[digits[position]].forEach((value) => {
      comboGenerator(str+value, position+1 );
    })
  }

  comboGenerator('', 0);
  return combos;
};

console.log(letterCombinations('23')); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
