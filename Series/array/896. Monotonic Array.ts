function isMonotonic(nums: number[]): boolean {
  const same = nums[0] === nums[nums.length - 1];
  const increasing = nums[0] < nums[nums.length - 1];
  const decreasing = nums[0] > nums[nums.length - 1];

  for (let i = 0; i < nums.length - 1; i++) {
    if (same && nums[i] !== nums[i + 1]) return false;
    if (increasing && nums[i] > nums[i + 1]) return false;
    if (decreasing && nums[i] < nums[i + 1]) return false;
  }

  return true;
}
