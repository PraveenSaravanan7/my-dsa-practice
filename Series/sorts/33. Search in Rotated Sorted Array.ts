function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (target === nums[mid]) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (target === nums[mid]) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

function binarySearch(nums: number[], search: number): number {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);

    if (search === nums[mid]) return mid;

    if (search < nums[mid]) r = mid - 1;
    else l = mid + 1;
  }

  return -1;
}

// function search(nums: number[], target: number): number {
//     const pivot = findPivotRec(nums);
//     const arr = nums.slice(pivot).concat(nums.slice(0, pivot));
//     //console.log(arr)
//     const pos = biSearch(arr, target)
//     if(pos === -1) return -1;
//     return (pos + pivot)%nums.length;
// };

// function biSearch(arr: number[], search: number): number {
//     let l = 0, r = arr.length -1;

//     while(l <=r){
//         const mid = Math.floor(l+ (r-l)/2);

//         if(arr[mid] === search) return mid;

//         if(search < arr[mid]) r = mid - 1;
//         else l = mid + 1;

//     }

//     return -1
// }

// function findPivotRec(arr: number[]): number {
//   let l = 0;
//   let r = arr.length - 1;

//   while (l <= r) {
//     let mid = Math.floor(l + (r - l) / 2);
//     if (arr[mid - 1] > arr[mid]) return mid;
//     if (arr[mid] < arr[r]) r = mid;
//     else l = mid + 1;
//   }
//   return 0;
// }
