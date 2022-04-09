export function subsets(nums: number[]): number[][] {
  const res: number[][] = [];

  const dfs = (l: number, slate: number[]) => {
    if (l === nums.length) {
      res.push(slate);
      return;
    }

    dfs(l + 1, slate);
    dfs(l + 1, [...slate, nums[l]]);
  };

  dfs(0, []);

  return res;
}

// function subsets(nums: number[]): number[][] {
//     const res: number[][] = [];

//   const dfs = (i: number, slate: number[]) => {
//     if (i === nums.length) {
//       res.push(slate);
//       return;
//     }

//     dfs(i + 1, slate);
//     dfs(i + 1, [...slate, nums[i]]);
//   };

//   dfs(0, []);

//   return res;
// //   const res: number[][] = [];

// //   let stack: { val: number[]; l: number }[] = [{ val: [], l: 0 }];

// //   while (stack.length) {
// //     const cand = stack.pop() as { val: number[]; l: number };
// //     if (cand.l === nums.length) {
// //       res.push(cand.val);
// //       continue;
// //     }

// //     stack.push({ val: [...cand.val, nums[cand.l]], l: cand.l + 1 });
// //     stack.push({ val: cand.val, l: cand.l + 1 });
// //   }

// //   return res;
// }
