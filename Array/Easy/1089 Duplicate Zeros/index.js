// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

// Example 1:
// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// Example 2:
// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]

// Note:

// 1 <= arr.length <= 10000
// 0 <= arr[i] <= 9

// var duplicateZeros = function (arr) {
//   //keep the length
//   //loop arr meet zero, insert zero
//   //cut array into ideal size
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (arr[i] == 0) {
//       arr.splice(i, 0, 0);
//       arr.pop();
//       i += 1;
//     }
//   }
// };

let arr = [1, 0, 2, 3, 0, 4, 5, 0];
// Output: null
//the input array is modified to: [1,0,0,2,3,0,0,4]

// arr.splice(arr.length - 1, 1);
//console.log(duplicateZeros(arr));
console.log(duplicateZ(arr));
console.log(arr);
