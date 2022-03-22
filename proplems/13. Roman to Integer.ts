const map: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const romans = s.split("");
  let res = 0;

  for (let i = 0; i < romans.length; i++) {
    let current = map[romans[i]];
    const next = map[romans[i + 1]];

    if (next > current) {
      current = next - current;
      i++;
    }

    res += current;
  }

  return res;
}
