export function bubbleSort(arr: number[]): number[] {
  let swapped = false; //is_arr_sort
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
      if (swapped === false) break;
    }
  }

  return arr;
}

const arr = [2, 3, 4];

console.log(bubbleSort(arr));
