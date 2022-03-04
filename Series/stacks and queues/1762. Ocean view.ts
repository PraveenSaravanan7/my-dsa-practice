function findBuildings(heights: number[]): number[] {
  const res = [heights.length - 1];
  let currentTallest = res[res.length - 1];

  for (let i = heights.length - 2; i > -1; i--) {
    if (heights[i] > heights[res[res.length - 1]]) {
      res.push(i);
    }
  }

  return res.reverse();
}

console.log(findBuildings([100, 101, 20, 1]));
