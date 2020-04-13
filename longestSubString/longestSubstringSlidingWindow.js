/**
 * Given a string find the length of the longest substring
 * without repeating characters.
 *
 * @param {string} s;
 * @return {number}
 */

 const lengthOfLongestSubstring = function(s) {
   let set = new Set();
   let i = j = 0;
   let ans = 0;
   while(i < s.length && j < s.length){
     if(!set.has(s[j])){
       set.add(s[j++]);
       ans = Math.max(ans, j - i);
     } else {
       set.delete(s[i++]);
     }
   }
 }
