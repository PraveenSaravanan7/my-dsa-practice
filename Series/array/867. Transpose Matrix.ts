function transpose(matrix: number[][]): number[][] {
  const res: number[][] = Array.from({ length: matrix[0].length }, () =>
    new Array(matrix.length).fill(0)
  );

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      res[c][r] = matrix[r][c];
    }
  }

  return res;
}
