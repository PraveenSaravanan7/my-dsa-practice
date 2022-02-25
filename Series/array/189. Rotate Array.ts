/**
 Do not return anything, modify nums in-place instead.
 */

const reverse = (start: number, end: number, arr: number[]) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end++;
  }
};

function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  reverse(0, nums.length, nums);

  reverse(0, k - 1, nums);
  reverse(k, nums.length - 1, nums);
}
