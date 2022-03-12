function isValid(s: string): boolean {
  if (s.length < 2) return false;
  const stack: string[] = [];
  const closer: Record<string, string | undefined> = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < s.length; i++) {
    const cand = s[i];
    if (closer[cand]) {
      const opener = stack.pop();
      if (opener !== closer[cand]) return false;
    } else {
      stack.push(cand);
    }
  }

  return !stack.length;
}

// function isValid(s: string): boolean {
//     const stack: string[] = [];
//   const map: Record<string, number> = {
//     "()": 1,
//     "[]": 1,
//     "{}": 1,
//   };

//   for (let i = 0; i < s.length; i++) {
//     stack.push(s[i]);

//     const cand = stack[stack.length - 2] + stack[stack.length - 1];
//     if (map[cand]) {
//       stack.pop();
//       stack.pop();
//     }
//   }

//   return !stack.length;
// };
