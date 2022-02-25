function rotateString(s: string, goal: string): boolean {
  if (s === goal) return true;
  if (goal.length < s.length) return false;
  s = s + s;
  return s.includes(goal);
}
