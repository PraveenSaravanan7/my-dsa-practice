/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    let lH = height[l];
    let rH = height[r];
    let vol = 0;

    if (lH < rH) {
      vol = lH * (r - l);
      l++;
    } else {
      vol = rH * (r - l);
      r--;
    }

    if (vol > res) res = vol;
  }

  return res;
};
