function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);

  const res: number[][] = [];

  const sumFromArr = (val: number[]) =>
    val.reduce((prev, cur) => prev + cur, 0);

  const dfs = (slate: number[], i = 0) => {
    if (sumFromArr(slate) === target) {
      res.push(slate);
      return;
    }

    const hash: Record<number, boolean> = {};

    for (let j = i; j < candidates.length; j++) {
      const candidate = candidates[j];

      if (hash[candidate]) continue;

      hash[candidate] = true;
      const newSlate = [...slate, candidates[j]];
      if (target >= sumFromArr(newSlate)) dfs(newSlate, j + 1);
    }
  };

  dfs([]);

  return res;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
