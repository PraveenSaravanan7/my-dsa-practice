const generateParentheses = (n: number): string[] => {
  const result: string[] = [];
  breathFirstSearch("", 0, 0);
  return result;

  function breathFirstSearch(str: string, left: number, right: number) {
    str;
    left;
    right;
    n;
    if (left === n && right === n) {
      result.push(str);
      return;
    }
    if (left !== n) {
      left;
      right;
      breathFirstSearch(str + "(", left + 1, right);
    }
    if (left > right) {
      left;
      right;
      breathFirstSearch(str + ")", left, right + 1);
    }
  }
};

const treeGen = (n: number): string[] => {
  const res: string[] = [];

  const stack = [{ value: "(", balance: 1 }];

  while (stack.length) {
    console.log(stack);
    const candidate = stack.pop();

    if (candidate) {
      if (candidate.value.length === n * 2) {
        if (candidate.balance === 0) res.push(candidate.value);
        continue;
      }

      if (candidate.balance > 0) {
        stack.push({
          value: candidate.value + ")",
          balance: candidate.balance - 1,
        });
      }

      if (
        candidate.balance < n &&
        candidate.balance < n * 2 - candidate.value.length
      ) {
        stack.push({
          value: candidate.value + "(",
          balance: candidate.balance + 1,
        });
      }
    }
  }

  return res;
};

function generateParenthesis(n: number): string[] {
  const res: string[] = [];

  const stack = [{ value: "(", right: 1, left: 0 }];

  while (stack.length) {
    //console.log(stack);
    const candidate = stack.pop();

    if (candidate) {
      if (candidate.value.length === n * 2) {
        if (candidate.right === n && candidate.left === n)
          res.push(candidate.value);
        continue;
      }

      if (candidate.right > candidate.left) {
        stack.push({
          value: candidate.value + ")",
          right: candidate.right,
          left: candidate.left + 1,
        });
      }

      if (candidate.right < n) {
        stack.push({
          value: candidate.value + "(",
          right: candidate.right + 1,
          left: candidate.left,
        });
      }
    }
  }

  return res;
}

function printIt(str: string, n: number, res: string[], r: number, l: number) {
  console.log(str)
  if (str.length === n * 2) {
    res.push(str);
    return;
  }

  if (r < n) {
    printIt(str + "(", n, res, r + 1, l);
  }
  if (r > l) {
    printIt(str + ")", n, res, r, l + 1);
  }
}

function generateParenthesis3(n: number): string[] {
  const res: string[] = [];
  printIt("", n, res, 0, 0);
  return res;
}

console.log(generateParenthesis3(2));
// console.log(generateParentheses(3));
// console.log(treeGen(3));
