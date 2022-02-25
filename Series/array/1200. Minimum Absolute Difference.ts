function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);

  let res: number[][] = [];
  let minDiff = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i];

    if (diff < minDiff) {
      res = [[arr[i], arr[i + 1]]];
      minDiff = diff;
    } else if (diff === minDiff) {
      res.push([arr[i], arr[i + 1]]);
    }
  }

  return res;
}
