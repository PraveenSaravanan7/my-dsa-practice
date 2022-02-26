function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  const totalLen = matrix.length * matrix[0].length;

  let left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1;

  while (res.length < totalLen) {
    for (let i = left; i <= right && res.length < totalLen; i++)
      res.push(matrix[top][i]);
    top++;
    for (let i = top; i <= bottom && res.length < totalLen; i++)
      res.push(matrix[i][right]);
    right--;
    for (let i = right; i >= left && res.length < totalLen; i--)
      res.push(matrix[bottom][i]);
    bottom--;
    for (let i = bottom; i >= top && res.length < totalLen; i--)
      res.push(matrix[i][left]);
    left++;
  }

  return res;
}
