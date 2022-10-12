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

//Solution:1
var searchRange1 = function(nums, target) {
    
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

//Solution:2
var searchRange2 = function (nums, target) {
  let targetFirstOccurrence = nums.indexOf(target);

  if (targetFirstOccurrence === -1) return [-1, -1];

  for (let i = targetFirstOccurrence; i < nums.length; i++) {
      if (nums[i] > target) {
          return [targetFirstOccurrence, i - 1];
      }
  }

  return [targetFirstOccurrence, nums.length - 1];
};
//Time complexity: O(n(log n))

//Solution:3

var searchRange3 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let output = [-1, -1];

  // Binary search for the target (left-biased)
  while (left < right) {
      let middle = Math.floor((left + right) / 2);

      if (nums[middle] < target) {
          left = middle + 1;
      } else {
          right = middle;
      }
  }

  // If the target was not found on the first pass
  if (nums[left] != target) {
      return output;
  }

  // Store the left-hand side
  output[0] = left;

  // Reset the right-hand side of the binary search (left-hand side remains as is)
  right = nums.length - 1;

  // Binary search for the target (right-biased)
  while (left < right) {
      let middle = Math.floor((left + right) / 2) + 1;
      if (nums[middle] <= target) {
          left = middle;
      } else {
          right = middle - 1;
      }
  }

  // Store the right-hand side
  output[1] = right;

  return output;
};

//Time complexity: O(log n)