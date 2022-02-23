function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  const map: Record<string, number> = {};
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    map[rightChar] = map[rightChar] + 1 || 1;

    while (map[rightChar] > 1) {
      const leftChar = s[windowStart];

      if (map[leftChar]) map[leftChar]--;
      else delete map[leftChar];

      windowStart++;
    }

    max = Math.max(max, windowEnd - windowStart + 1);
  }

  return max;
}
