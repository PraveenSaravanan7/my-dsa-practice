function manach(str: string): number {
  const arr = str.split("");
  let c = 0,
    l = 0,
    r = 0;
  const p: number[] = [];

  for (let i = 0; i < arr.length; i++) {}

  return 0;
}

function expander(srt: string, i: number): number {
  let len = 1;
  let l = i - 1;
  let r = i + 1;
  let breakLoop = false;

  while (l > -1 && r < srt.length && !breakLoop) {
    if (srt[l] !== srt[r]) {
      breakLoop = true;
    } else {
      l--;
      r++;
      len += 2;
    }
  }

  return len;
}

function insertDol(srt: string) {
  let s = "$";
  for (let i = 0; i < srt.length; i++) s += srt[i] + "$";
  return s;
}

function lps(str: string) {
  let lps = 0;
  let c = 0;

  for (let i = 0; i < str.length; i++) {
    const currentlps = expander(str, i);
    currentlps;
    if (lps < currentlps) {
      lps = currentlps;
      i;
    }
  }

  return lps;
}

//ps lenght = N*2 +1
const srt = "xxxabababxbababaxxx";
console.log(lps(srt));

//console.log(expander(srt, 5)); 19 to 39
