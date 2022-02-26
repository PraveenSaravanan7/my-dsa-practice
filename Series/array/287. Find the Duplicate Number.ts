function findDuplicate(nums: number[]): number {
  //floyd's algo
  let slow = 0,
    fast = 0,
    p = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (fast === slow) {
      while (p !== slow) {
        p = nums[p];
        slow = nums[slow];
      }

      return p;
    }
  }

  return p;
}
