// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var arr = [];
  if(x === y ){
    return arr
  } else {
    arr.push(x)
    return arr.concat(range(x + 1, y))
  }
  return arr
}; 

console.log(range(2,9));