function generate(numRows: number): number[][] {
  if (!numRows) return [];
  else if (numRows === 1) return [[1]];

  const rec: number[][] = [[1]];

  for (let i = 1; i < numRows; i++) {
    const prevRow = rec[i - 1];
    const curRow = [];

    curRow.push(1);

    for (let j = 1; j < prevRow.length; j++)
      curRow.push(prevRow[j - 1] + prevRow[j]);

    curRow.push(1);
    rec.push(curRow);
  }

  return rec;
}
