function solveNQueens(n: number): string[][] {
  const res: string[][] = [];

  const checkRules = (slate: number[], column: number) => {
    for (let row = slate.length - 1; row > -1; row--) {
      const col = slate[row];

      if (col === column) return false;

      const diagonal = slate.length - row;

      if (col + diagonal === column) return false;
      if (col - diagonal === column) return false;
    }

    return true;
  };

  const converter = (arr: number[]): string[] => {
    const strArr: string[] = [];

    arr.forEach((val) => {
      let str = "";
      for (let i = 0; i < arr.length; i++) str += i === val ? "Q" : ".";
      strArr.push(str);
    });

    return strArr;
  };

  const dfs = (slate: number[]) => {
    if (slate.length === n) return res.push(converter(slate));

    for (let col = 0; col < n; col++) {
      if (checkRules(slate, col)) {
        const newSlate = slate.slice();
        newSlate.push(col);
        dfs(newSlate);
      }
    }
  };

  dfs([]);

  return res;
}

// function solveNQueens(n: number): string[][] {
//     if (n === 1) return [["Q"]];

//     const stack: number[][] = [];
//     const res: string[][] = [];

//     for (let i = n; i > 0; i--) stack.push([i]);

//     while (stack.length) {
//       const candidate = stack.pop();
//       if (candidate && candidate?.length < n) {
//         for (let i = n; i > 0; i--) {
//           if (checkRules(candidate, i)) {
//             const per = [...candidate, i];
//             stack.push(per);
//             if (per.length === n) res.push(converter(per));
//           }
//         }
//       }
//     }

//     return res;
//   }

//   function checkRules(board: number[], column: number): boolean {
//     for (let i = board.length - 1; i > -1; i--) {
//       const col = board[i];
//       if (column === col) return false;
//       const len = board.length - i;
//       if (column === col + len) return false;
//       if (column === col - len) return false;
//     }
//     return true;
//   }

//   function converter(arr: number[]): string[] {
//     const res: string[] = [];
//     arr.forEach((val) => {
//       let srt = "";
//       for (let i = 1; i <= arr.length; i++) srt += i === val ? "Q" : ".";
//       res.push(srt);
//     });
//     return res;
//   }

// n queens 2

function totalNQueens(n: number): number {
  let count = 0;

  const checkRules = (slate: number[], column: number) => {
    for (let row = slate.length - 1; row > -1; row--) {
      const col = slate[row];

      if (col === column) return false;

      const diagonal = slate.length - row;

      if (col + diagonal === column) return false;
      if (col - diagonal === column) return false;
    }

    return true;
  };

  const dfs = (slate: number[]) => {
    if (slate.length === n) return count++;

    for (let col = 0; col < n; col++) {
      if (checkRules(slate, col)) {
        const newSlate = slate.slice();
        newSlate.push(col);
        dfs(newSlate);
      }
    }
  };

  dfs([]);

  return count;
}
