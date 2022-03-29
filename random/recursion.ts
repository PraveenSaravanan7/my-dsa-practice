const rev = (arr: number[]): number[] => {
  const res: number[] = [];

  const rec = (arr: any[], index: number = 0) => {
    console.log(index);
    if (index === arr.length) return;
    rec(arr, ++index);
    res.push(arr[index - 1]);
  };

  rec(arr);

  return res;
};

console.log(rev([1, 2, 3, 4, 5]));
