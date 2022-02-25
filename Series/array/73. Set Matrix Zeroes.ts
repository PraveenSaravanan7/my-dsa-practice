/**
 Do not return anything, modify matrix in-place instead.
 */

const helper = (r: number, c: number, matrix: number[][]) => {
  for (let j = 0; j < matrix[0].length; j++) matrix[r][j] = 0;
  for (let i = 0; i < matrix.length; i++) matrix[i][c] = 0;
};

function setZeroes(matrix: number[][]): void {
  const zeroAdd: number[][] = [];

  for (let r = 0; r < matrix.length; r++)
    for (let c = 0; c < matrix[0].length; c++)
      if (matrix[r][c] === 0) zeroAdd.push([r, c]);

  for (let cand of zeroAdd) helper(cand[0], cand[1], matrix);
}
