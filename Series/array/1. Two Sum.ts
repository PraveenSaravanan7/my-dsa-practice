function twoSum(nums: number[], target: number): number[] {
  const hash: Record<string, number> = {};

  for (let i = 0; i < nums.length; i++) hash[nums[i]] = i;

  for (let i = 0; i < nums.length; i++) {
    const cand = target - nums[i];
    if (hash[cand] && hash[cand] !== i) return [i, hash[cand]];
  }

  return [];
}
