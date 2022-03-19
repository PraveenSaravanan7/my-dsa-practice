function groupAnagrams(strs: string[]): string[][] {
  const sortedStrs = strs.map((value) => value.split("").sort().join());

  const map: Record<string, string[]> = {};

  for (let i = 0; i < strs.length; i++) {
    if (map[sortedStrs[i]]) map[sortedStrs[i]].push(strs[i]);
    else map[sortedStrs[i]] = [strs[i]];
  }

  return Object.values(map);
}

// function groupAnagrams(strs: string[]): string[][] {
//     const sortedStr = strs.map((val) => val.split("").sort().join());
//     const hash: Record<string, string[]> = {};

//     for (let index = 0; index < strs.length; index++)
//       if (hash[sortedStr[index]]) hash[sortedStr[index]].push(strs[index]);
//       else hash[sortedStr[index]] = [strs[index]];

//     return Object.values(hash);
//   }
