/**
 * Without Sort
 * Time O(N) | Space O(k)
 * N is arr size. K is unique elements
 * 
 * https://leetcode.com/problems/top-k-frequent-elements/
 * 
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = new Map(); // cand: count // Space O(k) where k is unique elements
    const arr = Array.from({length: nums.length + 1}, () => []); // count: cand // Space O(N) 
    // + 1 is used because frequency starts with 1 but arr index is starts with 0
    const res = [];

    nums.forEach(cand => freq.set(cand, (freq.get(cand) || 0) + 1));

    for (let [cand, count] of freq) 
        arr[count].push(cand);

    for (let i = arr.length - 1; i > -1; i--) {
        if (res.length === k) break;

        const cand = arr[i];
        
        for (let j = 0; j < cand.length; j++) {
            if (res.length === k) break;

            res.push(cand[j]);
        }
    }

    return res;
};