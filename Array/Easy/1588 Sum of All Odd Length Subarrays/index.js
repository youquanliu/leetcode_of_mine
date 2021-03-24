// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.

// Example 1:
// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

// Example 2:
// Input: arr = [1,2]
// Output: 3
// Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

// Example 3:
// Input: arr = [10,11,12]
// Output: 66


// Constraints:

// 1 <= arr.length <= 100
// 1 <= arr[i] <= 1000

var sumOddLengthSubarrays = function (arr) {
    //odd index 
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if ((i - j) % 2 == 0) {
                for (let s = i; s <= j; s++) {
                    sum += arr[s];
                }
            }
        }
    }
    return sum
};

const sumOdd = (arr) => {
    let total = 0;
    //a loop go through arr start from 0; idx:i
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if ((j - i) % 2 == 0) {
                for (let x = i; x <= j; x++) {
                    total += arr[x];
                }
            }
        }
    }
    return total
    //second loop start from i
    //idx diff is an odd number?
    //yes, sum of odd length, add sum to total sum
}


let arr = [1, 4, 2, 5, 3];
// Output: 58
console.log(sumOdd(arr))

