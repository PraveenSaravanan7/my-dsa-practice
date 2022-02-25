function missingNumber(nums: number[]): number {
  const expectedSum = (nums.length * (nums.length + 1)) / 2;
  const currentSum = nums.reduce((acc, val) => acc + val, 0);
  return expectedSum - currentSum;
}
