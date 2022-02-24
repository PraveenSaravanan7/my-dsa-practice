export function binarySearchIteration(arr: number[], search: number): number {
  let l = 0;
  let r = arr.length - 1;
  let mid;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    l;
    r;
    mid;
    if (arr[mid] === search) return mid;
    if (arr[mid] > search) r = mid - 1;
    else l = mid + 1;
  }

  return -1;
}

function binarySearchRecursive(
  arr: number[],
  search: number,
  l: number = 0,
  r: number = arr.length - 1
): number {
  if (l > r) return -1;
  let mid = l + Math.floor((r - l) / 2); // Math.floor((l+r)/2)
  l;
  r;
  mid;
  if (arr[mid] === search) return mid;
  if (search < arr[mid]) return binarySearchRecursive(arr, search, l, mid - 1);
  else return binarySearchRecursive(arr, search, mid + 1, r);
}

const arr: number[] = [1, 2];
const search = 1;

console.log(binarySearchIteration(arr, search));
console.log(binarySearchRecursive(arr, search));
