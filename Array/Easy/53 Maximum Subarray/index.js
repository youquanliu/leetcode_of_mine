// Given an integer array nums, find the contiguous subarray 
//(containing at least one number) which has the largest sum and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:

// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105

var maxSubArray = function (nums) {
    let len = nums.length;
    let max = -Number.MAX_VALUE; //maximum negetive numeric value in javascript
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum = 0;
        for (let j = i; j < len; j++) {
            sum += nums[j];
            max = Math.max(max, sum);
        }
    }
    return max
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let nums2 = [5, 4, -1, 7, 8]
// Output: 23
console.log(maxSubArray(nums))
// Output: 6
