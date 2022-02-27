function minimumTotal(triangle: number[][]): number {
  const table: number[][] = [];

  for (let row of triangle) table.push(Array(row.length).fill(0));

  table[0] = triangle[0];

  for (let r = 1; r < triangle.length; r++) {
    for (let c = 0; c < triangle[r].length; c++) {
      if (c === 0) table[r][c] = table[r - 1][c] + triangle[r][c];
      else if (c === table[r].length - 1)
        table[r][c] = table[r - 1][c - 1] + triangle[r][c];
      else
        table[r][c] =
          Math.min(table[r - 1][c], table[r - 1][c - 1]) + triangle[r][c];
    }
  }

  return Math.min(...table[table.length - 1]);
}

console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));
