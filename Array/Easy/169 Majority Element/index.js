// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
  let obj = {};
  let max = 0;
  let target = 0;
  for (const num of nums) {
    obj[num] = obj[num] + 1 || 1;

    if (obj[num] > max) {
      max = obj[num];
      target = num;
    }
  }

  return target;
};

var majorityElement2 = function (nums) {
  let count = 0;
  let candidate;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
};

const nums1 = [2, 2, 1, 1, 1, 2, 2];
// Output: 2
const nums2 = [3, 2, 3];
// Output: 3
const nums3 = [3, 3, 4];
// Output: 3
const nums4 = [6, 5, 5];
// Output: 5

//set a candidate and count the time of apperance of it
const ma = (nums) => {};

console.log("majorityElement: ", majorityElement(nums4));
console.log("ma: ", ma(nums4));
