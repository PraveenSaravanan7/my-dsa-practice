/**
 * Array
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const res = [];
    let pref = 1;
    let post = 1;

    for (let i = 0; i < nums.length; i++) { 
        res[i] = pref; // res will be initiated with pref multiple
        pref *= nums[i];
    }

    for (let i = nums.length - 2; i > -1; i--) { // updating res
        post *= nums[i+1];
        res[i] *= post; // // res will be updated with post multiple
    }

    return res;
};