/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

Example 1:
Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

Example 2:
Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
*/

var sortSentence = function(s) {
    
  let arr = [];
  let r = "";
  let s1 = s.split(" ");
  for(let i = 0; i  < s1.length; i++) {
     let j = s1[i].length-1;
     arr[s1[i][j]] = s1[i].substring(0,j);
  }
  for(let i = 1; i < arr.length; i++) {
      if(i === arr.length-1){
          r += arr[i];
      }else{
          r += arr[i] + " ";
      }   
  }
  return r;
};