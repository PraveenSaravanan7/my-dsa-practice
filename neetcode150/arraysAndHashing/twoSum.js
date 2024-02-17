/**
 * 
 * https://leetcode.com/problems/two-sum/
 * 
 * Time O(N) | Space(N)
 * 
 * Idea: target = a + b; b = target - a; is the analogy. 
 * Iterate through each element as `a`. check if  `b` is already visited.
 * If visited then return a and b index
 * else save a and a's index in visited map
 *   
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const visited = new Map(); // Space(N)

    for (let i = 0; i < nums.length; i++) { // Time O(N)
        // target = a + b is the analogy
        const a = nums[i];
        const b = target - a;
        
        if (visited.has(b)) 
            return [i, visited.get(b)];
     
        visited.set(a, i);
    }

    return [-1, -1];
};