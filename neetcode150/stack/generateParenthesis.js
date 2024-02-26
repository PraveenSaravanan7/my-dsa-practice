/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  const dfs = (slate, o, c) => {
    if (slate.length === n * 2) return res.push(slate);

    if (o < n) dfs(slate + "(", o + 1, c); // ** o < n
    if (c < o) dfs(slate + ")", o, c + 1);
  };

  dfs("", 0, 0);

  return res;
};
