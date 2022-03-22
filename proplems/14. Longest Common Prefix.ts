function longestCommonPrefix(strs: string[]): string {
  let res = "";

  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    let currentChar = "";

    for (let j = 0; j < strs.length; j++) {
      if (!currentChar) currentChar = strs[j].charAt(i);
      if (!currentChar) return res;

      if (currentChar !== strs[j].charAt(i)) return res;

      if (j === strs.length - 1) res += currentChar;
    }
  }

  return res;
}
