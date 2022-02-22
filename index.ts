function binarySearchRec(
  search: number,
  arr: number[],
  lhs = 0,
  rhs = arr.length
) {
    if(rhs < 1) return -1;

  const mid = lhs + Math.floor((rhs - lhs) / 2);
lhs
rhs
mid

  if (arr[mid] === search) return mid;

  if (search < arr[mid]) {
    return binarySearchRec(search, arr, lhs, mid);
  }
  return binarySearchRec(search, arr, mid, rhs);
}

const arr = [1, 2, 3, 4, 5];

const loc = binarySearchRec(2, arr);

loc;
