/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m + n - 1;
  let f = m - 1;
  let s = n - 1;

  while (s > -1) {
    if (nums1[f] > nums2[s]) {
      nums1[i] = nums1[f];
      f--;
      i--;
    } else {
      nums1[i] = nums2[s];
      s--;
      i--;
    }
  }
}
