function search(nums: number[], target: number): number {
  let res = -1;

  return -1;
}

function findPivot(
  nums: number[],
  l: number = 0,
  r: number = nums.length - 1
): number {
  let mid = Math.floor(l + r / 2);
  l;
  r;
  mid;
  if (nums[mid - 1] > nums[mid]) return mid;
  if (l === nums.length - 2) return findPivot(nums, l + 1, r);
  if (nums[l] > nums[mid]) return findPivot(nums, l, mid);
  if (nums[r] < nums[mid]) return findPivot(nums, mid, r);

  return 0;
}

function findPivotRec(arr: number[]): number {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);
    console.log(mid);
    l;
    r;
    if (arr[mid - 1] > arr[mid]) return mid;
    if (arr[mid] < arr[r]) r = mid;
    else l = mid + 1;
  }
  return 0;
}

console.log(findPivot([0]));
//console.log(findPivotRec([5, 4, 0, 1, 2, 3]));
console.log(findPivotRec([0, 2, 4]));
