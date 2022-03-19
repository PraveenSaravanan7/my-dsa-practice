function searchMatrix(matrix: number[][], target: number): boolean {
  const n = matrix.length;
  const m = matrix[0].length;

  let l = 0;
  let r = n * m - 1;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    const row = Math.floor(mid / m);
    const col = mid % m;

    if (target === matrix[row][col]) return true;

    if (target < matrix[row][col]) r = mid - 1;
    else l = mid + 1;
  }

  return false;
}

// function searchMatrix(matrix: number[][], target: number): boolean {
//     const n = matrix.length;
//     const m = matrix[0].length;

//     let l = 0;
//     let r = n * m - 1;

//     while (l <= r) {
//       const mid = Math.floor(l + (r - l) / 2);
//       const row = Math.floor(mid / m);
//       const col = mid % m;

//       if (matrix[row][col] === target) return true;

//       if (target < matrix[row][col]) r = mid - 1;
//       else l = mid + 1;
//     }

//     return false;
//   }
