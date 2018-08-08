const flattenArray = function(arr){
  let output = [];
  for(let i of arr){
    if(Array.isArray(i)){
      output.concat(flattenArray(i))
    } else {
      output.push(i);
    }
  }
  return output;
}

const addArray = function(arr){
  let total = 0;
  for(let i of arr){
    if(Array.isArray(i)){
      total += addArray(i);
    } else {
      total += i;
    }
  }
  return total;
}

const arr = [1,[2,3], [4,[5,[5]]], [[[[[[[[6]]]]]]]]];

console.log(flattenArray(arr));
//console.log(addArray(arr));