export function ternarySearchRecursive(
  arr: number[],
  search: number,
  l: number = 0,
  r: number = arr.length - 1
): number {
  if (l > r) return -1;

  const mid1 = l + Math.floor((r - l) / 3);
  const mid2 = mid1 + Math.floor((r - l) / 3);

  if (arr[mid1] === search) return mid1;
  if (arr[mid2] === search) return mid2;

  if (search < arr[mid1])
    return ternarySearchRecursive(arr, search, l, mid1 - 1);
  else if (search < arr[mid2])
    return ternarySearchRecursive(arr, search, mid1 + 1, mid2 - 1);
  else return ternarySearchRecursive(arr, search, mid2 + 1, r);
}

function ternarySearchIterative(arr: number[], search: number): number {
  let l = 0,
    r = arr.length - 1;

  while (l <= r) {
    const mid1 = l + Math.floor((r - l) / 3);
    const mid2 = mid1 + Math.floor((r - l) / 3);

    if (arr[mid1] === search) return mid1;
    if (arr[mid2] === search) return mid2;

    if (search < arr[mid1]) {
      l = l;
      r = mid1 - 1;
    } else if (search < arr[mid2]) {
      l = mid1 + 1;
      r = mid2 - 1;
    } else {
      l = mid2 + 1;
      r = r;
    }
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const search = 4;

console.log(ternarySearchIterative(arr, search));
console.log(ternarySearchRecursive(arr, search));
