/**
 You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

An integer x - Record a new score of x.
"+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
"D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
"C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
Return the sum of all the scores on the record. The test cases are generated so that the answer fits in a 32-bit integer

Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.

Input: ops = ["1","C"]
Output: 0
Explanation:
"1" - Add 1 to the record, record is now [1].
"C" - Invalidate and remove the previous score, record is now [].
Since the record is empty, the total sum is 0.
 */

/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    
  let result = 0;
  let x = 0;
  let record = [];
  let total_sum = 0;
  
  for(let i=0; i<ops.length;i++){
      x = ops[i];
      switch(x){
          case "C": record.pop();
              break;
          case "D":
              let len = record.length;
              let y = record[len-1]*2;
              record.push(y);
              break;
          case "+": 
              let l = record.length;
              let z = record[l-1] + record[l-2];
              record.push(z);
              break;
          default: 
              record.push(parseInt(x));
              break;
      }
  }
  total_sum = record.reduce((a, b) => a + b, 0);
  
  return total_sum;
 
};
console.log(calPoints(["5","-2","4","C","D","9","+","+"]));

// Time complexity: O(n)
// Space complexity: 0(n)