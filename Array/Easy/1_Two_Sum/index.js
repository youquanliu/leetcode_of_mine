// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

//brute force using indexOf
var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    let found = nums.indexOf(complement, i + 1);
    if (found !== -1) {
      return [i, found];
    }
  }
};

//Hashmap store complement
var twoSum2 = function (nums, target) {
  if (nums.length === 2) return [0, 1];
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }
  console.log(obj);
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    let found = obj[complement];

    if (found !== undefined && found != i) {
      return [i, found];
    }
  }
  return [0, 0];
};

var nums = [2, 1, 3, 8, 7, 3];
var target = 6;

// y = target - x

let two = (nums, target) => {};

console.log("--------twoSum2: ", twoSum2(nums, target));
console.log("--------two: ", two(nums, target));
