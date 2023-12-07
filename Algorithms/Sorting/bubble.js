const randomArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

let arr = randomArray(10, 99);
let arr2 = [54, 99, 3, 12, 45, 0, 2];

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap j and j+1

        //first way to swap: array disconstruction
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        //second way: temp valuable
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

const bubbleSort2 = (arr) => {
  let swaped;
  do {
    swaped = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swaped = true;
      }
    }
  } while (swaped);

  return arr;
};

console.log("original arr: ", arr);
// console.log(bubbleSort(arr));
