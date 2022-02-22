const rd = (arr: number[]): number[] => {
  const rarr: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      rarr.push(arr[i]);
    }
  }
  rarr.push(arr[arr.length - 1]);
  return rarr;
};

console.log(rd([0, 0, 1, 1, 1, 2, 2]));
//console.log(rd([1, 1]));
