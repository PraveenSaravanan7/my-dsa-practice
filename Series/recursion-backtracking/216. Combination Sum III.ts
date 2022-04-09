function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = [];

  const sumFromArr = (val: number[]) =>
    val.reduce((prev, cur) => prev + cur, 0);

  const dfs = (slate: number[], i = 1) => {
    if (slate.length === k) {
      if (sumFromArr(slate) === n) res.push(slate);
      return;
    }

    for (let j = i; j < 10; j++) {
      const cand = [...slate, j];
      if (n >= sumFromArr(cand)) dfs(cand, j + 1);
    }
  };

  dfs([]);

  return res;
}

console.log(combinationSum3(3, 7));
