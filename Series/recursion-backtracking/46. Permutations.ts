export function permute(nums: number[]): number[][] {
  const res: number[][] = [];

  const dfs = (slate: number[], l: number) => {
    if (l === nums.length) {
      res.push(slate);
      return;
    }

    for (let i = l; i < nums.length; i++) {
      [nums[l], nums[i]] = [nums[i], nums[l]];
      dfs([...nums], l + 1);
      [nums[l], nums[i]] = [nums[i], nums[l]];
    }
  };

  dfs([], 0);

  return res;
}

console.log(permute([1, 2, 3]));

// function permute(nums: number[]): number[][] {

//     const res = [];

//     const dfs = (i, slate) => {
//         if(i === nums.length){
//             res.push(slate)
//             return
//         }

//          for(let j  = i; j < nums.length; j++){
//              [nums[i], nums[j]] = [nums[j], nums[i]]
//              dfs(i + 1, [...nums]);
//              [nums[i], nums[j]] = [nums[j], nums[i]]
//          }
//     }

//     dfs(0, [])

// // const stack: { val: number[]; i: number }[] = [{ val: [...nums], i: 0 }];

// //   while (stack.length) {
// //     //console.log(stack);
// //     const cand = stack.shift() as typeof stack[0];

// //     if (cand.i === nums.length - 1) {
// //       res.push(cand.val);
// //       continue;
// //     }

// //     for (let j = cand.i; j < nums.length; j++) {
// //       [cand.val[cand.i], cand.val[j]] = [cand.val[j], cand.val[cand.i]];
// //       stack.push({ val: [...cand.val], i: cand.i + 1 });
// //       [cand.val[cand.i], cand.val[j]] = [cand.val[j], cand.val[cand.i]];
// //     }
// //   }

//   return res;

// };
