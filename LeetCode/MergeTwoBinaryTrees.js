const mergeTrees = function(t1, t2){
  // if there is no t1 value return t2
  // if there is no t2 value return t1
  if(!t1){return t2}
  if(!t2){return t1}

  // add t1 value to t2 value
  t1.val += t2.val
  //t1.left  = recursive function with t1 left and t2 left
  t1.left = mergeTrees(t1.left, t2.left)
  // t1.right = recursive function with t1 right and t2 right
  t1.right = mergeTrees(t1.right, t2.right);

  // return the new t1 with all the additions
  return t1

}