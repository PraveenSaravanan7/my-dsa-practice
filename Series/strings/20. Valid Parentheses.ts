function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, number> = {
    "()": 1,
    "[]": 1,
    "{}": 1,
  };

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    const cand = stack[stack.length - 2] + stack[stack.length - 1];
    if (map[cand]) {
      stack.pop();
      stack.pop();
    }
  }

  return !stack.length;
}

function isValid2(s: string): boolean {

    // push only open brackets to the stack and if close brackets appear u know wat to do

  return true;
}

console.log(isValid("[({}{})]"));
