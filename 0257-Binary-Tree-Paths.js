/*
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.
Example 1:
Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

Example 2:
Input: root = [1]
Output: ["1"]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
 const binaryTreePaths = (root) => {
  const isLeaf = node => node && (!node.left) && (!node.right)
  const join = (current, val) => (current ? `${current}->${val}` : `${val}`)
  const aux = (node, currentPath = '', acc) => {
    if (!node) {
      return acc
    }
    if (isLeaf(node)) {
      currentPath = join(currentPath, node.val)
      acc.push(currentPath)
    }
    aux(node.left, join(currentPath, node.val), acc)
    aux(node.right, join(currentPath, node.val), acc)
    return acc
  }
  return aux(root, '', [])
}