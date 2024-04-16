// Given an integer array nums, find a subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// given the new number, the new maximun can have 3 conditions
// 1. number(+) * prevMax(+) is the largest
// 2. number(+) it self is the largest
// 3. number(-) * prevMin(-) is the largest
var maxProduct = function (nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i]);
    curMin = Math.min(nums[i], prevMax * nums[i], prevMin * nums[i]);

    prevMax = curMax;
    prevMin = curMin;

    ans = Math.max(ans, curMax);
  }
  return ans;
};

// the max product under conditions:1. +number times +number; 2.-numbers times -numbers; 3.number itself
// hence, we will track 1. max number; 2.min number
// Dynamic compare, min, max;
//

//the wau of generating largest product: 1, +times+; 2. -times-; 3.itself
//kadane's algo. whinin one loop
//find min num
//find max num
//
var maxProduct2 = function (nums) {

};
const nums1 = [2, 3, -2, 4];
// Output: 6

const nums2 = [-2, 0, -1];
// Output: 0

const nums3 = [2, -5, -2, -4, 3];
// Output: 24

console.log("maxProduct: ", maxProduct(nums3));
console.log("maxProduct2: ", maxProduct2(nums3));
