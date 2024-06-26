// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

let chunk = (a, size) => {
  let result = [];
  for (let i = 0; i < a.length; i += size) {
    result = [...result, a.slice(i, i + size)];
  }
  return result;
};

let ch = (a, size) => {};

let arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("chunk: ", chunk(arr12, 3));
console.log("ch: ", ch(arr12, 3));
