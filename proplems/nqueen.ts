function solveNQueens(n: number): string[][] {
  if (n === 1) return [["Q"]];

  const stack: number[][] = [];
  const res: string[][] = [];

  for (let i = n; i > 0; i--) stack.push([i]);

  while (stack.length) {
    const candidate = stack.pop();
    if (candidate && candidate?.length < n) {
      for (let i = n; i > 0; i--) {
        if (checkRules(candidate, i)) {
          const per = [...candidate, i];
          stack.push(per);
          if (per.length === n) res.push(converter(per));
        }
      }
    }
  }

  return res;
}

function checkRules(board: number[], column: number): boolean {
  for (let i = board.length - 1; i > -1; i--) {
    const col = board[i];
    if (column === col) return false;
    const len = board.length - i;
    if (column === col + len) return false;
    if (column === col - len) return false;
  }
  return true;
}

function converter(arr: number[]): string[] {
  const res: string[] = [];
  arr.forEach((val) => {
    let srt = "";
    for (let i = 1; i <= arr.length; i++) srt += i === val ? "Q" : ".";
    res.push(srt);
  });
  return res;
}

console.log(solveNQueens(1));

export function solveNQueens2(n: number): string[][] {
  let results: string[][] = [];
  caculate(n, results, []);
  return results;
}

function caculate(n: number, results: string[][], curr: string[]): void {
  for (let i = 0; i < n; i++) {
    let tmp = Array.from(curr);
    let rowLen = tmp.length;
    let str = "";

    if (rowLen > 0) {
      let hasQueen = false;
      let count = 1;
      for (let rowIdx = rowLen - 1; rowIdx >= 0; rowIdx--) {
        if (curr[rowIdx][i] == "Q") {
          hasQueen = true;
          break;
        }
        if (i + count < n && curr[rowIdx][i + count] == "Q") {
          hasQueen = true;
          break;
        }
        if (i - count >= 0 && curr[rowIdx][i - count] == "Q") {
          hasQueen = true;
          break;
        }
        count += 1;
      }

      if (hasQueen) continue;
    }

    for (let j = 0; j < n; j++) str += j == i ? "Q" : ".";
    tmp.push(str);

    if (tmp.length == n) {
      results.push(tmp);
    } else {
      caculate(n, results, tmp);
    }
  }
}
