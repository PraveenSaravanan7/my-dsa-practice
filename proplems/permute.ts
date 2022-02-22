// const swap = (arr: number[], i: number, j: number) => {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// };

// function permute(nums: number[]): number[][] {
//   const permutations: number[][] = [];

//   const helper = (soFar: number[], nums: number[]) => {
//     if (nums.length === 0) {
//       permutations.push(soFar.slice());
//       return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//       const numsClone = nums.slice();
//       numsClone.splice(i, 1);
//       helper(soFar.concat(nums[i]), numsClone);
//     }
//   };

//   helper([], nums);

//   return permutations;
// }

const swap = (arr: number[], i: number, j: number) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

function permute(nums: number[]): number[][] {
  const backtrack = (first: number, permutations: number[][] = []) => {
    if (first === nums.length - 1) permutations.push(nums.slice());

    for (let i = first; i < nums.length; i++) {
      if (first !== i) swap(nums, first, i);

      backtrack(first + 1, permutations);

      if (first !== i) swap(nums, first, i);
    }

    return permutations;
  };

  return backtrack(0);
}

/*
Assumptions


Thoughts
                    1                      2                       3
              2           3         1              3       1                2
                  3    2                 3      1               2       1
 

Approach
Iterate through nums
keep nums[i] and swap other two
add to permutations set

*/
