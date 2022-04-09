const keysMap: Record<string, string[]> = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
  if (!digits) return [];
  const res: string[] = [];

  const dfs = (slate: string) => {
    if (slate.length === digits.length) return res.push(slate);

    const candidates = keysMap[digits[slate.length]];

    for (let j = 0; j < candidates.length; j++) dfs(slate + candidates[j]);
  };

  dfs("");

  return res;
}
