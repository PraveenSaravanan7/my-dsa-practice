export function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++)
      if (arr[min_index] > arr[j]) min_index = j;

    [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
  }

  return arr;
}

function selectionSortRecutrsive(arr: number[], i: number = 0): number[] {
  if (i === arr.length - 1) return arr;

  let min_index = i;
  for (let j = i + 1; j < arr.length; j++)
    if (arr[min_index] > arr[j]) min_index = j;

  [arr[i], arr[min_index]] = [arr[min_index], arr[i]];

  return selectionSortRecutrsive(arr, i + 1);
}

const arr = [99, 1];

console.log(selectionSortRecutrsive(arr));
console.log(selectionSort(arr));
