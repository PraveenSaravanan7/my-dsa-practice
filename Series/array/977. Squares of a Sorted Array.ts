function sortedSquares(nums: number[]): number[] {
  const res = Array(nums.length).fill(0);
  let l = 0,
    r = nums.length - 1,
    resIndex = nums.length - 1;

  while (l < r) {
    if (Math.abs(nums[r]) > Math.abs(nums[l])) {
      res[resIndex] = nums[r] ** 2;
      r--;
    } else {
      res[resIndex] = nums[l] ** 2;
      l++;
    }

    resIndex--;
  }

  return res;
}
