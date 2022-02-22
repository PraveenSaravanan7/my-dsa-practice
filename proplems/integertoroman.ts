const RR: Record<string, string> = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

const R = Object.entries(RR);

function integerToRoman(integer: number): string {
  let roman = "";

  const getRoman = (val: number): string => {
    const v = String(val);
    if (RR[v]) return RR[v];

    for (let i = R.length - 1; i > -1; i--) {
      const num = Number(R[i][0]);
      const rom = R[i][1];
      if (val > num) {
        return rom + (val - num > 0 ? getRoman(val - num) : "");
      }
    }
    return "";
  };

  for (let i = String(integer).length - 1; i > -1; i--) {
    let num = Number(String(integer)[i]);
    let zeros = String(integer).length - 1 - i;
    while (zeros) {
      num *= 10;
      zeros--;
    }

    if (num > 0) {
      roman = getRoman(num) + roman;
    }
  }

  return roman;
}

console.log(integerToRoman(13));
