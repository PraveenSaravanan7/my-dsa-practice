function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  const dfs = (slate: string, o = 0, c = 0) => {
    if (slate.length === n * 2) return res.push(slate);
    if (o < n) dfs(slate + "(", o + 1, c);
    if (c < o) dfs(slate + ")", o, c + 1);
  };
  dfs("");
  return res;
}
