const threeSum3 = (arr: number[], sum: number = 0): number[][] => {
  if (arr.length < 3) return [];
  //const sum =0;

  const triplelets: number[][] = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    i;
    if (arr[i] !== arr[i - 1]) {
      i;
      let l = i + 1;
      let r = arr.length - 1;
      r;
      while (l < r) {
        const currentSum = arr[i] + arr[l] + arr[r];
        if (currentSum === sum) {
          triplelets.push([arr[i], arr[l], arr[r]]);
          while (arr[l] === arr[l + 1]) l++;
          while (arr[r] === arr[r - 1]) r--;
          l++;
          r--;
        } else if (currentSum < sum) {
          l++;
        } else if (currentSum > sum) {
          r--;
        }
      }
    }
  }

  return triplelets;
};

var threeSum = function (array: number[]) {
  array.sort((a, b) => a - b);
  const triplets = [];
  array;
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] != array[i - 1]) {
      i;
      // making sure our solution set does not contain duplicate triplets
      let left = i + 1;
      let right = array.length - 1;
      right;
      while (left < right) {
        left;
        right;

        const currentSum = array[i] + array[left] + array[right];
        currentSum;
        if (currentSum === 0) {
          currentSum;
          triplets.push([array[i], array[left], array[right]]);
          while (array[left] == array[left + 1]) left++;
          while (array[right] == array[right - 1]) right--; // making sure our solution set does not contain duplicate triplets
          left++;
          right--;
        } else if (currentSum < 0) {
          left++;
        } else if (currentSum > 0) {
          right--;
        }
      }
    }
  }
  return triplets;
};

// Input: nums = [-4, -1, -1, 0,1,2]
// Output: [[-1,-1,2],[-1,0,1]]

function threeSumfast(nums: number[]): number[][] {
  const results = [];
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (sorted[i] === sorted[i - 1]) continue;
    const target = 0 - sorted[i];

    let left = i + 1;
    let right = nums.length - 1;

    while (right > left) {
      const sum = sorted[left] + sorted[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        results.push([sorted[i], sorted[left], sorted[right]]);
        while (sorted[left + 1] === sorted[left]) {
          left++;
        }

        while (sorted[right - 1] === sorted[right]) {
          right--;
        }

        left++;
        right--;
      }
    }
  }

  return results;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSumfast([-1, 0, 1, 2, -1, -4]));
console.log(threeSum3([-1, 0, 1, 2, -1, -4], 0));
// console.log(threeSum([3, -2, 1, 0]));
// console.log(threeSum([0, 0, 0, 0]));
// console.log(threeSum2([0, 0, 0, 0]));
// console.log(threeSum([0, 1, 1, 2, 3, 4, 4]));
// console.log(threeSum2([0, 1, 1, 2, 3, 4, 4], 5));
