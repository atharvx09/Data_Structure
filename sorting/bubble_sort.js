let arr = [1, 2, 3, 4, 5, 6];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let flag = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    if (!flag) break; // for optimization
  }
  return arr;
}
console.log(bubbleSort(arr));

// The bubble sort is about checking the two value and swap.
// Tc - o(n^2) Sc-o(1)
