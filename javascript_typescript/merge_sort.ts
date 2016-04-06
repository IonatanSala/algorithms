function mergeSort(array: number[]) {

  if (array.length < 2) return array;

  let mid: number = array.length / 2;
  let left: number[] = mergeSort(array.slice(0, mid));
  let right: number[] = mergeSort(array.slice(mid, array.length));

  let results: number[] = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) results.push(left.shift());
    else results.push(right.shift());
  }

  while (left.length > 0) {
    results.push(left.shift());
  }

  while (right.length > 0) {
    results.push(right.shift());
  }

  return results;
}

let array = [1,2,35,4, 2, 5];
let sortedArray = mergeSort(array);
console.log(sortedArray);
