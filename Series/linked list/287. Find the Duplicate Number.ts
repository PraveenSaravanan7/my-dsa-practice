function findDuplicate(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    const ind = Math.abs(nums[i]) - 1;
    if (nums[ind] < 0) return Math.abs(nums[ind]);
    nums[ind] *= -1;
  }

  return -1;
}

// function findDuplicate(nums: number[]): number {

//     for (let i = 0; i < nums.length; i++) {
//       const id = Math.abs(nums[i]) - 1;
//       if (nums[id] < 0) return Math.abs(nums[i]);
//       else nums[id] *= -1;
//     }

//     return 0;

//       //1 3 4 2 2
//       //-1 -3 -4 -2 2
//       //-3 1 -3 4 2

//   //   let slow = 0,
//   //     fast = 0,
//   //     p = 0;

//   //   while (true) {
//   //     slow = nums[slow];
//   //     fast = nums[nums[fast]];

//   //     if (fast === slow) {
//   //       while (p !== slow) {
//   //         p = nums[p];
//   //         slow = nums[slow];
//   //       }
//   //       return p;
//   //     }
//   //   }

//   //   return p;
//   }
