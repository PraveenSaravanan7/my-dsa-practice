function findMaxAverage(nums: number[], k: number): number {
  let max: number = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let windowStart = 0;
  let windowEnd = k - 1;

  for (let i = 0; i < k; i++) sum += nums[i];
  max = sum;

  while (windowEnd < nums.length) {
    windowStart++;
    windowEnd++;

    sum = sum - nums[windowStart - 1] + nums[windowEnd];

    if (sum > max) max = sum;
  }

  return max / k;
}
