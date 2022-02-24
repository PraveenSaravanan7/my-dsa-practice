function groupAnagrams(strs: string[]): string[][] {
  const sortedStr = strs.map((val) => val.split("").sort().join());
  const hash: Record<string, string[]> = {};

  for (let index = 0; index < strs.length; index++)
    if (hash[sortedStr[index]]) hash[sortedStr[index]].push(strs[index]);
    else hash[sortedStr[index]] = [strs[index]];

  return Object.values(hash);
}
