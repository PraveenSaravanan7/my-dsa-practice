const dmap: Record<string, string[]> = {
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const D: Record<string, string[]> = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

function letterCombinations2(digits: string): string[] {
  if (digits === "") return [];

  const res = [];
  const stack: { c: string; d: number }[] = [{ c: "", d: digits.length - 1 }];

  while (stack.length) {
    const last = stack.pop();

    if (last) {
      const { c, d } = last;
      if (d === -1) {
        res.push(c);
        continue;
      }
      for (const next of D[digits[d]]) {
        console.log(next);
        stack.push({ c: c + next, d: d - 1 });
      }
    }
  }

  return res;
}

function letterCombinations(digits: string): string[] {
  if (digits.length < 1) return digits.split("");

  const charr = digits.split("");

  let arr = dmap[charr[0]];

  for (let i = 1; i < charr.length; i++) {
    arr.forEach((v) => {
      dmap[charr[i]].forEach((j) => newArr.push(v + j));
    });
  }

  return arr;
}

function letterCombinations3(digits: string): string[] {
  const groups = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  return digits
    .split("")
    .map((s) => groups[Number(s) - 2])
    .reduce<string[]>((result, group) => {
      const splitted = group.split("");
      result;
      return result.length === 0
        ? splitted
        : splitted.map((s) => result.map((res) => res + s)).flat();
    }, []);
}

function letterCombinations5(digits: string): string[] {
  const arr: string[] = [];
  const groups = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  console.log(
    digits
      .split("")
      .map((s) => groups[Number(s) - 2])
      .reduce<string[] | string[][]>((acc, val) => {
        const c = val.split("");
        acc = acc.map((v) => c.map((j) => j + v));
        c;
        acc;
        return acc.concat(c);
      }, [])
  );

  return arr;
}

//console.log(letterCombinations("23"));
console.log(letterCombinations2("23"));
console.log(letterCombinations3("23"));
console.log(letterCombinations5("234"));
console.log(letterCombinationsfinal("23"));
console.log(letterCombinations99("23"));
console.log(letterCombinationsfinal(""));

function letterCombinationsfinal(digits: string): string[] {
  const groups = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  if (digits.length < 2)
    return digits ? groups[Number(digits.charAt(0)) - 2].split("") : [];

  let arr: string[] = [];

  for (let i = 0; i < digits.length; i++) {
    const cArr = groups[Number(digits.charAt(i)) - 2].split("");
    if (arr.length === 0) {
      arr = cArr;
    } else {
      let newArr: string[] = [];
      arr.forEach((v) => cArr.forEach((j) => newArr.push(v + j)));
      arr = newArr;
    }
  }

  return arr;
}

