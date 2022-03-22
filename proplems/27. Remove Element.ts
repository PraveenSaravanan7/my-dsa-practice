function removeElement(nums: number[], val: number): number {
  let last = nums.length - 1;

  let i = 0;
  while (i <= last) {
    if (nums[i] === val) {
      nums[i] = nums[last];
      last--;
    } else {
      i++;
    }
  }

  return last + 1;
}
