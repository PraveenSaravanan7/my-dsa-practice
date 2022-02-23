function rotateString(s: string, goal: string): boolean {
  let step = 0;
  let temp = s.split("");

  while (step <= temp.length) {
    temp.push(temp.shift() as string);
    if (temp.join("") === goal) return true;
    step++;
  }

  return false;
}

function rotateString2(s: string, goal: string): boolean {
    if(s === goal) return true;
    if(goal.length < s.length) return false;
    s = s + s;
    return s.includes(goal);
};

console.log(rotateString("abcde", "cdeab"));
