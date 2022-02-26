function findDuplicates(nums: number[]): number[] {
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const id = Math.abs(nums[i]) - 1;
    if (nums[id] < 0) res.push(Math.abs(nums[i]));
    else nums[id] *= -1;
  }

  return res;
}

//0 1 2
//-1 3 -3
