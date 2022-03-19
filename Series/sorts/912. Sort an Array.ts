function sortArray(nums: number[]): number[] {
  return quickSort(nums);
  return mergeSort(nums);
  return insertionSort(nums);
  return selectionSort(nums);
  return bubbleSort(nums);
}

const pivot = (nums: number[], left: number, right: number): number => {
  let p = right;
  let j = left;
  let i = j - 1;

  while (j <= p) {
    if (nums[j] < nums[p]) {
      i++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    j++;
  }

  i++;
  [nums[i], nums[p]] = [nums[p], nums[i]];

  return i;
};

function quickSort(
  nums: number[],
  left = 0,
  right = nums.length - 1
): number[] {
  if (left < right) {
    const pIdx = pivot(nums, left, right);

    quickSort(nums, left, pIdx - 1);
    quickSort(nums, pIdx + 1, right);
  }

  return nums;
}

const mergeHelper = (nums1: number[], nums2: number[]): number[] => {
  const result: number[] = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) result.push(nums1[i++]);
  while (j < nums2.length) result.push(nums2[j++]);

  return result;
};

function mergeSort(nums: number[]): number[] {
  if (nums.length < 2) return nums;

  const mid = Math.floor(nums.length / 2);

  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));

  return mergeHelper(left, right);
}

function insertionSort(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j > 0 && nums[j] < nums[j - 1]) {
      [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      j--;
    }
  }

  return nums;
}

function selectionSort(nums: number[]): number[] {
  let minIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    minIdx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIdx]) minIdx = j;
    }
    [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
  }

  return nums;
}

function bubbleSort(nums: number[]): number[] {
  let swap = true;
  let count = 0;

  while (swap) {
    swap = false;

    for (let i = 0; i < nums.length - count; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swap = true;
      }
    }

    count++;
  }

  return nums;
}

const nums = [8, 7, 6, 5, 4, 3, 2];

console.log(sortArray(nums));
