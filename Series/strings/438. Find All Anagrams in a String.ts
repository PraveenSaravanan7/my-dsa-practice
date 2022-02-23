function isEq(A: Record<string, number>, B: Record<string, number>): boolean {
  for (let key of Object.keys(A)) {
    if (A[key] !== B[key]) return false;
  }

  return true;
}

function findAnagrams(s: string, p: string): number[] {
  let res: number[] = [];
  let pMap: Record<string, number> = {};
  let sMap: Record<string, number> = {};
  let windowStart = 0;

  for (let i = 0; i < p.length; i++) {
    pMap[p[i]] = pMap[p[i]] + 1 || 1;
  }

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    sMap[rightChar] = sMap[rightChar] + 1 || 1;

    const width = windowEnd - windowStart + 1;
    if (width === p.length) {
      if (isEq(sMap, pMap)) {
        res.push(windowStart);
      }
    }
    if (width >= p.length) {
      while (windowEnd - windowStart + 1 >= p.length) {
        const leftChar = s[windowStart];
        if (sMap[leftChar] === 1) delete sMap[leftChar];
        else sMap[leftChar]--;
        windowStart++;
      }
    }
  }

  return res;
}

const isArrEq = (arr1: number[], arr2: number[]): boolean => {
  for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;
  return true;
};

function findAnagrams2(s: string, p: string): number[] {
  const res: number[] = [];
  const sArr = new Array(26).fill(0);
  const pArr = new Array(26).fill(0);
  let windowStart = 0;

  for (let i = 0; i < p.length; i++) {
    pArr[p.charCodeAt(i) % 26]++;
  }

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    windowStart = windowEnd + 1 - p.length;

    const index = s.charCodeAt(windowEnd) % 26;
    sArr[index]++;

    if (windowEnd - windowStart + 1 >= p.length) {
      sArr[s.charCodeAt(windowStart - 1) % 26]--;
    }

    if (windowEnd - windowStart + 1 === p.length) {
      if (isArrEq(sArr, pArr)) res.push(windowStart);
    }
  }

  return res;
}

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams2("cbaebabacd", "abc"));
