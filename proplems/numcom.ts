const numberMap: Record<string, string[]> = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
  if (digits === '') return [];

  const result: string[] = [];
  const digitsArr = digits.split("");
  const queue: string[] = numberMap[digitsArr[0]];

  while (queue.length) {
    const candidate = queue.shift();
    //let currentLevel = candidate?.length || 1;

    if (candidate?.length === digits.length) {
      result.push(candidate);
      continue;
    }

    for (let k of numberMap[digitsArr[candidate?.length || 1]]) {
      queue.push(candidate + k);
    }
  }

  return result;
}

console.log(letterCombinations("2"));
