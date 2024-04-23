// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

//************************* */
//calulate left of i product 0~i-1
//calulate right of i product i-1 ~ n.length -1
//mutiply left and right, store it in new array i

// Initialize the length of the input array nums to n.

// Create two arrays, prefix and suffix, both initialized with ones and having the same length as nums. These arrays will hold the products of elements before and after each index in the nums array.

// Calculate the prefix products. This loop starts from index 1 and goes up to n - 1. For each index i, prefix[i] is assigned the product of all elements before nums[i].

// Calculate the suffix products. This loop starts from the second-to-last index (n - 2) and goes backward down to 0. For each index i, suffix[i] is assigned the product of all elements after nums[i].

// Multiply the corresponding prefix and suffix products for each index to get the final result. This is done by iterating over each index i and calculating prefix[i] * suffix[i].

// Return the answer, which is the list containing the products of all elements except the element at each index.
var productExceptSelf = function (nums) {
  let n = nums.length;

  const left = new Array(n).fill(1);
  const right = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  let result = [];
  for (let i = 0; i < n; i++) {
    result[i] = right[i] * left[i];
  }

  return result;
};

//Brute force
let productExceptSelf2 = (nums) => {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let newNum = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) newNum *= nums[j];
    }
    res = [...res, newNum];
  }
  return res;
};

let product = (nums) => {
  
};
const nums1 = [2, 3, 4, 5];
// Output: 60,40,30,24]

const nums2 = [1, 1, 0, 3, 3];
// Output: [0,0,9,0,0]

console.log("productExceptSelf: ", productExceptSelf(nums1));
console.log("product: ", product(nums1));
