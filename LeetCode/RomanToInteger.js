/**
 * @param {string} s
 * @return {number}
 */

const Romans = {
  "M": 1000,
  "CM": 900,
  "D": 500,
  "CD": 400,
  "C": 100,
  "XC": 90,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I": 1
}

var romanToInt = function(s) {
  let count = 0;
  for(let i = 0; i < s.length; i++){
    if(Romans[s.substring(i, i+2)]){
      count += Romans[s.substring(i, i+2)];
      i++;
    } else {
      count += Romans[s[i]];
    }
  }
  return count;
};



console.log(romanToInt("MCMXCIV")) //1994