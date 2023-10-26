let arr = [54, 99, 3, 12, 45, 0, 2];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      // Swap
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return arr;
};

console.log(selectionSort(arr));
