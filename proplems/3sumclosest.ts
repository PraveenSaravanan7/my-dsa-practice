function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);

  let l = 0,
    r = 0,
    currentSum = 0,
    result = Number.MAX_SAFE_INTEGER,
    currentDiff = Number.MAX_SAFE_INTEGER,
    newDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length - 2; i++) {
    l = i + 1;
    r = nums.length - 1;

    while (l < r) {
      currentSum = nums[i] + nums[l] + nums[r];

      newDiff = Math.abs(target - currentSum);
      if (newDiff < currentDiff) {
        currentDiff = newDiff;
        result = currentSum;
      }

      if (currentSum === target) {
        continue;
      } else if (currentSum < target) {
        l++;
      } else {
        r--;
      }
    }
  }

  return result;
}


function threeSumClosest2(nums: number[], target: number): number {
  var len = nums.length;
  var res = nums[0] + nums[1] + nums[2];
  var sum = 0;
  var l = 0;
  var r = 0;
  nums.sort((a, b) => a - b);
  for (var i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    l = i + 1;
    r = len - 1;
    while (l < r) {
      sum = nums[i] + nums[l] + nums[r];
      if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      } else {
        return sum;
      }
      if (Math.abs(sum - target) < Math.abs(res - target)) res = sum;
    }
  }
  return res;
}

var threeSumCloseste = function (nums: number[], target: number): number {
  let diff = Number.MAX_SAFE_INTEGER;
  let sign = "ADD";
  nums.sort(sortDesc);
  for (let i = 0; i < nums.length - 1; i++) {
    let j = i + 1; // start with the next number
    let k = nums.length - 1; // start with the last number

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum == target) return sum;
      const newDiff = Math.abs(target - sum);
      if (newDiff < Math.abs(diff)) {
        diff = newDiff;
        sign = sum > target ? "ADD" : "SUBTRACT";
      }

      // if what
      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return sign === "ADD" ? target + diff : target - diff;
};

const sortDesc = (a: number, b: number) => {
  if (a < b) return -1;
  if (b < a) return 1;
  return 0;
};
