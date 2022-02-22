function binarySearchRecursive(
  arr: number[],
  search: number,
  l: number = 0,
  r: number = arr.length - 1
): number {
  if (l > r) return -1;
  let mid = l + Math.floor((r - l) / 2);
  l;
  r;
  mid;
  if (arr[mid] === search) return mid;
  if (search < arr[mid]) return binarySearchRecursive(arr, search, l, mid - 1);
  else return binarySearchRecursive(arr, search, mid + 1, r);
}

export function exponentialSearchIteration(
  arr: number[],
  search: number
): number {
  if (arr[0] == search) return 0;
  let i = 1;
  while (i < arr.length && arr[i] < search) i *= 2;
  i;
  return binarySearchRecursive(
    arr,
    search,
    Math.floor(i / 2),
    Math.min(i, arr.length - 1)
  );
}

const arr: number[] = [1, 2, 3, 4, 5];
const search = 5;

console.log(exponentialSearchIteration(arr, search));
//console.log(binarySearchRecursive(arr, search));
