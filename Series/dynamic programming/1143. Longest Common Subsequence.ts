function longestCommonSubsequence(text1: string, text2: string): number {
  const table: string[][] = Array.from({ length: text1.length + 1 }, () =>
    new Array(text2.length + 1).fill("")
  );

  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[0].length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + text1[i - 1];
      } else {
        const above = table[i - 1][j];
        const left = table[i][j - 1];

        table[i][j] = above.length > left.length ? above : left;
      }
    }
  }

  return table[table.length - 1][table[0].length - 1].length;
}
