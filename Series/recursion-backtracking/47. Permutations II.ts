function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];

  const stack: { slate: number[]; l: number }[] = [{ l: 0, slate: [...nums] }];

  while (stack.length) {
    const { slate, l } = stack.pop() as typeof stack[0];

    if (l === nums.length) {
      res.push(slate.slice());
      continue;
    }

    const hash: Record<number, boolean> = {};

    hash;

    for (let i = l; i < nums.length; i++) {
      console.log(slate, l);
      // if (hash[nums[i]]) continue;
      // hash[nums[i]] = true;
      [slate[i], slate[l]] = [slate[l], slate[i]];
      stack.push({ l: l + 1, slate: slate.slice() });
      [slate[i], slate[l]] = [slate[l], slate[i]];
    }
  }

  return res;
}

function permuteUniqueTwo(nums: number[]): number[][] {
  const res: number[][] = [];

  const dfs = (slate: number[], l: number) => {
    if (l === nums.length) {
      res.push(slate.slice());
      return;
    }

    const hash: Record<number, boolean> = {};

    for (let i = l; i < nums.length; i++) {
      console.log(slate, l);
      if (hash[nums[i]]) continue;

      hash[nums[i]] = true;
      [slate[i], slate[l]] = [slate[l], slate[i]];
      dfs(slate, l + 1);
      [slate[i], slate[l]] = [slate[l], slate[i]];
    }
  };

  dfs(nums, 0);

  return res;
}

const arrP = [1, 2, 3];

console.log(permuteUnique(arrP));
console.log(permuteUniqueTwo(arrP));
