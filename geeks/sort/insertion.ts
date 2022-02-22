export function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (arr[j] > key && j >= 0) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;

    // for (let j = i - 1; j >= 0; j--) {
    //   if (key < arr[j]) [arr[j], arr[j + 1]] = [key, arr[j]];
    // }
  }
  return arr;
}

const arr = [1, 2, 5, 4, 3, 1, 2];

console.log(insertionSort(arr));
