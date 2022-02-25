/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let indexOfZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[indexOfZero] = nums[i];
      indexOfZero++;
    }
  }

  for (let i = indexOfZero; i < nums.length; i++) nums[i] = 0;
}
