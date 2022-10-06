/*
An array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

You must solve it in O(log(arr.length)) time complexity.

Example 1:
Input: arr = [0,1,0]
Output: 1

Example 2:
Input: arr = [0,2,1,0]
Output: 1

Example 3:
Input: arr = [0,10,5,2]
Output: 1
*/

function findPeakUtil(arr, low, high, n){
  // Find index of middle element
  // (low + high)/2
  var mid = Math.floor((low+high)/2);

  // Compare middle element with its
  // neighbors (if neighbors exist)
  if ((mid == 0 || arr[mid - 1] <= arr[mid]) &&
      (mid == n - 1 || arr[mid + 1] <= arr[mid]))
      return mid;

  // If middle element is not peak and its
  // left neighbor is greater than it,
  // then left half must have a peak element
  else if (mid > 0 && arr[mid - 1] > arr[mid])
      return findPeakUtil(arr, low, (mid - 1), n);

  // If middle element is not peak and its
  // right neighbor is greater than it,
  // then right half must have a peak element
  else
      return findPeakUtil(arr, (mid + 1), high, n);
};
// A wrapper over recursive function findPeakUtil()
function peakIndexInMountainArray(arr){
  var n = arr.length;
  return findPeakUtil(arr, 0, n - 1, n);
};
//Time Complexity: O(n)
//Space complexity: O(1)