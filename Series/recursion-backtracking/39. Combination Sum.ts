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

// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// var combinationSum_2 = function (c, target) {
//   const res = [];

//   const dfs = (i, t, s) => {
//     if (t < 0) return;

//     if (t === 0) res.push(s.slice());

//     for (let j = i; j < c.length; j++) {
//       s.push(c[j]);
//       dfs(j, t - c[j], s);
//       s.pop();
//     }
//   };

//   dfs(0, target, []);

//   return res;
// };
