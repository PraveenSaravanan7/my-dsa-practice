function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  const sumFromArr = (arr: number[]) => arr.reduce((acc, val) => acc + val, 0);

  const dfs = (slate: number[], j = 0) => {
    if (target === sumFromArr(slate)) res.push(slate);

    for (let i = j; i < candidates.length; i++) {
      const newSlate = [...slate, candidates[i]];

      if (target >= sumFromArr(newSlate)) dfs(newSlate, i);
    }
  };

  dfs([]);

  return res;
}
