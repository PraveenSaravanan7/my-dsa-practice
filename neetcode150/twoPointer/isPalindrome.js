/**
 * 
 * Time O(N) | Space O(1)
 * 
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  const isValid = (i) =>
    (i.toLowerCase() >= "a" && i.toLowerCase() <= "z") ||
    (i.toLowerCase() >= "0" && i.toLowerCase() <= "9");

  while (l <= r) {
    if (!isValid(s[l])) {
      l++;
      continue;
    }

    if (!isValid(s[r])) {
      r--;
      continue;
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

    l++;
    r--;
  }

  return true;
};
