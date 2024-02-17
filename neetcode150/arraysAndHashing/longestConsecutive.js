/**
 * Time O (N) | Space O(N)
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums); /* Time O(N) | Space O(N) */
  let max = 0;

  for (let num of numSet.values()) {
    if (numSet.has(num - 1)) continue; // making sure only heads are let in

    let start = num;
    let len = 1;

    while (numSet.has(start + 1)) {
      /* Time O(N) */
      start++;
      len++;
    }

    max = Math.max(max, len);
  }

  return max;
};
