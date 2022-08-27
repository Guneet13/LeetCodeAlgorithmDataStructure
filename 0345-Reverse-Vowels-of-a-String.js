/* Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
*/


var reverseVowels = function(s) {
    
  let temp=0;
  let left = 0;
  let right = s.length-1;
  
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let str = s.split("");
  
  while(left < right){
     if (vowels.indexOf(str[left]) === -1) {
        left++;
        continue;
      }
      if (vowels.indexOf(str[right]) === -1) {
        right--;
        continue;
     }
     temp= str[left];
     str[left] = str[right];
     str[right] = temp;
     
     left++;
     right--;
          
  }
  return str.join("");
      
};
// Time complexity: O(n)
// Space complexity: O(n)