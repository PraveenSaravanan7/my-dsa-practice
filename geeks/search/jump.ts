//import { linearSearchIteration } from "./linear";
function linearSearchIteration(arr: number[], search: number): number {
  const pos = -1;
  for (let l = 0, r = arr.length - 1; l <= r; l++, r--) {
    console.log(l);
    console.log(r);
    if (arr[l] === search) return l;
    if (arr[r] === search) return r;
  }
  return pos;
}

export function jumpSearchIteration(arr: number[], search: number): number {
  let jump = Math.floor(Math.sqrt(arr.length));
  let fast = jump;
  let slow = 0;

  while (fast < arr.length) {
    fast;
    slow;
    if (arr[fast] === search) return fast;
    if (arr[slow] === search) return slow;
    if (arr[fast] > search)
      return slow + linearSearchIteration(arr.slice(slow, fast), search);

    slow = fast;
    fast += jump;
  }

  let pos = linearSearchIteration(arr.slice(slow), search);
  pos;
  return pos === -1 ? -1 : slow + pos;
}

const arr: number[] = [1, 2, 3, 4, 5, 6];
const search = 6;
console.log(arr.length);

console.log(jumpSearchIteration(arr, search));
