function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const res: number[][] = [intervals[0]];

  for (let cand of intervals) {
    const e1 = res[res.length - 1][1];
    const s2 = cand[0];
    if (s2 <= e1) {
      res[res.length - 1][1] = Math.max(e1, cand[1]);
    } else {
      res.push(cand);
    }
  }

  return res;
}

console.log(
  merge([
    [1, 14],
    [4, 5],
  ])
);
