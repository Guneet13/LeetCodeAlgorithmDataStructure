/*
Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

Note that the letters wrap around.

For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
 
Example 1:
Input: letters = ["c","f","j"], target = "a"
Output: "c"

Example 2:
Input: letters = ["c","f","j"], target = "c"
Output: "f"

Example 3:
Input: letters = ["c","f","j"], target = "d"
Output: "f"
*/

const nextGreatestLetter = (letters,target) =>{
  const aux = (low, high, current) =>{
    if(low<high){
      return current;
    }
  
    const middle = Math.floor((low+high)/2);
    if(letters[middle] > target){
      return aux(low, middle-1, letters[middle]);
    }
    return aux(middle+1, high, current);
  }

  return aux(0, letters.length-1, letters[0]);
};

//Time complexity: O(n)
//Space complexity: O(1)