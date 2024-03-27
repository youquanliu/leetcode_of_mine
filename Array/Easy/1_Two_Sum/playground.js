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

var twoSum1 = function (nums, target) {};
var twoSum2 = function (nums, target) {};

//One Loop
var twoSum3 = function (nums, target) {};

let sub = "bce";
let ori = "abcde";

const subsequence = (sub, ori) => {
  let oriIndex = 0,
    subIndex = 0;

  while (oriIndex < ori.length && subIndex < sub.length) {
    if (ori[oriIndex] === sub[subIndex]) {
      subIndex++;
    }
    oriIndex++;
  }
  return subIndex == sub.length;
};

let nums = [3, 1, 2, 7, 4, 2, 1, 1, 5];
let k = 8;

var findLength = function (nums, k) {
  let left = 0,
    answer = 0,
    current = 0;

  for (let right = 0; right < nums.length; right++) {
    current += nums[right];
    console.log("above while", current);
    while (current > k) {
      console.log("inside while", current);

      current -= nums[left];
      left++;
    }
    console.log("outside while", current);

    answer = Math.max(answer, right - left + 1);
  }d
  return answer;
};

var findLength2 = function (nums, k) {
  // curr is the current sum of the window
  let left = 0,
    curr = 0,
    ans = 0;
  for (let right = 0; right < nums.length; right++) {
    curr += nums[right];
    while (curr > k) {
      curr -= nums[left];
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};

//output [1,3]
console.log(findLength(nums, k));
