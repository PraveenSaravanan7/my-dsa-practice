function maxArea(height: number[]): number {
  let vol = 0,
    l = 0,
    r = height.length - 1;

  while (l < r) {
    if (height[l] < height[r]) {
      vol = Math.max(height[l] * (r - l), vol);
      l += 1;
    } else {
      vol = Math.max(height[r] * (r - l), vol);
      r -= 1;
    }
  }

  return vol;
}

console.log(maxArea([2, 8, 0, 0, 0, 0, 0, 2, 10]));
