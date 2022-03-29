function minDistance(word1: string, word2: string): number {
  if (!word1) return word2.length;
  const table: number[][] = Array.from({ length: word1.length + 1 }, () =>
    new Array(word2.length + 1).fill(0)
  );

  for (let i = 0; i < table.length; i++) table[i][0] = i;
  for (let i = 0; i < table[0].length; i++) table[0][i] = i;

  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        table[i][j] = table[i - 1][j - 1];
      } else {
        table[i][j] =
          1 + Math.min(table[i - 1][j - 1], table[i][j - 1], table[i - 1][j]);
      }
    }
  }

  return table[table.length - 1][table[0].length - 1];
}

console.log(minDistance("horse", "ros"));
