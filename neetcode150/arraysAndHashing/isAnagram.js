/**
 * https://leetcode.com/problems/valid-anagram/submissions/949425862/
 * 
 * Time O(N) | Space O(1)
 * 
 * Idea: convert sting into hash. Where the hash contains the frequency count of a to z
 * 
 * "A".charCodeAt(0) is 65
 * "a".charCodeAt(0) is 97
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const freq = new Array(26).fill(0); // Space O(1)

  for (let i = 0; i < s.length; i++) { // Time O(N)
    freq[s.charCodeAt(i) - 97]++;

    freq[t.charCodeAt(i) - 97]--;
  }

  return freq.every((c) => c === 0);
};
