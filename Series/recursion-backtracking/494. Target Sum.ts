function findTargetSumWays(nums: number[], target: number): number {
  let count: number = 0;

  //const sumOfArr = (arr: number[]) => arr.reduce((acc, val) => acc + val, 0);

  const dfs = (slate: number, i = 0) => {
    if (i === nums.length) {
      if (slate === target) count++;
      return;
    }

    dfs(slate + nums[i], i + 1);
    dfs(slate - nums[i], i + 1);
  };

  dfs(0);

  return count;
}
