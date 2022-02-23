function LongestOfSubstring(s: string, k: number): number {
  let max = 0;
  let map = new Map();

  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];

    if (!map.get(rightChar)) map.set(rightChar, 1);
    else map.set(rightChar, map.get(rightChar) + 1);

    while (map.size > k) {
      const leftChar = s[windowStart];

      if (map.get(leftChar) === 1) map.delete(leftChar);
      else map.set(leftChar, map.get(leftChar) - 1);

      windowStart += 1;
    }

    max = Math.max(max, windowEnd - windowStart + 1);
  }

  return max;
}

console.log(LongestOfSubstring("eceba", 3));
