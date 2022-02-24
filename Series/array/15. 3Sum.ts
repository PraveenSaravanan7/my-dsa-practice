export const twoSumHelper = (
  l: number,
  target: number,
  nums: number[]
): number[][] => {
  const res: number[][] = [];

  let r = nums.length - 1;

  while (l < r) {
    if (target === nums[l] + nums[r]) {
      res.push([target * -1, nums[l], nums[r]]);
      while (nums[l] === nums[l + 1]) l++;
      while (nums[r] === nums[r - 1]) r--;
      l++;
      r--;
    } else if (target < nums[l] + nums[r]) {
      r--;
    } else {
      l++;
    }
  }

  return res;
};

function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) continue;
    const target = nums[i] * -1;
    const subRes = twoSumHelper(i + 1, target, nums);
    res.push(...subRes);
  }

  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
