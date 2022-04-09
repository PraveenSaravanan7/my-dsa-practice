function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [];

  const hash: Record<string, number> = {};

  nums.sort((a, b) => a - b);

  const dfs = (l: number, slate: number[]) => {
    if (l === nums.length) {
      const key = slate.join();
      if (!hash[key]) {
        res.push(slate);
        hash[key] = 1;
      }
      return;
    }

    dfs(l + 1, slate);
    dfs(l + 1, [...slate, nums[l]]);
  };

  dfs(0, []);

  return res;
}
