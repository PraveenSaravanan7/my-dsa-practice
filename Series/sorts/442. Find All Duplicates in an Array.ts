function findDuplicates(nums: number[]): number[] {
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const id = Math.abs(nums[i]) - 1;
    if (nums[id] < 1) res.push(Math.abs(nums[i]));
    nums[id] *= -1;
  }

  return res;
}
