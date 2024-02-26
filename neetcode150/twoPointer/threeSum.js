/**
 *  Time O(N**2) | Space O(1)
 * 
 * result array is not considered in Space complexity
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = []; // 

  nums.sort((a, b) => a - b); // Time O(N log(N))

  for (let i = 0; i < nums.length - 2; i++) { // Time O(N**2)
    const a = nums[i];

    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = a + nums[l] + nums[r];

      if (sum === 0) {
        res.push([a, nums[l], nums[r]]);

        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;

        l++;
        r--;
      } else if (sum > 0) {
        r--;
      } else {
        l++;
      }
    }
  }

  return res;
};
