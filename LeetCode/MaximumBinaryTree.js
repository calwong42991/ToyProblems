/*
  Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
*/


var constructMaximumBinaryTree = function(nums) {
  // find max and max index
  let max = Math.max(...nums);
  let maxIndex = nums.indexOf(max);

  // create new tree Node and split arrays from the highest number Index
   let tree = new TreeNode(max)
   let treeLeft = nums.slice(0, maxIndex);
   let treeRight = nums.slice(maxIndex + 1);

   // check if tree left arr is not empty 
   if(treeLeft.length > 0){
     tree.left = constructMaximumBinaryTree(treeLeft);
   }

   if ( treeRight.length > 0){
     tree.right = constructMaximumBinaryTree(treeRight);
   }

   return tree;
};