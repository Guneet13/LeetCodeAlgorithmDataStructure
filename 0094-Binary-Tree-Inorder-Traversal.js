/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
*/
//left root right
var inorderTraversal = function(root) {
  let output = [];
  helper(root, output);
  return output;
};

var helper = function (root, output) {
  if (!root) return;
  if(root.left) helper(root.left, output);  
  output.push(root.val);
  if(root.right) helper(root.right, output);
};
//Time complexity: O(n)
//Space complexity: O(n)