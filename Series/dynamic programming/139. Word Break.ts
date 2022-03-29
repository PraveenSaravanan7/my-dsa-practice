function wordBreak(s: string, wordDict: string[]): boolean {
  const table = Array(s.length + 1).fill(false);

  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (table[i] === false) continue;
    for (let j = i + 1; j < table.length; j++) {
      if (wordDict.includes(s.slice(i, j))) {
        table[j] = true;
      }
    }
  }

  return table[table.length - 1];
}
console.log(wordBreak("catsanddog", ["cat", "sand", "and", "dog"]));
