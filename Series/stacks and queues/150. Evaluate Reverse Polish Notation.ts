function evalRPN(tokens: string[]): number {
  const operations: Record<
    string,
    ((i: number, j: number) => number) | undefined
  > = {
    "+": (i: number, j: number) => i + j,
    "-": (i: number, j: number) => i - j,
    "*": (i: number, j: number) => i * j,
    "/": (i: number, j: number) => Math.trunc(i / j),
  };
  const operators = Object.keys(operations);
  const stack: number[] = [];

  for (let cand of tokens) {
    if (!operators.includes(cand)) {
      stack.push(+cand);
    } else {
      const op1 = stack.pop() as number;
      const op2 = stack.pop() as number;
      const operate = operations[cand];

      if (operate) stack.push(operate(op2, op1));
    }
  }

  return stack.pop() as number;
}
