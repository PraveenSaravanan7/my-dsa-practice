function letterCasePermutation(s: string): string[] {
  const res: string[] = [];

  const dfs = (slate: string, cand: string) => {
    if (slate.length === s.length) {
      res.push(slate);
      return;
    }

    if (Number.isInteger(parseInt(cand))) {
      dfs(slate + cand, s[slate.length + 1]);
    } else {
      dfs(slate + cand.toLowerCase(), s[slate.length + 1]);
      dfs(slate + cand.toUpperCase(), s[slate.length + 1]);
    }
  };

  dfs("", s[0]);

  return res;
}
