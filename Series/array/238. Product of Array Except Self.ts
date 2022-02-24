function productExceptSelf(nums: number[]): number[] {
  const prefixes: number[] = [1];
  const postfixes: number[] = [];

  postfixes[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    prefixes[i] = nums[i - 1] * prefixes[i - 1];
  }

  for (let i = nums.length - 2; i > -1; i--) {
    postfixes[i] = nums[i + 1] * postfixes[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = postfixes[i] * prefixes[i];
  }

  return nums;
}
