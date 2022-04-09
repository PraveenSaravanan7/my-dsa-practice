function partition(s: string): string[][] {
  const res: string[][] = [];
  const candidates = s.split("");

  const isPalindrome = (str: string): boolean => {
    for (let i = 0, j = str.length - 1; i <= j; i++, j--)
      if (str[i] !== str[j]) return false;
    return true;
  };

  const dfs = (slate: string[], i = 0, j = 0) => {
    if (i === candidates.length) return res.push(slate);

    for (let k = j; k < candidates.length; k++) {
      const newCand = candidates.slice(i, k + 1).join("");
      if (isPalindrome(newCand)) dfs([...slate, newCand], k + 1, k + 1);
    }
  };

  dfs([]);

  return res;
}

console.log(partition("aab"));
