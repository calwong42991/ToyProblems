/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (s.length < 2 || numRows === 1) return s;
// ES6 to prefill "" for each row.
  let rows = new Array(numRows).fill("");

// step = 1 to step down to numRows - 1; step = -1 to step up to 0.
  let step = 1;
  let idx = 0;
  for(let i = 0; i < s.length; i++) {
      rows[idx] += s[i];
      if (idx === numRows - 1) step = -1;
      if (idx === 0) step = 1;
      idx += step;
  }
  return rows.join("");
};


console.log(convert('PAYPALISHIRING', 4))
let arr = new Array(4).fill("");
console.log(arr)