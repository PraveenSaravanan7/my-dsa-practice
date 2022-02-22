export function linearSearchIteration(arr: number[], search: number): number {
  const pos = -1;
  for (let l = 0, r = arr.length - 1; l <= r; l++, r--) {
    console.log(l);
    console.log(r);
    if (arr[l] === search) return l;
    if (arr[r] === search) return r;
  }
  return pos;
}

function linearSearchRecursive(
  arr: number[],
  search: number,
  l: number = 0,
  r: number = arr.length - 1
): number {
  console.log(l);
  console.log(r);
  if (arr[l] === search) return l;
  if (arr[r] === search) return r;
  if (l >= r) return -1;

  return linearSearchRecursive(arr, search, ++l, --r);
}

const Arr: number[] = [1, 2, 3, 5, 6];
const Search = 3;

console.log(linearSearchIteration(Arr, Search));
console.log(linearSearchRecursive(Arr, Search));
