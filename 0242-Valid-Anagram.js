/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  
  const lookup = {};
  let newString = '';
    if(s.length != t.length){
        return false;
    }

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  //console.log(lookup)

  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    // can't find letter or letter is zero then it's not an anagram
    if (lookup[letter]) {  
        newString += letter;
        lookup[letter] -= 1;
        //console.log(newString);
    }else{
        return false;
    }
  }
  return true;
};
//T(n) = O(n);
//S(n) = O(n);