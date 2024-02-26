/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operations = {
    "+": (i, j) => i + j,
    "-": (i, j) => i - j,
    "*": (i, j) => i * j,
    "/": (i, j) => Math.trunc(i / j),
  };

  const stack = [];

  for (let cand of tokens) {
    if (!operations[cand]) {
      stack.push(+cand);
    } else {
      const op1 = stack.pop();
      const op2 = stack.pop();
      const operate = operations[cand];

      stack.push(operate(op2, op1));
    }
  }

  return stack.pop();
};
