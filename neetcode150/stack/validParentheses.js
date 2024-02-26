/**
 * Time O(N) | Space O(N)
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pairs = { ")": "(", "}": "{", "]": "[" };
  const stack = []; // Space O(N)

  for (let i of s) {
    if (pairs[i]) {
      const top = stack.pop();

      if (top !== pairs[i]) return false; // Wrong pair check
    } else stack.push(i);
  }

  return stack.length === 0;
};
