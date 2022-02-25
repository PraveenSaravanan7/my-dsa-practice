const bisearch = (
  arr: number[],
  target: number,
  l: number,
  r: number
): number => {
  if (l > r) return -1;
  const mid = Math.floor((l + r) / 2);
  if (target === arr[mid]) return mid;
  else if (target < arr[mid]) return bisearch(arr, target, l, mid - 1);
  return bisearch(arr, target, mid + 1, r);
};

function search(reader: number[], target: number): number {
  let l = 0,
    r = 1;

  while (target > reader[r]) {
    l = r;
    r *= 2;
  }

  //   while (l <= r) {
  //     let mid = Math.floor((l + r) / 2);
  //     if (target === reader[mid]) return mid;
  //     else if (target < reader[mid]) r = mid - 1;
  //     else l = mid + 1;
  //   }
  //   return -1;

  return bisearch(reader, target, l, r);
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 16], 4));
