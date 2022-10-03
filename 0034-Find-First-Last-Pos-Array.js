/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
*/

var searchRange = function(nums, target) {
    
  let result = [-1,-1];
  let j=0;
  let len = nums.length;
  for(let i=0; i<len; i++){
    if(target === nums[i]){
        if(j != 1){
            result[j]= i;
            result[j+1]= i;
            j++;
        }else{
            result[j]= i;
        }
    }
  }
  return result;
};
//Time complexity: O(n)